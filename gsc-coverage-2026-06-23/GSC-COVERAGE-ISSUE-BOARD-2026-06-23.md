# GSC Coverage Issue Board - 2026-06-23

Source export: `https___spacelean.ai_-Coverage-2026-06-23.zip`

Unzipped folder: `gsc-coverage-2026-06-23/`

GSC scope: `All known pages`

## Export Summary

| Issue | Source | Validation | Pages | Priority |
|---|---|---|---:|---|
| Not found (404) | Website | Not Started | 6 | P0 |
| Crawled - currently not indexed | Google systems | Not Started | 5 | P1 |
| Discovered - currently not indexed | Google systems | N/A | 0 | Monitor |

Indexing trend from `Chart.csv`: indexed pages dropped from 20 on 2026-04-11 to 13 on 2026-06-12, while not-indexed pages increased from 4 to 11 over the same period.

## Important Finding

The GSC zip export only included issue counts, so the affected URLs were added manually from Search Console.

One definite stale internal URL was found locally:

| Broken URL | Found in | Likely fix |
|---|---|---|
| `/blogs/kanban-guide-project-teams` | `lib/blog-data.ts:3286` | Change to `/blogs/kanban-board-best-practices-teams` or create the missing blog slug |

## Goals

- Remove all 6 reported 404 URLs from Google's crawl path.
- Improve or deindex the 5 crawled-but-not-indexed URLs based on search value.
- Submit a clean sitemap and start GSC validation after fixes are deployed.
- Prevent new stale internal links from being shipped.

## Phase 1 - Confirm Affected URLs

- [x] Open Google Search Console > Indexing > Pages > Not found (404).
- [x] Export or copy the 6 affected URLs.
- [x] Open Google Search Console > Indexing > Pages > Crawled - currently not indexed.
- [x] Export or copy the 5 affected URLs.
- [x] Add the URLs to the tables below.
- [x] For every URL, mark the intended outcome: `restore`, `redirect`, `remove from source`, `noindex`, or `content upgrade`.

### 404 URL Triage

| URL | Source/cause | Decision | Implementation file | Status |
|---|---|---|---|---|
| `/blogs/managing-multiple-projects-sanity` | Old blog slug. Closest live slug appears to be `/blogs/manage-multiple-projects`. Last crawled May 16, 2026. | 301 redirect | `next.config.ts` | Fixed - validate after deploy |
| `/blogs/delegation-mastery-leaders` | Old blog slug. Closest live slug appears to be `/blogs/delegation-guide-leaders`. Last crawled May 12, 2026. | 301 redirect | `next.config.ts` | Fixed - validate after deploy |
| `/blogs/feedback-culture-teams-guide` | Removed or missing blog post. Last crawled May 10, 2026. | 301 redirect to closest communication article | `next.config.ts` | Fixed - validate after deploy |
| `/solutions/remote-teams` | GSC reported 404, but repo appears to contain a `remote-teams` solution. Last crawled Apr 14, 2026. | Verify production route; restore deploy if missing | `lib/solutions-data.ts`, deploy config | Build verified |
| `/blogs/spacelean-vs-notion-ai-task-management-comparison` | Old blog slug. Closest live slug appears to be `/blogs/spacelean-vs-notion-intelligent-workspace`; compare page also exists at `/compare/spacelean-vs-notion`. Last crawled Mar 10, 2026. | 301 redirect to best matching Notion page | `next.config.ts` | Fixed - validate after deploy |
| `/auth/register` | Old app/auth route. Last crawled Feb 25, 2026. | 301 redirect to signup/demo destination, or return intentional 410 if auth is permanently removed | `next.config.ts` | Fixed - validate after deploy |
| `/blogs/kanban-guide-project-teams` | Stale internal link in `lib/blog-data.ts:3286`, not listed in current GSC 404 examples but found locally. | Replace link with `/blogs/kanban-board-best-practices-teams` | `lib/blog-data.ts` | Fixed |

### Crawled But Not Indexed Triage

| URL | Search intent | Index decision | Fix type | Status |
|---|---|---|---|---|
| `/blogs/goal-setting-okrs-teams` | OKR goal-setting guide. Last crawled May 16, 2026. | Keep indexed | Explicit blog robots index/follow; Markdown related-resource links now render as real crawlable anchors; existing FAQ/HowTo/Article/Breadcrumb schema remains active | Fixed - validate after deploy |
| `/blogs/agile-methodology-beginners-guide` | Agile beginner guide. Last crawled Apr 13, 2026. | Keep indexed | Explicit blog robots index/follow; Markdown related-resource links now render as real crawlable anchors; existing FAQ/HowTo/Article/Breadcrumb schema remains active | Fixed - validate after deploy |
| `/blogs/smart-calendar-scheduling-tips` | Calendar scheduling/productivity guide. Last crawled Apr 9, 2026. | Keep indexed for now | Explicit blog robots index/follow; Markdown related-resource links now render as real crawlable anchors; existing FAQ/HowTo/Article/Breadcrumb schema remains active | Fixed - validate after deploy |
| `/security` | Trust/security page. Last crawled Feb 25, 2026. Page metadata currently appears to mark it `noindex`. | Index as trust page | `app/security/page.tsx`, `app/sitemap.ts` | Fixed - validate after deploy |
| `/blogs/digital-minimalism-professionals` | Productivity guide. Last crawled date not shown in pasted example. | Keep indexed for now | Explicit blog robots index/follow; Markdown related-resource links now render as real crawlable anchors; existing FAQ/Article/Breadcrumb schema remains active | Fixed - validate after deploy |

## Phase 2 - Fix 404s

### Task 1: Fix known stale blog link

