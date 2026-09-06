"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-4xl">Something failed.</h1>
      <p className="mt-4 text-[color:var(--ink-muted)]">The page could not be rendered. Try again.</p>
      <button type="button" onClick={reset} className="mt-6 font-semibold">
        Retry
      </button>
    </main>
  );
}
