import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ScanFace,
  Landmark,
  FileSearch,
  Cpu,
  ArrowRight,
  CircleCheck,
  ShieldCheck,
  UserX,
  CreditCard,
  FileWarning,
  CopyX,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { GATES, MARKETPLACE_URL } from '@/data/site';

export const metadata: Metadata = pageMetadata({
  title: 'How It Works — Four Gates Between You and a Scam',
  description:
    'Every Xavorian listing passes identity verification, bank-account matching, a document audit with AI assist and automated multi-layer verification before it goes live. Here is the full process, gate by gate.',
  path: '/how-it-works',
});

const icons = [ScanFace, Landmark, FileSearch, Cpu];

type GateDetail = { happens: string; why: string; fail: string };

const gateDetails: Record<string, GateDetail> = {
  identity: {
    happens:
      'The seller or agent uploads a government-issued ID (NIN card, international passport, driver’s licence, or voter’s card) and completes a real-time biometric liveness check. The legal name, the live face, and the document must belong to one real, reachable person.',
    why: 'Many property scams in Nigeria begin with an untraceable stranger using a burner SIM card. When verified identity is required to list, it is much harder for bad actors to disappear.',
    fail: 'The account cannot publish listings until identity is verified. A person who fails can request human review.',
  },
  bank: {
    happens:
      'The seller or agent links the bank account that will receive payments. The account name verified by NIBSS / CBN-licensed processors must match the verified ID.',
    why: 'A common property scam is asking seekers to pay “the oga”, “the family head”, or “the caretaker” into a third-party account. The Bank-Name-Match Rule blocks this for payments made through Xavorian.',
    fail: 'The listing stays offline until the account matches. Payments made through Xavorian go only to the account name matching the verified identity on the title or authorised mandate.',
  },
  document: {
    happens:
      'Certificates of Occupancy (C of O), Deeds of Assignment, Governor’s Consent, Survey Plans, and purchase receipts are scanned and audited. Our AI assist reads registration numbers, beacon coordinates, and survey stamps, and compares them with the claims on the listing.',
    why: 'Forged documents can look convincing on a mobile phone screen. Automated cross-checks help catch discrepancies, false beacon numbers, and unsupported claims that a quick glance can miss.',
    fail: 'The listing is paused until the discrepancy is cleared or removed. Accounts that repeatedly submit fraudulent documents may be banned and referred to the authorities.',
  },
  human: {
    happens:
      'Our automated verification system cross-checks identity, bank account details, and document records before publication, and flags anything inconsistent for human review.',
    why: 'Automated checks reduce blind spots and inconsistency. They are not perfect, which is why flagged cases go to a person.',
    fail: 'The listing stays offline until the issue is cleared.',
  },
};

const seekerPath = [
  'Browse property listings that have passed all four verification gates before publication',
  'Inspections: verified listings reduce risk, but you should still inspect in person with a witness',
  'Direct Account Match: payments made through Xavorian go only to a verified account matching the verified seller or agent',
  'No Buyer Fees: browsing and enquiring on verified listings is free for property seekers',
];

const agentPath = [
  'KYC Onboarding: complete mandatory government ID and live biometric liveness verification',
  'Bank Verification: link the corporate or individual bank account registered in the exact same legal name',
  'Document Submission: upload legitimate title documents, survey plans, and mandates for each property',
  'Verified Badge: pass the multi-layer audit to earn the verified badge and stand out in the marketplace',
];

