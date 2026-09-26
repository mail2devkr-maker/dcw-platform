import Link from "next/link";
import { DCW, dcwCapabilities, dcwPrinciples, siteUrl } from "@dcw/brand";
import { Container } from "@dcw/ui";
import { ProductGrid } from "@/components/product-grid";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "DCW — Technology, AI & Product Development",
  description: DCW.definition,
  path: "/",
});

const capabilityCodes = ["AI", "01", "WEB", "MOB", "AUTO", "DEV", "LAB"];

export default function HomePage() {
  return (
    <main id="main" className="dcw-page">
      <section className="relative border-b border-[color:var(--line)]">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
          <div>
            <div className="ai-kicker">
              <span className="ai-kicker-dot" aria-hidden="true" />
              Technology + Product Development
            </div>

            <h1 className="font-display mt-7 max-w-4xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[5rem]">
              Technology and products,{" "}
              <span className="ai-gradient-text block">built for practical work.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--ink-muted)] sm:text-xl">
              DCW is a technology and product development brand. We build digital products, AI-enabled solutions, web
              platforms, e-commerce experiences, and practical automation. Explore FastQue, IRISH, and Swarnanjali
              Jewels — a full jewellery e-commerce website designed and developed by DCW Technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-bold text-[#041014] shadow-[0_0_38px_rgba(103,232,249,0.18)] transition hover:bg-white"
              >
                Explore products
              </Link>
              <Link
                href="/what-is-dcw"
                className="inline-flex min-h-12 items-center rounded-full border border-[color:var(--line-strong)] bg-white/[0.025] px-6 text-sm font-semibold text-white transition hover:border-[color:var(--accent)] hover:bg-white/[0.05]"
              >
                What is DCW?
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs tracking-[0.12em] text-[color:var(--ink-muted)] uppercase">
              <span>Digital products</span>
              <span>AI-enabled solutions</span>
              <span>Web platforms</span>
              <span>Automation</span>
            </div>
          </div>

          <aside className="ai-panel p-5 sm:p-7" aria-labelledby="featured-products-title">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[color:var(--accent)] uppercase">Portfolio</p>
                <h2 id="featured-products-title" className="font-display mt-2 text-xl font-semibold text-white">
                  Products & platforms by DCW
                </h2>
              </div>
              <Link href="/products" className="shrink-0 text-sm font-semibold text-cyan-200 hover:text-white">
                All products <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ProductGrid compact columns={1} headingLevel={3} />
          </aside>
        </Container>
      </section>

      <section id="what-is-dcw" className="relative border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                What is DCW?
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A technology brand that builds products.
              </h2>
            </div>
            <div className="ai-panel p-6 sm:p-8">
              <p className="text-lg leading-8 text-[#dbe7f5] sm:text-xl">
                DCW is the public technology and product development brand at dcw.co.in. Its work centers on practical
                software, including owned products such as FastQue and IRISH and client-facing digital platforms such as
                Swarnanjali Jewels.
              </p>
              <Link
                href="/what-is-dcw"
                className="mt-5 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-white"
              >
                Read the definitive “What is DCW?” page →
              </Link>
              <div className="ai-rule my-6" />
              <p className="text-sm leading-7 text-[color:var(--ink-muted)]">
                DCW is not limited to a single category. The common thread is practical software: identify a real
                problem, build a product around it, automate what should be automated, and keep the system understandable
                enough to own and evolve.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">Capabilities</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            From idea to operating product.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dcwCapabilities.map((item, index) => (
              <article key={item.title} className="ai-panel ai-card-hover min-h-56 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[color:var(--accent)] uppercase">
                    {capabilityCodes[index] ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70 shadow-[0_0_14px_rgba(103,232,249,.5)]" />
                </div>
                <h3 className="font-display mt-10 text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#a78bfa] uppercase">Build logic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.045em]">The rules behind the work.</h2>
            <p className="mt-5 max-w-md leading-7 text-[color:var(--ink-muted)]">
              AI can increase speed. Product discipline decides whether that speed becomes useful software.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {dcwPrinciples.slice(0, 6).map((item, index) => (
              <article key={item.title} className="border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-[color:var(--accent)]">0{index + 1}</span>
                <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <div className="ai-panel overflow-hidden p-8 sm:p-12">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                Build with DCW
              </p>
              <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Useful technology starts with a real problem.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--ink-muted)]">
                Product ideas, AI-enabled workflows, web platforms, and automation systems can all start with one clear
                conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-bold text-[#05070d] transition hover:bg-[color:var(--accent)]"
                >
                  Contact DCW
                </Link>
                <a
                  href={siteUrl("irish")}
                  className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-[color:var(--accent)]"
                >
                  Explore IRISH
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
