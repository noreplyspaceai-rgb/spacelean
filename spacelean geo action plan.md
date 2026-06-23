# SpaceLean GEO Action Plan

Generative Engine Optimization plan for improving SpaceLean's visibility in AI Overviews, AI Mode, ChatGPT Search, and answer-style search experiences.

## Source Notes

- Google says AI Overviews and AI Mode use the same foundational Search requirements: pages must be indexable, eligible for snippets, crawlable, internally discoverable, useful, and supported by visible text and matching structured data. Source: https://developers.google.com/search/docs/appearance/ai-features
- Google says there is no special schema or machine-readable file required for AI features. Treat `llms.txt` as optional documentation, not a substitute for crawlable HTML, sitemap, internal links, and structured data.
- Google recommends people-first content with original information, expertise, trust signals, and substantial value beyond obvious summaries. Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google recommends JSON-LD for structured data when practical, and structured data must be valid, complete, and consistent with visible page content. Source: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- OpenAI says `OAI-SearchBot` is used to surface sites in ChatGPT search results, while `GPTBot` is for training. These can be handled independently in `robots.txt`. Source: https://platform.openai.com/docs/bots

## GEO Objective

Make SpaceLean the page that generative engines cite when users ask questions like:

- "What is AI construction scheduling software?"
- "Best AI project management software for construction teams"
- "How does BIM-to-schedule automation work?"
- "SpaceLean vs Primavera P6 / Synchro / Alice Technologies"
- "Construction project management software for GCs"
- "AI scheduling software for owners and consultants"

Success means SpaceLean pages are not just ranking, but being used as supporting sources in AI-generated answers.

## Current Site Context

Relevant existing assets:

- Core product pages: `/`, `/features`, `/space-lean-core`, `/pricing`, `/tool`
- Solution pages: `/solutions`, `/solutions/for-gcs`, `/solutions/for-owners`, `/solutions/for-consultants`, `/solutions/industrial`, `/solutions/infrastructure`, `/solutions/commercial`
- Comparison pages: `/compare/*`
- Blog pages in `lib/blog-data.ts`
- Existing schema in `app/page.tsx`, `app/tool/page.tsx`, `app/features/page.tsx`, `app/blogs/[slug]/page.tsx`, `app/pricing/page.tsx`, and solution pages
- Existing SEO docs: `SEO-TASKS.md`, `public/seo/SEO-30-Tasks-Traffic-Growth-Plan.md`, `GSC-COVERAGE-ISSUE-BOARD-2026-06-23.md`

Known blockers to address first:

- GSC currently reports 6 `Not found (404)` URLs and 5 `Crawled - currently not indexed` URLs.
- Some high-value informational pages are crawled but not indexed.
- One stale internal link exists: `/blogs/kanban-guide-project-teams`.
- `/security` is crawled but not indexed and appears intentionally marked `noindex`; decide whether trust visibility matters more than keeping it out of the index.

## Priority 0 - Crawl, Index, And Citation Eligibility

These tasks are prerequisites for GEO.

- [ ] Complete `GSC-COVERAGE-ISSUE-BOARD-2026-06-23.md`.
- [ ] Add 301 redirects for old useful blog slugs:
  - `/blogs/managing-multiple-projects-sanity` -> `/blogs/manage-multiple-projects`
  - `/blogs/delegation-mastery-leaders` -> `/blogs/delegation-guide-leaders`
  - `/blogs/spacelean-vs-notion-ai-task-management-comparison` -> `/blogs/spacelean-vs-notion-intelligent-workspace` or `/compare/spacelean-vs-notion`
- [ ] Fix the local stale link `/blogs/kanban-guide-project-teams`.
- [ ] Verify `/solutions/remote-teams` returns 200 in production.
- [ ] Decide the destination for `/auth/register`; likely `/request-a-demo` unless a real signup route exists.
- [ ] Confirm every sitemap URL returns 200 and is indexable.
- [ ] Confirm canonical URLs point to the final live URL.
- [ ] Make sure important content is visible in server-rendered text, not only inside videos, images, animations, or canvas.

