# SpaceLean AEO & GEO Improvement Tasks

> **Goal:** Boost SpaceLean.ai AI-Engine Discoverability (AEO/GEO) score from **86/100 (A-)** to **96+/100 (A+)** for ChatGPT, Claude, Perplexity, and Google AI Overviews.
> **Baseline Audit Report:** [aeo_audit_report.md](file:///home/user/Documents/spacelearn/aeo_audit_report.md)

---

## Task Checklist & Execution Plan

### Task 1: Fix H1 Heading Hierarchy Across Pages
- [ ] **1.1 Pricing Page (`app/pricing/page.tsx` or `components/Pricing.tsx`)**
  - **Issue:** Currently missing an `<h1>` tag (0 H1 tags found).
  - **Action:** Convert the main heading "Transparent Pricing." into `<h1>Transparent Pricing</h1>`.
  - **File:** [components/Pricing.tsx](file:///home/user/Documents/spacelearn/components/Pricing.tsx) or [app/pricing/page.tsx](file:///home/user/Documents/spacelearn/app/pricing/page.tsx)

- [ ] **1.2 Features Page (`app/features/page.tsx` or `components/FeaturesClient.tsx`)**
  - **Issue:** Currently has 2 `<h1>` tags ("SpaceLean Features..." and "The future of intelligent work.").
  - **Action:** Keep "SpaceLean Features — AI Task Management & Lean Scheduling Tools" as the single `<h1>`, and demote "The future of intelligent work." to `<h2>`.
  - **File:** [components/FeaturesClient.tsx](file:///home/user/Documents/spacelearn/components/FeaturesClient.tsx) or [app/features/page.tsx](file:///home/user/Documents/spacelearn/app/features/page.tsx)

- [ ] **1.3 Solutions & Other Pages audit**
  - **Action:** Ensure every route has exactly 1 `<h1>` tag.

---

### Task 2: Create Dynamic RSS / Atom Feed (`/rss.xml`)
- [ ] **2.1 Add Next.js RSS Feed Route Handler (`app/rss.xml/route.ts`)**
  - **Action:** Create `app/rss.xml/route.ts` that dynamically generates an XML feed containing all blog posts, product updates, and features.
  - **File:** `app/rss.xml/route.ts`
  - **Implementation Snippet:**
    ```typescript
    import { NextResponse } from "next/server";
    import { blogPosts } from "@/lib/blog-data";

    export async function GET() {
      const baseUrl = "https://spacelean.ai";
      const itemsXml = blogPosts
        .map(
          (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/blogs/${post.slug}</link>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid>${baseUrl}/blogs/${post.slug}</guid>
        </item>`
        )
        .join("");

      const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>SpaceLean AI Insights &amp; Updates</title>
        <link>${baseUrl}</link>
        <description>AI-Powered Construction Scheduling &amp; Project Controls Platform</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${itemsXml}
      </channel>
    </rss>`;

      return new NextResponse(rssXml, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
      });
    }
    ```

- [ ] **2.2 Link RSS Feed in HTML Head (`app/layout.tsx`)**
  - **Action:** Add `<link rel="alternate" type="application/rss+xml" title="SpaceLean AI RSS Feed" href="https://spacelean.ai/rss.xml" />` inside `<head>`.
  - **File:** [app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx)

---

### Task 3: Inject `dateModified` & Freshness Schema Metadata
- [ ] **3.1 Add `dateModified` to Global JSON-LD Schemas (`app/layout.tsx`)**
  - **Action:** Update `orgSchema` and `softwareAppSchema` in `layout.tsx` to include `"datePublished": "2026-01-01"` and `"dateModified": "2026-09-17"`.
  - **File:** [app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx)

- [ ] **3.2 Add `dateModified` to Page-Specific Schemas**
  - **Action:** Add `"dateModified": new Date().toISOString().split("T")[0]` to JSON-LD schemas in [app/technology/page.tsx](file:///home/user/Documents/spacelearn/app/technology/page.tsx), [app/features/page.tsx](file:///home/user/Documents/spacelearn/app/features/page.tsx), and [app/space-lean-core/page.tsx](file:///home/user/Documents/spacelearn/app/space-lean-core/page.tsx).

---

### Task 4: Add Definition-First Answer Paragraphs (Answer Readiness)
- [ ] **4.1 Add Direct Answer Block to Homepage (`app/page.tsx` or Hero section)**
  - **Action:** Include a definition-first paragraph in the first 30% of content:
    > *"What is SpaceLean? SpaceLean is an AI-powered construction scheduling platform that automatically converts 3D BIM models (IFC/Revit) into 4D buildable timelines, predicts critical path delays with 94% accuracy, and optimizes subcontractor trade crews."*

- [ ] **4.2 Add Direct Answer Block to `/space-lean-core`**
  - **Action:** Lead with:
    > *"SpaceLean Core is the AI scheduling engine for construction project controls. It provides BIM element selection, Monte Carlo risk simulation, and real-time CPM schedule resequencing."*

- [ ] **4.3 Add Direct Answer Block to `/features`**
  - **Action:** Lead with:
    > *"SpaceLean features include AI task decomposition, real-time Kanban boards, Primavera P6 XML sync, and automated trade coordination."*

---

### Task 5: Create Complete `public/llms-full.txt` Feed
- [ ] **5.1 Create `public/llms-full.txt`**
  - **Action:** Consolidate `public/llms.txt`, `public/features.md`, `public/pricing.md`, and `public/spacelean-vs-competitors.md` into a single full-text reference file for AI search crawlers.
  - **File:** [public/llms-full.txt](file:///home/user/Documents/spacelearn/public/llms-full.txt)

- [ ] **5.2 Link `llms-full.txt` in `public/llms.txt`**
  - **Action:** Ensure `llms.txt` references `https://spacelean.ai/llms-full.txt`.

---

### Task 6: Verification & Re-Audit
- [ ] **6.1 Verify Next.js Build**
  - Run `npm run build` to verify all route handlers, RSS feeds, and static pages compile cleanly.

- [ ] **6.2 Re-Run AEO Audit Script**
  - Run `node .agents/skills/audit-website-aeo/scripts/aeo-audit.mjs https://spacelean.ai` to verify foundational score reaches **96+** (16/16 checks passed).

---

## Expected Outcome

| Metric | Baseline | Target |
|---|---|---|
| **Foundational Score** | 89/100 | **96+/100** |
| **Intelligence Score** | 82/100 | **95+/100** |
| **Final Grade** | **86/100 (A-)** | **96+/100 (A+)** |
