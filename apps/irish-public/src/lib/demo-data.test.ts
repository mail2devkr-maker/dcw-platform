import assert from "node:assert/strict";
import test from "node:test";
import { DEMO_ACTIVE_MISSION, DEMO_PROJECTS, DEMO_RUNTIME_STATUS } from "./demo-data.ts";

test("demo data contains valid projects", () => {
  assert.ok(DEMO_PROJECTS.length > 0);
  for (const p of DEMO_PROJECTS) {
    assert.ok(p.id.startsWith("proj-"));
    assert.ok(p.name);
    assert.ok(p.repository);
  }
});

test("demo active mission has valid timeline, validation, and files", () => {
  assert.equal(DEMO_ACTIVE_MISSION.status, "waiting-approval");
  assert.ok(DEMO_ACTIVE_MISSION.timeline.length >= 4);
  assert.ok(DEMO_ACTIVE_MISSION.filesChanged.length > 0);
  assert.equal(DEMO_ACTIVE_MISSION.validationSummary.tests.passed, DEMO_ACTIVE_MISSION.validationSummary.tests.total);
  assert.ok(DEMO_ACTIVE_MISSION.approvalRequest.requiresOwnerSignoff);
});

test("runtime status keeps privileged endpoints segregated", () => {
  assert.equal(DEMO_RUNTIME_STATUS.daemonStatus, "ONLINE");
  assert.match(DEMO_RUNTIME_STATUS.privilegedEndpoints.mcp, /Isolated/);
  assert.match(DEMO_RUNTIME_STATUS.privilegedEndpoints.oauth, /Isolated/);
  assert.match(DEMO_RUNTIME_STATUS.privilegedEndpoints.publicWebsite, /Read-Only/);
});
