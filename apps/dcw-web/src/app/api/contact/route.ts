type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  body?: unknown;
  website?: unknown;
};

const MAX_REQUEST_BYTES = 12_000;

function jsonResponse(body: Record<string, unknown>, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

async function readBoundedBody(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return { tooLarge: true as const };
  }

  const reader = request.body?.getReader();
  if (!reader) return { tooLarge: false as const, text: "" };

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      return { tooLarge: true as const };
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return {
    tooLarge: false as const,
    text: new TextDecoder("utf-8", { fatal: true }).decode(body),
  };
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let rawBody: string;
  try {
    const body = await readBoundedBody(request);
    if (body.tooLarge) {
      return jsonResponse({ ok: false, error: "The message is too large. Please shorten it and try again." }, { status: 413 });
    }
    rawBody = body.text;
  } catch {
    return jsonResponse({ ok: false, error: "Please submit the contact form again." }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ ok: false, error: "The message is too large. Please shorten it and try again." }, { status: 413 });
  }

  let data: Payload;
  try {
    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Invalid payload");
    }
    data = parsed as Payload;
  } catch {
    return jsonResponse({ ok: false, error: "Please submit the contact form again." }, { status: 400 });
  }

  if (typeof data.website === "string" && data.website.trim()) {
    return jsonResponse({ ok: true });
  }
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const subject = typeof data.subject === "string" ? data.subject.trim() : "";
  const body = typeof data.body === "string" ? data.body.trim() : "";
  if (name.length < 2 || name.length > 120 || !isEmail(email) || email.length > 254 || subject.length < 3 || subject.length > 140 || body.length < 20 || body.length > 5000) {
    return jsonResponse({ ok: false, error: "Please complete name, email, subject, and a longer message." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const webhookUrl = new URL(webhook);
      const isLoopback = webhookUrl.hostname === "localhost" || webhookUrl.hostname === "127.0.0.1" || webhookUrl.hostname === "::1";
      if ((webhookUrl.protocol !== "https:" && !isLoopback) || webhookUrl.username || webhookUrl.password) {
        throw new Error("Unsupported webhook URL");
      }
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, subject, body, source: "dcw-web" }),
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
        redirect: "error",
      });
      if (response.ok) {
        return jsonResponse({ ok: true });
      }
    } catch {
      // Return the same safe delivery error for network failures and non-2xx responses.
    }
    return jsonResponse({ ok: false, error: "Delivery failed. Please try again later." }, { status: 502 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    return jsonResponse(
      { ok: false, error: "Contact delivery is not configured yet. Please try again later." },
      { status: 503 },
    );
  }
  const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${body}`)}`;
  return jsonResponse({ ok: true, mailto });
}
