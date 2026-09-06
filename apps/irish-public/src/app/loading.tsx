export default function Loading() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)]" />
        <p className="font-mono text-sm tracking-wide text-[color:var(--ink-muted)]">IRISH runtime initializing…</p>
      </div>
    </main>
  );
}
