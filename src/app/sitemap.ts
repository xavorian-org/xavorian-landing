import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { BLOG_POSTS } from '@/data/blog';
import { GUIDES } from '@/data/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: '/' },
    { path: '/waitlist' },
    { path: '/how-it-works' },
    { path: '/about' },
    { path: '/vision' },
    { path: '/agents' },
    { path: '/blog' },
    { path: '/guides' },
    { path: '/faq' },
    { path: '/contact' },
    { path: '/support' },
    { path: '/terms' },
    { path: '/privacy' },
    { path: '/disclaimer' },
  ].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  const guideRoutes = GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}
