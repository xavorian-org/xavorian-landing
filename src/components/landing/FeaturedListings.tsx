'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';
import { FEATURED_PROPERTIES, type FeaturedPropertyItem } from '@/data/featuredListings';
import { cn } from '@/lib/utils';

type FilterId = 'all' | 'lagos' | 'abuja' | 'other' | 'cofo';

const matchesFilter = (p: FeaturedPropertyItem, filter: FilterId): boolean => {
  if (filter === 'lagos') return p.state === 'Lagos';
  if (filter === 'abuja') return p.state.includes('Abuja') || p.state === 'FCT';
  if (filter === 'other') return p.state !== 'Lagos' && !p.state.includes('Abuja') && p.state !== 'FCT';
  if (filter === 'cofo') return (p.titleType || '').includes('C of O');
  return true;
};

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'lagos', label: 'Lagos' },
  { id: 'abuja', label: 'Abuja FCT' },
  { id: 'other', label: 'Other States' },
  { id: 'cofo', label: 'C of O' },
];

const formatSpecLine = (prop: FeaturedPropertyItem): string => {
  const docLabel = prop.shortTitle || prop.titleType || 'Verified Title';
  if (prop.bedrooms !== null) {
    return `${prop.bedrooms} Beds · ${docLabel}`;
  }
  if (prop.landSize) {
    return `${prop.landSize} · ${docLabel}`;
  }
  return `${prop.propertyType} · ${docLabel}`;
};

export const FeaturedListings = () => {
  const [filter, setFilter] = useState<FilterId>('all');

  const items = FEATURED_PROPERTIES.filter((p) => matchesFilter(p, filter));

  return (
    <section
      id="verified-listings"
      className="scroll-mt-20 border-t border-[#E4E1D6] bg-[#FFFFFF] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Editorial Header & Segmented Warm-Stone Filter Tray */}
        <div className="flex flex-col gap-6 border-b border-[#E4E1D6] pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#75736B]">
              Live Verified Inventory
            </p>
            <h2 className="mt-3 font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]">
              Real properties, checked before they reach your screen.
            </h2>
            <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.65] text-[#52525B]">
              Every property below is live on{' '}
              <strong className="font-semibold text-[#141414]">marketplace.xavorian.com</strong> and has
              cleared seller identity KYC, bank-account name matching, and automated document checks.
            </p>
          </div>

          {/* Segmented Filter Tray */}
          <div
            role="tablist"
            aria-label="Filter verified properties"
            className="inline-flex w-fit flex-wrap gap-1 rounded-lg border border-[#E4E1D6] bg-[#F3F1E9] p-1"
          >
            {FILTERS.map((f) => {
              const count = FEATURED_PROPERTIES.filter((p) => matchesFilter(p, f.id)).length;
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-[12.5px] transition-colors',
                    active
                      ? 'bg-[#FFFFFF] font-semibold text-[#141414] shadow-soft'
                      : 'font-medium text-[#52525B] hover:text-[#141414]',
                  )}
                >
                  <span>{f.label}</span>
                  <span className="ml-1.5 text-[11px] tabular-nums text-[#75736B]">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Unboxed Editorial Gallery Grid */}
        <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((prop) => (
            <article key={prop.slug} className="group flex flex-col">
              <Link
                href={`${MARKETPLACE_URL}/property/${prop.slug}`}
                className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-[#EBE8DE] bg-[#F3F1E9]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prop.image}
                  alt={`${prop.title} in ${prop.city}, ${prop.state} (${prop.priceFormatted}), verified property on Xavorian`}
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between pt-4">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-[#75736B]">
                      {prop.city}, {prop.state}
                    </span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#7B2276]">
                      For {prop.listingType}
                    </span>
                  </div>

                  <h3 className="mt-1.5 text-[16px] font-semibold leading-[1.35] text-[#141414] transition-colors group-hover:text-[#7B2276]">
                    <Link href={`${MARKETPLACE_URL}/property/${prop.slug}`}>{prop.title}</Link>
                  </h3>

                  <p className="mt-1.5 text-[18px] font-semibold tabular-nums tracking-[-0.02em] text-[#141414]">
                    {prop.priceFormatted}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#EBE8DE] pt-3 text-[12.5px] text-[#52525B]">
                  <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
                    <ShieldCheck className="size-3.5 shrink-0 text-[#15803D]" aria-hidden="true" />
                    <span className="truncate">{formatSpecLine(prop)}</span>
                  </span>
                  <Link
                    href={`${MARKETPLACE_URL}/property/${prop.slug}`}
                    className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#141414] transition-colors group-hover:text-[#7B2276]"
                  >
                    View listing
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Rule Strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#E4E1D6] pt-8 sm:flex-row sm:items-center">
          <p className="text-[14px] text-[#52525B]">
            Showing <strong className="font-semibold tabular-nums text-[#141414]">{items.length}</strong>{' '}
            curated listings from{' '}
            <strong className="font-semibold tabular-nums text-[#141414]">122+ live verified homes</strong>,
            rentals, and titled plots on Xavorian.
          </p>
          <Link
            href={MARKETPLACE_URL}
            className="pressable inline-flex items-center gap-2 rounded-lg border border-[#141414] px-5 py-2.5 text-[13px] font-semibold text-[#141414] transition-colors hover:bg-[#141414] hover:text-[#FCFBF7]"
          >
            Browse all verified listings
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
