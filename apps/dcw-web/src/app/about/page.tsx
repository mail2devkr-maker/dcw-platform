import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description: "Devdutta Creative World is an independent product studio building IRISH and future DCW software.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display mt-3 max-w-3xl text-4xl">A studio that treats software as a serious object.</h1>
        <div className="mt-8 max-w-2xl space-y-4 text-[color:var(--ink-muted)]">
          <p>
            Devdutta Creative World (DCW) exists to design and engineer digital products that remain under the owner’s
            control. The work is independent. We do not publish employee counts, office maps, or invented customers.
          </p>
          <p>
            The flagship product is IRISH — Master AI, presented by DCW. IRISH is a local-first agent for developer and
            operations missions: planning, bounded execution, evidence, validation, and approval before publication.
          </p>
          <p>
            DCW’s public websites are separate from privileged IRISH control surfaces. That separation is intentional.
          </p>
        </div>
      </Container>
    </main>
  );
}
