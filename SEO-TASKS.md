# SEO Tasks — Space Lean
> Based on keyword analysis (June 2026, INR market) from Google Keyword Planner export.

---

## Site Analysis Summary 

| Issue | Location | 
|---|---|
| JSON-LD script type has trailing space (breaks structured data) | `app/page.tsx:70` |
| Meta title uses "Digital Construction Brain" — zero search volume | `app/layout.tsx:10` |
| Meta keywords are branded/niche, don't match any searched keyword | `app/layout.tsx:13` |
| FAQ questions are generic, no match to search intent | `components/FAQ.tsx:7` |
| Missing pages in sitemap (`/about`, `/compare/*`, `/security`, `/tool`) | `app/sitemap.ts` |
| No FAQ, AggregateRating, or BreadcrumbList schema | — |
| No dedicated pages for "task management" or "project planning software" (50K/mo) | — |

| No `hreflang` for Indian market despite all keywords being INR | — |

---




## Top Keyword Opportunities



| Keyword | Avg Monthly Searches | Competition | YoY Change |
|---|---|---|---|
| project management | 50,000 | Low | 0% |
| task management | 50,000 | Low | +900% |
| project planning software | 50,000 | Low | +900% |
| pmo software | 50,000 | Low | +900% |
| construction project management | 5,000 | Low | 0% |
| ai for project management | 5,000 | Medium | 0% |
| task management software | 5,000 | Low | -90% |
| project management tool | 5,000 | Low | 0% |
| construction scheduling software | 500 | Low | +900% |
| ai project management | 500 | Medium | 0% |
| construction project management platform | 500 | Low | +9900% |

---

## 20 SEO Tasks

### Critical Fixes

- [ ] **Task 1 — Fix JSON-LD script type bug**
  - File: `app/page.tsx:70`
  - Change `type="application/ld+json "` → `type="application/ld+json"` (remove trailing space)
  - Impact: This silently breaks all structured data Google reads from the homepage

- [ ] **Task 2 — Rewrite global meta title**
  - File: `app/layout.tsx:10`
  - Current: `"SPACE LEAN | Digital Construction Brain — AI Construction Scheduling"`
  - Target: `"Space Lean | AI Construction Scheduling & Project Management Software"`
  - Reason: "Digital Construction Brain" has near-zero search volume; targets "construction scheduling software" (500/mo, +900% YoY) and "AI project management software"

- [ ] **Task 3 — Rewrite global meta description**
  - File: `app/layout.tsx:11`
  - Include: "construction project management software", "AI project management", "project planning software", "construction scheduling"
  - Example: `"Space Lean is AI-powered construction project management software that auto-generates schedules, plans tasks, and optimises crew allocation — built for construction teams in 2026."`

- [ ] **Task 4 — Replace global meta keywords with CSV-matched terms**
  - File: `app/layout.tsx:13`
  - Replace branded/niche terms with: `"construction scheduling software"`, `"AI project management software"`, `"construction project management"`, `"project planning software"`, `"task management software"`, `"construction software"`, `"AI for project management"`, `"project scheduling software"`, `"construction project management platform"`, `"construction management system"`

---

### High-Impact Content & Schema

- [ ] **Task 5 — Add FAQ structured data (JSON-LD)**
  - File: `app/page.tsx` — add alongside the existing `softwareSchema`
  - Add `FAQPage` schema with keyword-matched questions:
    - "What is construction scheduling software and how does it work?"
    - "How is AI used in project management?"
    - "What does construction project management software include?"
  - Targets: 500/mo, 5,000/mo, 5,000/mo respectively

- [ ] **Task 6 — Rewrite FAQ questions to match search intent**
  - File: `components/FAQ.tsx:7`
  - Replace 5 generic questions with:
    1. "What is construction scheduling software and how does it work?" → targets 500/mo
    2. "How is AI used in project management?" → targets 5,000/mo "ai for project management"
    3. "What does construction project management software include?" → targets 5,000/mo
    4. "Is there a free construction project management software?" → targets "free project management software for construction"
    5. "How does Space Lean compare to Primavera P6 for scheduling?" → targets comparison intent

- [ ] **Task 7 — Add AggregateRating schema to homepage**
  - File: `app/page.tsx`
  - Add `SoftwareApplication` + `AggregateRating` JSON-LD
  - Star ratings appear in SERPs and significantly improve CTR for software listings
  - Example: `"ratingValue": "4.8", "reviewCount": "24"`

- [ ] **Task 8 — Add BreadcrumbList schema to all inner pages**
  - Files: `app/pricing/page.tsx`, `app/blogs/[slug]/page.tsx`, `app/solutions/[slug]/page.tsx`
  - Breadcrumbs appear in Google SERPs and improve click-through rate on non-homepage URLs

---

### Page-Level Metadata Optimization

- [ ] **Task 9 — Optimize pricing page metadata**
  - File: `app/pricing/page.tsx`
  - Title: `"Construction Project Management Software Pricing | Space Lean"`
  - Description: include "free project management" (50/mo, Medium), "project management software for contractors" (50/mo), "simple project management software" (50/mo)

- [ ] **Task 10 — Optimize solutions page metadata for construction keywords**
  - File: `app/solutions/[slug]/page.tsx`
  - Add `generateMetadata` function with slug-specific titles/descriptions
  - Priority slugs:
    - `construction-scheduling-software` → targets 500/mo, +900% YoY
    - `construction-project-management` → targets 5,000/mo, Low competition