## Priority 1 - AI Crawler Access

Goal: allow discovery by search and answer engines while keeping a deliberate training policy.

- [ ] Keep `User-agent: *` allowed for public marketing pages.
- [ ] Add explicit `OAI-SearchBot` allowance in `app/robots.ts` and `public/robots.txt`.
- [ ] Decide whether to allow or disallow `GPTBot`. For GEO visibility in ChatGPT Search, `OAI-SearchBot` matters more directly than `GPTBot`.
- [ ] Do not block important pages behind CDN bot protection, login walls, JS-only rendering, or aggressive WAF rules.
- [ ] Test production `robots.txt` after deploy.

Recommended robots policy:

```txt
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/

Sitemap: https://spacelean.ai/sitemap.xml
```

If the business does not want model-training use, change only `GPTBot` to `Disallow: /` while keeping `OAI-SearchBot` allowed.

## Priority 2 - Entity And Trust Layer

Generative engines need a clear understanding of who SpaceLean is, what category it belongs to, and why it is trustworthy.

- [ ] Add a concise entity statement near the top of the homepage:
  - "SpaceLean is AI construction scheduling software that turns BIM and project inputs into adaptive schedules, lookahead plans, and risk forecasts for construction teams."
- [ ] Add an "About SpaceLean" fact block to the homepage and `/about`:
  - Company name
  - Product category
  - Primary users: GCs, owners, consultants, AEC teams
  - Core capabilities: BIM-to-schedule, AI sequencing, Monte Carlo risk, crew optimization, lookahead planning
  - Market focus: construction, infrastructure, industrial, commercial projects
- [ ] Add or strengthen `Organization` JSON-LD with `sameAs`, logo, URL, contact details, and founder/company profile links when available.
- [ ] Add `SoftwareApplication` JSON-LD on homepage, pricing, and product pages.
- [ ] Consider indexing `/security` if it is a strong trust asset; otherwise remove it from GEO/internal citation priority.
- [ ] Add author/reviewer metadata to blog posts, especially technical construction and AI scheduling articles.

## Priority 3 - Answer-Ready Page Structure

Every high-value page should contain answer blocks that can be quoted, summarized, or cited.

Create a standard page pattern:

- Definition answer: 40-70 words directly answering the main query.
- "How it works" steps: 3-6 concise steps.
- Use-case table: user type, problem, SpaceLean capability, outcome.
- Comparison table: old/manual process vs SpaceLean.
- Evidence block: metrics, examples, screenshots, workflow, or product proof.
- FAQ block: 4-6 real questions.
- Internal links to related product, solution, comparison, and blog pages.

Apply this pattern first to:

- [ ] `/`
- [ ] `/space-lean-core`
- [ ] `/solutions/for-gcs`
- [ ] `/solutions/for-owners`
- [ ] `/solutions/for-consultants`
- [ ] `/solutions/industrial`
- [ ] `/features`
- [ ] `/pricing`
- [ ] `/tool`
- [ ] `/compare`

## Priority 4 - High-Intent GEO Content Hubs

Create or upgrade pages that answer broad, multi-step prompts generative engines commonly fan out into subqueries.

### Hub 1: AI Construction Scheduling Software

Target URL: `/solutions/ai-construction-scheduling-software` or upgrade existing construction scheduling page if present.

Questions to answer:

- What is AI construction scheduling software?
- How does AI scheduling differ from Primavera P6 or Microsoft Project?
- How does BIM-to-schedule automation work?
- What data is required to generate an AI schedule?
- Can AI scheduling support lookahead planning?
- How do Monte Carlo simulation and critical path prediction help construction teams?

Required assets:

- [ ] Definition block
- [ ] Process diagram or workflow section
- [ ] Manual vs AI scheduling table
- [ ] GC/owner/consultant use cases
- [ ] FAQ schema
- [ ] SoftwareApplication or Product schema
- [ ] Links from homepage, footer, `/space-lean-core`, `/solutions/for-gcs`, and relevant blogs

