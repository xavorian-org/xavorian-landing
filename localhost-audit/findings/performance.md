# Performance Audit — Xavorian landing (Next.js 14 static export)

- **Date:** 2026-08-06
- **Target:** `http://localhost:3000/` → production artifact audited from `landing/out/`
- **Scope:** performance, lab Core-Web-Vitals estimate, images, mobile delivery. Audit-only (no project files modified).

---

## 0. Environment caveat — dev server is currently broken

The live dev server at `localhost:3000` **returns HTTP 500 ("Internal Server Error", 21-byte body) for every page route and every `/_next/static/*` build asset** (`/`, `/about`, `/waitlist`, `/how-it-works`, `/robots.txt`, CSS/JS chunks). Only plain `public/` files serve: `/favicon.ico` (200, 15,406 B), `/xavorian-wordmark.svg` (200, 2,947 B).

| Probe | Result |
|---|---|
| `GET /` | 500, TTFB ≈ 12–75 ms |
| `GET /_next/static/css/3126b9c301dd4c60.css` | 500 |
| `GET /favicon.ico` | 200, ~9 ms |
| `GET /xavorian-wordmark.svg` | 200, ~4 ms |

**Consequence:** per-request timings from this dev server are meaningless for pages. All byte/CWV analysis below is done against the **static export in `out/`** (which is what actually ships), with loopback static-file latency (~4–15 ms) noted. On a static CDN, real-world TTFB for `index.html` will be ~50–250 ms depending on edge proximity — far better than any dev-server number.

> The dev-server 500s are an environment bug to hand to the owner (dev middleware serves only `public/`). It does not block this audit, but the site cannot be smoke-tested in dev until fixed. Static export in `out/` is coherent and complete.

---

## 1. First-load byte breakdown — `/`

Initial `<head><script>` list from `out/index.html` (all `async`, none parser-blocking; `polyfills` is `noModule` → skipped by all modern browsers):

| Resource | Raw bytes | Gzip ≈ | Role |
|---|---:|---:|---|
| `index.html` (incl. RSC flight payload + 3× JSON-LD) | 134,519 | 20,946 | document |
| `_next/static/css/3126b9c301dd4c60.css` | 26,378 | 5,867 | **only render-blocker** |
| `fd9d1056-….js` | 172,834 | 53,637 | React/React-DOM vendor |
| `117-….js` | 124,572 | 31,829 | Next runtime/vendor |
| `972-….js` | 26,064 | 8,702 | shared client (nav/reveal) |
| `137-….js` | 20,191 | 6,772 | shared client |
| `app/page-1f105d542f95b734.js` | 5,890 | 2,359 | homepage code (+guard) |
| `app/layout-b80faf5fb0915bb7.js` | 5,451 | 2,124 | layout/Nav client |
| `main-app-….js` | 461 | 218 | app entry |
| `webpack-….js` (end-of-body + low-prio preload) | 3,849 | 1,838 | runtime |
| `xavorian-wordmark.svg` | 2,947 | 1,361 | header/footer logo |
| `favicon.ico` | 15,406 | 1,315 | icon |
| **`/` first-load total (mobile <640 px, 3D skipped)** | **~543 kB** | **≈ 137 kB transfer** | — |
| `polyfills-….js` (legacy only, `noModule`) | 112,594 | 39,520 | not fetched by modern browsers |
| 3D chain (desktop-guarded): `b536a0f1.…js` (three) + `472.…js` (fiber/drei) + `320.…js` | 684,155 + 139,569 + 4,531 | 169,349 + 44,809 + 1,599 ≈ 215.8 kB | **lazy-only, never in initial HTML** |

- First-load JS (excl. polyfills): **355 kB raw / ≈ 106 kB gz** — matches the reported "≈105 kB". ✅
- Next's build statement ≈105 kB refers to gzipped JS; consistent within 1 kB of measurement.
- HTML is on the heavy side (134 kB raw / 21 kB gz) because the RSC flight payload duplicates rendered copy; typical for App-Router static export, acceptable.
- **Remote origins fetched at first paint: none.** All `https://` strings in HTML are metadata (OG/Twitter URLs, schema.org, social links), not subresources. Zero third-party JS/CSS/fonts/trackers. ✅

---

## 2. Estimated lab Core Web Vitals (mobile, simulated slow-4G + 4× CPU, CDN-hosted)

