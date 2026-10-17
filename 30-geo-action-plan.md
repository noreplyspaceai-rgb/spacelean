# SpaceLean.ai 30-Day Generative Engine Optimization (GEO) Action Plan & Roadmap

This prioritized action plan outlines exactly 30 concrete, actionable tasks to optimize SpaceLean.ai for Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and LLM citation across Google AI Overviews, ChatGPT Search, Perplexity, Claude, Gemini, and Copilot.

---

## Executive Summary & Audit Matrix

Generative Engine Optimization (GEO) differs fundamentally from traditional SEO. Where traditional SEO aims to win page-1 blue link rankings, **GEO aims to get cited, quoted, and recommended as the authoritative source** in AI-generated answers and agentic buying decisions.

According to Princeton GEO research (KDD 2024), structuring content for extractability and authority signals can increase AI visibility by **up to 115% for growing SaaS brands**. Conversely, unextractable JavaScript rendering, missing machine-readable protocol files (`/llms.txt`, `/pricing.md`), lack of statistics, and vague marketing copy cause AI assistants to omit SpaceLean in favor of legacy competitors.

### GEO 3-Pillar Strategy & Priority Classification

```
1. Structure (Make content extractable into 40-60 word answer blocks)
2. Authority (Add Princeton GEO research signals: +40% citations, +37% statistics, +30% quotes)
3. Presence (Expose machine-readable files & establish third-party entity authority)
```

| Vector | Critical | High | Medium | Low |
| :--- | :--- | :--- | :--- | :--- |
| **Machine-Readability & Protocols** | Tasks 1, 2 | Tasks 3, 4 | Task 5 | Task 6 |
| **Content Extractability & Snippets** | Task 7 | Tasks 8, 9, 10 | Tasks 11, 12 | - |
| **Princeton GEO Authority Signals** | Task 13 | Tasks 14, 15 | Tasks 16, 17 | Task 18 |
| **Structured Data & Schema** | Task 19 | Tasks 20, 21 | Tasks 22, 23 | Task 24 |
| **Off-Page AI Presence & Tracking** | Task 25 | Tasks 26, 27 | Tasks 28, 29 | Task 30 |

---

## Prioritized Implementation Roadmap (30 Actionable Tasks)

### 🔴 Phase 1: Machine-Readability & AI Protocol Layer (Tasks 1–6)

