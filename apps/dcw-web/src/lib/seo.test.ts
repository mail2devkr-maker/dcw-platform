import assert from "node:assert/strict";
import test from "node:test";
import { pageMeta } from "./seo.ts";

test("pageMeta produces canonical URL and OpenGraph metadata", () => {
  const meta = pageMeta({
    title: "About DCW",
    description: "About Devdutta Creative World",
    path: "/about",
  });

  assert.equal(meta.title, "About DCW");
  assert.equal(meta.description, "About Devdutta Creative World");
  assert.ok(meta.alternates?.canonical);
  assert.match(String(meta.alternates.canonical), /\/about$/);
  assert.equal(meta.openGraph?.siteName, "Devdutta Creative World");
  assert.equal(meta.openGraph?.locale, "en_IN");
});
