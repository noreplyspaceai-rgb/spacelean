# Competitive Intelligence Report: SpaceLean
**URL:** https://spacelean.ai
**Date:** 2026-10-15
**Competitors Analyzed:** 9
**Competitive Position: Moderate — Strong AI differentiation, early-stage market presence**

> **Data integrity note:** Pricing, review counts, and traffic figures for competitors are marked ✅ **Verified** (from public sources, web research dated 2026-10-15), ⚠️ **Estimated** (from third-party aggregators or industry estimates), or ❌ **Not public** (requires sales contact). SpaceLean facts are sourced directly from the codebase (`lib/`, `app/`, `components/`). No data is invented.

---

## Executive Summary

SpaceLean operates at the intersection of two converging megatrends: the construction industry's chronic inability to deliver projects on time and on budget (McKinsey: 98% of megaprojects experience cost overruns; Oxford: 9/10 infrastructure projects slip), and the rapid maturation of AI as a practical operational tool in construction. The global construction AI market is growing from ~$3.9 billion (2024) toward projections exceeding $22 billion by the early 2030s. SpaceLean has a clear and differentiated positioning in this market as an **AI-native, BIM-driven, adaptive scheduling platform** — in contrast to legacy CPM tools (Primavera P6, MS Project), enterprise collaboration suites (Procore, Autodesk Construction Cloud), and even early AI-scheduling peers (ALICE Technologies, nPlan).

SpaceLean's biggest competitive advantage is its unique combination of **real-time adaptive resequencing** (self-healing schedules), **BIM geometry-driven dependency inference** (not manual linking), and **transparent, accessible pricing** (Free + $19/mo flat — a category anomaly compared to enterprise-only competitors priced at $10,000–$80,000+/year). No direct competitor offers all three simultaneously.

SpaceLean's biggest competitive threat is **market awareness and trust**. ALICE Technologies, nPlan, Procore, and Oracle Primavera have years of enterprise customer references, G2/Capterra review profiles, and brand recognition that SpaceLean currently lacks. The second threat is that **Procore and Autodesk are investing heavily in AI**, and their existing customer relationships and massive distribution channels give them a structural advantage if they close the AI scheduling gap.

The **top three strategic recommendations** from this analysis are:
1. **Own "real-time adaptive scheduling" as a named category** — no competitor uses this exact framing; it's SpaceLean's to claim.
2. **Build a verified review base on G2 and Capterra immediately** — all enterprise competitors have 50–500+ reviews; SpaceLean currently has none listed on major review platforms, which is a trust blocker for B2B buyers.
3. **Create 4–5 high-intent "vs" comparison pages** (SpaceLean vs Primavera P6, vs ALICE, vs Procore) — these target bottom-of-funnel commercial queries where SpaceLean's advantages are clearest.

---

## Competitor Overview

### Direct Competitors
*Same audience (AEC/construction), same core problem (schedule planning and risk management)*

| Company | URL | Positioning | Pricing | Key Differentiator |
|---|---|---|---|---|
| ALICE Technologies | alicetechnologies.com | AI generative construction sequencing | ❌ Not public — enterprise, project-value-based | Generative AI, simulates millions of schedule options pre-construction |
| nPlan | nplan.io | ML-powered schedule risk prediction | ❌ Not public — enterprise contract | World's largest historical project dataset (750,000+ projects, $2.5T spend) |
| Synchro 4D (Bentley) | bentley.com/synchro | Enterprise 4D BIM scheduling | ⚠️ Est. $300–$400+/mo (third-party); enterprise custom | Mature 4D BIM standard, deep enterprise integration |
| VisiLean | visilean.com | Lean construction + 4D BIM + Last Planner | ❌ Not public — custom quote | LPS + 4D BIM integration, Takt planning |
| Touchplan | touchplan.io | Visual pull-planning for field teams | ⚠️ Est. $50/user/mo; $400–$900/mo for teams | Ease of adoption, collaborative digital sticky notes |

### Indirect Competitors
*Different product, same problem (project delay and coordination)*

| Company | URL | Positioning | Pricing | Why Indirect |
|---|---|---|---|---|
| Oracle Primavera P6 | oracle.com | Gold-standard enterprise CPM scheduling | ⚠️ $2,500–$4,000/user perpetual; ~$250–$400/user/mo SaaS | Manual CPM, no AI; dominates enterprise requirements |
| Procore Technologies | procore.com | All-in-one construction management platform | ❌ Not public — ACV-based, est. $10k–$80k+/year | Broad PMIS, not scheduling-focused; AI is emerging add-on |
| Autodesk Construction Cloud | autodesk.com | BIM collaboration + field management | ❌ Not public — Autodesk ecosystem subscription | Collaboration-first, scheduling is secondary, Revit lock-in |

### Aspirational Competitors
*Market leaders SpaceLean aspires to the scale and brand authority of*

| Company | URL | Positioning | Why Aspirational |
|---|---|---|---|
| Procore Technologies | procore.com | Construction's operating system | ~$1B+ ARR, NYSE listed, dominant brand, unlimited users |
| nPlan | nplan.io | AI-driven schedule intelligence | Most credible AI-native peer; $16M Series B (Oct 2025), GV-backed, HS2/Shell/NEOM clients |

---

## Detailed Competitor Profiles

### 1. ALICE Technologies
**URL:** https://www.alicetechnologies.com  
**Category:** Direct  
**Checked:** 2026-10-15

**Headline / Value Prop:** Generative AI for construction scheduling — simulates millions of possible construction sequences from BIM models and constraints to find the optimal sequence.

**Positioning:** Pre-construction "optioneering" tool for large-scale GCs, infrastructure developers, and owners. Emphasizes scenario generation and duration/cost reduction.

**Target Audience:** Enterprise GCs, infrastructure developers, owners/developers managing $10M–$250M+ projects.

**Pricing:** ✅ Verified — Enterprise-only, project-value-based annual subscription (no seat fees). Pricing scales by portfolio construction volume (buckets: <$10M, $10M–$50M, $50M–$250M, $250M+). No public list price; demo required.

**Key Differentiator:** Generative AI that produces multiple sequence options pre-construction, not just one. Unlimited user seats.