| Metric | Estimate | Verdict | Reasoning |
|---|---|---|---|
| **LCP** | **≈ 1.4–1.9 s** | 🟢 Good (<2.5 s) | LCP element is the `<h1>` text ("Buy property in Nigeria. / Keep your guard down."). No raster hero; hero media is the SVG/canvas box that renders beside/below. System font stack = no font downloads, no FOIT/FOUT. Single 5.9 kB-gz CSS sheet is the only render-blocking resource. `animate-fade-up` with 80 ms delay + `both` fill means the h1 paints ~0.08–0.2 s after FCP — minor, worth noting. |
| **INP** | **≈ 50–150 ms** p75 | 🟢 Good (<200 ms) | Only interactive elements: mobile menu button, links, `<details>` FAQ. 355 kB raw JS hydrates once (≈0.8–1.5 s main-thread on low-end mobile); no third parties, no heavy handlers. Risk window: menu tap during hydration queues briefly. Steady-state interactions trivial. |
| **CLS** | **≈ 0.00–0.02** | 🟢 Good (<0.1) | All media boxed: hero wrapper `aspect-[560/400]`; wordmark height CSS-fixed (`h-8`); reveal cards animate **opacity/transform only** (transforms never count toward CLS); system fonts = no font-swap shift; no lazy-injected banners/ads/iframes. |
| TBT (lab proxy) | ≈ 200–450 ms | 🟡–🟢 | One-time parse+eval of ~352 kB raw JS on 4× CPU; cost is concentrated in the fd9d1056/117 vendor chunks. Async script tags keep TTFB→FCP clean. |

**Estimated Lighthouse-style Performance score (mobile): ≈ 94–97 / 100** → report as **95**.
Desktop estimate: **≈ 99–100** (3D chain downloads *after* hydration, so it does not touch LCP/CLS/TBT windows).

### 3G experience, <640 px device
Guard (`innerWidth < 640`) prevents the three.js chain from ever loading → **total transfer ≈ 137 kB gz (~0.9 s of raw transfer at 1.6 Mbps, ~8 parallel requests)**. Fully usable page well under 3 s on 3G; interactive in ~2–2.5 s. This is excellent mobile delivery.

---

## 3. Findings

| # | Sev | Finding | Evidence | Fix |
|---|---|---|---|---|
| 1 | 🔴 High (env) | Dev server 500s on all routes & build assets; only `public/` serves | `/` → 500 (21 B body); `/_next/static/css/…css` → 500; `/favicon.ico` → 200 | Investigate `next dev` crash (middleware/webpack layer); dev-based audits blocked until fixed. Production `out/` unaffected. |
| 2 | 🟡 Medium | No immutable caching configured in repo for `/_next/static/*` | Dev serves `Cache-Control: public, max-age=0`; HTML `no-cache`; no `vercel.json`, no `public/_headers` | On Vercel, `/_next/static` immutable headers are automatic — verify target host. Anywhere else add: `/_next/static/* → public, max-age=31536000, immutable`; HTML `max-age=0, must-revalidate` (e.g. `vercel.json` `headers`, Netlify `_headers`, Cloudflare rule). |
| 3 | 🟡 Medium | 3D chain (828 kB raw / 216 kB gz) starts fetching immediately post-hydration on eligible desktops; continuous rAF loop | Guard in `TrustGate.tsx` (compiled into page chunk) calls dynamic import as soon as guard passes; `TrustGateScene` has no `frameloop="demand"`; full `import * as THREE`, drei components | Guard design itself is **excellent** (viewport `<640`, `prefers-reduced-motion`, WebGL probe, SSR fallback, `ssr:false`). Improvements: prefetch the chain on `requestIdleCallback`/pointer-hover instead of instantly; consider `frameloop` pausing when hero is off-screen (drei `<AdaptiveDpr>`/visibility observer) to save battery; optionally tree-shake three via subpath imports. |
| 4 | 🟡 Low-Med | Aspect mismatch in hero box: wrapper reserves `aspect-[560/400]` (1.40) but fallback SVG is `viewBox="0 0 560 320"` (1.75) with `h-auto w-full` | `Hero.tsx:61` + `TrustGateFallback.tsx`; rendered SVG occupies only ~80 % of reserved box height → dead space under art, caption detached | No CLS (space is reserved), but visual: either change wrapper to `aspect-[560/320]` or give the SVG the 560/400 box. Verify canvas scene intends 560/400. |
| 5 | 🟢 Low | `<img src="/xavorian-wordmark.svg">` (header + footer) has **no explicit `width`/`height` attributes** | `out/index.html` line 56 & line 807: `class="h-8 w-auto"` only | Lighthouse "image elements lack explicit dimensions" flag; `h-8` CSS already prevents real CLS, but add `width`/`height` (e.g. intrinsic SVG ratio) for a clean audit. |
| 6 | 🟢 Low | No PWA manifest, no service worker | `public/` has favicon + icon-192/512 only; no `manifest.webmanifest`, no `sw.js`; no manifest link in HTML head | Low impact for a marketing page; hurts "installable" feel on mobile. Icons already exist → adding a manifest is a ~10-line file. |
| 7 | ℹ️ Info | Stale unreferenced chunks shipped in `out/` | `framework-d170….js` (140 kB) & `main-e4f….js` (117 kB) referenced by **0** files (pages-router remnants) | Clean `out/` before export hygiene; harmless (never requested). |
| 8 | ℹ️ Info | `polyfills-…js` (112 kB raw / 39.5 kB gz) referenced in every page | `<script … noModule>` in `index.html` | Correct pattern — modern browsers skip it entirely. No action. |
| 9 | ℹ️ Info | Wordmark preloaded: `<link rel="preload" as="image" href="/xavorian-wordmark.svg">` | `index.html:6` | Fine but low-value (1.4 kB gz SVG, inline CSS-sized; header renders on CSS-cost anyway). Harmless; could drop or keep. SVG itself is well-optimized. |
| 10 | ℹ️ Info | No `preconnect`/`dns-prefetch` needed (all resources same-origin); none present | scan: `preconnect: 0`, remote fetch origins: 0 | Nothing to do — confirms zero third-party cost. |

