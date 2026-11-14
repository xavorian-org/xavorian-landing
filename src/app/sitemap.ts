import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { GUIDES } from '@/data/guides';
import { getAllPublishedBlogsForSeo } from '@/lib/publishedBlogsSync';

// Revalidate every 5 minutes so each day's 10 newly published articles at 09:00 Africa/Lagos
// and any newly published Supabase blog posts automatically enter the sitemap.
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const publishedBlogs = await getAllPublishedBlogsForSeo(now);

  const staticRoutes = [
    { path: '/' },
    { path: '/how-it-works' },
    { path: '/about' },
    { path: '/vision' },
    { path: '/agents' },
    { path: '/blog' },
    { path: '/blog-directory.html' },
    { path: '/feed.xml' },
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

  const blogRoutes = publishedBlogs.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
  }));

  const guideRoutes = GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}
