import assert from "node:assert/strict";
import test from "node:test";
import { irishCapabilities } from "./capabilities.ts";
import { products } from "./catalog.ts";
import { DCW, PRIVILEGED_HOSTS, PUBLIC_HOSTS, PUBLIC_URLS, siteUrl } from "./identity.ts";

test("Web Intelligence is never advertised as live", () => {
  const web = irishCapabilities.find((item) => item.id === "web-intelligence");
  assert.ok(web);
  assert.notEqual(web.status, "live");
  assert.equal(web.status, "planned");
});

test("capability statuses are only the allowed public set", () => {
  for (const item of irishCapabilities) {
    assert.match(item.status, /^(live|in-development|planned)$/);
  }
});

test("DCW public catalog contains FastQue and IRISH without inventing additional launches", () => {
  assert.equal(products.length, 2);
  assert.deepEqual(products.map((product) => product.id), ["fastque", "irish"]);
  assert.equal(products.find((product) => product.id === "fastque")?.status, "live");
  assert.equal(products.find((product) => product.id === "irish")?.status, "development-preview");
  assert.deepEqual(products.map((product) => product.href), ["https://fastque.com", "https://irish.dcw.co.in"]);
  assert.ok(products.every((product) => product.category && product.summary && product.ctaLabel && product.statusLabel));
});

test("DCW definition names only the verified public products", () => {
  assert.match(DCW.definition, /technology and product development brand/);
  assert.match(DCW.definition, /FastQue and IRISH are products powered by DCW/);
  assert.doesNotMatch(DCW.definition, /ASHENGRID|LAM360|emerging projects/i);
});

test("privileged hosts stay off the public website hostnames", () => {
  assert.equal(PUBLIC_HOSTS.dcw, "dcw.co.in");
  assert.equal(PUBLIC_HOSTS.irish, "irish.dcw.co.in");
  assert.equal(PRIVILEGED_HOSTS.mcp, "mcp.dcw.co.in");
  assert.equal(PRIVILEGED_HOSTS.auth, "auth.dcw.co.in");
  assert.notEqual(PRIVILEGED_HOSTS.mcp, PUBLIC_HOSTS.irish);
  assert.doesNotMatch(PRIVILEGED_HOSTS.mcp, /irish\.dcw/);
  assert.doesNotMatch(PRIVILEGED_HOSTS.auth, /irish\.dcw/);
});

test("siteUrl normalizes configured trailing slashes for canonical URL composition", () => {
  const previous = process.env.NEXT_PUBLIC_DCW_URL;
  process.env.NEXT_PUBLIC_DCW_URL = "https://example.test///";
  try {
    assert.equal(siteUrl("dcw"), "https://example.test");
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_DCW_URL;
    else process.env.NEXT_PUBLIC_DCW_URL = previous;
  }
});

test("siteUrl keeps verified public defaults", () => {
  const previousDcw = process.env.NEXT_PUBLIC_DCW_URL;
  const previousIrish = process.env.NEXT_PUBLIC_IRISH_URL;
  delete process.env.NEXT_PUBLIC_DCW_URL;
  delete process.env.NEXT_PUBLIC_IRISH_URL;
  try {
    assert.equal(siteUrl("dcw"), PUBLIC_URLS.dcw);
    assert.equal(siteUrl("irish"), PUBLIC_URLS.irish);
  } finally {
    if (previousDcw === undefined) delete process.env.NEXT_PUBLIC_DCW_URL;
    else process.env.NEXT_PUBLIC_DCW_URL = previousDcw;
    if (previousIrish === undefined) delete process.env.NEXT_PUBLIC_IRISH_URL;
    else process.env.NEXT_PUBLIC_IRISH_URL = previousIrish;
  }
});
