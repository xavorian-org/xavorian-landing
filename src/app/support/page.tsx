import Link from 'next/link';
import type { Metadata } from 'next';
import { Mail, MessageCircle, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { BRAND } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'Support Center — Fast & Direct Assistance',
  description:
    'Get help with Xavorian: waitlist, verification and account questions answered promptly over email and WhatsApp, usually within one working day.',
  path: '/support',
});

const supportPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Xavorian Support Center',
  url: `${BASE_URL}/support`,
  description: 'How to reach Xavorian support and what to expect when you do.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
};

const whatsappHref = `${BRAND.whatsapp}?text=${encodeURIComponent(
  'Hello Xavorian, I need help with:',
)}`;

const channels = [
  {
    icon: Mail,
    title: 'General enquiries',
    detail: 'Partnerships, press, ideas, and anything that does not fit a box.',
    href: `mailto:${BRAND.email}`,
    label: BRAND.email,
  },
  {
    icon: Mail,
    title: 'Support',
    detail: 'Waitlist, verification and account questions. The right mailbox for most problems.',
    href: `mailto:${BRAND.supportEmail}`,
    label: BRAND.supportEmail,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'The quickest way to reach support. Message us and we pick it up in working hours.',
    href: whatsappHref,
    label: BRAND.phoneDisplay,
  },
];

const responseWindows = [
  { icon: MessageCircle, title: 'WhatsApp', body: 'Usually within a few hours, 9:00 to 18:00 WAT on weekdays.' },
  { icon: Mail, title: 'Email', body: 'Within one working day, usually faster.' },
  { icon: Clock, title: 'Help us help you', body: 'Include your city and whether you are a seeker or an agent. Context gets you a useful first reply instead of a follow-up question.' },
];

const quickLinks = [
  { href: '/faq', title: 'FAQ', body: 'The ten questions everyone asks, answered plainly.' },
  { href: '/how-it-works', title: 'How it works', body: 'The four verification gates, step by step.' },
  { href: '/guides', title: 'Guides', body: 'Deep reads on documents, fees and buying safely.' },
];

export default function SupportPage() {
  return (
    <>
      <JsonLd data={supportPageSchema} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Support center
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Instant support assistance. Get a straight answer.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            No ticket numbers that vanish into a queue. You write, we read, we reply.
            Pick whichever door suits you.
          </p>
        </Reveal>
      </section>

      {/* ── Channels ─────────────────────────────────────── */}
      <section className="container mx-auto mt-14 sm:mt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <c.icon className="h-5 w-5 text-foreground" />
                </div>
                <h2 className="text-base font-bold tracking-tight">{c.title}</h2>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{c.detail}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  {c.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Response windows ─────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            What to expect
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            How fast we get back to you.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {responseWindows.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <r.icon className="h-4 w-4 text-foreground" />
                  <h3 className="text-sm font-bold tracking-tight">{r.title}</h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Before you write us ──────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Before you write us
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your answer might already be waiting.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {quickLinks.map((q, i) => (
            <Reveal key={q.href} delay={i * 90}>
              <Link
                href={q.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <h3 className="text-base font-bold tracking-tight">{q.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{q.body}</p>
                <span className="link-underline mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold">
                  Open
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Safety note ──────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-12 text-white sm:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow border-white/15 bg-white/10 text-white/70">
                <span className="eyebrow-dot" />
                One rule above all others
              </span>
              <h2 className="mt-5 text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                Never pay an account whose name does not match the verified identity.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
                Not for inspection, not for “commitment”, not in an emergency. A mismatched
                name is not a technicality; it is the scam arriving exactly on schedule. Remember: Xavorian provides verification tools to filter out bad actors, but we are a neutral technology platform, not an insurer or landlord — always perform your own physical due diligence. If anyone pressures you to pay a mismatched account, forward everything to{' '}
                <a href={`mailto:${BRAND.supportEmail}`} className="font-semibold text-white underline underline-offset-4">
                  {BRAND.supportEmail}
                </a>{' '}
                and walk away.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
