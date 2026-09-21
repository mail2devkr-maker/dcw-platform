import Link from "next/link";
import { DCW, products, siteUrl } from "@dcw/brand";
import { Container } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "What is DCW? Technology & Product Development Brand",
  description: DCW.definition,
  path: "/what-is-dcw",
});

const dcwUrl = siteUrl("dcw");

const faqs = [
  {
    question: "What is DCW?",
    answer: DCW.definition,
  },
  {
    question: "What does DCW build?",
    answer:
      "DCW builds digital products, AI-enabled solutions, web and mobile platforms, business automation systems, and practical software ventures.",
  },
  {
    question: "Which products are powered by DCW?",
    answer:
      "FastQue and IRISH are products powered by DCW. FastQue is a live salon booking, queue, and operations platform, while IRISH is an AI Project Execution Platform in active development.",
  },
  {
    question: "Is this DCW the same as DCW Limited?",
    answer:
      "No. DCW on dcw.co.in is a technology and product development brand. It is not affiliated with DCW Limited, the Indian chemical manufacturing company, or with other unrelated organizations that also use the initials DCW.",
  },
  {
    question: "What does DCW stand for?",
    answer:
      "DCW is currently used as the public brand name for this technology and product development brand. No expanded company name is being presented publicly on this site at this time.",
  },
];

export default function WhatIsDcwPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${dcwUrl}/what-is-dcw#webpage`,
        url: `${dcwUrl}/what-is-dcw`,
        name: "What is DCW? Technology & Product Development Brand",
        description: DCW.definition,
        isPartOf: { "@id": `${dcwUrl}/#website` },
        about: { "@id": `${dcwUrl}/#organization` },
        mainEntity: { "@id": `${dcwUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${dcwUrl}/what-is-dcw#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${dcwUrl}/what-is-dcw#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DCW",
            item: dcwUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "What is DCW?",
            item: `${dcwUrl}/what-is-dcw`,
          },
        ],
      },
    ],
  };

  return (
    <main id="main" className="dcw-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Container className="py-16 sm:py-24">
        <div className="ai-kicker">
          <span className="ai-kicker-dot" aria-hidden="true" />
          DCW explained
        </div>

        <h1 className="font-display mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
          What is <span className="ai-gradient-text">DCW?</span>
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="ai-panel p-7 sm:p-10">
            <p className="text-xl leading-9 text-[#dce8f7] sm:text-2xl">{DCW.definition}</p>
            <div className="ai-rule my-8" />
            <p className="leading-8 text-[color:var(--ink-muted)]">
              In the context of <strong className="text-white">dcw.co.in</strong>, DCW refers specifically to this
              technology and product development brand. The same three-letter acronym is also used by unrelated
              organizations in other industries, so this page exists to make the identity and context explicit.
            </p>
          </article>

          <aside className="ai-panel p-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
              Quick answer
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-[color:var(--ink-muted)]">Category</dt>
                <dd className="mt-1 font-semibold text-white">Technology & product development</dd>
              </div>
              <div>
                <dt className="text-[color:var(--ink-muted)]">Focus</dt>
                <dd className="mt-1 font-semibold text-white">AI, digital products, platforms & automation</dd>
              </div>
              <div>
                <dt className="text-[color:var(--ink-muted)]">Products</dt>
                <dd className="mt-1 font-semibold text-white">FastQue · IRISH</dd>
              </div>
              <div>
                <dt className="text-[color:var(--ink-muted)]">Official web identity</dt>
                <dd className="mt-1 font-semibold text-white">dcw.co.in</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>

      <section className="border-y border-[color:var(--line)] bg-white/[0.012]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-violet-300 uppercase">Disambiguation</p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.045em]">
                Which DCW is this?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[color:var(--ink-muted)]">
              <p>
                <strong className="text-white">This DCW is the technology and product development brand behind FastQue
                and IRISH.</strong> It focuses on building software products, AI-enabled systems, web platforms, mobile
                experiences, automation, and emerging software ventures.
              </p>
              <p>
                It is <strong className="text-white">not affiliated with DCW Limited</strong>, the Indian chemical
                manufacturing company, and it is not intended to represent other organizations, programs, or acronyms
                that also use the letters DCW.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
            Products powered by DCW
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Products make the brand concrete.
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="ai-panel ai-card-hover group block p-7 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                  {product.status === "live" ? "Live product" : "Active development"}
                </span>
                <h3 className="font-display mt-5 text-3xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-200">{product.line}</p>
                <p className="mt-4 leading-7 text-[color:var(--ink-muted)]">{product.summary}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-cyan-200 transition group-hover:translate-x-1">
                  Visit {product.name} ↗
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[color:var(--line)] bg-white/[0.012]">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-violet-300 uppercase">What DCW builds</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Digital products", "Software products built around real customer and operator needs."],
              ["02", "AI-enabled solutions", "Practical AI workflows with evidence, validation, and bounded control."],
              ["03", "Web & mobile platforms", "Modern product experiences designed for performance and long-term ownership."],
              ["04", "Business automation", "Systems that reduce repetitive operational work without hiding important decisions."],
            ].map(([code, title, body]) => (
              <article key={title} className="ai-panel p-6">
                <span className="font-mono text-[10px] text-[color:var(--accent)]">{code}</span>
                <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--ink-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
            Frequently asked questions
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.045em]">DCW, in plain language.</h2>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <article key={item.question} className="grid gap-3 py-7 md:grid-cols-[0.72fr_1.28fr]">
                <h3 className="font-semibold text-white">{item.question}</h3>
                <p className="leading-7 text-[color:var(--ink-muted)]">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center rounded-full bg-[color:var(--accent)] px-5 text-sm font-bold text-[#041014]"
            >
              Explore DCW products
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white"
            >
              About DCW
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
