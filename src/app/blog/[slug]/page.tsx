import { MARKETPLACE_URL } from '@/data/site';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  Info,
  ListFilter,
  MapPin,
  ShieldCheck,
  Sparkles,
  UserCircle,
  AlertTriangle,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL, SITE_NAME } from '@/lib/seo';
import { PropertyMatchForm } from '@/components/PropertyMatchForm';
import {
  BLOG_POSTS,
  getReleasedBlogPosts,
  getReleasedPostBySlug,
  isHousePhotoCover,
  postCover as coverOf,
  postHomes as homesIn,
  type BlogPost,
} from '@/data/blog';
import { BLOG_HOMES, type BlogHome } from '@/data/blogHomes';
import { HomeShowcase } from '@/components/HomeShowcase';

// Revalidate every 5 minutes so scheduled articles unlock automatically at 09:00 Africa/Lagos each day,
// while unreleased or unknown slugs receive a real HTTP 404 via notFound().
export const revalidate = 300;
export const dynamicParams = true;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const getPost = (slug: string): BlogPost | undefined => getReleasedPostBySlug(slug, new Date());

/**
 * Smart recommendation engine:
 * Returns { primary, more, prev, next } from all released posts so every blog page
 * ends with a rich, highly relevant "Recommended Next Blog" spotlight + 4-card grid.
 */
