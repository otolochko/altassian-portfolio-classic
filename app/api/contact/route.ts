import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactRequest } from "../../content";
import { isLocale } from "../../content";

const MAX_BODY_BYTES = 16_000;
const MIN_FORM_AGE_MS = 1_500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

type ContactErrorCode = "VALIDATION" | "RATE_LIMIT" | "DELIVERY";

function errorResponse(code: ContactErrorCode, status: number) {
  return NextResponse.json({ ok: false, code }, { status });
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function validatePayload(value: unknown): ContactRequest | null {
  if (!value || typeof value !== "object") return null;

  const payload = value as Record<string, unknown>;
  const name = isString(payload.name) ? payload.name.trim() : "";
  const email = isString(payload.email) ? payload.email.trim().toLowerCase() : "";
  const message = isString(payload.message) ? payload.message.trim() : "";
  const website = isString(payload.website) ? payload.website.trim() : "";
  const locale = isString(payload.locale) ? payload.locale : "";
  const submissionId = isString(payload.submissionId) ? payload.submissionId : "";
  const startedAt = payload.startedAt;

  const formAge = typeof startedAt === "number" ? Date.now() - startedAt : -1;

  if (
    name.length < 2 ||
    name.length > 80 ||
    email.length > 254 ||
    !EMAIL_PATTERN.test(email) ||
    message.length < 10 ||
    message.length > 3000 ||
    website.length > 0 ||
    !isLocale(locale) ||
    !UUID_PATTERN.test(submissionId) ||
    typeof startedAt !== "number" ||
    !Number.isFinite(startedAt) ||
    formAge < MIN_FORM_AGE_MS ||
    formAge > MAX_FORM_AGE_MS
  ) {
    return null;
  }

  return {
    name,
    email,
    message,
    website,
    locale,
    submissionId,
    startedAt,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildHtmlEmail(payload: ContactRequest) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const message = escapeHtml(payload.message).replaceAll("\n", "<br />");

  return `
    <div style="background:#f3f0e9;padding:32px;font-family:Arial,sans-serif;color:#171719">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d8d4cb">
        <div style="padding:24px 28px;border-bottom:1px solid #e1ddd4">
          <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#285ed8">
            Portfolio inquiry · ${payload.locale.toUpperCase()}
          </div>
          <h1 style="margin:12px 0 0;font-size:24px;line-height:1.25;font-weight:600">
            New message from ${name}
          </h1>
        </div>
        <div style="padding:28px">
          <p style="margin:0 0 8px;font-size:12px;color:#676762;text-transform:uppercase">Reply to</p>
          <p style="margin:0 0 28px;font-size:16px"><a href="mailto:${email}" style="color:#285ed8">${email}</a></p>
          <p style="margin:0 0 8px;font-size:12px;color:#676762;text-transform:uppercase">Message</p>
          <div style="font-size:16px;line-height:1.65">${message}</div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type");
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (
    !contentType?.includes("application/json") ||
    !Number.isFinite(contentLength) ||
    contentLength > MAX_BODY_BYTES
  ) {
    return errorResponse("VALIDATION", 400);
  }

  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return errorResponse("VALIDATION", 400);
  }

  const payload = validatePayload(rawPayload);
  if (!payload) return errorResponse("VALIDATION", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact delivery is not configured.");
    return errorResponse("DELIVERY", 503);
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send(
      {
        from,
        to,
        replyTo: payload.email,
        subject: `Portfolio inquiry from ${payload.name}`,
        text: [
          `Portfolio inquiry (${payload.locale.toUpperCase()})`,
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          "",
          payload.message,
        ].join("\n"),
        html: buildHtmlEmail(payload),
      },
      {
        idempotencyKey: `portfolio-contact/${payload.submissionId}`,
      },
    );

    if (error) {
      console.error("Resend delivery failed:", error.name);
      const status = error.name === "rate_limit_exceeded" ? 429 : 502;
      const code: ContactErrorCode = status === 429 ? "RATE_LIMIT" : "DELIVERY";
      return errorResponse(code, status);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected contact delivery failure:", error);
    return errorResponse("DELIVERY", 502);
  }
}
