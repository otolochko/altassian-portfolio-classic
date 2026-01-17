import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const authHeader = process.env.N8N_AUTH_HEADER;

  if (!webhookUrl || !authHeader) {
    return NextResponse.json(
      { error: "n8n webhook URL or auth header is not defined." },
      { status: 500 },
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { name, email, message } = payload;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      return NextResponse.json(
        {
          error: "Webhook request failed.",
          status: response.status,
          detail,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
