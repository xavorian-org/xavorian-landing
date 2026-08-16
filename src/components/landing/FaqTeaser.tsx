import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const teasers = [
  {
    q: 'Is Xavorian live yet?',
    a: 'We are onboarding our first cities through the waitlist. Joining means you are told first — and in many cities, listed first.',
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
      text: 'Xavorian is onboarding its first cities through the waitlist. Joining means you are told first when your city opens — and in many cities, listed first.',
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
  <section className="container mx-auto mt-20 sm:mt-28 lg:mt-32">
    <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <Reveal>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Questions
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Asked often, answered plainly.
        </h2>
        <Link href="/faq" className="pressable link-underline mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground">
          All questions
          <ArrowRight className="size-4" data-icon="inline-end" />
        </Link>
      </Reveal>

      <div className="flex flex-col">
        {teasers.map((t, i) => (
          <Reveal key={t.q} delay={i * 90}>
            <details className="faq-item group border-b border-border/80 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-bold tracking-tight text-foreground transition-all duration-300 hover:pl-1.5 hover:text-foreground sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                {t.q}
                <span className="faq-icon flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-lg font-light leading-none text-muted-foreground shadow-sm">
                  +
                </span>
              </summary>
              <div className="smooth-details-body">
                <div>
                  <p className="faq-answer max-w-2xl pb-6 text-xs leading-relaxed text-muted-foreground sm:text-sm">{t.a}</p>
                </div>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
