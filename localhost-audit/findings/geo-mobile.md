# Xavorian Landing — GEO / Mobile UX / SXO Audit

**Target:** http://localhost:3000 (Next.js 14 static export, `output: 'export'`)
**Scope:** AI-search/GEO readiness · mobile render/copy UX · search-experience intent match
**Date:** 2026-08-06 · **Mode:** Audit only, no file modifications

> ⚠️ **Environment note:** The dev server on `localhost:3000` currently returns **HTTP 500 (bare "Internal Server Error") for every route** — `/`, `/faq`, `/robots.txt`, `/sitemap.xml`, `/llms.txt` all fail. Because the app is a pure static export, this audit validated the built artifacts in `out/` (`index.html`, `faq.html`, `guides/*.html`, `robots.txt`, `sitemap.xml`), which are byte-equivalent to what production serves. The 500s are treated as an operational finding (F-01): if this instance were live, **no crawler — AI or Google — could fetch anything at all**.

---

## Scores

| Dimension | Score | One-liner |
|---|---|---|
| **GEO / AI-search** | **68 / 100** | Excellent static HTML + JSON-LD bones; dragged down by missing `llms.txt`, JS-gated visibility (`opacity:0`), brand-less home `<title>`. |
| **Mobile UX** | **74 / 100** | Solid type scale, iOS-zoom fix, zero overflow risk; dragged down by sub-44px tap targets in footer/nav/role-picker and 13px core reading copy. |
| **SXO / intent match** | **72 / 100** | Guides are near-perfect intent matches; home answers "what" but not "who is behind this"; waitlist form sits below the fold on mobile. |

---

## 1. GEO / AI-search checks

### 1.1 llms.txt — ❌ MISSING (HIGH)

- `landing/public/` contains only `favicon.ico`, `icon-192.png`, `icon-512.png`, `xavorian-logo.svg`, `xavorian-wordmark.svg` — **no `llms.txt`**.
- The static export `out/` has no `llms.txt`; live `http://localhost:3000/llms.txt` errors (no static asset exists to serve).
- The main marketplace ships a thorough one at repo-root `public/llms.txt` (brand summary, page inventory, location pages, API surfaces, error codes). The landing app has **no equivalent**.

**Recommended `public/llms.txt` for this waitlist site** (drop-in file; static-export will emit it verbatim):

```
# Xavorian

> Nigeria's trust layer for real estate. Pre-launch waitlist site.
> Every listing on Xavorian passes four verification gates — identity (KYC +
> liveness), bank-account name match, document audit with AI truthing, and
> human review — before it goes live. Buyers browse free; verification is the
> price sellers pay to be listed.
> Domain: https://www.xavorian.xyz
> Status: pre-launch, opening city by city in waitlist order.

## Pages
- [Home](/): What Xavorian is, the four gates, launch cities
- [Join the waitlist](/waitlist): Early access signup (name, email, city, role)
- [How it works](/how-it-works): The four verification gates in detail
- [FAQ](/faq): Waitlist, verification, payments, agent onboarding, data privacy
- [About](/about): Mission and founder (Ezeani Chukwuebuka)
- [Vision](/vision): Product vision
- [For agents](/agents): Agent onboarding and verification playbook
- [Guides](/guides): Safety guides for Nigerian property transactions
  - [How to verify a Certificate of Occupancy before you pay](/guides/verify-c-of-o-before-paying)
  - [Renting safely in Lagos and Benin City](/guides/rent-safely-lagos-benin)
  - [Seven questions to ask before any inspection fee or deposit](/guides/questions-before-inspection-fee)
- [Blog](/blog): Articles on trust, safety and verification
- [Contact](/contact) / [Support](/support): Human help within one working day
- [Privacy](/privacy) · [Terms](/terms) · [Disclaimer](/disclaimer)

## Launch cities
Lagos, Abuja, Benin City, Port Harcourt, Ibadan, Asaba, Warri, Enugu, Uyo —
cities open in waitlist order.

## Key facts for AI assistants
- Xavorian is NOT yet live; access is via the waitlist at /waitlist.
- Buyers: browsing verified listings is free. Anyone claiming to be Xavorian
  who asks a buyer for a "verification fee" should be reported.
- Payments: buyers pay the seller by normal bank transfer; the receiving
  account name must match the verified identity on the listing. Xavorian
  never holds or reroutes money.
- Contact: xavoriansupport@gmail.com (help), xavorian01@gmail.com (general),
  xavorianlegal@gmail.com (legal), WhatsApp +234 805 637 3583.
- Socials: x.com/Xavorianxyz · instagram.com/xavorianxyz ·
  tiktok.com/@xavorianxyz · youtube.com/@Xavorianxyz

## Optional
- [Sitemap](/sitemap.xml) · [Robots](/robots.txt) · [llms.txt](/llms.txt)
```

