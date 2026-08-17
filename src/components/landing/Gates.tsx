'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ScanFace, Landmark, FileSearch, UserCheck, ArrowRight, BadgeCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { GATES } from '@/data/site';
import { useAutoCarousel } from '@/lib/use-auto-carousel';
import { cn } from '@/lib/utils';

const icons = [ScanFace, Landmark, FileSearch, UserCheck];

export const Gates = () => {
  const olRef = useRef<HTMLOListElement | null | undefined>(undefined);
  const [drawn, setDrawn] = useState(false);
  const { ref: carouselRef, pauseHandlers } = useAutoCarousel<HTMLOListElement>(3000);

  useEffect(() => {
    const el = olRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="container mx-auto mt-20 sm:mt-28 lg:mt-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
        <Reveal variant="blur">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              The process
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Four checks. One badge. No shortcuts.
            </h2>
            <div className="mt-4 flex flex-col gap-2.5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>On most websites, anyone can post anything in five minutes.</p>
              <p>On Xavorian, a listing has to earn its spot.</p>
              <p>If a property fails our checks, it never makes it to the website.</p>
            </div>
            <Link href="/how-it-works" className="pressable link-underline mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground">
              The full verification story
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Link>
          </div>
        </Reveal>

        <ol
          ref={(node) => {
            olRef.current = node;
            carouselRef(node);
          }}
          {...pauseHandlers}
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-5 lg:overflow-visible lg:pb-0 lg:snap-none"
        >
          <div
            className={cn('gate-line absolute bottom-6 left-[29px] top-6 hidden w-px bg-border/80 lg:block', drawn && 'gate-line--drawn')}
            aria-hidden="true"
          />
          {GATES.map((gate, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={gate.id} delay={i * 110} className="min-w-[66%] shrink-0 snap-center sm:min-w-[46%] lg:min-w-0 lg:shrink">
                <li className="group relative flex h-full gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-7">
                  <div className="z-10 flex size-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-foreground text-background transition-transform group-hover:scale-105">
                    <Icon className="size-5" strokeWidth={2} />
                    <span className="mt-0.5 text-[9px] font-extrabold uppercase tracking-wider opacity-80">{gate.step}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">{gate.name}</h3>
                    <p className="text-xs font-semibold text-violet-600">{gate.short}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{gate.body}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
          <Reveal delay={460} variant="scale" className="min-w-[66%] shrink-0 snap-center sm:min-w-[46%] lg:min-w-0 lg:shrink">
            <li className="relative flex h-full items-center gap-4 rounded-3xl border border-dashed border-border bg-muted/40 p-5 sm:p-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background">
                <BadgeCheck className="size-5" strokeWidth={2} />
              </span>
              <p className="text-xs font-semibold text-muted-foreground sm:text-sm">
                Pass all four — only then does the listing go live, carrying its verified mark.
              </p>
            </li>
          </Reveal>
        </ol>
      </div>
    </section>
  );
};
