import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Check, ShieldCheck, UserCircle } from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL, SITE_NAME } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { GUIDES, type Guide } from '@/data/guides';

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

const getGuide = (slug: string): Guide | undefined => GUIDES.find((g) => g.slug === slug);

/** Next two entries in registry order, wrapping around — never the current guide. */
const getReadNext = (slug: string): Guide[] => {
  const index = GUIDES.findIndex((g) => g.slug === slug);
  if (index === -1) return [];
  return [1, 2]
    .map((offset) => GUIDES[(index + offset) % GUIDES.length])
    .filter((g) => g.slug !== slug);
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  return pageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
  });
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const url = `${BASE_URL}/guides/${guide.slug}`;
  const readNext = getReadNext(guide.slug);

  const authorName = guide.author?.name ?? 'Xavorian Team';
  const authorRole = guide.author?.role;
  const authorTwitter = guide.author?.twitter;

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.excerpt,
            datePublished: guide.date,
            author: {
              '@type': 'Person',
              name: authorName,
              ...(guide.author?.role && { jobTitle: guide.author.role }),
              ...(guide.author?.twitter && { sameAs: [`https://x.com/${guide.author.twitter.replace('@', '')}`] }),
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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides` },
              { '@type': 'ListItem', position: 3, name: guide.title, item: url },
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
                Guide
              </span>
              <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
                {guide.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-[13px]">
                <time dateTime={guide.date}>{formatDate(guide.date)}</time>
                <span aria-hidden="true">·</span>
                {guide.readingTime}
                {guide.author && (
                  <>
                    <span aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5">
                      <UserCircle className="h-3.5 w-3.5" />
                      <span className="font-medium text-foreground">{guide.author.name}</span>
                      {guide.author.role && <span className="text-muted-foreground">— {guide.author.role}</span>}
                    </div>
                  </>
                )}
              </div>
            </header>
          </Reveal>

          {/* intro lead */}
          <p className="mt-10 max-w-2xl text-pretty text-base leading-8 text-foreground/80 sm:text-lg">
            {guide.intro}
          </p>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            This guide is general information, not legal advice. Property transfers in Nigeria involve
            state-level land registry process — engage a qualified property lawyer for your specific
            transaction.
          </p>

          {/* sections */}
          <div className="mt-12 max-w-2xl space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{section.heading}</h2>
                <p className="mt-3 text-[15px] leading-8 text-foreground/80 sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* key takeaways */}
          <Reveal>
            <div className="mt-12 max-w-2xl rounded-2xl border border-border bg-card p-5 sm:p-6">
              <h2 className="text-base font-bold tracking-tight">Key takeaways</h2>
              <ul className="mt-4 space-y-3">
                {guide.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
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
                  On Xavorian, this entire checklist runs before a listing can exist — identity,
                  bank-match, document and human-review gates. Join the waitlist and browse with
                  your guard down.
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
                    href={`/guides/${next.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6"
                  >
                    <span className="inline-flex w-fit rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Guide
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
            href="/guides"
            className="link-underline mt-12 inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to guides
          </Link>
        </Reveal>
      </div>
    </>
  );
}