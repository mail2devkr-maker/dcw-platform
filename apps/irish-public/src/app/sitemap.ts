import { siteUrl } from "@dcw/brand";

export default function sitemap() {
  const base = siteUrl("irish");
  return ["", "/product", "/demo", "/architecture", "/security", "/roadmap", "/docs", "/privacy", "/terms"].map(
    (path) => ({ url: `${base}${path || "/"}`, lastModified: new Date() }),
  );
}
