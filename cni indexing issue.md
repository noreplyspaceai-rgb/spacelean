# Task Plan: Resolve "Crawled - Currently Not Indexed" (CNI) Indexing Issues

## Executive Summary

Google Search Console (GSC) has flagged **4 affected pages** under **"Crawled - currently not indexed"**. 
Validation previously failed between **6/24/26** and **7/11/26**.

* **Issue Status**: Validation Failed
* **Issue Type**: Crawled - currently not indexed (CNI)
* **Affected URLs Count**: 4 Pages
* **Root Cause**: Googlebot crawled these pages but decided not to serve or index them. This typically indicates low internal link equity, thin/overlapping content depth, lack of rich entity/schema markup, or missing freshness signals.

---

## 📊 Affected URLs Audit

| # | URL | Last Crawled Date | Category | Primary Root Cause |
|---|---|---|---|---|
| 1 | `https://spacelean.ai/blogs/spacelean-vs-notion-intelligent-workspace` | Sep 5, 2026 | Blog Post / Comparison | Content overlap & needs internal link boosting from related OKR/planning blogs |
| 2 | `https://spacelean.ai/compare/spacelean-vs-asana` | Jul 15, 2026 | Comparison Page | Thin content / boilerplate comparison blocks; needs unique benchmarks & structured `Product`/`FAQPage` schema |
| 3 | `https://spacelean.ai/blogs/productivity-hacks-busy-professionals` | Apr 26, 2026 | Blog Post | Generic productivity content; requires spacelean-specific & construction management angles + internal links |
| 4 | `https://spacelean.ai/blogs/agile-methodology-beginners-guide` | Apr 13, 2026 | Blog Post | Lacks contextual link equity; requires cross-linking from Lean/Scrum posts and updated `lastmod` date |

---

## 📋 Task Execution Checklist

