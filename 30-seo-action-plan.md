# SpaceLean.ai 30-Day SEO Action Plan & Roadmap

This prioritized action plan outlines exactly 30 concrete, actionable tasks to optimize the SpaceLean platform for traditional search engines (Google, Bing) and AI generative search engines (ChatGPT Search, Perplexity, Google AI Overviews).

---

## Executive Summary & Audit Matrix

SpaceLean has pivoted its positioning from a general-purpose team productivity tool to a specialized, high-growth niche: **AI-powered construction scheduling and project management software** (targeting general contractors, project owners, and consultants). However, the codebase contains residual marketing content, schema configurations, technical syntax errors, and relative localization links that block indexing, dilute topical authority, and prevent AI search engines from confidently citing the site.

### Severity & Priority Classification

| Vector | Critical | High | Medium | Low |
| :--- | :--- | :--- | :--- | :--- |
| **Technical SEO** | Tasks 1-5 | Task 6 | Tasks 15-19 | - |
| **On-Page SEO** | - | Tasks 12-14 | - | Task 30 |
| **Schema Markup** | - | Tasks 21-22 | Task 23 | - |
| **Accessibility / UX**| - | - | Task 24 | Task 29 |
| **AI Visibility / GEO**| Tasks 7-8 | Tasks 9-10 | Tasks 20, 25 | - |
| **Content / Linking** | - | Task 11 | Tasks 26-28 | - |

---

## Prioritized Implementation Roadmap (30 Actionable Tasks)

### 🔴 Technical & AI Crawler Foundations (Tasks 1–8)

