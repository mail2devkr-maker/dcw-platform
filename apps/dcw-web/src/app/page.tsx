import Link from "next/link";
import { dcwCapabilities, dcwPrinciples, IRISH, products, siteUrl } from "@dcw/brand";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Devdutta Creative World",
  description: "DCW builds intelligent digital products for the real world. Flagship: IRISH — Master AI, presented by DCW.",
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main">
      <section className="border-b border-[color:var(--line)]">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Devdutta Creative World</Eyebrow>
          <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.08] tracking-tight sm:text-6xl">
            Building intelligent digital products for the real world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-muted)]">
            DCW designs and engineers software with owner control, evidence before claims, and infrastructure you can
            replace. We do not sell theatre. We build products that can be owned.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteUrl("irish")}
              className="inline-flex min-h-11 items-center rounded-full bg-[color:var(--ink)] px-5 text-sm font-semibold text-[color:var(--canvas)]"
            >
              Explore IRISH
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--line-strong)] px-5 text-sm font-semibold"
            >
              Start a conversation
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Flagship</Eyebrow>
          <div className="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">IRISH — Master AI, presented by DCW</h2>
              <p className="mt-4 max-w-xl text-[color:var(--ink-muted)]">{IRISH.definition}</p>
              <p className="mt-4 text-sm text-[color:var(--ink-muted)]">
                Status: {IRISH.status}. IRISH is not marketed as production-ready, enterprise-ready, or fully
                autonomous.
              </p>
              <a href={siteUrl("irish")} className="mt-6 inline-flex font-semibold">
                Open irish.dcw.co.in →
              </a>
            </div>
            <aside className="border border-[color:var(--line)] bg-[color:var(--surface-2)] p-6">
              <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--accent)]">What it is</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>Local-first runtime under owner control</li>
                <li>Missions with evidence, validation, and approval</li>
                <li>GitHub as the canonical remote</li>
                <li>Privileged MCP and OAuth stay off this website</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="font-display mt-3 text-3xl">Craft with constraints</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dcwCapabilities.map((item) => (
              <article key={item.title} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--canvas-strong)]">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Philosophy</Eyebrow>
          <h2 className="font-display mt-3 text-3xl">Principles we will not trade</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {dcwPrinciples.map((item) => (
              <article key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Eyebrow>Products</Eyebrow>
          <h2 className="font-display mt-3 text-3xl">What DCW is shipping</h2>
          <p className="mt-3 max-w-xl text-[color:var(--ink-muted)]">
            IRISH is the flagship. Future products can join this list when they exist. We do not invent launches.
          </p>
          <div className="mt-8 grid gap-4">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="block border border-[color:var(--line)] bg-[color:var(--surface)] p-6 hover:border-[color:var(--line-strong)]"
              >
                <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--accent)]">{product.line}</p>
                <h3 className="font-display mt-2 text-2xl">{product.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-muted)]">{product.summary}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
