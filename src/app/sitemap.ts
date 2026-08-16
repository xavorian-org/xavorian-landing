import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { BLOG_POSTS } from '@/data/blog';
import { GUIDES } from '@/data/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: '/', priority: 1 },
    { path: '/waitlist', priority: 0.9 },
    { path: '/how-it-works', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/vision', priority: 0.6 },
    { path: '/agents', priority: 0.8 },
    { path: '/blog', priority: 0.7 },
    { path: '/guides', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/contact', priority: 0.5 },
    { path: '/support', priority: 0.5 },
    { path: '/terms', priority: 0.3 },
    { path: '/privacy', priority: 0.3 },
    { path: '/disclaimer', priority: 0.3 },
  ].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: r.priority,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const guideRoutes = GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}
