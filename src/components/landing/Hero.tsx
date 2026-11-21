'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';
import { FEATURED_PROPERTIES } from '@/data/featuredListings';
import { cn } from '@/lib/utils';

type IntentTab = 'buy' | 'rent' | 'land';

const INTENT_TABS: { id: IntentTab; label: string; placeholder: string }[] = [
  { id: 'buy', label: 'Buy', placeholder: 'Lekki, Ikoyi, Mabushi, Benin GRA...' },
  { id: 'rent', label: 'Rent', placeholder: 'Ikeja, Yaba, Wuse, Asaba...' },
  { id: 'land', label: 'Land', placeholder: 'Epe, Ibeju-Lekki, Lugbe, Mowe...' },
];

const QUICK_CORRIDORS = ['Lagos', 'Abuja', 'Lekki', 'Ikeja', 'Benin City', 'Asaba', 'Owerri'];

const TRUST_METRICS = [
  {
    term: '4 Gates',
    detail: 'ID, bank match, title scan, and audit before publication',
  },
  {
    term: '36 States + FCT',
    detail: 'Verified homes, rentals, and titled land nationwide',
  },
  {
    term: '₦0 for Buyers',
    detail: 'Free to browse, inspect records, and contact sellers',
  },
  {
    term: '3% Protection',
    detail: 'Bank-Name-Match via Paystack and optional milestone hold',
  },
];

