import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Clock,
  Compass,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { MARKETPLACE_URL } from '@/data/site';
import { PropertyMatchForm } from '@/components/PropertyMatchForm';
import { getReleasedBlogPosts, postCover } from '@/data/blog';
import { BlogCatalogClient, type BlogCardItem } from '@/components/BlogCatalogClient';

export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: 'Blog: Verified Houses, Land, Area Guides & Real Estate Advice in Nigeria',
  description:
    'Browse all Xavorian blog articles: verified houses and land for sale in Lagos, Abuja, Ogun, Asaba, Benin City, Port Harcourt, Ibadan and Owerri, plus area guides, title verification playbooks, building costs and scam-prevention guides.',
  path: '/blog',
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

const QUICK_LOCATIONS = [
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
    const isIllustration = Boolean(cover && cover.endsWith('.svg'));
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      formattedDate: formatDate(post.date),
      readingTime: post.readingTime,
      category: post.category,
      cover,
      isIllustration,
      authorName: post.author?.name ?? 'Xavorian Property Desk',
    };
  });

  // Compute category counts
  const categoryMap = new Map<string, BlogCardItem[]>();
  for (const p of serializedPosts) {
    const list = categoryMap.get(p.category) ?? [];
    list.push(p);
    categoryMap.set(p.category, list);
  }
  const categories = Array.from(categoryMap.entries())
    .map(([name, items]) => ({ name, count: items.length }))
    .sort((a, b) => b.count - a.count);

  const leadPost = serializedPosts[0];
  const spotlightPosts = serializedPosts.slice(1, 4);

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

      {/* Full-width edge-to-edge container touching all sides on mobile, tablet, laptop & widescreen */}
      <div className="mx-auto w-full max-w-[1720px] px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-14 lg:py-16">
        {/* Top Masthead Bar — spans full width */}
        <header className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  The Xavorian Journal
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/70 px-3 py-1 text-xs font-semibold text-foreground">
                  <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {serializedPosts.length} articles live · 10 new editions daily at 9:00 a.m. Lagos time
                </span>
              </div>
              <h1 className="mt-4 text-balance text-2xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                Houses, land, and honest property talk across Nigeria.
              </h1>
              <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                Real, verified property listings from the Xavorian marketplace, street-by-street neighborhood guides from Lagos and Abuja to Benin City and Owerri, and practical playbooks on land titles, rent laws, building costs, and staying scam-free.
              </p>
            </div>

            {/* Right side of Masthead: Quick Stats & Direct Marketplace Action */}
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-muted/40 p-5 lg:col-span-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-card p-3 border border-border/60">
                  <p className="text-lg font-extrabold text-foreground sm:text-xl">{serializedPosts.length}</p>
                  <p className="text-[11px] font-medium text-muted-foreground">Live Guides</p>
                </div>
                <div className="rounded-xl bg-card p-3 border border-border/60">
                  <p className="text-lg font-extrabold text-foreground sm:text-xl">{categories.length}</p>
                  <p className="text-[11px] font-medium text-muted-foreground">Topic Pillars</p>
                </div>
                <div className="rounded-xl bg-card p-3 border border-border/60">
                  <p className="text-lg font-extrabold text-foreground sm:text-xl">4 Gates</p>
                  <p className="text-[11px] font-medium text-muted-foreground">Verified Data</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`${MARKETPLACE_URL}/properties`}
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  Browse Verified Properties
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#all-articles-directory"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Full Index
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Full-Width Bento Hero Grid: Lead Cover Story (Left 7 cols) + Editor's Picks & Corridors (Right 5 cols) */}
        {leadPost && (
          <section aria-label="Featured stories" className="mt-6 grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Lead Cover Story */}
            <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-foreground/30 hover:shadow-lg lg:col-span-7">
              <Link href={`/blog/${leadPost.slug}`} className="flex h-full flex-col">
                {leadPost.cover && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={leadPost.cover}
                      alt={leadPost.isIllustration ? `${leadPost.title} — Editorial illustration` : leadPost.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-background shadow-sm">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Featured Cover Story
                      </span>
                      <span className="rounded-full bg-background/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                        {leadPost.category}
                      </span>
                    </div>
                    {leadPost.isIllustration && (
                      <span className="absolute right-4 top-4 rounded-full bg-amber-100/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-900 shadow-sm">
                        Illustration
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={leadPost.date}>{leadPost.formattedDate}</time>
                      <span aria-hidden="true">·</span>
                      <span>{leadPost.readingTime}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-foreground">{leadPost.authorName}</span>
                    </div>
                    <h2 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-foreground group-hover:text-accent transition-colors sm:text-2xl lg:text-3xl">
                      {leadPost.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {leadPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                      Grounded in verified Nigerian market data
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-transform group-hover:translate-x-0.5">
                      Read Featured Article
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Right Column: Editor's Picks Stack + Live Location Hubs */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div className="flex-1 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between border-b border-border pb-3.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                    Editor&apos;s Picks &amp; Essential Playbooks
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">Updated daily</span>
                </div>
                <div className="mt-4 divide-y divide-border">
                  {spotlightPosts.map((sp) => (
                    <article key={sp.slug} className="py-3.5 first:pt-0 last:pb-0">
                      <Link href={`/blog/${sp.slug}`} className="group flex items-start gap-4">
                        {sp.cover && (
                          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={sp.cover}
                              alt={sp.title}
                              loading="eager"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {sp.category}
                          </span>
                          <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-foreground group-hover:text-accent transition-colors">
                            {sp.title}
                          </h3>
                          <p className="mt-1 text-[11px] text-muted-foreground">
                            {sp.formattedDate} · {sp.readingTime}
                          </p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Live Marketplace Corridors Card */}
              <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h2 className="text-sm font-extrabold tracking-tight text-foreground">
                    Browse Live Verified Homes by Corridor
                  </h2>
                </div>
                <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {QUICK_LOCATIONS.map((loc) => (
                    <Link
                      key={loc.label}
                      href={loc.href}
                      className="group flex items-center justify-between rounded-xl border border-border bg-muted/30 px-3.5 py-2.5 transition-all hover:border-foreground/40 hover:bg-muted/70"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-foreground">{loc.label}</p>
                        <p className="truncate text-[11px] text-muted-foreground">{loc.sub}</p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interactive Filter, Search & Full-Width 1/2/3/4-Column Magazine Grid */}
        <BlogCatalogClient posts={serializedPosts} categories={categories} />

        {/* Full-Width Split CTA & Property Alert Section — touches left and right edges */}
        <section
          aria-label="Verified marketplace and property match alerts"
          className="mt-14 grid gap-6 lg:grid-cols-12 items-stretch"
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
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs font-semibold text-foreground">
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
                  3% Escrow Transaction Protection
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border">
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-accent"
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
                        <span className="font-semibold leading-snug text-foreground group-hover:text-accent transition-colors">
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
