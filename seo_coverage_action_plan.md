# SEO Coverage Action Plan — spacelean.ai
**Date:** July 8, 2026 | **Source:** Google Search Console Coverage Report

---

## 📊 Current Situation Summary

| Issue | Status | Pages Affected |
|---|---|---|
| Not found (404) | ❌ Failed | 7 pages |
| Excluded by `noindex` tag | ⚠️ Excluded | 1 page |
| Crawled — currently not indexed | 🟡 Started | 6 pages |
| Discovered — currently not indexed | ⬜ N/A | 0 pages |

> [!IMPORTANT]
> All issues began appearing on **June 13, 2026** — investigate what site changes were deployed around that date (redeployment, routing changes, or CMS update).

---

## Issue 1 — Not Found (404) · 7 Pages · ❌ CRITICAL

### Problem
7 pages on `spacelean.ai` are returning HTTP 404. Google crawled them, they don't exist, and Google is now marking them as **Failed**. These pages are losing any SEO equity they once had.

**Root Cause:** Pages were deleted or moved without redirects — likely tied to the June 13 site change.

---

### Fix Option A — 301 Redirects (Most Common Approach)
> Used by: **Shopify, HubSpot, Mailchimp**

Set up permanent redirects from each dead URL to the closest live equivalent page.

```js
// next.config.js
async redirects() {
  return [
    { source: '/old-path', destination: '/new-path', permanent: true },
    { source: '/old-blog/:slug', destination: '/blog/:slug', permanent: true },
  ]
}
```

**Steps:**
1. Export all 7 URLs from GSC → Indexing → Pages → "Not found (404)"
2. Map each dead URL to its best matching live page
3. Add 301 redirects in `next.config.js` or your server config
4. Remove the dead URLs from `sitemap.xml`
5. Fix all internal links that reference the old URLs
6. Click "Validate Fix" in GSC

---

### Fix Option B — Restore the Deleted Pages
> Used by: **Medium, Wikipedia, NY Times**

Instead of redirecting, bring the pages back at the exact same URL. Best if the content is still valuable and was removed by mistake.

**Steps:**
1. Check git history or CMS to recover deleted page content
2. Re-publish the pages at their original URLs
3. Ensure they return HTTP 200 with full content
4. Request indexing via GSC URL Inspection tool

---

### Fix Option C — Consolidate + Canonical (For Duplicate/Merged Content)
> Used by: **Airbnb, Booking.com, Atlassian**

If the 404 pages had content that was merged into another page, use a canonical tag on the destination page pointing to itself, and set up 301s from the old URLs. This also passes link equity cleanly.

```html
<!-- On the destination/merged page -->
<link rel="canonical" href="https://spacelean.ai/new-unified-page" />
```

---

### ✅ Best Approach for spacelean.ai
**Option A (301 Redirects)** is the recommended fix. It's the fastest to implement, preserves link equity, and is the industry standard. Only use Option B if content was deleted by mistake. Option C is relevant only if pages were intentionally merged.

---

## Issue 2 — Excluded by `noindex` Tag · 1 Page · ⚠️ ACTION NEEDED

### Problem
**URL:** `https://spacelean.ai/terms` (Last crawled: Jun 21, 2026)

The Terms page has a `noindex` directive. Google found it, crawled it, and is intentionally not indexing it.

---

### Fix Option A — Remove the `noindex` Tag
> Used by: **Notion, Linear, Stripe** (Terms pages indexed for trust/brand signals)

Simply remove the `noindex` meta tag or HTTP header, then request indexing. Terms pages indexed in Google can build brand trust and appear in branded searches.

**Steps:**
1. Run `curl -I https://spacelean.ai/terms` — check for `X-Robots-Tag: noindex` in headers
2. Check the page `<head>` for `<meta name="robots" content="noindex">`
3. Check your Next.js layout for any conditional noindex logic on legal pages
4. Remove the `noindex` directive
5. Ensure `/terms` is NOT blocked in `robots.txt`
6. GSC → URL Inspection → Request Indexing for `https://spacelean.ai/terms`

---

### Fix Option B — Keep `noindex`, Add to `robots.txt` Disallow
> Used by: **Netflix, Uber, many SaaS companies** (prefer clean index, exclude legal pages)

Intentionally keep Terms out of the index — it frees up crawl budget and keeps search results focused on product pages. Strengthen with a `robots.txt` disallow.

```txt
# robots.txt
User-agent: *
Disallow: /terms
Disallow: /privacy
```

