import { BASE_URL, SITE_NAME } from '@/lib/seo';
import { getAllPublishedBlogsForSeo } from '@/lib/publishedBlogsSync';

export const revalidate = 300;

function escapeXml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const now = new Date();
  const blogs = await getAllPublishedBlogsForSeo(now);
  const feedUpdated = blogs[0]?.updatedAt || now.toISOString();

  const entries = blogs
    .map((b) => {
      const url = `${BASE_URL}/blog/${b.slug}`;
      return `  <entry>
    <title>${escapeXml(b.title)}</title>
    <link href="${escapeXml(url)}" rel="alternate" type="text/html"/>
    <id>${escapeXml(url)}</id>
    <published>${escapeXml(new Date(b.publishedAt).toISOString())}</published>
    <updated>${escapeXml(new Date(b.updatedAt || b.publishedAt).toISOString())}</updated>
    <author><name>${escapeXml(b.authorName)}</name></author>
    <category term="${escapeXml(b.category)}"/>
    <summary>${escapeXml(b.excerpt || b.title)}</summary>
  </entry>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(`${SITE_NAME} Real Estate Journal`)}</title>
  <subtitle>Verified Nigerian real estate listings, buyer safety playbooks, area guides, and land title insights.</subtitle>
  <link href="https://pubsubhubbub.appspot.com/" rel="hub"/>
  <link href="${BASE_URL}/feed.xml" rel="self" type="application/atom+xml"/>
  <link href="${BASE_URL}/blog" rel="alternate" type="text/html"/>
  <id>${BASE_URL}/feed.xml</id>
  <updated>${escapeXml(new Date(feedUpdated).toISOString())}</updated>
${entries}
</feed>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  });
}