function getRecommendations(current: BlogPost): {
  primary: BlogPost | undefined;
  more: BlogPost[];
  prev: BlogPost | undefined;
  next: BlogPost | undefined;
} {
  const released = getReleasedBlogPosts(new Date());
  const currentIndex = released.findIndex((p) => p.slug === current.slug);
  const others = released.filter((p) => p.slug !== current.slug);

  const prev =
    currentIndex > 0
      ? released[currentIndex - 1]
      : released.length > 1
        ? released[released.length - 1]
        : undefined;
  const next =
    currentIndex !== -1 && released.length > 1
      ? released[(currentIndex + 1) % released.length]
      : others[0];

  // Score other released posts by category match and shared title keywords
  const titleWords = new Set(
    current.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3 && !['with', 'from', 'that', 'this', 'what', 'when', 'your', 'before', 'nigeria', 'nigerian'].includes(w)),
  );

  const scored = others.map((candidate, idx) => {
    let score = 0;
    if (candidate.category === current.category) score += 15;
    const candWords = candidate.title.toLowerCase().split(/\s+/);
    for (const w of candWords) {
      if (titleWords.has(w.replace(/[^a-z0-9]/g, ''))) score += 4;
    }
    // Slight deterministic offset around current index for variety
    const dist = currentIndex !== -1 ? Math.abs(idx - currentIndex) : idx;
    if (dist <= 6) score += 2;
    return { post: candidate, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const picked = scored.slice(0, 5).map((s) => s.post);

  return {
    primary: picked[0] ?? next,
    more: picked.slice(1, 5),
    prev: prev?.slug !== current.slug ? prev : undefined,
    next: next?.slug !== current.slug ? next : undefined,
  };
}

/** Picks 3 relevant verified homes for the right sidebar even if the post has no inline home block */
function getSidebarHomes(post: BlogPost, inlineHomes: BlogHome[]): BlogHome[] {
  if (inlineHomes.length > 0) return inlineHomes.slice(0, 4);
  const allHomes = Object.values(BLOG_HOMES);
  const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
  const matched = allHomes.filter((h) => {
    const city = (h.city || '').toLowerCase();
    const state = (h.state || '').toLowerCase();
    return (city && haystack.includes(city)) || (state && haystack.includes(state));
  });
  return (matched.length >= 3 ? matched : [...matched, ...allHomes]).slice(0, 3);
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) notFound();
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: coverOf(post),
    type: 'article',
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;
  const { primary: recommendedPrimary, more: recommendedMore, prev: prevPost, next: nextPost } =
    getRecommendations(post);
  const inlineHomes = homesIn(post);
  const sidebarHomes = getSidebarHomes(post, inlineHomes);
  const cover = coverOf(post);
  const isHousePhoto = isHousePhotoCover(cover);

  const authorName = post.author?.name ?? 'Xavorian Property Desk';
  const authorRole = post.author?.role ?? 'Editorial & Verification Research';
  const authorTwitter = post.author?.twitter;

  // Build Table of Contents from h2/h3 blocks
  const tocItems: { id: string; text: string; level: 2 | 3 }[] = [];
  post.body.forEach((block, i) => {
    if (typeof block === 'object' && block !== null) {
      if ('h2' in block) {
        tocItems.push({ id: `section-${i}`, text: block.h2, level: 2 });
      } else if ('h3' in block) {
        tocItems.push({ id: `section-${i}`, text: block.h3, level: 3 });
      }
    }
  });

  const jsonLdItems: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      ...(cover && { image: [cover.startsWith('http') ? cover : `${BASE_URL}${cover}`] }),
      author: {
        '@type': authorName.includes('Desk') || authorName.includes('Team') ? 'Organization' : 'Person',
        name: authorName,
        ...(authorRole && { jobTitle: authorRole }),
        ...(authorTwitter && { sameAs: [`https://x.com/${authorTwitter.replace('@', '')}`] }),
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: BASE_URL,
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq && post.faq.length > 0) {
    jsonLdItems.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return (
    <>
      <JsonLd data={jsonLdItems} />

      {/* Full-Width Container touching all sides across mobile, tablet, laptop & widescreen */}
      <div className="mx-auto w-full max-w-[1720px] px-4 py-6 sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-14">
        {/* Top Breadcrumb & Quick Navigation Bar */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-xs text-muted-foreground sm:px-6"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="font-semibold text-foreground hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="font-semibold text-foreground hover:text-accent">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="rounded-full bg-muted px-2.5 py-0.5 font-semibold text-foreground">
              {post.category}
            </li>
          </ol>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Articles
            </Link>
            {recommendedPrimary && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href="#recommended-next-blog"
                  className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Recommended Next
                </a>
              </>
            )}
          </div>
        </nav>

        {/* Full-Width 12-Column Article Hero Banner */}
        <header className="overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className={cover ? 'lg:col-span-7' : 'lg:col-span-12'}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Xavorian Research &amp; Verification Desk
                </span>
              </div>

              <h1 className="mt-4 text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[40px]">
                {post.title}
              </h1>

              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[17px]">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground">
                    <UserCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{authorName}</p>
                    <p className="text-[11px] text-muted-foreground">{authorRole}</p>
                  </div>
                </div>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <time dateTime={post.date} className="font-medium text-foreground">
                  {formatDate(post.date)}
                </time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 font-medium text-foreground">
                  <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
            </div>

            {cover && (
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-[#FAF9F4] shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cover}
                    alt={isHousePhoto ? post.title : `${post.title} — Xavorian Journal Cover`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Mobile & Tablet Table of Contents (Collapsible so mobile/tablet readers can jump easily) */}
        {tocItems.length > 0 && (
          <details className="mt-5 rounded-2xl border border-border bg-card p-4 shadow-sm lg:hidden">
            <summary className="flex cursor-pointer items-center justify-between text-sm font-bold text-foreground">
              <span className="inline-flex items-center gap-2">
                <ListFilter className="h-4 w-4 text-accent" aria-hidden="true" />
                Jump to Section ({tocItems.length} headings)
              </span>
              <span className="text-xs font-medium text-muted-foreground">Tap to expand</span>
            </summary>
            <ol className="mt-3 space-y-2 border-t border-border pt-3 text-xs">
              {tocItems.map((item, idx) => (
                <li key={item.id} className={item.level === 3 ? 'pl-4' : ''}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg py-1 font-medium text-muted-foreground hover:text-foreground"
                  >
                    {idx + 1}. {item.text}
                  </a>
                </li>
              ))}
              {post.faq && post.faq.length > 0 && (
                <li>
                  <a href="#article-faq" className="block rounded-lg py-1 font-bold text-accent">
                    Frequently Asked Questions ({post.faq.length})
                  </a>
                </li>
              )}
              <li>
                <a href="#recommended-next-blog" className="block rounded-lg py-1 font-bold text-foreground">
                  ↓ Recommended Next Article
                </a>
              </li>
            </ol>
          </details>
        )}

        {/* Full-Width 12-Column Balanced 3-Rail Layout: Left Sticky Rail (3) + Main Article (6) + Right Sticky Rail (3) */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* LEFT RAIL (3 cols on desktop): Table of Contents + Recommended Quick Jump + 4 Gates */}
          <aside
            aria-label="Article table of contents and verification summary"
            className="hidden space-y-6 lg:col-span-3 lg:block lg:sticky lg:top-24"
          >
            {tocItems.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-foreground">
                  <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
                  In This Article
                </p>
                <ol className="mt-3.5 space-y-2 border-t border-border pt-3 text-xs">
                  {tocItems.map((item, idx) => (
                    <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg py-1 leading-snug font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="mr-1.5 font-bold text-foreground/60">{idx + 1}.</span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                  {post.faq && post.faq.length > 0 && (
                    <li className="pt-1 border-t border-border/60">
                      <a
                        href="#article-faq"
                        className="block rounded-lg py-1 font-bold text-foreground hover:text-accent"
                      >
                        Frequently Asked Questions
                      </a>
                    </li>
                  )}
                </ol>
              </div>
            )}

            {/* Left-Rail Recommended Next Blog Preview */}
            {recommendedPrimary && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Recommended Next
                </span>
                <Link href={`/blog/${recommendedPrimary.slug}`} className="group mt-3 block">
                  <p className="text-sm font-extrabold leading-snug text-foreground group-hover:text-accent transition-colors">
                    {recommendedPrimary.title}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {recommendedPrimary.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-foreground group-hover:translate-x-0.5 transition-transform">
                    Read recommended post
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            )}

            {/* Xavorian 4 Verification Gates Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <p className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                  How Xavorian Protects You
                </p>
              </div>
              <ul className="mt-3 space-y-2.5 border-t border-border pt-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span><strong className="text-foreground">Gate 1:</strong> Government ID + live selfie KYC check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span><strong className="text-foreground">Gate 2:</strong> Bank account name matched to verified ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span><strong className="text-foreground">Gate 3:</strong> C of O, Deed &amp; Survey AI document audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span><strong className="text-foreground">Gate 4:</strong> Multi-layer automated release verification</span>
                </li>
              </ul>
              <Link
                href="/how-it-works"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs font-bold text-foreground hover:bg-muted"
              >
                <FileCheck2 className="h-3.5 w-3.5" />
                See All 4 Verification Gates
              </Link>
            </div>
          </aside>

          {/* CENTER MAIN ARTICLE COLUMN (6 cols on desktop, full width on mobile/tablet) */}
          <div className="min-w-0 lg:col-span-6">
            <article className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="space-y-6 text-[15.5px] leading-[1.85] text-foreground/90 sm:text-[16.5px]">
                {post.body.map((block, i) => {
                  if (typeof block === 'string') return <p key={i}>{block}</p>;
                  if ('h2' in block) {
                    return (
                      <h2
                        key={i}
                        id={`section-${i}`}
                        className="scroll-mt-28 !mt-10 border-t border-border/60 pt-7 text-xl font-extrabold leading-snug tracking-tight text-foreground first:border-t-0 first:pt-0 sm:text-2xl"
                      >
                        {block.h2}
                      </h2>
                    );
                  }
                  if ('h3' in block) {
                    return (
                      <h3
                        key={i}
                        id={`section-${i}`}
                        className="scroll-mt-28 !mt-8 text-lg font-bold leading-snug tracking-tight text-foreground"
                      >
                        {block.h3}
                      </h3>
                    );
                  }
                  if ('list' in block) {
                    return (
                      <ul
                        key={i}
                        className="my-5 space-y-2.5 rounded-2xl border border-border/70 bg-muted/25 p-5 pl-9 list-disc text-[15px] leading-7 text-foreground/90"
                      >
                        {block.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if ('quote' in block) {
                    return (
                      <blockquote
                        key={i}
                        className="my-6 rounded-2xl border-l-4 border-primary bg-muted/40 p-5 italic text-foreground"
                      >
                        <p>{block.quote}</p>
                        {block.by && (
                          <cite className="mt-2 block text-xs font-semibold not-italic text-muted-foreground">
                            {block.by}
                          </cite>
                        )}
                      </blockquote>
                    );
                  }
                  if ('callout' in block) {
                    const isWarn = block.callout === 'warn';
                    return (
                      <aside
                        key={i}
                        className={`my-6 rounded-2xl border p-5 ${isWarn ? 'border-amber-300/80 bg-amber-50/60' : 'border-border bg-muted/30'
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          {isWarn ? (
                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                          ) : (
                            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                          )}
                          <div>
                            <p className="text-sm font-bold tracking-tight text-foreground">{block.title}</p>
                            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{block.body}</p>
                          </div>
                        </div>
                      </aside>
                    );
                  }
                  if ('figure' in block) {
                    const fig = block.figure;
                    if (fig.src.includes('/blog-illustrations/')) return null;
                    return (
                      <figure key={i} className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="relative bg-muted/40">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={fig.src} alt={fig.alt} loading="lazy" className="w-full object-cover" />
                        </div>
                        <figcaption className="border-t border-border bg-muted/30 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                          {fig.caption}
                        </figcaption>
                      </figure>
                    );
                  }
                  if ('links' in block) {
                    return (
                      <nav
                        key={i}
                        aria-label="Related Xavorian pages"
                        className="my-8 rounded-2xl border border-border bg-muted/20 p-5 sm:p-6"
                      >
                        <p className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground">
                          <Compass className="h-4 w-4 text-accent" aria-hidden="true" />
                          Explore matching pages on Xavorian
                        </p>
                        <ul className="mt-3 divide-y divide-border">
                          {block.links.map((lnk, j) => (
                            <li key={j}>
                              <Link
                                href={lnk.href}
                                className="group flex items-center justify-between gap-3 py-3 text-sm"
                              >
                                <span>
                                  <span className="font-semibold text-foreground group-hover:text-accent">
                                    {lnk.label}
                                  </span>
                                  {lnk.note && (
                                    <span className="block text-xs text-muted-foreground">{lnk.note}</span>
                                  )}
                                </span>
                                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    );
                  }
                  if ('home' in block) {
                    const home = BLOG_HOMES[block.home];
                    return home ? <HomeShowcase key={i} home={home} /> : null;
                  }
                  return null;
                })}
              </div>

              {/* FAQ Section inside the main column */}
              {post.faq && post.faq.length > 0 && (
                <section
                  id="article-faq"
                  className="mt-12 scroll-mt-28 rounded-2xl border border-border bg-muted/25 p-5 sm:p-6"
                >
                  <h2 className="text-lg font-extrabold tracking-tight text-foreground">
                    Frequently Asked Questions
                  </h2>
                  <dl className="mt-4 divide-y divide-border">
                    {post.faq.map((item, idx) => (
                      <div key={idx} className="py-4 first:pt-0 last:pb-0">
                        <dt className="text-sm font-bold text-foreground">{item.question}</dt>
                        <dd className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                          {item.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* Inline Bottom CTA inside Article Card */}
              <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-base font-extrabold tracking-tight text-foreground">
                      Ready to inspect verified properties without the wahala?
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Browse live homes and land that have passed Xavorian&apos;s 4-gate verification check.
                    </p>
                  </div>
                  <Link
                    href={`${MARKETPLACE_URL}/properties`}
                    className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg sm:text-sm"
                  >
                    Browse Verified Properties
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT RAIL (3 cols on desktop, stacked grid on tablet/mobile): Verified Homes + Property Match Form */}
          <aside
            aria-label="Verified marketplace listings and property alerts"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-1 lg:sticky lg:top-24"
          >
            {/* Live Verified Properties Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
                  <Building2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  Verified Homes Live Now
                </span>
                <Link
                  href={`${MARKETPLACE_URL}/properties`}
                  className="text-[11px] font-bold text-accent hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="mt-4 space-y-3.5">
                {sidebarHomes.map((h) => {
                  const thumb = h.images?.[0];
                  const place = [h.city, h.state].filter(Boolean).join(', ');
                  return (
                    <Link
                      key={h.slug}
                      href={`${MARKETPLACE_URL}/property/${h.slug}`}
                      target="_blank"
                      className="group flex items-start gap-3 rounded-xl border border-border/70 bg-muted/20 p-2.5 transition-all hover:border-foreground/30 hover:bg-muted/50"
                    >
                      {thumb && (
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={thumb}
                            alt={h.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-1 text-xs font-bold text-foreground group-hover:text-accent">
                          {h.title}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 truncate text-[11px] text-muted-foreground">
                          <MapPin className="h-3 w-3 shrink-0" />
                          {place}
                        </p>
                        <p className="mt-1 text-xs font-extrabold text-foreground">
                          ₦{h.price.toLocaleString('en-NG')}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <Link
                href={`${MARKETPLACE_URL}/properties`}
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:opacity-95"
              >
                Explore All Live Listings
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Property Match Opt-in Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-extrabold tracking-tight text-foreground">
                Get Properties Matched to You
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Tell us your state, property type, and budget. We email matching verified homes twice a week at most.
              </p>
              <PropertyMatchForm
                source={`blog:${post.slug}`.slice(0, 48)}
                variant="compact"
                className="mt-4"
              />
            </div>
          </aside>
        </div>

        {/* =====================================================================
            MANDATORY END-OF-ARTICLE RECOMMENDED BLOG SECTION (FULL-WIDTH)
            1. Primary Spotlight Recommendation ("Recommended Next Blog")
            2. 4-Column "More Recommended Articles" Grid touching all sides
            3. Full-Width Previous / All Blogs / Next Navigation Bar
           ===================================================================== */}
        <section
          id="recommended-next-blog"
          aria-label="Recommended blog articles to read next"
          className="mt-14 scroll-mt-24 border-t border-border pt-12"
        >
          {/* Primary Featured Recommendation Card */}
          {recommendedPrimary && (
            <div className="overflow-hidden rounded-3xl border-2 border-foreground/15 bg-card p-6 shadow-md sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                {coverOf(recommendedPrimary) && (
                  <div className="lg:col-span-5">
                    <Link
                      href={`/blog/${recommendedPrimary.slug}`}
                      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={coverOf(recommendedPrimary)}
                        alt={recommendedPrimary.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background shadow-sm">
                        Up Next in {recommendedPrimary.category}
                      </span>
                    </Link>
                  </div>
                )}

                <div className={coverOf(recommendedPrimary) ? 'lg:col-span-7' : 'lg:col-span-12'}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Recommended Next Article For You
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {recommendedPrimary.category}
                    </span>
                  </div>

                  <h2 className="mt-3.5 text-balance text-xl font-extrabold leading-snug tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                    <Link
                      href={`/blog/${recommendedPrimary.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {recommendedPrimary.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {recommendedPrimary.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={recommendedPrimary.date}>{formatDate(recommendedPrimary.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{recommendedPrimary.readingTime}</span>
                    </div>

                    <Link
                      href={`/blog/${recommendedPrimary.slug}`}
                      className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Read Recommended Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4-Column "More Recommended Articles" Grid — fills full width across mobile, tablet & desktop */}
          {recommendedMore.length > 0 && (
            <div className="mt-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
                    More Guides &amp; Listing Spotlights You Might Like
                  </h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Hand-picked Nigerian property guides related to {post.category.toLowerCase()}
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-accent"
                >
                  Browse all articles
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {recommendedMore.map((rec) => {
                  const recCover = coverOf(rec);
                  const isRecHouse = isHousePhotoCover(recCover);
                  return (
                    <article
                      key={rec.slug}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
                    >
                      <Link href={`/blog/${rec.slug}`} className="flex h-full flex-col">
                        {recCover && (
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF9F4]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={recCover}
                              alt={isRecHouse ? rec.title : `${rec.title} — Xavorian Journal Cover`}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            {isRecHouse && (
                              <span className="absolute left-3 top-3 rounded-full bg-background/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                                {rec.category}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-5">
                          <p className="text-[11px] text-muted-foreground">
                            {formatDate(rec.date)} · {rec.readingTime}
                          </p>
                          <h4 className="mt-2 line-clamp-2 text-base font-extrabold leading-snug tracking-tight text-foreground group-hover:text-accent transition-colors">
                            {rec.title}
                          </h4>
                          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {rec.excerpt}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-foreground group-hover:translate-x-0.5 transition-transform">
                            Read article
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* Full-Width Previous / All Blogs / Next Article Footer Bar */}
          <nav
            aria-label="Previous and next articles"
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-sm"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground group-hover:text-foreground">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                  Previous Article
                </span>
                <p className="mt-2 line-clamp-2 text-sm font-extrabold text-foreground group-hover:text-accent">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/blog"
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted/40 p-5 text-center transition-colors hover:bg-muted"
            >
              <BookOpen className="h-5 w-5 text-foreground" aria-hidden="true" />
              <span className="mt-1.5 text-sm font-extrabold text-foreground">
                Back to Blog Index
              </span>
              <span className="text-xs text-muted-foreground">
                Explore all guides &amp; categories
              </span>
            </Link>

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-left sm:items-end sm:text-right transition-all hover:border-foreground/30 hover:shadow-sm"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground group-hover:text-foreground">
                  Next Article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <p className="mt-2 line-clamp-2 text-sm font-extrabold text-foreground group-hover:text-accent">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </section>
      </div>
    </>
  );
}
