import assert from "node:assert/strict";
import test from "node:test";
import { apexRedirectTarget, isPrivilegedHost, PUBLIC_IRISH } from "./hosts.ts";

test("www permanently maps to apex", () => {
  assert.equal(apexRedirectTarget("www.dcw.co.in"), "https://dcw.co.in");
  assert.equal(apexRedirectTarget("dcw.co.in"), null);
  assert.equal(apexRedirectTarget("irish.dcw.co.in"), null);
});

test("privileged hosts are never treated as public irish", () => {
  assert.equal(isPrivilegedHost("mcp.dcw.co.in"), true);
  assert.equal(isPrivilegedHost("auth.dcw.co.in"), true);
  assert.equal(isPrivilegedHost(PUBLIC_IRISH), false);
  assert.equal(isPrivilegedHost("mcp.irish.dcw.co.in"), false);
});
