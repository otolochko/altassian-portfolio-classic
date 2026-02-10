"use client";

import { useMemo, useState } from "react";

type SceneId = "scene1" | "scene2";

type FlowItem = {
  id: string;
  lane: string;
  key: string;
  detail: string;
  tone: string;
};

type MiniCard = {
  title: string;
  bars: string[];
  accent: string;
};

type AtlassianCard = {
  id: string;
  label: string;
  product: "Jira" | "Confluence" | "Bitbucket" | "Assets" | "Automation";
  icon: string;
  title: string;
  meta: string;
  tone: string;
};

type AtlassianPill = {
  id: string;
  label: string;
  text: string;
  tone: string;
};

type AtlassianWidget = {
  id: string;
  label: string;
  variant:
    | "kanban-lane"
    | "table"
    | "timeline"
    | "chart"
    | "approvals"
    | "comments"
    | "avatars"
    | "dependencies";
  tone: string;
};

type ElementDef = {
  id: string;
  label: string;
  type:
    | "main-card"
    | "flow-node"
    | "flow-arrow"
    | "chip"
    | "mini-card"
    | "connector"
    | "atlassian-card"
    | "atlassian-pill"
    | "atlassian-widget";
  width: number;
  height: number;
  flowIndex?: number;
  chipIndex?: number;
  miniIndex?: number;
  connectorKind?: "h" | "v" | "dot" | "accent" | "arrow";
  atlassianCardIndex?: number;
  atlassianPillIndex?: number;
  atlassianWidgetIndex?: number;
};

type PlacedItem = {
  elementId: string;
  x: number;
  y: number;
  scale: number;
};

type DragPayload = {
  elementId: string;
  from: "palette" | SceneId;
};

const flowItems: FlowItem[] = [
  {
    id: "1",
    lane: "Intake",
    key: "ITSM-12",
    detail: "Capture request",
    tone: "border-ink-200/70 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 text-ink-700 dark:text-zinc-300",
  },
  {
    id: "2",
    lane: "Triage",
    key: "OPS-84",
    detail: "Prioritize and assign",
    tone: "border-ink-200/70 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 text-ink-700 dark:text-zinc-300",
  },
  {
    id: "3",
    lane: "Automate",
    key: "Rule + Assets",
    detail: "Run onboarding workflow",
    tone: "border-blue-200 dark:border-blue-900/60 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    id: "4",
    lane: "Deliver",
    key: "SLA Green",
    detail: "Complete and notify",
    tone: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-100/80 dark:bg-emerald-900/25 text-emerald-700 dark:text-emerald-300",
  },
];

const chips = ["ITSM-12", "OPS-84", "Incident", "Change", "SLA Green", "High Priority", "Assets Linked"];

const miniCards: MiniCard[] = [
  {
    title: "Request Details",
    bars: ["w-20", "w-full", "w-4/5"],
    accent: "bg-brand-400/50 dark:bg-blue-500/45",
  },
  {
    title: "Automation Rule",
    bars: ["w-14", "w-full", "w-2/3"],
    accent: "bg-emerald-400/45 dark:bg-emerald-500/40",
  },
  {
    title: "SLA Status",
    bars: ["w-16", "w-full", "w-3/4"],
    accent: "bg-cyan-400/45",
  },
];

