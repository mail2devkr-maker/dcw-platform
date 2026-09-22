import Link from "next/link";
import { products, siteUrl } from "@dcw/brand";
import { Container } from "@dcw/ui";
import { ProductGrid } from "@/components/product-grid";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Products",
  description: "Discover FastQue, DCW's live salon and barbershop platform, and IRISH, a development preview for AI-assisted software missions.",
  path: "/products",
});

export default function ProductsPage() {
  const dcwUrl = siteUrl("dcw");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${dcwUrl}/products#webpage`,
        url: `${dcwUrl}/products`,
        name: "DCW Products",
        description: "Software products powered by DCW, with current status and official destinations.",
        isPartOf: { "@id": `${dcwUrl}/#website` },
        about: { "@id": `${dcwUrl}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${dcwUrl}/products#product-list`,
        name: "Products powered by DCW",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: product.name,
            category: product.category,
            url: product.href,
            description: product.summary,
            creator: { "@id": `${dcwUrl}/#organization` },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DCW", item: dcwUrl },
          { "@type": "ListItem", position: 2, name: "Products", item: `${dcwUrl}/products` },
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
          The DCW portfolio
        </div>
        <h1 className="font-display mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
          Two products. Different problems. One technology brand.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--ink-muted)]">
          FastQue and IRISH are products powered by DCW. Their current status and official destinations are stated
          plainly; work that is not ready to describe is not presented as a launched product.
        </p>

        <div className="mt-12">
          <ProductGrid headingLevel={2} />
        </div>

        <p className="mt-10 max-w-3xl leading-7 text-[color:var(--ink-muted)]">
          Want the short explanation of the organization behind these products?{" "}
          <Link href="/what-is-dcw" className="font-semibold text-cyan-200 underline decoration-cyan-200/40 underline-offset-4 hover:text-white">
            Read what DCW is and how FastQue and IRISH relate to it.
          </Link>
        </p>
      </Container>
    </main>
  );
}