### Hub 2: BIM To Schedule Automation

Target URL: `/solutions/bim-to-schedule-automation`.

Questions to answer:

- How can BIM models generate construction schedules?
- Which BIM formats does SpaceLean support?
- How are dependencies inferred from geometry?
- How are zones, trades, and sequencing constraints handled?
- What are the limits of BIM-based scheduling?

Required assets:

- [ ] Step-by-step workflow
- [ ] Supported input table
- [ ] BIM object -> task -> dependency example
- [ ] FAQ schema
- [ ] Internal links from `/space-lean-core` feature pages

### Hub 3: Construction Project Management Software

Target URL: `/solutions/construction-project-management-software`.

Questions to answer:

- What is construction project management software?
- What features should GCs look for?
- How does AI improve construction project management?
- What is the difference between scheduling, project controls, and field coordination?
- How should teams evaluate construction PM software?

Required assets:

- [ ] Buyer guide table
- [ ] Feature checklist
- [ ] GC, owner, consultant sections
- [ ] Pricing CTA
- [ ] Comparison links

### Hub 4: Comparison And Alternatives

Upgrade `/compare/*` pages into answer-ready citation pages.

Priority comparisons:

- [ ] SpaceLean vs Primavera P6
- [ ] SpaceLean vs Synchro 4D
- [ ] SpaceLean vs Alice Technologies
- [ ] SpaceLean vs Autodesk Construction Cloud
- [ ] SpaceLean vs Oracle Aconex

Each comparison must include:

- One-sentence verdict
- Best-for table
- Feature comparison table
- Pricing or implementation complexity section where accurate
- Migration/workflow section
- FAQ schema
- Breadcrumb schema

## Priority 5 - Structured Data Roadmap

Structured data should describe what is already visible on the page.

- [ ] Homepage: `Organization`, `SoftwareApplication`, `FAQPage`, `WebSite`
- [ ] Product pages: `SoftwareApplication`, `FAQPage`, `BreadcrumbList`
- [ ] Pricing: `Product` or `SoftwareApplication` with offer details that match visible pricing
- [ ] Blog posts: `Article`, `FAQPage`, `BreadcrumbList`; `HowTo` only when the post genuinely contains step-by-step instructions
- [ ] Compare pages: `Article` or `WebPage`, `FAQPage`, `BreadcrumbList`
- [ ] Video-heavy pages: `VideoObject` with thumbnail, duration, upload date, and transcript or visible summary
- [ ] Validate with Google's Rich Results Test before deployment.

## Priority 6 - Evidence And Originality

GEO favors pages that can support a generated answer with specific, attributable claims.

- [ ] Add product screenshots to key pages with descriptive alt text.
- [ ] Add short "example output" sections showing schedule generation, risk forecast, lookahead plan, or crew optimization outputs.
- [ ] Add original mini-benchmarks:
  - Manual schedule build time vs AI-generated schedule draft time
  - Number of activities generated from sample BIM scope
  - Lookahead plan creation time
  - Risk detection examples
- [ ] Add founder/team expertise notes on construction, BIM, AI, project controls, and scheduling.
- [ ] Add customer or pilot proof where available.
- [ ] Avoid unsupported numbers unless they are clearly labeled as examples, estimates, or pilot results.

## Priority 7 - Internal Link Graph For AI Fan-Out

Generative search often expands a query into subtopics. Internal links should help crawlers follow that graph.

Add contextual links between:

- Homepage -> AI construction scheduling hub
- Homepage -> `/space-lean-core`
- `/space-lean-core` -> each core feature page
- Core feature pages -> relevant solution pages
- Solution pages -> relevant comparison pages
- Blog explainers -> product and solution pages
- Compare pages -> pricing and demo CTA
- Footer -> top GEO hubs, not every low-priority article

Anchor text examples:

- `AI construction scheduling software`
- `BIM-to-schedule automation`
- `Monte Carlo critical path analysis`
- `construction project management software`
- `Primavera P6 alternative`
- `Synchro 4D alternative`
- `AI scheduling for general contractors`

