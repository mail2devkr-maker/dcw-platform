import Link from "next/link";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Security Model — IRISH Master AI",
  description: "Defense-in-depth security model for IRISH: local execution boundaries, finite worker permissions, cryptographic validation, and privilege segregation.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Security & Risk Boundaries</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Security through bounded authority and explicit gates.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-muted)]">
            Autonomous systems fail catastrophically when granted open-ended authority. IRISH enforces defense-in-depth:
            specialists are bounded by construction, prompt inputs never grant extra privileges, and code publication
            is locked behind human owner approval.
          </p>
        </div>

        {/* Security Pillars */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Defense-In-Depth</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">
            Core Security Guarantees
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">GUARANTEE 01</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Local Boundary Enforcement</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                The IRISH supervisor runs locally. Source files are read directly from local git repositories and never
                sent to hosted database clusters or shared multi-tenant SaaS backends.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">GUARANTEE 02</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Prompt Injection Mitigation</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                Instructions provided in issues or chat cannot elevate privileges, override file scope locks, or trigger
                remote actions. Instructions are parsed as data within the bounded specialist schema.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">GUARANTEE 03</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Zero Silent Remote Writes</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                Direct pushes to primary git branches (main/master) are blocked at the daemon layer. All code publication
                takes the form of reviewable GitHub pull requests following explicit owner approval.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <span className="font-mono text-xs text-[color:var(--accent)]">GUARANTEE 04</span>
              <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">Secret Sanitization</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                Diff outputs and intermediate logs are scanned by automated heuristic analyzers to detect and prevent
                leakage of API keys, tokens, environment secrets, or private credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Isolation of Privileged Endpoints */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Network Isolation</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">
            Isolation of Privileged Control Surfaces
          </h2>
          <div className="mt-6 rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6">
            <p className="text-sm leading-relaxed text-[color:var(--ink-muted)]">
              DCW maintains a strict architectural policy: privileged control endpoints such as{" "}
              <code className="font-mono text-xs text-yellow-400">mcp.dcw.co.in</code> (Model Context Protocol endpoint)
              and <code className="font-mono text-xs text-yellow-400">auth.dcw.co.in</code> (Owner OAuth server) are
              private control mechanisms that require authenticated, signed access.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-muted)]">
              These privileged hosts are completely isolated from this public website (<code className="font-mono text-xs text-[color:var(--accent)]">irish.dcw.co.in</code>)
              and <code className="font-mono text-xs text-[color:var(--accent)]">dcw.co.in</code>. They share no credentials, sessions, or execution paths.
            </p>
          </div>
        </section>

        {/* Security Contact */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Vulnerability Reporting</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">Coordinated Disclosure</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-muted)]">
            If you discover a security vulnerability in any DCW or IRISH software, report it directly through our
            contact channel. We appreciate responsible disclosure and investigate all valid reports promptly.
          </p>
          <div className="mt-8">
            <Link
              href="/docs"
              className="inline-flex min-h-10 items-center rounded-full bg-[color:var(--accent)] px-5 text-xs font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
            >
              Explore Documentation & FAQ →
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