#### - [x] Task 1: Create Machine-Readable `/pricing.md` File in Public Root for AI Buying Agents
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected GEO Impact**: Very High
* **Why It Matters**: Autonomous AI agents compare SaaS products programmatically. When pricing is buried in UI components, AI agents filter out SpaceLean and recommend competitors with parseable pricing.
* **Description**: Create a raw markdown `/pricing.md` file in `public/` detailing tiers (Free, Pro, Enterprise), seat limits, feature matrix, and billing terms.
* **Files Affected**:
  - [public/pricing.md](file:///home/user/Documents/spacelearn/public/pricing.md)

---

#### - [x] Task 2: Create Root `/llms.txt` Context File for AI Assistants & LLM Crawlers
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected GEO Impact**: Very High
* **Why It Matters**: `llms.txt` is the emerging open web standard (llmstxt.org) that provides LLMs with a clean, curated map of key product capabilities, target audiences, and core URLs.
* **Description**: Create `/public/llms.txt` summarizing SpaceLean's 4D BIM scheduling, AI critical path prediction, pricing, and solution guides.
* **Files Affected**:
  - [public/llms.txt](file:///home/user/Documents/spacelearn/public/llms.txt)

---

#### - [x] Task 3: Create Open Knowledge Format (`/okf/index.md` & `/okf/manifest.json`) Machine Bundle
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: Google's Open Knowledge Format (OKF) enables agent-readable site cataloging without JavaScript execution or heavy web scraping.
* **Description**: Generate an OKF bundle in `public/okf/` containing structured YAML frontmatter for all solutions, features, and pricing models.
* **Files Affected**:
  - [public/okf/index.md](file:///home/user/Documents/spacelearn/public/okf/index.md)
  - [public/okf/manifest.json](file:///home/user/Documents/spacelearn/public/okf/manifest.json)

---

#### - [x] Task 4: Add Machine-Readable `/features.md` File for AI Agent Capabilities Exploration
* **Priority**: High
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: AI assistants analyzing "Does SpaceLean support BIM 4D sequencing or trade lag optimization?" can extract answers instantly from markdown specs.
* **Description**: Create `/public/features.md` with explicit bulleted descriptions of all 12 core SpaceLean capabilities.
* **Files Affected**:
  - [public/features.md](file:///home/user/Documents/spacelearn/public/features.md)

---

#### - [x] Task 5: Create Machine-Readable `/spacelean-vs-competitors.md` Comparison Index for AI Search
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: AI engines generate candidate recommendation tables for queries like "SpaceLean vs Primavera P6 vs Procore". A machine-readable comparison index feeds LLMs exact comparative data points.
* **Description**: Compile head-to-head feature comparisons against P6, MS Project, Synchro, Procore, and Trello into a markdown dataset.
* **Files Affected**:
  - [public/spacelean-vs-competitors.md](file:///home/user/Documents/spacelearn/public/spacelean-vs-competitors.md)

---

#### - [x] Task 6: Expose Machine-Readable API & Integration Specs in `/docs/ai-agents.md`
* **Priority**: Low
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: Demonstrates technical depth to AI systems evaluating enterprise integration readiness (BIM IFC, Revit, Primavera XML import/export).
* **Description**: Document data import formats, IFC parsing capabilities, and Webhooks specs in `/public/docs/ai-agents.md`.
* **Files Affected**:
  - [public/docs/ai-agents.md](file:///home/user/Documents/spacelearn/public/docs/ai-agents.md)

---

### 🟠 Phase 2: Content Extractability & Snippet Block Optimization (Tasks 7–12)

#### - [x] Task 7: Embed 40-60 Word Direct Definition Blocks Above-the-Fold on Solution Pages
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected GEO Impact**: Very High
* **Why It Matters**: LLMs extract 40-60 word standalone passages for "What is X?" queries. Placing concise definition blocks under H1 headings dramatically increases citation frequency.
* **Description**: Add self-contained 40-60 word definition callouts on all solution routes defining GCs, Owners, and Consultant scheduling solutions.
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx)

---

#### - [ ] Task 8: Inject Concise Direct-Answer Bullet Blocks on "How It Works" & Features Page
* **Priority**: High
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: AI engines extract bulleted lists for process queries ("How does AI construction scheduling work?").
* **Description**: Format the 4-step workflow in `Dashboardshowcase.tsx` and `AIFeature.tsx` into standalone, extractable text blocks.
* **Files Affected**:
  - [components/Dashboardshowcase.tsx](file:///home/user/Documents/spacelearn/components/Dashboardshowcase.tsx#L23-L56)
  - [components/AIFeature.tsx](file:///home/user/Documents/spacelearn/components/AIFeature.tsx)

---

#### - [x] Task 9: Convert Unstructured Comparison Copy into Tabular Extractable Matrices
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: Comparison queries account for ~33% of all AI citations. HTML tables are cited 3x more often than prose paragraphs.
* **Description**: Ensure every competitor route in `lib/compare-data.ts` renders structured HTML table matrices with explicit `true`/`false` or exact metric values.
* **Files Affected**:
  - [lib/compare-data.ts](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
  - [components/ComparisonDetail.tsx](file:///home/user/Documents/spacelearn/components/ComparisonDetail.tsx#L107-L168)

---

#### - [x] Task 10: Format All Solution Pages with Standalone FAQ Answer Blocks (40–60 words)
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: Perplexity and ChatGPT pull answers directly from FAQ blocks when user questions match the FAQ prompt.
* **Description**: Audit all solution FAQs to ensure answers are concise (40-60 words), factual, and self-contained without pronoun ambiguities.
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx#L160-L182)

---

#### - [x] Task 11: Add Step-by-Step `HowTo` Numbered Lists for Construction Scheduling Workflows
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: AI assistants present numbered lists for procedural queries like "How to convert BIM models to 4D schedules".
* **Description**: Structure 5-step implementation checklists on all project-type solution pages (Industrial, Infrastructure, Commercial).
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)

---

#### - [x] Task 12: Implement Extractable Pros & Cons Summary Blocks on All Comparison Routes
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: When users ask AI "What are the drawbacks of Primavera P6 compared to SpaceLean?", LLMs extract pros/cons summary blocks.
* **Description**: Format `pros` and `cons` arrays in `lib/compare-data.ts` into semantic `<ul className="pros-cons">` callout blocks.
* **Files Affected**:
  - [lib/compare-data.ts](file:///home/user/Documents/spacelearn/lib/compare-data.ts)
  - [components/ComparisonDetail.tsx](file:///home/user/Documents/spacelearn/components/ComparisonDetail.tsx#L236-L266)

---

### 🟡 Phase 3: Princeton GEO Research & Authority Signals (Tasks 13–18)

#### - [x] Task 13: Inject Verified Industry Benchmarks & Statistics into Solution Pages (+37% Citation Boost)
* **Priority**: Critical
* **Estimated Effort**: Medium
* **Expected GEO Impact**: Very High
* **Why It Matters**: Princeton GEO research proved that adding specific statistics with cited sources increases AI search visibility by **+37%**.
* **Description**: Add concrete construction metrics (e.g., "77% of projects experience delays", "80% reduction in planning time", "94% prediction accuracy") with source citations across solutions.
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)

---

#### - [ ] Task 14: Add Named Expert Quotations with Professional Credentials (+30% Citation Boost)
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: Quoting credentialed industry experts (e.g., VPs of VDC, Senior Superintendents, PMI-CP cert holders) boosts AI citation probability by **+30%**.
* **Description**: Add verified expert quotes with full names, job titles, and company names to Testimonials and Solution pages.
* **Files Affected**:
  - [components/Testimonials.tsx](file:///home/user/Documents/spacelearn/components/Testimonials.tsx#L8-L27)
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)

---

#### - [ ] Task 15: Cite Third-Party Primary Sources (AGC, CII, PMI, Dodge Construction) (+40% Citation Boost)
* **Priority**: High
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: Princeton GEO research showed that citing primary authoritative sources provides the single highest visibility boost (**+40%**).
* **Description**: Add authoritative inline external links and citations to AGC (Associated General Contractors), Construction Industry Institute, and PMI research.
* **Files Affected**:
  - [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts)
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)

---

#### - [ ] Task 16: Add "Last Updated" Timestamps & Author E-E-A-T Profiles to All Core Pages & Blogs
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: AI search algorithms heavily penalize undated content. Displaying `lastModified` and author credentials signals recency and authority.
* **Description**: Render prominent `Last Updated: [Date]` badges and author bio cards with construction PM credentials on all blogs and solutions.
* **Files Affected**:
  - [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx#L368-L382)
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx)

---

#### - [ ] Task 17: Publish Original Research & Benchmark Data Page (`/research/construction-ai-benchmarks`)
* **Priority**: Medium
* **Estimated Effort**: Large
* **Expected GEO Impact**: High
* **Why It Matters**: AI engines cite original data sources ~12% of the time. Owning an original benchmark report earns perpetual AI backlinks.
* **Description**: Create a dedicated `/research/construction-ai-benchmarks` page publishing statistics on 4D BIM adoption, trade delay causes, and CPM accuracy.
* **Files Affected**:
  - [app/research/construction-ai-benchmarks/page.tsx](file:///home/user/Documents/spacelearn/app/research/construction-ai-benchmarks/page.tsx)

---

#### - [ ] Task 18: Add Explicit Sourcing & Methodologies to AI Delay Prediction & Risk Scoring Features
* **Priority**: Low
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: Transparent methodology ("Monte Carlo 1,000-simulation model calibrated on historical trade velocity") transforms product claims into citable facts.
* **Description**: Add a "Methodology & Calibration" explanatory section on the SpaceLean Core page.
* **Files Affected**:
  - [components/space-lean-core/Features.tsx](file:///home/user/Documents/spacelearn/components/space-lean-core/Features.tsx)

---

### 🔵 Phase 4: Schema Markup & Semantic Data Enrichment (Tasks 19–24)

#### - [x] Task 19: Add `SoftwareApplication` JSON-LD Schema to SpaceLean Core & Solution Pages
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: Machine-readable `SoftwareApplication` schema explicitly informs AI search engines about application category, operating system, and feature set.
* **Description**: Inject `SoftwareApplication` JSON-LD schema on `/space-lean-core` and `/solutions` routes with `applicationCategory: "ConstructionManagementApplication"`.
* **Files Affected**:
  - [app/space-lean-core/page.tsx](file:///home/user/Documents/spacelearn/app/space-lean-core/page.tsx)
  - [app/solutions/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/page.tsx)

---

#### - [x] Task 20: Add `Product` & `Offer` Structured Data with Transparent Pricing Metrics
* **Priority**: High
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: AI shopping & recommendation agents parse `Product` and `Offer` schema to compare tier pricing ($0 Free, $19 Pro) without human intervention.
* **Description**: Add `Product` and `Offer` JSON-LD schema to `/pricing/page.tsx`.
* **Files Affected**:
  - [app/pricing/page.tsx](file:///home/user/Documents/spacelearn/app/pricing/page.tsx)

---

#### - [x] Task 21: Add `Organization` & `SameAs` Social Graph Linkages (LinkedIn, YouTube, Review Sites)
* **Priority**: High
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: `SameAs` schema binds SpaceLean.ai to its external entity profiles across LinkedIn, YouTube, G2, and Capterra in Knowledge Graphs.
* **Description**: Update `Organization` schema in `app/layout.tsx` to include `sameAs` array with all verified brand profiles.
* **Files Affected**:
  - [app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx#L40-L70)

---

#### - [x] Task 22: Add `FAQPage` JSON-LD Schema to Comparison Routes (`/compare/[slug]`)
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: Structured FAQ schema on competitor comparison pages allows LLMs to extract direct answers for "SpaceLean vs Competitor" questions.
* **Description**: Inject dynamic `FAQPage` JSON-LD schema into `app/compare/[slug]/page.tsx`.
* **Files Affected**:
  - [app/compare/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/compare/%5Bslug%5D/page.tsx)

---

#### - [x] Task 23: Add `BreadcrumbList` & `WebSite` SearchAction Schema to General Construction Solutions
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: Breadcrumb hierarchy helps AI engines understand entity parent-child relationships (e.g. Home > Solutions > For General Contractors).
* **Description**: Add `BreadcrumbList` schema to `app/solutions/page.tsx` and all stakeholder routes.
* **Files Affected**:
  - [app/solutions/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/page.tsx)

---

#### - [x] Task 24: Inject `HowTo` JSON-LD Schema on Construction Workflow & BIM Guide Pages
* **Priority**: Low
* **Estimated Effort**: Medium
* **Expected GEO Impact**: Medium
* **Why It Matters**: `HowTo` schema enables step extraction for AI assistants answering procedural construction queries.
* **Description**: Inject `HowTo` schema on construction scheduling blog posts and solutions.
* **Files Affected**:
  - [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx#L104-L223)

---

### 🟢 Phase 5: Off-Page AI Presence & Platform Distribution (Tasks 25–30)

#### - [x] Task 25: Establish Active Entity Presence on G2, Capterra, & TrustRadius for AI Review Citing
* **Priority**: Critical
* **Estimated Effort**: Medium
* **Expected GEO Impact**: Very High
* **Why It Matters**: Brands are **6.5x more likely to be cited in AI search via third-party review platforms** (G2, Capterra) than from their own domain.
* **Description**: Create and optimize SpaceLean company profiles on G2, Capterra, and TrustRadius under "Construction Management Software".
* **Files Affected**:
  - External Review Platforms (G2, Capterra, TrustRadius)

---

#### - [x] Task 26: Create YouTube 4D BIM Scheduling Demos for Video Citation Extraction in AI Overviews
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: YouTube is the #1 video source cited in Google AI Overviews. Video transcripts are automatically parsed and cited in AI answers.
* **Description**: Publish 3-minute product demo videos titled "How to Generate 4D BIM Construction Schedules with AI" with full transcriptions.
* **Files Affected**:
  - [app/videos/page.tsx](file:///home/user/Documents/spacelearn/app/videos/page.tsx)
  - YouTube Channel (`@Spacelean-w2g`)

---

#### - [ ] Task 27: Optimize Product Hunt & Crunchbase Entity Profiles for Knowledge Graph Indexing
* **Priority**: High
* **Estimated Effort**: Small
* **Expected GEO Impact**: High
* **Why It Matters**: LLMs draw core entity facts (founding date, headquarters, product category, leadership) from Crunchbase and Product Hunt.
* **Description**: Update Crunchbase and Product Hunt company profiles with standardized construction AI positioning and verified links.
* **Files Affected**:
  - External Entity Directories (Crunchbase, Product Hunt)

---

#### - [x] Task 28: Build High-Authority Reddit & Subcontractor Forum Reference Presence
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected GEO Impact**: High
* **Why It Matters**: Reddit accounts for **1.8% of all ChatGPT search citations** and is heavily weighted by Perplexity for authentic user feedback.
* **Description**: Participate in `r/Construction`, `r/CommercialConstruction`, and `r/BIM` discussions, answering scheduling questions authentically.
* **Files Affected**:
  - Community Outlets (`r/Construction`, `r/BIM`, `r/ProjectManagement`)

---

#### - [ ] Task 29: Create Wikidata Structured Entity Entry Strategy for SpaceLean
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected GEO Impact**: Medium
* **Why It Matters**: Wikidata is the primary knowledge base used by Google Knowledge Graph, ChatGPT, and Claude to recognize brand entities.
* **Description**: Draft a compliant Wikidata entry for SpaceLean AI Inc. with references to third-party press and industry publications.
* **Files Affected**:
  - Wikidata Knowledge Graph (`wikidata.org`)

---

#### - [x] Task 30: Setup AI Visibility & Voice Share Monitoring Framework (Otterly, Peec AI, Perplexity)
* **Priority**: Low
* **Estimated Effort**: Small
* **Expected GEO Impact**: Medium
* **Why It Matters**: Track month-over-month share of AI voice, citation rate, and competitor recommendation frequency across ChatGPT, Perplexity, and AI Overviews.
* **Description**: Set up a 20-query manual or automated AI visibility tracking spreadsheet monitoring SpaceLean vs Procore/P6 mentions.
* **Files Affected**:
  - Internal GEO Dashboard / Spreadsheet Tracker

---

## GEO Verification & Quality Assurance Protocol

To ensure all GEO optimizations achieve maximum extractability without violating search guidelines:

1. **Princeton GEO Compliance**: Verify that all modified solution and blog pages include verified statistics (+37%), expert quotes (+30%), and authoritative source links (+40%).
2. **AI Bot Access Verification**: Confirm `app/robots.ts` and `public/robots.txt` explicitly allow `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, and `Google-Extended`.
3. **Machine-Readable Protocol Checks**: Test `/llms.txt` and `/pricing.md` endpoints using LLM parsers to confirm clean, non-rendered markdown extraction.
4. **TypeScript Safety**: Execute `npx tsc --noEmit` after all frontend edits to guarantee zero compilation or type errors.
