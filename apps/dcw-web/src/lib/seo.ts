import type { Metadata } from "next";
import { siteUrl } from "@dcw/brand";

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  kind?: "dcw" | "irish";
}): Metadata {
  const kind = input.kind ?? "dcw";
  const base = siteUrl(kind);
  const url = `${base}${input.path}`;
  const title = input.title;
  return {
    title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: input.description,
      url,
      siteName: kind === "dcw" ? "Devdutta Creative World" : "IRISH",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
    },
  };
}