### 1.2 AI crawler access — ✅ mostly good, one structural risk

| Check | Result | Evidence |
|---|---|---|
| robots.txt AI blocks | ✅ None | `out/robots.txt` = `User-Agent: * / Allow: /` + sitemap line. GPTBot, ClaudeBot, PerplexityBot, Amazonbot not disallowed. |
| meta robots | ✅ Neutral | No `<meta name="robots">` emitted in HTML → default `index,follow`. Harmless; explicit tag optional. |
| Full text in raw HTML | ✅ Confirmed | `/` (134 KB), `/faq` (72 KB), `/guides/verify-c-of-o-before-paying` (61 KB) contain 100% of copy: "Buy property in Nigeria", "Cloned Listing", "Not yet. Xavorian opens city by city", "lands registry", "Key takeaways" — all present un-hydrated. |
| Sitemap | ✅ | `out/sitemap.xml` valid, all key routes, correct absolute URLs. |
| **JS-gated visibility** | ⚠️ **Medium** | `Reveal.tsx` sets inline `style="opacity:0"` on `initial render`; visibility requires an IntersectionObserver. Counts in exported HTML: **home = 36 elements, /faq = 15, guide = 7**. Text is in the DOM (raw-HTML parsers are fine) but any render/screenshot-based AI agent or no-JS preview **sees blank sections**. Also a progressive-enhancement/accessibility regression if JS fails. |

**Fix for the opacity issue:** render visible by default; flip to hidden only after JS confirms it can animate (e.g. add a `js` class on `<html>` and scope the initial-hidden state to it), or drop the `opacity:0` initial style and let `animate-fade-up` handle the entrance on intersect.

### 1.3 Citability ratings (0–10)

| Page | Score | Reasoning |
|---|---|---|
| **/faq** | **8/10** | Direct answer in first 40 words on almost every item ("Not yet.", "Nothing.", "Four gates: a government ID with a liveness check…"). Self-contained facts (four gates named; "Xavorian never holds your money"); unique process data; FAQPage JSON-LD matches visible text verbatim. Deductions: prose-only answers (a 4-item gate list would lift citability); a few hedged openers ("The way they always should have."). |
| **/guides/verify-c-of-o-before-paying** | **8/10** | Intro states the thesis within 40 words; numbered steps 1–5 = list structure LLMs quote cleanly; "Key takeaways" is a ready-made citation block; Article + BreadcrumbList JSON-LD; date + reading time present. Deductions: step 5 turns promotional; no hard numbers (search-fee cost, registry turnaround) → "unique data" is procedural, not statistical. |
| **/guides/questions-before-inspection-fee** | **7/10** | Question-form headings are inherently quotable and match query syntax; 3-minute promise in the intro; takeaways list. Deductions: bodies are short and assertive rather than evidence-backed; no statistics or named regulations; weakest unique-data density of the three. |

### 1.4 Brand-signal consistency — ✅ with two dents

| Signal | Status |
|---|---|
| Site name "Xavorian" | ✅ Consistent (metadata, JSON-LD `name`, `og:site_name`, copy) |
| Domain `www.xavorian.xyz` | ✅ Consistent (metadataBase, canonicals, JSON-LD `@id`/`url`, sitemap) |
| `@xavorianxyz` | ✅ Consistent (`twitter:site` in layout + `pageMetadata`; renders in home HTML) |
| JSON-LD `sameAs` vs footer socials | ✅ Identical four URLs in both (`x.com/Xavorianxyz`, `instagram.com/xavorianxyz`, `tiktok.com/@xavorianxyz`, `youtube.com/@Xavorianxyz`) |
| Founder | ✅ `Ezeani Chukwuebuka` in Organization schema and on /about |
| Contact emails | ⚠️ All `@gmail.com` (`xavorian01@`, `xavoriansupport@`, `xavorianlegal@`). For a brand selling **trust**, free-mail addresses on every page undercut the signal — and create a phishing-lookalike attack surface. Recommend `@xavorian.xyz` aliases with the gmail boxes as backup. |
| OG image | ⚠️ `og:image` = `/icon-512.png` (square logo) while `twitter:card = summary_large_image` expects ≈1200×630. Shares/AI link-previews render a tiny centered square. Generate a proper 1200×630 OG asset. |
| Home FAQPage schema vs visible teaser | ⚠️ Minor: schema Q text ("What does verification cost a buyer?") ≠ on-page Q text ("What does verification cost me as a buyer?"). Google's FAQ guidelines want schema to match visible content; unify them. |

