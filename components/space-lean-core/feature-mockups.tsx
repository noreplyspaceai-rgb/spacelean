import type React from "react";

// ── Shared light-theme tokens ────────────────────────────────────────────────
const T = {
  bg:       "#f8fafc",
  surface:  "#ffffff",
  border:   "#e2e8f0",
  borderMd: "#cbd5e1",
  text:     "#0f172a",
  muted:    "#64748b",
  faint:    "#94a3b8",
  blue:     "#2563eb",
  blueBg:   "#eff6ff",
  blueBd:   "#bfdbfe",
  amber:    "#d97706",
  amberBg:  "#fffbeb",
  amberBd:  "#fde68a",
  green:    "#059669",
  greenBg:  "#f0fdf4",
  greenBd:  "#bbf7d0",
  red:      "#dc2626",
  redBg:    "#fef2f2",
  redBd:    "#fecaca",
  violet:   "#7c3aed",
  cyan:     "#0891b2",
};

// ── Reusable micro-components ────────────────────────────────────────────────
function Badge({
  label, color, bg, border,
}: { label: string; color: string; bg: string; border: string }) {
  return (
    <span style={{
      fontSize: 6, fontWeight: 600, padding: "1px 5px",
      borderRadius: 99, color, background: bg,
      border: `0.5px solid ${border}`, letterSpacing: "0.04em",
      flexShrink: 0,
    }}>
      {label}
    </span>
  );
}

function Btn({
  label, primary = false, small = false,
}: { label: string; primary?: boolean; small?: boolean }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      fontSize: small ? 6 : 7, fontWeight: 600,
      padding: small ? "2px 7px" : "3px 10px",
      borderRadius: 5,
      background: primary ? T.blue : T.surface,
      color: primary ? "#fff" : T.text,
      border: `0.5px solid ${primary ? T.blue : T.borderMd}`,
      letterSpacing: "0.02em", flexShrink: 0, cursor: "default",
    }}>
      {label}
    </span>
  );
}

