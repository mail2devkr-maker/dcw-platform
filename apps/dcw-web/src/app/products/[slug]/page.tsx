import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, siteUrl } from "@dcw/brand";
import { Container, StatusBadge } from "@dcw/ui";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

function getProduct(slug: string) {
  return products.find((product) => product.id === slug);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Product overview`,
    description: `${product.name}: ${product.summary}`,
    alternates: { canonical: `${siteUrl("dcw")}${product.learnMorePath}` },
    openGraph: {
      title: `${product.name} — Product overview | DCW`,
      description: product.summary,
      url: `${siteUrl("dcw")}${product.learnMorePath}`,
      siteName: "DCW",
      type: "website",
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title: `${product.name} — Product overview | DCW`, description: product.summary },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const dcwUrl = siteUrl("dcw");
  const productUrl = `${dcwUrl}${product.learnMorePath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${productUrl}#webpage`,
        url: productUrl,
        name: `${product.name} — Product overview`,
        description: product.summary,
        isPartOf: { "@id": `${dcwUrl}/#website` },
        about: { "@id": `${productUrl}#software-application` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${productUrl}#software-application`,
        name: product.name,
        applicationCategory: product.category,
        description: product.summary,
        url: product.href,
        creator: { "@id": `${dcwUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${productUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DCW", item: dcwUrl },
          { "@type": "ListItem", position: 2, name: "Products", item: `${dcwUrl}/products` },
          { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
        ],
      },
    ],
  };

  return (
    <main id="main" className="dcw-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="py-16 sm:py-24">
        <Link href="/products" className="text-sm font-semibold text-cyan-200 underline decoration-cyan-200/40 underline-offset-4">
          ← All DCW products
        </Link>
        <div className="mt-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--accent)] uppercase">Powered by DCW</span>
            <StatusBadge tone={product.status === "live" ? "live" : "dev"}>{product.statusLabel}</StatusBadge>
          </div>
          <p className="mt-6 text-sm font-semibold text-[color:var(--ink-muted)]">{product.category}</p>
          <h1 className="font-display mt-3 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">{product.name}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#dce8f7]">{product.summary}</p>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-3" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="sr-only">Product overview</h2>
          <article className="ai-panel p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[color:var(--accent)] uppercase">Category</p>
            <p className="mt-3 text-lg font-semibold text-white">{product.category}</p>
          </article>
          <article className="ai-panel p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[color:var(--accent)] uppercase">Current status</p>
            <p className="mt-3 text-lg font-semibold text-white">{product.statusLabel}</p>
          </article>
          <article className="ai-panel p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[color:var(--accent)] uppercase">Relationship</p>
            <p className="mt-3 text-lg font-semibold text-white">Product powered by DCW</p>
          </article>
        </section>

        <section className="mt-14 max-w-3xl border-t border-white/10 pt-10">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">A factual starting point</h2>
          <p className="mt-4 leading-8 text-[color:var(--ink-muted)]">
            This overview intentionally stays within the product information DCW can verify publicly. Visit the official
            product destination for the current experience, and return to DCW for the wider product portfolio.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={product.href} className="inline-flex min-h-11 items-center rounded-full bg-[color:var(--accent)] px-5 text-sm font-bold text-[#041014]">
              {product.ctaLabel} <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <Link href="/what-is-dcw" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white">
              What is DCW?
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
