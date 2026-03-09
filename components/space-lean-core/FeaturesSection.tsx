"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FEATURES } from "./data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

// ─────────────────────────────────────────────────────────────────────────────
// Rich per-feature mockups (dark, matching bg-[#0d1117])
// ─────────────────────────────────────────────────────────────────────────────

function KanbanMockup() {
  const cols = [
    { label: "PLANNED",     accent: "#3b82f6", items: ["Pour Slab L3", "Core Wall Lift", "MEP Rough-in"] },
    { label: "IN PROGRESS", accent: "#f59e0b", items: ["Install Duct B2", "Frame Walls L2"] },
    { label: "DONE",        accent: "#10b981", items: ["Slab L1 ✓", "Columns L1 ✓"] },
  ];
  return (
    <div className="w-full h-full p-3 flex gap-2">
      {cols.map((col) => (
        <div key={col.label} className="flex-1 flex flex-col gap-1.5">
          <p
            className="text-[7px] font-bold tracking-[0.15em] pb-1 border-b"
            style={{ color: col.accent, borderColor: `${col.accent}40` }}
          >
            {col.label}
          </p>
          {col.items.map((item) => (
            <div
              key={item}
              className="rounded-md p-2 text-[8px] leading-tight"
              style={{
                background: "#161f2e",
                borderLeft: `2.5px solid ${col.accent}`,
                color: "#cbd5e1",
              }}
            >
              {item}
              <p className="text-[6px] text-slate-500 mt-0.5">Zone B · {Math.floor(Math.random() * 4 + 1)}d</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function BIMMockup() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <svg viewBox="0 0 320 200" className="w-full h-full">
        <defs>
          <linearGradient id="bim-sel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {/* grid */}
        {[0,1,2,3,4].map(i => <line key={`gv${i}`} x1={i*80} y1="0" x2={i*80} y2="200" stroke="#1e293b" strokeWidth="0.8"/>)}
        {[0,1,2,3].map(i => <line key={`gh${i}`} x1="0" y1={i*66} x2="320" y2={i*66} stroke="#1e293b" strokeWidth="0.8"/>)}
        {/* building wireframe */}
        <g stroke="#334155" strokeWidth="0.8" fill="none">
          <rect x="40" y="30" width="240" height="130" rx="2"/>
          <line x1="40"  y1="76"  x2="280" y2="76"/>
          <line x1="40"  y1="120" x2="280" y2="120"/>
          <line x1="120" y1="30"  x2="120" y2="160"/>
          <line x1="200" y1="30"  x2="200" y2="160"/>
          <rect x="130" y="128" width="40" height="32" fill="#161f2e"/>
        </g>
        {/* selected slab */}
        <rect x="200" y="30" width="80" height="46" fill="url(#bim-sel)" stroke="#0ea5e9" strokeWidth="1.5"/>
        {/* tooltip */}
        <rect x="205" y="8" width="108" height="20" rx="3" fill="#0ea5e9" opacity="0.92"/>
        <text x="210" y="16" fill="white" fontSize="5.5" fontFamily="monospace" fontWeight="bold">IfcSlab · L2 · Zone-B</text>
        <text x="210" y="24" fill="white" fontSize="5"   fontFamily="monospace">48.2 m³ · 2 penetrations</text>
        {/* clash marker */}
        <circle cx="230" cy="55" r="4" fill="#f59e0b" opacity="0.85"/>
        <text x="237" y="58" fill="#f59e0b" fontSize="5.5" fontFamily="monospace" fontWeight="bold">CLASH</text>
        {/* status dots */}
        {([[65,65,"#10b981"],[80,120,"#10b981"],[135,65,"#f59e0b"],[135,120,"#3b82f6"]] as const).map(([x,y,c],i)=>(
          <circle key={i} cx={x} cy={y} r="4" fill={c} opacity="0.75"/>
        ))}
      </svg>
    </div>
  );
}

function TaskMockup() {
  const rows = [
    { name: "Install Pipe P12 · L3 Zone-A", dur: "2d", pred: "Slab L3",    trade: "Plumbing",   conf: 94 },
    { name: "HVAC Duct Rough-in · B2",      dur: "3d", pred: "Frame Walls", trade: "HVAC",       conf: 87 },
    { name: "Electrical Conduit · Core",    dur: "1d", pred: "Core Wall",   trade: "Electrical", conf: 91 },
  ];
  return (
    <div className="w-full h-full p-3 flex flex-col gap-2">
      {/* fake input */}
      <div className="flex gap-2">
        <div className="flex-1 h-6 rounded-md bg-[#161f2e] flex items-center px-2">
          <span className="text-[7px] text-slate-500 font-mono">Describe work in natural language…</span>
        </div>
        <div className="h-6 px-3 rounded-md bg-cyan-500 flex items-center">
          <span className="text-[7px] text-white font-bold font-mono">AI →</span>
        </div>
      </div>
      {rows.map((r) => (
        <div
          key={r.name}
          className="rounded-lg p-2 flex flex-col gap-1"
          style={{ background: "#161f2e", borderLeft: "2.5px solid #0ea5e9" }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] text-slate-200 font-mono font-semibold truncate pr-2">{r.name}</span>
            <span className="text-[7px] font-mono text-cyan-400 bg-cyan-400/10 px-1.5 rounded shrink-0">{r.dur}</span>
          </div>
          <div className="flex gap-2 text-[6.5px] font-mono">
            <span className="text-slate-500">⟶ {r.pred}</span>
            <span className="text-violet-400">{r.trade}</span>
            <span className="text-emerald-400 ml-auto">AI {r.conf}%</span>
          </div>
        </div>
      ))}
      <p className="text-[6px] text-slate-600 font-mono text-center mt-auto">✦ 12 predecessors auto-detected from geometry</p>
    </div>
  );
}

function RiskMockup() {
  const items = [
    { task: "Slab Pour Z3",   risk: 92, label: "Zone congestion + crew conflict", color: "#ef4444" },
    { task: "MEP Shaft L4",   risk: 71, label: "Material lead time risk",          color: "#f59e0b" },
    { task: "Curtain Wall N", risk: 48, label: "Weather window closing",            color: "#f59e0b" },
    { task: "Fireproofing B2",risk: 22, label: "Low — all clear",                  color: "#10b981" },
  ];
  return (
    <div className="w-full h-full p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-[7px] font-bold tracking-[0.15em] text-red-400 font-mono">RISK MONITOR</span>
        <span className="text-[6.5px] text-emerald-400 font-mono">● LIVE</span>
      </div>
      {items.map((item) => (
        <div key={item.task} className="rounded-lg p-2" style={{ background: "#161f2e" }}>
          <div className="flex justify-between mb-1">
            <span className="text-[8px] text-slate-200 font-mono">{item.task}</span>
            <span className="text-[8px] font-bold font-mono" style={{ color: item.color }}>{item.risk}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-700/60 overflow-hidden mb-1">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${item.risk}%`, background: item.color, opacity: 0.8 }}
            />
          </div>
          <p className="text-[6px] text-slate-500 font-mono">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function SequenceMockup() {
  const opts = [
    { label: "Option A · Fast-track", days: 84, risk: "High",   color: "#f59e0b", pct: 65 },
    { label: "Option B · Low-risk ✦", days: 93, risk: "Low",    color: "#0ea5e9", pct: 88 },
    { label: "Option C · Takt flow",  days: 89, risk: "Medium", color: "#a78bfa", pct: 76 },
  ];
  return (
    <div className="w-full h-full p-3 flex flex-col gap-2">
      <p className="text-[7px] text-slate-500 font-mono tracking-[0.15em] mb-0.5">AI GENERATED SEQUENCES</p>
      {opts.map((o) => (
        <div
          key={o.label}
          className="rounded-lg p-2.5 flex flex-col gap-1.5"
          style={{ background: "#161f2e", borderLeft: `2.5px solid ${o.color}` }}
        >
          <div className="flex justify-between">
            <span className="text-[8px] text-slate-200 font-mono font-semibold">{o.label}</span>
            <span className="text-[8px] font-mono font-bold" style={{ color: o.color }}>{o.days}d</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex-1 h-1.5 rounded-full bg-slate-700/60 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${o.pct}%`, background: o.color, opacity: 0.75 }}/>
            </div>
            <span className="text-[6px] font-mono shrink-0" style={{ color: o.color }}>Risk: {o.risk}</span>
          </div>
        </div>
      ))}
      <p className="text-[6px] text-slate-600 font-mono text-center mt-auto">Neo4j CKG · OR-Tools CP-SAT optimizer</p>
    </div>
  );
}

function MonteCarloPie() {
  const tasks = [
    { id: "T12", prob: 92, color: "#ef4444" },
    { id: "T18", prob: 71, color: "#f59e0b" },
    { id: "T25", prob: 63, color: "#f59e0b" },
    { id: "T08", prob: 41, color: "#64748b" },
    { id: "T31", prob: 18, color: "#10b981" },
  ];
  return (
    <div className="w-full h-full p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-[7px] font-bold tracking-[0.12em] text-slate-400 font-mono">MONTE CARLO CP · 1000 RUNS</span>
        <span className="text-[6.5px] text-violet-400 font-mono">Σ complete</span>
      </div>
      {tasks.map((t) => (
        <div key={t.id} className="flex items-center gap-2">
          <span className="text-[7px] text-slate-400 font-mono w-6 shrink-0">{t.id}</span>
          <div className="flex-1 h-3 rounded-full bg-slate-700/50 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${t.prob}%`, background: `linear-gradient(90deg,${t.color}80,${t.color})` }}
            />
          </div>
          <span className="text-[7px] font-mono w-7 text-right shrink-0" style={{ color: t.color }}>{t.prob}%</span>
        </div>
      ))}
      <div className="flex justify-center gap-3 mt-auto">
        {[["Critical","#ef4444"],["At-Risk","#f59e0b"],["Safe","#10b981"]].map(([l,c])=>(
          <div key={l} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: c }}/>
            <span className="text-[6px] text-slate-500 font-mono">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReseqMockup() {
  return (
    <div className="w-full h-full p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-[7px] font-bold tracking-[0.12em] text-emerald-400 font-mono">⟳ AUTO RESEQUENCING</span>
        <span className="text-[6.5px] font-mono bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded font-semibold">T12 DELAYED +4d</span>
      </div>
      <div className="rounded-lg p-2" style={{ background: "#1c1215", borderLeft: "2.5px solid #ef4444" }}>
        <p className="text-[7px] text-red-400 font-mono mb-1.5">⚠ Impact · 6 downstream tasks</p>
        <div className="flex flex-wrap gap-1">
          {["T15","T18","T22","T25","T31","T34"].map(t => (
            <span key={t} className="text-[6.5px] font-mono bg-red-400/10 text-red-400 px-1.5 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>
      {[
        { task: "T15 · Duct Zone-B",  old: "Day 10→14", nw: "Day 14→18", crew: "HVAC-B"   },
        { task: "T22 · Wall Frame",   old: "Day 12→15", nw: "Day 16→19", crew: "Struct-A" },
      ].map((r) => (
        <div key={r.task} className="rounded-lg p-2 flex flex-col gap-1" style={{ background: "#161f2e" }}>
          <span className="text-[8px] text-slate-200 font-mono">{r.task}</span>
          <div className="flex gap-2 text-[6.5px] font-mono">
            <span className="text-slate-600 line-through">{r.old}</span>
            <span className="text-cyan-400">⟶ {r.nw}</span>
            <span className="text-violet-400 ml-auto">{r.crew}</span>
          </div>
        </div>
      ))}
      <div className="mt-auto rounded-md p-1.5 bg-emerald-500/10 text-center">
        <span className="text-[6.5px] font-mono text-emerald-400">✓ Crew conflicts resolved · 0.3 s replan</span>
      </div>
    </div>
  );
}

// Map feature id → mockup component
const MOCKUPS: Record<string, React.ReactNode> = {
  "kanban":       <KanbanMockup />,
  "bim-selection":<BIMMockup />,
  "task-management":<TaskMockup />,
  "risk-analysis":<RiskMockup />,
  "ai-sequencing":<SequenceMockup />,
  "monte-carlo":  <MonteCarloPie />,
  "resequencing": <ReseqMockup />,
};

// ─────────────────────────────────────────────────────────────────────────────
// Feature card
// ─────────────────────────────────────────────────────────────────────────────
function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  inView: boolean;
}) {
  const { icon: Icon, title, subtitle, description, image, id } = feature;
  const mockup = MOCKUPS[id];

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: 0.12 + index * 0.07, ease: EASE }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-black/[0.07] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Screenshot / mockup area */}
      <div className="relative w-full aspect-[16/9] bg-[#0d1117] overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Render real image if clean path exists, otherwise rich mockup */}
        {image && !image.includes(" ") && mockup === undefined ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0">{mockup}</div>
        )}

        {/* Bottom fade into card body */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Icon + subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/[0.08] flex items-center justify-center flex-shrink-0">
            <Icon className="w-3.5 h-3.5 text-cyan-500" />
          </span>
          <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
            {subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-neutral-900 tracking-tight mb-2">
          {title}
        </h3>

        {/* Description */}
        {/* <p className="text-sm text-neutral-500 leading-relaxed flex-1">
          {description}
        </p> */}

        {/* Bottom accent line */}
        <div className="mt-5 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "30%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: EASE }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function FeaturesSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 sm:py-32  border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div className="mb-14 flex flex-col items-start" {...fadeUp(0.08)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Core Capabilities
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
            Seven pillars of{" "}
            <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
              scheduling intelligence.
            </span>
          </h2>

          <p className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Working in harmony.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                Built for how construction actually works.
              </span>
            </span>
          </p>
        </motion.div>

        {/* Card grid — 3 columns on lg, 2 on md, 1 on sm */}
        {/* First 6 in a 3-col grid, last card spans full width on its row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.slice(0, 6).map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* 7th card — centred, capped width so it doesn't stretch absurdly */}
        <div className="mt-5 flex justify-center">
          <div className="w-full sm:w-[calc(50% -10px)] lg:w-[calc(33.333%-14px)]">
            <FeatureCard
              feature={FEATURES[6]}
              index={6}
              inView={inView}
            />
          </div>
        </div>

      </div>
    </section>
  );
}