---

## 2. Mobile UX checks (render/copy level)

### 2.1 Viewport + type scale — ✅ pass with minor flags

- Viewport: `width=device-width, initialScale=1` ✅. iOS auto-zoom guard present (`input/select/textarea { font-size: 16px !important }` under 640px) ✅.
- Hero body `text-[15px]` ✅ meets the 15px floor; section bodies `text-base` (16px) ✅; mobile H1 `2.05rem`, H2s `text-3xl` (1.875rem), LowerGuard `text-2xl` — **no mobile heading exceeds 2.5rem** ✅.
- ⚠️ Below-floor micro-copy: FAQ **answers** `text-[13px]` (this is the page's core reading content — recommend 14–15px); card bodies `text-[13px]` (Problem, Principles, perks); footer links `text-[12px]`; footer bottom bar + hero caption `text-[11px]` (below the 12px floor); Gates step label `text-[9px]` (decorative uppercase, but still 9px).

### 2.2 Tap targets — ❌ 7 violation classes (target = ≥44px)

**Pass:** hamburger `h-11 w-11` (44px), waitlist inputs/select `h-11`, submit `h-12`, hero CTAs `h-12`, FAQ `<summary>` (py-4 + text ≈ 52px), location cards (p-4 + content ≈ 84px), guide CTA `h-11`, mobile-sheet primary links (py-3 ≈ 50px).

| # | Element | Computed height | Evidence |
|---|---|---|---|
| 1 | Footer section/legal links (18 links) | **≈24px** | `Footer.tsx:133` — `inline-block py-1 text-[12px]` (16px line + 8px padding) |
| 2 | Footer social icon buttons (4) | **32px** | `Footer.tsx:116` — `h-8 w-8` |
| 3 | Waitlist role radio labels (3) | **≈36px** | `WaitlistForm.tsx:176` — `px-3 py-2.5 text-xs` |
| 4 | Footer CTA-strip "Join the waitlist" | **≈36px** | `Footer.tsx:73` — `px-5 py-2.5 text-xs` |
| 5 | Nav "Join the waitlist" pill | **40px** | `Nav.tsx:71` — `h-10` |
| 6 | Mobile-sheet secondary links (For agents/Blog/Contact/Support) | **≈40px** | `Nav.tsx:104-107` — `py-2.5 text-sm` |
| 7 | Standalone `link-underline` text links (e.g. "The full verification story" Gates.tsx:25; "All questions" FaqTeaser:58; "Not on the list?" Locations:22; "Back to guides"; waitlist success link) | **≈20px** | `text-sm` inline-flex, no padding |

**Fix pattern:** add `py-2.5/-3` (+ matching negative margin if rhythm matters) to text links; bump footer links to `py-2 text-[13px]` (→≈36px, still short of 44 — use `py-3`); social icons to `h-10 w-10`; role labels to `py-3` or `min-h-11`; nav pill to `h-11`.

### 2.3 Horizontal-scroll risks — ✅ none found

- `html, body { overflow-x: clip }` safety net (`globals.css:36`); container padding `1.25rem` → 320px content column on a 360px viewport.
- Only width literal is **max**-width: hero visual `max-w-[560px]` with `w-full` (`Hero.tsx:60`) — caps, never forces overflow. No `w-[Npx]` on layout elements.
- All grids collapse on mobile: Problem/Gates/Principles/guides = 1-col; Locations and footer intentionally start `grid-cols-2`. At 360px, each location card column is ≈152px — "Port Harcourt" wraps but does not overflow (cosmetic only).

### 2.4 Form UX (/waitlist) — good structure, autofill gaps

- Layout: both `grid sm:grid-cols-2` rows collapse to single column on mobile ✅; labels present with correct `htmlFor` on **every** field (wl-name, wl-email, wl-phone, wl-city, wl-note) ✅; honeypot is `aria-hidden` + `tabIndex={-1}` + `autoComplete="off"` ✅; inputs `h-11`, submit `h-12` full-width ✅; success **and** offline-queued states with clear copy ✅.
- ❌ **Missing `autoComplete`** (`WaitlistForm.tsx`):
  - `wl-name` (full name) → needs `autoComplete="name"`
  - `wl-email` → needs `autoComplete="email"`
  - `wl-phone` (`type="tel"`) → needs `autoComplete="tel"`
  - `wl-city` (select, optional) → consider `autoComplete="address-level2"`
  - (No input needs `inputMode` fixes — `email`/`tel` types already trigger the right keyboards.)
- ⚠️ Dead error path: `setError` is only ever set to `null`; failures route to the "queued" success screen, so the `{error && ...}` block (`WaitlistForm.tsx:212`) can never render. Either wire it (e.g. validation failures) or remove it.

---

## 3. SXO / intent match

### 3.1 Page-type fit

| Template | Score | Notes |
|---|---|---|
| **Home** (navigational/“is Xavorian legit · what is Xavorian”) | **7/10** | The eyebrow ("Nigeria's trust layer for real estate") + first paragraph answer *what* within the first viewport, and trust marks (KYC / document audit / human review) follow immediately. But the H1 is emotive, not definitional; *who is behind this* (founder, legal pages, real email) stays one click away — the core of the "is it legit" query; and the home `<title>` omits the brand (see 3.2), weakening the navigational SERP itself. |
| **Guides** (informational) | **9/10** | Numbered steps, explicit "Key takeaways," dates + reading time, Article + BreadcrumbList JSON-LD, read-next chain. Only missing: hard data/citations to raise E-E-A-T. |
| **/waitlist** (action) | **7/10** | Form is fast (3 required fields), reassurance copy is excellent ("One email when we launch in your city. Nothing else.", 48px submit). But on **mobile** the DOM order is headline → 3 perks → form, so the actual action sits below ~1.5 viewports. Move the form above the perks on small screens (or reorder via `order-first`). |

### 3.2 SERP readiness — 5 sample queries (actual exported titles + descriptions)

| Query | Expected snippet (title — URL — description) | Click-worthy? |
|---|---|---|
| `xavorian` | **Buy Property in Nigeria Without the Fear** — www.xavorian.xyz — "Xavorian is Nigeria's trust layer for real estate. Every listing passes identity, document and human verification gates before it goes live." | ⚠️ Mediocre. **The `<title>` contains no "Xavorian"** (confirmed in `out/index.html`); the brand survives only via the URL slug and description. Fix: set home title to `Xavorian — Buy Property in Nigeria Without the Fear`. |
| `verified property nigeria` | Same home snippet; /how-it-works ("…Four Gates Between You and a Scam") as supporting result. | ✅ Good — description mirrors the query's vocabulary. |
| `how to verify c of o nigeria` | **How to verify a Certificate of Occupancy before you pay \| Xavorian** — /guides/verify-c-of-o-before-paying — "A C of O can be perfectly printed and completely fake. This is how professionals check one — step by step." | ✅ Excellent — near-exact query match + curiosity gap. |
| `avoid property scam nigeria` | Closest: **Renting safely in Lagos and Benin City: the new renter's playbook** — /guides/rent-safely-lagos-benin — "Inspection fees, caretaker extortion, agents selling the same flat to five people — and how to sidestep all of it." | ⚠️ Partial. No page targets the head term. **Content gap:** add "How to avoid property scams in Nigeria" (would also absorb "fake agent nigeria", "land scam lagos"). |
| `xavorian waitlist` | **Join the Waitlist — Verified Nigerian Real Estate \| Xavorian** — /waitlist — "Reserve your place on Xavorian. Verified agents, document-audited listings and human review — opening city by city across Nigeria." | ✅ Strong — direct answer, reassurance built in. |

---

## Findings table (severity · evidence · exact fix)

| ID | Severity | Finding | Evidence | Exact fix |
|---|---|---|---|---|
| F-01 | 🔴 High | Dev server returns 500 on **all** routes (localhost:3000) | `Invoke-WebRequest` on /, /faq, /robots.txt, /sitemap.xml, /llms.txt → all 500 bare | Restart/rebuild the dev server; if this box is used for demos, serve `out/` statically instead. |
| F-02 | 🔴 High | `llms.txt` missing from the waitlist app | absent from `landing/public/` and `landing/out/` | Add `public/llms.txt` with the content outlined in §1.1 (static export emits it verbatim). |
| F-03 | 🟠 Medium-High | 36/15/7 elements on home/FAQ/guide render `style="opacity:0"` until JS runs | `Reveal.tsx:35-38`; verified counts in `out/*.html` | Default to visible; only hide pre-animation when JS is confirmed active (html `.js` class gate). |
| F-04 | 🟠 Medium | 7 tap-target classes under 44px (see §2.2) | Footer.tsx:133/116/73, Nav.tsx:71/104, WaitlistForm.tsx:176, `link-underline` links | Pad to ≥44px: footer links `py-3`, social icons `h-10 w-10`, role labels/nav pill/sheet links `min-h-11`. |
| F-05 | 🟠 Medium | Home `<title>` omits brand for the navigational query | `out/index.html`: `<title>Buy Property in Nigeria Without the Fear</title>` | `src/app/page.tsx:13` → title: `'Xavorian — Buy Property in Nigeria Without the Fear'`. |
| F-06 | 🟠 Medium | Missing autofill tokens on the waitlist form | `WaitlistForm.tsx` — no `autoComplete` on wl-name/wl-email/wl-phone/(wl-city) | Add `autoComplete="name" / "email" / "tel" / "address-level2"`. |
| F-07 | 🟠 Medium | Free-mail contact addresses on a trust product | `site.ts:4-6`, rendered in footer/contact/support | Publish `@xavorian.xyz` mailboxes (forward to gmail); update BRAND + FAQ + contact copy. |
| F-08 | 🟡 Low-Med | OG/Twitter image is a 512×512 square with `summary_large_image` | `layout.tsx:20-22` | Generate 1200×630 OG asset; reference as `og:image` + `twitter:image`. |
| F-09 | 🟡 Low | FAQ-page answer copy at 13px (core reading content) | `faq/page.tsx:140` | Raise to `text-sm` (14px) or `text-[15px]`. |
| F-10 | 🟡 Low | Home FAQPage schema text ≠ visible teaser text | `FaqTeaser.tsx:7-18` vs `:20-45` | Make schema Q/A strings identical to the on-page strings. |
| F-11 | 🟡 Low | Dead error state in form; micro-copy below 12px (11px rows, 9px gate labels) | `WaitlistForm.tsx:38,212`; `Footer.tsx:146-149`; `Gates.tsx:41` | Wire `setError` or remove block; raise 11px → 12px; treat 9px label as decorative (keep) or bump to 10px. |
| F-12 | 🟡 Low (content gap) | No page for "avoid property scam nigeria" head term | §3.2 query test | New guide targeting the head term + interlink from FAQ + Problem section. |
| F-13 | 🟡 Low (SXO) | Waitlist form below 3 perks on mobile (~1.5 viewports to action) | `waitlist/page.tsx:33` grid order | `className="order-first lg:order-none"` on the form card, or move perks beside/below on mobile. |

---

## Appendix — audit method

- Live probes: `Invoke-WebRequest` against localhost:3000 (`/`, `/llms.txt`, `/robots.txt`, `/sitemap.xml`, `/faq`) — all HTTP 500.
- Raw-HTML verification on the static export (`out/`): string-presence assertions for hero, problem, FAQ and guide copy; regex counts for `style="opacity: 0"`; title/description extraction per route.
- Source-level mobile review: Tailwind class audit across `src/app/page.tsx`, all `src/components/landing/*`, `Nav.tsx`, `Footer.tsx`, `WaitlistForm.tsx`, `faq/page.tsx`, `waitlist/page.tsx`, `guides/[slug]/page.tsx`, `tailwind.config.js`, `globals.css`.
- Tap-target heights computed from Tailwind spacing scale (h-11=44px, h-10=40px, h-8=32px, py-1=8px, py-2.5=20px) + default line-heights.
