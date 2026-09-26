import Link from "next/link";
import { Container } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Swarnanjali Jewels — E-commerce Website by DCW Technology",
  description:
    "Swarnanjali Jewels is a premium full e-commerce jewellery website designed and created by DCW Technology, with catalogue discovery, customer shopping flows, KISNA integration, and a mobile-first luxury storefront.",
  path: "/products/swarnanjali-jewels",
});

const commerceFeatures = [
  {
    title: "Full e-commerce journey",
    body: "A complete shopping foundation covering product discovery, product-detail flows, customer accounts, wishlist, cart, checkout, and order-oriented commerce experiences.",
  },
  {
    title: "Luxury jewellery catalogue",
    body: "A premium browsing experience across bridal, diamond, gold, and silver collections, designed to make a large jewellery catalogue feel clear and trustworthy.",
  },
  {
    title: "KISNA catalogue integration",
    body: "Dedicated KISNA diamond-jewellery discovery supports an authorized-dealer experience with product information, certification context, and enquiry conversion.",
  },
  {
    title: "Trust-led merchandising",
    body: "The storefront presents certification and purchase-confidence signals such as BIS hallmarking, IGI-certified diamonds, exchange messaging, and handcrafted-jewellery positioning.",
  },
  {
    title: "Omnichannel conversion",
    body: "Online discovery connects naturally to showroom appointments, calls, and WhatsApp enquiries so customers can move from browsing to assisted purchase without friction.",
  },
  {
    title: "Mobile-first premium UX",
    body: "Responsive layouts, visual storytelling, search-friendly structure, and performance-conscious implementation support customers across phones and larger screens.",
  },
] as const;

export default function SwarnanjaliJewelsProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Swarnanjali Jewels — E-commerce Website by DCW Technology",
        url: "https://dcw.co.in/products/swarnanjali-jewels",
        description:
          "A premium jewellery e-commerce website designed and created by DCW Technology.",
      },
      {
        "@type": "WebSite",
        name: "Swarnanjali Jewels",
        url: "https://swarnanjalijewels.in",
        creator: {
          "@type": "Organization",
          name: "DCW Technology",
          url: "https://dcw.co.in",
        },
      },
    ],
  };

  return (
    <main id="main" className="dcw-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="ai-kicker">
            <span className="ai-kicker-dot" aria-hidden="true" />
            DCW commerce project
          </div>

          <p className="mt-7 text-sm font-semibold tracking-[0.12em] text-cyan-200 uppercase">
            Designed & created by DCW Technology
          </p>

          <h1 className="font-display mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
            Swarnanjali Jewels
            <span className="ai-gradient-text block">A full jewellery e-commerce experience.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-muted)] sm:text-xl">
            Swarnanjali Jewels is a live premium jewellery website designed and developed by DCW Technology. The
            platform combines luxury-brand presentation with the practical features of a full e-commerce experience —
            from collection and product discovery through customer shopping flows, catalogue trust, and assisted
            conversion.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://swarnanjalijewels.in"
              className="inline-flex min-h-12 items-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-bold text-[#041014] transition hover:bg-white"
            >
              Visit live website <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center rounded-full border border-[color:var(--line-strong)] px-6 text-sm font-semibold text-white transition hover:border-[color:var(--accent)] hover:bg-white/[0.05]"
            >
              Back to DCW portfolio
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                What DCW built
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.045em]">
                Commerce, trust, and premium presentation in one platform.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {commerceFeatures.map((feature, index) => (
                <article key={feature.title} className="ai-panel min-h-56 p-6">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-8 text-xl font-semibold tracking-[-0.02em]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--ink-muted)]">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <div className="ai-panel p-7 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#a78bfa] uppercase">Live customer experience</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Built to sell jewellery online without losing the showroom experience.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--ink-muted)]">
              The live site presents bridal, diamond, gold, and silver collections, certification-led trust messaging,
              a dedicated KISNA diamond-jewellery experience, and direct appointment and WhatsApp conversion alongside
              the wider e-commerce journey.
            </p>
            <a
              href="https://swarnanjalijewels.in"
              className="mt-8 inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-[color:var(--accent)]"
            >
              Explore Swarnanjali Jewels <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
