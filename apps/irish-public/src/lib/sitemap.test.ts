import assert from "node:assert/strict";
import test from "node:test";
import sitemap from "../app/sitemap.ts";
import { siteUrl } from "@dcw/brand";

test("IRISH sitemap lists public product pages without claiming build-time edit dates", () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  assert.ok(urls.includes(`${siteUrl("irish")}/`));
  assert.ok(urls.includes(`${siteUrl("irish")}/product`));
  assert.ok(urls.includes(`${siteUrl("irish")}/demo`));
  assert.ok(entries.every((entry) => entry.lastModified === undefined));
});
