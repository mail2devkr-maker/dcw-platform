export interface MissionStep {
  id: string;
  title: string;
  timestamp: string;
  status: "completed" | "in-progress" | "waiting-approval" | "pending";
  description: string;
}

export interface DemoProject {
  id: string;
  name: string;
  repository: string;
  branch: string;
  description: string;
  activeMissions: number;
  lastRun: string;
}

export interface DemoMission {
  id: string;
  projectId: string;
  title: string;
  goal: string;
  specialist: string;
  specialistVersion: string;
  status: "waiting-approval" | "running" | "completed";
  initiatedAt: string;
  timeline: MissionStep[];
  filesChanged: {
    path: string;
    additions: number;
    deletions: number;
    diff: string;
  }[];
  validationSummary: {
    typecheck: { status: "passed"; duration: string };
    lint: { status: "passed"; errors: 0; warnings: 0 };
    tests: { status: "passed"; total: number; passed: number; duration: string };
  };
  terminalLogs: string[];
  approvalRequest: {
    id: string;
    action: string;
    target: string;
    risk: "LOW" | "MEDIUM" | "HIGH";
    requestedAt: string;
    description: string;
    requiresOwnerSignoff: boolean;
  };
}

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: "proj-payments-core",
    name: "payments-core",
    repository: "mail2devkr-maker/payments-core",
    branch: "main",
    description: "Core transactional payment ingestion and webhook processing engine.",
    activeMissions: 1,
    lastRun: "2 minutes ago",
  },
  {
    id: "proj-dcw-platform",
    name: "dcw-platform",
    repository: "mail2devkr-maker/dcw-platform",
    branch: "master",
    description: "Parent portal and public IRISH product application web properties.",
    activeMissions: 0,
    lastRun: "18 minutes ago",
  },
  {
    id: "proj-doc-indexer",
    name: "doc-indexer",
    repository: "mail2devkr-maker/doc-indexer",
    branch: "main",
    description: "Offline AST and semantic indexing engine for private repositories.",
    activeMissions: 0,
    lastRun: "3 hours ago",
  },
];

