# SEO Plan: Improve Google Ranking for "Clara Lage"

## Current State Assessment

The website is hosted on GitHub Pages at `claramlage.github.io/website/`. It's a static academic personal website with 5 pages: Home, Publications, Talks, Teaching, Resume. Google Analytics is installed. Basic meta tags and canonical URLs are present.

### ✅ Existing Strengths
- Google Analytics (G-2Q50G1CPKN) installed
- Meta description, OG, Twitter card tags present
- Canonical URLs on all pages
- Schema.org WebSite structured data
- Semantic HTML with heading hierarchy
- Responsive design
- Dark/light theme support
- Skip-to-content for accessibility

### ❌ Weaknesses Found
- Thin meta descriptions on subpages ("Resume of Clara Lage." — 20 chars)
- No `sitemap.xml`
- No `robots.txt`
- Google Scholar & ORCID links are dead (`href="#"`)
- Schema is only `WebSite` type, missing `Person`/`Researcher` structured data
- Images have generic alt text ("Banner image", "Site avatar")
- No `Person` or `Article` structured data
- Share buttons use relative URLs (`./`)
- No breadcrumb structured data
- Subpage content is relatively thin
- No contextual internal linking between pages

---

## Phase 1: Technical SEO Foundations

### [ ] 1.1 Add `sitemap.xml`
Create a `sitemap.xml` listing all 5 pages with proper priorities and lastmod dates. This helps Google discover and index every page.

### [ ] 1.2 Add `robots.txt`
Create a `robots.txt` referencing the sitemap and allowing all crawlers.

### [ ] 1.3 Upgrade Schema.org to `Person` type
Replace the generic `WebSite` JSON-LD with a `Person` schema that includes:
- Name, job title, affiliation (Centrale Lyon, ICJ)
- Email, URL, sameAs links (LinkedIn, Google Scholar, ORCID)
- Description and research areas

### [ ] 1.4 Add `BreadcrumbList` Schema
Add breadcrumb structured data to each page for richer search results.

### [ ] 1.5 Verify Google Search Console
Ensure the site is claimed in Google Search Console (can be done via the existing GA tag or DNS).

---

## Phase 2: On-Page SEO Optimization

### [ ] 2.1 Enrich all meta descriptions
Current descriptions are too short. Expand each:
- **index.html**: Already good (~155 chars) ✅
- **publications.html**: Expand beyond "Journal publications and preprints by Clara Lage."
- **talks.html**: Expand beyond "Talks in academic events by Clara Lage."
- **teaching.html**: Expand beyond "Teaching experience of Clara Lage."
- **resume.html**: Expand beyond "Resume of Clara Lage." (currently 20 chars!)

Each description should be 150–160 chars and include "Clara Lage" naturally.

### [ ] 2.2 Improve image alt text
Replace generic alt attributes with descriptive ones:
- `"Banner image"` → `"Clara Lage - Banner showing academic research theme"`
- `"Site avatar"` → `"Photo of Clara Lage, Assistant Professor at Centrale Lyon"`

### [ ] 2.3 Fix broken social links
Update Google Scholar and ORCID links from `href="#"` to actual profile URLs.

### [ ] 2.4 Improve page titles
- index.html: `"Clara Lage, PhD — Assistant Professor at Centrale Lyon"` (more descriptive than "Professional website")
- Other pages: Add research keywords, e.g. `"Publications — Clara Lage | Sparse Optimization & Inverse Problems"`

### [ ] 2.5 Add contextual internal links
Add contextual text links between pages (e.g., on the publications page, link to talks about those papers).

### [ ] 2.6 Fix sharing URLs
Replace relative `./` share URLs with absolute `https://claramlage.github.io/website/` URLs.

---

## Phase 3: Content & Authority

### [ ] 3.1 Enrich subpage content
- **resume.html**: Add more detailed career narrative, keywords (optimization, inverse problems, sparse coding)
- **talks.html**: Add dates and conference details
- **teaching.html**: Add course descriptions with relevant keywords

### [ ] 3.2 Add "News" section on homepage
There's already a callout block. Keep it updated with fresh content (Google rewards recency).

### [ ] 3.3 Add `Article` structured data to publications
Mark up each publication (or key ones) with `ScholarlyArticle` schema for enhanced search snippets.

### [ ] 3.4 Claim Google Scholar profile
Ensure the Google Scholar profile is verified and linked from the website.

### [ ] 3.5 Build backlinks
- Add the website URL to all academic profiles (LinkedIn, Google Scholar, ORCID, ResearchGate)
- List the website on the Centrale Lyon / ICJ staff page if possible
- Ask collaborators to link from their academic sites

---

## Phase 4: Performance & User Experience

### [ ] 4.1 Enable further preloading
Preload key images (`clara-profile.jpg`, banner images) for faster LCP.

### [ ] 4.2 Check Core Web Vitals
Run Lighthouse audit to identify any performance bottlenecks.

### [ ] 4.3 Add `lastmod` to sitemap
Ensure `sitemap.xml` is updated when content changes.

---

## Priority Summary

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| 🔴 P0 | Sitemap & robots.txt | Low | High |
| 🔴 P0 | Fix broken social links | Low | Medium |
| 🔴 P0 | Person schema | Low | High |
| 🟡 P1 | Enrich meta descriptions | Low | High |
| 🟡 P1 | Improve image alt text | Low | Medium |
| 🟡 P1 | Better page titles | Low | Medium |
| 🟢 P2 | Breadcrumb schema | Medium | Medium |
| 🟢 P2 | Enrich subpage content | Medium | High |
| 🟢 P2 | Google Search Console | Low | High |
| 🟢 P3 | Backlinks | Medium | High |
| 🟢 P3 | Article schema | Medium | Medium |

---

*Plan reviewed on 2026-05-14*
