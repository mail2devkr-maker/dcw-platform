import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  body?: string;
  website?: string;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const data = (await request.json()) as Payload;
  if (data.website) {
    return NextResponse.json({ ok: true });
  }
  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const subject = data.subject?.trim() ?? "";
  const body = data.body?.trim() ?? "";
  if (name.length < 2 || !isEmail(email) || subject.length < 3 || body.length < 20) {
    return NextResponse.json({ ok: false, error: "Please complete name, email, subject, and a longer message." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, subject, body, source: "dcw-web" }),
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Delivery failed. Try again or use email." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const mailto = to
    ? `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${body}`)}`
    : null;
  return NextResponse.json({ ok: true, mailto });
}
