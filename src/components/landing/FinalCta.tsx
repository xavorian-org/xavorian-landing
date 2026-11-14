import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { MARKETPLACE_URL } from '@/data/site';

export const FinalCta = () => (
  <section className="w-full bg-background pt-16 sm:pt-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal variant="blur">
        <div className="relative overflow-hidden rounded-3xl bg-[#0B0F17] px-6 py-12 text-white shadow-xl sm:px-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow border-white/20 bg-white/10 text-white/90">
              <span className="eyebrow-dot" />
              No tricks from here on
            </span>

            <h2 className="mt-5 text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The next time you see a &quot;For Rent&quot; sign, you will not have to worry about a
              scam.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Explore verified homes, land, and commercial property across Nigeria. Filter cleanly
              by location, property type, and budget.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={MARKETPLACE_URL}
                className="pressable group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-[#0B0F17] shadow-md transition-all hover:bg-neutral-100 active:scale-95 sm:w-auto"
              >
                Browse properties
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/75">
                <ShieldCheck className="size-4 text-emerald-400" strokeWidth={2} />
                Free for property seekers to browse
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
