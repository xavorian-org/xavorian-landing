import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { MARKETPLACE_URL } from '@/data/site';

const steps = [
  {
    big: 'You should not need a lawyer, a detective, and a prayer',
    small: 'just to rent an apartment in your own city.',
  },
  {
    big: 'You should not have to double-check the checkers',
    small: "wondering if an agent's profile is even real.",
  },
  {
    big: 'Feeling lucky should be about the home you found',
    small: 'not about avoiding a scam.',
  },
];

export const LowerGuard = () => (
  <section className="w-full border-y border-border/70 bg-muted/45 py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Why Xavorian exists
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Verification you can watch working.
        </h2>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-12">
        {/* Left rail — 5 cols matching Gates / PropertyMatches / FaqTeaser */}
        <div className="lg:col-span-5">
          <ol className="space-y-7 border-l-2 border-violet-600/25 pl-6">
            {steps.map((step, i) => (
              <Reveal key={step.big} delay={i * 90}>
                <li className="relative">
                  <span
                    className="absolute -left-6 top-0.5 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card font-display text-xs font-extrabold text-foreground shadow-sm"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl lg:leading-snug">
                    {step.big}{' '}
                    <span className="font-semibold text-muted-foreground">{step.small}</span>
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={220}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are not asking you to blindly trust stranger number one thousand and one. We are
              building the system where every seller is already accounted for — so the only thing
              left for you to feel is excitement.
            </p>
            <Link
              href={MARKETPLACE_URL}
              className="pressable group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-bold text-background shadow-sm transition-all hover:bg-neutral-800 active:scale-95"
            >
              Browse verified properties
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Right rail — 7 cols unified browser showcase card */}
        <Reveal variant="scale" delay={120} className="lg:col-span-7">
          <div className="rounded-2xl border border-border/90 bg-card p-2.5 shadow-xl shadow-black/[0.04] sm:rounded-3xl sm:p-3.5">
            <div className="flex items-center justify-between gap-3 px-2 pb-2.5 sm:px-3 sm:pb-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="block size-2.5 rounded-full bg-border" />
                <i className="block size-2.5 rounded-full bg-border" />
                <i className="block size-2.5 rounded-full bg-border" />
              </span>
              <span className="inline-flex items-center rounded-full border border-border/80 bg-muted/60 px-3.5 py-1 text-[11px] font-semibold text-muted-foreground">
                marketplace.xavorian.com/dashboard
              </span>
              <span className="hidden w-12 sm:block" aria-hidden="true" />
            </div>

            <div className="overflow-hidden rounded-xl border border-border/80 bg-muted sm:rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/xavorian-app-dashboard.jpg"
                alt="The Xavorian dashboard — verification status, live listings and activity tracked in one place"
                width={1600}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </div>

            <p className="px-2 pt-3 text-center text-xs font-medium text-muted-foreground sm:text-sm">
              One dashboard — your verification gates, your listings, and clear payment records.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