- [x] Update the internal link in `lib/blog-data.ts`.
- [x] Preferred quick fix: change `/blogs/kanban-guide-project-teams` to `/blogs/kanban-board-best-practices-teams`.
- [ ] Alternative: create a new blog post with slug `kanban-guide-project-teams` if that exact keyword page is desired.
- [x] Add a redirect only if the old URL has impressions, backlinks, or remains in GSC after the internal link is fixed.

### Task 2: Add redirects for valuable removed URLs

Use `next.config.ts` redirects when a missing URL has search value, backlinks, or clear replacement intent.

Suggested pattern:

```ts
async redirects() {
  return [
    {
      source: "/old-url",
      destination: "/best-replacement-url",
      permanent: true,
    },
  ];
}
```

- [x] Map each 404 URL to the closest live page.
- [x] Use 301 redirects for old URLs with a relevant replacement.
- [x] Do not redirect unrelated URLs to the homepage.
- [x] If a URL should not exist and has no value, remove internal links and let it stay 404/410.

Initial redirect map:

| Source | Destination | Reason |
|---|---|---|
| `/blogs/managing-multiple-projects-sanity` | `/blogs/manage-multiple-projects` | Same topic, current live slug |
| `/blogs/delegation-mastery-leaders` | `/blogs/delegation-guide-leaders` | Same topic, current live slug |
| `/blogs/spacelean-vs-notion-ai-task-management-comparison` | `/blogs/spacelean-vs-notion-intelligent-workspace` or `/compare/spacelean-vs-notion` | Same Notion comparison intent |
| `/auth/register` | `/request-a-demo` or current product signup URL | Old auth route |
| `/blogs/feedback-culture-teams-guide` | `/blogs/team-communication-async-sync` | Closest live article for team communication/feedback intent |

### Task 3: Verify generated route coverage

Dynamic route sources:

- Blog pages: `lib/blog-data.ts`
- Solution pages: `lib/solutions-data.ts`
- Compare pages: `lib/compare-data.ts`
- Space Lean Core pages: `components/space-lean-core/data.ts`

Checks:

- [x] Every `/blogs/{slug}` internal link has a matching `blogPosts[].slug`.
- [x] Every `/solutions/{slug}` internal link has a matching `solutions[].slug`.
- [x] Every `/compare/{slug}` internal link has a matching `comparisons[].slug`.
- [x] Every `/space-lean-core/{slug}` internal link has a matching `FEATURES[].slug`.
- [ ] Add a lightweight link-audit script or build check so stale generated-route links fail before deploy.

## Phase 3 - Improve Crawled But Not Indexed URLs

For each affected URL, choose one of these treatments.

### Keep Indexed

Use this when the URL targets a valuable query or product/conversion intent.

- [x] Add or strengthen page-specific metadata.
- [x] Add unique above-the-fold copy that clearly matches the query.
- [x] Add FAQ or BreadcrumbList structured data where relevant.
- [x] Add 3-5 internal links from homepage, footer, relevant blog posts, or related solution pages.
- [ ] Add outbound supporting context only where it improves trust.
- [x] Confirm canonical points to itself.
- [x] Confirm page is not blocked by robots or `noindex`.

### Consolidate

Use this when the URL overlaps heavily with another page.

- [ ] Move unique content into the stronger canonical page.
- [ ] Add a 301 redirect if the weaker page should be removed.
- [ ] Use canonical only if the duplicate page must remain accessible.
- [ ] Remove the weaker page from sitemap if it should not compete for indexing.

### Noindex

Use this for utility, legal, thin, or low-search-value pages that should not compete for crawl budget.

- [ ] Add `robots: { index: false, follow: true }` in page metadata.
- [ ] Remove from sitemap.
- [ ] Keep internal links only where needed for users.

## Phase 4 - Sitemap And Robots Validation

Current sitemap already includes key route families:

- Static: `/`, `/features`, `/space-lean-core`, `/pricing`, `/blogs`, `/solutions`, `/compare`, `/about`, `/tool`, `/request-a-demo`
- Dynamic: blog, solution, core feature, and comparison slugs

Validation tasks:

- [x] Confirm whether `/security`, `/privacy`, and `/terms` should stay out of sitemap because they are currently marked `noindex`.
- [x] Make sure every URL in `sitemap.xml` returns 200.
- [x] Make sure no `noindex` URL appears in `sitemap.xml`.
- [ ] Make sure `robots.txt` and `app/robots.ts` remain aligned.
- [ ] Resubmit `https://spacelean.ai/sitemap.xml` in GSC after deploy.

## Phase 5 - Deployment Verification

Run locally:

```powershell
npm run build
```

After deploy:

- [ ] Open each fixed URL and replacement URL in production.
- [ ] Confirm 301 redirects with browser devtools or `curl -I`.
- [ ] Inspect sitemap: `https://spacelean.ai/sitemap.xml`.
- [ ] Inspect robots: `https://spacelean.ai/robots.txt`.
- [ ] Use GSC URL Inspection for each fixed URL.
- [ ] Click "Validate Fix" for the 404 issue.
- [ ] Click "Validate Fix" for Crawled - currently not indexed only after content/canonical/internal-link changes are live.

## Definition Of Done

- [ ] All 6 404 URLs are either restored, redirected to a relevant page, or removed from internal crawl paths.
- [ ] All 5 crawled-but-not-indexed URLs have an explicit keep/consolidate/noindex decision.
- [ ] Sitemap contains only canonical, indexable 200-status URLs.
- [ ] GSC validation has been started for both active issue buckets.
- [ ] A repeat internal link audit finds zero links to missing generated slugs.
