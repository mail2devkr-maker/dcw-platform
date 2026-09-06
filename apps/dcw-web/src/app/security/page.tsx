import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Security",
  description: "Security posture and responsible disclosure for Devdutta Creative World public websites.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Security</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">Responsible disclosure</h1>
        <div className="mt-8 max-w-2xl space-y-4 text-[color:var(--ink-muted)]">
          <p>
            Report suspected vulnerabilities in public DCW websites through the contact form with the subject
            “Security”. Do not include secrets in the initial message if they can be rotated first.
          </p>
          <p>
            Privileged IRISH endpoints are intentionally separate from this site. Public demos are mocked and
            read-only. They must not call owner filesystems, live GitHub writes, terminals, or control bearers.
          </p>
        </div>
      </Container>
    </main>
  );
}
