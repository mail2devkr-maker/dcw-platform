import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Use — IRISH Public",
  description: "Terms of use for the public IRISH website, interactive preview, and architectural documentation.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Legal Notice</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">Terms of Use</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[color:var(--ink-muted)]">
            <p>
              The public IRISH application and documentation presented by Devdutta Creative World describe software
              currently in development preview. Information, architectural diagrams, and interactive previews are
              provided on an &quot;as-is&quot; basis without warranties of any kind.
            </p>
            <p>
              This website does not grant licenses, API keys, or access rights to private operational infrastructure,
              owner daemon runtimes, privileged MCP servers, or authenticated OAuth control systems. Attempting to probe,
              exploit, or route unauthorized traffic to private control endpoints is prohibited.
            </p>
            <p>
              All product names, logos, and trademarks related to IRISH and DCW are proprietary to Devdutta Creative World.
              Canonical open-source components, when published, remain governed by their respective repository licenses
              on GitHub.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