## Priority 8 - Refresh Crawled-But-Not-Indexed Pages

From GSC, these pages need explicit action:

| URL | GEO Decision | Action |
|---|---|---|
| `/blogs/goal-setting-okrs-teams` | Keep | Add stronger answer block, author/reviewer trust, FAQ schema, internal links from OKR posts |
| `/blogs/agile-methodology-beginners-guide` | Keep if tied to construction/product execution | Add construction-specific agile examples and links from Scrum/Kanban/Lean posts |
| `/blogs/smart-calendar-scheduling-tips` | Consolidate or reposition | Make it about project scheduling and lookahead planning, or canonical/redirect to stronger scheduling content |
| `/security` | Decide | Index if it strengthens trust; otherwise keep noindex and deprioritize in sitemap/internal GEO links |
| `/blogs/digital-minimalism-professionals` | Consolidate or reposition | Add SpaceLean relevance or merge into a broader productivity guide |

## Priority 9 - Measurement

Track both classic search and AI referral signals.

- [ ] Google Search Console:
  - indexed page count
  - impressions/clicks for question-style queries
  - performance of target hubs
  - validation status for 404 and crawled-not-indexed issues
- [ ] Analytics:
  - referrals from ChatGPT, Perplexity, Copilot, Gemini, and other AI surfaces where visible
  - assisted conversions from comparison and solution pages
  - engagement time for AI-targeted answer pages
- [ ] Manual monthly prompt tests:
  - "best AI construction scheduling software"
  - "what is BIM-to-schedule automation"
  - "Primavera P6 alternative for AI scheduling"
  - "construction scheduling software for general contractors"
  - "SpaceLean vs Alice Technologies"
- [ ] Record whether SpaceLean appears, whether it is cited, which page is cited, and which competitors are named.

## 30-Day Execution Plan

- [ ] Fix all known 404s and stale internal links.
- [ ] Confirm sitemap has only canonical 200-status indexable URLs.
- [ ] Update robots policy for `OAI-SearchBot`.
- [ ] Add entity statement and fact block to homepage.
- [ ] Upgrade `/space-lean-core` with answer-ready sections.
- [ ] Upgrade `/solutions/for-gcs`, `/solutions/for-owners`, and `/solutions/for-consultants`.
- [ ] Add/validate Organization, SoftwareApplication, FAQ, Article, and Breadcrumb JSON-LD where already intended.
- [ ] Refresh the 5 crawled-but-not-indexed pages or decide consolidation/noindex.

## 60-Day Execution Plan

- [ ] Publish AI construction scheduling hub.
- [ ] Publish BIM-to-schedule automation hub.
- [ ] Publish construction project management software hub.
- [ ] Upgrade top comparison pages for AI answer inclusion.
- [ ] Add original evidence blocks and product screenshots to all top GEO pages.
- [ ] Add internal links from blog posts into hubs and solution pages.
- [ ] Build a lightweight route/link audit to catch stale internal URLs before deployment.

## 90-Day Execution Plan

- [ ] Publish 4-6 support articles answering narrow fan-out questions.
- [ ] Add video transcripts and VideoObject schema where video supports the answer.
- [ ] Add customer proof, case studies, pilot metrics, or implementation stories.
- [ ] Review GSC trends for question queries and update pages with weak engagement.
- [ ] Run monthly AI prompt tests and update pages based on citation gaps.
- [ ] Build a public "SpaceLean glossary" for construction AI, BIM scheduling, lookahead planning, Monte Carlo risk, critical path, and project controls terms.

## Definition Of Done

- [ ] No unresolved GSC 404 issues for public marketing URLs.
- [ ] Target GEO pages are indexed and eligible for snippets.
- [ ] `OAI-SearchBot` can crawl public content.
- [ ] Top product and solution pages have clear answer blocks, visible text, trust proof, and valid JSON-LD.
- [ ] Top comparison pages include verdicts, tables, FAQs, and internal links.
- [ ] Monthly prompt tracking shows SpaceLean appearing or being cited for at least 5 target AI-search prompts.