// ── Laptop Frame — light screen ──────────────────────────────────────────────
function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl" style={{ aspectRatio: "16/10" }}>
        <div
          className="relative w-full h-full rounded-2xl p-2 shadow-2xl"
          style={{
            background: "linear-gradient(180deg,#e2e8f0,#cbd5e1)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          <div
            className="relative w-full h-full rounded-lg p-1.5 overflow-hidden"
            style={{
              background: "#94a3b8",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-slate-300 rounded-b-lg z-20" />

            {/* Screen */}
            <div
              className="relative w-full h-full rounded-md overflow-hidden"
              style={{ background: T.bg }}
            >
              <div className="relative w-full h-full">{children}</div>
            </div>
          </div>
          {/* Keyboard bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-2xl"
            style={{ background: "linear-gradient(180deg,#cbd5e1,#b0bec5)" }} />
        </div>
        {/* Stand */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-t-lg"
          style={{ background: "#b0bec5" }} />
      </div>
    </div>
  );
}

// ── Top bar shared across mockups ────────────────────────────────────────────
function TopBar({ title, sub, actions }: {
  title: string; sub?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div style={{
      background: T.surface, borderBottom: `0.5px solid ${T.border}`,
      padding: "5px 10px", display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 6,
    }}>
      <div>
        <p style={{ fontSize: 8, fontWeight: 700, color: T.text, margin: 0 }}>{title}</p>
        {sub && <p style={{ fontSize: 6, color: T.muted, margin: 0 }}>{sub}</p>}
      </div>
      {actions && <div style={{ display: "flex", gap: 4, alignItems: "center" }}>{actions}</div>}
    </div>
  );
}

// ── 1. Kanban ────────────────────────────────────────────────────────────────
function KanbanMockup() {
  const cols = [
    {
      label: "Planned", count: 3, accent: T.blue, accentBg: T.blueBg, accentBd: T.blueBd,
      items: [
        { title: "Pour Slab L3", tag: "Structural", days: "4d" },
        { title: "Core Wall Lift", tag: "Civil", days: "2d" },
        { title: "MEP Rough-in", tag: "MEP", days: "3d" },
      ],
    },
    {
      label: "In Progress", count: 2, accent: T.amber, accentBg: T.amberBg, accentBd: T.amberBd,
      items: [
        { title: "Install Duct B2", tag: "HVAC", days: "1d" },
        { title: "Frame Walls L2", tag: "Structural", days: "2d" },
      ],
    },
    {
      label: "Done", count: 2, accent: T.green, accentBg: T.greenBg, accentBd: T.greenBd,
      items: [
        { title: "Slab L1", tag: "Structural", days: "—" },
        { title: "Columns L1", tag: "Civil", days: "—" },
      ],
    },
  ];

  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="Construction Board"
          sub="Sprint 4 · Zone B"
          actions={<><Btn label="Filter" /><Btn label="+ Add Task" primary /></>}
        />
        <div style={{ flex: 1, display: "flex", gap: 6, padding: 8, overflow: "hidden" }}>
          {cols.map((col) => (
            <div key={col.label} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
              {/* Column header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: 99, background: col.accent }} />
                  <span style={{ fontSize: 7, fontWeight: 700, color: T.text }}>{col.label}</span>
                </div>
                <span style={{
                  fontSize: 6, fontWeight: 600, padding: "1px 5px", borderRadius: 99,
                  background: col.accentBg, color: col.accent, border: `0.5px solid ${col.accentBd}`,
                }}>{col.count}</span>
              </div>

              {/* Cards */}
              {col.items.map((item) => (
                <div key={item.title} style={{
                  background: T.surface, border: `0.5px solid ${T.border}`,
                  borderLeft: `2px solid ${col.accent}`, borderRadius: 5,
                  padding: "5px 7px", display: "flex", flexDirection: "column", gap: 3,
                }}>
                  <span style={{ fontSize: 7.5, fontWeight: 600, color: T.text }}>{item.title}</span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      fontSize: 5.5, color: col.accent, background: col.accentBg,
                      padding: "1px 4px", borderRadius: 3, border: `0.5px solid ${col.accentBd}`,
                    }}>{item.tag}</span>
                    <span style={{ fontSize: 6, color: T.faint }}>{item.days}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── 2. BIM Viewer ────────────────────────────────────────────────────────────
function BIMMockup() {
  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="BIM Model Viewer"
          sub="Structural · Level 2"
          actions={
            <>
              <Btn label="Clash Check" />
              <Btn label="Select Zone" />
              <Btn label="Export" primary />
            </>
          }
        />

        {/* Viewport */}
        <div style={{ flex: 1, position: "relative", background: "#f1f5f9", overflow: "hidden", margin: 8, borderRadius: 6, border: `0.5px solid ${T.border}` }}>
          <svg viewBox="0 0 320 175" style={{ width: "100%", height: "100%" }}>
            {/* Grid */}
            {[0,1,2,3,4].map(i => <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="175" stroke="#e2e8f0" strokeWidth="0.8"/>)}
            {[0,1,2,3].map(i => <line key={`h${i}`} x1="0" y1={i*58} x2="320" y2={i*58} stroke="#e2e8f0" strokeWidth="0.8"/>)}

            {/* Building wireframe */}
            <g stroke="#94a3b8" strokeWidth="0.8" fill="none">
              <rect x="40" y="25" width="240" height="125" rx="2"/>
              <line x1="40" y1="66" x2="280" y2="66"/>
              <line x1="40" y1="108" x2="280" y2="108"/>
              <line x1="120" y1="25" x2="120" y2="150"/>
              <line x1="200" y1="25" x2="200" y2="150"/>
              <rect x="130" y="115" width="40" height="35" fill="#f1f5f9"/>
            </g>

            {/* Selected slab */}
            <rect x="200" y="25" width="80" height="41" fill="rgba(37,99,235,0.08)" stroke="#2563eb" strokeWidth="1.2"/>

            {/* Tooltip */}
            <rect x="200" y="5" width="112" height="18" rx="3" fill="#2563eb"/>
            <text x="205" y="13" fill="white" fontSize="5" fontFamily="monospace" fontWeight="bold">IfcSlab · L2 · Zone-B</text>
            <text x="205" y="20" fill="white" fontSize="4.5" fontFamily="monospace">48.2 m³ · 2 penetrations</text>

            {/* Clash badge */}
            <circle cx="230" cy="47" r="4" fill="#f59e0b" opacity="0.9"/>
            <text x="237" y="50" fill="#d97706" fontSize="5" fontFamily="monospace" fontWeight="bold">CLASH</text>

            {/* Status dots */}
            {([[65,60,"#059669"],[80,108,"#059669"],[135,60,"#d97706"],[135,108,"#2563eb"]] as const).map(([x,y,c],i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill={c} opacity="0.75"/>
            ))}
          </svg>

          {/* Properties panel */}
          <div style={{
            position: "absolute", bottom: 6, right: 6,
            background: T.surface, border: `0.5px solid ${T.border}`,
            borderRadius: 5, padding: "5px 7px", minWidth: 80,
          }}>
            <p style={{ fontSize: 6, fontWeight: 700, color: T.text, margin: "0 0 3px" }}>Properties</p>
            {[["Type","IfcSlab"],["Zone","B"],["Volume","48.2 m³"]].map(([k,v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontSize: 5.5, color: T.muted }}>{k}</span>
                <span style={{ fontSize: 5.5, color: T.text, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── 3. Task Management ───────────────────────────────────────────────────────
function TaskMockup() {
  const rows = [
    { name: "Install Pipe P12 · L3 Zone-A", dur: "2d", pred: "Slab L3",    trade: "Plumbing",   conf: 94 },
    { name: "HVAC Duct Rough-in · B2",      dur: "3d", pred: "Frame Walls", trade: "HVAC",       conf: 87 },
    { name: "Electrical Conduit · Core",    dur: "1d", pred: "Core Wall",   trade: "Electrical", conf: 91 },
  ];

  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="AI Task Generator"
          sub="Auto-detects predecessors from geometry"
          actions={<><Btn label="Import" /><Btn label="Push to Schedule" primary /></>}
        />
        <div style={{ flex: 1, padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>

          {/* AI Input */}
          <div style={{
            display: "flex", gap: 5, padding: "5px 7px",
            background: T.surface, border: `0.5px solid ${T.borderMd}`,
            borderRadius: 6,
          }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 7, color: T.faint }}>Describe the work in natural language…</span>
            </div>
            <Btn label="Generate →" primary />
          </div>

          {/* Column headers */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 40px 64px 60px 44px",
            gap: 6, padding: "0 8px",
          }}>
            {["Task","Dur","Predecessor","Trade","Conf"].map(h => (
              <span key={h} style={{ fontSize: 6, fontWeight: 600, color: T.faint, textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</span>
            ))}
          </div>

          {/* Rows */}
          {rows.map((r) => (
            <div key={r.name} style={{
              display: "grid", gridTemplateColumns: "1fr 40px 64px 60px 44px",
              gap: 6, padding: "6px 8px",
              background: T.surface, border: `0.5px solid ${T.border}`,
              borderLeft: `2px solid ${T.blue}`, borderRadius: 5,
              alignItems: "center",
            }}>
              <span style={{ fontSize: 7.5, fontWeight: 600, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.name}</span>
              <span style={{ fontSize: 7, color: T.cyan, fontWeight: 600, background: "#ecfeff", padding: "1px 4px", borderRadius: 3, textAlign: "center" }}>{r.dur}</span>
              <span style={{ fontSize: 6.5, color: T.muted }}>{r.pred}</span>
              <Badge label={r.trade} color={T.violet} bg="#f5f3ff" border="#ddd6fe" />
              <span style={{ fontSize: 7, fontWeight: 600, color: T.green }}>{r.conf}%</span>
            </div>
          ))}

          <p style={{ fontSize: 6, color: T.faint, textAlign: "center", marginTop: "auto" }}>✦ 12 predecessors auto-detected from geometry</p>
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── 4. Risk Analysis ─────────────────────────────────────────────────────────
function RiskMockup() {
  const items = [
    { task: "Slab Pour Z3",    risk: 92, label: "Zone congestion + crew conflict", color: T.red,   bg: T.redBg,   bd: T.redBd,   tag: "Critical" },
    { task: "MEP Shaft L4",    risk: 71, label: "Material lead time risk",          color: T.amber, bg: T.amberBg, bd: T.amberBd, tag: "High" },
    { task: "Curtain Wall N",  risk: 48, label: "Weather window closing",           color: T.amber, bg: T.amberBg, bd: T.amberBd, tag: "Medium" },
    { task: "Fireproofing B2", risk: 22, label: "Low — all clear",                  color: T.green, bg: T.greenBg, bd: T.greenBd, tag: "Low" },
  ];

  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="Risk Monitor"
          sub="Live · Updated 2 min ago"
          actions={
            <>
              <span style={{ fontSize: 6, color: T.green, fontWeight: 600 }}>● Live</span>
              <Btn label="Export Report" />
              <Btn label="Mitigate" primary />
            </>
          }
        />
        <div style={{ flex: 1, padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
          {items.map((item) => (
            <div key={item.task} style={{
              background: T.surface, border: `0.5px solid ${T.border}`,
              borderRadius: 6, padding: "6px 8px", display: "flex", flexDirection: "column", gap: 4,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: T.text }}>{item.task}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Badge label={item.tag} color={item.color} bg={item.bg} border={item.bd} />
                  <span style={{ fontSize: 8, fontWeight: 700, color: item.color }}>{item.risk}%</span>
                </div>
              </div>
              <div style={{ height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ width: `${item.risk}%`, height: "100%", background: item.color, opacity: 0.7, borderRadius: 99 }} />
              </div>
              <p style={{ fontSize: 6, color: T.muted, margin: 0 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── 5. AI Sequencing ─────────────────────────────────────────────────────────
function SequenceMockup() {
  const opts = [
    { label: "Option A · Fast-track", days: 84, risk: "High",   color: T.amber, bg: T.amberBg, bd: T.amberBd, pct: 65 },
    { label: "Option B · Low-risk",   days: 93, risk: "Low",    color: T.blue,  bg: T.blueBg,  bd: T.blueBd,  pct: 88 },
    { label: "Option C · Takt flow",  days: 89, risk: "Medium", color: T.violet, bg: "#f5f3ff", bd: "#ddd6fe", pct: 76 },
  ];

  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="AI Sequence Optimizer"
          sub="Neo4j CKG · OR-Tools CP-SAT"
          actions={<><Btn label="Regenerate" /><Btn label="Apply Sequence" primary /></>}
        />
        <div style={{ flex: 1, padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
          <p style={{ fontSize: 6.5, color: T.muted, margin: 0 }}>3 sequences generated — select one to apply to master schedule</p>

          {opts.map((o, idx) => (
            <div key={o.label} style={{
              background: idx === 1 ? o.bg : T.surface,
              border: `${idx === 1 ? "1.5px" : "0.5px"} solid ${idx === 1 ? o.bd : T.border}`,
              borderLeft: `2.5px solid ${o.color}`,
              borderRadius: 6, padding: "7px 9px", display: "flex", flexDirection: "column", gap: 5,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ fontSize: 8, fontWeight: 700, color: T.text }}>{o.label}</span>
                  {idx === 1 && <Badge label="Recommended" color={o.color} bg={o.bg} border={o.bd} />}
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, color: o.color }}>{o.days}d</span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ flex: 1, height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: `${o.pct}%`, height: "100%", background: o.color, opacity: 0.65, borderRadius: 99 }} />
                </div>
                <Badge label={`Risk: ${o.risk}`} color={o.color} bg={o.bg} border={o.bd} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── 6. Monte Carlo ───────────────────────────────────────────────────────────
function MonteCarloPie() {
  const tasks = [
    { id: "T12", name: "Slab Pour Z3",   prob: 92, color: T.red,   bg: T.redBg,   bd: T.redBd,   tag: "Critical" },
    { id: "T18", name: "MEP Shaft L4",   prob: 71, color: T.amber, bg: T.amberBg, bd: T.amberBd, tag: "High" },
    { id: "T25", name: "Curtain Wall N", prob: 63, color: T.amber, bg: T.amberBg, bd: T.amberBd, tag: "At-Risk" },
    { id: "T08", name: "Core Lift B3",   prob: 41, color: T.muted, bg: "#f8fafc",  bd: T.border,  tag: "Watch" },
    { id: "T31", name: "Fireproofing",   prob: 18, color: T.green, bg: T.greenBg, bd: T.greenBd, tag: "Safe" },
  ];

  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="Monte Carlo Simulation"
          sub="1,000 runs · CP-SAT model"
          actions={<><Btn label="Re-run" /><Btn label="View Report" primary /></>}
        />
        <div style={{ flex: 1, padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 5, marginBottom: 2 }}>
            {[["P50","89d",T.blue],["P80","97d",T.amber],["P95","104d",T.red]].map(([k,v,c]) => (
              <div key={k} style={{
                flex: 1, background: T.surface, border: `0.5px solid ${T.border}`,
                borderRadius: 5, padding: "4px 6px", textAlign: "center",
              }}>
                <p style={{ fontSize: 6, color: T.muted, margin: 0 }}>{k}</p>
                <p style={{ fontSize: 9, fontWeight: 700, color: c as string, margin: 0 }}>{v}</p>
              </div>
            ))}
          </div>

          {tasks.map((t) => (
            <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 6.5, fontWeight: 700, color: T.muted, width: 22, flexShrink: 0, fontFamily: "monospace" }}>{t.id}</span>
              <span style={{ fontSize: 7, color: T.text, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.name}</span>
              <div style={{ width: 70, height: 8, background: "#f1f5f9", borderRadius: 99, overflow: "hidden", flexShrink: 0 }}>
                <div style={{ width: `${t.prob}%`, height: "100%", background: t.color, opacity: 0.65, borderRadius: 99 }} />
              </div>
              <span style={{ fontSize: 7, fontWeight: 700, color: t.color, width: 22, textAlign: "right", flexShrink: 0 }}>{t.prob}%</span>
              <Badge label={t.tag} color={t.color} bg={t.bg} border={t.bd} />
            </div>
          ))}
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── 7. Resequencing ──────────────────────────────────────────────────────────
function ReseqMockup() {
  return (
    <LaptopFrame>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <TopBar
          title="Auto Resequencing"
          sub="Triggered by delay event"
          actions={
            <>
              <span style={{
                fontSize: 6, fontWeight: 600, padding: "2px 6px",
                borderRadius: 4, background: T.redBg, color: T.red,
                border: `0.5px solid ${T.redBd}`,
              }}>T12 Delayed +4d</span>
              <Btn label="Accept Plan" primary />
            </>
          }
        />
        <div style={{ flex: 1, padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>

          {/* Impact warning */}
          <div style={{
            background: T.redBg, border: `0.5px solid ${T.redBd}`,
            borderLeft: `2.5px solid ${T.red}`, borderRadius: 5, padding: "5px 8px",
          }}>
            <p style={{ fontSize: 7, fontWeight: 700, color: T.red, margin: "0 0 4px" }}>⚠ Impact · 6 downstream tasks affected</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {["T15","T18","T22","T25","T31","T34"].map(t => (
                <span key={t} style={{
                  fontSize: 6.5, padding: "1px 5px", borderRadius: 3,
                  background: T.surface, border: `0.5px solid ${T.redBd}`, color: T.red, fontFamily: "monospace",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Rescheduled rows */}
          {[
            { task: "T15 · Duct Zone-B", old: "Day 10→14", nw: "Day 14→18", crew: "HVAC-B",   delta: "+4d" },
            { task: "T22 · Wall Frame",  old: "Day 12→15", nw: "Day 16→19", crew: "Struct-A", delta: "+4d" },
          ].map((r) => (
            <div key={r.task} style={{
              background: T.surface, border: `0.5px solid ${T.border}`,
              borderRadius: 5, padding: "6px 8px", display: "flex", flexDirection: "column", gap: 3,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 8, fontWeight: 700, color: T.text }}>{r.task}</span>
                <Badge label={r.delta} color={T.red} bg={T.redBg} border={T.redBd} />
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 6.5, color: T.faint, textDecoration: "line-through" }}>{r.old}</span>
                <span style={{ fontSize: 6.5, color: T.blue, fontWeight: 600 }}>→ {r.nw}</span>
                <Badge label={r.crew} color={T.violet} bg="#f5f3ff" border="#ddd6fe" />
              </div>
            </div>
          ))}

          {/* Success footer */}
          <div style={{
            marginTop: "auto", background: T.greenBg,
            border: `0.5px solid ${T.greenBd}`, borderRadius: 5,
            padding: "5px 8px", textAlign: "center",
          }}>
            <span style={{ fontSize: 7, color: T.green, fontWeight: 600 }}>✓ Crew conflicts resolved · Replan completed in 0.3 s</span>
          </div>
        </div>
      </div>
    </LaptopFrame>
  );
}

// ── Exports ──────────────────────────────────────────────────────────────────
export const FEATURE_MOCKUPS: Record<string, React.ReactNode> = {
  "kanban":          <KanbanMockup />,
  "bim-selection":   <BIMMockup />,
  "task-management": <TaskMockup />,
  "risk-analysis":   <RiskMockup />,
  "ai-sequencing":   <SequenceMockup />,
  "monte-carlo":     <MonteCarloPie />,
  "resequencing":    <ReseqMockup />,
};