"use client";

import { useState, type FormEvent } from "react";

type State = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [mailto, setMailto] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string; mailto?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? "The message could not be sent.");
      }
      setMailto(payload.mailto ?? null);
      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The message could not be sent.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <Field label="Name" name="name" required maxLength={120} autoComplete="name" />
      <Field label="Email" name="email" type="email" required maxLength={254} autoComplete="email" />
      <Field label="Subject" name="subject" required maxLength={140} />
      <label className="block text-sm font-semibold">
        Message
        <textarea
          name="body"
          required
          minLength={20}
          maxLength={5000}
          rows={6}
          id="body"
          className="mt-1 w-full rounded-md border border-[color:var(--line-strong)] bg-[color:var(--surface)] px-3 py-2 text-base font-normal"
        />
      </label>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-11 min-w-32 items-center justify-center rounded-full bg-[color:var(--ink)] px-5 text-sm font-semibold text-[color:var(--canvas)] disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>
      <div aria-live="polite" className="min-h-6 text-sm">
        {state === "success" ? (
          <p>
            {mailto ? (
              <>
                Review and send your message from your email app using this{" "}
                <a className="font-semibold underline" href={mailto}>
                  email draft
                </a>.
              </>
            ) : (
              "Your message was accepted for delivery."
            )}
          </p>
        ) : null}
        {state === "error" ? <p className="text-[color:var(--danger)]">{message}</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-md border border-[color:var(--line-strong)] bg-[color:var(--surface)] px-3 py-2 text-base font-normal"
      />
    </label>
  );
}
