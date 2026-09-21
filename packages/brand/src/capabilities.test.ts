import assert from "node:assert/strict";
import test from "node:test";
import { irishCapabilities } from "./capabilities.ts";
import { products } from "./catalog.ts";
import { PRIVILEGED_HOSTS, PUBLIC_HOSTS } from "./identity.ts";

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
  assert.equal(products.find((product) => product.id === "irish")?.status, "in-development");
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
