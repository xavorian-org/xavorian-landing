import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';
import { FAQS, FAQ_ITEMS } from '@/data/faqItems';

export { FAQ_ITEMS };

export const FaqTeaser = () => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className="scroll-mt-20 border-t border-[#E4E1D6] bg-[#FCFBF7] pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left Sticky Column (Kicker-Free) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <h2
            id="faq-heading"
            className="font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Frequently asked questions.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#52525B]">
            Straight answers for Nigerian buyers, renters, diaspora investors, and real estate agents.
          </p>
          <Link
            href="/faq"
            className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#141414] underline decoration-[#DCD8CA] underline-offset-4 transition-colors hover:text-[#7B2276] hover:decoration-[#9C3495]"
          >
            View all questions
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Right Unboxed Hairline Accordion */}
        <div className="border-t border-[#DCD8CA] lg:col-span-8">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="faq-item group border-b border-[#DCD8CA]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15.5px] font-semibold tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#7B2276] sm:py-6 sm:text-[16.5px] [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Plus
                  className="faq-icon size-4 shrink-0 text-[#75736B]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </summary>
              <div className="smooth-details-body">
                <div>
                  <p className="max-w-[65ch] pb-6 pr-8 text-[14.5px] leading-[1.7] text-[#52525B]">
                    {item.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);
