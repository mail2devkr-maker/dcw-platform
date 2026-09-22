import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="dcw-page mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--accent)]">404</p>
      <h1 className="font-display mt-3 text-4xl">This page is not here.</h1>
      <p className="mt-4 text-[color:var(--ink-muted)]">The address may have moved, or it never existed.</p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[color:var(--accent)] px-5 font-semibold text-[#041014]">
        Return home
      </Link>
    </main>
  );
}
