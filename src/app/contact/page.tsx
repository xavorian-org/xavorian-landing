import Link from 'next/link';
import type { Metadata } from 'next';
import { Mail, MessageCircle, Scale, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { JsonLd, pageMetadata, organizationSchema, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { BRAND } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us — Get in Touch',
  description:
    'Reach Xavorian by email or WhatsApp. General, support and legal contacts, answered promptly within one working day. Serving all of Nigeria.',
  path: '/contact',
});

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Xavorian',
  url: `${BASE_URL}/contact`,
  description: 'All the ways to reach the Xavorian team: general, support, legal and WhatsApp.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#organization` },
};

const whatsappHref = `${BRAND.whatsapp}?text=${encodeURIComponent('Hello Xavorian, ')}`;

const channels = [
  {
    icon: Mail,
    title: 'General',
    detail: 'Partnerships, press, careers and everything else.',
    href: `mailto:${BRAND.email}`,
    label: BRAND.email,
    note: 'Replies within one working day',
  },
  {
    icon: Mail,
    title: 'Support',
    detail: 'Waitlist, verification and account questions.',
    href: `mailto:${BRAND.supportEmail}`,
    label: BRAND.supportEmail,
    note: 'Replies within one working day — see Support Center',
  },
  {
    icon: Scale,
    title: 'Legal & privacy',
    detail: 'Data requests, document concerns and anything for our lawyers.',
    href: `mailto:${BRAND.legalEmail}`,
    label: BRAND.legalEmail,
    note: 'Replies within two working days',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'Quickest route to support during working hours.',
    href: whatsappHref,
    label: BRAND.phoneDisplay,
    note: 'Usually within a few hours, weekdays',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[organizationSchema, contactPageSchema]} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Contact
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Fast &amp; direct team support.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Xavorian is in waitlist stage, so there is no marketplace dashboard yet. Email
            is the fastest way to reach us, and we respond promptly.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-foreground" />
            No office to visit yet. We work remotely, serving all of Nigeria.
          </p>
        </Reveal>
      </section>

      {/* ── Channels ─────────────────────────────────────── */}
      <section className="container mx-auto mt-14 max-w-4xl sm:mt-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <c.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h2 className="mt-4 text-base font-bold tracking-tight">{c.title}</h2>
                <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">{c.detail}</p>
                <p className="mt-4 text-sm font-semibold text-foreground">{c.label}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer social? Find us at{' '}
            <a
              href="https://x.com/Xavorianxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-semibold"
            >
              @xavorianxyz
            </a>{' '}
            on X, Instagram, TikTok and YouTube.
          </p>
        </Reveal>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12">
            <span className="eyebrow border-white/15 bg-white/10 text-white/70">
              <span className="eyebrow-dot" />
              Here to join?
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              The waitlist is faster than any inbox.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              One form, one minute, and you are first in line when your city opens.
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
                href="/support"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Visit support
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
