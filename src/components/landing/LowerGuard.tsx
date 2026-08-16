import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  { big: 'You should not need a lawyer, a detective, and a prayer', small: 'just to rent an apartment in your own city.' },
  { big: 'You should not have to double check the checkers', small: "wondering if the agent's badge is even real." },
  { big: "And feeling lucky should be about the house you found", small: 'not about the fact that you did not get scammed.' },
];

export const LowerGuard = () => (
  <section className="mt-20 border-y border-border/80 bg-muted/50 py-16 sm:py-24 lg:py-28">
    <div className="container mx-auto">
      <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Why Xavorian exists
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Verification you can watch working.
        </h2>
      </Reveal>

      <div className="mt-12 grid items-center gap-12 sm:mt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Numbered manifesto — the steps */}
        <div className="lg:max-w-xl">
          <ol className="flex flex-col gap-9 border-l-2 border-foreground/15 pl-6 sm:pl-8">
            {steps.map((step, i) => (
              <Reveal key={step.big} delay={i * 120}>
                <li className="relative flex flex-col gap-1.5">
                  <span
                    className="absolute -left-6 top-1 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card font-display text-xs font-extrabold text-foreground shadow-sm sm:-left-8"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="text-balance font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
                    {step.big}
                    <span className="font-semibold text-muted-foreground"> {step.small}</span>
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={380}>
            <p className="mt-10 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are not asking you to trust stranger number one thousand and one.
              We are building the system where the stranger is already accounted for —
              so the only thing left for you to feel about your next property
              is excitement.
            </p>
            <Link href="/waitlist" className="pressable group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-extrabold text-background shadow-md transition-all hover:bg-neutral-800 hover:shadow-xl active:scale-95">
              Join the waitlist
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" data-icon="inline-end" />
            </Link>
          </Reveal>
        </div>

        {/* Dashboard proof card */}
        <Reveal variant="scale" className="relative mx-auto w-full max-w-[560px] lg:max-w-none" delay={160}>
          <div className="group rounded-[2rem] border border-border bg-card p-2.5 shadow-xl shadow-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10 sm:p-3.5">
            {/* window chrome */}
            <div className="flex items-center gap-3 px-2.5 pb-2.5 sm:px-3 sm:pb-3">
              <span className="flex gap-1.5">
                <i className="block size-2.5 rounded-full bg-foreground/15" />
                <i className="block size-2.5 rounded-full bg-foreground/15" />
                <i className="block size-2.5 rounded-full bg-foreground/15" />
              </span>
              <span className="mx-auto inline-flex items-center rounded-full bg-muted px-4 py-1 text-[11px] font-semibold text-muted-foreground border border-border/80">
                app.xavorian.com/dashboard
              </span>
              <span className="w-12" aria-hidden="true" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-muted">
              <img
                src="/xavorian-app-dashboard.jpg"
                alt="The Xavorian dashboard — verification status, live listings and payments tracked in one place"
                width={1600}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-xs font-medium text-muted-foreground sm:text-sm">
            One dashboard — your checks, your listings, your money trail.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
