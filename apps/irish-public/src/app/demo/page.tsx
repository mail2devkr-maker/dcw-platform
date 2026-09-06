import { Container, Eyebrow } from "@dcw/ui";
import { DemoClient } from "@/components/demo-client";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Interactive Demo — IRISH Command Center",
  description: "Experience the read-only preview of the IRISH Mission Command Center. Inspect projects, mission diffs, terminal validation logs, and the owner approval boundary.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <main id="main" className="py-12 sm:py-16">
      <Container>
        <div className="mb-8 max-w-3xl">
          <Eyebrow>Control Surface Preview</Eyebrow>
          <h1 className="font-display mt-3 text-3xl text-[color:var(--ink)] sm:text-5xl">
            IRISH Mission Command Center
          </h1>
          <p className="mt-4 text-base text-[color:var(--ink-muted)]">
            Explore a simulated mission execution. This read-only environment showcases how IRISH records machine
            validation evidence, compiles clean diffs, and enforces the owner approval boundary before publishing code.
          </p>
        </div>

        <DemoClient />

        <div className="mt-12 rounded border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-[color:var(--accent)] uppercase">
            Data Safety & Sanitization Guarantees
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
            All data displayed in this interactive demo is strictly mocked, sanitized, and deterministic. No real
            credentials, tokens, private repositories, or privileged system endpoints are exposed or utilized.
          </p>
        </div>
      </Container>
    </main>
  );
}
