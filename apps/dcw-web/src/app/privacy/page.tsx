import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy",
  description: "Privacy notice for the public Devdutta Creative World website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">Privacy</h1>
        <div className="mt-8 max-w-2xl space-y-4 text-[color:var(--ink-muted)]">
          <p>
            This public website is a marketing and information surface. It does not require an account. It does not
            connect to privileged IRISH control, owner identity, or local filesystems.
          </p>
          <p>
            If you submit the contact form, we process the name, email, subject, and message you provide in order to
            respond. We do not sell that information.
          </p>
          <p>
            Hosting logs may include IP address, user agent, and request path as part of ordinary site operation. We do
            not use advertising cookies on this site.
          </p>
        </div>
      </Container>
    </main>
  );
}
