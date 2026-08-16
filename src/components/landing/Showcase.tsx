import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

/**
 * Showcase — the product-in-action moment: the Xavorian app homepage
 * presented inside a soft window card, with the trust caption on top.
 */
export const Showcase = () => (
  <section className="container mx-auto mt-16 sm:mt-24">
    <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        The platform
      </span>
      <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        What you see is exactly what is real.
      </h2>
      <p className="mt-4 mx-auto max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        Every home you browse already passed identity, bank and document checks before it reached your screen.
        If it is on Xavorian, it earned its spot.
      </p>
    </Reveal>

    <Reveal variant="scale" delay={140} className="mt-10 sm:mt-14">
      <div className="group relative mx-auto max-w-5xl rounded-[2rem] border border-border bg-muted/70 p-2.5 shadow-xl shadow-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10 sm:p-3.5">
        {/* window chrome */}
        <div className="flex items-center gap-3 px-2.5 pb-2.5 sm:px-3 sm:pb-3">
          <span className="flex gap-1.5">
            <i className="block size-2.5 rounded-full bg-foreground/15" />
            <i className="block size-2.5 rounded-full bg-foreground/15" />
            <i className="block size-2.5 rounded-full bg-foreground/15" />
          </span>
          <span className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-background px-4 py-1 text-[11px] font-semibold text-muted-foreground border border-border/80">
            <ShieldCheck className="size-3 text-success" strokeWidth={2.5} />
            app.xavorian.com
          </span>
          <span className="w-12" aria-hidden="true" />
        </div>

        {/* the real product screenshot */}
        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card">
          <img
            src="/xavorian-app-home.jpg"
            alt="The Xavorian app — search trusted homes and browse verified featured properties"
            width={1600}
            height={1130}
            loading="lazy"
            decoding="async"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* trust caption overlay */}
          <span className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-foreground/90 px-4 py-2 text-[11px] font-bold text-background shadow-lg backdrop-blur sm:bottom-5 sm:text-xs">
            <ShieldCheck className="size-3.5 text-white" strokeWidth={2.5} />
            Every listing passed four checks
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/how-it-works" className="pressable link-underline inline-flex items-center gap-2 text-sm font-bold text-foreground">
          See how we verify
          <ArrowRight className="size-4" data-icon="inline-end" />
        </Link>
      </div>
    </Reveal>
  </section>
);
