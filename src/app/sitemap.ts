import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { getReleasedBlogPosts } from '@/data/blog';
import { GUIDES } from '@/data/guides';

// Revalidate every 5 minutes so each day's 10 newly published articles at 09:00 Africa/Lagos
// automatically enter the sitemap while future scheduled drafts remain excluded.
export const revalidate = 300;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const releasedBlogPosts = getReleasedBlogPosts(now);

  const staticRoutes = [
    { path: '/' },
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

  const blogRoutes = releasedBlogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  const guideRoutes = GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}
