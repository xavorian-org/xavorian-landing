# Xavorian — Content Quality, E-E-A-T & Internal Linking Audit

**Date:** 2026-08-06 · **Scope:** 20 public pages (+404 excluded) · **Mode:** Audit only, no project files modified

## Methodology note (important)

`http://localhost:3000` was **not servable at audit time** — every route returned `500 Internal Server Error` (21-byte bare response, PID 8480, a next-server process). Because the site is configured as a **pure static export** (`output: 'export'`), the audit was run against the definitive rendered HTML in `landing/out/` (built 2026-08-05, after the last `src/` change — content is representative), cross-checked against `src/` read-only. **Action for owner:** restart/repair the dev server; rerun fetch-based checks when it responds.

---

## Content Quality Score: **72 / 100**

| Factor | Score | Key signals |
|---|---|---|
| Experience | 14/20 | Founder letter with real scam anecdotes, Nigeria-specific ground truth (inspection fees, C of O, caretakers, "the oga"); no original data, case studies, or first-hand verification evidence yet |
| Expertise | 18/25 | Verification process explained with real procedural depth (registry lookup, survey beacons, name-match); no credentialed reviewers named, zero external citations |
| Authoritativeness | 13/25 | Article schema present but author = Organization, not a person; no bylines, no press/recognition, no sources cited anywhere on the site |
| Trustworthiness | 20/30 | Named founder + social handle, DPO contact, honest staging ("not yet live"), "we work remotely" disclosure; undermined by absolute claims vs legal disclaimer tension, stale/inconsistent legal pages, free Gmail addresses on a "trust layer" |

*(Weights per seo-content skill model: Trust 30 > Expertise/Authority 25 > Experience 20. Heuristic, not a Google-internal metric.)*

**AI Citation Readiness: 74 / 100** — FAQ answers are answer-first ("+ Not yet.", "+ Browsing verified listings is free."), guides open with a definition and use numbered-step H2s + "Key takeaways" lists, Article/Breadcrumb/Organization/FAQPage JSON-LD present, dates on all content. Deductions: no named human author, no quotable statistics or sourced claims (nothing for an LLM to attribute), blog posts too short to be citable, blog-post bodies have no subheadings ("Tell one/two/three" are plain paragraphs).

---

## What works

1. **Best-in-class voice for the audience.** Short sentences (avg 7–13 words), Flesch 58–70 on all marketing pages, zero jargon without explanation (KYC is glossed as "a government-issued ID matched against a live selfie"). Scannable on a phone.
2. **Memorable content architecture.** The "four characters behind almost every property scam" (Cloned Listing, Vanishing Agent, Forged Document, Double Sale) and the four gates are original, extractable frameworks — exactly the kind of named constructs AI assistants repeat.
3. **Answer-first FAQ.** 10 questions, each opens with a 1–2 sentence direct answer before elaboration; answer count claim ("the ten questions") is accurate.
4. **Structured data coverage.** Organization (with `founder` Person, `sameAs` socials), FAQPage on homepage, Article + BreadcrumbList on posts — every page checked carries JSON-LD.
5. **Real trust signals.** Named founder on /about with social handle ("Ezeani Chukwuebuka 'Damien', @Eze_Damien"), honest pre-launch positioning, visible Nigerian phone number (+234 805 637 3583) and WhatsApp, DPO email in privacy policy, NDPR/NDPA referenced.
6. **One `<h1>` per page, everywhere.** All 20 pages have exactly one H1; titles and meta descriptions are unique and mostly keyword-targeted.
7. **Healthy link hub & anchors.** Homepage links to every pillar page; every page routes to /waitlist; no "click here" anchors; read-next modules on all posts and guides; breadcrumbs in schema. **No orphan pages.**

---

## Findings