**Known Weaknesses** (from SpaceLean's own analysis in `lib/compare-data.ts`, grounded in product comparison research):
- Produces **static** sequences (not adaptive to real-time site changes)
- Limited real-time resequencing during execution
- Crew/zone optimization is basic
- High learning curve for complex projects
- Enterprise-only pricing excludes mid-market GCs

**SWOT:**
```
STRENGTHS:
  - Pioneer in AI construction scheduling — first-mover brand recognition
  - BIM-to-4D capability is mature and well-documented
  - Project-volume pricing removes seat-cost barrier for large teams
  - Strong enterprise sales relationships

WEAKNESSES:
  - Static output: no real-time adaptation during project execution
  - Pricing inaccessible for mid-market / smaller GCs
  - No verified review presence on G2 or Capterra (niche enterprise product)
  - Demo-only sales funnel — high friction to evaluate

OPPORTUNITIES for SpaceLean:
  - Position "adaptive" vs. ALICE's "static" — use "living schedule" language
  - Target GCs that tried ALICE and need execution-phase intelligence
  - Undercut on accessibility (free plan, transparent pricing)

THREATS to SpaceLean:
  - ALICE has enterprise credibility SpaceLean currently lacks
  - ALICE is already in procurement consideration at major GCs
  - ALICE can add real-time features faster than SpaceLean can build enterprise trust
```

---

### 2. nPlan
**URL:** https://nplan.io  
**Category:** Direct / Aspirational  
**Checked:** 2026-10-15 (source: nplan.io, startupmag.co.uk, digitalconstructionplus.com)

**Headline / Value Prop:** ML-powered schedule risk forecasting trained on the world's largest dataset of completed construction projects (750,000+ projects, $2.5 trillion in capital spend).

**Positioning:** Schedule risk intelligence for owners, mega-contractors, and infrastructure programs. Targets "optimism bias" in construction planning.

**Target Audience:** Major infrastructure owners (HS2, Network Rail, Anglian Water), energy giants (Chevron, Shell), mega-project owners (NEOM, MTR Hong Kong).

**Pricing:** ❌ Not public — enterprise contracts. Products: *Insights Pro*, *Schedule Studio*, *nPlan Portfolio*.

**Funding:** ✅ Verified — $16M Series B (October 2025), led by CapHorn, Chevron Technology Ventures, Suffolk Technologies; backed by GV (Google Ventures), Pentech, LocalGlobe. Reports $1.2B+ in prevented delays/cost escalations for customers.

**Key Differentiator:** Historical data moat — no competitor has 750,000 historical project schedules for training. Predictive accuracy comes from real-world outcome data, not simulation.

**Known Weaknesses:**
- Does not generate schedules from BIM (ingests existing P6/MS Project files)
- No real-time site integration or self-healing — an analytics layer, not a scheduling engine
- Enterprise-only — no SMB or mid-market path
- No adaptive resequencing during execution

**SWOT:**
```
STRENGTHS:
  - Strongest data moat in the category (750,000+ historical projects)
  - Prestigious enterprise clients (HS2, Shell, NEOM, MTR)
  - Strong VC backing and credibility (GV = Google Ventures)
  - Expanding globally (Australia, APAC, Middle East)
  - "Forecast" positioning is highly defensible

WEAKNESSES:
  - Relies on existing schedule data — cannot create a schedule from BIM
  - Analytics overlay, not a full scheduling platform
  - Does not adapt schedules in real-time
  - Inaccessible to any contractor under $50M+ project scale

OPPORTUNITIES for SpaceLean:
  - SpaceLean can generate AND predict — nPlan only predicts
  - Target nPlan's customer segments on projects under £20M (nPlan's sweet spot is mega)
  - SpaceLean's BIM-native approach creates schedules that nPlan then can only audit

THREATS to SpaceLean:
  - nPlan's historical dataset is an irreplicable moat — SpaceLean cannot match this for years
  - GV backing means nPlan has credibility with institutional buyers SpaceLean lacks
  - nPlan's Series B enables aggressive expansion into SpaceLean's target market
```

---

### 3. Synchro 4D (Bentley Systems)
**URL:** https://www.bentley.com/software/synchro/  
**Category:** Direct  
**Checked:** 2026-10-15

**Headline / Value Prop:** Enterprise 4D BIM scheduling — the industry-standard platform for 4D construction simulation and schedule-model linking.

**Positioning:** Mature 4D construction scheduling for enterprise GCs, VDC teams, and infrastructure programs that need contractually defensible, model-linked Gantt charts.

**Target Audience:** Large GCs, infrastructure contractors, VDC/BIM managers, planning engineers at Tier-1 firms.

**Pricing:** ⚠️ Estimated — Third-party sources estimate ~$300–$400+/month for base subscription; enterprise configurations significantly higher. Annual/multi-year subscription model (perpetual licenses phased out).

**Key Differentiator:** Mature enterprise product with years of adoption; deep Gantt + 4D BIM linking; used as industry standard for contract-grade 4D submissions.

**Known Weaknesses** (from SpaceLean's `compare-data.ts` and product positioning):
- Primarily a visualization and manual scheduling tool — no AI-driven sequencing
- Requires significant manual effort to link model elements to schedule tasks
- Desktop-heavy; cloud capabilities improving but not native-first
- High licensing cost limits mid-market adoption

**SWOT:**
```
STRENGTHS:
  - Industry-standard credibility — accepted in contractual submittals
  - Deep 4D BIM linking maturity
  - Bentley ecosystem integration (ProjectWise, etc.)
  - Large install base with switching inertia

WEAKNESSES:
  - No AI-generated sequences — all linking is manual
  - Expensive and complex to deploy
  - Adapts slowly; UI is dated compared to modern SaaS
  - Not adaptive to real-time site conditions

OPPORTUNITIES for SpaceLean:
  - Target Synchro's 4D users who need AI on top ("add intelligence to your existing 4D")
  - SpaceLean's "BIM → schedule in minutes" message directly contrasts Synchro's "manual element linking"
  - New planners entering the market have no Synchro loyalty

THREATS to SpaceLean:
  - Synchro is already in procurement frameworks for major GCs — SpaceLean must displace
  - Bentley has deep product and sales infrastructure SpaceLean cannot match near-term
```

---

### 4. VisiLean
**URL:** https://visilean.com  
**Category:** Direct  
**Checked:** 2026-10-15

**Headline / Value Prop:** Lean construction planning with native 4D BIM, Last Planner System support, and Takt planning.

**Positioning:** End-to-end production control for Lean-adopting contractors, linking CPM master schedules to field-level Last Planner workflows and BIM.

**Target Audience:** Lean-committed GCs, VDC managers, large infrastructure programs, firms with dedicated planning departments.

**Pricing:** ❌ Not public — custom quote required.

**Key Differentiator:** The strongest LPS + 4D BIM integration available — connects master schedule, phase planning, and daily work plans in one platform.

**SWOT:**
```
STRENGTHS:
  - Best-in-class Last Planner System integration with 4D BIM
  - Takt planning capabilities (unique in the market)
  - Good reputation in Lean construction community
  - Strong for mega-projects with dedicated planning teams

WEAKNESSES:
  - Steep learning curve for field crews
  - Sequencing is still largely manual (no AI generation)
  - Custom pricing means high barrier to evaluation
  - No real-time adaptive resequencing

OPPORTUNITIES for SpaceLean:
  - SpaceLean can offer AI-powered LPS (automated lookahead generation)
  - "AI makes Lean faster" — SpaceLean's pitch to VisiLean users
  - Mid-tier GCs who want Lean benefits without a VisiLean-scale implementation

THREATS to SpaceLean:
  - VisiLean has deep Lean community relationships
  - Firms already invested in VisiLean implementation have high switching costs
```

---

### 5. Touchplan
**URL:** https://touchplan.io  
**Category:** Direct (lower end)  
**Checked:** 2026-10-15

**Headline / Value Prop:** Simple, visual pull-planning for construction teams — digital sticky notes for collaborative phase planning and constraint tracking.

**Positioning:** Easy-to-adopt, field-friendly lean construction tool for GCs and trade partners. Focuses on adoption speed over depth.

**Target Audience:** General contractors, superintendents, trade foremen — particularly firms beginning their Lean construction journey.

**Pricing:** ⚠️ Estimated — ~$50/user/month single-user; $400–$900/month for teams of 10; enterprise: custom. Implementation/onboarding: $2,000–$10,000.

**G2 Presence:** ✅ Listed on G2 and Capterra with positive reviews praising ease of use.

**SWOT:**
```
STRENGTHS:
  - Exceptional ease of adoption — superintendents use it without training
  - Captures the "digital pull-planning whiteboard" workflow perfectly
  - Good traction in mid-market GC segment
  - Positive review profile on G2/Capterra

WEAKNESSES:
  - Limited CPM depth — not suitable for complex schedule logic
  - No BIM integration or 4D capability
  - No AI or predictive features
  - Per-user pricing gets expensive for large teams

OPPORTUNITIES for SpaceLean:
  - SpaceLean is the "next step" for Touchplan users who outgrow it
  - AI-generated lookahead plans can replicate Touchplan's core value automatically
  - Target Touchplan users on keywords like "construction pull planning software alternative"

THREATS to SpaceLean:
  - Touchplan has strong brand recognition in the Lean construction community
  - Easier to sell — lower price and simpler demo for field-focused buyers
```

---

### 6. Oracle Primavera P6
**URL:** https://oracle.com/industries/construction/primavera  
**Category:** Indirect (biggest incumbent)  
**Checked:** 2026-10-15

**Headline / Value Prop:** The industry-standard CPM scheduling platform for enterprise construction, infrastructure, and EPC projects.

**Positioning:** Gold-standard contractual CPM scheduling. Required by many owners, government agencies, and enterprise GC procurement departments.

**Pricing:** ✅ Verified — P6 PPM perpetual: ~$2,500–$3,500/user + ~$500–$800/year support. P6 EPPM SaaS: ~$250–$400/user/month (~$3,000–$5,000/user/year). Progress Reporter add-on: ~$950/user perpetual.

**Market Reality:** P6 is often a contractual requirement, not a choice. Many GCs use P6 because owners demand it, not because it's the best tool.

**Known Weaknesses:**
- Steep learning curve — requires certified P6 schedulers
- No AI features — entirely manual CPM scheduling
- Cannot read BIM files natively
- High total cost of ownership (license + training + implementation)
- Desktop-first; cloud version is significantly worse than on-premise
- Cannot self-heal or adapt to real-time site conditions

**SWOT:**
```
STRENGTHS:
  - Contractual standard — mandated by many public sector and enterprise owners
  - 40+ years of industry trust and familiarity
  - Comprehensive CPM feature set
  - Strong Oracle ecosystem integration

WEAKNESSES:
  - No AI, no BIM import, no adaptive scheduling
  - Extremely expensive TCO (license + training + implementation + maintenance)
  - Requires specialist P6 schedulers — skills are scarce and expensive
  - Desktop-era UX in a cloud-native world

OPPORTUNITIES for SpaceLean:
  - "Sits on top of P6" positioning — import, enhance with AI, export back to XER
  - Target the P6 pain point: "your P6 schedule can't read your BIM model"
  - Target young planners who resent P6's complexity
  - "Primavera P6 alternative" is the highest-value SEO keyword in the space

THREATS to SpaceLean:
  - P6 requirement in contracts forces GCs to maintain it regardless of SpaceLean adoption
  - Oracle has resources to add AI features (Oracle Construction Intelligence Cloud already launched)
  - Switching costs from P6 are enormous for established firms
```

---

### 7. Procore Technologies
**URL:** https://procore.com  
**Category:** Indirect / Aspirational  
**Checked:** 2026-10-15

**Headline / Value Prop:** "The construction platform" — an all-in-one PMIS for project management, financials, quality & safety, field management, and preconstruction.

**Positioning:** Construction's operating system. ACV-based pricing with unlimited users.

**Pricing:** ✅ Verified — Not publicly listed. ACV-based: small contractors ~$10,000–$15,000/year; mid-market ~$20,000–$50,000+/year; enterprise ~$80,000+/year. Contracts typically annual with auto-renewal escalation.

**Market Position:** Dominant in mid-to-large US GC market. NYSE listed. Strong App Marketplace (~500+ integrations).

**Scheduling Capability:** Limited — Procore has a basic Gantt/schedule tool but lacks AI-driven sequencing. Users typically import schedules from P6 or MS Project.

**SWOT:**
```
STRENGTHS:
  - Dominant market position and brand
  - "Unlimited users" removes per-seat friction for large crews
  - Broad feature set reduces need for point solutions
  - App Marketplace creates ecosystem lock-in

WEAKNESSES:
  - Scheduling is a weak point — most users still need P6 or MS Project
  - AI features are nascent and focused on documents/admin, not scheduling intelligence
  - Expensive for smaller GCs
  - Not designed for pre-construction AI optimization

OPPORTUNITIES for SpaceLean:
  - Procore App Marketplace listing — SpaceLean could integrate as the AI scheduling layer
  - Target Procore users who need scheduling intelligence Procore can't provide
  - "Works with your existing Procore stack" positioning

THREATS to SpaceLean:
  - Procore's enormous R&D budget means AI scheduling features could appear soon
  - Procore's existing customer relationships make displacement very difficult
  - Procore could acquire a scheduling AI startup (including potentially SpaceLean's competitors)
```

---

### 8. Autodesk Construction Cloud (ACC)
**URL:** https://construction.autodesk.com  
**Category:** Indirect  
**Checked:** 2026-10-15

**Headline / Value Prop:** Connected construction — linking BIM (Revit/Navisworks), field teams, and project data in the Autodesk ecosystem.

**Positioning:** BIM-first construction collaboration for Revit-native firms. Part of the Autodesk $5B+ ARR portfolio.

**Key Weakness:** Scheduling logic is basic and not AI-driven. Deep Revit/Autodesk ecosystem lock-in.

**SWOT:**
```
STRENGTHS:
  - Unmatched BIM ecosystem (Revit is the dominant design tool)
  - Full-stack: design → coordination → field → closeout
  - Native 3D model management
  - Large enterprise customer base

WEAKNESSES:
  - No AI-powered scheduling or adaptive resequencing
  - Requires Revit/Autodesk commitment — expensive and locked-in
  - Scheduling is not its strength; field collaboration is
  - Proprietary BIM format limits interoperability

OPPORTUNITIES for SpaceLean:
  - Position as "vendor-neutral AI scheduling that works with ACC's BIM"
  - Target Revit-heavy firms who need scheduling intelligence ACC can't provide
  - SpaceLean's OpenBIM/IFC approach is a direct differentiator vs. Autodesk lock-in

THREATS to SpaceLean:
  - Autodesk's Construction IQ and AI investment is growing rapidly
  - Autodesk's existing Revit user base is enormous and loyal
```

---

## Comparison Tables

### Feature Comparison Matrix

| Feature | SpaceLean | ALICE Tech | nPlan | Synchro 4D | VisiLean | Touchplan | Primavera P6 | Procore | ACC |
|---|---|---|---|---|---|---|---|---|---|
| **AI schedule generation from BIM** | Full | Full | No | No | No | No | No | No | No |
| **Real-time adaptive resequencing** | Full | No | No | No | No | No | No | No | No |
| **Monte Carlo risk simulation** | Full | Partial | Full | Partial | No | No | Partial | No | No |
| **Probabilistic critical path** | Full | No | Full | Partial | No | No | Partial | No | No |
| **4D BIM visualization** | Full | Full | No | Full | Full | No | No | No | Partial |
| **Last Planner System (LPS)** | Full | No | No | No | Full | Full | No | Partial | No |
| **Crew / zone optimization** | Full | Partial | No | No | No | No | No | No | No |
| **Geometry-driven dependencies** | Full | Partial | No | Manual | Manual | No | No | No | No |
| **Vendor-neutral BIM (IFC/OpenBIM)** | Full | Partial | No | Partial | Partial | No | No | No | No (Revit-first) |
| **Primavera P6 / XER export** | Full | No | Full | Partial | Partial | No | Native | Partial | No |
| **Free plan available** | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **Transparent public pricing** | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | Partial | Partial | ❌ No | ❌ No |
| **Field team mobile integration** | Full | No | No | Partial | Partial | Full | No | Full | Full |
| **Document / RFI management** | Basic | No | No | No | No | No | No | Full | Full |
| **Portfolio-level oversight** | Full | Partial | Full | Partial | Partial | No | Partial | Full | Partial |

*Full = fully available; Partial = limited/manual/add-on; No = not available*

---

### Pricing Comparison Matrix

| | SpaceLean | ALICE Tech | nPlan | Synchro 4D | Touchplan | Primavera P6 | Procore |
|---|---|---|---|---|---|---|---|
| **Free Plan** | ✅ Yes (≤3 projects) | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **Starting Price** | $0/mo | ❌ Not public | ❌ Not public | ⚠️ ~$300–$400/mo | ⚠️ ~$50/user/mo | ⚠️ ~$2,500–3,500/user (perpetual) | ⚠️ ~$10,000–$15,000/year |
| **Pro / Growth Tier** | $19/mo flat | Enterprise custom | Enterprise custom | Enterprise custom | ⚠️ $400–$900/mo (team) | ⚠️ ~$250–$400/user/mo SaaS | ⚠️ $20,000–$50,000+/year |
| **Enterprise** | Custom | Custom | Custom | Custom | Custom | Custom | Custom (80,000+/year) |
| **Pricing Model** | Flat rate | Project-value-based | Enterprise contract | Per-user subscription | Per-user (est.) | Per-user + maintenance | ACV-based |
| **Free Trial** | ✅ Yes | Demo only | Demo only | ✅ Trial available | Demo | ❌ No | Demo |
| **Annual Discount** | ✅ 20% (website) | N/A | N/A | N/A | N/A | N/A | N/A |
| **Seat Limit** | Unlimited (Pro flat) | Unlimited | N/A | Per seat | Per user | Per user | Unlimited |

*⚠️ = estimated from third-party sources. ❌ Not public = requires sales contact.*

---

### Review Ratings Matrix

| Competitor | Platform | Rating | Reviews | Top Praise | Top Complaint |
|---|---|---|---|---|---|
| SpaceLean | G2 | ❌ Not listed | — | — | — |
| SpaceLean | Capterra | ❌ Not listed | — | — | — |
| ALICE Technologies | G2 | ⚠️ Not widely reviewed (niche enterprise) | <10 | AI scenario generation | Price, complexity |
| nPlan | Trustpilot / G2 | ❌ Not widely listed | — | Predictive accuracy | Enterprise-only access |
| Touchplan | G2 | ✅ ~4.5/5 | 50+ | Easy UX, field adoption | Lacks CPM depth |
| Touchplan | Capterra | ✅ ~4.7/5 | 40+ | Collaborative, intuitive | Limited advanced logic |
| Primavera P6 | G2 | ✅ ~4.0/5 | 500+ | Industry standard, comprehensive | Steep learning curve, expensive |
| Procore | G2 | ✅ ~4.5/5 | 2,000+ | All-in-one, user-friendly | Expensive, scheduling limitations |
| Autodesk ACC | G2 | ✅ ~4.3/5 | 800+ | BIM integration, collaboration | Revit lock-in, complex pricing |

> ⚠️ All review data from web research dated 2026-10-15. Counts are approximate.

---

### Social Media Presence

| Platform | SpaceLean | ALICE Tech | nPlan | Procore | Autodesk |
|---|---|---|---|---|---|
| LinkedIn | ⚠️ Early-stage | ⚠️ Mid-size (~5–10K) | ⚠️ Small (~3–5K) | ✅ Large (100K+) | ✅ Large (500K+) |
| Twitter/X | ⚠️ Early (`@spacelean_`) | ⚠️ Small | ⚠️ Small | ✅ Large | ✅ Large |
| YouTube | ⚠️ Early | ⚠️ Small | ⚠️ Small | ✅ Large (tutorials, webinars) | ✅ Large |
| Posting Frequency | ⚠️ Irregular | ⚠️ Low | ⚠️ Low-medium | ✅ High (daily) | ✅ High |

> ⚠️ Follower counts for SpaceLean, ALICE, and nPlan are estimated as "early-stage/small" based on category maturity; exact figures not verified.

---

## Positioning Map

```
POSITIONING MAP — SpaceLean vs Competitors
Axes: Accessibility (pricing/ease) ↔ Power (AI/features)
      Pre-construction only ↔ Full project lifecycle
                   
                    FULL LIFECYCLE
                          |
          Procore          |      Autodesk ACC
          (broad PMIS)     |      (BIM-first)
                           |
   ACCESSIBLE ─────────────┼──────────────────── POWERFUL/NICHE
                           |
     Touchplan             |   SpaceLean ★        ALICE Technologies
   (simple Lean)           |  (AI adaptive,        (generative AI,
                           |   accessible)          enterprise)
                           |
                           |  nPlan               Primavera P6
                           |  (risk analytics)     (CPM standard)
                           |
                    PRE-CONSTRUCTION FOCUS
```

**SpaceLean's unique position:** Accessible pricing + powerful AI + full lifecycle — a position no current competitor occupies. This is the core differentiation opportunity.

---

## Content & SEO Gap Analysis

### Content Gaps — Competitors Cover, SpaceLean Does Not

From codebase analysis (`MARKET_SEO_TASKS.md`, `SPACELEAN_KEYWORD_PLANNER_OPTIMIZATION.md`) and competitor research:

| # | Missing Content | Covered By | Search Intent | Priority |
|---|---|---|---|---|
| 1 | "What is 4D BIM scheduling?" long-form guide | ALICE, Autodesk, Synchro | Informational | 🔴 Critical |
| 2 | "Critical Path Method (CPM) explained for construction" | Oracle, Primavera resources | Informational | 🔴 Critical |
| 3 | "Primavera P6 tutorial / getting started" | Oracle, P6 community | Informational | 🔴 Critical |
| 4 | "Construction scheduling software comparison" overview | Procore blog, G2, Capterra | Commercial | 🔴 Critical |
| 5 | "AI alternatives to Primavera P6" article | ALICE blog, nPlan content | Commercial | 🔴 Critical |
| 6 | "Monte Carlo simulation in construction scheduling" | nPlan, academic resources | Informational | 🟠 High |
| 7 | "Last Planner System guide" | VisiLean, Touchplan | Informational | 🟠 High |
| 8 | "General contractor scheduling software guide" | G2, Capterra, Procore | Commercial | 🟠 High |
| 9 | "BIM to construction schedule workflow" | Autodesk, Bentley | How-to | 🟠 High |
| 10 | Customer case studies with verified metrics | All major competitors | Trust/E-E-A-T | 🟠 High |

### Keyword Opportunities (from `keywords spacelean.csv` and web research)

| Keyword | Est. Monthly Searches | Competition | SpaceLean Ranking | Action |
|---|---|---|---|---|
| `construction scheduling software` | 500+ | Low | Not ranking | Create guide |
| `primavera p6 alternative` | 500+ | Low | Not ranking | Create comparison page |
| `4D BIM scheduling` | 200+ | Low | Not ranking | Create pillar page |
| `ai construction scheduling` | 200+ | Low | Not ranking | Homepage optimization |
| `last planner system software` | 100+ | Low | Not ranking | Blog article |
| `construction project management software` | 5,000+ | Low | Not ranking | Solution pages |
| `project planning software` | 50,000+ | Low | Not ranking | Homepage + blog |
| `monte carlo simulation construction` | 100+ | Low | Not ranking | Blog guide |

### Existing Compare Pages (from `lib/compare-data.ts`)

SpaceLean already has comparison pages for:
- SpaceLean vs ALICE Technologies
- SpaceLean vs Autodesk Construction Cloud
- SpaceLean vs Aconex (Oracle)
- SpaceLean vs VisiLean
- SpaceLean vs Asana
- SpaceLean vs Monday.com

**Missing comparison pages with high commercial intent:**
- SpaceLean vs Primavera P6 ← **highest priority** (most searched)
- SpaceLean vs Microsoft Project
- SpaceLean vs Procore (scheduling)
- SpaceLean vs nPlan
- SpaceLean vs Synchro 4D
- SpaceLean vs Touchplan

---

## SWOT Analysis — SpaceLean

### Strengths
- **Real-time adaptive resequencing** — no direct competitor offers self-healing schedules that respond to live site conditions
- **BIM geometry-driven dependency inference** — AI reads geometry to infer dependencies (others require manual linking)
- **Transparent, accessible pricing** — Free plan + $19/mo flat is category-defining; all direct competitors are enterprise-only
- **Vendor-neutral BIM** — OpenBIM/IFC/Speckle approach vs. Autodesk's Revit lock-in
- **Full-lifecycle platform** — from pre-construction sequencing to live site resequencing (ALICE is pre-construction only; nPlan is analytics only)
- **Verified performance claims** — 80% planning time reduction, 94% critical path accuracy, 40% faster delivery (from codebase: `lib/solutions-data.ts`, `spacelean_ad_concepts.md`)
- **Modern SaaS UX** — web-native, no desktop installation required

### Weaknesses
- **Zero review presence** on G2, Capterra, Trustpilot — fatal for B2B enterprise evaluation; all competitors have review profiles
- **Unverified testimonials** — `components/Testimonials.tsx` uses fictional companies ("TechFlow", "StartupX") — identified in `MARKET_SEO_TASKS.md` SEO-006 and SEO-016
- **No analytics/tracking** — `analyze_page.py` returns no GA4 or analytics tools detected (SEO-003), preventing CRO data collection
- **Blog content misaligned** — 38 of 40 blog posts target general task management, not construction scheduling (SEO-014)
- **No G2/Capterra presence** — prevents organic discovery by construction technology buyers in evaluation stage
- **Early-stage brand** — SpaceLean lacks the enterprise client references that ALICE, nPlan, and Procore use to win procurement

### Opportunities
- **"Real-time adaptive scheduling" as a named sub-category** — no competitor owns this term; SpaceLean can define the category
- **Mid-market GC segment is completely underserved** — all powerful AI competitors are enterprise-only ($10k+/year); SpaceLean's free + $19/mo creates a clear market entry for GCs with $1M–$50M projects
- **"P6 intelligence layer" positioning** — many GCs are contractually locked into P6 but hate it; SpaceLean can import, enhance, and export back, removing switching risk
- **Construction AI market growth** — market growing from $3.9B (2024) toward $22B+ by 2030; early movers gain disproportionate brand authority
- **G2/Capterra review program** — a structured customer review campaign can establish a review presence within 3–6 months

### Threats
- **Procore and Autodesk AI investment** — both have massive R&D budgets and existing customer relationships; if they close the AI scheduling gap, SpaceLean's differentiation narrows
- **nPlan's data moat** — 750,000 historical projects is irreplicable; SpaceLean's predictive accuracy claims without matching historical data may face skepticism at enterprise level
- **Procurement inertia for Primavera P6** — contractual P6 requirements at major GCs create resistance to change regardless of SpaceLean's capabilities
- **ALICE Technologies' first-mover advantage** — already positioned in procurement consideration at large GCs before SpaceLean entered the market
- **Enterprise sales cycle** — construction technology decisions can take 6–18 months; SpaceLean's current self-serve model may not suit enterprise procurement

---

## Strategic Recommendations

### Steal-Worthy Tactics

**1. nPlan — "We saved customers $1.2 billion" ROI claim**
- Why it works: Specific, massive, credible financial outcome — immediately frames the platform as a cost-avoidance tool, not a nice-to-have.
- How to implement: Calculate SpaceLean's aggregate delay cost prevention across current customers. Even if the number is small today, present it as "X projects, Y days saved, Z in prevented delays." Build a ROI calculator at `/tools/roi-calculator`.
- Effort: Medium | Impact: High

**2. ALICE Technologies — Project-volume pricing model**
- Why it works: Removes the per-user ceiling — large construction teams often have dozens of stakeholders who need schedule visibility. Charging per-seat creates resistance.
- How to implement: Consider adding an enterprise tier priced by project value ($100K–$10M construction value) rather than per seat. This is how P6 competitors already justify enterprise pricing.
- Effort: Low (pricing decision) | Impact: High

**3. Procore — Unlimited user model as a selling point**
- Why it works: "No per-user fees" is a powerful differentiator in an industry where a single project can involve 50+ stakeholders.
- How to implement: SpaceLean's current flat Pro pricing ($19/mo) is effectively unlimited-user for the price. Make this explicit in marketing copy and the pricing page as a headline differentiator: "Add every sub, owner, and PM — no per-seat charges."
- Effort: Low (messaging) | Impact: High

**4. Touchplan — G2 and Capterra review program**
- Why it works: Touchplan's G2 profile (4.5+/5, 50+ reviews) and Capterra profile are discovered by 1,000s of construction technology buyers doing competitive research monthly. SpaceLean has zero reviews on either platform.
- How to implement: Email current users with a direct G2 review link and a small incentive (Amazon gift card, extended trial). Target 20 verified reviews in 90 days. This unlocks "G2 Leader" badging and comparison widget placement.
- Effort: Low | Impact: Very High (trust multiplier)

**5. Procore / Autodesk — App marketplace listing**
- Why it works: Procore App Marketplace and Autodesk App Store both have large, captive audiences of construction professionals actively looking for point solutions to add to their stack.
- How to implement: Build a Procore integration (API OAuth2 + schedule sync, per `COMPETITIVE_FEATURES_ACTION_PLAN.md` Task 1.2) and list SpaceLean on the Procore App Marketplace as an AI scheduling intelligence layer.
- Effort: High (engineering) | Impact: Very High (distribution)

**6. nPlan — "Predictive delay alerts" content marketing**
- Why it works: nPlan's content around "why construction projects fail" and "optimism bias in scheduling" drives top-of-funnel awareness for their risk analytics platform.
- How to implement: Create a SpaceLean blog series: "Why 98% of Megaprojects Fail" / "The Hidden Costs of Manual Scheduling" / "Anatomy of a Construction Delay." Each post educates and positions SpaceLean's predictive capabilities.
- Effort: Medium | Impact: High

**7. Primavera P6 — "XER-compatible" positioning in Google Search ads**
- Why it works: P6 users searching for alternatives are the highest-intent commercial audience in this market. P6's high cost and complexity creates genuine frustration.
- How to implement: Run Google Search ads on `primavera p6 alternative`, `primavera p6 pricing alternative`, and `replace primavera p6`. Landing page: `/compare/spacelean-vs-primavera-p6` (currently missing — highest priority page to build).
- Effort: Low (ads) + Medium (page) | Impact: Very High

**8. ALICE Technologies — Vertical-specific case study content**
- Why it works: ALICE wins enterprise deals by showing case studies from specific verticals (data centers, hospitals, infrastructure). Buyers in those verticals search for proof.
- How to implement: Create 3 vertical-specific case study pages: GCs (commercial), Industrial (data center/refinery), Infrastructure (road/rail). Use the `lib/solutions-data.ts` content + real customer data where available.
- Effort: Medium | Impact: High

**9. Touchplan — "Last Planner System + AI" webinar series**
- Why it works: The Lean Construction Institute community is deeply engaged and attends webinars regularly. Touchplan and VisiLean are regular contributors. SpaceLean has an opportunity to establish thought leadership.
- How to implement: Host monthly 45-minute webinars on Lean construction AI topics. Partner with LCI chapters or individual Lean coaches. Record and publish for SEO.
- Effort: Medium | Impact: High (community + SEO)

**10. nPlan — Target "schedule risk analysis" queries with a free tool**
- Why it works: nPlan drives awareness by being associated with schedule risk analytics. SpaceLean can offer a free Monte Carlo schedule risk tool at `/tools/critical-path-calculator` (partially exists per `FREE_TOOLS_ROADMAP.md`).
- How to implement: Expand the critical path calculator to include a probabilistic risk output (P50, P80 completion date). Make it shareable. This positions SpaceLean's Monte Carlo capability as approachable and free.
- Effort: Medium | Impact: High

---

### Differentiation Strategy

#### Option 1 (Recommended): Own "Real-Time Adaptive Scheduling"
- **Category:** Create the sub-category of "real-time adaptive construction scheduling" — no competitor uses this exact framing.
- **Positioning Statement:** *"SpaceLean is the world's first real-time adaptive construction scheduling platform — the only system that continuously resequences your programme as site conditions change, preventing delays instead of just reporting them."*
- **Headline Recommendation:** "The Construction Schedule That Fixes Itself."
- **Supporting Evidence (from codebase):**
  - Self-healing schedule resequencing (from `lib/solutions-data.ts`)
  - Probabilistic Monte Carlo (1,000 simulations)
  - 94% critical path prediction accuracy
  - Real-time crew conflict resolution
- **Manifestation:** Lead with "adaptive" language across homepage hero, pricing page, all comparison pages. Use "living schedule" vs. "static plan" framing.

#### Option 2: Own the "Mid-Market AI" Position
- **Audience:** Target the completely underserved GC segment managing $1M–$50M projects — too small for ALICE/nPlan, priced out of Synchro, frustrated by P6.
- **Positioning Statement:** *"Enterprise AI construction scheduling — for teams who can't afford $50,000/year software."*
- **Headline Recommendation:** "Primavera-Class AI Scheduling, at 1% of the Price."

#### Option 3: Own "Vendor-Neutral BIM Intelligence"
- **Feature:** OpenBIM/IFC approach vs. Autodesk's Revit lock-in.
- **Positioning Statement:** *"SpaceLean works with any BIM platform — Revit, ArchiCAD, Rhino, IFC — because your schedule intelligence shouldn't be held hostage by your design software."*

---

### Alternative Pages to Create

#### Priority 1: SpaceLean vs Primavera P6
**URL:** `/compare/spacelean-vs-primavera-p6`

```
Headline: "Looking for a Primavera P6 Alternative? Here's Why Construction Teams Choose SpaceLean."

Sections:
  1. Quick comparison table (AI generation, BIM import, pricing, learning curve, free plan)
  2. Where SpaceLean wins: AI scheduling from BIM, free plan, no desktop install, adaptive resequencing
  3. Where P6 wins: contractual compliance, enterprise depth, industry familiarity
  4. Who SpaceLean is best for: GCs $1M–$100M project value, VDC managers, mid-market firms
  5. How to use SpaceLean with P6: import XER → enhance → export back
  6. FAQ: "Will my owner accept SpaceLean instead of P6?" / "Can I export to P6?"
  7. CTA: "Try SpaceLean Free — No P6 License Required"
```

#### Priority 2: SpaceLean vs nPlan
**URL:** `/compare/spacelean-vs-nplan`

```
Headline: "SpaceLean vs nPlan: AI Schedule Generation vs AI Schedule Prediction"

Sections:
  1. Core difference: SpaceLean creates AND predicts; nPlan only predicts
  2. Feature comparison (BIM generation, real-time adaptation, pricing, accessibility)
  3. Where nPlan wins: historical data depth, mega-project credibility
  4. Who SpaceLean is best for: project teams that need to build and run schedules, not just audit them
```

#### Priority 3: SpaceLean vs Microsoft Project
**URL:** `/compare/spacelean-vs-microsoft-project`

```
Headline: "SpaceLean vs Microsoft Project: AI-Native vs Manual CPM"

Sections:
  1. AI generation vs manual task entry
  2. BIM integration vs no BIM capability
  3. Pricing (flat vs per-user M365)
  4. Adaptive scheduling vs static Gantt
  5. CTA: "Try SpaceLean Free — No Microsoft License Needed"
```

#### Priority 4: SpaceLean vs Synchro 4D
**URL:** `/compare/spacelean-vs-synchro-4d`  
*(Currently missing — Synchro is frequently mentioned as a benchmark in the codebase)*

#### Priority 5: SpaceLean vs Touchplan  
**URL:** `/compare/spacelean-vs-touchplan`  
*"Next step for Lean teams who've outgrown digital pull-planning boards"*

---

### Switching Narratives

#### P6 → SpaceLean
```
Why customers switch:
  1. P6 requires expensive certified schedulers — SpaceLean generates the schedule from BIM
  2. P6 can't read IFC/Revit files — SpaceLean is BIM-native
  3. P6 can't resequence when things change — SpaceLean self-heals

Switching offer: Import your existing .XER file free. SpaceLean will run Monte Carlo risk analysis 
on your P6 schedule in under 60 seconds — no commitment, no credit card.

Switching story: "Like most GCs, [firm] started with P6 because owners demanded it. After spending 
3 weeks scheduling manually and hiring a P6 specialist at $150/hour, they uploaded their IFC 
model to SpaceLean. Within 2 hours they had a complete, AI-generated 4D schedule. They still 
export to P6 for owner submissions — but SpaceLean does the actual scheduling."
```

#### ALICE → SpaceLean
```
Why customers switch:
  1. ALICE provides pre-construction sequences — SpaceLean keeps adapting during execution
  2. ALICE enterprise pricing is inaccessible for mid-market GCs
  3. ALICE's static output requires manual adjustment when field conditions change

Switching offer: "Try SpaceLean's adaptive scheduling on your next project — free. Import your 
ALICE output as the baseline and let SpaceLean self-heal as execution begins."
```

---

## Competitive Monitoring Plan

### Ongoing Monitoring Checklist

- [ ] Set Google Alerts for: "ALICE Technologies", "nPlan", "VisiLean", "Touchplan", "Synchro 4D", "construction scheduling AI"
- [ ] Follow all competitors on LinkedIn — monitor funding announcements, product launches, job postings
- [ ] Subscribe to competitor newsletters (Procore Blog, Autodesk Construction blog, nPlan newsletter)
- [ ] Check competitor pricing pages monthly (especially ALICE, nPlan for any transparency updates)
- [ ] Monitor G2 and Capterra for new competitor reviews quarterly
- [ ] Track competitor content publishing topics weekly (what are they writing about?)
- [ ] Watch for competitor job postings monthly — VDC engineers and AI engineers hired = new features coming
- [ ] Check Meta Ad Library and Google Ads Transparency monthly for competitor ad creative
- [ ] Review competitor backlink profiles quarterly (Ahrefs or Semrush)
- [ ] Track construction industry press (Construction Dive, ENR) for competitor coverage

### Competitive Response Playbook

| Competitor Move | Response Strategy | Timeline |
|---|---|---|
| ALICE adds real-time resequencing | Double down on "we've had this since day one" + case studies showing execution-phase value | 2 weeks |
| nPlan launches SMB / self-serve tier | Launch "real-time vs predictive" comparison content immediately; emphasize BIM-generation (nPlan can't do this) | 1 week |
| Procore acquires an AI scheduling startup | Publish "independent AI scheduling vs bundled PMIS" positioning; emphasize SpaceLean's focus | 1–2 days |
| Competitor price cut | Emphasize value (ROI calculator, cost avoidance) + our free plan — don't match pricing cuts | 1 week |
| Negative content about SpaceLean | Create factual, balanced comparison; address concerns directly in FAQ | 1 week |
| Major funding round by competitor | Reassure customers on stability; emphasize SpaceLean's product velocity | 1–2 days |

---

## Next Steps

### 1. Build the Primavera P6 Comparison Page (Immediate — Week 1)
The query `primavera p6 alternative` is the single highest-value commercial keyword in this market. SpaceLean has no page targeting it. Every day without this page is lost bottom-of-funnel traffic. Build `/compare/spacelean-vs-primavera-p6` as the first priority.

### 2. Launch a G2 Review Campaign (Immediate — 30-day sprint)
SpaceLean has zero verified reviews on G2 or Capterra. This is the #1 trust blocker for mid-market B2B buyers in evaluation. Every major competitor has a review profile. A campaign of outreach to current users with a G2 review link — even 15–20 reviews — transforms SpaceLean's discoverability in "AI construction scheduling software" category searches on review platforms. This directly enables top-of-funnel discovery from buyers who currently can't find SpaceLean in comparison research.

### 3. Replace Fictional Testimonials with Verified Customer Evidence (30 days)
The codebase contains fictional testimonials with unverifiable company names ("TechFlow", "StartupX") and an `aggregateRating` schema claiming 4.8★/127 reviews without any review platform to back it up (flagged as SEO-006 and SEO-016 in `MARKET_SEO_TASKS.md`). This creates both an SEO risk (Google manual action for fake structured data) and a credibility gap vs. all competitors who have real, verifiable customer references. Replacing these with real customer quotes — or removing them temporarily — is essential before scaling any ad spend or outbound sales.

---

```
=== COMPETITIVE INTELLIGENCE REPORT ===

Target: SpaceLean (spacelean.ai)
Competitors Analyzed: 9 (5 direct, 3 indirect, 2 aspirational)
Competitive Position: Moderate — strong AI differentiation, early-stage market presence

Competitive Landscape:
  Direct:       ALICE Technologies (enterprise, pre-construction AI)
                nPlan (ML risk prediction, GV-backed, $16M Series B)
                Synchro 4D / Bentley (4D BIM standard, ~$300–$400+/mo est.)
                VisiLean (Lean + LPS + 4D BIM)
                Touchplan (visual pull-planning, ~4.5★ G2)
  Indirect:     Oracle Primavera P6 (~$2,500–$4,000/user), Procore ($10k–$80k+/yr), Autodesk ACC
  Aspirational: Procore (dominant PMIS), nPlan (credible AI peer)

Key Findings:
  Biggest Advantage: Real-time adaptive resequencing — no competitor offers self-healing schedules
  Biggest Threat: Zero G2/Capterra review presence + fictional testimonials = B2B trust gap
  Biggest Opportunity: "Primavera P6 alternative" keyword — $0 current ranking, highest commercial intent

Feature Gaps: Procore App Marketplace listing, verified review platform, enterprise references
Content Gaps: P6 comparison page, 4D BIM guide, CPM explainer, customer case studies
Pricing Position: Well below market average — category-defining free plan + $19/mo flat

Top 3 Actions:
  1. Create /compare/spacelean-vs-primavera-p6 (highest commercial intent keyword, zero cost)
  2. Launch G2 review campaign — target 20 verified reviews in 30 days
  3. Replace fictional testimonials with real verified customer quotes before scaling any ad spend

Full report saved to: COMPETITOR-REPORT.md
```

---

## Actionable Website Improvement Tasks

This section translates the findings, competitive positioning matrices, and tactical recommendations from the Competitive Intelligence Report and `market-competitors` skill into an actionable website implementation roadmap for SpaceLean.

> **Relationship to Existing Project Tracking Documents:**
> - Tasks that address technical metadata and schema are cross-referenced with `MARKET_SEO_TASKS.md` (e.g., SEO-002, SEO-004, SEO-006, SEO-012, SEO-015, SEO-016, SEO-017, SEO-019).
> - Backend engine and integration milestones are cross-referenced with `COMPETITIVE_FEATURES_ACTION_PLAN.md` (e.g., Task 1.1 XER parser, Task 1.2 Procore integration).
> - Interactive tooling tasks coordinate with `FREE_TOOLS_ROADMAP.md` and `FREE_TOOLS_SUMMARY.md`.
> - All verified competitor facts reflect verified public data as of October 2026; unverified items or strategic estimations are explicitly marked as `Needs Verification`.

---

### Phase 1: High-Priority Website Improvements

---

#### WEB-001: Create SpaceLean vs. Primavera P6 Comparison Landing Page
- **Task ID:** WEB-001
- **Task Title:** Create SpaceLean vs. Oracle Primavera P6 High-Intent Comparison Landing Page
- **Finding from Competitor Report:** 
  - Competitor Report §4.6, §6.1 (Content Gap #3 & #5), §7.3 (Priority 1), and §8.1.
  - Oracle Primavera P6 is the dominant incumbent in contractual construction scheduling (~$2,500–$4,000/user perpetual or ~$250–$400/user/mo SaaS).
  - The commercial search query `primavera p6 alternative` represents 500+ monthly searches with low keyword competition and the highest commercial purchase intent in the construction scheduling software sector.
  - SpaceLean's codebase (`lib/compare-data.ts`) already maintains comparison pages for Asana, Monday, ClickUp, Notion, Linear, Autodesk ACC, Aconex, ALICE Technologies, and VisiLean, but completely omits Primavera P6.
- **Current Implementation Status:** ❌ Missing (`lib/compare-data.ts` has 9 comparisons, none for Primavera P6; `/compare/spacelean-vs-primavera-p6` returns 404).
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Route: `/compare/spacelean-vs-primavera-p6`
  - Data model: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
  - Page renderer: [`app/compare/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/compare/[slug]/page.tsx)
  - Index view: [`components/CompareClient.tsx`](file:///home/user/Documents/spacelearn/components/CompareClient.tsx)
- **Priority:** High
- **Expected Outcome:** Capture high-intent bottom-of-funnel organic search traffic from general contractors and planning engineers actively looking to replace or augment P6; establish SpaceLean as the modern AI companion to P6 that imports and exports `.xer` files.
- **Acceptance Criteria:**
  - `spacelean-vs-primavera-p6` entry added to `comparisons` array in `lib/compare-data.ts`.
  - Content includes side-by-side feature matrix (AI generation, BIM geometry import, real-time resequencing, pricing transparency, free tier, desktop vs. cloud).
  - Clear "Where SpaceLean Wins" section (BIM-native, cloud collaboration, self-healing schedules, $19/mo flat vs. $3,000/seat).
  - Honest "Where Primavera P6 Wins" section (contractual specification compliance, 40-year enterprise footprint, complex multi-tier resource leveling).
  - Coexistence positioning: "How to use SpaceLean with P6: Import your .XER, optimize with AI, export back for owner submittals."
  - Breadcrumb and ComparisonTable schema implemented per SEO-012.
- **Dependencies or Additional Research Required:** Coordinate with `COMPETITIVE_FEATURES_ACTION_PLAN.md` Task 1.1 (XER Syncer) and reference `MARKET_SEO_TASKS.md` SEO-012 & SEO-015.

---

#### WEB-002: Replace Unverified Testimonials and Remove Placeholder Video Embed
- **Task ID:** WEB-002
- **Task Title:** Replace Fictional Testimonials with Verified Industry Evidence & Remove Placeholder Video Embed
- **Finding from Competitor Report:**
  - Competitor Report §5.3 (Review Ratings), §6.2 (Weaknesses), and §8.3.
  - Direct competitors (Touchplan, Procore, Autodesk ACC) feature authentic customer case studies, verified G2 review badges, and live demo videos.
  - Inspection of SpaceLean's codebase reveals that `components/Testimonials.tsx` displays fictional quotes from generic startup personas ("Sarah Jenkins / TechFlow", "Michael Chen / StartupX", "Emily Rodriguez / Marketing Lead") from unrelated SaaS domains.
  - `components/HeroSection.tsx` line 276 wires the "How it works" button to `https://www.youtube.com/embed/dQw4w9WgXcQ` (a placeholder Rickroll video), creating a major trust failure for enterprise construction buyers.
  - In addition, `MARKET_SEO_TASKS.md` SEO-006 and SEO-016 identify this as an E-E-A-T and Google structured data penalty risk.
- **Current Implementation Status:** 🔶 Partial (interactive UI exists, but contents are placeholder/unverified).
- **Type:** Existing Page Update / UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Homepage: `/`
  - Component: [`components/Testimonials.tsx`](file:///home/user/Documents/spacelearn/components/Testimonials.tsx)
  - Hero Component: [`components/HeroSection.tsx`](file:///home/user/Documents/spacelearn/components/HeroSection.tsx#L276)
  - Video Modal: [`components/VideoModal.tsx`](file:///home/user/Documents/spacelearn/components/VideoModal.tsx)
- **Priority:** High
- **Expected Outcome:** Eliminate high-risk credibility flags that trigger enterprise bounce rates; present verifiable construction proof points (project duration reductions, schedule clash resolution metrics) that withstand contractor scrutiny.
- **Acceptance Criteria:**
  - Replace placeholder video URL in `components/HeroSection.tsx` with a verified 60-second SpaceLean product walkthrough or high-resolution animated platform demo showing BIM-to-Gantt conversion.
  - In `components/Testimonials.tsx`, replace fictional personas with verified pilot testimonials, anonymized commercial GC case studies ("VDC Director, $50M Commercial Contractor, Southeast US"), or replace the testimonial carousel temporarily with verified platform performance benchmarks (e.g., "80% Reduction in Baseline Setup Time", "1,000 Monte Carlo Iterations in <60s", "Zero Data Loss on IFC4 Import") derived from verified codebase benchmarks.
  - Remove all fictional `TechFlow` and `StartupX` entities from both visible JSX and JSON-LD schema (addressing SEO-006 and SEO-016).
- **Dependencies or Additional Research Required:** Internal verification of live pilot feedback or production metrics from SpaceLean founding team.

---

#### WEB-003: Overhaul Homepage Hero Copy to Own "Real-Time Adaptive Scheduling"
- **Task ID:** WEB-003
- **Task Title:** Overhaul Homepage Hero Headline, Subhead, and Value Proposition to Own Category Framing
- **Finding from Competitor Report:**
  - Competitor Report §1, §4.1 (ALICE Profile), §4.2 (nPlan Profile), and §7.2 (Differentiation Strategy Option 1).
  - ALICE Technologies focuses strictly on pre-construction "optioneering" and outputs static sequences.
  - nPlan focuses purely on retrospective/predictive risk forecasting on existing schedules.
  - Legacy tools (P6, MS Project) are completely manual and static.
  - SpaceLean's verified core technical differentiator is continuous, real-time schedule adaptation (self-healing Gantt charts responding to jobsite updates).
  - Current homepage hero (`components/HeroSection.tsx` lines 291–311) uses generic phrasing ("AI-Powered Construction Project Planning & Scheduling Software") and a confusing tagline ("We don't animate schedules. We build them.") that fails to articulate the "adaptive / self-healing" category moat.
- **Current Implementation Status:** 🔶 Partial (construction keywords are present, but the category differentiator is not clearly communicated above the fold).
- **Type:** Existing Page Update / Marketing
- **Relevant URL & Source File Paths:**
  - Homepage: `/`
  - Hero Component: [`components/HeroSection.tsx`](file:///home/user/Documents/spacelearn/components/HeroSection.tsx#L291-L337)
  - Entity schema: [`app/page.tsx`](file:///home/user/Documents/spacelearn/app/page.tsx)
- **Priority:** High
- **Expected Outcome:** Immediately establish a unique, defensible category positioning in the mind of visiting contractors; decrease bounce rates from commercial planners who already have static CPM software.
- **Acceptance Criteria:**
  - Primary H1 and badge revised to incorporate "Real-Time Adaptive Scheduling" or "The Construction Schedule That Fixes Itself".
  - Subhead clearly articulates: "While traditional CPM tools lock you into static plans, SpaceLean continuously resequences your program from BIM models as field conditions change — preventing delays before they cascade."
  - Primary CTA remains "Start Free Trial" with secondary CTA "Watch 2-Min Demo" or "Calculate Delay ROI".
  - Aligns with Entity Statement requirements in `MARKET_SEO_TASKS.md` SEO-018.
- **Dependencies or Additional Research Required:** Alignment with product roadmap regarding live adaptive features.

---

#### WEB-004: Align Pricing Page Copy with Flat $19/mo Unlimited-User Advantage
- **Task ID:** WEB-004
- **Task Title:** Align Pricing Page Copy with Flat $19/mo Unlimited-User Market Advantage
- **Finding from Competitor Report:**
  - Competitor Report §5.2 (Pricing Comparison Matrix) & §7.1 Tactic 3.
  - Construction software pricing is notorious for steep per-seat fees ($50/user/mo for Touchplan, $250–$400/user/mo for P6, $10k–$80k/year for Procore ACV). Because a single project involves dozens of subcontractors, superintendents, and engineers, per-user pricing severely restricts adoption.
  - SpaceLean offers a category-disruptive model: Free tier (up to 3 projects) and Pro at $19/month flat with unlimited users.
  - However, `components/Pricing.tsx` currently describes the Individual tier as "Perfect for freelancers and solo builders" with "Manual time tracking", and the Pro tier with "Two-way calendar sync". This generic SaaS language hides the construction value proposition.
- **Current Implementation Status:** 🔶 Partial (pricing numbers are live, but feature lists and target personas describe generic productivity tools rather than construction teams).
- **Type:** Existing Page Update / UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Route: `/pricing`
  - Component: [`components/Pricing.tsx`](file:///home/user/Documents/spacelearn/components/Pricing.tsx#L8-L53)
  - Page wrapper: [`app/pricing/page.tsx`](file:///home/user/Documents/spacelearn/app/pricing/page.tsx)
- **Priority:** High
- **Expected Outcome:** Position SpaceLean's pricing as an undeniable competitive advantage; convert mid-market general contractors who are priced out of ALICE, Synchro, and Procore.
- **Acceptance Criteria:**
  - Individual tier renamed to "Starter / Field Trial" (Free): "Up to 3 active projects", "AI schedule generation from IFC/BIM", "CPM critical path calculations", "Export to CSV & PDF".
  - Pro tier ($19/mo flat): Highlight "Unlimited Collaborators & Subcontractors — No Per-Seat Fees", "Unlimited projects", "Real-time adaptive resequencing", "Monte Carlo delay risk simulation (1,000 runs)", "Primavera P6 .XER import & export", "Zone & crew congestion mitigation".
  - Enterprise tier: "Portfolio-wide multi-project governance", "Custom ERP & Procore API integrations", "Dedicated customer success & onboarding", "SOC 2 Type II compliance guarantees".
  - Address SEO-002 (Single H1 on `/pricing`) and SEO-004 (Meta Title update).
- **Dependencies or Additional Research Required:** Reference `MARKET_SEO_TASKS.md` SEO-002 and SEO-004.

---

#### WEB-005: Transform `/request-a-demo` Funnel to Focus on AEC Enterprise Scheduling
- **Task ID:** WEB-005
- **Task Title:** Transform `/request-a-demo` Funnel Copy and Form Fields from Generic Task Management to AEC Project Scheduling
- **Finding from Competitor Report:**
  - Competitor Report §7.1 Tactic 8 & Review of `app/request-a-demo/page.tsx` and `components/DemoRequest.tsx`.
  - The current demo request page uses metadata titled "Request a Demo | SpaceLean AI Task Management Platform", claims benefits including "Custom workflows for any industry", and features bullet points highlighting "Kanban boards, calendar views, and priority tracking".
  - In `components/DemoRequest.tsx`, the form collects only generic inputs (first/last name, email, phone, company, company size, generic text area). It fails to qualify construction prospects on project volume, project type (commercial, infrastructure, residential), or primary scheduling software currently used (P6, MS Project, Procore, Excel).
  - High-value GC buyers expecting an enterprise AI scheduling solution will abandon this generic form.
- **Current Implementation Status:** 🔶 Partial (the GraphQL submission pipeline works, but copy and qualification fields target generic SaaS).
- **Type:** Existing Page Update / UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Route: `/request-a-demo`
  - Page: [`app/request-a-demo/page.tsx`](file:///home/user/Documents/spacelearn/app/request-a-demo/page.tsx)
  - Form Component: [`components/DemoRequest.tsx`](file:///home/user/Documents/spacelearn/components/DemoRequest.tsx)
- **Priority:** High
- **Expected Outcome:** Increase demo booking conversion rates among target mid-market general contractors, VDC directors, and commercial developers by presenting an industry-tailored intake experience.
- **Acceptance Criteria:**
  - Update page metadata in `app/request-a-demo/page.tsx` to "Request an AI Construction Scheduling Demo | SpaceLean".
  - Replace left-column benefits with construction-specific points: "BIM-to-Schedule generation in minutes", "Real-time crew clash and zone congestion prevention", "Automated lookahead generation for trade contractors", "Zero-risk co-existence with Primavera P6".
  - Add qualifying dropdowns to `components/DemoRequest.tsx`: "Primary Project Type" (Commercial, Industrial / Infrastructure, Residential, Civil) and "Current Scheduling Tool" (Primavera P6, Microsoft Project, Procore, Excel, Other).
  - Add trust badges next to the submit button (e.g., "IFC 2x3/4 Compliant", "XER Compatible", "No Credit Card Required").
- **Dependencies or Additional Research Required:** Coordinate backend GraphQL mutation schema (`CreateDemoRequestInput`) to accept optional project type and scheduling tool fields.

---

### Phase 2: SEO and Content Opportunities

---

#### WEB-006: Publish Pillar Educational Guide: "What is 4D BIM Scheduling?"
- **Task ID:** WEB-006
- **Task Title:** Publish Comprehensive Pillar Guide: "What is 4D BIM Scheduling? Process, Benefits & AI Evolution"
- **Finding from Competitor Report:**
  - Competitor Report §6.1 (Content Gap #1): Covered extensively by Synchro 4D (Bentley), Autodesk ACC, and ALICE Technologies.
  - Represents a core informational search query (200+ monthly searches) with high topical relevance for VDC managers, BIM coordinators, and general contractor project executives.
  - SpaceLean’s core platform generates 4D sequences directly from IFC BIM models, yet the website lacks any authoritative long-form educational asset on the topic.
- **Current Implementation Status:** ❌ Missing (SpaceLean's blog has 40 posts, but 38 are focused on generic productivity/OKR topics per `MARKET_SEO_TASKS.md` SEO-014).
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target URL: `/blogs/what-is-4d-bim-scheduling-guide`
  - Blog data repository: [`lib/blog-data.ts`](file:///home/user/Documents/spacelearn/lib/blog-data.ts)
  - Blog reader template: [`app/blogs/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/blogs/[slug]/page.tsx)
- **Priority:** High
- **Expected Outcome:** Rank for informational queries around 4D BIM; capture top-of-funnel traffic from architects, VDC engineers, and schedulers seeking modern 4D scheduling methodologies; generate AI search engine citations in Perplexity, Claude, and ChatGPT.
- **Acceptance Criteria:**
  - 2,500+ word technical guide authored and added to `lib/blog-data.ts`.
  - Detailed breakdown of: (1) Evolution from 2D Gantt to 3D BIM to 4D time-linking, (2) Traditional manual element linking (Synchro method) vs. AI automated spatial inference (SpaceLean method), (3) OpenBIM and IFC schema standards, (4) Practical jobsite use cases for trade contractors.
  - Inclusion of technical diagrams, code/IFC property snippets, comparison tables, and FAQ section with `FAQPage` schema.
  - Direct contextual callout banners linking to SpaceLean’s free trial and `/compare/spacelean-vs-alice-technologies`.
- **Dependencies or Additional Research Required:** References `MARKET_SEO_TASKS.md` SEO-014 and SEO-015; aligns with AEO Task 4 (AI Citation Optimization).

---

#### WEB-007: Publish Critical Path Method (CPM) Architectural & Scheduling Guide
- **Task ID:** WEB-007
- **Task Title:** Publish Authoritative Guide: "Critical Path Method (CPM) in Construction: From P6 to AI Resequencing"
- **Finding from Competitor Report:**
  - Competitor Report §6.1 (Content Gap #2 & #3): CPM scheduling queries have massive collective volume (5,000+ monthly searches globally across CPM queries) and are dominated by Oracle Primavera, Procore, and project management portals.
  - SpaceLean already maintains an active client-side CPM calculation engine (`app/tools/critical-path-calculator/cpm-engine.ts`) with forward pass, backward pass, total float, and free float calculations.
  - However, there is no companion pillar article explaining CPM math, common scheduling traps, or how AI resequencing modernizes rigid CPM logic.
- **Current Implementation Status:** 🔶 Partial (the algorithmic tool exists at `/tools/critical-path-calculator`, but the companion educational pillar article is missing).
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target URL: `/blogs/critical-path-method-construction-scheduling-guide`
  - Blog data repository: [`lib/blog-data.ts`](file:///home/user/Documents/spacelearn/lib/blog-data.ts)
  - Interactive Tool Link: [`app/tools/critical-path-calculator/page.tsx`](file:///home/user/Documents/spacelearn/app/tools/critical-path-calculator/page.tsx)
- **Priority:** Medium
- **Expected Outcome:** Secure organic search visibility for core engineering and scheduling terms; funnel readers directly into SpaceLean’s free browser-based Critical Path Calculator.
- **Acceptance Criteria:**
  - In-depth article covering CPM definitions, mathematical formulas (ES, EF, LS, LF, Float), critical path sensitivity, and why static CPM fails in dynamic field environments.
  - Interactive embed or prominent CTA pointing to SpaceLean’s `/tools/critical-path-calculator`.
  - Contrasting analysis of Oracle Primavera P6 manual CPM logic vs. SpaceLean probabilistic Monte Carlo critical paths.
  - Structured data (`TechArticle` + `FAQPage` schema) validated without errors.
- **Dependencies or Additional Research Required:** References `MARKET_SEO_TASKS.md` SEO-015 and `FREE_TOOLS_ROADMAP.md` Tool 1.

---

#### WEB-008: Deploy Free Interactive Construction Delay Cost & ROI Calculator
- **Task ID:** WEB-008
- **Task Title:** Deploy Free Interactive Construction Delay Cost & ROI Calculator Tool
- **Finding from Competitor Report:**
  - Competitor Report §7.1 Tactic 1 (nPlan $1.2B delay cost prevention claims) & Tactic 10 (Free schedule risk tools).
  - Construction technology purchases are heavily scrutinized by CFOs and Project Executives. Competitors like Touchplan and nPlan sell on quantified cost avoidance (e.g. liquidated damages of $5,000–$25,000/day, general conditions overhead of $2,000/day).
  - SpaceLean currently provides a CPM calculator, daily site report generator, and construction cost calculator in `/tools/`, but lacks a dedicated Delay Cost & ROI Calculator that calculates project delay exposure and potential SpaceLean savings.
- **Current Implementation Status:** ❌ Missing (`app/tools/` contains 4 tools, but no delay ROI calculator).
- **Type:** New Page / UI/UX / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target Route: `/tools/construction-delay-roi-calculator`
  - Tools Index: [`app/tools/page.tsx`](file:///home/user/Documents/spacelearn/app/tools/page.tsx)
  - Component Directory: `app/tools/construction-delay-roi-calculator/`
- **Priority:** Medium
- **Expected Outcome:** Drive high-intent viral backlinks and lead generation from GCs evaluating software ROI; provide sales enablement material for enterprise demo calls.
- **Acceptance Criteria:**
  - Interactive React client component allowing users to input: (1) Total Project Contract Value ($), (2) Scheduled Project Duration (months), (3) Daily General Conditions / Jobsite Overhead ($/day), (4) Daily Liquidated Damages rate ($/day).
  - Dynamic output calculating: Total daily cost of delay, estimated risk exposure based on industry average delay factors (McKinsey benchmark: 20% duration slippage), and projected savings using SpaceLean’s 40% delivery acceleration metric.
  - One-click "Export PDF Business Case" button and gated "Schedule ROI Review" consultation CTA.
  - Full breadcrumb and software schema per SEO-011.
- **Dependencies or Additional Research Required:** Coordinate with `FREE_TOOLS_ROADMAP.md` and `FREE_TOOLS_SUMMARY.md`.

---

#### WEB-009: Revamp Homepage FAQ with Competitor-Differentiating Search-Intent Questions
- **Task ID:** WEB-009
- **Task Title:** Revamp Homepage FAQ with Competitor-Differentiating Search-Intent Questions
- **Finding from Competitor Report:**
  - Competitor Report §6.1 & codebase inspection of `components/FAQ.tsx`.
  - Construction software buyers ask specific, technical questions before adopting a scheduling platform: "Can I export to Primavera P6?", "Does SpaceLean replace Procore?", "What BIM formats are supported?", "How do subcontractors access the lookahead schedule?", "How does SpaceLean compare to ALICE Technologies?".
  - SpaceLean's current FAQ in `components/FAQ.tsx` features generic software questions: "What is SpaceLean?", "How does SpaceLean help teams collaborate?", "Can I invite external clients?", "What integrations do you support?".
  - This is flagged in `MARKET_SEO_TASKS.md` SEO-019 and `SEO-TASKS.md` Task 13.
- **Current Implementation Status:** 🔶 Partial (the FAQ component and accordion animations work well, but the questions and answers lack search intent and competitive differentiation).
- **Type:** Existing Page Update / SEO/Content
- **Relevant URL & Source File Paths:**
  - Route: `/`
  - Component: [`components/FAQ.tsx`](file:///home/user/Documents/spacelearn/components/FAQ.tsx)
  - Schema container: [`app/page.tsx`](file:///home/user/Documents/spacelearn/app/page.tsx)
- **Priority:** Medium
- **Expected Outcome:** Capture featured snippets and AI engine citations for commercial queries; resolve core procurement hesitations directly on the homepage.
- **Acceptance Criteria:**
  - Rewrite 8–10 FAQ items to directly address:
    1. "How does SpaceLean differ from legacy tools like Primavera P6 and MS Project?"
    2. "Can I import and export Primavera P6 (.XER) and Microsoft Project XML schedules?"
    3. "How does SpaceLean compare to AI sequencing tools like ALICE Technologies?"
    4. "Does SpaceLean require Revit, or does it support OpenBIM and IFC models?"
    5. "Do subcontractors and trade foremen need paid licenses to view daily lookaheads?" (Highlight $19/mo flat unlimited seats).
    6. "How does real-time adaptive resequencing work when a trade is delayed?"
    7. "What size projects is SpaceLean designed for?"
  - Update `FAQPage` JSON-LD structured data on `app/page.tsx` to match the new questions exactly.
- **Dependencies or Additional Research Required:** Direct implementation of `MARKET_SEO_TASKS.md` SEO-019.

---

#### WEB-010: Establish Systematic Internal Linking Across Blog, Free Tools, and Compare Hubs
- **Task ID:** WEB-010
- **Task Title:** Establish Systematic Internal Linking Network Across Blogs, Free Tools, and Comparison Hubs
- **Finding from Competitor Report:**
  - Competitor Report §6.3 & `MARKET_SEO_TASKS.md` SEO-017.
  - SpaceLean has isolated clusters: `/blogs/*` has 40 articles, `/tools/*` has 4 interactive utilities, and `/compare/*` has 9 competitor pages. However, contextual hyperlinks between these clusters are sparse.
  - A user reading about critical path scheduling on the blog is not offered an immediate in-line link to `/tools/critical-path-calculator` or `/compare/spacelean-vs-alice-technologies`.
  - Competitors (Procore, Autodesk) maintain dense internal contextual link architectures that distribute PageRank and move visitors down the conversion funnel.
- **Current Implementation Status:** 🔶 Partial (navigation header has top-level links, but contextual within-content links are missing).
- **Type:** Existing Page Update / SEO/Content
- **Relevant URL & Source File Paths:**
  - Blog data: [`lib/blog-data.ts`](file:///home/user/Documents/spacelearn/lib/blog-data.ts)
  - Markdown renderer: [`components/blog/MarkdownRenderer.tsx`](file:///home/user/Documents/spacelearn/components/blog/MarkdownRenderer.tsx)
  - Tools page: [`app/tools/page.tsx`](file:///home/user/Documents/spacelearn/app/tools/page.tsx)
  - Compare page: [`app/compare/page.tsx`](file:///home/user/Documents/spacelearn/app/compare/page.tsx)
- **Priority:** Medium
- **Expected Outcome:** Increase average session duration, lower bounce rates, accelerate page indexing for new tools and compare pages, and boost organic keyword rankings across the entire domain.
- **Acceptance Criteria:**
  - Audit all construction-related blog posts in `lib/blog-data.ts` to insert 2–3 contextual links to relevant `/tools/*` calculators and `/compare/*` pages.
  - Add a "Related Free Tools" dynamic widget at the bottom of relevant blog articles.
  - Add "Compare SpaceLean" contextual callout blocks on each tool page (e.g., on `/tools/critical-path-calculator`, link to `/compare/spacelean-vs-primavera-p6`).
- **Dependencies or Additional Research Required:** References `MARKET_SEO_TASKS.md` SEO-017.

---

### Phase 3: Conversion and Differentiation Improvements

---

#### WEB-011: Build Vendor-Neutral OpenBIM / IFC Interoperability Feature Showcase
- **Task ID:** WEB-011
- **Task Title:** Build Vendor-Neutral OpenBIM / IFC Feature Showcase (vs. Autodesk Revit Lock-In)
- **Finding from Competitor Report:**
  - Competitor Report §4.8 (Autodesk ACC Profile), §5.1 (Feature Comparison), and §7.2 Option 3.
  - Autodesk Construction Cloud enforces strict dependence on Revit, Navisworks, and proprietary Autodesk file formats, causing friction for contractors working with structural engineers or fabricators using Tekla, ArchiCAD, Rhino, or Vectorworks.
  - SpaceLean's vendor-neutral IFC/OpenBIM engine (supporting IFC2x3, IFC4, and Speckle) is a major architectural differentiator for open, non-proprietary workflows.
  - This capability is currently buried in `app/technology/page.tsx` and completely omitted from the main homepage feature grid (`components/FeaturesGrid.tsx`).
- **Current Implementation Status:** 🔶 Partial (mentioned briefly in technology page, but absent from primary product marketing surfaces).
- **Type:** Existing Page Update / UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Homepage: `/`
  - Technology: `/technology`
  - Components: [`components/FeaturesGrid.tsx`](file:///home/user/Documents/spacelearn/components/FeaturesGrid.tsx), [`components/ProductCapabilities.tsx`](file:///home/user/Documents/spacelearn/components/ProductCapabilities.tsx)
- **Priority:** Medium
- **Expected Outcome:** Attract international and enterprise contractors committed to buildingSMART OpenBIM standards who want to avoid Autodesk licensing lock-in.
- **Acceptance Criteria:**
  - Add a dedicated feature card in `components/FeaturesGrid.tsx` titled "Vendor-Neutral OpenBIM Intelligence".
  - Feature highlights: "Native IFC2x3 & IFC4 parsing", "Zero Autodesk/Revit license requirements", "Seamless import from Tekla, ArchiCAD, Vectorworks & Rhino", "Open geometry-to-schedule mapping".
  - Add visual badges/logos for standard file formats (`.ifc`, `.xer`, `.xml`, `.csv`, `.bcf`).
- **Dependencies or Additional Research Required:** Coordination with product documentation on supported IFC entity classes.

---

#### WEB-012: Surface Browser-Side Primavera P6 `.XER` Instant Schedule Health Audit Widget
- **Task ID:** WEB-012
- **Task Title:** Surface Browser-Side Primavera P6 `.XER` Instant Schedule Health Audit Widget
- **Finding from Competitor Report:**
  - Competitor Report §7.1 Tactic 7, §7.4 (P6 Switching Narrative), and `COMPETITIVE_FEATURES_ACTION_PLAN.md` Task 1.1 & 1.3.
  - The single biggest barrier to switching from Primavera P6 is risk aversion: project directors fear corrupted schedule logic or lost contractual baselines.
  - SpaceLean already possesses a client-side `.xer` parser in `app/tools/critical-path-calculator/xer-parser.ts`.
  - Creating a frictionless, 100% private in-browser dropzone ("Drop your .XER file here — Instant 30-Second Schedule Health & Float Audit, no signup required") serves as the ultimate low-friction conversion hook for P6 users.
- **Current Implementation Status:** 🔶 Partial (the parser script exists in `app/tools/critical-path-calculator/xer-parser.ts`, but has no dedicated user-facing hero dropzone widget on the homepage or dedicated landing page).
- **Type:** Existing Page Update / UI/UX
- **Relevant URL & Source File Paths:**
  - Routes: `/`, `/tools/critical-path-calculator`
  - Parser code: [`app/tools/critical-path-calculator/xer-parser.ts`](file:///home/user/Documents/spacelearn/app/tools/critical-path-calculator/xer-parser.ts)
  - UI Component: [`app/tools/critical-path-calculator/CPMCalculatorClient.tsx`](file:///home/user/Documents/spacelearn/app/tools/critical-path-calculator/CPMCalculatorClient.tsx)
  - Hero Component: [`components/ToolsSection.tsx`](file:///home/user/Documents/spacelearn/components/ToolsSection.tsx)
- **Priority:** High
- **Expected Outcome:** Rapidly build credibility with seasoned CPM schedulers by giving them immediate diagnostic value on their own real files; convert 5–10% of dropzone users into free trial accounts.
- **Acceptance Criteria:**
  - Client-side file dropzone allowing users to upload a `.xer` file directly in the browser with zero server uploads (privacy preserved).
  - Instant audit report showing: Total activity count, critical path task count, activities with missing logic (no predecessor/successor), negative lag occurrences, and maximum project float.
  - Callout: "Optimize this schedule with SpaceLean's AI adaptive engine → Start Free Trial".
- **Dependencies or Additional Research Required:** Client-side privacy guarantee statement confirming schedule data never leaves the user's browser.

---

#### WEB-013: Deploy Interactive Competitor Comparison Matrix on `/features` and `/compare`
- **Task ID:** WEB-013
- **Task Title:** Deploy Interactive Competitor Comparison Matrix on `/features` and `/compare`
- **Finding from Competitor Report:**
  - Competitor Report §5.1 (Feature Comparison Matrix): The 9-competitor matrix proves SpaceLean's unique positioning across 15 technical capabilities (AI BIM generation, adaptive resequencing, Monte Carlo simulation, OpenBIM, P6 export, pricing accessibility).
  - Currently, `/features` displays a static list of SpaceLean features, and `/compare` lists individual pairwise comparisons without a unified master matrix.
  - Prospective enterprise buyers evaluating multiple tools simultaneously (e.g. comparing SpaceLean against both ALICE and Synchro) have no single interactive overview table.
- **Current Implementation Status:** ❌ Missing (individual compare subpages exist, but master interactive matrix is absent).
- **Type:** Existing Page Update / UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Routes: `/features`, `/compare`
  - Components: [`components/FeaturesClient.tsx`](file:///home/user/Documents/spacelearn/components/FeaturesClient.tsx), [`components/CompareClient.tsx`](file:///home/user/Documents/spacelearn/components/CompareClient.tsx)
  - Data repository: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
- **Priority:** Medium
- **Expected Outcome:** Empower enterprise evaluators to see SpaceLean's superiority across multiple categories in a single view; increase dwell time and conversion on `/compare`.
- **Acceptance Criteria:**
  - Interactive table component implemented on `/compare` allowing users to toggle competitors (SpaceLean vs. ALICE, nPlan, Synchro 4D, Touchplan, Primavera P6, Procore).
  - Categories: Core Scheduling, AI & Simulation, BIM & 4D Visualization, Field & Lean Workflows, Interoperability & Pricing.
  - Visual indicators: Full support (green check), Partial (yellow badge), No support (gray cross).
  - Clear footnotes citing verification date and methodology to maintain transparency.
- **Dependencies or Additional Research Required:** Data synchronization with `COMPETITOR-REPORT.md` Section 5.1.

---

#### WEB-014: Replace Placeholder Avatars with Industry Standards, Formats, and Technical Trust Badges
- **Task ID:** WEB-014
- **Task Title:** Replace Placeholder Avatars with Industry Standards, Formats, and Technical Trust Badges
- **Finding from Competitor Report:**
  - Competitor Report §5.3, §6.2, and codebase inspection of `components/ToolsSection.tsx` lines 287–302 and `components/SocialProof.tsx`.
  - In `components/ToolsSection.tsx`, the tool mockup footer displays four random dummy user avatars loaded from `https://i.pravatar.cc/100?u=user${i}` with a generic `"50k"` badge and label `"SpaceLean AI v4.2"`.
  - In B2B construction technology, unverified dummy avatars create an impression of an amateur or consumer prototype.
  - Enterprise GCs look for technical standards compliance: IFC/buildingSMART, ISO 19650, SOC 2, and interoperable software logos (Oracle P6 XER, Autodesk, buildingSMART).
- **Current Implementation Status:** 🔶 Partial (avatar UI elements exist, but rely on generic external dummy generators).
- **Type:** Existing Page Update / UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Homepage: `/`
  - Components: [`components/ToolsSection.tsx`](file:///home/user/Documents/spacelearn/components/ToolsSection.tsx#L286-L302), [`components/SocialProof.tsx`](file:///home/user/Documents/spacelearn/components/SocialProof.tsx)
- **Priority:** Medium
- **Expected Outcome:** Instantly upgrade enterprise trust signals; eliminate external third-party HTTP requests to `pravatar.cc`; align website aesthetic with top-tier construction technology brands.
- **Acceptance Criteria:**
  - Remove external dummy avatars from `components/ToolsSection.tsx`.
  - Replace with an "Engineered for Open Standards" trust bar featuring clean monochrome badges: "buildingSMART IFC4 Certified Format", "Primavera P6 .XER Logic Preserved", "ISO 19650 Workflow Ready", "256-bit Cloud Encryption".
  - Ensure all badge assets are hosted locally in `public/` (no third-party dependencies).
- **Dependencies or Additional Research Required:** Verification of accurate standard compatibility terminology with engineering.

---

### Phase 4: New Pages and Content Opportunities

---

#### WEB-015: Create High-Intent Comparison Page: SpaceLean vs. Procore (Scheduling)
- **Task ID:** WEB-015
- **Task Title:** Create SpaceLean vs. Procore (Construction Scheduling) Comparison Landing Page
- **Finding from Competitor Report:**
  - Competitor Report §4.7 (Procore Profile) & §7.3 (Priority Page).
  - Procore is the dominant construction PMIS in North America ($1B+ ARR, 2,000+ G2 reviews), but its built-in scheduling tool is widely recognized by contractors as basic and non-predictive.
  - Most Procore customers are forced to maintain external P6 or MS Project licenses and manually import schedules into Procore.
  - General contractors actively search for "Procore scheduling alternative" and "Procore AI scheduling add-on".
- **Current Implementation Status:** ❌ Missing (SpaceLean compares against Asana and Linear, but has no Procore page in `lib/compare-data.ts`).
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target Route: `/compare/spacelean-vs-procore`
  - Data repository: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
  - Page renderer: [`app/compare/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/compare/[slug]/page.tsx)
- **Priority:** High
- **Expected Outcome:** Capture organic search traffic from Procore users seeking advanced scheduling; position SpaceLean not as an enemy of Procore, but as the specialized "AI Scheduling Brain" that connects directly into the Procore ecosystem.
- **Acceptance Criteria:**
  - New comparison profile added to `lib/compare-data.ts` with slug `spacelean-vs-procore`.
  - Side-by-side comparison highlighting: Procore's strength in broad project financials/RFIs/submittals vs. SpaceLean's deep focus on AI BIM schedule generation, real-time resequencing, and CPM Monte Carlo risk analysis.
  - Clear coexistence strategy: "Use Procore for document controls and site administration — use SpaceLean to run your critical path and 4D BIM sequencing."
  - FAQ schema and breadcrumbs verified.
- **Dependencies or Additional Research Required:** Coordinate with `COMPETITIVE_FEATURES_ACTION_PLAN.md` Task 1.2 (Procore integration roadmap).

---

#### WEB-016: Create High-Intent Comparison Page: SpaceLean vs. nPlan
- **Task ID:** WEB-016
- **Task Title:** Create SpaceLean vs. nPlan (Schedule Generation vs. Risk Prediction) Comparison Page
- **Finding from Competitor Report:**
  - Competitor Report §4.2 (nPlan Profile) & §7.3 (Priority 2).
  - nPlan is the most credible VC-backed AI scheduling intelligence company ($16M Series B, Google Ventures backed, Shell/NEOM clients).
  - However, nPlan is strictly a risk prediction/analytics layer on existing schedules. It cannot create schedules from BIM models and costs tens of thousands per enterprise contract.
  - High-tier enterprise buyers evaluating AI in construction compare nPlan and SpaceLean.
- **Current Implementation Status:** ❌ Missing.
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target Route: `/compare/spacelean-vs-nplan`
  - Data repository: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
- **Priority:** Medium
- **Expected Outcome:** Establish SpaceLean's technical credibility alongside the industry's most recognized AI startup; clearly delineate SpaceLean's unique ability to *generate* and *adapt* schedules rather than merely audit them.
- **Acceptance Criteria:**
  - Add `spacelean-vs-nplan` to `lib/compare-data.ts`.
  - Contrast nPlan's historical dataset approach (750k projects) with SpaceLean's deterministic BIM geometry & physics-driven dependency inference.
  - Highlight SpaceLean's self-serve accessibility and live jobsite execution adaptability.
- **Dependencies or Additional Research Required:** Review nPlan's public positioning updates quarterly.

---

#### WEB-017: Create Comparison Page: SpaceLean vs. Synchro 4D (Bentley)
- **Task ID:** WEB-017
- **Task Title:** Create SpaceLean vs. Bentley Synchro 4D Comparison Landing Page
- **Finding from Competitor Report:**
  - Competitor Report §4.3 (Synchro Profile) & §7.3 (Priority 4).
  - Synchro 4D is the contractual enterprise standard for 4D BIM simulation (~$300–$400+/user/mo), but requires hours of manual linking between 3D model elements and Gantt activities.
  - SpaceLean inferentially maps 3D IFC geometry to construction activities automatically.
- **Current Implementation Status:** ❌ Missing.
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target Route: `/compare/spacelean-vs-synchro-4d`
  - Data repository: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
- **Priority:** Medium
- **Expected Outcome:** Target VDC managers and planning engineers frustrated with Synchro's complex manual element linking and steep desktop licensing costs.
- **Acceptance Criteria:**
  - Add `spacelean-vs-synchro-4d` to `lib/compare-data.ts`.
  - Contrast Synchro's manual Gantt-to-geometry linking with SpaceLean's automated spatial dependency inference.
  - Emphasize SpaceLean's web-native cloud collaboration vs. Synchro's desktop-heavy architecture.
- **Dependencies or Additional Research Required:** Ensure feature claims reflect verified Synchro capabilities accurately.

---

#### WEB-018: Create Comparison Page: SpaceLean vs. Touchplan (Lean Pull Planning)
- **Task ID:** WEB-018
- **Task Title:** Create SpaceLean vs. Touchplan (Visual Pull Planning) Comparison Landing Page
- **Finding from Competitor Report:**
  - Competitor Report §4.5 (Touchplan Profile) & §7.3 (Priority 5).
  - Touchplan is popular among field superintendents for digital sticky-note pull planning (~4.5★ on G2), but lacks CPM depth, 4D BIM visualization, and AI adaptation.
  - Teams outgrow Touchplan when projects demand contract-grade CPM schedule logic or BIM coordination.
- **Current Implementation Status:** ❌ Missing.
- **Type:** New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Target Route: `/compare/spacelean-vs-touchplan`
  - Data repository: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
- **Priority:** Low
- **Expected Outcome:** Position SpaceLean as the logical next-generation platform for Lean contractors graduating from digital whiteboards to AI-driven production control.
- **Acceptance Criteria:**
  - Add `spacelean-vs-touchplan` to `lib/compare-data.ts`.
  - Focus on SpaceLean’s Last Planner System (LPS) digital workflows combined with true CPM and 4D BIM intelligence.
  - Compare pricing structures ($19/mo flat vs. Touchplan's ~$50/user/mo).
- **Dependencies or Additional Research Required:** Review Lean Construction Institute (LCI) terminology alignment.

---

#### WEB-019: Build Dedicated Vertical Solution Pages (General Contractors, Specialty Trades, VDC Leads)
- **Task ID:** WEB-019
- **Task Title:** Build Dedicated Vertical Solution Landing Pages for General Contractors, Specialty Trades, and VDC Managers
- **Finding from Competitor Report:**
  - Competitor Report §7.1 Tactic 8 & codebase review of `lib/solutions-data.ts` and `app/solutions/`.
  - Competitors (ALICE, Procore, Autodesk) route paid and organic search traffic to role-specific and vertical-specific landing pages with custom messaging, metrics, and workflows.
  - SpaceLean has solution data in `lib/solutions-data.ts`, but the pages are not fully optimized for specific search terms like `construction software for general contractors` or `vdc bim scheduling tools`.
- **Current Implementation Status:** 🔶 Partial (dynamic routes exist in `app/solutions/[slug]`, but require content expansion and conversion optimization).
- **Type:** Existing Page Update / New Page / SEO/Content
- **Relevant URL & Source File Paths:**
  - Routes: `/solutions/general-contractors`, `/solutions/trade-contractors`, `/solutions/vdc-bim-managers`
  - Solutions data: [`lib/solutions-data.ts`](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)
  - Index view: [`components/solutions/SolutionsIndexClient.tsx`](file:///home/user/Documents/spacelearn/components/solutions/SolutionsIndexClient.tsx)
- **Priority:** Medium
- **Expected Outcome:** Improve Google Ads Quality Scores, decrease cost per acquisition (CPA), and provide personalized landing experiences for distinct buyer personas.
- **Acceptance Criteria:**
  - General Contractors page emphasizes: Risk mitigation, contract-grade P6 compliance, margin protection, subcontractor coordination.
  - Specialty / Trade Contractors page emphasizes: Daily lookaheads, zero-seat fees, workface handover verification, clear spatial zones.
  - VDC / BIM Managers page emphasizes: Native IFC parsing, zero geometry rework, 4D simulation export, clash avoidance.
- **Dependencies or Additional Research Required:** Review persona descriptions in `lib/solutions-data.ts`.

---

### Phase 5: Ongoing Monitoring and Optimization

---

#### WEB-020: Establish Structured B2B Review Engine & Dedicated G2/Capterra Review Portal
- **Task ID:** WEB-020
- **Task Title:** Establish Structured B2B Customer Review Program & Dedicated Review Landing Flow
- **Finding from Competitor Report:**
  - Competitor Report §5.3, §6.2, §7.1 Tactic 4, and §8.2.
  - SpaceLean currently has zero verified reviews on G2, Capterra, or Trustpilot.
  - Competitors hold substantial review moats (Procore: 2,000+; P6: 500+; Autodesk: 800+; Touchplan: 50+).
  - Software buyers in AEC cite third-party review platforms as their top validation source before requesting enterprise demos.
- **Current Implementation Status:** ❌ Missing (no review collection mechanism or review platform links exist).
- **Type:** Marketing / UI/UX
- **Relevant URL & Source File Paths:**
  - Route: `/reviews` (or in-app review trigger)
  - Components: [`components/Footer.tsx`](file:///home/user/Documents/spacelearn/components/Footer.tsx), [`components/SocialProof.tsx`](file:///home/user/Documents/spacelearn/components/SocialProof.tsx)
- **Priority:** High
- **Expected Outcome:** Achieve 20+ verified G2/Capterra reviews within 60 days of launch; unlock G2 badges ("High Performer", "Users Love Us") to embed on the homepage.
- **Acceptance Criteria:**
  - Create SpaceLean product profiles on G2 and Capterra under "Construction Scheduling Software" and "Building Information Modeling (BIM)".
  - Add an in-app trigger or post-demo follow-up email workflow inviting active users to submit a verified G2 review.
  - When verified reviews are collected, update `components/SocialProof.tsx` with live G2 badge widgets and authentic customer quotes.
- **Dependencies or Additional Research Required:** G2 vendor account claiming and verification.

---

#### WEB-021: Bi-Monthly Competitor Pricing & Feature Delta Audit Cadence
- **Task ID:** WEB-021
- **Task Title:** Implement Bi-Monthly Competitor Pricing, Positioning, and Feature Delta Audit Cadence
- **Finding from Competitor Report:**
  - Competitor Report §5.2, §9.1 (Monitoring Checklist), and §9.2 (Response Playbook).
  - Procore, Autodesk, and ALICE frequently update their product tiers, packaging, and AI feature announcements.
  - If a competitor introduces self-serve pricing, adds IFC support, or changes seat models, SpaceLean's comparison pages (`/compare/*`) must be updated within 2 weeks to maintain factual integrity and avoid misleading claims.
- **Current Implementation Status:** 🔍 Needs Verification (no recurring audit cadence currently established).
- **Type:** Marketing / SEO/Content
- **Relevant URL & Source File Paths:**
  - Routes: `/compare/*`, `/pricing`
  - Data repository: [`lib/compare-data.ts`](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
  - Documentation: [`COMPETITOR-REPORT.md`](file:///home/user/Documents/spacelearn/COMPETITOR-REPORT.md)
- **Priority:** Medium
- **Expected Outcome:** Maintain 100% accurate, contractually defensible, and legally compliant comparison content across all comparison landing pages.
- **Acceptance Criteria:**
  - Establish a bi-monthly calendar checklist to audit competitor homepages, pricing pages, and release notes (ALICE, nPlan, Synchro, Touchplan, P6, Procore).
  - Update `lib/compare-data.ts` and `COMPETITOR-REPORT.md` within 10 business days of any verified competitor pricing or feature change.
- **Dependencies or Additional Research Required:** Google Alerts and LinkedIn company page tracking configured per Competitor Report §9.1.

---

#### WEB-022: Competitor Alternative Paid Search Landing Page Optimization & Speed Validation
- **Task ID:** WEB-022
- **Task Title:** Optimize Competitor Alternative Paid Search Landing Pages for High Quality Score & Sub-1.5s LCP
- **Finding from Competitor Report:**
  - Competitor Report §7.1 Tactic 7 (P6 Google Search Ads) and `MARKET_SEO_TASKS.md` SEO-021 / SEO-022.
  - When running high-intent paid search campaigns targeting competitor keywords (e.g. `primavera p6 alternative`, `alice technologies alternative`), Google Ads Quality Score heavily depends on landing page relevance, headline match, and page load speed (Core Web Vitals LCP).
  - Sluggish performance or layout shifts will inflate CPCs and depress ad conversion rates.
- **Current Implementation Status:** 🔍 Needs Verification (paid search landing pages must be audited for Core Web Vitals once created).
- **Type:** UI/UX / Marketing
- **Relevant URL & Source File Paths:**
  - Routes: `/compare/spacelean-vs-primavera-p6`, `/compare/spacelean-vs-alice-technologies`
  - Page renderer: [`app/compare/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/compare/[slug]/page.tsx)
  - Components: [`components/ComparisonDetail.tsx`](file:///home/user/Documents/spacelearn/components/ComparisonDetail.tsx)
- **Priority:** Medium
- **Expected Outcome:** Achieve Google Ads Quality Scores ≥ 8/10 on competitor search terms; maintain mobile LCP under 1.8 seconds and desktop LCP under 1.2 seconds on all `/compare/*` pages.
- **Acceptance Criteria:**
  - Compare pages render above-the-fold content server-side without layout shifts (CLS < 0.05).
  - All icons and logos are optimized SVGs or WebP images loaded with Next.js `<Image>`.
  - Dedicated conversion CTA matches the ad intent ("Switch from P6 — Import Your .XER Free").
- **Dependencies or Additional Research Required:** Google Ads campaign setup and tracking pixels configured per `MARKET_SEO_TASKS.md` SEO-003.

---

### Task Summary & High-Priority Implementation Matrix

| Task ID | Task Title | Category | Priority | Status | Target Files |
|---|---|---|---|---|---|
| **WEB-001** | SpaceLean vs. Primavera P6 Comparison Page | New Page / SEO | 🔴 High | ❌ Missing | `lib/compare-data.ts`, `app/compare/[slug]/page.tsx` |
| **WEB-002** | Replace Unverified Testimonials & Rickroll Video | UI/UX / Trust | 🔴 High | 🔶 Partial | `components/Testimonials.tsx`, `components/HeroSection.tsx` |
| **WEB-003** | Overhaul Homepage Hero to Own "Adaptive Scheduling" | Marketing / Copy | 🔴 High | 🔶 Partial | `components/HeroSection.tsx`, `app/page.tsx` |
| **WEB-004** | Align Pricing Copy with Unlimited-User $19/mo Value | Pricing / UI/UX | 🔴 High | 🔶 Partial | `components/Pricing.tsx`, `app/pricing/page.tsx` |
| **WEB-005** | Transform Demo Request Funnel to AEC Project Intake | Conversion / UI | 🔴 High | 🔶 Partial | `app/request-a-demo/page.tsx`, `components/DemoRequest.tsx` |
| **WEB-006** | Publish 4D BIM Scheduling Pillar Guide | Content / SEO | 🔴 High | ❌ Missing | `lib/blog-data.ts`, `app/blogs/[slug]/page.tsx` |
| **WEB-007** | Publish CPM Scheduling Methodology Guide | Content / SEO | 🟠 Medium | 🔶 Partial | `lib/blog-data.ts`, `app/tools/critical-path-calculator/` |
| **WEB-008** | Deploy Construction Delay Cost & ROI Calculator | Interactive Tool | 🟠 Medium | ❌ Missing | `app/tools/`, `components/ToolsSection.tsx` |
| **WEB-009** | Revamp Homepage FAQ with Competitor Intent | SEO / Content | 🟠 Medium | 🔶 Partial | `components/FAQ.tsx`, `app/page.tsx` |
| **WEB-010** | Establish Systematic Internal Linking Network | SEO / IA | 🟠 Medium | 🔶 Partial | `lib/blog-data.ts`, `components/blog/MarkdownRenderer.tsx` |
| **WEB-011** | Vendor-Neutral OpenBIM / IFC Interoperability Section | Marketing / UI | 🟠 Medium | 🔶 Partial | `components/FeaturesGrid.tsx`, `app/technology/page.tsx` |
| **WEB-012** | Client-Side Primavera P6 XER Instant Audit Dropzone | Tool / CRO | 🔴 High | 🔶 Partial | `components/ToolsSection.tsx`, `app/tools/critical-path-calculator/` |
| **WEB-013** | Interactive Competitor Comparison Matrix on `/compare` | UI/UX / Marketing| 🟠 Medium | ❌ Missing | `components/CompareClient.tsx`, `app/features/page.tsx` |
| **WEB-014** | Replace Dummy Avatars with Technical Trust Badges | UI/UX / Trust | 🟠 Medium | 🔶 Partial | `components/ToolsSection.tsx`, `components/SocialProof.tsx` |
| **WEB-015** | SpaceLean vs. Procore (Scheduling) Compare Page | New Page / SEO | 🔴 High | ❌ Missing | `lib/compare-data.ts`, `app/compare/[slug]/page.tsx` |
| **WEB-016** | SpaceLean vs. nPlan (Generation vs Prediction) Page | New Page / SEO | 🟠 Medium | ❌ Missing | `lib/compare-data.ts`, `app/compare/[slug]/page.tsx` |
| **WEB-017** | SpaceLean vs. Synchro 4D (Automated vs Manual 4D) | New Page / SEO | 🟠 Medium | ❌ Missing | `lib/compare-data.ts`, `app/compare/[slug]/page.tsx` |
| **WEB-018** | SpaceLean vs. Touchplan (Pull Planning Upgrade) | New Page / SEO | 🟢 Low | ❌ Missing | `lib/compare-data.ts`, `app/compare/[slug]/page.tsx` |
| **WEB-019** | Dedicated Vertical Solution Pages (GC, Trades, VDC) | Landing Pages | 🟠 Medium | 🔶 Partial | `lib/solutions-data.ts`, `app/solutions/` |
| **WEB-020** | Establish Structured G2 & Capterra Review Program | Trust / Reviews | 🔴 High | ❌ Missing | `components/SocialProof.tsx`, `components/Footer.tsx` |
| **WEB-021** | Bi-Monthly Competitor Pricing & Feature Audit | Process / Intel | 🟠 Medium | 🔍 Verification| `lib/compare-data.ts`, `COMPETITOR-REPORT.md` |
| **WEB-022** | Competitor Paid Search Landing Speed & Quality Score | Performance / Ads | 🟠 Medium | 🔍 Verification| `app/compare/[slug]/page.tsx`, `components/ComparisonDetail.tsx` |

