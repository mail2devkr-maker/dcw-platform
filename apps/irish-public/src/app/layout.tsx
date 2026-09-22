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
  openGraph: {
    title: `${IRISH.searchName} — ${IRISH.productLine} | DCW`,
    description: IRISH.definition,
    url: siteUrl("irish"),
    siteName: "IRISH",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${IRISH.searchName} — ${IRISH.productLine} | DCW`,
    description: IRISH.definition,
  },
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
  const irishUrl = siteUrl("irish");
  const dcwUrl = siteUrl("dcw");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${irishUrl}/#software-application`,
      name: IRISH.name,
      alternateName: IRISH.searchName,
      url: irishUrl,
      applicationCategory: "DeveloperApplication",
      creator: { "@id": `${dcwUrl}/#organization` },
      description: IRISH.definition,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${irishUrl}/#website`,
      name: `${IRISH.name} (${IRISH.productLine})`,
      alternateName: IRISH.searchName,
      url: irishUrl,
      description: IRISH.definition,
      isPartOf: { "@id": `${dcwUrl}/#website` },
      publisher: { "@id": `${dcwUrl}/#organization` },
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
