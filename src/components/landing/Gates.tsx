import Link from 'next/link';
import { ScanFace, Landmark, FileSearch, UserCheck, ArrowRight, BadgeCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { GATES } from '@/data/site';

const icons = [ScanFace, Landmark, FileSearch, UserCheck];

export const Gates = () => (
  <section className="w-full bg-background py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Sticky left rail — 5 cols matching LowerGuard, PropertyMatches & FaqTeaser */}
        <Reveal variant="blur" className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            The process
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Four checks. One badge. No shortcuts.
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>On most property sites, anyone can upload photos and go live in five minutes.</p>
            <p>
              On Xavorian, every listing has to earn its spot. If a property fails any single gate,
              it stays offline.
            </p>
          </div>
          <Link
            href="/how-it-works"
            className="pressable group mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-bold text-foreground shadow-sm transition-all hover:border-foreground/40 hover:bg-muted/50"
          >
            Read the full verification story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Right rail — 7 cols balanced 2x2 grid + release bar */}
        <div className="lg:col-span-7">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GATES.map((gate, i) => {
              const Icon = icons[i];
              return (
                <li key={gate.id} className="h-full">
                  <Reveal delay={i * 75} className="h-full">
                    <div className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-600/35 hover:shadow-md">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-700">
                            {gate.step}
                          </span>
                          <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background transition-transform group-hover:scale-105">
                            <Icon className="size-5" strokeWidth={2} />
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-foreground">
                          {gate.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-violet-700">{gate.short}</p>
                        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                          {gate.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <Reveal delay={160}>
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-dashed border-border bg-muted/45 p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <BadgeCheck className="size-5" strokeWidth={2} />
              </span>
              <p className="text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                Pass all four gates — only then does the listing go live, carrying its verified mark.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
