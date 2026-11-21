import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { GUIDES } from '@/data/guides';
import { getAllPublishedBlogsForSeo } from '@/lib/publishedBlogsSync';

// Revalidate every 5 minutes so each day's 10 newly published articles at 09:00 Africa/Lagos
// and any newly published Supabase blog posts automatically enter the sitemap.
export const revalidate = 300;

const HOMEPAGE_LAST_MODIFIED = new Date('2026-11-20T00:00:00Z');
const CORE_PAGES_LAST_MODIFIED = new Date('2026-11-15T00:00:00Z');
const LEGAL_PAGES_LAST_MODIFIED = new Date('2026-10-01T00:00:00Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const publishedBlogs = await getAllPublishedBlogsForSeo(now);

  const latestBlogModified =
    publishedBlogs.length > 0
      ? new Date(publishedBlogs[0].updatedAt || publishedBlogs[0].publishedAt)
      : HOMEPAGE_LAST_MODIFIED;

  const latestGuideModified =
    GUIDES.length > 0
      ? new Date(
          GUIDES.reduce(
            (latest, g) => (g.date > latest ? g.date : latest),
            GUIDES[0].date
          )
        )
      : CORE_PAGES_LAST_MODIFIED;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: HOMEPAGE_LAST_MODIFIED },
    { url: `${BASE_URL}/how-it-works`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/about`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/vision`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/agents`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/blog`, lastModified: latestBlogModified },
    { url: `${BASE_URL}/blog-directory.html`, lastModified: latestBlogModified },
    { url: `${BASE_URL}/guides`, lastModified: latestGuideModified },
    { url: `${BASE_URL}/faq`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/contact`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/support`, lastModified: CORE_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/terms`, lastModified: LEGAL_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/privacy`, lastModified: LEGAL_PAGES_LAST_MODIFIED },
    { url: `${BASE_URL}/disclaimer`, lastModified: LEGAL_PAGES_LAST_MODIFIED },
  ];

  const blogRoutes: MetadataRoute.Sitemap = publishedBlogs.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
  }));

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}
