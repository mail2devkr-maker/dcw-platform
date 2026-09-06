import assert from "node:assert/strict";
import test from "node:test";
import { pageMeta } from "./seo.ts";

test("pageMeta generates correct IRISH canonical URL and OpenGraph metadata", () => {
  const meta = pageMeta({
    title: "IRISH Demo",
    description: "Interactive preview of IRISH Master AI",
    path: "/demo",
  });

  assert.equal(meta.title, "IRISH Demo");
  assert.equal(meta.description, "Interactive preview of IRISH Master AI");
  assert.ok(meta.alternates?.canonical);
  assert.match(String(meta.alternates.canonical), /irish\.dcw\.co\.in\/demo/);
  assert.equal(meta.openGraph?.siteName, "IRISH");
  assert.equal(meta.openGraph?.locale, "en_IN");
});
