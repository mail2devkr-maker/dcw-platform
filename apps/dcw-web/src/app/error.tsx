"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="dcw-page mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-4xl">Something went wrong.</h1>
      <p className="mt-4 text-[color:var(--ink-muted)]">The page could not be rendered. Try again.</p>
      <button type="button" onClick={reset} className="mt-6 min-h-11 rounded-full border border-[color:var(--line-strong)] px-5 font-semibold focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]">
        Retry
      </button>
    </main>
  );
}
