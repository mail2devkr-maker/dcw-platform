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

test("IRISH is the only launched product", () => {
  assert.equal(products.length, 1);
  assert.equal(products[0]?.id, "irish");
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
