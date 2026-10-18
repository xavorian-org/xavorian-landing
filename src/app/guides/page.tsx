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
            Educational Playbooks
          </span>
          <h1 className="mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
            Do property in Nigeria the careful way.
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Author &amp; Editor: Ezeani Chukwuebuka (Damien), Founder</span>
            <span>&bull;</span>
            <span>Jurisdiction: Nigeria</span>
            <span>&bull;</span>
            <span>Edition: Pre-Launch 2026</span>
          </p>
          <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">About this compilation</p>
            <p className="mt-1">
              In Nigeria’s property market, high demand and uneven enforcement make due diligence a personal survival
              skill. These field guides set out practical, step-by-step checks commonly used by surveyors and property
              lawyers, and reflected in the Xavorian verification process, to help you spot forged titles, avoid rental
              scams, and protect your money.
            </p>
            <p className="mt-2 text-xs">
              General information only, not legal advice. Use a qualified property lawyer and licensed surveyor for your
              own transaction.
            </p>
          </div>
        </Reveal>

        {/* cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Official Directory */}
        <Reveal>
          <div className="mt-16 sm:mt-20 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground space-y-2">
            <h3 className="font-bold text-foreground">Official Contact &amp; Notices Directory</h3>
            <p>
              <strong className="font-semibold text-foreground">Entity:</strong> Xavorian Technology Company
              (RC-9912416), incorporated in the Federal Republic of Nigeria
            </p>
            <p>
              <strong className="font-semibold text-foreground">Founder:</strong> Ezeani Chukwuebuka
            </p>
            <p>
              <strong className="font-semibold text-foreground">Legal &amp; Privacy Notices:</strong>{' '}
              <span className="font-semibold text-foreground">legal@xavorian.com</span> |{' '}
              <strong className="font-semibold text-foreground">Support:</strong>{' '}
              <span className="font-semibold text-foreground">support@xavorian.com</span>
            </p>
            <p>
              <strong className="font-semibold text-foreground">Telephone / WhatsApp:</strong>{' '}
              <span className="font-semibold text-foreground">+234 805 637 3583</span> |{' '}
              <strong className="font-semibold text-foreground">Website:</strong>{' '}
              <span className="font-semibold text-foreground">https://xavorian.com</span>
            </p>
            <p>
              <strong className="font-semibold text-foreground">Launch Focus (pre-launch):</strong> Lagos, Abuja,
              Benin City, Port Harcourt, and expanding across Nigeria.
            </p>
            <p className="pt-2 text-xs font-semibold text-foreground">
              Trust is not a feature. It is the product.
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
}
