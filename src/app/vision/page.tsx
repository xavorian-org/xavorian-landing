import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BadgeCheck,
  Building2,
  MapPinned,
  ShieldCheck,
  FileCheck2,
  Cpu,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { CITIES } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'The Vision — A Trust Layer for African Real Estate',
  description:
    'Xavorian starts with verified property in Nigeria and grows into the trust layer for African real estate: deeper verification tiers, smarter document truthing, more cities.',
  path: '/vision',
});

const visionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Vision — Xavorian',
  url: `${BASE_URL}/vision`,
  description:
    'Where Xavorian is going: deeper agent verification tiers, smarter AI document truthing, and verified property across Africa.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
};

const principles = [
  {
    title: 'Proof Before Promises',
    body: 'If we cannot verify a claim against official records and audited documents, we do not present it as verified. Confidence is earned through checks, not adjectives or marketing hype.',
  },
  {
    title: 'Names on Everything',
    body: 'On listings, on verified bank accounts, on reviews, and on contracts. Anonymous environments are where scams breed, so anonymity is not permitted for transacting on Xavorian.',
  },
  {
    title: 'Boring, on Purpose',
    body: 'Verification should feel rigorous and unyielding. The day it feels casual, convenient, or rushed, we have failed our users.',
  },
  {
    title: 'Built for Nigeria First',
    body: 'Engineered for local land tenure reality: State Lands Bureaus, C of O verification, Gazette records, Governor’s Consent, survey beacon matching, and reducing inspection-fee scams.',
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Pillar 1: We Verify the Person',
    body: 'Every agent and landlord completes mandatory government ID and biometric liveness checks, then links a verified bank account in the identical legal name. Accountability is the default.',
  },
  {
    icon: FileCheck2,
    title: 'Pillar 2: We Audit the Paperwork',
    body: 'Title documents are scanned and cross-checked against listing claims. OCR and AI assist compare registration numbers and survey beacons to help expose forgeries.',
  },
  {
    icon: Cpu,
    title: 'Pillar 3: Automated Verification Engine',
    body: 'Our multi-layer verification system cross-checks and screens listings before publication, reducing human bias and fatigue, with human review of flagged cases.',
  },
];

const ladder = [
  {
    icon: BadgeCheck,
    tier: 'Tier 1 · Foundation (At launch)',
    title: 'The four gates, for everyone',
    body: 'The four gates for everyone: government KYC, bank-account name matching, document audits, and automated verification before publication. This is the baseline floor.',
  },
  {
    icon: MapPinned,
    tier: 'Tier 2 · Established (Planned)',
    title: 'Physical ground address verification',
    body: 'As an agent’s transaction volume grows, independent field verification confirms their physical office location.',
  },
  {
    icon: Building2,
    tier: 'Tier 3 · Corporate (Future plan)',
    title: 'Verified corporate agencies',
    body: 'Verified corporate agencies: CAC company incorporation, verified board directors, corporate bank accounts, and institutional bonding.',
  },
];

export default function VisionPage() {
  return (
    <>
      <JsonLd data={visionPageSchema} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Executive Corporate Briefing
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            A trust layer for every property market in Africa.
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Founder &amp; CEO: Ezeani Chukwuebuka</span>
            <span>&bull;</span>
            <span>Jurisdiction: Federal Republic of Nigeria</span>
            <span>&bull;</span>
            <span>Edition: Pre-Launch 2026</span>
          </p>

          <div className="mt-8 max-w-3xl rounded-2xl border border-border bg-muted p-6 text-sm leading-relaxed text-muted-foreground space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">Mission Statement</p>
            <p>
              <strong className="font-semibold text-foreground">The Problem:</strong> Property scams have become
              normalised in Nigerian real estate. Fake listing photos, forged documents, phantom caretakers, and
              untraceable bank accounts force seekers to search with one hand permanently guarding their wallet.
            </p>
            <p>
              <strong className="font-semibold text-foreground">The Purpose:</strong> Xavorian exists so the next
              generation searches with both hands free. We are building the foundational trust layer for Nigerian real
              estate, where verification is not an optional paid upgrade. It is the baseline every listing is held to.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 1. A Note from the Founder ───────────────────── */}
      <section className="container mx-auto mt-16 sm:mt-24">
        <Reveal className="max-w-3xl">
          <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-8">
            <Quote className="h-8 w-8 text-primary/40 mb-3" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              1. A Note from the Founder
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90 italic">
              <p>
                &ldquo;Ask anyone who has hunted for a flat in Lagos, a shop in Onitsha or land in Enugu. The fear is
                part of the process: fake photos, forged documents, agents who stop picking calls the moment your alert
                drops. Nigerians have learned to search for homes with one hand permanently guarding their wallet.
              </p>
              <p>
                Xavorian was conceived out of the conviction that trust must be built into the market’s plumbing. If a
                seller cannot prove who they are, where the money goes, and what the registry says about the title, their
                listing will not be published on Xavorian. We would rather reject ten listings than publish one we could
                not verify.&rdquo;
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs not-italic text-muted-foreground">
              <span className="font-semibold text-foreground">Ezeani Chukwuebuka (Damien)</span> &mdash; Founder &amp;
              Chief Executive Officer
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 2. Core Operating Principles ─────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            2. Core Operating Principles
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            The rules we refuse to compromise on.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-bold tracking-tight text-foreground">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 3. The Three Structural Pillars ──────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            3. The Three Structural Pillars
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Engineered for accountability at every step.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={idx * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mt-4 text-base font-bold tracking-tight">{pillar.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{pillar.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── 4. The Pan-African Vision & Verification Ladder ─ */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            4. The Verification Ladder
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            A progressive accreditation ladder.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Xavorian begins in Nigeria because the trust deficit is deepest here. The verification infrastructure is
            intended to scale across African urban centres. As the platform matures, we plan to deepen verification
            through a progressive accreditation ladder. Later tiers are plans, not promises of timing.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-4 lg:grid-cols-3">
          {ladder.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <li className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <step.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {step.tier}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-8 rounded-2xl border border-border bg-muted/60 p-5 max-w-2xl text-xs text-muted-foreground">
            This document describes goals and plans. Xavorian is a marketplace and screening tool, and verification is
            a process, not an assurance. See the Terms of Service.
          </div>
        </Reveal>
      </section>

      {/* ── More cities ──────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Launch Focus
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            More cities, in waitlist demand order.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Verification needs deep city-level registry indexing, and that work lands first where demand already
            exists. Cities open in waitlist order, so every signup is a vote for where Xavorian lands next.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span
                key={city.slug}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {city.name}
              </span>
            ))}
            <Link
              href="/waitlist"
              className="rounded-full border border-dashed border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-foreground"
            >
              + your city, if the waitlist speaks
            </Link>
          </div>
        </Reveal>
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

      {/* ── Manifesto + CTA ──────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-white sm:px-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow border-white/15 bg-white/10 text-white/70">
                <span className="eyebrow-dot" />
                The point of all of it
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                One day, nobody in Africa will need courage to buy a home.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
                We are not building another place to scroll through houses. We are building the layer underneath the
                market itself, so that &ldquo;is it real?&rdquo; becomes a question nobody has to ask. The waitlist
                decides where that layer lands first.
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
                  href="/about"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Why we exist
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
