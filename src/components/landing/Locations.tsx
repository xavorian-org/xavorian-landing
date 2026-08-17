import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CITIES } from '@/data/site';

export const Locations = () => (
  <section id="locations" className="container mx-auto mt-20 scroll-mt-28 sm:mt-28 lg:mt-32">
    <Reveal variant="blur" className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Where we launch
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          All of Nigeria, city by city, check by check.
        </h2>
        <div className="mt-4 flex flex-col gap-1.5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>Xavorian is opening one city at a time, and the waitlist decides who is next.</p>
          <p>Your city will open faster if more people from there join the waitlist.</p>
        </div>
      </div>
      <Link href="/waitlist" className="link-underline text-xs font-bold text-violet-600 sm:text-sm shrink-0">
        Not on the list? Tell us where you are
      </Link>
    </Reveal>

    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {CITIES.map((c, i) => (
        <Reveal key={c.slug} delay={i * 60}>
          <Link
            href={`/waitlist?city=${c.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-md sm:p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <MapPin className="size-4" strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-bold tracking-tight text-foreground sm:text-sm">{c.name}</p>
                <p className="text-[11px] font-medium text-muted-foreground">{c.state}</p>
              </div>
            </div>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground group-hover:opacity-100" />
          </Link>
        </Reveal>
      ))}
    </div>
  </section>
);
