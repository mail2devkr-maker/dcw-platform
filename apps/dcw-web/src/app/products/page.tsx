import { products } from "@dcw/brand";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Products",
  description: "DCW products. IRISH is the flagship. Additional products will be listed here when they exist.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Products</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">One flagship. Room for more.</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--ink-muted)]">
          This catalog is honest. IRISH is in active development. Nothing else is presented as launched.
        </p>
        <ul className="mt-10 grid gap-4">
          {products.map((product) => (
            <li key={product.id} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--accent)]">{product.line}</p>
              <h2 className="font-display mt-2 text-3xl">{product.name}</h2>
              <p className="mt-3 max-w-2xl text-[color:var(--ink-muted)]">{product.summary}</p>
              <a className="mt-5 inline-flex font-semibold" href={product.href}>
                Visit product site →
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
