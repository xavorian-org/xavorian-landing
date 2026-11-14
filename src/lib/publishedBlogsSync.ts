import { getReleasedBlogPosts } from '@/data/blog';

export interface PublishedBlogSeoEntry {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
}

/**
 * Merges the statically bundled released blog posts with all currently published rows in
 * Supabase `public.blog_posts` (filtering out future scheduled drafts) so `sitemap.xml` and
 * `feed.xml` always reflect every live article on release day.
 */
export async function getAllPublishedBlogsForSeo(
  now: Date = new Date()
): Promise<PublishedBlogSeoEntry[]> {
  const bySlug = new Map<string, PublishedBlogSeoEntry>();

  for (const post of getReleasedBlogPosts(now)) {
    const iso = new Date(post.scheduledFor || post.date).toISOString();
    bySlug.set(post.slug, {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category || 'Real Estate Guide',
      authorName: post.author?.name || 'Xavorian Property Desk',
      publishedAt: iso,
      updatedAt: iso,
    });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const nowIso = now.toISOString();
      let offset = 0;
      const pageSize = 1000;
      while (true) {
        const endpoint =
          `${supabaseUrl.replace(/\/$/, '')}/rest/v1/blog_posts` +
          `?select=slug,title,excerpt,category,author,published_at,updated_at,created_at` +
          `&status=eq.published` +
          `&or=(published_at.is.null,published_at.lte.${encodeURIComponent(nowIso)})` +
          `&order=published_at.desc.nullslast` +
          `&offset=${offset}&limit=${pageSize}`;

        const res = await fetch(endpoint, {
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
          next: { revalidate: 300 },
        });
        if (!res.ok) break;
        const rows = (await res.json()) as Array<{
          slug?: string;
          title?: string;
          excerpt?: string | null;
          category?: string | null;
          author?: string | null;
          published_at?: string | null;
          updated_at?: string | null;
          created_at?: string | null;
        }>;
        if (!Array.isArray(rows) || rows.length === 0) break;

        for (const r of rows) {
          if (!r.slug) continue;
          const pub = r.published_at || r.created_at || nowIso;
          const upd = r.updated_at || pub;
          const existing = bySlug.get(r.slug);
          bySlug.set(r.slug, {
            slug: r.slug,
            title: r.title || existing?.title || r.slug,
            excerpt: r.excerpt || existing?.excerpt || '',
            category: r.category || existing?.category || 'Real Estate Guide',
            authorName: r.author || existing?.authorName || 'Xavorian Property Desk',
            publishedAt: pub,
            updatedAt: upd,
          });
        }
        if (rows.length < pageSize) break;
        offset += pageSize;
      }
    } catch {
      // Static bundle fallback remains intact if PostgREST is unreachable during build
    }
  }

  return Array.from(bySlug.values()).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
}
