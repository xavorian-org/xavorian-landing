import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ScanFace,
  Landmark,
  FileSearch,
  Cpu,
  ArrowRight,
  CircleCheck,
  CircleX,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { GATES } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'How It Works — Four Gates Between You and a Scam',
  description:
    'Every Xavorian listing passes identity verification, bank-account matching, a document audit and autonomous AI verification before it goes live. Here is the full process, gate by gate.',
  path: '/how-it-works',
});

const icons = [ScanFace, Landmark, FileSearch, Cpu];

type GateDetail = { happens: string; why: string; fail: string };

const gateDetails: Record<string, GateDetail> = {
  identity: {
    happens:
      'The seller uploads a government-issued ID and completes a liveness check. The name, the face and the document must all belong to one real, reachable person.',
    why: 'Almost every property scam begins with an untraceable stranger. When identity is the price of admission, the vanishing agent has nowhere to vanish to.',
    fail: 'The account stays locked. No identity, no listing. No exceptions, for anyone.',
  },
  bank: {
    happens:
      'The seller links the bank account that will receive payment. The account name must match the verified ID, letter for letter.',
    why: 'The market’s oldest trick is asking you to pay “the oga” or “the secretary” into a differently named account. Name-matching closes that door for good.',
    fail: 'The listing stays offline. Money on Xavorian has exactly one honest destination.',
  },
  document: {
    happens:
      'C of O, deeds of assignment, survey plans and receipts are scanned and audited. Our AI truthing assist reads the documents, compares them with every claim on the listing and flags each mismatch.',
    why: 'Forged paper looks perfect on a phone screen. Cross-checks catch the lies a quick document glance will always miss.',
    fail: 'The listing is paused until the claim is corrected or removed. Accounts that keep submitting false documents are closed.',
  },
  human: {
    happens:
      'Our automated verification system cross-checks identity, bank account details, and document records systematically before publication.',
    why: 'Automated verification removes the blind spots and the guesswork. Every check is thorough, consistent, and objective.',
    fail: 'The listing stays offline. Unverified listings never make it onto Xavorian.',
  },
};

const seekerPath = [
  'Browse listings that have already passed all four gates',
  'Inspect homes without rehearsing your guard on the way there',
  'Pay only into an account whose name matches the verified identity',
];

const agentPath = [
  'Complete KYC: a government ID plus a liveness check',
  'Link the bank account held in your legal name',
  'Submit the title documents for each listing you want live',
  'Pass multi-layer automated verification to earn your badge',
];

const weCheck = [
  'A government ID matched to a live face',
  'The payout account name matched to the verified ID',
  'Title documents scanned and cross-checked against the listing',
  'Registry-level inconsistencies audited and flagged by automated checks',
  'Multi-layer verification audit on every single listing',
];

const neverAgain = [
  'Anonymous sellers hiding behind a phone number',
  'Urgent requests to pay an unrelated third-party account',
  'Perfect-looking documents nobody has ever audited',
  'Listings that disappear the morning after payment',
  'Being told to “just send the inspection fee first”',
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Xavorian verifies every listing',
  description:
    'Every listing on Xavorian passes four verification gates before it goes live: identity verification, bank-account matching, document scan with AI truthing, and automated multi-layer verification.',
  totalTime: 'P3D',
  step: GATES.map((gate, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: `${gate.step}: ${gate.name}`,
    text: gate.body,
    url: `${BASE_URL}/how-it-works#${gate.id}`,
  })),
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToSchema} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            How it works
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Four gates stand between a scam and your money.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            On Xavorian, a listing is not posted. It is earned. Every property passes the
            same four checks before it goes live, and our multi-layer verification system performs thorough screening before publication. Here is exactly what happens at each gate, and why.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/faq" className="link-underline text-sm font-semibold">
              Questions? Read the FAQ
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── The four gates, in full ──────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            The gates, gate by gate
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            What actually happens before a listing earns its page.
          </h2>
        </Reveal>

        <ol className="relative mt-10 space-y-6">
          <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-border sm:block" aria-hidden="true" />
          {GATES.map((gate, i) => {
            const Icon = icons[i];
            const detail = gateDetails[gate.id];
            return (
              <Reveal key={gate.id} delay={i * 90}>
                <li
                  id={gate.id}
                  className="relative scroll-mt-24 rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-foreground text-white">
                      <Icon className="h-5 w-5" />
                      <span className="mt-1 text-[9px] font-bold uppercase tracking-wider opacity-70">
                        {gate.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold tracking-tight">{gate.name}</h3>
                      <p className="text-xs font-semibold text-foreground">{gate.short}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {gate.body}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-xl bg-muted p-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground">
                            What happens
                          </p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                            {detail.happens}
                          </p>
                        </div>
                        <div className="rounded-xl bg-muted p-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground">
                            Why it matters to you
                          </p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                            {detail.why}
                          </p>
                        </div>
                        <div className="rounded-xl bg-muted p-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground">
                            If it fails
                          </p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                            {detail.fail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-sm font-medium text-foreground">
            Pass all four and the listing goes live, carrying its verified mark.
            <span className="text-muted-foreground">
              {' '}
              Fail one, and the property simply does not exist on Xavorian.
            </span>
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 rounded-2xl border border-border bg-muted/60 p-6 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">A Note on Verification & Your Due Diligence</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Our four verification gates screen accounts, check IDs, match bank account names, and scan documents to filter out scams before a listing goes live. However, Xavorian is a neutral technology platform — not a property owner, estate broker, bank, or insurer. Verification is a screening filter, not a legal guarantee or replacement for your own physical inspection and lands registry search. Under our Terms of Service, Xavorian is not liable for third-party criminal conduct, forgeries, or scams committed by independent users.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Two paths through the same gates ─────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Two paths, one standard
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            The same gates protect different people differently.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <h3 className="text-base font-bold tracking-tight">For property seekers</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                You do none of the checking. We did it before the listing reached your screen.
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {seekerPath.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    {step}
                  </li>
                ))}
              </ul>
              <Link
                href="/waitlist"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:translate-y-0"
              >
                Join as a seeker
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <h3 className="text-base font-bold tracking-tight">For agents and landlords</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                You walk the gates once per listing. Buyers see the badge; you skip the suspicion.
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {agentPath.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    {step}
                  </li>
                ))}
              </ul>
              <Link href="/agents" className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold">
                The agent playbook
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── What we check vs what you never see again ────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            The trade
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            We do the boring work. You lose the familiar dread.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                What we check
              </h3>
              <ul className="mt-5 space-y-3.5">
                {weCheck.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                What you will never see again
              </h3>
              <ul className="mt-5 space-y-3.5">
                {neverAgain.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12">
            <span className="eyebrow border-white/15 bg-white/10 text-white/70">
              <span className="eyebrow-dot" />
              Verification starts soon
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              The next listing you fall for will have earned your attention.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              Xavorian opens city by city, in waitlist order. Reserve your place and be first
              through the gates we just walked you through.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/waitlist"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <span className="text-[11px] text-white/50">Free. One email at launch. Nothing else.</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
