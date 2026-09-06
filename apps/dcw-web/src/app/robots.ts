import { siteUrl } from "@dcw/brand";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl("dcw")}/sitemap.xml`,
    host: siteUrl("dcw"),
  };
}
