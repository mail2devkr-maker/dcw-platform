import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Notice — IRISH Public",
  description: "Privacy notice for the public IRISH website and interactive demo application.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Legal Notice</Eyebrow>
          <h1 className="font-display mt-4 text-4xl text-[color:var(--ink)] sm:text-5xl">Privacy Notice</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[color:var(--ink-muted)]">
            <p>
              This public IRISH website (<code className="font-mono text-[color:var(--accent)]">irish.dcw.co.in</code>)
              and its interactive demo operate strictly in read-only preview mode. No user accounts are created, and no
              private source code from your local machine is ever received or stored by this website.
            </p>
            <p>
              The interactive Command Center preview executes entirely in your browser using deterministic, mocked, and
              sanitized data structures. No live filesystem commands, repository modifications, or private telemetry
              are transmitted.
            </p>
            <p>
              Standard HTTP access logs (including IP address, requested URL, and user-agent) are retained temporarily
              by our edge infrastructure solely for performance monitoring, security diagnostics, and DDoS mitigation.
              We do not use advertising trackers or cross-site tracking cookies.
            </p>
            <p>
              Privileged control surfaces such as Model Context Protocol (<code className="font-mono text-[color:var(--accent)]">mcp.dcw.co.in</code>)
              and owner authentication (<code className="font-mono text-[color:var(--accent)]">auth.dcw.co.in</code>)
              are strictly segregated and are not accessible from or connected to this public website.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