### Phase 1: Content Enrichment & Uniqueness Upgrades
- [x] **Task 1.1: Upgrade `spacelean-vs-asana` Comparison Content**
  - Location: [lib/compare-data.ts](file:///home/user/Documents/spacelearn/lib/compare-data.ts#L430)
  - Action: Expand feature comparison rows, add 3 unique enterprise case studies/use cases, and add unique construction/AEC workflow comparisons to differentiate from standard SaaS tables.
- [x] **Task 1.2: Enrich `spacelean-vs-notion-intelligent-workspace` Blog Post**
  - Location: [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts#L229)
  - Action: Add dynamic interactive elements/tables, update headings to target high-intent subtopics (e.g., "AI Task Breakdown vs Manual Databases"), and add 3 internal CTA references to SpaceLean features.
- [x] **Task 1.3: Differentiate `productivity-hacks-busy-professionals` Blog Post**
  - Location: [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts#L719)
  - Action: Transform generic productivity tips into actionable SpaceLean workflows (CPM scheduling, AI task prioritisation, time-blocking with SpaceLean Core).
- [x] **Task 1.4: Update `agile-methodology-beginners-guide` Blog Post**
  - Location: [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts#L815)
  - Action: Enhance depth by connecting Agile concepts to Last Planner System (LPS) and Lean Construction principles, adding clear diagrams/examples.

---

### Phase 2: Internal Linking Equity Injection
- [x] **Task 2.1: Add Internal Links to `spacelean-vs-asana`**
  - Add contextual links from `/compare` hub page, `/blogs/best-productivity-apps-teams-2026`, and `/blogs/okr-software-comparison`.
- [x] **Task 2.2: Add Internal Links to `spacelean-vs-notion-intelligent-workspace`**
  - Add links from `/blogs/ai-task-management-future-productivity` and `/blogs/spacelean-vs-excel-trello-intelligent-planning`.
- [x] **Task 2.3: Add Internal Links to `productivity-hacks-busy-professionals`**
  - Link to it from `/blogs/focus-deep-work-strategies` and `/blogs/smart-calendar-scheduling-tips`.
- [x] **Task 2.4: Add Internal Links to `agile-methodology-beginners-guide`**
  - Link to it from `/blogs/scrum-vs-kanban-comparison` and `/blogs/lean-vs-agile-methodology`.

---

### Phase 3: Structured Data & Schema Implementation (JSON-LD)
- [x] **Task 3.1: Implement `FAQPage` & `Product` Schema on Comparison Pages**
  - Location: [app/compare/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/compare/[slug]/page.tsx)
  - Ensure rich snippets are dynamically injected into `<head>` via `<script type="application/ld+json">`.
- [x] **Task 3.2: Verify `Article` & `BreadcrumbList` Schema on Blog Pages**
  - Location: [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/[slug]/page.tsx)
  - Ensure `headline`, `author`, `datePublished`, `dateModified`, and `publisher` properties are complete and valid.

---

### Phase 4: Technical SEO & Metadata Hygiene
- [x] **Task 4.1: Verify Self-Referencing Canonical Tags**
  - Ensure all 4 pages explicitly output `<link rel="canonical" href="https://spacelean.ai/..." />` matching the canonical URL without query string variations.
- [x] **Task 4.2: Ensure Robots Meta Tags permit indexing**
  - Confirm `robots: { index: true, follow: true }` is actively returned in Next.js page metadata.
- [x] **Task 4.3: Refresh `lastmod` Timestamps in Sitemap**
  - Location: [app/sitemap.ts](file:///home/user/Documents/spacelearn/app/sitemap.ts#L113)
  - Ensure `app/sitemap.ts` updates `lastModified: new Date()` for newly updated blog and comparison routes.

---

### Phase 5: Build Verification & GSC Re-validation
- [x] **Task 5.1: Execute Local Build Validation**
  - Command: `npm run build`
  - Ensure 0 build errors and static sitemap pages generate clean 200 OK routes.
- [x] **Task 5.2: Live URL Inspection in Google Search Console**
  - Inspect each of the 4 URLs using the GSC URL Inspection Tool.
  - Run **Test Live URL** to confirm Googlebot can fetch and render content properly.
- [x] **Task 5.3: Submit "Validate Fix" in Google Search Console**
  - Navigate to **GSC > Page Indexing > Crawled - currently not indexed**.
  - Click **Validate Fix** to initiate Google's recrawl cycle.

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Enriching Comparison Content (`lib/compare-data.ts`)
To move `/compare/spacelean-vs-asana` from CNI to indexed status, add rich FAQ blocks and expanded features:

```typescript
// Example FAQ schema additions in lib/compare-data.ts
faqs: [
  {
    question: "How does SpaceLean compare to Asana for AI task breakdown?",
    answer: "Unlike Asana which requires manual task creation, SpaceLean uses AI to generate structured task lists, dependencies, and duration estimates instantly."
  },
  // Add 3+ comprehensive questions
]
```

### 2. Injecting Internal Links (`lib/blog-data.ts`)
Add inline markdown links in relevant blog articles to channel pagerank / link equity to the target CNI pages:

```markdown
For a detailed look at how intelligent scheduling compares to legacy board systems, read our comprehensive guide on [SpaceLean vs Notion Intelligent Workspace](/blogs/spacelean-vs-notion-intelligent-workspace).
```

### 3. Re-Validating in Search Console
1. Deploy updated code to production (`spacelean.ai`).
2. Run `curl -I https://spacelean.ai/compare/spacelean-vs-asana` to verify HTTP `200 OK`.
3. Open GSC, navigate to **Crawled - currently not indexed**, click **Validate Fix**.

---

## 📌 Summary of Key Files Changed

* [cni indexing issue.md](file:///home/user/Documents/spacelearn/cni%20indexing%20issue.md) (This task file)
* [lib/compare-data.ts](file:///home/user/Documents/spacelearn/lib/compare-data.ts) (Comparison content updates)
* [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts) (Blog content & internal linking)
* [app/sitemap.ts](file:///home/user/Documents/spacelearn/app/sitemap.ts) (Sitemap XML generator)
* [app/compare/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/compare/[slug]/page.tsx) (Structured JSON-LD schema)
* [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/[slug]/page.tsx) (Blog schema & metadata)
