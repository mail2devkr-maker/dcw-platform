import Link from "next/link";
import { capabilitiesByStatus, IRISH, siteUrl, statusLabel } from "@dcw/brand";
import { Container, Eyebrow, StatusBadge } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: `${IRISH.name} — ${IRISH.productLine}`,
  description: "Local-first AI for software engineering missions: planning, bounded specialist execution, evidence, validation, and owner approval before publication.",
  path: "/",
});

export default function HomePage() {
  const liveCapabilities = capabilitiesByStatus("live");
  const devCapabilities = capabilitiesByStatus("in-development");
  const plannedCapabilities = capabilitiesByStatus("planned");

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="border-b border-[color:var(--line)]">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Master AI, presented by DCW</Eyebrow>
            <StatusBadge tone="dev">{IRISH.status}</StatusBadge>
          </div>
          <h1 className="font-display mt-6 max-w-4xl text-4xl leading-[1.08] tracking-tight text-[color:var(--ink)] sm:text-6xl">
            Local-first AI for software missions that cannot afford hallucinated authority.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-muted)]">
            IRISH plans missions, executes bounded specialist work, records verifiable evidence, and pauses for owner
            approval before any remote publication. Your source stays on your machine. GitHub remains canonical.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
            >
              Launch interactive demo →
            </Link>
            <Link
              href="/architecture"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--line-strong)] px-6 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)]"
            >
              System architecture
            </Link>
          </div>
        </Container>
      </section>

      {/* Core Invariants */}
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Engineering Invariants</Eyebrow>
          <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)]">Principles that govern every mission</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-[color:var(--line)] bg-[color:var(--canvas)] p-6">
              <p className="font-mono text-xs tracking-wider text-[color:var(--accent)]">01 / SOVEREIGNTY</p>
              <h3 className="mt-3 font-semibold text-[color:var(--ink)]">Local source ownership</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Filesystem access is local-first. Repositories are not copied to cloud multi-tenant stores. Working
                trees remain under your direct control.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--canvas)] p-6">
              <p className="font-mono text-xs tracking-wider text-[color:var(--accent)]">02 / BOUNDED AGENTS</p>
              <h3 className="mt-3 font-semibold text-[color:var(--ink)]">Specialists, not generalists</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Specialists run in scoped sandboxes with explicit instructions and tool boundaries. A specialist cannot
                grant itself higher permissions.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--canvas)] p-6">
              <p className="font-mono text-xs tracking-wider text-[color:var(--accent)]">03 / VERIFICATION</p>
              <h3 className="mt-3 font-semibold text-[color:var(--ink)]">Evidence before claims</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Work is not complete because an LLM reports success. Complete requires compile passes, lint compliance,
                passing test suites, and clean diffs.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--canvas)] p-6">
              <p className="font-mono text-xs tracking-wider text-[color:var(--accent)]">04 / PUBLICATION GATE</p>
              <h3 className="mt-3 font-semibold text-[color:var(--ink)]">Owner approval boundary</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Autonomous commits to master and unreviewed remote pushes are forbidden. Publication to GitHub is
                strictly pull-request first upon human approval.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--canvas)] p-6">
              <p className="font-mono text-xs tracking-wider text-[color:var(--accent)]">05 / PORTABILITY</p>
              <h3 className="mt-3 font-semibold text-[color:var(--ink)]">Replaceable intelligence</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Decoupled model adapter architecture. Switch reasoning backends between leading cloud APIs or local
                open models without altering the mission harness.
              </p>
            </div>

            <div className="border border-[color:var(--line)] bg-[color:var(--canvas)] p-6">
              <p className="font-mono text-xs tracking-wider text-[color:var(--accent)]">06 / SEGREGATION</p>
              <h3 className="mt-3 font-semibold text-[color:var(--ink)]">Hard privilege separation</h3>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                Privileged control infrastructure (MCP and OAuth) is completely isolated from public web properties and
                brochure sites.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capability Honesty Matrix */}
      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Audit & Posture</Eyebrow>
              <h2 className="font-display mt-3 text-3xl text-[color:var(--ink)]">Truthful capability inventory</h2>
              <p className="mt-3 max-w-2xl text-[color:var(--ink-muted)]">
                We do not market planned or experimental features as shipping product. Capability statuses reflect
                verified implementations with tests.
              </p>
            </div>
            <Link href="/roadmap" className="font-semibold text-[color:var(--accent)] hover:underline">
              View full capability roadmap →
            </Link>
          </div>

          <div className="mt-12 space-y-10">
            {/* Live / Verified */}
            <div>
              <div className="flex items-center gap-3">
                <StatusBadge tone="live">{statusLabel.live}</StatusBadge>
                <span className="text-xs text-[color:var(--ink-muted)]">Verified in current test suite</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {liveCapabilities.map((item) => (
                  <div key={item.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                    <p className="font-medium text-[color:var(--ink)]">{item.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* In Development */}
            <div>
              <div className="flex items-center gap-3">
                <StatusBadge tone="dev">{statusLabel["in-development"]}</StatusBadge>
                <span className="text-xs text-[color:var(--ink-muted)]">Active implementation</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {devCapabilities.map((item) => (
                  <div key={item.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                    <p className="font-medium text-[color:var(--ink)]">{item.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Planned */}
            <div>
              <div className="flex items-center gap-3">
                <StatusBadge tone="planned">{statusLabel.planned}</StatusBadge>
                <span className="text-xs text-[color:var(--ink-muted)]">Blocked until required live gates pass</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {plannedCapabilities.map((item) => (
                  <div key={item.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                    <p className="font-medium text-[color:var(--ink)]">{item.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Demo Teaser */}
      <section className="bg-[color:var(--surface-2)] py-16 sm:py-20">
        <Container>
          <div className="border border-[color:var(--line-strong)] bg-[color:var(--canvas)] p-8 sm:p-12">
            <div className="max-w-2xl">
              <Eyebrow>Interactive Product Preview</Eyebrow>
              <h2 className="font-display mt-4 text-3xl text-[color:var(--ink)] sm:text-4xl">
                Experience the IRISH control surface in read-only mode.
              </h2>
              <p className="mt-4 text-[color:var(--ink-muted)]">
                Inspect a real simulated mission from intent planning through diff generation, terminal validation
                evidence, and owner approval request. Zero real credentials required.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
                >
                  Enter Mission Command Center →
                </Link>
                <a
                  href={siteUrl("dcw")}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--line-strong)] px-6 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)]"
                >
                  Presented by DCW
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
