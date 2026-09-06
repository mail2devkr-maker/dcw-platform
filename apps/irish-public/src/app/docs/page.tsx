import Link from "next/link";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Documentation & FAQ — IRISH Master AI",
  description: "Quickstart, core concepts, mission workflows, and technical FAQ for IRISH Master AI.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Documentation Preview</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">
            Concepts, workflows, and operating principles.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-muted)]">
            A developer reference explaining how IRISH manages project context, scopes missions, executes sandboxed
            specialists, and anchors validation receipts.
          </p>
        </div>

        {/* Core Concepts */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Core Concepts</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">The IRISH Object Model</h2>

          <div className="mt-8 space-y-6">
            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">01 / Projects</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                A project binds a local directory, a canonical git remote (such as a GitHub repository), project-specific
                validation commands (e.g. <code className="font-mono text-[color:var(--accent)]">npm test</code>, <code className="font-mono text-[color:var(--accent)]">cargo test</code>),
                and an append-only mission log. Projects persist across daemon restarts.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">02 / Missions</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                A mission is a single, atomic unit of engineering work. It is initiated by natural language intent or an
                issue description, compiles into a structured mission graph, and tracks state from planning to sandboxed
                execution, validation, and approval.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">03 / Specialists</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                Specialists are domain-constrained execution agents. Rather than an omnipotent assistant, specialists
                operate with bounded tool surfaces and explicit file masks. The Developer Specialist focuses strictly
                on issue-to-PR code modifications and test verification.
              </p>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="font-mono text-sm font-semibold text-[color:var(--ink)]">04 / Evidence Packages</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                Every mission artifact is recorded as cryptographically verifiable evidence: git diffs, command-line
                execution logs, duration metrics, and exit codes. A mission cannot claim success without passing
                evidence.
              </p>
            </div>
          </div>
        </section>

        {/* Technical FAQ */}
        <section className="mt-16 border-t border-[color:var(--line)] pt-12">
          <Eyebrow>Questions & Answers</Eyebrow>
          <h2 className="font-display mt-3 text-2xl text-[color:var(--ink)] sm:text-3xl">Frequently Asked Questions</h2>

          <div className="mt-8 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            <div className="py-6">
              <h3 className="text-base font-semibold text-[color:var(--ink)]">Does IRISH send my private code to cloud databases?</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                No. The IRISH daemon runs locally on your workstation. It operates directly against your local filesystem
                and git working tree. Code is only pushed to your designated GitHub remote when you explicitly approve a
                pull request publication.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-[color:var(--ink)]">Can IRISH accidentally push broken code to my main branch?</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                No. The IRISH supervisor enforces two hard boundaries: first, machine validation (compiler, linter, tests)
                must exit with code 0; second, publication is restricted to pull requests and requires human owner
                sign-off. Direct pushes to protected branches are blocked by policy.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-[color:var(--ink)]">Which LLM providers are supported?</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                IRISH features a decoupled adapter architecture. In development builds, reasoning and code generation
                can be routed to Anthropic Claude 3.7 Sonnet, OpenAI GPT-4o, or local offline models via Ollama. You are
                never locked into a single AI provider.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-base font-semibold text-[color:var(--ink)]">How can I test the system today?</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                You can explore our interactive, read-only Mission Command Center directly in your browser. It renders a
                full, realistic mission lifecycle with diff reviews, terminal validation evidence, and approval gates.
              </p>
              <div className="mt-4">
                <Link href="/demo" className="text-sm font-semibold text-[color:var(--accent)] hover:underline">
                  Launch Interactive Demo →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
