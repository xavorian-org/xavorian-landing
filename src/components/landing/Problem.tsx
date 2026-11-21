import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FRAUD_PATTERNS = [
  {
    code: '01',
    name: 'Cloned listings and stolen photos',
    description:
      'A stranger copies photos of a real home in Lekki or Gwarinpa and lists it far below area comparables to rush a deposit.',
    gateTag: 'Blocked at Gate 01 + Gate 04',
    countermeasure:
      'Mandatory government ID liveness removes throwaway accounts while automated media forensics and pricing checks catch recycled photos before publication.',
  },
  {
    code: '02',
    name: 'Ghost agents and viewing-fee traps',
    description:
      'A caller demands an upfront inspection fee or commitment transfer into an unrelated personal account, then disappears.',
    gateTag: 'Blocked at Gate 01 + Gate 02',
    countermeasure:
      'Every lister’s identity is on file and the Bank-Name-Match Rule via NIBSS and Paystack prevents payouts to unverified third-party accounts.',
  },
  {
    code: '03',
    name: 'Phantom addresses and bait pricing',
    description:
      'Listings with nonexistent street locations, recycled stock photos, or unrealistic prices designed to lure buyers off-platform.',
    gateTag: 'Blocked at Gate 04',
    countermeasure:
      'Automated geolocation validation, media checks, and pricing sanity audits filter out phantom locations and bait listings before publication.',
  },
  {
    code: '04',
    name: 'Double sales and off-record diversion',
    description:
      'The same plot sold to multiple buyers simultaneously, or diaspora funds diverted by unverified intermediaries.',
    gateTag: 'Mitigated by KYC + Optional 3% Protection',
    countermeasure:
      'Verified seller identities plus optional 3% transaction protection through licensed payment rails give buyers a milestone window to complete physical inspections and independent state registry searches.',
  },
] as const;

export const Problem = () => (
  <section
    id="fraud-patterns"
    aria-labelledby="fraud-patterns-heading"
    className="scroll-mt-20 border-t border-[#DCD8CA] bg-[#F3F1E9] py-20 sm:py-28 lg:py-32"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      {/* Kicker-free Asymmetric Editorial Header */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            id="fraud-patterns-heading"
            className="font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Four patterns behind Nigerian property scams, and where each one stops.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-[15px] leading-[1.65] text-[#52525B]">
            Property fraud in Nigeria relies on anonymity, third-party bank transfers, and unchecked paperwork.
            Xavorian addresses all three before a listing reaches local or diaspora buyers.
          </p>
        </div>
      </div>

      {/* Full-Width Architectural Two-Column Hairline Ledger */}
      <div className="mt-12 border-t border-[#DCD8CA]">
        <div
          aria-hidden="true"
          className="hidden border-b border-[#DCD8CA] py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#75736B] md:grid md:grid-cols-12"
        >
          <span className="col-span-1">No.</span>
          <span className="col-span-5">The pattern on open classifieds</span>
          <span className="col-span-6 pl-8">How Xavorian blocks it before publication</span>
        </div>

        {FRAUD_PATTERNS.map((item) => (
          <article
            key={item.code}
            className="grid items-start gap-5 border-b border-[#DCD8CA] py-7 sm:py-9 md:grid-cols-12 md:gap-0"
          >
            <div className="md:col-span-1">
              <span className="text-[12.5px] font-semibold tabular-nums text-[#75736B]">{item.code}</span>
            </div>

            <div className="md:col-span-5 md:pr-8">
              <h3 className="font-sans text-[18px] font-semibold tracking-[-0.015em] text-[#141414]">
                {item.name}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-[#52525B]">{item.description}</p>
            </div>

            <div className="md:col-span-6 md:border-l md:border-[#DCD8CA] md:pl-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7B2276]">
                {item.gateTag}
              </p>
              <p className="mt-1.5 text-[14.5px] leading-[1.65] text-[#27272A]">{item.countermeasure}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Footnote Strip */}
      <div className="mt-7 flex flex-col gap-3 text-[13px] text-[#52525B] sm:flex-row sm:items-center sm:justify-between">
        <p>
          Pre-publication screening cuts anonymous fraud early; always inspect in person and verify title numbers with
          an independent lawyer.
        </p>
        <Link
          href="/guides/questions-before-inspection-fee"
          className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-[#141414] underline decoration-[#DCD8CA] underline-offset-4 transition-colors hover:text-[#7B2276] hover:decoration-[#9C3495]"
        >
          Seven questions to ask before paying
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);
