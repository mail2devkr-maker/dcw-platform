"use client";

import { useState } from "react";
import {
  DEMO_ACTIVE_MISSION,
  DEMO_PROJECTS,
  DEMO_RUNTIME_STATUS,
  type DemoProject,
} from "@/lib/demo-data";

type Tab =
  | "workspace"
  | "diff"
  | "validation"
  | "approval"
  | "projects"
  | "runtime"
  | "report"
  | "rules";

export function DemoClient() {
  const [activeTab, setActiveTab] = useState<Tab>("workspace");
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const [approvalStatus, setApprovalStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [activeProject, setActiveProject] = useState<DemoProject>(DEMO_PROJECTS[0]!);

  const mission = DEMO_ACTIVE_MISSION;
  const currentFile = mission.filesChanged[selectedFileIndex] ?? mission.filesChanged[0]!;

  return (
    <div className="rounded-lg border border-[color:var(--line-strong)] bg-[color:var(--surface)] text-[color:var(--ink)] shadow-2xl">
      {/* Top Bar / Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--line)] bg-[color:var(--canvas-strong)] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 items-center justify-center">
            <span className="h-2 w-2 animate-ping rounded-full bg-[color:var(--ok)] opacity-75" />
            <span className="absolute h-2 w-2 rounded-full bg-[color:var(--ok)]" />
          </span>
          <span className="font-mono text-xs font-semibold text-[color:var(--ink)]">
            IRISH LOCAL DAEMON <span className="text-[color:var(--ink-muted)]">({DEMO_RUNTIME_STATUS.version})</span>
          </span>
          <span className="hidden rounded bg-[color:var(--line)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--accent)] sm:inline">
            READ-ONLY PREVIEW
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-[color:var(--ink-muted)]">
            <span>Project:</span>
            <span className="font-mono font-medium text-[color:var(--ink)]">{activeProject.name}</span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-full border border-[color:var(--ok)]/40 px-2 py-0.5 text-[10px] text-[color:var(--ok)]">
              Tests 14/14 PASS
            </span>
            <span className="rounded-full border border-[color:var(--accent)]/40 px-2 py-0.5 text-[10px] text-[color:var(--accent)]">
              Approval 1 PENDING
            </span>
          </div>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex overflow-x-auto border-b border-[color:var(--line)] bg-[color:var(--surface-2)] px-4">
        {[
          { id: "workspace", label: "Mission Workspace" },
          { id: "diff", label: `Diff Review (${mission.filesChanged.length})` },
          { id: "validation", label: "Validation & Terminal" },
          {
            id: "approval",
            label: `Approval Center ${approvalStatus === "pending" ? "●" : ""}`,
            badge: approvalStatus === "approved" ? "Approved" : undefined,
          },
          { id: "projects", label: `Projects (${DEMO_PROJECTS.length})` },
          { id: "runtime", label: "Runtime & Providers" },
          { id: "report", label: "Mission Report" },
          { id: "rules", label: "Agent Rules" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`flex items-center gap-1.5 border-b-2 px-4 py-3 font-mono text-xs font-medium whitespace-nowrap transition ${
              activeTab === tab.id
                ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                : "border-transparent text-[color:var(--ink-muted)] hover:border-[color:var(--line-strong)] hover:text-[color:var(--ink)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {/* Tab 1: Mission Workspace */}
        {activeTab === "workspace" && (
          <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 border-b border-[color:var(--line)] pb-5 md:flex-row md:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[color:var(--accent)]">{mission.id}</span>
                  <span className="rounded bg-[color:var(--line)] px-2 py-0.5 text-[10px] text-[color:var(--ink-muted)]">
                    {mission.specialist}
                  </span>
                  <span className="rounded border border-[color:var(--ok)]/30 px-2 py-0.5 text-[10px] text-[color:var(--ok)]">
                    All Tests Passed
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--ink)]">{mission.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--ink-muted)]">
                  {mission.goal}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("approval")}
                  className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
                >
                  Inspect Approval Gate →
                </button>
              </div>
            </div>

            {/* Timeline Breakdown */}
            <div>
              <h3 className="font-mono text-xs font-semibold tracking-wider text-[color:var(--accent)] uppercase">
                Mission Execution Lineage
              </h3>
              <div className="mt-4 space-y-3">
                {mission.timeline.map((step, idx) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4"
                  >
                    <div className="flex flex-col items-center">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--surface)] font-mono text-xs font-bold text-[color:var(--accent)]">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-[color:var(--ink)]">{step.title}</p>
                        <span className="font-mono text-[11px] text-[color:var(--ink-muted)]">{step.timestamp}</span>
                      </div>
                      <p className="mt-1 text-xs text-[color:var(--ink-muted)]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Diff Review */}
        {activeTab === "diff" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--line)] pb-4">
              <div className="flex items-center gap-2">
                {mission.filesChanged.map((f, i) => (
                  <button
                    key={f.path}
                    type="button"
                    onClick={() => setSelectedFileIndex(i)}
                    className={`rounded px-3 py-1.5 font-mono text-xs transition ${
                      selectedFileIndex === i
                        ? "bg-[color:var(--accent)] font-semibold text-[color:var(--canvas)]"
                        : "border border-[color:var(--line)] text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
                    }`}
                  >
                    {f.path} (+{f.additions}/-{f.deletions})
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs text-[color:var(--ink-muted)]">
                Local worktree diff (deterministic export)
              </span>
            </div>

            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-4 font-mono text-xs">
              <div className="mb-2 flex items-center justify-between text-[11px] text-[color:var(--ink-muted)]">
                <span>{currentFile.path}</span>
                <span>+{currentFile.additions} / -{currentFile.deletions} lines</span>
              </div>
              <pre className="overflow-x-auto leading-relaxed text-[color:var(--ink)]">
                {currentFile.diff.split("\n").map((line, idx) => {
                  let color = "text-[color:var(--ink-muted)]";
                  let bg = "";
                  if (line.startsWith("+") && !line.startsWith("+++")) {
                    color = "text-[#63E6BE]";
                    bg = "bg-[#63E6BE]/10";
                  } else if (line.startsWith("-") && !line.startsWith("---")) {
                    color = "text-[#FF7B72]";
                    bg = "bg-[#FF7B72]/10";
                  } else if (line.startsWith("@@")) {
                    color = "text-[#78B7FF]";
                  }
                  return (
                    <div key={idx} className={`${color} ${bg} px-1.5 py-0.5 rounded-xs`}>
                      {line}
                    </div>
                  );
                })}
              </pre>
            </div>
          </div>
        )}

        {/* Tab 3: Validation & Terminal */}
        {activeTab === "validation" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4">
                <p className="font-mono text-xs text-[color:var(--ink-muted)]">TypeScript Compiler</p>
                <p className="mt-2 text-xl font-bold text-[color:var(--ok)]">Passed (0 errors)</p>
                <p className="mt-1 font-mono text-[11px] text-[color:var(--ink-muted)]">Duration: {mission.validationSummary.typecheck.duration}</p>
              </div>
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4">
                <p className="font-mono text-xs text-[color:var(--ink-muted)]">Static Analysis (ESLint)</p>
                <p className="mt-2 text-xl font-bold text-[color:var(--ok)]">Clean (0 warnings)</p>
                <p className="mt-1 font-mono text-[11px] text-[color:var(--ink-muted)]">Max warnings limit: 0</p>
              </div>
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4">
                <p className="font-mono text-xs text-[color:var(--ink-muted)]">Unit Test Harness</p>
                <p className="mt-2 text-xl font-bold text-[color:var(--ok)]">{mission.validationSummary.tests.passed} / {mission.validationSummary.tests.total} Passed</p>
                <p className="mt-1 font-mono text-[11px] text-[color:var(--ink-muted)]">Duration: {mission.validationSummary.tests.duration}</p>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-wider text-[color:var(--accent)] uppercase">
                Terminal Validation Logs
              </h4>
              <div className="mt-3 rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-4 font-mono text-xs">
                {mission.terminalLogs.map((log, i) => (
                  <p key={i} className={`leading-relaxed ${log.includes("✔") ? "text-[color:var(--ok)]" : log.startsWith("$") ? "text-[color:var(--accent)] font-semibold" : "text-[color:var(--ink-muted)]"}`}>
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Approval Center */}
        {activeTab === "approval" && (
          <div className="space-y-6">
            <div className="rounded border border-[color:var(--line-strong)] bg-[color:var(--canvas)] p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[color:var(--line)] pb-4">
                <div>
                  <span className="font-mono text-xs text-[color:var(--accent)]">{mission.approvalRequest.id}</span>
                  <h3 className="mt-1 text-lg font-semibold text-[color:var(--ink)]">
                    Publication Gate: {mission.approvalRequest.action}
                  </h3>
                </div>
                <span className="rounded bg-yellow-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-yellow-400">
                  Risk Assessment: {mission.approvalRequest.risk}
                </span>
              </div>

              <div className="mt-5 space-y-4 text-sm text-[color:var(--ink-muted)]">
                <p>
                  <strong className="text-[color:var(--ink)]">Description: </strong>
                  {mission.approvalRequest.description}
                </p>
                <p>
                  <strong className="text-[color:var(--ink)]">Destination: </strong>
                  <code className="font-mono text-xs text-[color:var(--accent)]">{mission.approvalRequest.target}</code>
                </p>
                <p>
                  <strong className="text-[color:var(--ink)]">Policy Enforcement: </strong>
                  Autonomous direct merge to canonical branches is strictly prohibited. Publication dispatches a
                  standard pull request for review.
                </p>
              </div>

              <div className="mt-8 border-t border-[color:var(--line)] pt-5">
                {approvalStatus === "pending" ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setApprovalStatus("approved")}
                      className="rounded-full bg-[color:var(--accent)] px-5 py-2 text-xs font-semibold text-[color:var(--canvas)] transition hover:bg-[color:var(--accent-strong)]"
                    >
                      Simulate Owner Approval
                    </button>
                    <button
                      type="button"
                      onClick={() => setApprovalStatus("rejected")}
                      className="rounded-full border border-[color:var(--danger)]/50 px-5 py-2 text-xs font-semibold text-[color:var(--danger)] transition hover:bg-[color:var(--danger)]/10"
                    >
                      Reject Publication
                    </button>
                    <span className="text-xs text-[color:var(--ink-muted)]">
                      (Interactive simulation: tests approval workflow state machine)
                    </span>
                  </div>
                ) : approvalStatus === "approved" ? (
                  <div className="rounded border border-[color:var(--ok)]/40 bg-[color:var(--ok)]/10 p-4">
                    <p className="font-semibold text-[color:var(--ok)]">✔ Simulated Owner Signoff Recorded</p>
                    <p className="mt-1 text-xs text-[color:var(--ink-muted)]">
                      In production, owner verification unlocks cryptographic dispatch of the verified diff to GitHub
                      as a pull request.
                    </p>
                    <button
                      type="button"
                      onClick={() => setApprovalStatus("pending")}
                      className="mt-3 text-xs text-[color:var(--accent)] underline"
                    >
                      Reset simulation
                    </button>
                  </div>
                ) : (
                  <div className="rounded border border-[color:var(--danger)]/40 bg-[color:var(--danger)]/10 p-4">
                    <p className="font-semibold text-[color:var(--danger)]">✖ Publication Request Dismissed</p>
                    <p className="mt-1 text-xs text-[color:var(--ink-muted)]">
                      Changes remain safely confined in the local working tree. No remote state was modified.
                    </p>
                    <button
                      type="button"
                      onClick={() => setApprovalStatus("pending")}
                      className="mt-3 text-xs text-[color:var(--accent)] underline"
                    >
                      Reset simulation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Projects */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            <p className="text-xs text-[color:var(--ink-muted)]">
              Local repositories registered with the IRISH daemon. All git operations remain local until explicit PR publication.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DEMO_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`cursor-pointer rounded border p-5 transition ${
                    activeProject.id === project.id
                      ? "border-[color:var(--accent)] bg-[color:var(--canvas-strong)]"
                      : "border-[color:var(--line)] bg-[color:var(--canvas)] hover:border-[color:var(--line-strong)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm font-semibold text-[color:var(--ink)]">{project.name}</p>
                    {project.activeMissions > 0 && (
                      <span className="rounded bg-[color:var(--accent)]/10 px-2 py-0.5 font-mono text-[10px] text-[color:var(--accent)]">
                        1 Active
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-[color:var(--ink-muted)]">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-[color:var(--line)] pt-3 font-mono text-[11px] text-[color:var(--ink-muted)]">
                    <span>{project.branch}</span>
                    <span>{project.lastRun}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Runtime & Providers */}
        {activeTab === "runtime" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-5">
                <h4 className="font-mono text-xs tracking-wider text-[color:var(--accent)] uppercase">
                  Runtime Daemon Identity
                </h4>
                <div className="mt-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-[color:var(--line)]">
                    <span className="text-[color:var(--ink-muted)]">Status</span>
                    <span className="text-[color:var(--ok)] font-semibold">{DEMO_RUNTIME_STATUS.daemonStatus}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[color:var(--line)]">
                    <span className="text-[color:var(--ink-muted)]">Host Binding</span>
                    <span>{DEMO_RUNTIME_STATUS.runtimeHost}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[color:var(--line)]">
                    <span className="text-[color:var(--ink-muted)]">Boundary Isolation</span>
                    <span>{DEMO_RUNTIME_STATUS.isolatedBoundary}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[color:var(--ink-muted)]">Canonical Remote</span>
                    <span>{DEMO_RUNTIME_STATUS.canonicalRemote}</span>
                  </div>
                </div>
              </div>

              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-5">
                <h4 className="font-mono text-xs tracking-wider text-[color:var(--accent)] uppercase">
                  Infrastructure Segregation
                </h4>
                <div className="mt-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-[color:var(--line)]">
                    <span className="text-[color:var(--ink-muted)]">Privileged MCP</span>
                    <span className="text-yellow-400">{DEMO_RUNTIME_STATUS.privilegedEndpoints.mcp}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[color:var(--line)]">
                    <span className="text-[color:var(--ink-muted)]">Privileged OAuth</span>
                    <span className="text-yellow-400">{DEMO_RUNTIME_STATUS.privilegedEndpoints.oauth}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[color:var(--ink-muted)]">Public App</span>
                    <span className="text-[color:var(--ok)]">{DEMO_RUNTIME_STATUS.privilegedEndpoints.publicWebsite}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-wider text-[color:var(--accent)] uppercase">
                Replaceable Model Routing Adapters
              </h4>
              <div className="mt-3 divide-y divide-[color:var(--line)] rounded border border-[color:var(--line)] bg-[color:var(--canvas)]">
                {DEMO_RUNTIME_STATUS.modelRouting.map((model) => (
                  <div key={model.provider} className="flex flex-wrap items-center justify-between gap-4 p-4 text-xs">
                    <div>
                      <span className="font-mono font-bold text-[color:var(--ink)]">{model.provider}</span>
                      <span className="ml-2 font-mono text-[color:var(--accent)]">({model.model})</span>
                      <p className="mt-0.5 text-[color:var(--ink-muted)]">{model.role}</p>
                    </div>
                    <span className="rounded bg-[color:var(--ok)]/10 px-2 py-0.5 font-mono text-[11px] text-[color:var(--ok)]">
                      {model.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 7: Mission Report */}
        {activeTab === "report" && (
          <div className="space-y-4">
            <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas-strong)] p-6 font-mono text-xs leading-relaxed">
              <div className="border-b border-[color:var(--line)] pb-4 text-sm font-bold text-[color:var(--ink)]">
                MISSION AUDIT REPORT — {mission.id}
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 text-[color:var(--ink-muted)]">
                <div>Project: <span className="text-[color:var(--ink)]">{mission.projectId}</span></div>
                <div>Specialist: <span className="text-[color:var(--ink)]">{mission.specialist} ({mission.specialistVersion})</span></div>
                <div>Initiated: <span className="text-[color:var(--ink)]">{mission.initiatedAt}</span></div>
                <div>Outcome: <span className="text-[color:var(--ok)]">Validated, Paused at Approval Gate</span></div>
              </div>

              <div className="mt-6">
                <p className="text-[color:var(--accent)] font-semibold">EVIDENCE ATTESTATION:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-[color:var(--ink-muted)]">
                  <li>Changes bounded to 2 files (+42 / -3 lines)</li>
                  <li>Typecheck sha256 checksum: <code className="text-[color:var(--ink)]">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code></li>
                  <li>Unit test pass rate: 100% (14 / 14 suites clean)</li>
                  <li>No secrets detected in diff or intermediate buffer trees</li>
                  <li>Owner authorization token required before remote git branch push</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 8: Agent Rules */}
        {activeTab === "rules" && (
          <div className="space-y-4">
            <p className="text-xs text-[color:var(--ink-muted)]">
              Formal constraints enforced on specialist agents by the IRISH local supervisor daemon.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4 text-xs">
                <p className="font-mono font-semibold text-[color:var(--accent)]">RULE 01: BOUNDED FS</p>
                <p className="mt-2 text-[color:var(--ink-muted)]">
                  Specialists can only read files within declared mission scopes and can only write to ephemeral scratch
                  directories. System files, credentials, and parent trees are strictly inaccessible.
                </p>
              </div>
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4 text-xs">
                <p className="font-mono font-semibold text-[color:var(--accent)]">RULE 02: MANDATORY VALIDATION</p>
                <p className="mt-2 text-[color:var(--ink-muted)]">
                  No mission state can advance to review without explicit machine validation logs (compiler check,
                  linter, and regression tests) recorded with exit code 0.
                </p>
              </div>
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4 text-xs">
                <p className="font-mono font-semibold text-[color:var(--accent)]">RULE 03: ZERO SILENT WRITES</p>
                <p className="mt-2 text-[color:var(--ink-muted)]">
                  Direct git push to master or main branches is blocked at the supervisor layer. All publication must take
                  the form of a pull request.
                </p>
              </div>
              <div className="rounded border border-[color:var(--line)] bg-[color:var(--canvas)] p-4 text-xs">
                <p className="font-mono font-semibold text-[color:var(--accent)]">RULE 04: PRIVILEGED ISOLATION</p>
                <p className="mt-2 text-[color:var(--ink-muted)]">
                  MCP servers and owner OAuth identity remain strictly isolated from public internet exposure and client
                  runtimes.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
