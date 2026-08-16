import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { JsonLd, pageMetadata } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { BRAND } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Plain answers about Xavorian: the waitlist, the four verification gates, payments, agent onboarding, data privacy and how to reach support.',
  path: '/faq',
});

interface FaqItem {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

const groups: { title: string; items: FaqItem[] }[] = [
  {
    title: 'Using Xavorian',
    items: [
      {
        q: 'Is Xavorian live yet?',
        a: 'Not yet. Xavorian opens city by city, and each city starts from its waitlist. Joining takes under a minute and guarantees you hear the moment your city opens.',
        link: { href: '/waitlist', label: 'Join the waitlist' },
      },
      {
        q: 'How does the waitlist work?',
        a: 'You leave your name, email, city and whether you are searching or selling. We send one email when your city opens, nothing in between. Agents on the waitlist get reviewed before launch day.',
      },
      {
        q: 'Why do cities open in waitlist order?',
        a: 'Verification requires deep city-by-city registry indexing. The waitlist shows us exactly where demand is deepest, so that is where we launch first. Your signup genuinely moves your city forward.',
      },
      {
        q: 'What does Xavorian cost for buyers?',
        a: 'Browsing verified listings is free. Verification is the price sellers and agents pay for the privilege of being listed. If anyone claiming to be Xavorian ever asks a buyer for a verification fee, report them.',
        link: { href: '/support', label: 'Reach support' },
      },
    ],
  },
  {
    title: 'Verification & safety',
    items: [
      {
        q: 'What does verification actually include?',
        a: 'Four gates: a government ID with a liveness check, a bank-account name match, a scanned document audit with AI truthing, and an automated multi-layer verification audit. A listing that fails any gate never goes live.',
        link: { href: '/how-it-works', label: 'See the gates in detail' },
      },
      {
        q: 'What happens when a listing fails a gate?',
        a: 'It stays offline. The seller is told exactly what failed and can fix it and resubmit once. Listings that keep failing are removed, and accounts that repeatedly submit false documents are closed.',
      },
      {
        q: 'How do payments work on Xavorian?',
        a: 'Payments move directly through our primary payment partner, Paystack (a Central Bank of Nigeria licensed payment provider), directly to the verified seller’s bank account. The receiving account name must match the verified identity on the listing letter for letter. Xavorian is not a bank or escrow service and never holds, pools, or reroutes your money. If the account name does not match the verified identity, stop and walk away.',
      },
      {
        q: 'Can Xavorian be held legally liable if a scam occurs?',
        a: 'Xavorian provides technology screening tools to filter out fake listings and untraceable accounts before they publish. However, because Xavorian is a neutral technology marketplace platform — not a landlord, estate broker, bank, or insurer — each user must still conduct physical due diligence and lands registry searches. Under our Terms of Service, Xavorian is not liable for third-party criminal conduct, forgeries, or scams committed by independent users, to the maximum extent permitted by Nigerian law.',
        link: { href: '/terms', label: 'Read our Terms of Service' },
      },
      {
        q: 'What happens to my documents and data?',
        a: 'Verification documents are used for verification, full stop. They are never sold, never published, and only the review system can access them. Waitlist emails are used for launch updates only. You can ask us to delete your data at any time.',
        link: { href: '/support', label: 'Ask about your data' },
      },
    ],
  },
  {
    title: 'For agents',
    items: [
      {
        q: 'I am an agent. How do I join, and what does it cost?',
        a: 'Join the waitlist as an agent and we will verify you before your city opens: ID and liveness check, bank match, document review, autonomous AI seal. The waitlist is free. Agent pricing will be published before launch, with no hidden onboarding fees.',
        link: { href: '/agents', label: 'The agent playbook' },
      },
      {
        q: 'How do I reach support at Xavorian?',
        a: 'Email xavoriansupport@gmail.com for help, xavorian01@gmail.com for anything general, or message us on WhatsApp. We reply within one working day, usually much faster.',
        link: { href: '/contact', label: 'All contact options' },
      },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap((g) =>
    g.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            FAQ
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Asked often. Answered plainly.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everything people usually want to know before joining. If your question is not
            here, our team at{' '}
            <a href={`mailto:${BRAND.supportEmail}`} className="link-underline font-medium text-foreground">
              {BRAND.supportEmail}
            </a>{' '}
            will happily add it to the list.
          </p>
        </Reveal>
      </section>

      {/* ── Grouped questions ────────────────────────────── */}
      <section className="container mx-auto mt-16 sm:mt-20">
        {groups.map((group, gi) => (
          <div key={group.title} className={gi > 0 ? 'mt-14' : ''}>
            <Reveal>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">{group.title}</h2>
            </Reveal>
            <div className="mt-5 space-y-3">
              {group.items.map((item, i) => (
                <Reveal key={item.q} delay={i * 70}>
                  <details className="group rounded-2xl border border-border bg-card px-5 py-4 open:shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="text-xl font-light leading-none text-muted-foreground transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{item.a}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="link-underline mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                      >
                        {item.link.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12">
            <span className="eyebrow border-white/15 bg-white/10 text-white/70">
              <span className="eyebrow-dot" />
              Still reading? You are our kind of person
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Careful people are exactly who we are building for.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              Reserve your place and we will tell you the moment your city opens.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/waitlist"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read our guides
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
