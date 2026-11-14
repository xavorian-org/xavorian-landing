# Fix `postCover` Letterhead Precedence & Remove Blurry Car Thumbnail from Blog Covers

## Context
Fixed `postCover(post)` in `landing/src/data/blog.ts` checking embedded `{ home: ... }` body spotlights before `post.coverImage`, which had overridden `/api/blog-cover` on editorial articles with the blurry white SUV thumbnail (`b172e7ff-6b91-4216-884c-24334c8a9e79`) from the Garki commercial listing.

## Changes Made
- Reordered `postCover(post)` in `landing/src/data/blog.ts` so `/api/blog-cover` always wins over inline `{ home: ... }` blocks, added `HOUSE_CATEGORY_RE` guard, and blocked `b172e7ff`, `d01f5451`, and `4edb5a6b` in `isHousePhotoCover` (mirrored in `xavorian app/src/pages/Blog.tsx`).
- Moved `Featured Cover Story` pills into the card body when displaying a letterhead cover (`BlogCatalogClient.tsx` and `xavorian app/src/pages/Blog.tsx`) so the top-left Xavorian wordmark and `RC-9912416` remain unobstructed.
- Synced `scheduled1000.json`, `blog-directory.html`, and Supabase `public.blog_posts` (`13` rows updated → `0` blocked car rows, `912` letterhead covers, `144` real property photos).

## Verification
- Both `landing` and `xavorian app` passed `npx tsc --noEmit` and `npm run build` (`exit 0`).
- Live `http://localhost:3000/blog` and `/blog-directory.html` verified `hasBlockedCar: false` with `/api/blog-cover` on `how-verified-agents-win-serious-buyers-on-xavorian` and real house photos preserved.