| # | Severity | Page(s) | Issue | Evidence | Fix |
|---|----------|---------|-------|----------|-----|
| 1 | **High** | /waitlist | Core conversion content (the form) is absent from crawlable HTML. Page renders **73 words**; `0` `<form>`/`<input>` tags in the static export because `WaitlistForm` uses `useSearchParams()` inside `<Suspense>` (client-render bailout). Crawlers and no-JS users see an empty card on the site's most important page. | static HTML: `form tags: 0, input tags: 0`; `WaitlistForm.tsx:4 import { useSearchParams }` | Read city from a server-rendered prop instead of `useSearchParams` (or pre-render a default form); keep SSR fallback containing the full form. |
| 2 | **High** | 3 blog posts + 3 guides | Thin content for the intent they target, **plus inflated read-time labels**. Guides promise "6 min read" at 365 words (~1.5–2 min at Nigerian mobile reading speeds); posts say "3–4 min" at 206–252 words. Wrong read-times on a *trust* brand are a credibility tax. | `/blog/what-verification-actually-means`: 206 words, "3 min read"; `/blog/how-to-spot-a-cloned-listing`: 252 words, "4 min read"; `/guides/verify-c-of-o-before-paying`: 365 words, "6 min read" | Expand posts to 600–900 words (case examples, screenshots, checklist tables) or correct the labels to "2 min read". |
| 3 | **High** | / and /how-it-works | 12 near-verbatim duplicated sentences — the four-gates copy is reused wholesale, so both pages compete for the same queries with the same text. | See §Duplicate content below, e.g. "The bank account that receives payment must carry the same legal name as the verified ID." on both. | Keep gates as a summary on / (2–3 lines + link); reserve the full gate-by-gate detail ("What happens / Why it matters / If it fails") for /how-it-works. |
| 4 | **Medium** | All 6 articles | No author bylines; Article schema `author` is `Organization`, not the named founder — despite the founder being public on /about narrating the same "scam stories" in first person. E-E-A-T "Who created this?" has no answer on content pages. | JSON-LD on posts: `"author":{"@type":"Organization","name":"Xavorian"}`; `/blog/why-we-built-xavorian` has no byline. | Add byline + /about#founder link; emit `author: {"@type":"Person","name":"Ezeani Chukwuebuka"}`. |
| 5 | **Medium** | /, /waitlist, blog, /how-it-works vs /disclaimer | Absolute marketing claims contradict legal disclaimers. Marketing says scams **cannot** exist on Xavorian; legal says the opposite. On a trust product this asymmetry is a reputational landmine (and a consumer-protection risk). | Marketing: "Your seat at a **scam-free** property market", "What you see is what exists", "Clones cannot survive that pipeline, so they **never reach your screen**" vs Disclaimer §6.1: "Xavorian cannot guarantee the accuracy, completeness, or authenticity of property listings", "Property listings are authentic or legally held [not warranted]". | Soften absolutes ("designed to keep scams out") or add a one-line honest caveat near CTAs; align both voices. |
| 6 | **Medium** | /contact (147w) vs /support (228w) | Two near-identical channel pages cannibalize the same intent ("Xavorian support/contact") and drift on facts: /support says email replies "Within one working day"; /contact says legal privacy requests take "two working days". Both list the same mailboxes + WhatsApp. | /support: "Email. Within one working day, usually faster." vs /contact: "Legal & privacy… Replies within two working days." | Merge into one Contact & Support page (301 the other), or differentiate hard: /support = help hub + status, /contact = channels only. Keep one source of truth for SLAs. |
| 7 | **Medium** | /disclaimer, /privacy, /terms | Legal is stale and internally inconsistent. Disclaimer "Last Updated: January 2025" (~19 months old, predating the entire 2026 content site). Privacy policy lists **"Website: xavorian.com"** — the live domain is `xavorian.xyz`. Terms reference shipped-but-nonexistent features (Chat Monitoring, Pro Plan & Promoted, account creation) while marketing says waitlist-stage. | `/disclaimer`: "Last Updated: January 2025 • Effective Date: January 2025"; `/privacy`: "Website: xavorian.com"; `/terms` TOC: "7. Chat Monitoring. 8. Pro Plan & Promoted." | Fix the domain in /privacy; refresh disclaimer date after review; add "planned features" framing to terms or trim unused sections. |
| 8 | **Medium** | Blog posts, guides | Contextual cross-linking gap: posts link only to siblings + /waitlist; guides link only to siblings + /waitlist. Nothing links blog→guides, guides→blog, or either → /how-it-works or /faq from body copy. Topical cluster exists but isn't woven. | e.g. `/blog/how-to-spot-a-cloned-listing` mentions "title document number" but doesn't link `/guides/verify-c-of-o-before-paying`; C of O guide never links the cloned-listing post. | Add 2–3 in-body links per article to the adjacent hub (guide↔post, →gates, →FAQ item). |
| 9 | Low | Homepage, footer | Footer "Locations" links use doorway-style anchors ("Lagos Properties", "Abuja Properties"… ) that all resolve to `/#locations — promise a destination page that doesn't exist. | footer HTML: `/#locations <= Lagos Properties`, `Abuja Properties`, `Benin City Properties`, `Port Harcourt Properties` | Retitle to "Join the waitlist for Lagos" style (truthful), or build real city pages later and keep anchors until then. |
| 10 | Low | /blog (149w), /guides (133w) | Thin hub pages: card lists only; no intro copy targeting the hub query ("Nigerian real estate blog/guides"), no featured piece, no newsletter/CTA block. | `/blog` total = 149 words including card excerpts. | Add 100–200 words of topic-intro copy + a "start here" featured link. |
| 11 | Low | /guides/rent-safely-lagos-benin, /blog + agents | Unverifiable superlatives and zero citations site-wide. No external sources are cited anywhere — a missed Trust/Authority lever for a verification brand. | "A fee to simply view a property is the **single most common** small-scale scam in Lagos and Benin City"; "The cloned listing is the **oldest trick** in the Nigerian property market"; "/agents: **the number one reason** verification drags". | Add 2–3 authoritative citations (EFCC/land-registry/public sources) per guide, or downgrade to "one of the most common". |
| 12 | Low | / | Copy-editing slip that reads like a typo on the hero-adjacent "Why Xavorian exists" section. | "You shouldn't have to **verify verification** wondering if the agent's badge means anything at all." | Rewrite: "You shouldn't have to second-guess a badge that was never earned." |
| 13 | Low | /guides/* | "5. Let a platform do it for you" (C of O guide) soft-peddles; also guide description promises topics the body skips. | rent-safely description: "Inspection fees, **caretaker extortion**…" — caretaker extortion never appears in body. | Cover caretaker scams or trim the description. |
| 14 | Low | All content pages | No images, diagrams or tables anywhere (guides would gain most — e.g. a sample C of O annotation, comparison table "Xavorian vs typical portal"). Only hero SVG art. | extraction shows text-only bodies; no `<figure>`/`<table>` in main content. | Add 1 visual + 1 table per guide; table the four gates on /how-it-works. |
| 15 | Info | / (homepage copy) | "Cities open in waitlist order" appears on 4+ pages — fine as a slogan but contributes to boilerplate similarity; vary phrasing where it's explanatory, not navigational. | /, /faq, /vision, /agents variants. | Keep once per page; vary. |

---

## Per-page table

| Page | Main words | H1 | Flesch | Avg words/sentence | Primary keyword verdict |
|---|---|---|---|---|---|
| / | 862 | "Buy property in Nigeria. Keep your guard down" | 64 | 9.9 | ✅ Strong — "buy property in Nigeria" in title, H1, first sentence |
| /about | 494 | "Property scams are normal in Nigeria. We think that's unacceptable" | 70 | 9.3 | ✅ "property scam(s) Nigeria" in title+H1+intro |
| /agents | 538 | "Serious agents have nothing to hide. Finally, a place to prove it" | 65 | 8.6 | 🟡 Value-prop H1; "verified agent" only in title/desc, not H1/body intro |
| /blog | 149 | "Notes on trust, scams and property in Nigeria" | 68 | 9.9 | 🟡 Thematic, thin page |
| /blog/why-we-built-xavorian | 241 | matches title | 61 | 12.8 | 🟡 Brand story — no search keyword by design |
| /blog/how-to-spot-a-cloned-listing | 252 | matches title | 66 | 10.5 | ✅ "cloned listing" targeted |
| /blog/what-verification-actually-means | 206 | matches title | 65 | 9.3 | ✅ "what verified means" targeted |
| /contact | 147 | "Every inbox is read by a person" | 52 | 7.2 | 🟡 Brand-tone H1; "contact Xavorian" implied via title only |
| /faq | 511 | "Asked often. Answered plainly" | 64 | 9.1 | ✅ Role-correct |
| /guides | 133 | "Do property in Nigeria the careful way" | 61 | 9.5 | 🟡 Awkward phrasing ("Do property"), thin page |
| /guides/verify-c-of-o-before-paying | 365 | matches title | 62 | 10.6 | ✅ Exact "Certificate of Occupancy" targeting; best page on site |
| /guides/rent-safely-lagos-benin | 331 | matches title | 58 | 10.1 | ✅ "rent safely Lagos/Benin" targeted |
| /guides/questions-before-inspection-fee | 371 | matches title | 63 | 9.3 | ✅ "inspection fee" targeted |
| /how-it-works | 828 | "Four gates stand between a scam and your money" | 67 | 8.7 | ✅ Process page, strong |
| /support | 228 | "Talk to a human. Get a straight answer" | 62 | 8.2 | 🟡 Same intent as /contact (see #6) |
| /vision | 401 | "A trust layer for every property market in Africa" | 62 | 10.0 | ✅ Brand-pillar role |
| /waitlist | 73 | "Your seat at a scam-free property market" | 74 | 6.6 | ❌ No keyword in H1; thinnest indexable page; form not in HTML |
| /terms, /privacy, /disclaimer | 2721 / 1666 / 899 | one each | 35 / 40 / 25 | 17 / 14 / 8 | Legal — exempt from thin-content flag |

**Exact-match heading check:** one H1 per page on all 20 pages. Titles unique. Meta descriptions present on all 20.

## Thin pages (<300 main words, legal exempt)

| Page | Words | Note |
|---|---|---|
| /waitlist | 73 | Primary conversion page; form JS-only |
| /guides | 133 | Hub — card list only |
| /contact | 147 | Mostly channel cards |
| /blog | 149 | Hub — card list only |
| /blog/what-verification-actually-means | 206 | Post |
| /support | 228 | Overlaps /contact |
| /blog/why-we-built-xavorian | 241 | Post |
| /blog/how-to-spot-a-cloned-listing | 252 | Post |

(borderline: guides 331–371 words; /vision 401)

## Exact duplicated sentences found (>1 page)

**Between / and /how-it-works (the real duplication problem — 12 shared sentences):**
- "Every agent and property owner on Xavorian completes KYC: a government-issued ID matched against a live selfie."
- "There are no anonymous sellers here."
- "Payout account name must match the verified ID."
- "The bank account that receives payment must carry the same legal name as the verified ID."
- "Money only moves to the person who proved who they are — never to a stranger."
- "Title documents scanned, cross-checked against the listing."
- "Title documents — C of O, deeds, survey plans — are scanned and audited."
- "Our AI truthing assist compares what the documents say against what the listing claims, and flags every mismatch."
- "A person signs off before anything goes live." / "Nothing on Xavorian goes live on the word of an algorithm alone." / "A human reviewer signs off on every listing." / "Only then does it earn its place — and its verified mark."

**Shared CTA/article-card modules (tolerable but boilerplate):**
- "Join the waitlist and browse with your guard down." — **7 pages** (all 3 posts, all 3 guides, plus repeated)
- "On Xavorian, every listing passes identity, bank-match, document and human-review gates before it can exist." — all 3 blog posts
- "On Xavorian, this entire checklist runs before a listing can exist — identity, bank-match, document and human-review gates." — all 3 guides

## Orphan pages

**None.** Every page has ≥3 inbound internal links (pillars 20; each blog post: /blog + 2 siblings; each guide: /guides + 2 siblings). Caveats: (a) articles' inlinks are all from template modules (index + read-next), never from body copy of other pages; (b) blog/guide clusters are sealed — the rest of the site never links *into* a specific article.

## Content gaps vs target queries

| Query | Status | Recommendation (recommend only, do not create) |
|---|---|---|
| "how to avoid property scam in Nigeria" | **Partially / split coverage** — pieces live in the cloned-listing post, seven-questions guide, rent-safely guide; no single page owns the head query | Publish a pillar guide "How to avoid property scams in Nigeria" consolidating the 4 scam characters + 7 questions + C of O check, and interlink the three spokes into it |
| "verified property agents Nigeria" | **Weak / intent mismatch** — /agents sells verification *to* agents; nothing serves the *buyer* searching this | Add a seeker-facing page: how to check whether an agent is verified, what the badge proves, sample verified profile |
| "certificate of occupancy verification" | **Covered well** — /guides/verify-c-of-o-before-paying is the strongest content asset | Extend the cluster: "deed of assignment vs C of O", "how to verify a survey plan", "governor's consent explained" |
| Adjacent gaps | — | "inspection fee scam" data piece, "cannot verify" complaint page, glossary page (C of O, excision, gazette, survey plan) — all natural AI-answer bait |

## Readability verdict

Marketing pages: excellent for a mobile Nigerian audience (Flesch 58–74, avg 6.6–12.8 words/sentence, short paras, Naija-specific idioms ("the oga", "alert drops", "caretaker") used authentically). Dense pages: none in marketing. Legal pages (Flesch 25–40) are dense by nature and exempt — though /disclaimer could gain a plain-English summary box.

## E-E-A-T detail

- **Who:** /about names the founder with a handle — strong. Articles: nobody. Fix per #4.
- **How:** verification process is unusually well explained (gates, "if it fails" paths, resubmission rules) — the site's biggest asset.
- **Why:** clearly people-first voice; launch-order mechanics (waitlist = city priority) are transparent and plausible.
- **Risks:** absolute "scam-free / never reaches your screen" claims vs disclaimer §6.1 (#5); stale Jan-2025 disclaimer and wrong domain in privacy (#7); no citations (#11); inflated read-times (#2); reviewer anonymity — copy promises "a named human reviewer" but no reviewer is ever named (if accidental, fine; if literal, name the review role/lead somewhere).
