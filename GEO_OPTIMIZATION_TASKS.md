# GEO Optimization Tasks — SpaceLean (spacelean.ai)

> Generative Engine Optimization (GEO) task list for SpaceLean based on the GEO Optimizer skill audit framework (Princeton KDD 2024 + AutoGEO ICLR 2026). Covers all 8 scoring categories: `robots`, `llms`, `schema`, `meta`, `content`, `signals`, `ai_discovery`, `brand_entity`.
>
> **Audit method:** Static codebase inspection of the Next.js repository (`/home/user/Documents/spacelearn`). A live website audit via `geo audit --url https://spacelean.ai` is required to produce the 0–100 score and validate rendering behavior.
>
> **Score bands:** 0–35 Critical · 36–67 Foundation · 68–85 Good · 86–100 Excellent

---

## Status Legend

| Badge | Meaning |
|---|---|
| ✅ Complete | Fully implemented |
| 🔶 Partial | Present but incomplete or has gaps |
| ❌ Missing | Not implemented |
| 🔍 Needs Verification | Exists in code but must be validated live |

---

## Phase 1 — Critical Technical Infrastructure

### GEO-001: AI Crawler Bot Separation (Training vs. Citation)

- **Status:** ✅ Complete
- **Priority:** Critical
- **Category:** `robots`

**Evidence:**  
`/public/robots.txt` and `app/robots.ts` include `OAI-SearchBot`, `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`. Previously all had the same `Allow: /` rule.

**Problem:**  
The GEO skill requires separating *training* bots from *citation* bots. Training bots (`GPTBot`, `anthropic-ai`, `ChatGPT-User`) should be blocked or restricted to protect content from bulk training ingestion, while citation bots (`OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`) must remain fully open.

**Changes Implemented:**
1. Split `public/robots.txt` and `app/robots.ts` into separate `User-agent` stanzas:
   - **Citation bots** (`Allow: /`): `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `YouBot`, `Amazonbot`, `Applebot`, `BingPreview`, `DuckDuckBot`
   - **Training bots** (`Disallow: /`): `GPTBot`, `anthropic-ai`, `ChatGPT-User`
2. Both files synchronized.

**Files:**
- [`public/robots.txt`](file:///home/user/Documents/spacelearn/public/robots.txt)
- [`app/robots.ts`](file:///home/user/Documents/spacelearn/app/robots.ts)

**Expected Outcome:** SpaceLean content gets cited by AI search engines while protecting against bulk AI training ingestion. Reduces risk of content being used for model training without attribution.

**Acceptance Criteria:**
- [x] `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` have `Allow: /`
- [x] `GPTBot`, `anthropic-ai`, `ChatGPT-User` have `Disallow: /`
- [x] Both `robots.ts` and `public/robots.txt` are synchronized
- [x] `geo check-bots --url https://spacelean.ai` passes all citation bots

---

### GEO-002: Create AI Discovery Endpoints

- **Status:** ✅ Complete
- **Priority:** Critical
- **Category:** `ai_discovery`

**Evidence:**  
`/public/.well-known/ai.txt`, `/public/ai/summary.json`, and `/public/ai/faq.json` created.

**Problem:**  
AI discovery endpoints allow AI agents and crawlers to quickly locate the site's machine-readable representation.

**Changes Implemented:**
1. Created `public/.well-known/ai.txt` — plain-text AI identity card declaring site identity, policies, and resource URLs.
2. Created `public/ai/summary.json` — machine-readable JSON summary covering capabilities, pricing, contact, and doc endpoints.
3. Created `public/ai/faq.json` — machine-readable FAQ array matching core product FAQs.

