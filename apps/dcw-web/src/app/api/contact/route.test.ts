import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "./route.ts";

const validPayload = {
  name: "Alex Example",
  email: "alex@example.test",
  subject: "Product collaboration",
  body: "I would like to discuss a possible product collaboration with DCW.",
};

function restoreEnv(name: string, value: string | undefined) {
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
}

test("contact route reports unavailable delivery instead of claiming a send", async (t) => {
  const previousWebhook = process.env.CONTACT_WEBHOOK_URL;
  const previousEmail = process.env.CONTACT_TO_EMAIL;
  t.after(() => {
    restoreEnv("CONTACT_WEBHOOK_URL", previousWebhook);
    restoreEnv("CONTACT_TO_EMAIL", previousEmail);
  });
  delete process.env.CONTACT_WEBHOOK_URL;
  delete process.env.CONTACT_TO_EMAIL;

  const response = await POST(new Request("https://dcw.co.in/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(validPayload),
  }));

  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("contact route offers a mail draft without claiming the message was sent", async (t) => {
  const previousWebhook = process.env.CONTACT_WEBHOOK_URL;
  const previousEmail = process.env.CONTACT_TO_EMAIL;
  t.after(() => {
    restoreEnv("CONTACT_WEBHOOK_URL", previousWebhook);
    restoreEnv("CONTACT_TO_EMAIL", previousEmail);
  });
  delete process.env.CONTACT_WEBHOOK_URL;
  process.env.CONTACT_TO_EMAIL = "hello@example.test";

  const response = await POST(new Request("https://dcw.co.in/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(validPayload),
  }));
  const payload = await response.json();

  assert.equal(response.status, 200);
  assert.equal(payload.ok, true);
  assert.match(payload.mailto, /^mailto:/);
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("contact route rejects malformed and oversized requests", async () => {
  const malformed = await POST(new Request("https://dcw.co.in/api/contact", {
    method: "POST",
    body: "{",
  }));
  const oversized = await POST(new Request("https://dcw.co.in/api/contact", {
    method: "POST",
    body: JSON.stringify({ ...validPayload, body: "x".repeat(13_000) }),
  }));

  assert.equal(malformed.status, 400);
  assert.equal(oversized.status, 413);
});

test("contact route rejects malformed webhook configuration without making a request", async (t) => {
  const previousWebhook = process.env.CONTACT_WEBHOOK_URL;
  const previousEmail = process.env.CONTACT_TO_EMAIL;
  t.after(() => {
    restoreEnv("CONTACT_WEBHOOK_URL", previousWebhook);
    restoreEnv("CONTACT_TO_EMAIL", previousEmail);
  });
  process.env.CONTACT_WEBHOOK_URL = "javascript:alert(1)";
  delete process.env.CONTACT_TO_EMAIL;

  const response = await POST(new Request("https://dcw.co.in/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(validPayload),
  }));

  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});

test("contact route stops reading an oversized streamed body as soon as it crosses the limit", async () => {
  let chunksRead = 0;
  let cancelled = false;
  const body = new ReadableStream<Uint8Array>(
    {
      pull(controller) {
        chunksRead += 1;
        controller.enqueue(new Uint8Array(chunksRead === 1 ? 8_000 : 5_000));
      },
      cancel() {
        cancelled = true;
      },
    },
    { highWaterMark: 0 },
  );

  const response = await POST({ headers: new Headers(), body } as Request);

  assert.equal(response.status, 413);
  assert.equal(chunksRead, 2);
  assert.equal(cancelled, true);
});