const scamMitigations = [
  {
    icon: UserX,
    title: 'The Vanishing Agent',
    scam: 'An anonymous caller takes an inspection fee or deposit and shuts off the phone line.',
    solution:
      'Gate 1 (KYC) and Gate 2 (Bank-Name Match) make agents identifiable and traceable. Agents are verified against official identity references and verifiable bank records.',
  },
  {
    icon: CreditCard,
    title: 'The Account Switch',
    scam: 'The agent shows a genuine property but instructs payment into "my secretary\'s" or "the developer\'s personal" account.',
    solution:
      'The Bank-Name-Match Rule reduces this risk. Payments made through Paystack go only to verified accounts matching the title or legal mandate. Never pay a differently named account.',
  },
  {
    icon: FileWarning,
    title: 'The Beautiful Forgery',
    scam: 'A perfectly printed C of O or Deed of Assignment with fabricated registration numbers or false survey coordinates.',
    solution:
      'Gate 3 uses AI assist and registry checks to compare registration numbers, beacon bearings, and survey stamps with the listing claims. No automated check is perfect, so have a property lawyer search the registry before you pay.',
  },
  {
    icon: CopyX,
    title: 'The Cloned Listing',
    scam: 'A scammer copies photos and descriptions of another agent\'s genuine listing and posts them at a discounted price.',
    solution:
      'Gates 3 and 4 require verified title ownership documents before publication, which makes photo cloning much harder.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Xavorian verifies every listing',
  description:
    'Every listing on Xavorian passes four verification gates before it goes live: identity verification, bank-account matching, document scan with AI assist, and automated multi-layer verification.',
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
            Operational Architecture
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Four gates that help keep scams off the platform.
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Edition: Live Marketplace Blueprint</span>
            <span>&bull;</span>
            <span>Territory: Nigeria</span>
          </p>

          <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-muted p-6 text-sm leading-relaxed text-muted-foreground space-y-3">
            <p className="font-bold text-foreground uppercase tracking-wider text-xs">
              Platform Operational Manifesto
            </p>
            <p>
              Every Xavorian listing must pass identity verification, bank-account matching, a document audit with AI
              assistance, and an automated multi-layer check before it goes live.
            </p>
            <p>
              In a market where forged paper and untraceable strangers are common, Xavorian builds structured, automated
              accountability: payments made through the platform are routed only to verified account holders, and listings
              that fail verification are not published.
            </p>
            <p className="font-semibold text-foreground">
              Verification is not an optional premium feature. It is the baseline for every listing and user on the
              platform.
            </p>
            <p className="text-xs pt-1 border-t border-border/60">
              Verification is a process, not an assurance. It reduces risk but cannot remove it, so you must still do your
              own due diligence (see Terms of Service, Sections 4 and 8).
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={MARKETPLACE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Browse verified properties
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
            1. The Four Verification Gates
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
                            Why it matters
                          </p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                            {detail.why}
                          </p>
                        </div>
                        <div className="rounded-xl bg-muted p-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground">
                            Failure protocol
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
            Pass all four and the listing earns its verified badge and elevated placement.
            <span className="text-muted-foreground">
              {' '}
              Fail one, and the listing stays offline until the issue is cleared.
            </span>
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 rounded-2xl border border-border bg-muted/60 p-6 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              A Note on Verification &amp; Due Diligence
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Xavorian is a marketplace and screening tool. It is not an insurer or a guarantor of any user, listing,
              document, or transaction. Verification is a process, not an assurance. It reduces risk but cannot remove it,
              so you must still do your own independent physical inspection and lands registry searches. Under our Terms
              of Service, Xavorian is not liable for losses caused solely by the independent fraud or criminal conduct of
              other users or third parties that are not attributable to Xavorian&apos;s own fault.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 2. User Operational Paths ────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            2. User Operational Paths
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Clear standards for both sides of the transaction.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <h3 className="text-base font-bold tracking-tight">2.1 The Seeker &amp; Buyer Journey</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                Verified listings reduce risk, but you should still inspect in person with a witness.
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {seekerPath.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    {step}
                  </li>
                ))}
              </ul>
              <Link
                href={MARKETPLACE_URL}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:translate-y-0"
              >
                Browse verified properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <h3 className="text-base font-bold tracking-tight">2.2 The Agent &amp; Landlord Accreditation Journey</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                Pass the multi-layer audit to earn the verified badge and stand out in the marketplace.
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {agentPath.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    {step}
                  </li>
                ))}
              </ul>
              <Link
                href="/agents"
                className="link-underline mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
              >
                The agent playbook
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── 3. How Xavorian Addresses Common Scams ────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            3. Common Scams &amp; Mitigations
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            How Xavorian addresses the market&apos;s oldest tricks.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {scamMitigations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed">
                    <p className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">The Scam:</strong> {item.scam}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">How Xavorian helps:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
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
              <strong className="font-semibold text-foreground">Launch Coverage:</strong> Active nationwide across
              all 36 states and the Federal Capital Territory (FCT), Nigeria.
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
              Officially Live Nationwide
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              The next listing you fall for will have earned your attention.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              Xavorian is officially live across Nigeria. Explore verified homes, land and commercial properties
              with fraud-proof verification and escrow protection.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={MARKETPLACE_URL}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                Explore marketplace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <span className="text-[11px] text-white/50">
                100% verified listings. Multi-layer verification. Escrow-protected transactions.
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
