import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { IRISH, siteUrl } from "@dcw/brand";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/chrome";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display-file", display: "swap" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans-file", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-file", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl("irish")),
  title: { default: `${IRISH.searchName} — ${IRISH.productLine} | DCW`, template: `%s — ${IRISH.name}` },
  description: IRISH.definition,
  applicationName: IRISH.name,
  keywords: [
    "IRISH AI",
    "IRISH DCW",
    "AI Project Execution Platform",
    "AI developer agent",
    "local-first AI",
    "DCW technology",
  ],
  category: "technology",
  alternates: { canonical: siteUrl("irish") },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${siteUrl("irish")}/#software-application`,
      name: IRISH.name,
      alternateName: IRISH.searchName,
      url: siteUrl("irish"),
      applicationCategory: "DeveloperApplication",
      creator: { "@id": `${siteUrl("dcw")}/#organization`, "@type": "Organization", name: "DCW", url: siteUrl("dcw") },
      description: IRISH.definition,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${IRISH.name} (${IRISH.productLine})`,
      alternateName: IRISH.searchName,
      url: siteUrl("irish"),
      description: IRISH.definition,
      publisher: { "@id": `${siteUrl("dcw")}/#organization`, "@type": "Organization", name: "DCW", url: siteUrl("dcw") },
    },
  ];

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body
        className="theme-irish flex min-h-dvh flex-col antialiased"
        style={{ fontFamily: "var(--font-sans-file), var(--font-sans)" }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
