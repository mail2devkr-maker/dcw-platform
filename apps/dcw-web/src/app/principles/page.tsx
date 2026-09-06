import { dcwPrinciples } from "@dcw/brand";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Principles",
  description: "DCW product principles: owner control, evidence, replaceable infrastructure, and secure-by-design thinking.",
  path: "/principles",
});

export default function PrinciplesPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Principles</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">A long-term way of building</h1>
        <ol className="mt-10 space-y-8">
          {dcwPrinciples.map((item, index) => (
            <li key={item.title} className="grid gap-2 md:grid-cols-[4rem_1fr]">
              <span className="font-display text-2xl text-[color:var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-[color:var(--ink-muted)]">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </main>
  );
}
