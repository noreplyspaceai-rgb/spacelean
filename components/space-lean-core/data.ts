import type { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  BarChart3,
  Box,
  Brain,
  CalendarClock,
  CheckCircle2,
  ClipboardPlus,
  Clock,
  GitBranch,
  LayoutDashboard,
  Lightbulb,
  RefreshCcw,
  Shield,
  ShieldAlert,
  Shuffle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export type FeatureBenefit = {
  metric: string;
  label: string;
  icon: LucideIcon;
};

export type Feature = {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  benefits: FeatureBenefit[];
  image: string;
  color: string;
  accentColor: string;
};

export type ComparisonFeature = {
  feature: string;
  spaceLean: boolean;
  traditional: boolean;
};

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type WorkflowStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export type Metric = {
  metric: string;
  label: string;
};

export const FEATURES: Feature[] = [
  // 1 ─ Kanban Board System
  {
    id: "kanban",
    slug: "kanban",
    icon: LayoutDashboard,
    subtitle: "Task Management",
    title: "Kanban Board System",
    description:
      "A construction-native Kanban that maps directly to your project phases. Move tasks across configurable swim-lanes — Planned, In Progress, On Hold, Done — and see schedule impact in real time without leaving the board.",
    keyPoints: [
      "Drag-and-drop cards auto-update the linked Gantt schedule",
      "Swim-lanes configurable per project phase or trade package",
      "Role-based card visibility — subcontractors only see their scope",
      "WIP limits alert teams before overloading a phase",
      "One-click escalation from card to formal RFI or risk log",
    ],
    benefits: [
      { icon: LayoutDashboard, metric: "40%",  label: "Faster daily stand-ups" },
      { icon: LayoutDashboard, metric: "3×",   label: "More tasks closed on time" },
      { icon: LayoutDashboard, metric: "100%", label: "Schedule sync on move" },
      { icon: LayoutDashboard, metric: "<1s",  label: "Card-to-Gantt update lag" },
    ],
    image: "/screenshots/kanban-board.png",
    accentColor: "text-cyan-500",
    color: "from-cyan-50 to-white",
  },

  // 2 ─ BIM Element Selection
  {
    id: "bim-selection",
    slug: "bim-selection",
    icon: Box,
    subtitle: "BIM Intelligence",
    title: "BIM Element Selection",
    description:
      "Click any element in your 3D model and SpaceLean instantly surfaces its linked tasks, dependencies, trade assignments, and risk flags. Geometry drives the schedule — not the other way around.",
    keyPoints: [
      "IFC / Revit / Navisworks model import with element-level parsing",
      "Multi-select elements to batch-assign tasks or trades",
      "Automatic zone detection groups adjacent elements into work packages",
      "Clash detection surfaces conflicts before they reach the field",
      "Element status colours update live as tasks progress",
    ],
    benefits: [
      { icon: Box, metric: "60%",    label: "Reduction in model re-imports" },
      { icon: Box, metric: "4s",     label: "Element-to-task link time" },
      { icon: Box, metric: "Zero",   label: "Manual co-ordination layers" },
      { icon: Box, metric: "IFC2+3", label: "Standards supported" },
    ],
    image: "/screenshots/bim-element-selection.png",
    accentColor: "text-cyan-500",
    color: "from-sky-50 to-white",
  },

  // 3 ─ Task Adding & Management
  {
    id: "task-management",
    slug: "task-management",
    icon: ClipboardPlus,
    subtitle: "AI Planning",
    title: "Task Adding & Management",
    description:
      "Create tasks from BIM elements, templates, or plain text in seconds. The AI infers predecessors, assigns logical durations based on historical data, and slots each task into the optimal position in your programme.",
    keyPoints: [
      "Natural language task creation — describe the work, AI structures it",
      "AI-suggested duration from project type and element size",
      "Predecessor/successor auto-detected from geometry and trade sequence",
      "Bulk import from Excel or CSV with automatic field mapping",
      "Recurring task templates for repetitive floor-by-floor sequences",
    ],
    benefits: [
      { icon: ClipboardPlus, metric: "80%",  label: "Faster initial programme build" },
      { icon: ClipboardPlus, metric: "12K+", label: "Tasks managed per project" },
      { icon: ClipboardPlus, metric: "AI",   label: "Predecessor inference" },
      { icon: ClipboardPlus, metric: "< 5s", label: "Task-to-schedule placement" },
    ],
    image: "/screenshots/task-management.png",
    accentColor: "text-cyan-500",
    color: "from-teal-50 to-white",
  },

  // 4 ─ Risk Analysis
  {
    id: "risk-analysis",
    slug: "risk-analysis",
    icon: ShieldAlert,
    subtitle: "Predictive Intelligence",
    title: "Risk Analysis",
    description:
      "SpaceLean continuously monitors your schedule against weather feeds, supply chain signals, and historical delay patterns. Risks surface as ranked alerts before they cascade — giving your team time to act, not react.",
    keyPoints: [
      "Monte Carlo simulation runs on every schedule save",
      "Critical path volatility score updated daily",
      "Weather risk overlay pulls live forecasts onto your Gantt",
      "Supply chain delay alerts tied to specific material lead times",
      "Auto-generated mitigation suggestions ranked by impact vs effort",
    ],
    benefits: [
      { icon: ShieldAlert, metric: "30%",       label: "Fewer unplanned delays" },
      { icon: ShieldAlert, metric: "7-day",     label: "Average early risk warning" },
      { icon: ShieldAlert, metric: "95%",       label: "Risk prediction accuracy (pilot)" },
      { icon: ShieldAlert, metric: "Real-time", label: "Critical path monitoring" },
    ],
    image: "/screenshots/risk-analysis.png",
    accentColor: "text-cyan-500",
    color: "from-rose-50 to-white",
  },

  // 5 ─ AI Sequencing Engine
  {
    id: "ai-sequencing",
    slug: "ai-sequencing",
    icon: Shuffle,
    subtitle: "Construction Graph",
    title: "AI Sequencing Engine",
    description:
      "SpaceLean converts your BIM geometry into a Construction Knowledge Graph, then uses a constraint solver to generate multiple valid build strategies simultaneously — fast-track, low-risk, and takt flow — without a single manual dependency link.",
    keyPoints: [
      "Penetration and adjacency constraints inferred directly from geometry",
      "Generates 3–5 distinct strategies per project automatically",
      "Physical support logic encoded as hard solver constraints",
      "Trade stacking and crew continuity optimised per zone",
      "Strategies compared side-by-side with risk and duration tradeoffs",
    ],
    benefits: [
      { icon: Shuffle, metric: "3–5",   label: "Strategies per project" },
      { icon: Shuffle, metric: "Zero",  label: "Manual dependency links" },
      { icon: Shuffle, metric: "Mins",  label: "BIM to first sequence" },
      { icon: Shuffle, metric: "Graph", label: "Powered by Neo4j CKG" },
    ],
    image: "/screenshots/ai-sequencing.png",
    accentColor: "text-cyan-500",
    color: "from-violet-50 to-white",
  },

  // 6 ─ Monte Carlo Critical Path
  {
    id: "monte-carlo",
    slug: "monte-carlo",
    icon: BarChart3,
    subtitle: "Probabilistic Scheduling",
    title: "Monte Carlo Critical Path",
    description:
      "Rather than a single deterministic critical path, SpaceLean runs 1,000 schedule simulations on every save. Each task gets a criticality probability, zone congestion penalty, and crew bottleneck score — surfacing future critical tasks days before traditional CPM would.",
    keyPoints: [
      "1,000 Monte Carlo simulations on every schedule save",
      "Criticality probability per task — not just binary critical/not",
      "Zone congestion and penetration penalties baked in to each run",
      "Crew bottleneck scoring detects resource-driven slippage early",
      "Graph centrality via Neo4j GDS identifies structural risk nodes",
    ],
    benefits: [
      { icon: BarChart3, metric: "1,000",  label: "Simulations per save" },
      { icon: BarChart3, metric: "94%",    label: "Delay prediction accuracy" },
      { icon: BarChart3, metric: "7-day",  label: "Average forecast lead time" },
      { icon: BarChart3, metric: "GNN",    label: "Graph neural network CP" },
    ],
    image: "/screenshots/monte-carlo.png",
    accentColor: "text-cyan-500",
    color: "from-purple-50 to-white",
  },

  // 7 ─ Real-Time Resequencing
  {
    id: "resequencing",
    slug: "resequencing",
    icon: RefreshCcw,
    subtitle: "Self-Healing Schedule",
    title: "Real-Time Resequencing",
    description:
      "When a task slips, SpaceLean traverses the dependency graph, isolates only affected downstream tasks, re-runs the Monte Carlo simulation, and delivers a revised schedule in under one second — crew conflicts resolved automatically, no planner intervention needed.",
    keyPoints: [
      "Graph traversal isolates only the impacted downstream subgraph",
      "Monte Carlo + CP-SAT re-solves affected tasks in under 1 second",
      "Crew no-overlap constraints automatically re-enforced on every replan",
      "Zone congestion penalties reapplied to all revised assignments",
      "Full audit trail of every resequencing event stored in graph",
    ],
    benefits: [
      { icon: RefreshCcw, metric: "0.3s",  label: "Replan time on delay" },
      { icon: RefreshCcw, metric: "10×",   label: "Faster than manual replanning" },
      { icon: RefreshCcw, metric: "100%",  label: "Crew conflicts auto-resolved" },
      { icon: RefreshCcw, metric: "Sub-graph", label: "Only changed tasks updated" },
    ],
    image: "/screenshots/resequencing.png",
    accentColor: "text-cyan-500",
    color: "from-emerald-50 to-white",
  },
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  { feature: "Automatic BIM mapping",      spaceLean: true,  traditional: false },
  { feature: "AI sequence generation",     spaceLean: true,  traditional: false },
  { feature: "Predictive risk scoring",    spaceLean: true,  traditional: false },
  { feature: "Auto-replanning on delay",   spaceLean: true,  traditional: false },
  { feature: "Monte Carlo simulation",     spaceLean: true,  traditional: false },
  { feature: "Trade dependency analysis",  spaceLean: true,  traditional: false },
  { feature: "Manual task linking",        spaceLean: false, traditional: true  },
  { feature: "Days to create schedule",    spaceLean: false, traditional: true  },
];

export const USE_CASES: UseCase[] = [
  {
    icon: Users,
    title: "Complex Multi-Trade Projects",
    description:
      "Large projects with 20+ trades. Space Lean automatically manages interdependencies that would take weeks to manually sequence.",
  },
  {
    icon: Shield,
    title: "High-Risk Timelines",
    description:
      "When delays cost millions. Predictive risk and auto-replanning keep schedules realistic and achievable.",
  },
  {
    icon: TrendingUp,
    title: "Optimization-Driven Teams",
    description:
      "Organizations seeking competitive advantage through AI-driven scheduling and resource efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Digital-First Contractors",
    description:
      "Firms already using Revit/BIM who want to extract maximum value from their digital models.",
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Upload Your Model",
    description:
      "Import your IFC or Revit model. Space Lean reads the entire geometric structure in seconds.",
    icon: "📥",
  },
  {
    step: 2,
    title: "AI Analyzes Relationships",
    description:
      "Our engine detects physical dependencies, zoning, penetrations, and trade interactions automatically.",
    icon: "🧠",
  },
  {
    step: 3,
    title: "Generate Sequences",
    description:
      "Get multiple optimized build sequences with predictive risk scores for each task and path.",
    icon: "⚡",
  },
  {
    step: 4,
    title: "Deploy & Adapt",
    description:
      "Use your schedule. Space Lean monitors progress and reoptimizes automatically as delays occur.",
    icon: "🚀",
  },
];

export const METRICS: Metric[] = [
  { metric: "< 60s",  label: "From upload to schedule"    },
  { metric: "94%",    label: "Delay prediction accuracy"  },
  { metric: "10×",    label: "Faster replanning"          },
  { metric: "0",      label: "Manual task links needed"   },
  { metric: "1000+",  label: "Simulations per analysis"   },
  { metric: "∞",      label: "Schedule optimization cycles" },
];

export function getCoreFeatureBySlug(slug: string) {
  return FEATURES.find((feature) => feature.slug === slug);
}

export function getAllCoreFeatureSlugs() {
  return FEATURES.map((feature) => feature.slug);
}
