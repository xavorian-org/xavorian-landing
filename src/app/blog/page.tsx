import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  ShieldCheck,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { MARKETPLACE_URL } from '@/data/site';
import { PropertyMatchForm } from '@/components/PropertyMatchForm';
import { getReleasedBlogPosts, isHousePhotoCover, postCover } from '@/data/blog';
import { BlogCatalogClient, type BlogCardItem, type QuickCorridorItem } from '@/components/BlogCatalogClient';

export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: 'Blog: Verified Houses, Land, Area Guides & Real Estate Advice in Nigeria',
  description:
    'Browse all Xavorian blog articles: verified houses and land for sale in Lagos, Abuja, Ogun, Asaba, Benin City, Port Harcourt, Ibadan and Owerri, plus area guides, title verification playbooks, building costs and scam-prevention guides.',
  path: '/blog',
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

const QUICK_LOCATIONS: QuickCorridorItem[] = [
  { label: 'Lagos Properties', href: `${MARKETPLACE_URL}/location/lagos`, sub: 'Lekki · Ikoyi · Ikeja · Ajah · Epe' },
  { label: 'Abuja (FCT)', href: `${MARKETPLACE_URL}/location/abuja`, sub: 'Maitama · Guzape · Jabi · Katampe · Lugbe' },
  { label: 'Benin City (Edo)', href: `${MARKETPLACE_URL}/location/benin-city`, sub: 'GRA · Ugbor · Sapele Rd · Ugbowo' },
  { label: 'Ogun Corridor', href: `${MARKETPLACE_URL}/properties?state=Ogun`, sub: 'Mowe · Ofada · Shimawa · Abeokuta' },
  { label: 'Asaba (Delta)', href: `${MARKETPLACE_URL}/location/asaba`, sub: 'Okpanam Rd · Summit Rd · GRA' },
  { label: 'Owerri (Imo)', href: `${MARKETPLACE_URL}/properties?state=Imo`, sub: 'New Owerri · World Bank · Irette' },
];

export default function BlogIndexPage() {
  const posts = getReleasedBlogPosts(new Date());

  const serializedPosts: BlogCardItem[] = posts.map((post) => {
    const cover = postCover(post);
    const mins = Number.parseInt(post.readingTime, 10) || 4;
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      formattedDate: formatDate(post.date),
      readingTime: post.readingTime,
      readingMinutes: mins,
      category: post.category,
      cover,
      isHousePhoto: isHousePhotoCover(cover),
      authorName: post.author?.name ?? 'Xavorian Property Desk',
    };
  });

  const categoryMap = new Map<string, BlogCardItem[]>();
  for (const p of serializedPosts) {
    const list = categoryMap.get(p.category) ?? [];
    list.push(p);
    categoryMap.set(p.category, list);
  }
  const categories = Array.from(categoryMap.entries())
    .map(([name, items]) => ({ name, count: items.length }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'The Xavorian Real Estate Journal',
            description:
              'Verified homes, area guides, land title verification playbooks, building cost breakdowns, and scam-prevention advice for Nigerian real estate.',
            url: `${BASE_URL}/blog`,
            publisher: {
              '@type': 'Organization',
              name: 'Xavorian',
              url: BASE_URL,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Xavorian Blog Articles',
            numberOfItems: serializedPosts.length,
            itemListElement: serializedPosts.slice(0, 200).map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${BASE_URL}/blog/${post.slug}`,
              name: post.title,
            })),
          },
        ]}
      />

      {/* Sticky Top Search & Filter + Masthead + Featured Story + Magazine Grid */}
      <BlogCatalogClient
        posts={serializedPosts}
        categories={categories}
        quickLocations={QUICK_LOCATIONS}
        marketplaceUrl={MARKETPLACE_URL}
      />

      <div className="mx-auto w-full max-w-[1720px] px-4 pb-10 sm:px-6 sm:pb-14 md:px-10 lg:px-14 lg:pb-16">
        {/* Full-Width Split CTA & Property Alert Section */}
        <section
          aria-label="Verified marketplace and property match alerts"
          className="mt-14 grid items-stretch gap-6 lg:grid-cols-12"
        >
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Four Verification Gates
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Every listing on Xavorian passes identity, bank-match, document, and AI truthing gates before publication.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you are renting a 2-bedroom flat in Yaba, buying a detached duplex in Lekki Phase 1 or Guzape, or verifying a registered survey plan in Benin City or Asaba, Xavorian filters out ghost agents and cloned photos upfront.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 text-xs font-semibold text-foreground sm:grid-cols-2">
                <li className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-3">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                  Government ID + Liveness KYC
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-3">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                  Bank Account Name Match
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-3">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                  C of O / Deed / Survey Audit
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-3">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                  Automated Release Verification
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <Link
                href={`${MARKETPLACE_URL}/properties`}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore Live Verified Listings
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                How Xavorian Verification Works
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Building2 className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
                  Get Verified Properties Matched to Your Budget
                </h2>
                <p className="text-xs text-muted-foreground">
                  Tell us your state, property type, and budget. We send matching verified homes twice a week at most.
                </p>
              </div>
            </div>
            <PropertyMatchForm source="blog:index" variant="compact" className="mt-5" />
          </div>
        </section>

        {/* Complete Server-Rendered HTML Article Directory for Effortless Google & AI Indexing */}
        <section
          id="all-articles-directory"
          aria-label="Complete HTML directory of all published Xavorian blog articles"
          className="mt-14 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">
                <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                Complete Crawlable Archive
              </span>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                All Published Articles by Topic ({serializedPosts.length} Guides)
              </h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Direct HTML index of every live article on Xavorian, organized across {categories.length} Nigerian real estate pillars for fast reading and search engine indexing.
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-violet-700"
            >
              View Step-by-Step Playbooks
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from(categoryMap.entries()).map(([catName, catPosts]) => (
              <div
                key={catName}
                className="flex flex-col rounded-2xl border border-border bg-background p-5"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-foreground">
                    {catName}
                  </h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground">
                    {catPosts.length} {catPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>
                <ul className="mt-3 divide-y divide-border/60">
                  {catPosts.map((p) => (
                    <li key={p.slug} className="py-2.5 first:pt-0 last:pb-0">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group flex items-start justify-between gap-3 text-xs sm:text-[13px]"
                      >
                        <span className="font-semibold leading-snug text-foreground transition-colors group-hover:text-violet-700">
                          {p.title}
                        </span>
                        <span className="shrink-0 text-[11px] text-muted-foreground">
                          {p.readingTime}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
