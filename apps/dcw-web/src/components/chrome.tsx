import Link from "next/link";
import { siteUrl } from "@dcw/brand";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/principles", label: "Principles" },
  { href: "/contact", label: "Contact" },
];

export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-4 top-0 z-50 -translate-y-full rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[#041014] focus:translate-y-4"
    >
      Skip to content
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070d]/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3 no-underline" aria-label="DCW home">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/[0.06] font-display text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(103,232,249,.08)]">
            D
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_rgba(103,232,249,.9)]" />
          </span>
          <span>
            <span className="font-display block text-lg font-semibold tracking-[-0.04em] text-white">DCW</span>
            <span className="hidden text-[9px] font-semibold tracking-[0.16em] text-[color:var(--ink-muted)] uppercase sm:block">
              Technology + Products
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[color:var(--ink-muted)] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteUrl("irish")}
            className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.05] px-4 py-2 font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/[0.1]"
          >
            IRISH ↗
          </a>
        </nav>
        <MobileNav links={links} cta={{ href: siteUrl("irish"), label: "Explore IRISH" }} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#03050a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] font-display font-bold text-cyan-100">
              D
            </span>
            <div>
              <p className="font-display text-2xl font-semibold tracking-[-0.04em]">DCW</p>
              <p className="text-[10px] tracking-[0.16em] text-[color:var(--metal)] uppercase">
                Technology + Product Development
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-[color:var(--metal)]">
            Digital products, AI-enabled solutions, web platforms, business automation, and emerging software ventures.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-cyan-200 uppercase">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link href="/about">About DCW</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/capabilities">Capabilities</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-violet-300 uppercase">Products & trust</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="https://fastque.com">FastQue</a></li>
            <li><a href={siteUrl("irish")}>IRISH</a></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-[color:var(--metal)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {year} DCW. All rights reserved.</span>
          <span>Building useful systems for the real world.</span>
        </div>
      </div>
    </footer>
  );
}