const atlassianCards: AtlassianCard[] = [
  {
    id: "JIRA_SPRINT_BOARD",
    label: "Jira Sprint Board",
    product: "Jira",
    icon: "J",
    title: "Sprint Board",
    meta: "23 issues in active sprint",
    tone: "border-blue-200 dark:border-blue-900/60 bg-blue-100/80 dark:bg-blue-900/30",
  },
  {
    id: "JIRA_BUG_TRIAGE",
    label: "Jira Bug Triage",
    product: "Jira",
    icon: "J",
    title: "Bug Triage Queue",
    meta: "8 critical / 15 medium",
    tone: "border-blue-200 dark:border-blue-900/60 bg-blue-100/80 dark:bg-blue-900/30",
  },
  {
    id: "JIRA_RELEASE_HUB",
    label: "Jira Release Hub",
    product: "Jira",
    icon: "J",
    title: "Release Readiness",
    meta: "v2.4 deploy checklist",
    tone: "border-blue-200 dark:border-blue-900/60 bg-blue-100/80 dark:bg-blue-900/30",
  },
  {
    id: "CONF_KNOWLEDGE_ARTICLE",
    label: "Confluence KB Article",
    product: "Confluence",
    icon: "C",
    title: "Knowledge Base Entry",
    meta: "Incident response handbook",
    tone: "border-indigo-200 dark:border-indigo-900/60 bg-indigo-100/80 dark:bg-indigo-900/25",
  },
  {
    id: "CONF_RUNBOOK_PAGE",
    label: "Confluence Runbook",
    product: "Confluence",
    icon: "C",
    title: "Ops Runbook",
    meta: "On-call escalation flow",
    tone: "border-indigo-200 dark:border-indigo-900/60 bg-indigo-100/80 dark:bg-indigo-900/25",
  },
  {
    id: "CONF_ARCH_DECISION",
    label: "Confluence ADR",
    product: "Confluence",
    icon: "C",
    title: "Architecture Decision",
    meta: "Service ownership model",
    tone: "border-indigo-200 dark:border-indigo-900/60 bg-indigo-100/80 dark:bg-indigo-900/25",
  },
  {
    id: "BITBUCKET_PR_REVIEW",
    label: "Bitbucket PR Review",
    product: "Bitbucket",
    icon: "B",
    title: "Pull Request Review",
    meta: "4 approvals required",
    tone: "border-sky-200 dark:border-sky-900/60 bg-sky-100/80 dark:bg-sky-900/25",
  },
  {
    id: "BITBUCKET_PIPELINE",
    label: "Bitbucket Pipeline",
    product: "Bitbucket",
    icon: "B",
    title: "CI Pipeline",
    meta: "Build / test / deploy",
    tone: "border-sky-200 dark:border-sky-900/60 bg-sky-100/80 dark:bg-sky-900/25",
  },
  {
    id: "BITBUCKET_BRANCH_RULE",
    label: "Bitbucket Branch Policy",
    product: "Bitbucket",
    icon: "B",
    title: "Branch Restrictions",
    meta: "Protected main branch",
    tone: "border-sky-200 dark:border-sky-900/60 bg-sky-100/80 dark:bg-sky-900/25",
  },
  {
    id: "ASSETS_CMDB_ITEM",
    label: "Assets CMDB Object",
    product: "Assets",
    icon: "A",
    title: "CMDB Service Object",
    meta: "Dependencies mapped",
    tone: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-100/80 dark:bg-emerald-900/25",
  },
  {
    id: "ASSETS_OWNER_MAP",
    label: "Assets Owner Map",
    product: "Assets",
    icon: "A",
    title: "Service Ownership",
    meta: "Teams and contacts linked",
    tone: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-100/80 dark:bg-emerald-900/25",
  },
  {
    id: "ASSETS_LIFECYCLE",
    label: "Assets Lifecycle",
    product: "Assets",
    icon: "A",
    title: "Hardware Lifecycle",
    meta: "Provisioning to retire",
    tone: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-100/80 dark:bg-emerald-900/25",
  },
  {
    id: "AUTO_RULE_ENGINE",
    label: "Automation Rule Engine",
    product: "Automation",
    icon: "R",
    title: "Global Rule Trigger",
    meta: "When issue updated",
    tone: "border-amber-200 dark:border-amber-900/60 bg-amber-100/80 dark:bg-amber-900/25",
  },
  {
    id: "AUTO_WEBHOOK_ACTION",
    label: "Automation Webhook",
    product: "Automation",
    icon: "R",
    title: "Webhook Action",
    meta: "POST to integration endpoint",
    tone: "border-amber-200 dark:border-amber-900/60 bg-amber-100/80 dark:bg-amber-900/25",
  },
  {
    id: "AUTO_APPROVAL_FLOW",
    label: "Automation Approval",
    product: "Automation",
    icon: "R",
    title: "Approval Workflow",
    meta: "Manager -> Security -> Done",
    tone: "border-amber-200 dark:border-amber-900/60 bg-amber-100/80 dark:bg-amber-900/25",
  },
];

