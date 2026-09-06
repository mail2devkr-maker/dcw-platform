import Link from "next/link";
import { Container } from "@dcw/ui";

export default function NotFound() {
  return (
    <main id="main" className="py-24">
      <Container>
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-[color:var(--accent)]">404 — Not Found</p>
        <h1 className="font-display mt-3 text-4xl text-[color:var(--ink)]">This surface does not exist.</h1>
        <p className="mt-4 max-w-xl text-[color:var(--ink-muted)]">
          The requested address is not mapped to any public IRISH surface.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[color:var(--line-strong)] px-5 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)]"
          >
            Return to IRISH Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
