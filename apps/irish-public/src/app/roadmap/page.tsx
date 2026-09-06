import Link from "next/link";
import { capabilitiesByStatus, statusLabel } from "@dcw/brand";
import { Container, Eyebrow, StatusBadge } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Roadmap & Capability Posture — IRISH Master AI",
  description: "Transparent breakdown of verified live features, in-development systems, and planned milestones for IRISH Master AI.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  const live = capabilitiesByStatus("live");
  const inDev = capabilitiesByStatus("in-development");
  const planned = capabilitiesByStatus("planned");

  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Capability Honesty</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Verified status and engineering roadmap.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-muted)]">
            We do not sell theatre or present prototype code as production readiness. Every capability claim on this
            page is anchored in automated tests and verifiable code state.
          </p>
        </div>

        {/* Status Definition Callout */}
        <div className="mt-12 grid gap-4 rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:grid-cols-3">
          <div>
            <StatusBadge tone="live">{statusLabel.live}</StatusBadge>
            <p className="mt-2 text-xs text-[color:var(--ink-muted)]">
              Implemented with unit and integration tests passing in the local codebase.
            </p>
          </div>
          <div>
            <StatusBadge tone="dev">{statusLabel["in-development"]}</StatusBadge>
            <p className="mt-2 text-xs text-[color:var(--ink-muted)]">
              Active engineering in progress; architecture designed; public live gate not yet claimed.
            </p>
          </div>
          <div>
            <StatusBadge tone="planned">{statusLabel.planned}</StatusBadge>
            <p className="mt-2 text-xs text-[color:var(--ink-muted)]">
              Specified in design docs; blocked until prerequisite verification gates pass.
            </p>
          </div>
        </div>

        {/* Section 1: Live / Verified */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <div className="flex items-center gap-3">
            <StatusBadge tone="live">{statusLabel.live}</StatusBadge>
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Verified Capabilities ({live.length})</h2>
          </div>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
            These systems are implemented, tested, and actively operating in the local control runtime.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {live.map((item) => (
              <div key={item.id} className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">{item.name}</h3>
                  <span className="font-mono text-[10px] text-[color:var(--ok)]">VERIFIED</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: In Development */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <div className="flex items-center gap-3">
            <StatusBadge tone="dev">{statusLabel["in-development"]}</StatusBadge>
            <h2 className="font-display text-2xl text-[color:var(--ink)]">In Development ({inDev.length})</h2>
          </div>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
            Active engineering efforts currently undergoing stabilization, security hardening, and test expansion.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {inDev.map((item) => (
              <div key={item.id} className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">{item.name}</h3>
                  <span className="font-mono text-[10px] text-[color:var(--accent)]">IN PROGRESS</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Planned */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <div className="flex items-center gap-3">
            <StatusBadge tone="planned">{statusLabel.planned}</StatusBadge>
            <h2 className="font-display text-2xl text-[color:var(--ink)]">Planned Milestones ({planned.length})</h2>
          </div>
          <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
            Architecturally specified features held behind formal verification gates.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {planned.map((item) => (
              <div key={item.id} className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">{item.name}</h3>
                  <span className="font-mono text-[10px] text-[color:var(--ink-muted)]">GATED</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">{item.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded border border-yellow-500/30 bg-yellow-500/5 p-6">
            <p className="font-mono text-xs font-semibold text-yellow-400">SPECIFIC GATE DISCLOSURE: WEB INTELLIGENCE</p>
            <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
              Web Intelligence remains strictly in the <strong>Planned</strong> state. It is blocked until reliable,
              grounded citation pipelines pass automated regression benchmarks and prevent hallucinated network references.
              We do not claim Web Intelligence as live in this development preview.
            </p>
          </div>
        </section>

        {/* Next Actions */}
        <div className="mt-16 flex flex-wrap gap-4 border-t border-[color:var(--line)] pt-8">
          <Link
            href="/demo"
            className="inline-flex min-h-10 items-center rounded-full bg-[color:var(--accent)] px-5 text-xs font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
          >
            Inspect Interactive Demo →
          </Link>
          <Link
            href="/docs"
            className="inline-flex min-h-10 items-center rounded-full border border-[color:var(--line-strong)] px-5 text-xs font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)]"
          >
            Read Documentation
          </Link>
        </div>
      </Container>
    </main>
  );
}
