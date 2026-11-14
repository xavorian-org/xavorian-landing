# Automated Sitemaps, WebSub Feeds & Multi-Channel Search Engine Auto-Ping

## Context
Ensured every published blog post and property/house listing enters both `xavorian.com/sitemap.xml` and `marketplace.xavorian.com/sitemap.xml` and triggers automatic pings via IndexNow, Google WebSub (`pubsubhubbub.appspot.com`), and optional Google Indexing API v3 / Search Console Sitemap API.

## Changes Made
- Added `landing/src/lib/publishedBlogsSync.ts` & updated `landing/src/app/sitemap.ts` + `landing/vercel.json` to merge Supabase published `blog_posts` with static released posts (`revalidate = 300`) plus `/blog-directory.html` and `/feed.xml`.
- Added `landing/src/app/feed.xml/route.ts` and deployed `dynamic-sitemap` (paginated blogs + properties), `dynamic-feed`, and `ping-search-engines` Supabase Edge Functions.
- Fixed `xavorian app/vercel.json` so `b99e0878fe4fccf46c76abfe6f4e4682.txt` and `feed.xml` are excluded from the SPA catch-all rewrite.
- Applied migration `20261114150000_auto_ping_google_and_indexnow.sql` adding `search_engine_pings`, instant triggers on `public.properties` and `public.blog_posts`, and daily `09:05 WAT` `pg_cron` bulk ping.

## Verification
- Passed `npx tsc --noEmit && npm run build` for `landing` (`74` routes) and `xavorian app`.
- Verified `localhost:3000/sitemap.xml` (`200`, `66` blog URLs) and `/feed.xml` (`200`, `66` entries), Supabase `dynamic-sitemap` (`200`, `66` blogs / `130` properties), `dynamic-feed` (`200`, `196` entries), and live `ping-search-engines` (`200` on `www.xavorian.com` IndexNow + `204` on Google WebSub hub for both domains).
