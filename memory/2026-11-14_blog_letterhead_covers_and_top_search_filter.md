# Blog Letterhead Cover Generator & Properties-Style Top Search/Filter

## Context
Replaced diagram/chart blog cover images (`/blog-illustrations/*.svg`) with Xavorian letterhead-inspired editorial covers (`RC-9912416`, top-left wordmark, miniature homes background, article title) while preserving all real house photos, and moved `/blog` search & filters into a compact sticky bar at the top matching `Browse.tsx`.

## Changes Made
- Created `landing/src/app/api/blog-cover/route.ts` serving dynamic `1200x675` `image/svg+xml` letterhead covers embedding `public/xavorian-wordmark.svg` PNG, `RC-9912416`, miniature residential skyline, and wrapped article title.
- Rebuilt top sticky search + Filter Popover + horizontal pillar icon bar in `landing/src/components/BlogCatalogClient.tsx`, `landing/src/app/blog/page.tsx`, and `xavorian app/src/pages/Blog.tsx`; removed `"Explore All Nigerian Real Estate Articles"` card.
- Updated `landing/src/data/blog.ts`, `landing/src/data/blog/scheduled1000.json` (850 updated covers + 150 preserved house photos), `landing/src/app/blog/[slug]/page.tsx`, `landing/public/blog-directory.html`, and Supabase `public.blog_posts` (899 letterhead covers, 157 preserved real house photos, 0 diagrams remaining).

## Verification
- `landing`: `npx tsc --noEmit` and `npm run build` passed (exit code 0, 73 static routes + `/api/blog-cover`).
- `xavorian app`: `npx tsc --noEmit` and `npm run build` passed (exit code 0).
- Live `localhost:3000` checks confirmed 200 OK across `/api/blog-cover`, `/blog`, `/blog-directory.html`, and sample editorial + house detail pages.
