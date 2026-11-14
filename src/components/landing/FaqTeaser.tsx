import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const teasers = [
  {
    q: 'Is Xavorian live yet?',
    a: 'Yes. You can browse listings on the marketplace and filter by location, property type and budget.',
  },
  {
    q: 'What does verification cost me as a buyer?',
    a: 'Nothing. Verification is the price sellers pay to be trusted by you. Your side of the experience stays free to browse.',
  },
  {
    q: 'How is this different from the property sites I already use?',
    a: 'They host listings; we vet them. On Xavorian an unverified stranger literally cannot have a listing page.',
  },
];

export const FAQ_ITEMS = [
  {
    '@type': 'Question',
    name: 'Is Xavorian live yet?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Yes. You can browse property listings on the Xavorian marketplace and filter by location, property type and budget.',
    },
  },
  {
    '@type': 'Question',
    name: 'What does verification cost a buyer?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Nothing. Verification is the price sellers pay to be trusted. Browsing verified listings is free.',
    },
  },
  {
    '@type': 'Question',
    name: 'How is Xavorian different from other Nigerian property sites?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Other platforms host listings; Xavorian screens them. Every listing passes identity, bank-match, document-audit, and automated verification gates before it can exist on the platform.',
    },
  },
];

export const FaqTeaser = () => (
  <section className="w-full border-y border-border/70 bg-muted/45 py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Questions
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Asked often, answered plainly.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Clear answers about verification, buyer costs, and how Xavorian differs from open
            classifieds.
          </p>
          <Link
            href="/faq"
            className="pressable group mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-bold text-foreground shadow-sm transition-all hover:border-foreground/40 hover:bg-background"
          >
            Read all questions
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <div className="divide-y divide-border/80 rounded-2xl border border-border/80 bg-card px-6 shadow-sm sm:rounded-3xl sm:px-8">
            {teasers.map((t) => (
              <details key={t.q} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-bold tracking-tight text-foreground transition-colors hover:text-violet-700 sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{t.q}</span>
                  <span className="faq-icon flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted/50 text-lg font-light leading-none text-foreground">
                    +
                  </span>
                </summary>
                <div className="smooth-details-body">
                  <div>
                    <p className="faq-answer max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">
                      {t.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