const atlassianPills: AtlassianPill[] = [
  {
    id: "PILL_JIRA_SLA",
    label: "Jira SLA Breach",
    text: "Jira SLA at risk",
    tone: "border-blue-200 dark:border-blue-900/60 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    id: "PILL_CONF_APPROVED",
    label: "Confluence Approved",
    text: "Confluence page approved",
    tone: "border-indigo-200 dark:border-indigo-900/60 bg-indigo-100/80 dark:bg-indigo-900/25 text-indigo-700 dark:text-indigo-300",
  },
  {
    id: "PILL_BITBUCKET_MERGED",
    label: "Bitbucket Merged",
    text: "Bitbucket PR merged",
    tone: "border-sky-200 dark:border-sky-900/60 bg-sky-100/80 dark:bg-sky-900/25 text-sky-700 dark:text-sky-300",
  },
  {
    id: "PILL_ASSETS_LINKED",
    label: "Assets Linked",
    text: "Assets object linked",
    tone: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-100/80 dark:bg-emerald-900/25 text-emerald-700 dark:text-emerald-300",
  },
  {
    id: "PILL_AUTOMATION_DONE",
    label: "Automation Complete",
    text: "Automation executed",
    tone: "border-amber-200 dark:border-amber-900/60 bg-amber-100/80 dark:bg-amber-900/25 text-amber-700 dark:text-amber-300",
  },
];

