# Xavorian Landing (waitlist site)

The public, SEO-first face of Xavorian — a Next.js 14 (App Router) site
deployed serverless on Vercel. Every content page is real HTML prerendered at
build time; only the OG/Twitter card images render on demand. CTAs resolve to
`/waitlist`, never to the main marketplace app.

## Stack

- Next.js 14 (App Router) + TypeScript, serverless on Vercel (pages are
  statically prerendered; `/opengraph-image` + `/twitter-image` are edge routes
  that generate the social card via `next/og` at request time — never hardcode
  an absolute `og:image` URL again, the file conventions do it automatically)
- Tailwind CSS — tokens in `src/app/globals.css`
  (white canvas · black primary · one purple accent `#7C3AED` / `hsl(262 83% 58%)`)
- Three.js (`three` + `@react-three/fiber` + `@react-three/drei`) for the
  TrustGate hero scene — lazily loaded, guarded (WebGL + reduced-motion + small
  screens fall back to a static SVG illustration)
- Supabase for the waitlist (`@supabase/supabase-js`, anon insert only)

## Commands

```bash
npm install        # once
npm run dev        # local dev at http://localhost:3000
npm run build      # production build → .next/ (Vercel deploys this serverlessly)
```

## Content architecture (built to scale to 40–50 pages)

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx` + `src/components/landing/*` sections |
| `/waitlist` | `src/app/waitlist/page.tsx` + `src/components/WaitlistForm.tsx` |
| `/blog`, `/blog/:slug` | `src/data/blog.ts` registry + `generateStaticParams` |
| `/guides`, `/guides/:slug` | `src/data/guides.ts` registry + `generateStaticParams` |
| `/how-it-works`, `/about`, `/vision`, `/faq`, `/agents`, `/support`, `/contact` | `src/app/<route>/page.tsx` |
| `/terms`, `/privacy`, `/disclaimer` | verbatim ports of the main-site legal docs |
| `sitemap.xml`, `robots.txt` | `src/app/sitemap.ts`, `src/app/robots.ts` (generated at build) |

**Adding a page:** for content pages, append to `src/data/blog.ts` or
`src/data/guides.ts` — route, metadata, JSON-LD and sitemap entry are generated
automatically. For bespoke pages, add a folder under `src/app/` with `page.tsx`
and use `pageMetadata()` from `src/lib/seo.tsx`.

Brand facts, city list and the four verification gates live in
`src/data/site.ts` — edit once, the whole site follows.

## Waitlist backend

`supabase/waitlist.sql` creates the `waitlist` table (anon insert-only RLS).
Run it once against Supabase project `bxiptffmsxamsgkzqutj`. If the table is
unreachable the form stores leads in `localStorage` (`xavorian-waitlist-backup`)
so no signup is ever lost.

## Design rules (inherit from the Xavorian UI skill)

- No gradients. No AI-cliché purple/black glow. Solid tokens only.
- Purple `#7C3AED` is an *accent*: icons, tiny dots, focus rings, the 3D seal.
- Semantic Tailwind tokens (`bg-background`, `text-muted-foreground`, `border-border`) — never raw hex.
- One `<h1>` per page; JSON-LD where it earns its place.
- Respect `prefers-reduced-motion`; keep First-Load JS lean.
