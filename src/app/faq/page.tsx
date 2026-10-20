import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { JsonLd, pageMetadata } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { BRAND, MARKETPLACE_URL } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Plain answers about the Xavorian marketplace: verification checks, payments, agent onboarding, data privacy and support.',
  path: '/faq',
});

interface FaqItem {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

const groups: { title: string; items: FaqItem[] }[] = [
  {
    title: '1. Using the Xavorian Marketplace',
    items: [
      {
        q: 'Is Xavorian live yet?',
        a: 'Yes. You can browse homes, land and commercial property on the marketplace, then filter by location, property type and budget.',
        link: { href: MARKETPLACE_URL, label: 'Browse properties' },
      },
      {
        q: 'How do I start searching?',
        a: 'Open the marketplace, search by state, city or area, and refine results by property type, price and bedrooms. Create an account when you are ready to enquire, save a listing or list a property.',
      },
      {
        q: 'Does Xavorian cover every state in Nigeria?',
        a: 'Xavorian is built for property search across Nigeria. Available inventory changes by location, so use marketplace filters to see the live listings in your state or city.',
      },
      {
        q: 'What does Xavorian cost for buyers?',
        a: 'Browsing and enquiring on verified listings is free for property seekers. Verification is the price sellers and agents pay to be listed. If anyone claiming to be Xavorian ever asks a buyer for a verification fee, do not pay, and report them to support@xavorian.com.',
        link: { href: '/support', label: 'Reach support' },
      },
    ],
  },
  {
    title: '2. Verification, Payments & Platform Safety',
    items: [
      {
        q: 'What does verification actually include?',
        a: 'Four gates: a government ID with a live biometric liveness check, a bank-account name match, a scanned document audit with AI assist, and an automated multi-layer verification audit before anything goes live. A listing that fails a gate is not published.',
        link: { href: '/how-it-works', label: 'See the gates in detail' },
      },
      {
        q: 'What happens when a listing fails a gate?',
        a: 'It stays offline. The seller is told what failed and can correct it and resubmit, or ask for a human review. Listings that keep failing may be permanently removed, and accounts that repeatedly submit false documents may be closed.',
      },
      {
        q: 'How do payments work on Xavorian?',
        a: 'Payments made through Xavorian move through our payment partner, Paystack (a Central Bank of Nigeria licensed payment provider), to the verified seller’s bank account. The receiving account name must match the verified identity on the listing. Xavorian is not a bank or escrow service and does not hold, pool, or reroute your money. If the account name does not match the verified identity, stop and walk away.',
      },
      {
        q: 'Can Xavorian be held legally liable if a scam occurs?',
        a: 'Xavorian provides technology screening tools to help keep fake listings and untraceable accounts off the platform. Xavorian is a neutral technology marketplace, not a landlord, estate broker, bank, or insurer, so you must still do your own physical due diligence and lands registry searches. Under our Terms of Service, Xavorian is not liable for losses caused solely by the independent fraud or criminal conduct of other users or third parties that are not attributable to Xavorian’s own fault. Xavorian remains responsible for its own breach, negligence, and misleading statements, and nothing limits rights you have under Nigerian law.',
        link: { href: '/terms', label: 'Read our Terms of Service' },
      },
      {
        q: 'What happens to my documents and personal data?',
        a: 'Verification documents are used for verification and to meet legal and fraud-prevention duties. They are not sold and not published publicly, and only authorised systems and staff can access them. You can ask us to delete your data at any time, subject to any retention the law requires. See our Privacy Policy.',
        link: { href: '/privacy', label: 'Read Privacy Policy' },
      },
    ],
  },
  {
    title: '3. For Agents & Landlords',
    items: [
      {
        q: 'I am an agent. How do I join, and what does it cost?',
        a: 'Create an account on the marketplace to start agent onboarding. Verification includes ID and liveness checks, bank matching, document review and automated screening before listings can go live. Review the marketplace for current agent requirements and pricing.',
        link: { href: '/agents', label: 'The agent playbook' },
      },
      {
        q: 'How do verified agents benefit on Xavorian?',
        a: 'Verified agents receive the verified badge and elevated listing placement. Many buyers prefer to deal with verified agents and listings with audited paperwork.',
      },
    ],
  },
  {
    title: '4. Support Center & Escalation Protocols',
    items: [
      {
        q: 'How do I reach support at Xavorian?',
        a: 'Email support@xavorian.com for help, hello@xavorian.com for general enquiries, legal@xavorian.com for legal matters, or message us on WhatsApp (+234 805 637 3583). We aim to reply within one working day, often faster.',
        link: { href: '/contact', label: 'All contact options' },
      },
      {
        q: 'What are the response timeframes across support channels?',
        a: 'WhatsApp enquiries are typically answered within a few hours between 09:00 and 18:00 WAT on weekdays. Email enquiries typically receive a formal reply within one working day. Include your city and role (seeker or agent) to help us resolve things faster.',
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
            Knowledge Base
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Frequently Asked Questions.
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Edition: Pre-Launch 2026</span>
            <span>&bull;</span>
            <span>Scope: Waitlist, Verification Gates, Paystack Payments, Legal Liability &amp; Support</span>
          </p>
          <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">About this reference document</p>
            <p className="mt-1">
              This document gives plain answers about Xavorian&apos;s waitlist, the four verification gates, payment flows via
              CBN-licensed processors, agent onboarding, and user legal rights. It is general information. Where it
              conflicts with the Terms of Service, the Terms of Service prevail.
            </p>
            <p className="mt-2 text-xs">
              For more help, reach our team on WhatsApp (<span className="font-medium text-foreground">+234 805 637 3583</span>) or by email (
              <a href="mailto:support@xavorian.com" className="font-medium text-foreground underline">
                support@xavorian.com
              </a>
              ).
            </p>
          </div>
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

      {/* ── Official Directory ───────────────────────────── */}
      <section className="container mx-auto mt-16 sm:mt-20">
        <Reveal>
          <div className="rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground space-y-2">
            <h3 className="font-bold text-foreground">Official Contact &amp; Notices Directory</h3>
            <p>
              <strong className="font-semibold text-foreground">Entity:</strong> Xavorian Technology Company
              (RC-9912416), incorporated in the Federal Republic of Nigeria
            </p>
            <p>
              <strong className="font-semibold text-foreground">Founder:</strong> Ezeani Chukwuebuka
            </p>
            <p>
              <strong className="font-semibold text-foreground">Legal &amp; Privacy Notices:</strong>{' '}
              <span className="font-semibold text-foreground">legal@xavorian.com</span> |{' '}
              <strong className="font-semibold text-foreground">Support:</strong>{' '}
              <span className="font-semibold text-foreground">support@xavorian.com</span>
            </p>
            <p>
              <strong className="font-semibold text-foreground">Telephone / WhatsApp:</strong>{' '}
              <span className="font-semibold text-foreground">+234 805 637 3583</span> |{' '}
              <strong className="font-semibold text-foreground">Website:</strong>{' '}
              <span className="font-semibold text-foreground">https://xavorian.com</span>
            </p>
            <p>
              <strong className="font-semibold text-foreground">Launch Focus (pre-launch):</strong> Lagos, Abuja,
              Benin City, Port Harcourt, and expanding across Nigeria.
            </p>
            <p className="pt-2 text-xs font-semibold text-foreground">
              Trust is not a feature. It is the product.
            </p>
          </div>
        </Reveal>
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
