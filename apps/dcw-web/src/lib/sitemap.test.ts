import assert from "node:assert/strict";
import test from "node:test";
import sitemap from "../app/sitemap.ts";
import { siteUrl } from "@dcw/brand";

test("DCW sitemap lists canonical discovery, product, and trust pages without fabricated edit dates", () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  assert.ok(urls.includes(`${siteUrl("dcw")}/`));
  assert.ok(urls.includes(`${siteUrl("dcw")}/what-is-dcw`));
  assert.ok(urls.includes(`${siteUrl("dcw")}/products`));
  assert.ok(urls.includes(`${siteUrl("dcw")}/products/fastque`));
  assert.ok(urls.includes(`${siteUrl("dcw")}/products/irish`));
  assert.ok(urls.includes(`${siteUrl("dcw")}/privacy`));
  assert.ok(entries.every((entry) => entry.lastModified === undefined));
});