export const DEMO_ACTIVE_MISSION: DemoMission = {
  id: "msn-2026-0906-881",
  projectId: "proj-payments-core",
  title: "Enforce idempotency key checking on Stripe invoice webhook handlers",
  goal: "Verify invoice webhook replay protection: inspect header validation, integrate atomic lookup in the idempotency store, and ensure regression test coverage before requesting PR publication.",
  specialist: "Developer Specialist",
  specialistVersion: "v0.8.2-local",
  status: "waiting-approval",
  initiatedAt: "2026-09-06 14:10:02 IST",
  timeline: [
    {
      id: "step-1",
      title: "Mission Contract Initialized",
      timestamp: "14:10:02",
      status: "completed",
      description: "Scope isolated to src/webhooks/invoice.ts. Bounded read/write filesystem sandbox locked.",
    },
    {
      id: "step-2",
      title: "Specialist Dispatched",
      timestamp: "14:10:05",
      status: "completed",
      description: "Developer Specialist spawned in ephemeral worktree without network egress.",
    },
    {
      id: "step-3",
      title: "Code Modification Applied",
      timestamp: "14:10:14",
      status: "completed",
      description: "Implemented IdempotencyStore.checkAndLock() to block concurrent duplicate webhook dispatches.",
    },
    {
      id: "step-4",
      title: "Validation Suite Executed",
      timestamp: "14:10:28",
      status: "completed",
      description: "Typecheck passed (0 errors), Lint passed (0 warnings), 14 unit tests executed successfully.",
    },
    {
      id: "step-5",
      title: "Evidence & Lineage Anchored",
      timestamp: "14:10:32",
      status: "completed",
      description: "Git diff generated, SHA256 checksums recorded, test artifacts bundled into mission report.",
    },
    {
      id: "step-6",
      title: "Approval Boundary Reached",
      timestamp: "14:10:33",
      status: "waiting-approval",
      description: "High-risk boundary: Remote GitHub PR publication requires explicit Owner approval.",
    },
  ],
  filesChanged: [
    {
      path: "src/webhooks/invoice.ts",
      additions: 18,
      deletions: 3,
      diff: `@@ -14,7 +14,22 @@ export async function handleInvoiceWebhook(req: Request): Promise<Response> {
-  const payload = await req.json();
-  await processInvoiceEvent(payload);
-  return new Response("OK", { status: 200 });
+  const idempotencyKey = req.headers.get("idempotency-key")?.trim();
+  if (!idempotencyKey) {
+    return new Response(JSON.stringify({ error: "Missing required Idempotency-Key header" }), {
+      status: 400,
+      headers: { "content-type": "application/json" },
+    });
+  }
+
+  const lockAcquired = await idempotencyStore.checkAndLock(idempotencyKey, { ttlSeconds: 86400 });
+  if (!lockAcquired) {
+    return new Response(JSON.stringify({ status: "already_processed", key: idempotencyKey }), {
+      status: 200,
+      headers: { "content-type": "application/json" },
+    });
+  }
+
+  const payload = await req.json();
+  await processInvoiceEvent(payload);
+  return new Response(JSON.stringify({ status: "processed" }), { status: 200 });`,
    },
    {
      path: "src/webhooks/invoice.test.ts",
      additions: 24,
      deletions: 0,
      diff: `@@ -48,0 +48,24 @@ describe("Invoice Webhook Idempotency", () => {
+  test("rejects webhook request when Idempotency-Key header is omitted", async () => {
+    const res = await handleInvoiceWebhook(new Request("https://api/webhooks/invoice", {
+      method: "POST",
+      body: JSON.stringify({ id: "evt_123" }),
+    }));
+    assert.equal(res.status, 400);
+  });
+
+  test("returns duplicate response for replayed idempotency key", async () => {
+    const req1 = new Request("https://api/webhooks/invoice", {
+      method: "POST",
+      headers: { "idempotency-key": "replay-test-001" },
+      body: JSON.stringify({ id: "evt_dup" }),
+    });
+    const res1 = await handleInvoiceWebhook(req1);
+    assert.equal(res1.status, 200);
+
+    const res2 = await handleInvoiceWebhook(req1);
+    assert.equal(res2.status, 200);
+    const data = await res2.json();
+    assert.equal(data.status, "already_processed");
+  });
+});`,
    },
  ],
  validationSummary: {
    typecheck: { status: "passed", duration: "1.4s" },
    lint: { status: "passed", errors: 0, warnings: 0 },
    tests: { status: "passed", total: 14, passed: 14, duration: "320ms" },
  },
  terminalLogs: [
    "$ tsc --noEmit -p tsconfig.json",
    "✔ TypeScript verification completed with 0 errors.",
    "$ eslint src/webhooks/invoice.ts src/webhooks/invoice.test.ts --max-warnings=0",
    "✔ Lint check clean (0 errors, 0 warnings).",
    "$ node --test src/webhooks/invoice.test.ts",
    "✔ rejects webhook request when Idempotency-Key header is omitted (1.2ms)",
    "✔ returns duplicate response for replayed idempotency key (2.8ms)",
    "✔ processes valid new invoice event (4.1ms)",
    "ℹ tests 14",
    "ℹ pass 14",
    "ℹ fail 0",
    "ℹ duration_ms 318.42",
    "--------------------------------------------------",
    "[IRISH RUNTIME] All pre-publication checks satisfied.",
    "[IRISH RUNTIME] Halting at Owner Approval Gate #appr-0906-44.",
  ],
  approvalRequest: {
    id: "appr-0906-44",
    action: "Publish GitHub Pull Request",
    target: "mail2devkr-maker/payments-core (branch: feature/idempotency-enforcement)",
    risk: "MEDIUM",
    requestedAt: "2026-09-06 14:10:33 IST",
    description: "Permission to push branch to GitHub remote and open pull request with verified diff and test evidence.",
    requiresOwnerSignoff: true,
  },
};

export const DEMO_RUNTIME_STATUS = {
  daemonStatus: "ONLINE",
  version: "0.8.2-local",
  runtimeHost: "Local Windows Daemon (127.0.0.1:4010)",
  isolatedBoundary: "Strict Read-Only Host Filesystem",
  activeMissions: 1,
  completedMissions: 142,
  canonicalRemote: "GitHub (mail2devkr-maker)",
  privilegedEndpoints: {
    mcp: "Isolated (mcp.dcw.co.in - Local Private Control)",
    oauth: "Isolated (auth.dcw.co.in - Owner Authenticated)",
    publicWebsite: "Read-Only Preview Mode (irish.dcw.co.in)",
  },
  modelRouting: [
    { provider: "Anthropic", model: "Claude 3.7 Sonnet", role: "Primary Planning & Specialist Reasoning", status: "Connected" },
    { provider: "OpenAI", model: "GPT-4o", role: "Verification & Redundant Diff Analysis", status: "Connected" },
    { provider: "Local Ollama", model: "Qwen 2.5 Coder 32B", role: "Offline Sandbox / Local Fallback", status: "Available" },
  ],
};