#### - [ ] Task 1: Fix Relative Hreflang Language Alternate Tags in Solutions Metadata
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: Very High
* **Why It Matters**: Google's search crawlers require that language alternates (`hreflang`) point to fully qualified absolute URLs. Relative values like `/solutions` will fail validation, causing search engines to ignore regional targeting and language versions.
* **Description**: Change relative paths to absolute URLs within the languages block of the solution pages metadata.
* **Files Affected**:
  - [app/solutions/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/page.tsx#L32-L37)
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx#L36-L41)

---

#### - [ ] Task 2: Fix Relative Hreflang Language Alternate Tags in Comparison Metadata
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: Very High
* **Why It Matters**: Comparison pages target high-intent transactional search terms. Relative hreflangs here block multi-regional indexing of these high-value commercial targets.
* **Description**: Ensure all `alternates.languages` paths use absolute URLs prefixed with `https://spacelean.ai`.
* **Files Affected**:
  - [app/compare/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/compare/%5Bslug%5D/page.tsx#L33-L38)

---

#### - [ ] Task 3: Fix Relative Hreflang Language Alternate Tags in Dynamic Blog Metadata
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: Ensures dynamic blog posts are correctly recognized across target English variants (US, GB, IN) in international SERPs.
* **Description**: Convert relative URLs in blog detail pages metadata to absolute URLs.
* **Files Affected**:
  - [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx#L59-L64)

---

#### - [ ] Task 4: Fix Relative Hreflang Language Alternate Tags in AI Tool Page Metadata
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: The Free AI Task Generator is a primary inbound lead generator. Standardizing alternate tags ensures robust indexing across global search nodes.
* **Description**: Update the alternates object on the tool page metadata config to absolute URLs.
* **Files Affected**:
  - [app/tool/page.tsx](file:///home/user/Documents/spacelearn/app/tool/page.tsx#L25-L30)

---

#### - [ ] Task 5: Correct CSS Syntax Error (Missing Semicolon) in Headings Ruleset
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: A missing semicolon on line 201 inside a major selector (`h1, h2...`) breaks subsequent rules, causing layout shifts and rendering bugs that negatively impact Google Core Web Vitals (specifically CLS and LCP metrics).
* **Description**: Add a trailing semicolon to the `color: #301659` declaration under the base heading rules.
* **Files Affected**:
  - [app/globals.css](file:///home/user/Documents/spacelearn/app/globals.css#L194-L203)

---

#### - [ ] Task 6: Refactor Brittle Regex Markdown Parser in Blog Detail Views
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected SEO Impact**: High
* **Why It Matters**: The existing markdown-to-HTML parser uses rigid regular expressions that generate unclosed paragraphs (`<p>`) and unnested list items (`<li>` outside of `<ul>`). Malformed HTML can cause search crawlers to incorrectly parse pages and penalize search eligibility.
* **Description**: Replace the chain of regex `.replace()` calls with a standardized, lightweight markdown parser (like `marked` or `mdx`).
* **Files Affected**:
  - [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx#L396-L410)

---

#### - [ ] Task 7: Configure Robots Crawl Rules for Generative AI Search Crawlers
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: Very High (AI Search)
* **Why It Matters**: For SpaceLean to be cited in ChatGPT Search and other LLM platforms, AI search bots must be explicitly allowed to crawl the marketing pages.
* **Description**: Update rules to allow `OAI-SearchBot` and `GPTBot` (while restricting private paths like `/_next/` or `/api/`).
* **Files Affected**:
  - [app/robots.ts](file:///home/user/Documents/spacelearn/app/robots.ts#L6-L15)

---

#### - [ ] Task 8: Sync Static Robots.txt with Dynamic Robots Configuration
* **Priority**: Critical
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: Mismatched crawling rules between static assets and Next.js routes create crawl conflicts for indexers.
* **Description**: Add the corresponding AI bot crawl configurations to the static text file to match the dynamic config.
* **Files Affected**:
  - [public/robots.txt](file:///home/user/Documents/spacelearn/public/robots.txt#L6-L12)

---

### 🟠 E-E-A-T & Topical Authority Alignment (Tasks 9–14)

#### - [ ] Task 9: Align Footer Branding Description with Construction Scheduling Focus
* **Priority**: High
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: The footer still describes SpaceLean as "AI-powered task management for high-velocity teams... ship faster," which is legacy positioning. AI engines analyze boilerplate context to understand topical relevance; this needs to point to construction.
* **Description**: Update the text block in the brand section of the footer component to focus on construction planning, BIM scheduling, and project controls.
* **Files Affected**:
  - [components/Footer.tsx](file:///home/user/Documents/spacelearn/components/Footer.tsx#L146-L148)

---

#### - [ ] Task 10: Update Contact Domain Emails in Header component to match Brand
* **Priority**: High
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: Contact emails point to a different domain (`@aibizmod.com`). Search engines and human users cross-reference email domains to confirm business legitimacy (E-E-A-T trust signals).
* **Description**: Update all contact emails in the USA, Canada, UAE, Saudi Arabia, Kuwait, Singapore, and Malaysia arrays to `@spacelean.ai`.
* **Files Affected**:
  - [components/Header.tsx](file:///home/user/Documents/spacelearn/components/Header.tsx#L8-L51)

---

#### - [ ] Task 11: Align Homepage FAQ Questions with High-Volume Search Intent
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected SEO Impact**: Very High
* **Why It Matters**: The current FAQs are generic and ignore construction terms. Changing them to address construction scheduling, BIM workflows, and Primavera alternatives targets high-growth keywords.
* **Description**: Rewrite the FAQ array objects to feature construction-specific questions.
* **Files Affected**:
  - [components/FAQ.tsx](file:///home/user/Documents/spacelearn/components/FAQ.tsx#L7-L38)

---

#### - [ ] Task 12: Optimize Global Page Title for Construction Scheduling
* **Priority**: High
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: The current layout title uses "AI-Powered Lean Project Management." We need to capture the high-growth search query "construction scheduling software."
* **Description**: Rewrite the metadata title to explicitly prioritize construction scheduling and PM software.
* **Files Affected**:
  - [app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx#L18)

---

#### - [ ] Task 13: Expand Global Meta Description to Target Industry Keywords
* **Priority**: High
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: Adding specific terms like "schedules from BIM models," "critical path," and "general contractors" improves search snippet CTR.
* **Description**: Refactor layout description to align with construction keywords.
* **Files Affected**:
  - [app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx#L19-L20)

---

#### - [ ] Task 14: Align Global Meta Keywords with Search Planner Focus
* **Priority**: High
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: Though search engines place less weight on keywords, they provide topical signals for AI LLM semantic scrapers.
* **Description**: Update layout keywords array to include high-volume construction project management software variations.
* **Files Affected**:
  - [app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx#L21-L36)

---

### 🟡 Sitemap, Canonicals, and Indexability (Tasks 15–20)

#### - [ ] Task 15: Add Missing Core Pages to XML Sitemap
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected SEO Impact**: High
* **Why It Matters**: Essential compliance and privacy pages are omitted from the sitemap. This limits crawl discovery and prevents indexing of brand trust assets.
* **Description**: Add `/privacy` and `/terms` routes directly into the sitemap generator.
* **Files Affected**:
  - [app/sitemap.ts](file:///home/user/Documents/spacelearn/app/sitemap.ts#L70-L89)

---

#### - [ ] Task 16: Standardize Absolute Canonical Tags for Dynamic Solutions
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: Dynamic routes should define fully qualified canonical links (prefixed with `https://spacelean.ai`) to avoid protocol-level indexing splits.
* **Description**: Update the canonical configuration inside `generateMetadata` for dynamic solutions.
* **Files Affected**:
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx#L35)

---

#### - [ ] Task 17: Standardize Absolute Canonical Tags for Dynamic Blog Pages
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: Prevents duplicate content issues when search engines index blog content with differing parameters.
* **Description**: Update the alternates canonical definition in the metadata builder for blogs.
* **Files Affected**:
  - [app/blogs/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/blogs/%5Bslug%5D/page.tsx#L58)

---

#### - [ ] Task 18: Standardize Absolute Canonical Tags for Comparison Slugs
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: Ensures search engines aggregate ranking signals on the correct desktop/mobile variant.
* **Description**: Update the metadata canonical helper for comparison routes.
* **Files Affected**:
  - [app/compare/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/compare/%5Bslug%5D/page.tsx#L32)

---

#### - [ ] Task 19: Standardize Absolute Canonical Tags for the AI Tool Page
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: Keeps the dynamic client interface of the task tool canonicalized to its search-facing route.
* **Description**: Modify alternates canonical key on `/tool/page.tsx` metadata to use absolute pathing.
* **Files Affected**:
  - [app/tool/page.tsx](file:///home/user/Documents/spacelearn/app/tool/page.tsx#L24)

---

#### - [ ] Task 20: Add High-Intent Entity Statement Block Above-the-Fold on Homepage
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected SEO Impact**: High (AI Search)
* **Why It Matters**: AI engines prioritize clear definitions at the start of a page to extract direct answers.
* **Description**: Embed a clear, visible paragraph defining what SpaceLean is, what it does, and who it serves near the top of the homepage.
* **Files Affected**:
  - [app/page.tsx](file:///home/user/Documents/spacelearn/app/page.tsx#L236-L240)

---

### 🟡 Structured Data & Rich Snippets (Tasks 21–25)

#### - [ ] Task 21: Add BreadcrumbList Schema to Solutions Detail Pages
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected SEO Impact**: High
* **Why It Matters**: Google uses breadcrumbs in search results to show site hierarchy, which improves user click-through rate (CTR).
* **Description**: Inject `BreadcrumbList` schema JSON-LD on dynamic solution routes.
* **Files Affected**:
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx#L126-L129)

---

#### - [ ] Task 22: Add BreadcrumbList Schema to Competitor Comparison Pages
* **Priority**: High
* **Estimated Effort**: Medium
* **Expected SEO Impact**: High
* **Why It Matters**: Strengthens semantic links between comparison targets and structural routes in SERPs.
* **Description**: Inject `BreadcrumbList` schema JSON-LD on dynamic comparison routes.
* **Files Affected**:
  - [app/compare/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/compare/%5Bslug%5D/page.tsx#L62-L65)

---

#### - [ ] Task 23: Add FAQ Schema to Dynamic Solution Pages
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected SEO Impact**: Medium
* **Why It Matters**: Earning rich FAQ snippets on solutions increases search footprint and provides answers directly in the search results page.
* **Description**: Append dynamic FAQ structured data based on solutions FAQ details.
* **Files Affected**:
  - [app/solutions/[slug]/page.tsx](file:///home/user/Documents/spacelearn/app/solutions/%5Bslug%5D/page.tsx#L126-L129)

---

#### - [ ] Task 24: Add Keyword-Rich Accessibility Alt Tags to Hero Media Elements
* **Priority**: Medium
* **Estimated Effort**: Small
* **Expected SEO Impact**: Medium
* **Why It Matters**: Images without descriptive alt tags hurt both image search indexing and web accessibility.
* **Description**: Audit the hero component and add descriptive alt tags containing targeted keywords.
* **Files Affected**:
  - [components/HeroSection.tsx](file:///home/user/Documents/spacelearn/components/HeroSection.tsx)

---

#### - [ ] Task 25: Build standard comparison structured tables in Comparison data
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected SEO Impact**: High (GEO)
* **Why It Matters**: AI engines extract structured information from tables. Clear comparison tables help SpaceLean rank as a direct alternative in comparison queries.
* **Description**: Format raw comparison texts into tabular matrices in comparison source data.
* **Files Affected**:
  - [lib/compare-data.ts](file:///home/user/Documents/spacelearn/lib/compare-data.ts)

---

### 🟢 Content Strategy, Internal Linking, & Optimization (Tasks 26–30)

#### - [ ] Task 26: Create Targeted Solution Page for "Task Management Software"
* **Priority**: Medium
* **Estimated Effort**: Large
* **Expected SEO Impact**: Very High
* **Why It Matters**: "Task management" is the highest-volume keyword in the opportunity list (50K/mo). Adding a targeted solution page captures this high-intent demand.
* **Description**: Draft a detailed solutions metadata object and outline page logic for this term.
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)

---

#### - [ ] Task 27: Create Targeted Solution Page for "Project Planning Software"
* **Priority**: Medium
* **Estimated Effort**: Large
* **Expected SEO Impact**: High
* **Why It Matters**: Targets the second largest keyword cluster (50K/mo).
* **Description**: Add a solutions data record and route outline for project planning.
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)

---

#### - [ ] Task 28: Add Reciprocal Links between Solutions and Core Blog Posts
* **Priority**: Medium
* **Estimated Effort**: Medium
* **Expected SEO Impact**: High
* **Why It Matters**: Ensures crawlers can distribute link authority between informational blogs and transactional solutions.
* **Description**: Create explicit cross-links between the solutions database and blog datasets.
* **Files Affected**:
  - [lib/solutions-data.ts](file:///home/user/Documents/spacelearn/lib/solutions-data.ts)
  - [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts)

---

#### - [ ] Task 29: Run Image Compression and Optimize Next.js Image Sizes
* **Priority**: Low
* **Estimated Effort**: Medium
* **Expected SEO Impact**: Medium
* **Why It Matters**: Large images degrade Largest Contentful Paint (LCP) performance, impacting overall search rank.
* **Description**: Convert large static image files to WebP or AVIF format.
* **Files Affected**:
  - [public/](file:///home/user/Documents/spacelearn/public/)

---

#### - [ ] Task 30: Address Crawled But Unindexed Blog Pages
* **Priority**: Low
* **Estimated Effort**: Medium
* **Expected SEO Impact**: Medium
* **Why It Matters**: Google crawled these but chose not to index them due to thin content. Improving content quality will resolve the indexing gap.
* **Description**: Add original content, checklists, and references to unindexed posts to ensure they meet Google's helpful content criteria.
* **Files Affected**:
  - [lib/blog-data.ts](file:///home/user/Documents/spacelearn/lib/blog-data.ts)
