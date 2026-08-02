"use client";

import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import type { Locale, PortfolioContent } from "../content";

type Status = "idle" | "submitting" | "success" | "error" | "validation";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export default function ContactFormClient({
  locale,
  labels,
}: {
  locale: Locale;
  labels: PortfolioContent["contact"]["form"];
}) {
  const startedAt = useRef(Date.now());
  const submissionId = useRef<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const formIsValid =
    form.name.trim().length >= 2 &&
    emailIsValid &&
    form.message.trim().length >= 10 &&
    form.message.trim().length <= 3000;

  function updateField(field: keyof FormState, value: string) {
    setStatus("idle");
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formIsValid) {
      setStatus("validation");
      return;
    }

    setStatus("submitting");
    submissionId.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale,
          submissionId: submissionId.current,
          startedAt: startedAt.current,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(EMPTY_FORM);
      submissionId.current = null;
      startedAt.current = Date.now();
    } catch {
      setStatus("error");
    }
  }

  const showEmailError = form.email.length > 0 && !emailIsValid;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-trap" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="name">{labels.name}</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={labels.namePlaceholder}
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">{labels.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder={labels.emailPlaceholder}
            autoComplete="email"
            inputMode="email"
            aria-invalid={showEmailError}
            aria-describedby={showEmailError ? "email-error" : undefined}
            maxLength={254}
            required
          />
          {showEmailError && (
            <span id="email-error" className="field-error">
              {labels.emailValidation}
            </span>
          )}
        </div>
      </div>

      <div className="field-group">
        <div className="field-label-row">
          <label htmlFor="message">{labels.message}</label>
          <span>{labels.messageHint}</span>
        </div>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={labels.messagePlaceholder}
          rows={6}
          minLength={10}
          maxLength={3000}
          required
        />
      </div>

      <div className="form-footer">
        <div className="form-status" aria-live="polite">
          {status === "success" && (
            <span className="status-message status-success">
              <CheckCircle2 aria-hidden="true" />
              {labels.success}
            </span>
          )}
          {status === "error" && (
            <span className="status-message status-error">
              <AlertCircle aria-hidden="true" />
              {labels.error}
            </span>
          )}
          {status === "validation" && (
            <span className="status-message status-error">
              <AlertCircle aria-hidden="true" />
              {labels.validation}
            </span>
          )}
        </div>

        <button className="button form-submit" type="submit" disabled={status === "submitting"}>
          {status === "submitting" && <LoaderCircle className="spinner" aria-hidden="true" />}
          {status === "submitting" ? labels.submitting : labels.submit}
        </button>
      </div>
    </form>
  );
}
