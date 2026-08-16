import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ShieldCheck, UserCircle } from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL, SITE_NAME } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { BLOG_POSTS, type BlogPost } from '@/data/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const getPost = (slug: string): BlogPost | undefined => BLOG_POSTS.find((p) => p.slug === slug);

/** Next two entries in registry order, wrapping around — never the current post. */
const getReadNext = (slug: string): BlogPost[] => {
  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (index === -1) return [];
  return [1, 2]
    .map((offset) => BLOG_POSTS[(index + offset) % BLOG_POSTS.length])
    .filter((p) => p.slug !== slug);
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) notFound();
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;
  const readNext = getReadNext(post.slug);

  const authorName = post.author?.name ?? 'Xavorian Team';
  const authorRole = post.author?.role;
  const authorTwitter = post.author?.twitter;

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: authorName,
              ...(post.author?.role && { jobTitle: post.author.role }),
              ...(post.author?.twitter && { sameAs: [`https://x.com/${post.author.twitter.replace('@', '')}`] }),
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
        ]}
      />
      <div className="container mx-auto py-12 sm:py-20">
        <article>
          <Reveal>
            <header className="max-w-2xl border-b border-border pb-8 sm:pb-10">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                {post.category}
              </span>
              <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-[13px]">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                {post.readingTime}
                {post.author && (
                  <>
                    <span aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5">
                      <UserCircle className="h-3.5 w-3.5" />
                      <span className="font-medium text-foreground">{post.author.name}</span>
                      {post.author.role && <span className="text-muted-foreground">— {post.author.role}</span>}
                    </div>
                  </>
                )}
              </div>
            </header>
          </Reveal>

          <div className="mt-10 max-w-2xl space-y-6 text-[15px] leading-8 text-foreground/80 sm:text-base">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* waitlist CTA */}
        <Reveal>
          <div className="mt-14 max-w-2xl rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <ShieldCheck className="h-5 w-5 text-foreground" />
              </span>
              <div>
                <p className="text-base font-bold tracking-tight">Read less, worry less.</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  On Xavorian, every listing passes identity, bank-match, document and human-review
                  gates before it can exist. Join the waitlist and browse with your guard down.
                </p>
                <Link
                  href="/waitlist"
                  className="group mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* read next */}
        {readNext.length > 0 && (
          <section className="mt-14">
            <Reveal>
              <h2 className="text-base font-bold tracking-tight">Read next</h2>
            </Reveal>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {readNext.map((next, i) => (
                <Reveal key={next.slug} delay={i * 90} className="h-full">
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6"
                  >
                    <span className="inline-flex w-fit rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {next.category}
                    </span>
                    <p className="mt-3 text-base font-bold leading-snug tracking-tight">{next.title}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      {formatDate(next.date)}
                      <span aria-hidden="true">·</span>
                      {next.readingTime}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-foreground">
                      Read
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* back link */}
        <Reveal>
          <Link
            href="/blog"
            className="link-underline mt-12 inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </Reveal>
      </div>
    </>
  );
}