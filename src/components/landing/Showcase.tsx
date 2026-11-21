'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';
import { cn } from '@/lib/utils';

const VIEWS = [
  {
    id: 'marketplace',
    label: 'Live Marketplace',
    caption:
      'Filter verified homes, apartments, titled land, and commercial properties by state, city, title type, and NGN budget.',
  },
  {
    id: 'dashboard',
    label: 'Seller & Verification Workspace',
    caption:
      'Review KYC verification status, active buyer offers, live property inventory, and Bank-Name-Matched payout settings.',
  },
] as const;

const WORKSPACE_BULLETS = [
  'Gate 1 KYC verification required before any property goes live',
  'Direct buyer enquiries and offer tracking without anonymous leads',
  'Payout routing strictly locked to Bank-Name-Matched accounts',
] as const;

const GUARANTEES = [
  {
    title: '₦0 for buyers and tenants',
    body: 'Search listings, review title status, and message verified listers completely free.',
  },
  {
    title: 'Bank-Name-Match payouts',
    body: 'Payments via CBN-licensed Paystack rails settle only to bank accounts matching the verified legal ID.',
  },
  {
    title: 'Optional 3% transaction protection',
    body: 'Hold milestone deposits via licensed payment rails while running physical inspections and lands registry searches.',
  },
] as const;

export const Showcase = () => {
  const [active, setActive] = useState<'marketplace' | 'dashboard'>('marketplace');
  const current = VIEWS.find((v) => v.id === active) ?? VIEWS[0];

  return (
    <section
      id="platform-preview"
      aria-labelledby="showcase-heading"
      className="scroll-mt-20 border-t border-[#E4E1D6] bg-[#FFFFFF] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Centered Editorial Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#75736B]">
            Inside the Platform
          </p>
          <h2
            id="showcase-heading"
            className="mt-3 font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            One clear workspace from first search to handover.
          </h2>
          <p className="mt-3.5 text-[15.5px] leading-[1.65] text-[#52525B]">
            Compare verified homes, apartments, and titled plots in Nigeria or coordinate a purchase from the UK, US,
            Canada, or Europe with seller checks visible upfront.
          </p>

          {/* Segmented View Toggle */}
          <div
            role="tablist"
            aria-label="Platform view switcher"
            className="mt-8 inline-flex rounded-lg border border-[#E4E1D6] bg-[#F3F1E9] p-1"
          >
            {VIEWS.map((view) => {
              const isSelected = active === view.id;
              return (
                <button
                  key={view.id}
                  id={`tab-${view.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${view.id}`}
                  onClick={() => setActive(view.id)}
                  className={cn(
                    'rounded-md px-4 py-2 text-[13px] transition-colors',
                    isSelected
                      ? 'bg-[#FFFFFF] font-semibold text-[#141414] shadow-soft'
                      : 'font-medium text-[#52525B] hover:text-[#141414]',
                  )}
                >
                  {view.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Warm-Stone UI Mat (Zero Fake Browser Chrome) */}
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="mx-auto mt-10 max-w-5xl rounded-xl border border-[#DCD8CA] bg-[#F3F1E9] p-3 sm:p-5 lg:p-6"
        >
          {active === 'marketplace' ? (
            <div className="aspect-[16/7.4] overflow-hidden rounded-lg border border-[#DCD8CA] bg-[#FFFFFF] shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/xavorian-app-home.jpg"
                alt="Xavorian live marketplace interface showing verified Nigerian properties and search filters"
                width={1591}
                height={722}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
          ) : (
            <div className="grid items-stretch gap-5 lg:grid-cols-12">
              <div className="flex flex-col justify-between rounded-lg border border-[#DCD8CA] bg-[#FFFFFF] p-6 sm:p-7 lg:col-span-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7B2276]">
                    Seller &amp; Agent Workspace
                  </p>
                  <h3 className="mt-2 font-serif text-[26px] font-normal not-italic leading-[1.15] text-[#141414]">
                    Verification status, active offers, and live inventory in one view.
                  </h3>
                  <ul className="mt-5 divide-y divide-[#EBE8DE] text-[13.5px] leading-[1.6] text-[#52525B]">
                    {WORKSPACE_BULLETS.map((bullet) => (
                      <li key={bullet} className="py-2.5 first:pt-0 last:pb-0">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-[11.5px] text-[#75736B]">
                  Illustrative workspace preview from marketplace.xavorian.com.
                </p>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[#DCD8CA] bg-[#FFFFFF] shadow-soft lg:col-span-7 lg:aspect-auto lg:min-h-[340px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/xavorian-app-dashboard.jpg"
                  alt="Xavorian verification workspace showing KYC identity check requirement, active offers, and live listings"
                  width={1590}
                  height={730}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full origin-top-right scale-[1.32] object-cover object-right-top"
                />
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-[#52525B]">{current.caption}</p>
            <Link
              href={MARKETPLACE_URL}
              className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[#141414] transition-colors hover:text-[#7B2276]"
            >
              Open live marketplace
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Borderless 3-Column Hairline Guarantees Strip */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 border-t border-[#E4E1D6] pt-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#E4E1D6]">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="md:px-7 first:md:pl-0 last:md:pr-0">
              <h3 className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-[#141414]">{g.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#52525B]">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
