import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms",
  description: "Terms of use for the public Devdutta Creative World website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">Terms</h1>
        <div className="mt-8 max-w-2xl space-y-4 text-[color:var(--ink-muted)]">
          <p>
            The public DCW and IRISH websites describe products that are under active development. Information is
            provided as-is, without a warranty that features are complete or available for production use.
          </p>
          <p>
            IRISH source is published on GitHub under the owner’s repository. These websites are not a license to
            privileged runtime access, MCP, OAuth, or any owner-only control surface.
          </p>
          <p>Do not attempt to use this site to reach private infrastructure.</p>
        </div>
      </Container>
    </main>
  );
}