**Steps:**
1. Confirm the `noindex` is intentional
2. Add `/terms` to `robots.txt` to save crawl budget
3. No GSC action needed — this is working as expected

---

### Fix Option C — Use Canonical to a Different Page
> Used by: Some companies that have a marketing-friendly "legal" landing page

If you want a Terms *summary* page indexed (friendlier version) but not the full legal page, set canonical on `/terms` pointing to a `/legal` summary page.

```html
<!-- on /terms -->
<link rel="canonical" href="https://spacelean.ai/legal" />
```

---

### ✅ Best Approach for spacelean.ai
**Option A (Remove noindex)** is recommended — unless the noindex was intentional. For a lean/startup brand, having the Terms page indexed builds trust and can show up in branded searches like "spacelean.ai terms". Option B is perfectly valid if you prefer a clean index focused only on product content.

---

## Issue 3 — Crawled, Currently Not Indexed · 6 Pages · 🟡 MEDIUM PRIORITY

### Problem
Google has crawled 6 pages but decided on its own not to index them. This is a **content quality signal** — Google doesn't consider the content valuable enough.

---

### Fix Option A — Improve Content Quality (Depth + Uniqueness)
> Used by: **HubSpot, Ahrefs, Moz** — the "content-first" approach

The most sustainable long-term fix. Improve the actual content on each of the 6 pages so Google considers them worthy of indexing.

**Steps:**
1. Export the 6 URLs from GSC → "Crawled - currently not indexed"
2. For each page, check:
   - Word count: aim for **500+ words** of unique, useful content
   - Add FAQs, examples, data, or supporting visuals
   - Ensure a unique `<title>` and compelling `<meta description>`
   - Add structured data (JSON-LD) where applicable
3. Add **internal links** from high-authority pages (homepage, blog) to these pages
4. Resubmit sitemap in GSC after updates
5. Request indexing for each URL via GSC URL Inspection

---

### Fix Option B — Consolidate Thin Pages (Content Pruning)
> Used by: **Backlinko, NerdWallet, Healthline** — "prune to grow" strategy

If the 6 pages are thin/low-value, merge their content into stronger, existing pages and 301 redirect them. Fewer but stronger pages index better than many weak ones.

**Steps:**
1. Identify which of the 6 pages have overlapping or thin content
2. Merge content into a related, stronger page
3. Set up 301 redirects from the weak pages to the merged destination
4. Update internal links to point to the new merged page
5. Remove the pruned URLs from the sitemap

---

### Fix Option C — Wait + Boost with Internal Links (Low-Effort)
> Used by: **Many content-heavy sites** for new pages that just need time

Sometimes Google just needs more time and signals. Add more internal links pointing to these pages from your homepage or high-traffic pages to boost their authority without changing content.

**Steps:**
1. Add 2–3 internal links to each of the 6 pages from high-traffic pages
2. Ensure the pages are in `sitemap.xml` with correct `<lastmod>` dates
3. Wait 4–6 weeks and monitor GSC for indexing progress
4. If still not indexed after 6 weeks, escalate to Option A or B

---

### ✅ Best Approach for spacelean.ai
**Option A (Improve Content Quality)** is the best long-term fix — it solves the root cause. **Option C** is a good starting point if the pages are already decent quality — try it first for 4 weeks before committing to a full rewrite. **Option B** is best if the pages are genuinely thin or redundant.

---

## Priority Order & Timeline

| Priority | Issue | Best Fix | Timeline |
|---|---|---|---|
| 🔴 **P1** | 404 errors (7 pages) | Option A — 301 Redirects | **This week** |
| 🟠 **P2** | `noindex` on `/terms` | Option A — Remove noindex | **This week** |
| 🟡 **P3** | Crawled not indexed (6 pages) | Option C first → Option A if needed | **2–6 weeks** |

---

## Quick Wins Checklist

- [ ] Export all 404 URLs from GSC and map them to redirect targets
- [ ] Add 301 redirects in `next.config.js` for all 7 dead pages
- [ ] Update `sitemap.xml` — remove dead URLs, add correct live URLs
- [ ] Run `curl -I https://spacelean.ai/terms` — confirm noindex source
- [ ] Remove `noindex` from `/terms` if unintentional → request indexing
- [ ] Add internal links to the 6 "crawled not indexed" pages from high-traffic pages
- [ ] Improve content depth on the 6 weak pages (500+ words, unique value)
- [ ] Resubmit sitemap in GSC after all changes
- [ ] Click "Validate Fix" in GSC for the 404 issue after redirects are live
- [ ] Monitor GSC Coverage report weekly for the next 4–6 weeks
