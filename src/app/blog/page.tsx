import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { BLOG_POSTS } from '@/data/blog';

export const metadata: Metadata = pageMetadata({
  title: 'Blog — Trust, safety and verification in Nigerian real estate',
  description:
    'Short reads from the team building Xavorian: how property scams work, what verified should actually mean, and how to keep your money safe in the Nigerian property market.',
  path: '/blog',
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Xavorian Blog',
          description: 'Articles on trust, safety and verification in Nigerian real estate.',
          itemListElement: BLOG_POSTS.map((post, i) => ({
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
            Notes on trust, scams and property in Nigeria.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Short reads from the team building the verification-first marketplace — how scams
            work, what &ldquo;verified&rdquo; should mean, and how to keep your money safe in the
            meantime.
          </p>
        </Reveal>

        {/* cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6"
              >
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