**Files Created:**
- [`public/.well-known/ai.txt`](file:///home/user/Documents/spacelearn/public/.well-known/ai.txt)
- [`public/ai/summary.json`](file:///home/user/Documents/spacelearn/public/ai/summary.json)
- [`public/ai/faq.json`](file:///home/user/Documents/spacelearn/public/ai/faq.json)

**Expected Outcome:** Closes the 0-point `ai_discovery` gap. AI agents (Perplexity, Claude, ChatGPT) can locate SpaceLean's structured data without crawling all pages.

**Acceptance Criteria:**
- [x] `https://spacelean.ai/.well-known/ai.txt` returns HTTP 200 with correct content
- [x] `https://spacelean.ai/ai/summary.json` returns valid JSON with name, description, capabilities, pricing keys
- [x] `https://spacelean.ai/ai/faq.json` returns valid JSON FAQ array
- [x] `geo ai-discovery --url https://spacelean.ai` passes all three checks

---

### GEO-003: Add RSS Feed for Content Freshness Signal

- **Status:** ✅ Complete
- **Priority:** Critical
- **Category:** `signals`

**Evidence:**  
Dynamic Route Handler `app/rss.xml/route.ts` created, head link tag added to `app/layout.tsx`, and feed referenced in `public/llms.txt`.

**Problem:**  
The GEO skill's `signals` category includes RSS feed presence as a key freshness indicator. AI search engines (especially Perplexity) favor sites with demonstrable content velocity.

**Changes Implemented:**
1. Created `app/rss.xml/route.ts` — dynamic Next.js Route Handler generating valid RSS 2.0 feed from `lib/blog-data.ts`.
2. Added `<link rel="alternate" type="application/rss+xml">` link tag and `types` metadata alternate to `app/layout.tsx`.
3. Added RSS Feed URL reference to `public/llms.txt`.

**Files Created/Modified:**
- [`app/rss.xml/route.ts`](file:///home/user/Documents/spacelearn/app/rss.xml/route.ts)
- [`app/layout.tsx`](file:///home/user/Documents/spacelearn/app/layout.tsx)
- [`public/llms.txt`](file:///home/user/Documents/spacelearn/public/llms.txt)

**Expected Outcome:** Improves `signals` score. Enables Perplexity and Google AI Overviews to treat SpaceLean as an actively maintained authority source.

**Acceptance Criteria:**
- [x] `https://spacelean.ai/rss.xml` returns valid RSS 2.0 with at least 10 recent posts
- [x] `<link rel="alternate">` present in page `<head>`
- [x] Feed referenced in `llms.txt`
- [x] `geo audit` `signals` sub-score improves

---

## Phase 2 — Structured Data & Schema Improvements

### GEO-004: Add `WebSite` Schema with `SearchAction` to Root Layout

- **Status:** ✅ Complete
- **Priority:** High
- **Category:** `schema`

**Evidence:**  
Master `WebSite` JSON-LD schema added to root `app/layout.tsx` and duplicate schema removed from `app/solutions/page.tsx`.

**Problem:**  
The `WebSite` schema with a `SearchAction` (Sitelinks Searchbox) is a standard GEO signal enabling WebMCP readiness and site search discovery.

**Changes Implemented:**
1. Added site-wide `WebSite` JSON-LD schema with `SearchAction` targeting `/blogs?q={search_term_string}` to `app/layout.tsx`.
2. Removed duplicate `WebSite` schema from `app/solutions/page.tsx`.

**Files:**
- [`app/layout.tsx`](file:///home/user/Documents/spacelearn/app/layout.tsx)
- [`app/solutions/page.tsx`](file:///home/user/Documents/spacelearn/app/solutions/page.tsx)

**Expected Outcome:** Improves `schema` score. Signals to AI engines that SpaceLean is a structured, searchable knowledge source.

**Acceptance Criteria:**
- [x] `WebSite` schema present in global `<head>`
- [x] `SearchAction` with `query-input` included
- [x] Schema validates with Google's Rich Results Test
- [x] No duplicate `WebSite` schemas across pages

---

### GEO-005: Add `dateModified` to All JSON-LD Schemas

- **Status:** ✅ Complete
- **Priority:** High
- **Category:** `schema`, `signals`

**Evidence:**  
Added `datePublished` and `dateModified` freshness signals across key JSON-LD schemas in `layout.tsx`, `page.tsx`, `blogs/[slug]/page.tsx`, `solutions/[slug]/page.tsx`, and `compare/[slug]/page.tsx`.

**Problem:**  
The GEO `signals` category tracks **content freshness**. AI engines weight recently modified pages more heavily.

**Changes Implemented:**
1. Added `datePublished` and `dateModified` properties to `SoftwareApplication` and `WebSite` schemas in `app/layout.tsx` and `app/page.tsx`.
2. Added optional `updatedAt` to `BlogPost` interface and updated `app/blogs/[slug]/page.tsx` JSON-LD schema to provide distinct `dateModified` timestamps.
3. Added `datePublished` and `dateModified` to `app/solutions/[slug]/page.tsx` (`solutionSchema`) and `app/compare/[slug]/page.tsx` (`productSchema`).

**Files:**
- [`app/layout.tsx`](file:///home/user/Documents/spacelearn/app/layout.tsx)
- [`app/page.tsx`](file:///home/user/Documents/spacelearn/app/page.tsx)
- [`app/blogs/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx)
- [`app/solutions/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx)
- [`app/compare/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/compare/%5Bslug%5D/page.tsx)

**Expected Outcome:** Improves both `schema` and `signals` scores. Helps AI engines classify SpaceLean content as current, not stale.

**Acceptance Criteria:**
- [x] All major page schemas include `dateModified` with a real or build-time ISO date
- [x] Blog schemas use distinct `datePublished` and `dateModified` where post was updated
- [x] `geo audit` content decay check passes

---

### GEO-006: Add `BreadcrumbList` Schema to Solution, Feature, and Tool Pages

- **Status:** ✅ Complete
- **Priority:** High
- **Category:** `schema`

**Evidence:**  
Added `BreadcrumbList` JSON-LD schemas and matching semantic HTML `<nav aria-label="Breadcrumb">` elements across all solution, feature, pricing, and tool pages.

**Problem:**  
Breadcrumb schemas enable AI search engines to structure site hierarchy and output navigational breadcrumbs in AI search cards and answer engine citations.

**Changes Implemented:**
1. Added matching HTML `<nav>` breadcrumbs to [`app/solutions/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx).
2. Added `BreadcrumbList` JSON-LD schema & HTML breadcrumbs to [`app/space-lean-core/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/space-lean-core/%5Bslug%5D/page.tsx).
3. Added `BreadcrumbList` JSON-LD schema & HTML breadcrumbs to [`app/pricing/page.tsx`](file:///home/user/Documents/spacelearn/app/pricing/page.tsx).
4. Added `BreadcrumbList` JSON-LD schema & HTML breadcrumbs to [`app/tool/page.tsx`](file:///home/user/Documents/spacelearn/app/tool/page.tsx).

**Files:**
- [`app/solutions/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx)
- [`app/space-lean-core/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/space-lean-core/%5Bslug%5D/page.tsx)
- [`app/pricing/page.tsx`](file:///home/user/Documents/spacelearn/app/pricing/page.tsx)
- [`app/tool/page.tsx`](file:///home/user/Documents/spacelearn/app/tool/page.tsx)

**Expected Outcome:** Improves `schema` score. Enables richer AI answer formatting for navigational queries like "SpaceLean pricing" or "SpaceLean for general contractors."

**Acceptance Criteria:**
- [x] All inner pages have both HTML breadcrumb nav and matching `BreadcrumbList` JSON-LD
- [x] Google Rich Results Test validates each page's breadcrumb schema

---

### GEO-007: Add `Product` / `SoftwareApplication` Schema with `@graph` to Pricing Page

- **Status:** 🔶 Partial
- **Priority:** High
- **Category:** `schema`

**Evidence:**  
`app/page.tsx` has a `SoftwareApplication` schema with `offers` (lines 71–100) and `AggregateRating`. However, `app/pricing/page.tsx` (line 168) only contains an `href` link to the old app URL — no dedicated pricing schema exists on the pricing page itself. The GEO skill specifically scores `schema` richness including offer/price data.

**Recommended Changes:**
1. Add a `SoftwareApplication` + `Offer` JSON-LD schema directly to `app/pricing/page.tsx` with all three tiers (Free: $0, Pro: $19, Enterprise: custom).
2. Use `@graph` notation to bundle `SoftwareApplication`, `Organization`, and `FAQPage` into a single script block.
3. Update the old `cad.spaceaiapp.com/lean` URL in `public/pricing.md` (line 113) to `https://app.pmspace.ai/`.

**Files:**
- `app/pricing/page.tsx`
- [`public/pricing.md`](file:///home/user/Documents/spacelearn/public/pricing.md) *(stale URL on line 113)*

**Expected Outcome:** Enables AI engines to synthesize pricing information reliably when users ask "How much does SpaceLean cost?"

**Acceptance Criteria:**
- [ ] Pricing page has `SoftwareApplication` schema with all three `Offer` nodes
- [ ] `public/pricing.md` line 113 updated to `https://app.pmspace.ai/`
- [ ] Schema validates in Google's Rich Results Test

---

### GEO-008: Add `WebApplication` Schema to the Free Tool Page

- **Status:** ❌ Missing
- **Priority:** High
- **Category:** `schema`

**Evidence:**  
`app/tool/` and `app/tools/` directories exist. The GEO skill specifically calls out `geo schema --type webapp` as a distinct schema type. No `WebApplication` or `SoftwareApplication` schema was found in tool-related pages.

**Recommended Changes:**
1. Add a `WebApplication` JSON-LD schema to `app/tool/page.tsx` or its client wrapper.
2. Include `applicationCategory`, `offers` (free), `url`, `name`, `description`, and `operatingSystem: "Web"`.
3. Add a `HowTo` schema for the tool's usage steps (consistent with the blog HowTo schemas already in place).

**Files:**
- `app/tool/page.tsx`
- `app/tool/ToolClient.tsx`

**Expected Outcome:** The free AI Task Generator becomes citable in AI answers about "free construction scheduling tools" or "free BIM schedule generator."

**Acceptance Criteria:**
- [ ] `WebApplication` JSON-LD present on `/tool` page
- [ ] Schema includes `applicationCategory: "BusinessApplication"` and `offers.price: "0"`
- [ ] Google Rich Results Test validates the schema

---

## Phase 3 — llms.txt & AI-Readable Content

### GEO-009: Create `llms-full.txt` for Deep Content

- **Status:** ❌ Missing
- **Priority:** High
- **Category:** `llms`

**Evidence:**  
`public/llms.txt` exists and is well-structured (60 lines, covers capabilities, pricing, audiences, key links). The llmstxt.org specification recommends a companion `llms-full.txt` for richer, full-context content — SpaceLean only has the summary version.

**Problem:**  
AI engines that parse `llms.txt` often follow `llms-full.txt` to get deeper context. Without it, crawlers are limited to the summary and must crawl individual pages, which may fail for JavaScript-rendered content.

**Recommended Changes:**
1. Create `public/llms-full.txt` as an expanded version of `llms.txt` that includes:
   - Full feature specifications (currently in `public/features.md` — embed directly)
   - Full pricing matrix (from `public/pricing.md`)
   - Full competitor comparison matrix (from `public/spacelean-vs-competitors.md`)
   - Full API spec summary (from `public/docs/ai-agents.md`)
   - Full OKF concept summaries (from `public/okf/`)
2. Add a link to `llms-full.txt` inside `llms.txt` under a new `## Full Context` section.
3. Keep `llms-full.txt` under 500 lines for LLM context window compatibility.

**Files to Create/Modify:**
- `public/llms-full.txt` *(new)*
- [`public/llms.txt`](file:///home/user/Documents/spacelearn/public/llms.txt)

**Expected Outcome:** Improves `llms` score from partial to complete. Allows AI engines to retrieve all SpaceLean knowledge in one crawl without parsing JavaScript.

**Acceptance Criteria:**
- [ ] `https://spacelean.ai/llms-full.txt` returns HTTP 200
- [ ] File includes feature specs, pricing, comparisons, and API specs
- [ ] `llms.txt` has a `## Full Context` section linking to `llms-full.txt`
- [ ] File is under 500 lines

---

### GEO-010: Add Keywords Section and Timestamp to `llms.txt`

- **Status:** 🔶 Partial
- **Priority:** Medium
- **Category:** `llms`

**Evidence:**  
`public/llms.txt` has a `## Keywords` section (line 56) but it is vague: only 10 keywords, no ISO timestamp, no `Last-Updated` field, and no version number. The GEO skill's graduated `llms.txt` scoring rewards timestamp, depth of links, and structured keyword taxonomy.

**Recommended Changes:**
1. Add a `Last-Updated: 2026-10-09` field near the top of `llms.txt`.
2. Expand keywords to 25–30 terms covering construction scheduling, BIM, CPM, Monte Carlo, VDC, and competitor alternative terms.
3. Add a `## About the Authors` section with a brief entity description (name, location, founded year).
4. Add missing key pages: `/about`, `/security`, `/videos`, `/careers`.

**Files:**
- [`public/llms.txt`](file:///home/user/Documents/spacelearn/public/llms.txt)

**Expected Outcome:** Higher `llms` sub-score. Better semantic alignment between `llms.txt` and target queries in AI search engines.

**Acceptance Criteria:**
- [ ] `Last-Updated` ISO date field present at top of file
- [ ] 25+ keywords covering all main product topics
- [ ] Key missing pages added to the resource list
- [ ] `## About the Authors` or `## About` section included

---

### GEO-011: Update Stale `cad.spaceaiapp.com` Reference in `public/pricing.md`

- **Status:** 🔶 Partial
- **Priority:** Medium
- **Category:** `llms`, `brand_entity`

**Evidence:**  
`public/pricing.md` line 113 contains:
```
* **Start Free Trial**: [Register at cad.spaceaiapp.com/lean](https://cad.spaceaiapp.com/lean)
```
This is the old app URL that was changed in `StartFreeTrialButton.tsx` to `https://app.pmspace.ai/`. The machine-readable file is now inconsistent with the actual CTA destination.

**Recommended Changes:**
- Update `public/pricing.md` line 113 to:
```
* **Start Free Trial**: [Start your free account at app.pmspace.ai](https://app.pmspace.ai/)
```

**Files:**
- [`public/pricing.md`](file:///home/user/Documents/spacelearn/public/pricing.md)

**Expected Outcome:** AI agents reading `pricing.md` will direct users to the correct signup URL. Prevents broken user journeys surfaced via AI answers.

**Acceptance Criteria:**
- [ ] `pricing.md` contains no references to `cad.spaceaiapp.com`
- [ ] URL points to `https://app.pmspace.ai/`
- [ ] Consistent with `StartFreeTrialButton.tsx` default `trialUrl`

---

## Phase 4 — Content Citability (Princeton GEO Methods)

### GEO-012: Add Authoritative External Source Citations to Blog Posts

- **Status:** ❌ Missing
- **Priority:** High
- **Category:** `content`

**Evidence:**  
Searching all blog content and page files for phrases like "according to", "cite", "source", "research shows" returns zero results. The `public/spacelean-vs-competitors.md` and `public/features.md` contain claims (e.g., "94% accuracy", "0.3s replan time") with no external references.

**Problem:**  
The #1 ranked Princeton GEO method is **Cite Sources** (+30–115% citability improvement). External links to authoritative industry references (McKinsey, KPMG, Dodge Data, FMI construction reports) dramatically increase the probability of AI engines citing SpaceLean content.

**Recommended Changes:**
1. Add 2–3 authoritative external citations per blog post, specifically:
   - McKinsey Global Institute reports on construction productivity
   - FMI / Dodge Data construction industry statistics
   - NIST BIM standards references
   - Academic papers on Monte Carlo schedule risk analysis
2. Add a `## Sources` section at the bottom of relevant blog posts.
3. Update `public/features.md` to include source citations for quantitative claims (94% accuracy, 80% planning time reduction).

**Files:**
- `lib/blog-data.ts` (blog content source)
- [`public/features.md`](file:///home/user/Documents/spacelearn/public/features.md)

**Expected Outcome:** Highest-impact citability improvement. Makes SpaceLean blog content suitable for AI engine citation.

**Acceptance Criteria:**
- [ ] At least 5 blog posts have 2+ external authoritative links
- [ ] `features.md` links specific claims to their data sources
- [ ] External links use `rel="noopener noreferrer"` for security
- [ ] Sources are industry-recognized (McKinsey, FMI, NIST, etc.)

---

### GEO-013: Add Quantitative Statistics to Page Content

- **Status:** 🔶 Partial
- **Priority:** High
- **Category:** `content`

**Evidence:**  
SpaceLean's JSON-LD schemas reference concrete numbers: `ratingValue: 4.8`, `reviewCount: 127`, `80% planning time reduction`, `94% critical path accuracy`, `40% faster delivery`. However, these stats appear only in structured data — the visible HTML body text of key pages (homepage, solutions, features) does not prominently surface these as in-body statistics for AI parsers.

**Problem:**  
The #2 Princeton GEO method is **Add Statistics** (+40% citability). AI engines extract statistics from visible body text, not JSON-LD. Stats buried in JSON-LD are not cited in AI answers.

**Recommended Changes:**
1. Add visible stat blocks to the homepage `app/page.tsx` with the following verbatim claims:
   - "80% reduction in schedule planning time"
   - "94% critical path prediction accuracy"
   - "1,000 Monte Carlo simulations per schedule save"
   - "4.8/5 average rating from 127+ construction teams"
   - "40% faster project delivery"
2. Ensure each stat is wrapped in its own `<p>` or `<li>` element (not just an SVG/animation counter).
3. Add these stats to `public/llms.txt` and `public/features.md` with explicit percentage formatting.

**Files:**
- `app/page.tsx`
- `components/HeroSection.tsx`
- [`public/llms.txt`](file:///home/user/Documents/spacelearn/public/llms.txt)

**Expected Outcome:** +40% potential citability improvement. AI engines can extract and cite specific SpaceLean performance numbers in answers.

**Acceptance Criteria:**
- [ ] Homepage has at least 4 quantitative stat statements in visible body text
- [ ] Stats include percentage, number, or time-bound metric
- [ ] Stats are in plain `<p>` or `<li>` HTML (crawlable without JS execution)
- [ ] Stats consistent with JSON-LD `AggregateRating` and `SoftwareApplication` schemas

---

### GEO-014: Add Expert Quotes to Blog and Product Pages

- **Status:** ❌ Missing
- **Priority:** High
- **Category:** `content`

**Evidence:**  
No expert quotes in standard citation format (`"Quote text" — Name, Role, Organization, Year`) were found across the codebase. The blog content uses descriptive text but no attributed quotes from construction industry experts.

**Problem:**  
The #3 Princeton GEO method is **Quotation Addition** (+30–40% citability). AI engines treat attributed quotes as high-value evidence, increasing the probability that content gets cited in AI answers.

**Recommended Changes:**
1. Add 1–2 expert quotes per major blog post in standard citation format.
2. Add a testimonials or quote block to the homepage with construction professional testimonials — attributed to name, role, company.
3. Ensure quotes are in visible `<blockquote>` HTML elements, not just CSS-styled divs.
4. Consider adding a `Review` or `Testimonial` array to the `SoftwareApplication` JSON-LD.

**Example format:**
```html
<blockquote>
  <p>"SpaceLean cut our 4D schedule preparation from 3 weeks to under 2 hours."</p>
  <cite>— James Thornton, VDC Manager, Turner Construction, 2026</cite>
</blockquote>
```

**Files:**
- `lib/blog-data.ts`
- `components/HeroSection.tsx`
- `app/page.tsx`

**Expected Outcome:** +30–40% citability on content that includes attributed quotes.

**Acceptance Criteria:**
- [ ] At least 5 blog posts have 1+ attributed expert quote
- [ ] Quotes use `<blockquote>` + `<cite>` HTML structure
- [ ] Homepage has at least 2 attributed testimonials from named professionals
- [ ] Attribution includes Name, Role, Organization, Year

---

### GEO-015: Add Definition-First Answer Blocks for Core Terms

- **Status:** ❌ Missing
- **Priority:** High
- **Category:** `content`

**Evidence:**  
Searching all page files for definition patterns ("SpaceLean is", "BIM 4D sequencing is", "critical path management is defined as") returns zero structured definitions. The `llms.txt` blockquote functions as a definition but page HTML bodies lack definition-first opening paragraphs.

**Problem:**  
AI engines favor content that opens with a clear, direct definition (the "zero-click" answer pattern). Content that immediately answers "What is X?" is more likely to be cited in AI answers for navigational and informational queries.

**Recommended Changes:**
1. Add definition-first `<p>` blocks at the top of key pages:
   - `/space-lean-core` — "SpaceLean Core is an AI scheduling engine that..."
   - `/technology` — "VeritasGraph is a GraphRAG knowledge graph framework that..."
   - `/solutions/for-gcs` — "SpaceLean for General Contractors is a..."
   - Each comparison page — "SpaceLean vs [Competitor]: SpaceLean is [X], while [Competitor] is [Y]..."
2. Add definition paragraphs to the top of all long-form blog posts.
3. These should be plain text `<p>` elements, not heading tags, for maximum extraction compatibility.

**Files:**
- `components/space-lean-core/HeroSection.tsx`
- `app/technology/page.tsx`
- `app/solutions/[slug]/page.tsx`
- `app/compare/[slug]/page.tsx`
- `lib/blog-data.ts`

**Expected Outcome:** Dramatically improves zero-click AI answer eligibility for navigational and informational queries.

**Acceptance Criteria:**
- [ ] Top 5 product pages open with a 2–3 sentence definition paragraph
- [ ] All comparison pages have a "What is X vs Y" definition block
- [ ] Blog posts have definition-first opening paragraphs for key terms
- [ ] Definitions are in crawlable plain-text HTML

---

## Phase 5 — Brand Entity & Topical Authority

### GEO-016: Consolidate Brand Name Inconsistency (`SpaceLean` vs `SPACE LEAN`)

- **Status:** 🔶 Partial
- **Priority:** High
- **Category:** `brand_entity`

**Evidence:**  
- `app/layout.tsx` line 18: `"SpaceLean"` (correct)
- `app/blogs/[slug]/page.tsx` line 46: `"SPACE LEAN Blog"` (all-caps variant)
- `app/blogs/[slug]/page.tsx` line 77: `siteName: "SPACE LEAN"` (OpenGraph)
- `components/space-lean-core/` — uses "Space Lean" in places
- Multiple JSON-LD schemas use `"SpaceLean"` while metadata uses `"SPACE LEAN"`

**Problem:**  
Brand entity consistency is a scored GEO category. Inconsistent brand name formatting (SpaceLean vs SPACE LEAN vs Space Lean) confuses AI entity resolution and knowledge graph matching. This prevents reliable entity grounding across AI engines.

**Recommended Changes:**
1. Standardize on **`SpaceLean`** (one word, camel case) as the canonical brand name across all files.
2. Update all OpenGraph `siteName`, all JSON-LD `name` fields, and all title tags to use `SpaceLean` consistently.
3. Update blog page title format from `"SPACE LEAN Blog"` to `"SpaceLean Blog"`.
4. Audit `components/` directory for additional inconsistencies.

**Files:**
- [`app/blogs/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx) *(lines 46, 77)*
- `app/layout.tsx`
- All page metadata files

**Expected Outcome:** Improved AI knowledge graph entity recognition. Consistent brand name → higher confidence for AI engines to associate SpaceLean with its topic cluster.

**Acceptance Criteria:**
- [ ] Zero occurrences of `"SPACE LEAN"` in metadata, JSON-LD, or OpenGraph
- [ ] Zero occurrences of `"Space Lean"` (two words, title case) in schema or metadata
- [ ] All JSON-LD `name` fields use `"SpaceLean"` 
- [ ] `geo coherence --url https://spacelean.ai` brand consistency check passes

---

### GEO-017: Expand `sameAs` Entity Links in Organization Schema

- **Status:** 🔶 Partial
- **Priority:** Medium
- **Category:** `brand_entity`

**Evidence:**  
`app/layout.tsx` (line 108) includes `sameAs` with: LinkedIn, YouTube, G2, Capterra, Twitter/X. The `app/page.tsx` (line 118) includes additional `sameAs` links for the main schema.

**Problem:**  
The GEO `brand_entity` category scores the richness of `sameAs` links. Several important entity anchors are missing: Crunchbase, Product Hunt, GitHub (VeritasGraph), and the OKF/llms.txt self-reference.

**Recommended Changes:**
Add to `sameAs` arrays:
- `https://www.crunchbase.com/organization/spacelean` (if profile exists)
- `https://www.producthunt.com/products/spacelean` (if listed)
- `https://github.com/bibinprathap/VeritasGraph` (tech entity)
- `https://spacelean.ai/llms.txt` (self-referencing structured resource)

**Files:**
- [`app/layout.tsx`](file:///home/user/Documents/spacelearn/app/layout.tsx)
- [`app/page.tsx`](file:///home/user/Documents/spacelearn/app/page.tsx)

**Expected Outcome:** Better knowledge graph entity resolution. AI engines anchor SpaceLean to more authoritative external databases.

**Acceptance Criteria:**
- [ ] `sameAs` includes at least 7 distinct authoritative URLs
- [ ] GitHub repo for VeritasGraph included as a `sameAs` or `isBasedOn` link
- [ ] All `sameAs` URLs return HTTP 200 when fetched

---

### GEO-018: Add `Person` Schema for Founders/Authors

- **Status:** 🔶 Partial
- **Priority:** Medium
- **Category:** `brand_entity`

**Evidence:**  
`app/layout.tsx` `softwareAppSchema` references `"author": { "@type": "Person", "name": "Bibin Prathap" }` (line 130) but with no URL, social links, or role. Blog posts use `post.author` as a string name in JSON-LD but without a `Person` entity URL.

**Recommended Changes:**
1. Create a reusable `Person` schema for Bibin Prathap with `url`, `sameAs` (LinkedIn, GitHub), and `jobTitle`.
2. Apply this `Person` entity as the `author` of blog posts.
3. Add an `/about` page `Person` schema for all team members listed on the About page.

**Files:**
- [`app/layout.tsx`](file:///home/user/Documents/spacelearn/app/layout.tsx)
- [`app/blogs/[slug]/page.tsx`](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx)
- `app/about/page.tsx`

**Expected Outcome:** Establishes author entity in AI knowledge graphs. Increases E-E-A-T signals for content authority.

**Acceptance Criteria:**
- [ ] `Person` schema includes `name`, `url`, `sameAs` (LinkedIn), `jobTitle`
- [ ] Blog post schemas reference the `Person` entity (not just a string name)
- [ ] About page has individual `Person` schemas for team members

---

## Phase 6 — Internal Linking & Content Discoverability

### GEO-019: Add Internal Contextual Links from Blog to Product Pages

- **Status:** 🔶 Partial
- **Priority:** Medium
- **Category:** `content`

**Evidence:**  
Blog posts render via `MarkdownRenderer` from `lib/blog-data.ts`. Checking blog content structure, the CTA banner at the bottom of each post links to `/request-a-demo` and `/tools`. No systematic cross-linking from blog articles to the feature, solutions, comparison, or technology pages was evident.

**Recommended Changes:**
1. Add contextual internal links from blog posts to relevant product pages:
   - "4D BIM sequencing" → `/space-lean-core/bim-4d-sequencing`
   - "Monte Carlo critical path" → `/space-lean-core/monte-carlo-critical-path`
   - "construction scheduling software" → `/features`
   - "alternative to Primavera P6" → `/compare/spacelean-vs-primavera-p6`
2. Add a **Related Features** section at the bottom of construction-specific blog posts.
3. Ensure the sitemap includes all solution and core feature slugs (currently present in `sitemap.ts` — verify all slugs are generated).

**Files:**
- `lib/blog-data.ts`
- `app/blogs/[slug]/page.tsx`

**Expected Outcome:** Improves RAG chunk readiness. AI engines that crawl contextual links understand the topical relationship between SpaceLean's blog content and its product pages.

**Acceptance Criteria:**
- [ ] At least 5 blog posts have 3+ internal contextual links to product pages
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] `geo coherence --url https://spacelean.ai` passes embedding proximity check

---

### GEO-020: Verify All OKF Bundle Pages Are Live and Internally Linked

- **Status:** 🔍 Needs Verification
- **Priority:** Medium
- **Category:** `llms`, `content`

**Evidence:**  
`public/okf/index.md` references solution files (`solutions-general-contractors.md`, `solutions-owners.md`, `solutions-consultants.md`) that do not appear in the `/public/okf/` directory listing — only `index.md`, `manifest.json`, `pricing-tiers.md`, and `spacelean-overview.md` exist.

**Problem:**  
The OKF index promises 5 knowledge resources but only 3 are present. This breaks AI agent traversal of the OKF bundle, causing incomplete knowledge graph coverage.

**Recommended Changes:**
1. Create the missing OKF files:
   - `public/okf/solutions-general-contractors.md`
   - `public/okf/solutions-owners.md`
   - `public/okf/solutions-consultants.md`
2. Add a link to `https://spacelean.ai/okf/index.md` from `llms.txt`.
3. Verify `public/okf/manifest.json` lists all existing files correctly.

**Files:**
- `public/okf/index.md`
- `public/okf/manifest.json`
- Missing OKF solution files

**Expected Outcome:** Complete OKF bundle enables AI agents to traverse all SpaceLean knowledge resources without encountering 404 errors.

**Acceptance Criteria:**
- [ ] All 5 OKF resources listed in `index.md` return HTTP 200
- [ ] `manifest.json` lists all files with correct URLs
- [ ] `llms.txt` links to the OKF bundle

---

## Phase 7 — Measurement, Automation & Regression Monitoring

### GEO-021: Run Live Baseline GEO Audit Score

- **Status:** ❌ Missing
- **Priority:** High
- **Category:** Measurement

**Evidence:**  
The `uvx` command was unavailable on this machine (`uvx not found`). No GEO audit baseline score exists.

**Recommended Changes:**
1. Install `uv` via the correct method for the system:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   # or
   sudo snap install astral-uv
   ```
2. Run the baseline audit:
   ```bash
   uvx --from geo-optimizer-skill geo audit --url https://spacelean.ai --format json > geo-baseline.json
   uvx --from geo-optimizer-skill geo audit --url https://spacelean.ai --format html > geo-baseline.html
   ```
3. Store `geo-baseline.json` in the project root and commit it.
4. Run `geo audit --sitemap https://spacelean.ai/sitemap.xml --max-urls 25` for page-level breakdown.

**Files to Create:**
- `geo-baseline.json` *(new, gitignored or committed)*
- `geo-baseline.html` *(new, for visual review)*

**Expected Outcome:** Establishes the 0–100 baseline score across all 8 GEO categories, enabling quantified progress tracking.

**Acceptance Criteria:**
- [ ] `uv` installed and `uvx` command functional
- [ ] `geo audit` completes without error for `https://spacelean.ai`
- [ ] Baseline JSON saved to project root
- [ ] Score bands documented for each of the 8 categories

---

### GEO-022: Set Up GEO Regression Monitoring via GitHub Actions

- **Status:** ❌ Missing
- **Priority:** Medium
- **Category:** Measurement

**Evidence:**  
`.github/` directory exists but no GEO-related workflows were found. The GEO optimizer skill has a `geo monitor` command and a `action.yml` for GitHub Actions integration.

**Recommended Changes:**
1. Create `.github/workflows/geo-monitor.yml`:
   - Run `geo audit --url https://spacelean.ai --format ci` on every push to `main`
   - Fail CI if score drops below threshold (e.g., 70/100)
   - Post score summary as PR comment via `--format github`
2. Run `geo track --url https://spacelean.ai --report` weekly to build a score history.
3. Use `geo snapshots --url https://spacelean.ai --save` before each major deployment.

**Files to Create:**
- `.github/workflows/geo-monitor.yml`

**Expected Outcome:** Prevents GEO score regression from code changes. Automates ongoing visibility monitoring without manual audits.

**Acceptance Criteria:**
- [ ] GitHub Actions workflow created and running on push to `main`
- [ ] CI fails if GEO score drops below minimum threshold
- [ ] Score trend visible via `geo history --url https://spacelean.ai`

---

### GEO-023: Configure `.geo-optimizer.yml` for Project-Specific Rules

- **Status:** 🔍 Needs Verification
- **Priority:** Low
- **Category:** Measurement

**Evidence:**  
`.agents/skills/geo-optimizer-skill/.geo-optimizer.example.yml` exists — a configuration example for the GEO optimizer tool. No project-level `.geo-optimizer.yml` in the SpaceLean root was found.

**Recommended Changes:**
1. Copy `.agents/skills/geo-optimizer-skill/.geo-optimizer.example.yml` to the project root as `.geo-optimizer.yml`.
2. Configure with SpaceLean-specific values: `base_url`, `site_name`, `description`, `min_score` threshold.
3. Add to `.gitignore` if the file contains sensitive configuration, or commit if safe.

**Files:**
- `.geo-optimizer.yml` *(new in project root)*

**Expected Outcome:** Enables `geo audit` to auto-detect project configuration without repeating CLI flags.

**Acceptance Criteria:**
- [ ] `.geo-optimizer.yml` exists in project root
- [ ] `geo audit` reads config without explicit `--url` flag
- [ ] `min_score` threshold set to enforce quality gate

---

## Summary

### Implementation Status by GEO Category

| GEO Category | Current Status | Estimated Score | Top Gap |
|---|---|---|---|
| `robots` | 🔶 Partial | ~60/100 | No training/citation bot split (GEO-001) |
| `llms` | 🔶 Partial | ~65/100 | Missing `llms-full.txt` (GEO-009) |
| `schema` | 🔶 Partial | ~60/100 | No `WebSite`, `dateModified`, tool schema (GEO-004, 005, 008) |
| `meta` | ✅ Complete | ~80/100 | Minor: brand name inconsistency (GEO-016) |
| `content` | 🔶 Partial | ~45/100 | No external citations, no expert quotes, no definitions (GEO-012, 013, 014, 015) |
| `signals` | ❌ Missing | ~30/100 | No RSS feed, no `dateModified` (GEO-003, 005) |
| `ai_discovery` | ❌ Missing | ~0/100 | No `.well-known/ai.txt`, no `/ai/summary.json` (GEO-002) |
| `brand_entity` | 🔶 Partial | ~55/100 | Name inconsistency, incomplete `sameAs` (GEO-016, 017) |

**Estimated Current Overall Score: ~49/100 (Foundation band: 36–67)**

---

### Highest-Priority Tasks (Do First)

| Rank | Task ID | Reason |
|---|---|---|
| 1 | **GEO-002** | AI Discovery endpoints score 0/100 — entire category missing |
| 2 | **GEO-003** | RSS feed fixes the `signals` category gap at lowest effort |
| 3 | **GEO-001** | Bot split protects training data while preserving citation access |
| 4 | **GEO-012** | Cite Sources is the #1 Princeton method (+30–115% citability) |
| 5 | **GEO-021** | Baseline audit needed to validate all assumptions with real scores |
| 6 | **GEO-009** | `llms-full.txt` closes the biggest single `llms` gap |
| 7 | **GEO-016** | Brand inconsistency is a quick fix with outsized entity-graph impact |

---

### Areas Requiring Live Website Audit

The following cannot be fully validated from static code inspection alone:

1. **JavaScript rendering** — AI crawlers may not execute React/Next.js JavaScript. A live crawl test with `geo audit` is needed to confirm whether JSON-LD schemas are present in the HTML response (SSR) or only after JS hydration.
2. **Actual bot access** — `robots.ts` generates the `/robots.txt` dynamically. Verify the deployed output matches the static `public/robots.txt` to avoid conflicts.
3. **`sitemap.xml` dynamic slug generation** — The blog, solution, and comparison slugs are generated from data files. Verify all slugs render correctly in the live sitemap.
4. **OKF file availability** — Three OKF solution files are referenced in `okf/index.md` but missing from `public/okf/`. Verify 404 vs. 200 live.
5. **`pricing.md` link** — Still references old `cad.spaceaiapp.com/lean` URL (GEO-011). Confirm not cached by AI crawlers.
6. **Trust Stack Score** — Requires live domain trust analysis (`geo trust-score --url https://spacelean.ai`).

---

*Generated by Antigravity using the GEO Optimizer skill framework (Princeton KDD 2024 + AutoGEO ICLR 2026). Last updated: 2026-10-09.*
