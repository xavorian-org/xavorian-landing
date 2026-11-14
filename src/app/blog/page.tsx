import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Clock } from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { getReleasedBlogPosts, postCover } from '@/data/blog';

export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: 'Blog: Houses, land and area guides across Nigeria',
  description:
    'Verified houses and land for sale in Lagos, Abuja, Ogun, Asaba, Benin City, Port Harcourt, Ibadan and Owerri, plus area guides, buying tips and scam-proof advice from the Xavorian property desk.',
  path: '/blog',
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogIndexPage() {
  const posts = getReleasedBlogPosts(new Date());

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Xavorian Blog',
          description: 'Verified homes, area guides and buying advice for Nigerian real estate.',
          itemListElement: posts.slice(0, 100).map((post, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${BASE_URL}/blog/${post.slug}`,
            name: post.title,
          })),
        }}
      />
      <div className="container mx-auto py-12 sm:py-20">
        {/* hero */}
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            The Xavorian journal
          </span>
          <h1 className="mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
            Houses, land and honest property talk across Nigeria.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Live, verified homes from the Xavorian marketplace, area guides from Lagos to Owerri,
            and straight talk on buying, renting and staying scam-free.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>{posts.length} articles live • New editions publish daily at 9:00 a.m. Lagos time</span>
          </p>
        </Reveal>

        {/* cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
          {posts.map((post, i) => {
            const cover = postCover(post);
            const isSvgIllustration = Boolean(cover && cover.endsWith('.svg'));
            return (
              <Reveal key={post.slug} delay={Math.min(i, 3) * 90} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                >
                  {cover && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cover}
                        alt={isSvgIllustration ? `${post.title} — Editorial illustration` : post.title}
                        loading={i < 4 ? 'eager' : 'lazy'}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {isSvgIllustration && (
                        <span className="absolute right-3 top-3 rounded-full bg-amber-100/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 shadow-sm">
                          Illustration
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="inline-flex w-fit rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {post.category}
                    </span>
                    <h2 className="mt-4 text-lg font-bold leading-snug tracking-tight">{post.title}</h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                      {formatDate(post.date)}
                      <span aria-hidden="true">·</span>
                      {post.readingTime}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-foreground">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
