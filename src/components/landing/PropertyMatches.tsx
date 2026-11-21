import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PropertyMatchForm } from '@/components/PropertyMatchForm';

const MATCH_POINTS = [
  {
    number: '01',
    title: 'Strictly your state and budget',
    body: 'Choose your exact state, neighborhood, property type, and NGN budget. No off-brief ads or unrelated corridors.',
  },
  {
    number: '02',
    title: 'Curated Tuesday and Thursday alerts',
    body: 'Receive one matching verified property per email, with price, photos, title status, and direct link.',
  },
  {
    number: '03',
    title: 'Built for local and diaspora buyers',
    body: 'Every matched lister has already cleared government ID KYC and bank-account name verification.',
  },
] as const;

const FEATURED_GUIDES = [
  {
    title: 'How to verify a Certificate of Occupancy (C of O) before paying',
    href: '/guides/verify-c-of-o-before-paying',
  },
  {
    title: 'Renting safely in Lagos and Benin City: the new renter’s playbook',
    href: '/guides/rent-safely-lagos-benin',
  },
  {
    title: 'Buying property in Nigeria from abroad (Diaspora Guide)',
    href: '/blog/buying-property-from-abroad-diaspora-guide',
  },
] as const;

export const PropertyMatches = () => (
  <section
    id="property-matches"
    aria-labelledby="property-matches-heading"
    className="scroll-mt-20 border-t border-[#DCD8CA] bg-[#F3F1E9] py-20 sm:py-28 lg:py-32"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Editorial Narrative & Essential Guides */}
        <div className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B2276]">
            Verified Property Alerts
          </p>
          <h2
            id="property-matches-heading"
            className="mt-3 font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Tell us your criteria. We will email verified matches.
          </h2>
          <p className="mt-3.5 text-[15px] leading-[1.65] text-[#52525B]">
            Share your target state, neighborhood, property type, and NGN budget. When a screened listing fits, we send
            it directly to your inbox.
          </p>

          {/* 3 Hairline-Divided Value Points */}
          <ol className="mt-8 divide-y divide-[#DCD8CA] border-t border-[#DCD8CA]">
            {MATCH_POINTS.map((point) => (
              <li key={point.number} className="grid grid-cols-[32px_1fr] gap-3 py-4">
                <span className="pt-0.5 text-[12px] font-semibold tabular-nums text-[#75736B]">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-sans text-[14.5px] font-semibold text-[#141414]">{point.title}</h3>
                  <p className="mt-0.5 text-[13.5px] leading-[1.6] text-[#52525B]">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Unboxed Essential Guides Reading List */}
          <div className="mt-10 border-t border-[#DCD8CA] pt-6">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#75736B]">
                Essential Field Guides
              </p>
              <Link
                href="/guides"
                className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#7B2276] hover:underline"
              >
                All guides
                <ArrowRight className="size-3" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-3 divide-y divide-[#DCD8CA]/80">
              {FEATURED_GUIDES.map((guide) => (
                <li key={guide.href} className="py-2.5 first:pt-1 last:pb-0">
                  <Link
                    href={guide.href}
                    className="group flex items-center justify-between gap-3 text-[13.5px] font-medium text-[#141414] transition-colors hover:text-[#7B2276]"
                  >
                    <span>{guide.title}</span>
                    <ArrowRight
                      className="size-3.5 shrink-0 text-[#75736B] transition-transform group-hover:translate-x-0.5 group-hover:text-[#7B2276]"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Clean Architectural White Form Sheet */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-[#DCD8CA] bg-[#FFFFFF] p-6 shadow-soft sm:p-8 lg:p-9">
            <div className="mb-6 border-b border-[#EBE8DE] pb-4">
              <p className="text-[18px] font-semibold tracking-[-0.01em] text-[#141414]">
                Set up your free property match
              </p>
              <p className="mt-1 text-[12.5px] text-[#75736B]">
                30 seconds · NDPA 2023 compliant consent · Unsubscribe anytime
              </p>
            </div>
            <PropertyMatchForm source="landing_home" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