export const Hero = () => {
  const [intent, setIntent] = useState<IntentTab>('buy');
  const [query, setQuery] = useState('');

  const activeTab = INTENT_TABS.find((t) => t.id === intent) ?? INTENT_TABS[0];
  const heroPrimary = FEATURED_PROPERTIES[0];
  const heroSecondary = FEATURED_PROPERTIES.slice(1, 3);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('search', query.trim());
    if (intent === 'rent') params.set('listingType', 'rent');
    else if (intent === 'buy') params.set('listingType', 'sale');
    else if (intent === 'land') params.set('propertyType', 'Land');

    const qs = params.toString();
    window.location.href = `${MARKETPLACE_URL}/properties${qs ? `?${qs}` : ''}`;
  };

  return (
    <section className="bg-[#FCFBF7]">
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Kicker, Serif H1, AEO Direct Definition & Search Console */}
          <div className="min-w-0 lg:col-span-6 lg:pt-3">
            <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7B2276] sm:gap-3 sm:tracking-[0.15em]">
              <span className="h-px w-6 shrink-0 bg-[#9C3495]" aria-hidden="true" />
              <span className="leading-snug tabular-nums">
                All 36 Nigerian States &amp; Abuja FCT · CAC RC-9912416
              </span>
            </div>

            <h1 className="mt-5 font-serif text-[2.625rem] font-normal not-italic leading-[1.03] tracking-[-0.02em] text-[#141414] sm:text-[3.5rem] lg:text-[4.15rem]">
              Verified homes, rentals, and land across Nigeria.
            </h1>

            {/* Front-Loaded AEO Direct Definition (~52 words, zero em-dashes) */}
            <p className="aeo-summary mt-5 max-w-[54ch] text-[15.5px] leading-[1.65] text-[#52525B] sm:text-[16.5px]">
              <strong className="font-semibold text-foreground">Xavorian</strong> is Nigeria&apos;s verified
              real estate marketplace. Every house, apartment, and plot of land goes through pre-publication
              verification before going live: government ID and liveness KYC, bank-account name
              matching, and automated location and media checks. Buyers and tenants browse
              free across all 36 states and Abuja FCT.
            </p>

            {/* Architectural Search Console */}
            <form
              onSubmit={handleSearch}
              role="search"
              aria-label="Search verified Nigerian properties"
              className="mt-8 rounded-xl border border-[#DCD8CA] bg-[#FFFFFF] shadow-elevated"
            >
              {/* Intent Underline Tabs */}
              <div className="flex items-center gap-6 border-b border-[#EBE8DE] px-4 pt-3">
                {INTENT_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setIntent(tab.id)}
                    className={cn(
                      'pb-2.5 text-[13px] transition-colors',
                      intent === tab.id
                        ? '-mb-px border-b-2 border-[#9C3495] font-semibold text-[#141414]'
                        : 'font-medium text-[#75736B] hover:text-[#141414]',
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
                <span className="ml-auto hidden text-[11.5px] text-[#75736B] sm:inline">
                  Every listing pre-screened
                </span>
              </div>

              {/* Input + Action */}
              <div className="flex flex-col gap-2 p-2.5 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#75736B]"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={activeTab.placeholder}
                    aria-label="City, neighborhood, or state in Nigeria"
                    className="h-11 w-full rounded-lg bg-transparent pl-10 pr-3 text-[14px] font-medium text-[#141414] placeholder:text-[#75736B] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="pressable inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-[#141414] px-6 text-[13.5px] font-semibold text-[#FCFBF7] transition-colors hover:bg-[#7B2276]"
                >
                  Search listings
                </button>
              </div>
            </form>

            {/* Plain-Text Corridor Links */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-[#75736B]">
              <span>Popular:</span>
              {QUICK_CORRIDORS.map((city) => (
                <Link
                  key={city}
                  href={`${MARKETPLACE_URL}/properties?search=${encodeURIComponent(city)}`}
                  className="font-medium text-[#27272A] transition-colors hover:text-[#7B2276] hover:underline hover:underline-offset-4"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Uncluttered Architectural Photography Diptych */}
          <div className="min-w-0 lg:col-span-6">
            {/* Primary Feature Frame */}
            <Link
              href={`${MARKETPLACE_URL}/property/${heroPrimary.slug}`}
              className="group block overflow-hidden rounded-xl border border-[#E4E1D6] bg-[#FFFFFF] transition-colors hover:border-[#DCD8CA]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F1E9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroPrimary.image}
                  alt={`${heroPrimary.title} in ${heroPrimary.city}, ${heroPrimary.state}, verified on Xavorian`}
                  width={960}
                  height={600}
                  fetchPriority="high"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-[#EBE8DE] px-4 py-3.5">
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-[#141414] transition-colors group-hover:text-[#7B2276]">
                    {heroPrimary.title}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-[#52525B]">
                    <ShieldCheck className="size-3.5 shrink-0 text-[#15803D]" aria-hidden="true" />
                    <span className="truncate">
                      {heroPrimary.city}, {heroPrimary.state} · {heroPrimary.shortTitle || heroPrimary.titleType}
                    </span>
                  </p>
                </div>
                <span className="shrink-0 text-[15px] font-semibold tabular-nums text-[#141414]">
                  {heroPrimary.priceFormatted}
                </span>
              </div>
            </Link>

            {/* Two Secondary Frames Below */}
            <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {heroSecondary.map((prop) => (
                <Link
                  key={prop.slug}
                  href={`${MARKETPLACE_URL}/property/${prop.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[#E4E1D6] bg-[#FFFFFF] transition-colors hover:border-[#DCD8CA]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F1E9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prop.image}
                      alt={`${prop.title} in ${prop.city}, ${prop.state}, verified on Xavorian`}
                      width={480}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-[#EBE8DE] px-3.5 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#141414] transition-colors group-hover:text-[#7B2276]">
                        {prop.title}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1 text-[11.5px] text-[#52525B]">
                        <ShieldCheck className="size-3 shrink-0 text-[#15803D]" aria-hidden="true" />
                        <span className="truncate">
                          {prop.city} · {prop.shortTitle || prop.titleType}
                        </span>
                      </p>
                    </div>
                    <span className="shrink-0 text-[13.5px] font-semibold tabular-nums text-[#141414]">
                      {prop.priceFormatted}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Architectural Trust Strip */}
        <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-[#E4E1D6] pt-8 lg:grid-cols-4 lg:divide-x lg:divide-[#E4E1D6]">
          {TRUST_METRICS.map((item, idx) => (
            <div
              key={item.term}
              className={cn(
                'flex flex-col',
                idx > 0 ? 'lg:pl-7' : '',
                idx < TRUST_METRICS.length - 1 ? ' pr-4 lg:pr-7' : '',
              )}
            >
              <dt className="text-[18px] font-semibold tabular-nums tracking-[-0.02em] text-[#141414] sm:text-[20px]">
                {item.term}
              </dt>
              <dd className="mt-1 text-[13px] leading-[1.5] text-[#52525B]">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
