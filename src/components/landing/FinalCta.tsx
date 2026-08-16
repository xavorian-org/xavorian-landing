import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export const FinalCta = () => (
  <section className="container mx-auto mt-16 sm:mt-24">
    <Reveal variant="blur" className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-10 text-center text-background sm:px-12 sm:py-12">
        <span className="eyebrow relative border-white/20 bg-white/10 text-white/80">
          <span className="eyebrow-dot" />
          No tricks from here on
        </span>

        <h2 className="relative mx-auto mt-4 max-w-2xl text-balance font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
          The next time you see a &quot;For Rent&quot; sign, you will not have to worry about a scam.
        </h2>

        <div className="relative mx-auto mt-3 max-w-lg flex flex-col gap-1 text-pretty text-xs leading-relaxed text-white/80 sm:text-sm">
          <p>Xavorian is opening one city at a time across Nigeria.</p>
          <p>The waitlist is the first step for each city, and joining takes less than a minute.</p>
        </div>

        <div className="relative mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/waitlist"
            className="pressable group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-extrabold text-foreground shadow-md transition-all hover:bg-neutral-100 hover:shadow-xl active:scale-95 sm:w-auto"
          >
            Join the waitlist
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" data-icon="inline-end" />
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
            <ShieldCheck className="size-4 text-white" strokeWidth={2} />
            Free. One email at launch. Nothing else.
          </span>
        </div>
      </div>
    </Reveal>
  </section>
);
