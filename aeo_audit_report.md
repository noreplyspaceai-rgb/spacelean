# AEO/GEO Audit — spacelean.ai

**Audited:** 2026-09-17 · **Pages crawled:** 10

## Score

| Category | Score | Details |
|---|---|---|
| Foundational (16 checks) | 89/100 | 14/16 site-wide checks passed |
| Intelligence (6 dimensions) | 82/100 | High content depth & evidence density |
| **Final Score** | **86/100** | **Grade: A-** |

**Verdict:** SpaceLean.ai has strong AI-citation readiness with rich structured data (`SoftwareApplication`, `isBasedOn` VeritasGraph), clean `llms.txt`, and deep content. Fixing H1 tag counts, adding an RSS feed, and adding date metadata will elevate the site to A+ (95+).

---

## Foundational Checks (14/16 Passed)

| Status | Check | Details |
|---|---|---|
| ✗ | Single H1 heading | 6/10 pages passed. `/features` has 2 H1 tags; `/pricing` has 0 H1 tags. |
| ✗ | RSS/Atom feed | No RSS or Atom feed found (`/rss.xml` or `/feed.xml`). |
| ✓ | Clear page title | 10/10 pages passed (10+ chars, descriptive titles). |
| ✓ | Meta description | 10/10 pages passed (50+ chars, keyword-optimized). |
| ✓ | Canonical URL | 10/10 pages passed (`rel="canonical"` on all pages). |
| ✓ | Structured data present | 10/10 pages passed (JSON-LD schemas present). |
| ✓ | Schema types identified | 10/10 pages passed (`Organization`, `SoftwareApplication`, `FAQPage`, etc.). |
| ✓ | Open Graph basics | 10/10 pages passed (`og:title` & `og:description` on all pages). |
| ✓ | Internal linking | 10/10 pages passed (68-85 internal links per page). |
| ✓ | Image alt coverage | 10/10 pages passed (100% alt text coverage). |
| ✓ | Readable content depth | 10/10 pages passed (644 to 1023 body words per page). |
| ✓ | Indexable for discovery | 10/10 pages passed (No `noindex` directives). |
| ✓ | AI-accessible meta tags | 10/10 pages passed (No restrictive `nosnippet`/`noai`). |
| ✓ | Content structure | 8/10 pages passed (Clean heading hierarchy). |
| ✓ | llms.txt valid | Passed (Valid `llms.txt` with 4,429 characters & links). |
| ✓ | AI bot access | Passed (GPTBot, ClaudeBot, PerplexityBot explicitly allowed in `robots.txt`). |

---

## Intelligence Evaluation

### 1. Answer Readiness (3.0/5 — 60/100)
- **Rationale:** Content includes FAQ blocks on homepage and features pages. However, hero sections lead with marketing taglines ("We don't animate schedules. We build them.") rather than direct definition-first answers that LLMs quote directly in response to user queries.
- **Key Finding:** FAQ blocks exist, but hero sections lack definition-first opening sentences for direct AI extraction.

### 2. Quotability (4.5/5 — 90/100)
- **Rationale:** Excellent tabular comparison matrices, feature lists, and machine-readable markdown specs (`public/features.md`, `public/spacelean-vs-competitors.md`, `public/llms.txt`). Standalone 40-60 word passages are readily extractable on `/space-lean-core` and `/technology`.
- **Key Finding:** High quotability supported by structured feature matrices, competitor tables, and `llms.txt`.

### 3. Evidence Density (4.5/5 — 90/100)
- **Rationale:** Strong numerical evidence throughout ("reduces planning time by 80%", "1,000 Monte Carlo runs", "94% accuracy", "40% faster"), named author attribution ("SpaceLean Inc.", "Sarah Chen"), and entity grounding (`isBasedOn` VeritasGraph).
- **Key Finding:** Rich numerical metrics and structured schema grounding throughout core pages.

### 4. Content Depth (5.0/5 — 100/100)
- **Rationale:** Deep long-form pages across `/space-lean-core`, `/technology`, `/compare`, `/solutions`, and technical blog posts. All crawled pages comfortably exceed the 250-word and 700-word thresholds with substantive domain context.
- **Key Finding:** Comprehensive long-form depth across core platform features, solutions, and comparisons.

### 5. Freshness (3.5/5 — 70/100)
- **Rationale:** Copyright dates updated to 2026, active `llms.txt` maintenance, blog posts dated 2026. However, page-level `dateModified` / `datePublished` metadata is missing in HTML head for non-blog static routes, and no RSS feed exists for real-time crawler updates.
- **Key Finding:** 2026 timestamps present in text and blog posts, but missing `dateModified` schema & RSS feed.

### 6. Structural Clarity (4.0/5 — 80/100)
- **Rationale:** Clean semantic HTML structure, high internal link density, clear H2/H3 progression. Minor issue on `/pricing` (missing `<h1>`) and `/features` (multiple `<h1>` tags).
- **Key Finding:** Clean HTML structure and semantic hierarchy, with minor H1 tag count inconsistencies.

---

## Prioritized Fixes

1. **Fix H1 Tag Hierarchy (High Impact / Low Effort)**
   - Fix `/pricing` (currently missing an `<h1>` tag; change "Transparent Pricing." to `<h1>`).
   - Fix `/features` (currently has 2 `<h1>` tags; consolidate into 1 primary `<h1>`).

2. **Generate Dynamic RSS/Atom Feed (Medium Impact / Low Effort)**
   - Add `/rss.xml` (or `/feed.xml`) route using Next.js route handler to serve blog posts and product updates to AI crawlers.

3. **Add Date Metadata & `dateModified` JSON-LD (Medium Impact / Low Effort)**
   - Add `datePublished` and `dateModified` to `SoftwareApplication` and `WebPage` schemas across all static pages to boost Freshness score to 95+.

4. **Add Definition-First Answer Paragraphs (High Impact / Medium Effort)**
   - Add direct definition-first Q&A blocks to top of `/space-lean-core`, `/features`, and `/solutions` (e.g., *"What is SpaceLean? SpaceLean is an AI-powered construction project management platform..."*) to maximize Answer Readiness citations.

5. **Serve `llms-full.txt` Feed (Low Impact / Low Effort)**
   - Create `public/llms-full.txt` containing full text specifications of features, pricing, and comparisons for deep LLM retrieval.

---

## Weakest Pages

1. `https://spacelean.ai/solutions` (98/112 — missing date metadata)
2. `https://spacelean.ai/pricing` (104/112 — missing H1 tag)
3. `https://spacelean.ai/features` (104/112 — 2 H1 tags)
4. `https://spacelean.ai/about` (104/112 — missing date metadata)
5. `https://spacelean.ai/request-a-demo` (106/112 — missing date metadata)

---

## Recommendation

SpaceLean.ai is in the top tier of AI discoverability with an **86/100 (A-)**. By executing the 5 prioritized fixes outlined above, the site will easily achieve an **A+ (95-100)** score. 

Recommend handing off to the **`improve-aeo-geo`** skill or executing the generated `AEO_IMPROVEMENT_TASKS.md` plan.
