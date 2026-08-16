import Link from 'next/link';
import type { Metadata } from 'next';
import { ScanFace, FileSearch, Cpu, ArrowRight, ArrowUpRight } from 'lucide-react';
import { JsonLd, pageMetadata, organizationSchema, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = pageMetadata({
  title: 'About Xavorian — Ending the Nigerian Property Scam Era',
  description:
    'Property scams are normal in Nigeria. We think that is unacceptable. Xavorian is building a marketplace where verification is the ground every listing stands on.',
  path: '/about',
});

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Xavorian',
  url: `${BASE_URL}/about`,
  description:
    'Why Xavorian exists, what it does, and the principles behind Nigeria’s trust layer for real estate.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#organization` },
};

const pillars = [
  {
    icon: ScanFace,
    title: 'We verify the person',
    body: 'Every agent and landlord passes ID and liveness checks, then links a bank account in the same legal name. On Xavorian, people are accountable by default.',
  },
  {
    icon: FileSearch,
    title: 'We audit the paperwork',
    body: 'Title documents are scanned and cross-checked against the listing’s claims. Beautiful forgery, meet boring algorithmic scrutiny.',
  },
  {
    icon: Cpu,
    title: 'Automated verification engine',
    body: 'Our multi-layer system audits, cross-checks, and screens listings systematically. Verification is thorough, consistent, and objective.',
  },
];

const values = [
  {
    name: 'Proof before promises',
    body: 'If we cannot verify it, we do not display it. Confidence is earned by checks, not adjectives.',
  },
  {
    name: 'Names on everything',
    body: 'On listings, on accounts, on reviews. Anonymous is where scams breed, so anonymous is not welcome here.',
  },
  {
    name: 'Boring, on purpose',
    body: 'Verification should feel slow and strict. The day it feels casual, we have failed you.',
  },
  {
    name: 'Built for Nigeria first',
    body: 'C of O checks, inspection-fee culture, real agent dynamics. This is designed for how property actually works here, not copied from abroad.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[organizationSchema, aboutPageSchema]} />

      {/* ── Mission hero ─────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            About Xavorian
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Property scams are normal in Nigeria. We think that’s unacceptable.
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
            <p>
              Ask anyone who has hunted for a flat in Lagos, a shop in Onitsha or land in Enugu.
              The fear is part of the process: fake photos, forged documents, agents who stop
              picking calls the moment your alert drops. Nigerians have learned to search for
              homes with one hand permanently guarding their wallet.
            </p>
            <p>
              Xavorian exists so the next generation searches with both hands free. We are
              building a marketplace where verification is not an upgrade you pay for. It is
              the ground every listing stands on.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Founder note ─────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                A note from the founder
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Why this company exists.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="space-y-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Xavorian did not start in a boardroom. It started with the stories every
                  Nigerian seems to carry. A friend who paid an inspection fee for a house
                  that was never his to inspect. A cousin who bought land that two other
                  families also “owned”. Every story ends with the same question: “Why
                  didn’t you verify first?”
                </p>
                <p>
                  As if the victim built the system. As if verifying was ever supposed to be
                  their job. It is not. It is ours now. A marketplace worth the name should
                  refuse to host a liar, not host everyone and wish you luck.
                </p>
                <p>
                  Today we are a small team with a strict gate and a long road. We will make
                  mistakes, publish what we learn, and fix things in the open. What we will
                  never do is let an unverified stranger whisper to your rent money.
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-bold tracking-tight">Ezeani Chukwuebuka “Damien”</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">Founder, Xavorian</p>
                <a
                  href="https://x.com/Eze_Damien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-2 inline-flex items-center gap-1 text-sm font-semibold"
                >
                  @Eze_Damien on X
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── What we actually do ──────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            What Xavorian does
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three jobs, done before you ever open a listing.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <p.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Link
            href="/how-it-works"
            className="link-underline mt-8 inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            See the full verification process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            What we refuse to compromise
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            The rules we hold ourselves to.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.name} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
                <h3 className="text-base font-bold tracking-tight">{v.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12">
            <span className="eyebrow border-white/15 bg-white/10 text-white/70">
              <span className="eyebrow-dot" />
              Join us early
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              A verified market is not a dream. It is a decision.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              We made ours. When your city opens, you can make yours with one email.
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
                href="/vision"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See where we are going
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
