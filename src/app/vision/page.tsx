import Link from 'next/link';
import type { Metadata } from 'next';
import { BadgeCheck, Building2, MapPinned, BrainCircuit, ArrowRight } from 'lucide-react';
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

const ladder = [
  {
    icon: BadgeCheck,
    tier: 'Now · Foundation',
    title: 'The four gates, for everyone',
    body: 'Identity checks, bank-account matching, document audits and human review for every agent and every listing. This is the floor, and the floor never lowers.',
  },
  {
    icon: MapPinned,
    tier: 'Next · Established',
    title: 'Address verification climbs the ladder',
    body: 'As an agent’s deal volume grows, so does their proof. Higher tiers add on-the-ground address verification, so buyers can see the office is a real place. Volume without proof stops being possible.',
  },
  {
    icon: Building2,
    tier: 'Then · Corporate',
    title: 'Verified agencies, not just agents',
    body: 'Large brokerages move under a company umbrella: CAC registration, verified directors, company bank accounts. The badge will say exactly who stands behind the agency.',
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
            The road ahead
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            A trust layer for every property market in Africa.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Xavorian starts in Nigeria because the wound is deepest here. But the playbook
            travels well: verified people, matched accounts, audited documents, human
            review. Here is where we are headed, and how we plan to get there.
          </p>
        </Reveal>
      </section>

      {/* ── The verification ladder ──────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            The verification ladder
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Verification that deepens as the stakes do.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            One flat yearly check would be easy. It would also be weak. Our roadmap raises
            the proof required as agents handle more deals and agencies handle more of the
            market.
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
      </section>

      {/* ── AI truthing ──────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Sharper every month
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                The document truthing never stops learning.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <BrainCircuit className="h-5 w-5 text-foreground" />
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Every C of O we audit, every deed we cross-check, every mismatch we flag
                  teaches the system what forgery looks like this month. Fake documents
                  evolve. So does the machine that reads them.
                </p>
                <p>
                  The AI does not replace the human reviewer. It hands them a tighter file
                  and sharper questions. Bad listings get caught earlier, good listings
                  move faster, and the gap between fake and real keeps widening.
                </p>
                <p className="font-medium text-foreground">
                  The bar stays where it is. The climb over it gets harder for anyone
                  carrying forged paper.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── More cities ──────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Where next
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            More cities, in the order you choose.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Verification takes trained humans, and trained humans get hired where demand
            already exists. Cities open in waitlist order, so every signup is a vote for
            where Xavorian lands next.
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
                We are not building another place to scroll through houses. We are building
                the layer underneath the market itself, so that “is it real?” becomes a
                question nobody has to ask. The waitlist decides where that layer lands
                first.
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
