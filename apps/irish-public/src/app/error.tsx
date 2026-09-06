"use client";

import { Container } from "@dcw/ui";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="py-24">
      <Container>
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-[color:var(--danger)]">Execution Boundary Interrupted</p>
        <h1 className="font-display mt-3 text-4xl text-[color:var(--ink)]">Something failed.</h1>
        <p className="mt-4 max-w-xl text-[color:var(--ink-muted)]">
          The requested surface could not complete rendering. The underlying state has been preserved.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
        >
          Retry
        </button>
      </Container>
    </main>
  );
}
