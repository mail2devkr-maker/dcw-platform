import assert from "node:assert/strict";
import test from "node:test";
import { nextHeaderSource, securityHeaders } from "./headers.ts";
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

test("public headers include transport, framing, and browser-permission protections", () => {
  const headers = new Map(securityHeaders.map(({ key, value }) => [key, value]));

  assert.equal(headers.get("X-Content-Type-Options"), "nosniff");
  assert.equal(headers.get("Strict-Transport-Security"), "max-age=31536000");
  assert.equal(headers.get("X-Frame-Options"), "DENY");
  assert.equal(headers.get("Cross-Origin-Opener-Policy"), "same-origin");
  assert.equal(headers.get("Permissions-Policy"), "camera=(), microphone=(), geolocation=(), payment=()");
});

test("CSP blocks plugins, frames, and non-site workers while allowing the rendered app", () => {
  const csp = securityHeaders.find(({ key }) => key === "Content-Security-Policy")?.value ?? "";

  for (const directive of ["object-src 'none'", "frame-src 'none'", "manifest-src 'self'", "worker-src 'self'", "frame-ancestors 'none'"]) {
    assert.ok(csp.includes(directive), `missing CSP directive: ${directive}`);
  }
});

test("Next header source covers every public route", () => {
  assert.deepEqual(nextHeaderSource(), [{ source: "/(.*)", headers: securityHeaders }]);
});