### Check-by-check results

1. **TTFB** — Dev loopback: pages unusable (500); static files 4–15 ms. Production static host expectation ≈50–250 ms. HTML: **8 initial module scripts (+webpack at body end, +1 noModule polyfill), 1 CSS, 1 image preload, 0 modulepreload.** Only the CSS is render-blocking; every script is `async`. ✅
2. **LCP** — h1 text (system fonts). Hero strategy (canvas/SVG, no raster) is sound: nothing heavy in the LCP path; `aspect-[560/400]` reserves space; fade-up delays paint of h1 by ≤0.3 s worst case (acceptable, but the `<h1>` could skip the 80 ms delay to shave LCP).
3. **Images** — 2× `<img>` (wordmark, header+footer): `alt="Xavorian"` ✓ meaningful-ish (aria-label "Xavorian home" on wrapping link makes it arguably redundant but fine), no width/height (finding #5), no `loading=lazy` needed (header is in-viewport; footer copy lazy would be a micro-win), format SVG ✓. Favicons: ICO+PNG ✓. No `<picture>`/`<video>`/remote images. Preload present for wordmark; no preconnect needs (same-origin only).
4. **Three.js chunk** — **confirmed async-only**: `b536a0f1` string appears nowhere in `index.html`; reachable only via webpack `s.e(689)`+`s.e(472)`+`s.e(320)` from the page chunk after the compiled guard (`matchMedia('(prefers-reduced-motion: reduce)')`, `innerWidth<640`, canvas `getContext('webgl')` probe) passes, post-hydration, with `loading: <TrustGateFallback/>` and `ssr:false`. SSR HTML ships the fallback SVG inline → zero cost for ineligible users, no flash. Guard design: **model implementation**. Optional upgrades in finding #3 (idle prefetch / pointer-gating / visibility-paused frameloop).
5. **CSS** — single sheet 26.4 kB raw / 5.9 kB gz; Tailwind `content: ['./index.html','./src/**/*.{ts,tsx}']` purge correct; custom tokens/keyframes small. Render-blocking is necessary and cheap. ✅
6. **Fonts/rendering** — system stack only; **0 remote font requests**; `antialiased`, no FOIT risk. ✅
7. **SW/manifest** — absent (finding #6); robots.txt + sitemap.xml present in `out/` ✓.
8. **Caching** — dev-only evidence (`no-cache` on HTML, `max-age=0` on public assets); no host-level config in repo (finding #2). Filenames are content-hashed → safe for immutable caching.
9. **Mobile 3G (<640 px)** — **≈137 kB gz transfer, 8 requests, no three chunk** (see §2). Excellent.

---

## 4. Executive summary

- **Score: ~95/100 (mobile lab), ~99/100 (desktop).**
- **Mobile: LCP ≈ 1.4–1.9 s · INP ≈ 50–150 ms · CLS ≈ 0.00–0.02** — all "Good".
- **First-load `/`: ≈137 kB gz (106 kB JS + 21 kB HTML + 5.9 kB CSS + ~3 kB images) across 8 requests; ~543 kB raw.** Three.js (684 kB raw) and its fiber/drei companions (144 kB raw) load only post-hydration on wide, motion-allowed, WebGL-capable devices.
- **Top 5 to action:** (1) fix the 500-ing dev server [env]; (2) confirm/add immutable caching headers for `/_next/static/*` at host level; (3) hero aspect mismatch 560/400 vs 560/320; (4) idle/hover-gate the 216 kB-gz 3D chain + pause frameloop off-screen (battery); (5) add width/height to wordmark `<img>` (+ optional PWA manifest).
- Nothing about the current architecture threatens Core Web Vitals. The heavy 3D payload is correctly quarantined.
