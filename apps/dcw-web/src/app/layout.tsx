import type { Metadata } from "next";
import { JetBrains_Mono, Source_Sans_3, Space_Grotesk } from "next/font/google";
import { DCW, siteUrl } from "@dcw/brand";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/chrome";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-file",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-file",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-file",
  display: "swap",
});

const dcw = siteUrl("dcw");

export const metadata: Metadata = {
  metadataBase: new URL(dcw),
  title: {
    default: "DCW — Technology, AI & Product Development",
    template: "%s — DCW",
  },
  description: DCW.definition,
  applicationName: "DCW",
  category: "technology",
  keywords: [
    "DCW",
    "what is DCW",
    "DCW technology",
    "technology and product development",
    "AI-enabled solutions",
    "digital product development",
    "web platforms",
    "business automation",
    "FastQue",
    "IRISH AI",
  ],
  alternates: { canonical: dcw },
  openGraph: {
    title: "DCW — Technology, AI & Product Development",
    description: DCW.definition,
    url: dcw,
    siteName: "DCW",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "DCW — Technology, AI & Product Development",
    description: DCW.definition,
  },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${dcw}/#organization`,
        name: "DCW",
        alternateName: ["DCW Technology", "DCW Product Development"],
        url: dcw,
        description: DCW.definition,
        disambiguatingDescription:
          "DCW on dcw.co.in is a technology and product development brand behind FastQue and IRISH. It is unrelated to other organizations that also use the initials DCW.",
        brand: [
          { "@type": "Brand", name: "FastQue", url: "https://fastque.com" },
          { "@type": "Brand", name: "IRISH", url: siteUrl("irish") },
        ],
        knowsAbout: [
          "Digital product development",
          "Artificial intelligence",
          "Web platforms",
          "Mobile applications",
          "Business automation",
          "Software engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${dcw}/#website`,
        name: "DCW",
        alternateName: "DCW Technology & Product Development",
        url: dcw,
        description: DCW.definition,
        about: { "@id": `${dcw}/#organization` },
        publisher: { "@id": `${dcw}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${dcw}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is DCW?",
            acceptedAnswer: {
              "@type": "Answer",
              text: DCW.definition,
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body
        className="theme-dcw flex min-h-dvh flex-col antialiased"
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
