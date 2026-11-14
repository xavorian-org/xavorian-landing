import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CITIES, MARKETPLACE_URL } from '@/data/site';

export const Locations = () => (
  <section id="locations" className="w-full scroll-mt-24 border-y border-border/70 bg-muted/45 py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal variant="blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Search across Nigeria
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Find verified property in the places that matter to you.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Browse homes, land, and commercial property by location, property type, and budget.
              Start with a city below or open the full marketplace.
            </p>
          </div>

          <Link
            href={MARKETPLACE_URL}
            className="pressable group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-bold text-foreground shadow-sm transition-all hover:border-foreground/40 hover:bg-background"
          >
            Explore all properties
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 45}>
            <Link
              href={`${MARKETPLACE_URL}/properties?search=${encodeURIComponent(c.name)}`}
              className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-600/40 hover:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-violet-600 group-hover:text-white">
                  <MapPin className="size-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-tight text-foreground">{c.name}</p>
                  <p className="text-xs font-medium text-muted-foreground">{c.state}</p>
                </div>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-700" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
