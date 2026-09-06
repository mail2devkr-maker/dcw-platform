import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--accent)]">404</p>
      <h1 className="font-display mt-3 text-4xl">This page is not here.</h1>
      <p className="mt-4 text-[color:var(--ink-muted)]">The address may have moved, or it never existed.</p>
      <Link href="/" className="mt-6 inline-flex font-semibold">
        Return home
      </Link>
    </main>
  );
}
