import { Check, Minus } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Pre-listing ID & liveness KYC',
    xavorian: 'Mandatory Nigerian government ID + live biometric selfie before publishing',
    traditional: 'Optional or not required to post ads',
  },
  {
    feature: 'Payout bank-account name match',
    xavorian: 'Enforced via NIBSS and Paystack (Bank-Name-Match Rule)',
    traditional: 'No bank verification; third-party transfer scams common',
  },
  {
    feature: 'Title documentation',
    xavorian: 'Optional title-type disclosure upfront; buyers verify originals at the state registry',
    traditional: 'Unstructured text ads with no identity accountability',
  },
  {
    feature: 'Cloned photo & address screening',
    xavorian: 'Automated media forensics and geolocation validation before publication',
    traditional: 'Widespread duplicate listings and recycled agent photos',
  },
  {
    feature: 'Transaction payment protection',
    xavorian: 'Optional 3% milestone protection via licensed payment rails during registry searches',
    traditional: 'Rarely offered; buyers transfer directly at full risk',
  },
  {
    feature: 'Cost for buyers & renters',
    xavorian: 'Free (₦0) to browse, filter, enquire, and receive alerts',
    traditional: 'Free to browse',
  },
  {
    feature: 'Geographic coverage',
    xavorian: 'Built for all 36 Nigerian states and Abuja FCT',
    traditional: 'Concentrated heavily in Lagos and Abuja',
  },
] as const;

export const ComparisonTable = () => (
  <section
    id="compare"
    aria-labelledby="compare-heading"
    className="scroll-mt-20 border-t border-[#E4E1D6] bg-[#FCFBF7] py-20 sm:py-28 lg:py-32"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      {/* Kicker-free 12-Col Editorial Header */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2
            id="compare-heading"
            className="font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            How does Xavorian compare to traditional Nigerian property sites?
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-[15px] leading-[1.65] text-[#52525B]">
            Open classified portals such as PropertyPro, Nigeria Property Centre, and Jiji let unvetted accounts post
            in minutes. Xavorian screens identity, bank accounts, and title paperwork before any listing appears.
          </p>
        </div>
      </div>

      {/* Magazine-Clean Typographic Comparison Table */}
      <div className="mt-10 overflow-x-auto rounded-lg border border-[#DCD8CA] bg-[#FFFFFF]">
        <table className="w-full min-w-[680px] border-collapse text-left text-[14px]">
          <caption className="sr-only">
            Comparison between Xavorian four-gate verification standards and open Nigerian property classified portals
          </caption>
          <thead>
            <tr className="border-b border-[#DCD8CA]">
              <th
                scope="col"
                className="w-[30%] bg-[#FAF9F4] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#75736B] sm:px-6"
              >
                Safety &amp; Verification Standard
              </th>
              <th
                scope="col"
                className="w-[38%] border-x border-[#E4E1D6] border-t-2 border-t-[#9C3495] bg-[#F6ECF5]/60 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7B2276] sm:px-6"
              >
                Xavorian
              </th>
              <th
                scope="col"
                className="w-[32%] bg-[#FAF9F4] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#75736B] sm:px-6"
              >
                Open Property Classifieds
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EBE8DE]">
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.feature} className="transition-colors hover:bg-[#FAF9F4]/60">
                <th scope="row" className="px-5 py-4 font-semibold text-[#141414] sm:px-6">
                  {row.feature}
                </th>
                <td className="border-x border-[#EBE8DE] bg-[#FAF3FA]/35 px-5 py-4 text-[#141414] sm:px-6">
                  <span className="flex items-start gap-2.5">
                    <Check className="mt-1 size-3.5 shrink-0 text-[#15803D]" strokeWidth={2.5} aria-hidden="true" />
                    <span className="leading-[1.55]">{row.xavorian}</span>
                  </span>
                </td>
                <td className="px-5 py-4 text-[#52525B] sm:px-6">
                  <span className="flex items-start gap-2.5">
                    <Minus className="mt-1 size-3.5 shrink-0 text-[#A1A1AA]" strokeWidth={2} aria-hidden="true" />
                    <span className="leading-[1.55]">{row.traditional}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