const atlassianWidgets: AtlassianWidget[] = [
  { id: "WIDGET_KANBAN_LANE", label: "Kanban Lane", variant: "kanban-lane", tone: "border-blue-200 dark:border-blue-900/60 bg-blue-100/80 dark:bg-blue-900/25" },
  { id: "WIDGET_TABLE_VIEW", label: "Table View", variant: "table", tone: "border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/80" },
  { id: "WIDGET_TIMELINE", label: "Timeline", variant: "timeline", tone: "border-indigo-200 dark:border-indigo-900/60 bg-indigo-100/80 dark:bg-indigo-900/25" },
  { id: "WIDGET_DEPLOY_CHART", label: "Deploy Chart", variant: "chart", tone: "border-sky-200 dark:border-sky-900/60 bg-sky-100/80 dark:bg-sky-900/25" },
  { id: "WIDGET_APPROVAL_STEPS", label: "Approval Steps", variant: "approvals", tone: "border-amber-200 dark:border-amber-900/60 bg-amber-100/80 dark:bg-amber-900/25" },
  { id: "WIDGET_COMMENTS", label: "Comment Thread", variant: "comments", tone: "border-indigo-200 dark:border-indigo-900/60 bg-indigo-100/80 dark:bg-indigo-900/25" },
  { id: "WIDGET_ASSIGNEES", label: "Assignee Cluster", variant: "avatars", tone: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-100/80 dark:bg-emerald-900/25" },
  { id: "WIDGET_DEPENDENCY_MAP", label: "Dependency Map", variant: "dependencies", tone: "border-cyan-200 dark:border-cyan-900/60 bg-cyan-100/80 dark:bg-cyan-900/25" },
];

const elements: ElementDef[] = [
  { id: "MAIN_JIRA_CARD", label: "Main Jira Card", type: "main-card", width: 560, height: 380 },
  ...flowItems.map((item, idx) => ({
    id: `FLOW_NODE_${item.id}`,
    label: `Flow Node ${item.id}`,
    type: "flow-node" as const,
    width: 224,
    height: 112,
    flowIndex: idx,
  })),
  ...flowItems.slice(0, 3).map((item, idx) => ({
    id: `FLOW_ARROW_${item.id}_${flowItems[idx + 1].id}`,
    label: `Flow Arrow ${item.id}->${flowItems[idx + 1].id}`,
    type: "flow-arrow" as const,
    width: 56,
    height: 20,
  })),
  ...chips.map((_, idx) => ({
    id: `CHIP_${idx + 1}`,
    label: `Chip ${idx + 1}`,
    type: "chip" as const,
    width: 132,
    height: 44,
    chipIndex: idx,
  })),
  ...miniCards.map((_, idx) => ({
    id: `MINI_CARD_${idx + 1}`,
    label: `Mini Card ${idx + 1}`,
    type: "mini-card" as const,
    width: 176,
    height: 128,
    miniIndex: idx,
  })),
  { id: "CONNECTOR_H_LINE", label: "Connector H Line", type: "connector", width: 120, height: 18, connectorKind: "h" },
  { id: "CONNECTOR_V_LINE", label: "Connector V Line", type: "connector", width: 20, height: 100, connectorKind: "v" },
  { id: "CONNECTOR_DOT", label: "Connector Dot", type: "connector", width: 20, height: 20, connectorKind: "dot" },
  { id: "CONNECTOR_ACCENT", label: "Connector Accent", type: "connector", width: 100, height: 18, connectorKind: "accent" },
  { id: "CONNECTOR_ARROW", label: "Connector Arrow", type: "connector", width: 20, height: 20, connectorKind: "arrow" },
  ...atlassianCards.map((_, idx) => ({
    id: atlassianCards[idx].id,
    label: atlassianCards[idx].label,
    type: "atlassian-card" as const,
    width: 260,
    height: 116,
    atlassianCardIndex: idx,
  })),
  ...atlassianPills.map((_, idx) => ({
    id: atlassianPills[idx].id,
    label: atlassianPills[idx].label,
    type: "atlassian-pill" as const,
    width: 190,
    height: 38,
    atlassianPillIndex: idx,
  })),
  ...atlassianWidgets.map((_, idx) => ({
    id: atlassianWidgets[idx].id,
    label: atlassianWidgets[idx].label,
    type: "atlassian-widget" as const,
    width: atlassianWidgets[idx].variant === "avatars" ? 180 : atlassianWidgets[idx].variant === "timeline" ? 320 : 260,
    height: atlassianWidgets[idx].variant === "avatars" ? 70 : atlassianWidgets[idx].variant === "dependencies" ? 140 : 120,
    atlassianWidgetIndex: idx,
  })),
];

function ElementLabel({ name }: { name: string }) {
  return <div className="text-[10px] font-bold uppercase tracking-widest text-ink-600 dark:text-zinc-400">{name}</div>;
}

function parsePayload(raw: string): DragPayload | null {
  try {
    const payload = JSON.parse(raw) as DragPayload;
    if (!payload.elementId || !payload.from) return null;
    return payload;
  } catch {
    return null;
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function scaledSize(def: ElementDef, scale: number) {
  return {
    width: def.width * scale,
    height: def.height * scale,
  };
}

function renderElement(def: ElementDef) {
  if (def.type === "main-card") {
    return (
      <div className="w-full rounded-3xl border border-ink-200/70 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] dark:border-zinc-700 dark:bg-zinc-900">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white shadow-lg shadow-brand-500/30">
              <span className="text-lg font-bold">J</span>
            </div>
            <div>
              <div className="mb-1 text-[10px] font-bold uppercase tracking-widest leading-none text-ink-600 dark:text-zinc-500">
                Jira Service Management
              </div>
              <div className="text-sm font-bold text-ink-900 dark:text-zinc-100">PROJ-742</div>
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-100 dark:bg-zinc-800">
            <div className="mx-0.5 h-1 w-1 rounded-full bg-ink-400 dark:bg-zinc-500" />
            <div className="mx-0.5 h-1 w-1 rounded-full bg-ink-400 dark:bg-zinc-500" />
            <div className="mx-0.5 h-1 w-1 rounded-full bg-ink-400 dark:bg-zinc-500" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded border border-blue-200 bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            In Progress
          </div>

          <h3 className="text-2xl font-bold leading-tight text-ink-900 dark:text-zinc-100">
            Automate <span className="text-brand-700 dark:text-blue-400">Onboarding</span> <br />
            Workflows with Assets
          </h3>

          <div className="space-y-3 rounded-2xl border border-ink-200/50 bg-ink-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-ink-600 dark:text-zinc-500">
              <span>Progress</span>
              <span className="text-brand-700 dark:text-blue-400">82%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-ink-200 dark:bg-zinc-700">
              <div className="h-full w-[82%] rounded-full bg-brand-600" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-ink-100 pt-4 dark:border-zinc-800">
            <div className="flex -space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-100 text-[10px] font-bold text-brand-700 shadow-sm dark:border-zinc-900 dark:bg-brand-900/40 dark:text-blue-400">
                OT
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-ink-200 text-[10px] font-bold text-ink-600 shadow-sm dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-400">
                AI
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-600 dark:text-zinc-500">
              <div className="flex h-3 w-3 items-center justify-center rounded-sm border border-brand-500/50 dark:border-blue-500/50">
                <div className="h-1 w-1 rounded-full bg-brand-500 dark:bg-blue-500" />
              </div>
              High
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (def.type === "flow-node" && def.flowIndex !== undefined) {
    const item = flowItems[def.flowIndex];
    return (
      <article className={`w-full rounded-xl border px-4 py-3 shadow-sm ${item.tone}`}>
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
          {item.id} {item.lane}
        </div>
        <div className="mt-1 text-sm font-bold">{item.key}</div>
        <div className="mt-2 text-xs opacity-80">{item.detail}</div>
      </article>
    );
  }

  if (def.type === "flow-arrow") {
    return (
      <div className="flex items-center gap-1">
        <span className="h-0.5 w-8 bg-white/80" />
        <span className="h-2 w-2 rotate-45 border-r-2 border-t-2 border-white/90" />
      </div>
    );
  }

  if (def.type === "chip" && def.chipIndex !== undefined) {
    return (
      <div className="rounded-lg border border-ink-200/70 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/85 dark:text-zinc-400">
        {chips[def.chipIndex]}
      </div>
    );
  }

  if (def.type === "mini-card" && def.miniIndex !== undefined) {
    const card = miniCards[def.miniIndex];
    return (
      <article className="w-full rounded-xl border border-ink-200/60 bg-white/80 p-3 shadow-md dark:border-zinc-700 dark:bg-zinc-900/70">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-ink-500 dark:text-zinc-500">{card.title}</div>
        <div className={`h-1.5 rounded-full bg-ink-300 dark:bg-zinc-600 ${card.bars[0]}`} />
        <div className={`mt-2 h-1.5 rounded-full ${card.accent} ${card.bars[1]}`} />
        <div className={`mt-1.5 h-1.5 rounded-full bg-ink-300/80 dark:bg-zinc-600/80 ${card.bars[2]}`} />
      </article>
    );
  }

  if (def.type === "connector") {
    if (def.connectorKind === "h") return <div className="h-0.5 w-28 rounded-full bg-white/80" />;
    if (def.connectorKind === "v") return <div className="h-20 w-0.5 rounded-full bg-white/80" />;
    if (def.connectorKind === "dot") return <div className="h-2.5 w-2.5 rounded-full bg-white/90" />;
    if (def.connectorKind === "accent") return <div className="h-0.5 w-20 rounded-full bg-white/70" />;
    return <div className="h-2 w-2 rotate-45 border-r-2 border-t-2 border-white/90" />;
  }

  if (def.type === "atlassian-card" && def.atlassianCardIndex !== undefined) {
    const card = atlassianCards[def.atlassianCardIndex];
    return (
      <article className={`w-full rounded-xl border p-3 shadow-sm ${card.tone}`}>
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-xs font-bold text-white">
              {card.icon}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-ink-600 dark:text-zinc-400">
              {card.product}
            </div>
          </div>
          <div className="h-2 w-2 rounded-full bg-white/70 dark:bg-zinc-300/70" />
        </div>
        <div className="text-sm font-bold text-ink-900 dark:text-zinc-100">{card.title}</div>
        <div className="mt-1 text-xs text-ink-600 dark:text-zinc-300">{card.meta}</div>
      </article>
    );
  }

  if (def.type === "atlassian-pill" && def.atlassianPillIndex !== undefined) {
    const pill = atlassianPills[def.atlassianPillIndex];
    return (
      <div className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-[11px] font-bold ${pill.tone}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {pill.text}
      </div>
    );
  }

  if (def.type === "atlassian-widget" && def.atlassianWidgetIndex !== undefined) {
    const widget = atlassianWidgets[def.atlassianWidgetIndex];

    if (widget.variant === "kanban-lane") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-ink-600 dark:text-zinc-300">To Do</div>
          <div className="space-y-2">
            <div className="h-6 rounded bg-white/75 dark:bg-zinc-900/70" />
            <div className="h-6 rounded bg-white/75 dark:bg-zinc-900/70" />
            <div className="h-6 rounded bg-white/75 dark:bg-zinc-900/70" />
          </div>
        </div>
      );
    }
    if (widget.variant === "table") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="mb-2 grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider text-ink-500 dark:text-zinc-400">
            <span>Issue</span><span>Status</span><span>Owner</span>
          </div>
          <div className="space-y-1.5">
            <div className="grid grid-cols-3 gap-2"><div className="h-2 rounded bg-ink-300 dark:bg-zinc-600" /><div className="h-2 rounded bg-blue-400/70" /><div className="h-2 rounded bg-ink-300 dark:bg-zinc-600" /></div>
            <div className="grid grid-cols-3 gap-2"><div className="h-2 rounded bg-ink-300 dark:bg-zinc-600" /><div className="h-2 rounded bg-emerald-400/70" /><div className="h-2 rounded bg-ink-300 dark:bg-zinc-600" /></div>
          </div>
        </div>
      );
    }
    if (widget.variant === "timeline") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="mb-3 h-0.5 w-full bg-white/70 dark:bg-zinc-300/60" />
          <div className="relative h-14">
            <div className="absolute left-[8%] top-2 h-3 w-16 rounded bg-blue-500/65" />
            <div className="absolute left-[34%] top-7 h-3 w-20 rounded bg-emerald-500/65" />
            <div className="absolute left-[64%] top-3 h-3 w-14 rounded bg-amber-500/65" />
          </div>
        </div>
      );
    }
    if (widget.variant === "chart") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-ink-600 dark:text-zinc-300">Deployment Trend</div>
          <div className="flex h-16 items-end gap-2">
            <div className="w-4 h-6 rounded-t bg-blue-500/70" />
            <div className="w-4 h-10 rounded-t bg-blue-500/70" />
            <div className="w-4 h-8 rounded-t bg-blue-500/70" />
            <div className="w-4 h-14 rounded-t bg-blue-500/70" />
            <div className="w-4 h-11 rounded-t bg-blue-500/70" />
          </div>
        </div>
      );
    }
    if (widget.variant === "approvals") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-ink-600 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-white/80" /> Manager
            <span className="h-0.5 w-6 bg-white/70" /> Security
            <span className="h-0.5 w-6 bg-white/70" /> CAB
          </div>
        </div>
      );
    }
    if (widget.variant === "comments") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="space-y-2">
            <div className="rounded-lg bg-white/75 p-2 dark:bg-zinc-900/70"><div className="h-2 w-4/5 rounded bg-ink-300 dark:bg-zinc-600" /></div>
            <div className="rounded-lg bg-white/75 p-2 dark:bg-zinc-900/70"><div className="h-2 w-3/5 rounded bg-ink-300 dark:bg-zinc-600" /></div>
          </div>
        </div>
      );
    }
    if (widget.variant === "avatars") {
      return (
        <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
          <div className="flex -space-x-2">
            <div className="h-8 w-8 rounded-full border-2 border-white bg-brand-100 dark:border-zinc-900 dark:bg-brand-900/40" />
            <div className="h-8 w-8 rounded-full border-2 border-white bg-ink-200 dark:border-zinc-900 dark:bg-zinc-800" />
            <div className="h-8 w-8 rounded-full border-2 border-white bg-emerald-200 dark:border-zinc-900 dark:bg-emerald-900/30" />
            <div className="h-8 w-8 rounded-full border-2 border-white bg-amber-200 dark:border-zinc-900 dark:bg-amber-900/30" />
          </div>
        </div>
      );
    }
    return (
      <div className={`w-full rounded-xl border p-3 ${widget.tone}`}>
        <div className="relative h-20">
          <div className="absolute left-4 top-2 h-2 w-2 rounded-full bg-white/90" />
          <div className="absolute left-16 top-8 h-2 w-2 rounded-full bg-white/90" />
          <div className="absolute left-28 top-3 h-2 w-2 rounded-full bg-white/90" />
          <div className="absolute left-4 top-3 h-0.5 w-12 bg-white/80 rotate-[16deg]" />
          <div className="absolute left-16 top-4 h-0.5 w-12 bg-white/80 -rotate-[15deg]" />
        </div>
      </div>
    );
  }

  return null;
}

