import assert from "node:assert/strict";
import test from "node:test";
import { IRISH } from "@dcw/brand";
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

test("root metadata defines IRISH AI as the AI Project Execution Platform", () => {
  const meta = pageMeta({
    title: "legacy home title",
    description: "legacy home description",
    path: "/",
  });

  assert.equal(meta.title, "IRISH AI — AI Project Execution Platform | DCW");
  assert.equal(meta.description, IRISH.definition);
  assert.match(String(meta.description), /IRISH is DCW's local-first AI Project Execution Platform/);
  assert.equal(meta.openGraph?.title, "IRISH AI — AI Project Execution Platform | DCW");
  assert.equal(meta.twitter?.title, "IRISH AI — AI Project Execution Platform | DCW");
});
