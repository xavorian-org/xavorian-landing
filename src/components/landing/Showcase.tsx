import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { MARKETPLACE_URL } from '@/data/site';

/**
 * Showcase — the live Xavorian marketplace presented cleanly inside a structured browser frame.
 */
export const Showcase = () => (
  <section className="w-full border-y border-border/70 bg-muted/45 py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          The platform
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What you see is exactly what is real.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Every property you browse has already passed identity, bank-account, and document checks
          before reaching your screen. If it is on Xavorian, it earned its place.
        </p>
      </Reveal>

      <Reveal variant="scale" delay={100} className="mt-10 sm:mt-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/90 bg-card p-2.5 shadow-xl shadow-black/[0.04] sm:rounded-3xl sm:p-3.5">
          {/* Clean browser bar */}
          <div className="flex items-center justify-between gap-3 px-2 pb-2.5 sm:px-3 sm:pb-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="block size-2.5 rounded-full bg-border" />
              <i className="block size-2.5 rounded-full bg-border" />
              <i className="block size-2.5 rounded-full bg-border" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/60 px-3.5 py-1 text-[11px] font-semibold text-muted-foreground">
              <ShieldCheck className="size-3.5 text-emerald-600" strokeWidth={2.5} />
              {MARKETPLACE_URL.replace('https://', '')}
            </span>
            <span className="hidden w-12 sm:block" aria-hidden="true" />
          </div>

          {/* Product screenshot — unobstructed */}
          <div className="overflow-hidden rounded-xl border border-border/80 bg-muted sm:rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/xavorian-app-home.jpg"
              alt="The Xavorian marketplace — search trusted homes and browse verified featured properties"
              width={1600}
              height={1130}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Grounded status strip below frame rather than floating over UI */}
          <div className="flex flex-col items-start justify-between gap-2 px-2 pt-3 sm:flex-row sm:items-center sm:px-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground">
              <ShieldCheck className="size-4 text-emerald-600" strokeWidth={2.25} />
              Every live listing passed all four verification gates
            </span>
            <Link
              href="/how-it-works"
              className="link-underline inline-flex items-center gap-1.5 text-xs font-bold text-violet-700"
            >
              See how we verify
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
