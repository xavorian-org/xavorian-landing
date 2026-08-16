import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { GUIDES } from '@/data/guides';

export const metadata: Metadata = pageMetadata({
  title: 'Guides — Do Nigerian Real Estate the Careful Way',
  description:
    'Step-by-step guides for verifying title documents, renting safely and asking the right questions in the Nigerian property market — before any money moves.',
  path: '/guides',
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' });

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Xavorian Guides',
          description: 'Practical guides for safe property transactions in Nigeria.',
          itemListElement: GUIDES.map((guide, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${BASE_URL}/guides/${guide.slug}`,
            name: guide.title,
          })),
        }}
      />
      <div className="container mx-auto py-12 sm:py-20">
        {/* hero */}
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Guides
          </span>
          <h1 className="mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
            Do property in Nigeria the careful way.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Step-by-step guides for verifying documents, renting safely and asking the right
            questions — before any money moves.
          </p>
        </Reveal>

        {/* cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
          {GUIDES.map((guide, i) => (
            <Reveal key={guide.slug} delay={i * 90} className="h-full">
              <Link
                href={`/guides/${guide.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6"
              >
                <span className="inline-flex w-fit rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Guide
                </span>
                <h2 className="mt-4 text-lg font-bold leading-snug tracking-tight">{guide.title}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{guide.excerpt}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  {formatDate(guide.date)}
                  <span aria-hidden="true">·</span>
                  {guide.readingTime}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-foreground">
                  Read guide
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
