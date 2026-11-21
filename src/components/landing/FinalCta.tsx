import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';

export const FinalCta = () => (
  <section
    aria-labelledby="final-cta-heading"
    className="bg-[#FCFBF7] pb-4 sm:pb-6"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      <div className="grid overflow-hidden rounded-xl border border-[#DCD8CA] bg-[#FFFFFF] shadow-soft lg:grid-cols-12">
        {/* Left Editorial Content Pane */}
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-6 lg:p-14">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B2276]">
              <span className="h-px w-5 bg-[#9C3495]" aria-hidden="true" />
              Start with verified listings
            </span>

            <h2
              id="final-cta-heading"
              className="mt-5 font-serif text-[2.1rem] font-normal not-italic leading-[1.06] tracking-[-0.02em] text-[#141414] sm:text-[2.75rem] lg:text-[3.1rem]"
            >
              Your next Nigerian property should begin with verified records.
            </h2>

            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.65] text-[#52525B]">
              Browse 4-gate verified homes, apartments, land with C of O, and commercial properties across all 36
              states and Abuja FCT. Free for buyers and tenants.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={MARKETPLACE_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#141414] px-6 text-[13.5px] font-semibold text-[#FCFBF7] transition-colors hover:bg-[#7B2276]"
              >
                Browse Verified Properties
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/agents"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#DCD8CA] bg-[#FCFBF7] px-6 text-[13.5px] font-semibold text-[#141414] transition-colors hover:border-[#141414]"
              >
                List as a Verified Agent
              </Link>
            </div>
          </div>

          <p className="mt-8 border-t border-[#EBE8DE] pt-4 text-[12px] tabular-nums text-[#75736B]">
            4 pre-publication gates · Bank-Name-Match via Paystack · CAC RC-9912416
          </p>
        </div>

        {/* Right Architectural Photography Pane */}
        <div className="relative min-h-[260px] border-t border-[#DCD8CA] bg-[#F3F1E9] sm:min-h-[360px] lg:col-span-6 lg:min-h-full lg:border-l lg:border-t-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/xavorian-estate-street.jpg"
            alt="Sunlit Nigerian residential estate duplexes with stone-clad facades along a paved street"
            width={960}
            height={600}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-[#DCD8CA] bg-[#FCFBF7]/95 px-5 py-3 backdrop-blur-sm">
            <span className="text-[12px] font-medium text-[#27272A]">
              Verified residential corridors nationwide
            </span>
            <span className="text-[11.5px] font-semibold tabular-nums text-[#7B2276]">
              36 States + Abuja FCT
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
