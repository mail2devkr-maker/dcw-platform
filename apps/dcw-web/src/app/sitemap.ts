import { siteUrl } from "@dcw/brand";

export default function sitemap() {
  const base = siteUrl("dcw");
  return ["", "/products", "/capabilities", "/about", "/principles", "/contact", "/privacy", "/terms", "/security"].map(
    (path) => ({ url: `${base}${path || "/"}`, lastModified: new Date() }),
  );
}
