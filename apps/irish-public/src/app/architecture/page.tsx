import Link from "next/link";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Architecture — IRISH Master AI",
  description: "Technical architecture of the IRISH local-first AI system: supervisor daemon, bounded specialist sandboxes, evidence pipelines, and host privilege isolation.",
  path: "/architecture",
});

export default function ArchitecturePage() {
  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>System Architecture</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Designed for local sovereignty and bounded execution.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-muted)]">
            IRISH separates planning, execution, validation, and publication into isolated tiers. No single specialist
            has unbounded authority, and privileged control infrastructure remains strictly segregated from public
            web properties.
          </p>
        </div>

        {/* Tier Diagram / Architecture Layout */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Runtime Topology</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">The Four Architectural Tiers</h2>

          <div className="mt-10 space-y-6">
            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-3">
                <span className="font-mono text-xs font-semibold text-[color:var(--accent)]">TIER 01: SUPERVISOR & DAEMON</span>
                <span className="font-mono text-xs text-[color:var(--ink-muted)]">Local Control Plane</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                Runs as a local process on the developer’s workstation. It maintains durable project contracts, tracks
                mission state machines, supervises specialist workers, and enforces permission boundaries. The supervisor
                holds the only handle to approval dispatchers.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-3">
                <span className="font-mono text-xs font-semibold text-[color:var(--accent)]">TIER 02: SPECIALIST EXECUTION SANDBOX</span>
                <span className="font-mono text-xs text-[color:var(--ink-muted)]">Bounded Worker Layer</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                Specialists are instantiated in ephemeral git worktrees with strict read/write masks. They receive clear
                mission instructions and cannot modify files outside the declared scope. Model completions are translated
                into bounded file mutations, never direct system shell execution.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-3">
                <span className="font-mono text-xs font-semibold text-[color:var(--accent)]">TIER 03: EVIDENCE & VALIDATION ENGINE</span>
                <span className="font-mono text-xs text-[color:var(--ink-muted)]">Automated Verification</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                Before any mission can reach the review state, the validation engine executes the project’s native test
                runners, typecheckers, and linters. It records exit codes, duration, and terminal logs, creating an
                immutable cryptographic evidence package.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-3">
                <span className="font-mono text-xs font-semibold text-[color:var(--accent)]">TIER 04: CANONICAL PUBLICATION GATEWAY</span>
                <span className="font-mono text-xs text-[color:var(--ink-muted)]">Remote Sync (GitHub)</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                Publication occurs only after explicit owner approval. Changes are pushed to a named remote branch and
                opened as a standard GitHub pull request. Direct pushes to main/master branches are blocked by policy.
              </p>
            </div>
          </div>
        </section>

        {/* Privilege Segregation */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Security Boundary</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">
            Strict Infrastructure Segregation
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[color:var(--ink-muted)]">
            A fundamental invariant of the DCW architecture is the hard separation between public marketing/preview
            surfaces and privileged operational endpoints.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">PUBLIC SURFACES (READ-ONLY)</span>
              <ul className="mt-4 space-y-3 font-mono text-xs text-[color:var(--ink-muted)]">
                <li className="flex items-center justify-between">
                  <span>dcw.co.in</span>
                  <span className="text-[color:var(--ok)]">Parent Brand</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>irish.dcw.co.in</span>
                  <span className="text-[color:var(--ok)]">Product & Read-Only Demo</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Authority:</span>
                  <span>Public Vercel / Cloudflare</span>
                </li>
              </ul>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
              <span className="font-mono text-xs text-yellow-400">PRIVILEGED ENDPOINTS (ISOLATED)</span>
              <ul className="mt-4 space-y-3 font-mono text-xs text-[color:var(--ink-muted)]">
                <li className="flex items-center justify-between">
                  <span>mcp.dcw.co.in</span>
                  <span className="text-yellow-400">Owner-Only MCP Server</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>auth.dcw.co.in</span>
                  <span className="text-yellow-400">Owner Identity & OAuth</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Authority:</span>
                  <span>Direct Private Daemon Tunnel</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-[color:var(--ink-muted)]">
            Public websites have no write access, credential visibility, or routing paths into the privileged IRISH
            infrastructure.
          </p>
        </section>

        {/* Navigation CTAs */}
        <div className="mt-16 flex flex-wrap gap-4 border-t border-[color:var(--line)] pt-8">
          <Link
            href="/security"
            className="inline-flex min-h-10 items-center rounded-full bg-[color:var(--accent)] px-5 text-xs font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
          >
            Read Security Model →
          </Link>
          <Link
            href="/demo"
            className="inline-flex min-h-10 items-center rounded-full border border-[color:var(--line-strong)] px-5 text-xs font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)]"
          >
            Interactive Demo
          </Link>
        </div>
      </Container>
    </main>
  );
}
