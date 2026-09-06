import Link from "next/link";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Product — IRISH Master AI",
  description: "A local-first engineering agent that plans missions, executes bounded specialist work, records evidence, and asks for owner approval before publication.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Product Deep Dive</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Software engineering without hallucinated authority.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-muted)]">
            Most AI coding tools treat the developer as a bystander or grant unconstrained execution access to the
            machine. IRISH introduces mission contracts: typed intent, bounded specialist workers, deterministic
            validation, and explicit approval before remote publication.
          </p>
        </div>

        {/* The Specialist Model */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Specialist Architecture</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">
            The Developer Specialist: Vertical 01
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-muted)]">
            Rather than relying on generic reasoning loops, IRISH deploys specialized workers tailored for specific
            engineering verticals. The Developer Specialist is the first live vertical, focused entirely on the
            issue-to-PR workflow.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">PHASE 01</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Issue Ingestion & Planning</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                The specialist reads the target issue, maps file dependencies, isolates the affected files, and creates
                a step-by-step mission graph before modifying any code.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">PHASE 02</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Sandboxed Modification</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                Modifications happen in an isolated working tree. The specialist writes implementation code and companion
                unit tests, restricted from touching out-of-scope files or parent directories.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">PHASE 03</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Machine Validation</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                The local daemon executes typecheck, linting, and regression tests. If any check fails, the specialist
                iterates against the error logs until the suite passes or flags the blocker.
              </p>
            </div>
          </div>
        </section>

        {/* Key Product Pillars */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Core Capabilities</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">
            Built for production repositories
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">Local-First Storage & Processing</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)] leading-relaxed">
                Your codebase is not uploaded to cloud database clusters or used for model training. The IRISH daemon
                runs locally on your system, interacting directly with your local git trees and development tools.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">Deterministic Evidence Packages</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)] leading-relaxed">
                Every mission generates a permanent audit package: git diffs, test logs, runtime stats, and SHA256
                hashes. You never have to guess what was touched or whether tests were actually executed.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">Owner-Controlled Publication</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)] leading-relaxed">
                Zero silent git pushes. Once validation passes, the mission enters the Approval Center. Publication
                creates a standard pull request on GitHub, keeping code review intact.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">Replaceable Model Routing</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)] leading-relaxed">
                Avoid vendor lock-in. IRISH abstracts model reasoning behind standardized adapters, allowing you to route
                planning, diff generation, and reviews across Anthropic, OpenAI, or local models.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="mt-16 rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-8 sm:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-2xl text-[color:var(--ink)]">See IRISH in action</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Explore the live read-only Command Center demo or inspect our architectural boundary guarantees.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[color:var(--accent)] px-5 text-xs font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
              >
                Launch demo →
              </Link>
              <Link
                href="/architecture"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[color:var(--line-strong)] px-5 text-xs font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)]"
              >
                Architecture
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