- [ ] **Task 11 — Optimize compare pages metadata**
  - File: `app/compare/[slug]/page.tsx`
  - Target: "Primavera P6 alternative" and "Synchro 4D alternative"
  - Already referenced in existing keywords array but no page metadata targets them
  - High commercial intent — users searching alternatives are ready to buy

- [ ] **Task 12 — Add metadata to the tool page**
  - File: `app/tool/page.tsx`
  - This page is not in the sitemap at all
  - Add `export const metadata` targeting:
    - "AI project management tool" (5,000/mo)
    - "project scheduling software" (500/mo)

---

### Sitemap & Crawlability

- [ ] **Task 13 — Add missing pages to sitemap**
  - File: `app/sitemap.ts`
  - Add: `/about`, `/compare` (and all compare slugs), `/security`, `/tool`, `/privacy`, `/terms`
  - Google cannot discover and index these pages without sitemap entries

- [ ] **Task 14 — Add `hreflang` tag for the Indian market**
  - File: `app/layout.tsx:79`
  - All 200+ keywords in the CSV show INR currency — primary market is India
  - Add inside `<head>`:
    ```html
    <link rel="alternate" hreflang="en-IN" href="https://spacelean.ai" />
    <link rel="alternate" hreflang="en" href="https://spacelean.ai" />
    ```
  - Signals to Google India to prioritise pages in Indian SERPs

---

### New Content Pages

- [ ] **Task 15 — Blog post: "Best Construction Scheduling Software in 2026"**
  - File: add to `lib/blog-data.ts`, create in `app/blogs/`
  - Target keywords:
    - "construction scheduling software" (500/mo, +900% YoY)
    - "construction scheduling programs" (500/mo, +900% YoY)
    - "construction management scheduling software" (500/mo, +900% YoY)
  - Entire cluster is in the highest-growth niche in the CSV

- [ ] **Task 16 — Blog post: "AI for Project Management: Complete Guide 2026"**
  - Target keywords:
    - "ai for project management" (5,000/mo, Medium)
    - "ai project management" (500/mo, Medium)
    - "ai and project management" (5,000/mo, Medium)
    - "ai based project management" (50/mo, Medium)
    - "ai in construction project management" (50/mo, Medium)
  - One pillar post can rank for this entire cluster

- [ ] **Task 17 — New solution page: "Task Management Software"**
  - URL: `/solutions/task-management-software`
  - Target: "task management" (50,000/mo, Low competition, +900% YoY) — highest-volume keyword in the entire CSV
  - Include feature breakdown, use cases, and CTA for construction teams

- [ ] **Task 18 — New solution page: "Project Planning Software"**
  - URL: `/solutions/project-planning-software`
  - Target:
    - "project planning software" (50,000/mo, Low competition, +900% YoY)
    - "project planning" (5,000/mo, Low competition)
    - "project planning and scheduling" (500/mo, Low competition)
  - Second-highest volume keyword cluster in the CSV

---

### On-Page Content Signals

- [ ] **Task 19 — Add keyword-rich alt text to all images and 3D model**
  - File: `components/HeroSection.tsx:492`
  - Current alt: `"3D building model"`
  - Target alt: `"AI construction scheduling software — 3D building model from Space Lean"`
  - Review all `<img>` tags site-wide for missing or generic alts
  - Alt text is a direct ranking signal for image search and page context

- [ ] **Task 20 — Add internal linking with keyword-rich anchor text**
  - Files: `components/FAQ.tsx`, `components/Footer.tsx`, `components/FeaturesGrid.tsx`
  - Add links using exact/partial-match anchor text:
    - `"construction scheduling software"` → `/solutions/construction-scheduling`
    - `"AI project management"` → `/solutions/ai-project-management`
    - `"project planning software"` → `/solutions/project-planning-software`
  - Footer and FAQ are lowest-effort, highest-leverage placement spots

---

## Priority Order

| Priority | Task | Effort | Impact |
|---|---|---|---|
| 1 | Task 1 — Fix JSON-LD bug | 5 min | High |
| 2 | Task 2 — Rewrite meta title | 5 min | High |
| 3 | Task 3 — Rewrite meta description | 5 min | High |
| 4 | Task 13 — Fix sitemap | 20 min | High |
| 5 | Task 5 — Add FAQ schema | 30 min | High |
| 6 | Task 6 — Rewrite FAQ questions | 30 min | Medium |
| 7 | Task 4 — Fix meta keywords | 10 min | Medium |
| 8 | Task 14 — Add hreflang | 10 min | Medium |
| 9 | Task 7 — AggregateRating schema | 20 min | Medium |
| 10 | Task 8 — BreadcrumbList schema | 30 min | Medium |
| 11 | Task 9 — Pricing page metadata | 15 min | Medium |
| 12 | Task 10 — Solutions metadata | 30 min | Medium |
| 13 | Task 11 — Compare page metadata | 20 min | Medium |
| 14 | Task 12 — Tool page metadata | 15 min | Medium |
| 15 | Task 19 — Alt text audit | 30 min | Medium |
| 16 | Task 20 — Internal linking | 45 min | Medium |
| 17 | Task 17 — Task management page | 2 hrs | High (long-term) |
| 18 | Task 18 — Project planning page | 2 hrs | High (long-term) |
| 19 | Task 15 — Blog: scheduling software | 3 hrs | High (long-term) |
| 20 | Task 16 — Blog: AI project mgmt | 3 hrs | High (long-term) |