export default function FlowPreviewPage() {
  const [scenes, setScenes] = useState<{ scene1: PlacedItem[]; scene2: PlacedItem[] }>({
    scene1: [],
    scene2: [],
  });
  const [exportJson, setExportJson] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

  const defsById = useMemo(() => new Map(elements.map((e) => [e.id, e])), []);

  const placeInScene = (scene: SceneId, payload: DragPayload, clientX: number, clientY: number, rect: DOMRect) => {
    const def = defsById.get(payload.elementId);
    if (!def) return;

    const sourceScale =
      payload.from === "palette"
        ? 1
        : scenes[payload.from].find((item) => item.elementId === payload.elementId)?.scale ?? 1;
    const size = scaledSize(def, sourceScale);
    const rawX = clientX - rect.left - size.width / 2;
    const rawY = clientY - rect.top - size.height / 2;

    const x = clamp(rawX, 0, Math.max(rect.width - size.width, 0));
    const y = clamp(rawY, 0, Math.max(rect.height - size.height, 0));

    setScenes((prev) => {
      const next = {
        scene1: [...prev.scene1],
        scene2: [...prev.scene2],
      };

      // remove previous instance from source scene when moving placed element
      if (payload.from !== "palette") {
        next[payload.from] = next[payload.from].filter((item) => item.elementId !== payload.elementId);
      }

      // keep unique element per target scene
      next[scene] = next[scene].filter((item) => item.elementId !== payload.elementId);
      next[scene].push({ elementId: payload.elementId, x, y, scale: sourceScale });
      return next;
    });
  };

  const removeFromScene = (scene: SceneId, elementId: string) => {
    setScenes((prev) => ({
      ...prev,
      [scene]: prev[scene].filter((item) => item.elementId !== elementId),
    }));
  };

  const setElementScale = (scene: SceneId, elementId: string, scalePercent: number) => {
    const normalizedScale = clamp(scalePercent, 40, 200) / 100;
    setScenes((prev) => ({
      ...prev,
      [scene]: prev[scene].map((item) =>
        item.elementId === elementId
          ? {
              ...item,
              scale: normalizedScale,
            }
          : item,
      ),
    }));
  };

  const buildExportPayload = () => {
    const mapScene = (sceneId: SceneId) =>
      scenes[sceneId].map((item) => {
        const def = defsById.get(item.elementId)!;
        return {
          elementId: item.elementId,
          x: Math.round(item.x),
          y: Math.round(item.y),
          scale: Number(item.scale.toFixed(2)),
          width: Math.round(def.width * item.scale),
          height: Math.round(def.height * item.scale),
        };
      });

    const scene1 = mapScene("scene1");
    const scene2 = mapScene("scene2");

    const scene1Map = new Map(scene1.map((item) => [item.elementId, item]));
    const scene2Map = new Map(scene2.map((item) => [item.elementId, item]));

    const transitions = scene1
      .filter((from) => scene2Map.has(from.elementId))
      .map((from) => {
        const to = scene2Map.get(from.elementId)!;
        return {
          elementId: from.elementId,
          from,
          to,
          delta: {
            x: to.x - from.x,
            y: to.y - from.y,
          },
        };
      });

    const onlyInScene1 = scene1.filter((item) => !scene2Map.has(item.elementId)).map((item) => item.elementId);
    const onlyInScene2 = scene2.filter((item) => !scene1Map.has(item.elementId)).map((item) => item.elementId);

    return {
      scene1,
      scene2,
      transitions,
      onlyInScene1,
      onlyInScene2,
    };
  };

  const exportData = () => {
    setExportJson(JSON.stringify(buildExportPayload(), null, 2));
    setCopyStatus("idle");
  };

  const copyJson = async () => {
    const text = exportJson || JSON.stringify(buildExportPayload(), null, 2);
    if (!exportJson) setExportJson(text);
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (!ok) throw new Error("copy failed");
      }
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  const renderScene = (scene: SceneId, title: string) => (
    <section className="w-full space-y-3 rounded-2xl border border-ink-200/70 bg-white/60 p-4 dark:border-zinc-700 dark:bg-zinc-900/60">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-700 dark:text-zinc-300">{title}</h2>
        <div className="text-xs text-ink-500 dark:text-zinc-500">Drop anywhere</div>
      </div>

      <div
        className="relative w-full min-h-[520px] md:min-h-[620px] xl:min-h-[720px] overflow-hidden rounded-xl border-2 border-dashed border-ink-300/70 bg-white/70 dark:border-zinc-700 dark:bg-zinc-900/70"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          const payload = parsePayload(event.dataTransfer.getData("application/json"));
          if (!payload) return;
          placeInScene(scene, payload, event.clientX, event.clientY, event.currentTarget.getBoundingClientRect());
        }}
      >
        <div className="absolute left-2 top-2 text-[10px] font-bold uppercase tracking-widest text-ink-400 dark:text-zinc-600">
          {title.toUpperCase()} CANVAS
        </div>

        {scenes[scene].map((placed) => {
          const def = defsById.get(placed.elementId);
          if (!def) return null;
          const size = scaledSize(def, placed.scale);

          return (
            <div
              key={`${scene}-${placed.elementId}`}
              className="absolute"
              style={{ left: placed.x, top: placed.y, width: size.width, height: size.height }}
            >
              <div className="h-full w-full">
                <div className="mb-1 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-600 shadow-sm dark:bg-zinc-900/85 dark:text-zinc-300">
                  {def.id}
                </div>
                <div
                  draggable
                  onDragStart={(event) => {
                    const payload: DragPayload = {
                      elementId: def.id,
                      from: scene,
                    };
                    event.dataTransfer.setData("application/json", JSON.stringify(payload));
                  }}
                >
                  {renderElement(def)}
                </div>
                <div className="mt-1 space-y-1 rounded bg-white/75 p-1.5 dark:bg-zinc-900/75">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-600 dark:text-zinc-300">
                      Size
                    </span>
                    <span className="text-[10px] font-bold text-ink-600 dark:text-zinc-300">
                      {Math.round(placed.scale * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={200}
                    step={5}
                    value={Math.round(placed.scale * 100)}
                    onChange={(event) => setElementScale(scene, def.id, Number(event.target.value))}
                    className="w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeFromScene(scene, def.id)}
                    className="rounded border border-ink-300 bg-white/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-600 dark:border-zinc-600 dark:bg-zinc-900/85 dark:text-zinc-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1800px] space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-ink-900 dark:text-zinc-100">Scene Transition Constructor</h1>
          <p className="mt-2 text-sm text-ink-600 dark:text-zinc-400">
            Feature route: /scene-constructor. Drag elements from palette and place them anywhere in Scene 1 and Scene 2.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-4">
            {renderScene("scene1", "Scene 1")}
            {renderScene("scene2", "Scene 2")}

            <section className="space-y-3 rounded-2xl border border-ink-200/70 bg-white/60 p-4 dark:border-zinc-700 dark:bg-zinc-900/60">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={exportData}
                  className="rounded-md border border-brand-600 bg-brand-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Capture Animation Data
                </button>
                <button
                  type="button"
                  onClick={copyJson}
                  className="rounded-md border border-ink-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-700 dark:border-zinc-600 dark:text-zinc-200"
                >
                  Copy JSON
                </button>
                <div className="self-center text-xs text-ink-600 dark:text-zinc-400">
                  {copyStatus === "copied" && "Copied"}
                  {copyStatus === "failed" && "Copy failed"}
                  {copyStatus === "idle" && " "}
                </div>
              </div>
              <pre className="max-h-[420px] overflow-auto rounded-xl border border-ink-200 bg-white/80 p-3 text-xs text-ink-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200">
                {exportJson || "Export data will appear here after clicking 'Capture Animation Data'."}
              </pre>
            </section>
          </div>

          <aside className="h-fit space-y-3 rounded-2xl border border-ink-200/70 bg-white/60 p-4 dark:border-zinc-700 dark:bg-zinc-900/60 xl:sticky xl:top-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-ink-700 dark:text-zinc-300">Element Library</h2>
            <div className="max-h-[calc(100vh-8rem)] space-y-3 overflow-auto pr-1">
              {elements.map((def) => (
                <div
                  key={def.id}
                  draggable
                  onDragStart={(event) => {
                    const payload: DragPayload = { elementId: def.id, from: "palette" };
                    event.dataTransfer.setData("application/json", JSON.stringify(payload));
                  }}
                  className="rounded-xl border border-ink-200/70 bg-white/80 p-2 dark:border-zinc-700 dark:bg-zinc-900/80"
                >
                  <ElementLabel name={def.id} />
                  <div className="mt-2 text-xs text-ink-500 dark:text-zinc-500">{def.label}</div>
                  <div className="mt-2 overflow-hidden rounded-lg border border-ink-200/60 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-900">
                    <div style={{ transform: "scale(0.55)", transformOrigin: "top left", width: def.width, height: def.height }}>
                      {renderElement(def)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
