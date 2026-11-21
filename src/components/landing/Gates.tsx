import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const VERIFICATION_GATES = [
  {
    number: '01',
    title: 'Identity & Liveness KYC',
    subtitle: 'Nigerian government ID + biometric selfie',
    description:
      'Every seller, landlord, developer, and agent verifies a valid Nigerian government ID (NIN, International Passport, Driver’s Licence, or Voter’s Card) matched against a live biometric selfie before publishing.',
    outcome: 'Eliminates anonymous burner-SIM listers',
  },
  {
    number: '02',
    title: 'Bank-Name-Match Rule',
    subtitle: 'Verified via NIBSS and Paystack',
    description:
      'The payout bank account is verified through CBN-licensed payment rails and must match the lister’s verified legal identity or registered CAC corporate brokerage.',
    outcome: 'Blocks caretaker and third-party account switches',
  },
  {
    number: '03',
    title: 'Optional Title Disclosure',
    subtitle: 'Declare C of O, Deed or Survey type upfront',
    description:
      'Sellers can optionally state the title type on a property (Certificate of Occupancy, Governor’s Consent, Deed of Assignment, Allocation Letter, or Registered Survey Plan). Xavorian does not check or certify title documents; buyers should always run an independent state land registry search.',
    outcome: 'Helps buyers spot title status early and verify at the registry',
  },
  {
    number: '04',
    title: 'Automated Multi-Layer Audit',
    subtitle: 'Location, media forensics & pricing check',
    description:
      'Before publication, every submission is scored across geolocation accuracy, image forensics, pricing sanity, and record consistency. Flagged submissions stay offline or escalate to human review.',
    outcome: 'Stops cloned photos and phantom addresses',
  },
] as const;

export const Gates = () => (
  <section
    id="how-verification-works"
    aria-labelledby="gates-heading"
    className="scroll-mt-20 border-t border-[#E4E1D6] bg-[#FCFBF7] py-20 sm:py-28 lg:py-32"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Sticky Narrative */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B2276]">
            <span className="h-px w-5 bg-[#9C3495]" aria-hidden="true" />
            Pre-publication protocol
          </span>
          <h2
            id="gates-heading"
            className="mt-4 font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            How does Xavorian verify every listing before it goes live?
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.65] text-[#52525B]">
            Every seller, landlord, developer, and agent clears four sequential checks before a property becomes
            searchable. Submissions that fail any gate stay offline.
          </p>
          <Link
            href="/how-it-works"
            className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#141414] underline decoration-[#DCD8CA] underline-offset-4 transition-colors hover:text-[#7B2276] hover:decoration-[#9C3495]"
          >
            Read the full verification protocol
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Right Vertical Numbered Ledger */}
        <div className="lg:col-span-7">
          <ol className="border-t border-[#E4E1D6]">
            {VERIFICATION_GATES.map((gate) => (
              <li
                key={gate.number}
                className="grid gap-3 border-b border-[#E4E1D6] py-7 sm:grid-cols-[52px_1fr] sm:gap-6 sm:py-8"
              >
                <span className="pt-1 text-[13px] font-semibold tabular-nums text-[#75736B]">
                  {gate.number}
                </span>
                <div>
                  <h3 className="font-sans text-[19px] font-semibold tracking-[-0.015em] text-[#141414]">
                    {gate.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] font-semibold text-[#7B2276]">{gate.subtitle}</p>
                  <p className="mt-2.5 text-[14.5px] leading-[1.65] text-[#52525B]">{gate.description}</p>
                  <p className="mt-3.5 inline-flex items-center gap-2 text-[13px] font-medium text-[#27272A]">
                    <Check className="size-3.5 shrink-0 text-[#15803D]" strokeWidth={2.5} aria-hidden="true" />
                    <span>{gate.outcome}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* AEO Self-Contained 151-Word Citable Answer Passage */}
      <aside
        aria-label="Plain-English summary of Xavorian property verification"
        className="aeo-passage mt-14 flex flex-col gap-6 rounded-lg border border-[#DCD8CA] border-l-2 border-l-[#9C3495] bg-[#FAF9F4] p-6 sm:p-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B2276]">
            Plain-English Verification Summary
          </p>
          <p className="mt-2 text-[14.5px] leading-[1.68] text-[#27272A] sm:text-[15px]">
            <strong className="font-semibold text-[#141414]">
              What makes Xavorian different from standard Nigerian property websites?
            </strong>{' '}
            Standard property classifieds in Nigeria allow almost anyone to post a house or plot in minutes without
            checking identity or title records. On Xavorian, operated by Xavorian Technology Company (CAC RC-9912416),
            no listing can appear publicly until it clears pre-publication verification checks: government ID with
            biometric liveness KYC, payout bank-account name matching via NIBSS and Paystack against the verified ID,
            optional title-type disclosure, and an automated multi-layer geolocation, pricing, and media forensics
            audit. Browsing and enquiries are completely free for buyers and tenants across all 36 states and Abuja
            FCT. Buyers can also opt into 3% transaction protection through licensed payment rails while completing
            physical inspections and independent state land registry searches (Lagos e-GIS, AGIS Abuja, EDOGIS) to
            verify property documents with a lawyer. Verification is a structured screening filter, not a legal title
            warranty.
          </p>
        </div>
        <Link
          href="/how-it-works"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#141414] bg-transparent px-5 text-[13px] font-semibold text-[#141414] transition-colors hover:bg-[#141414] hover:text-[#FCFBF7]"
        >
          See Gate Details
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </aside>
    </div>
  </section>
);
