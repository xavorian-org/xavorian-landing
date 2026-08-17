import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BadgeCheck,
  Users,
  FileSearch,
  MapPinned,
  Building2,
  CircleCheck,
  ArrowRight,
} from 'lucide-react';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = pageMetadata({
  title: 'For Agents — Get Verified Before Launch Day',
  description:
    'Join Xavorian as a verified agent. Pass identity, bank and document checks before your city opens, and let buyers choose you with confidence.',
  path: '/agents',
});

const agentsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Xavorian for Agents',
  url: `${BASE_URL}/agents`,
  description:
    'How Nigerian real-estate agents and landlords get verified on Xavorian: the four gates, the verification ladder, and the documents required.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
};

const wins = [
  {
    icon: Users,
    title: 'Buyers scan for proof first',
    body: 'On Xavorian, unverified listings do not exist, so buyers browse with their guard down. The agents they shortlist are the ones wearing the badge.',
  },
  {
    icon: BadgeCheck,
    title: 'The badge answers first',
    body: 'It tells every buyer your identity, bank account and documents already survived a stricter check than they could ever run themselves. Conversations start at inspection, not at suspicion.',
  },
  {
    icon: FileSearch,
    title: 'Your name becomes the asset',
    body: 'Every verified listing builds your public track record. In a market where strangers rob entire reputations, yours compounds.',
  },
];

const ladder = [
  {
    icon: BadgeCheck,
    tier: 'Tier 1 · Every agent',
    title: 'The four gates',
    body: 'ID and liveness check, bank-account name match, document audit per listing, human review sign-off. No badge without all four.',
  },
  {
    icon: MapPinned,
    tier: 'Tier 2 · Established agents',
    title: 'Address verification',
    body: 'As your deal volume grows, we verify your operating address too. Buyers see that your office is a real, findable place.',
  },
  {
    icon: Building2,
    tier: 'Tier 3 · Agencies',
    title: 'Corporate verification',
    body: 'Agencies graduate to company-level checks: CAC registration, verified directors, company bank accounts.',
  },
];

const documents = [
  'A government-issued ID: NIN slip, driver’s licence, international passport or voter’s card',
  'A bank account held in your legal name, matching the ID',
  'Title documents for each listing: C of O, registered deed of assignment, survey plan',
  'At Tier 2: proof of your operating address',
  'At Tier 3: CAC certificate and company account details',
];

const faqs = [
  {
    q: 'How long does verification take?',
    a: 'Waitlist agents are reviewed before their city opens. Complete documents and a matching bank account make it fast. Missing paperwork is the only real delay.',
  },
  {
    q: 'What if one of my documents fails review?',
    a: 'We tell you exactly what failed and why, and you can fix it and resubmit once. We reject bad documents, not honest agents.',
  },
  {
    q: 'Can landlords list without an agency?',
    a: 'Yes. The gates are the same for landlords and agents. Pass them and the badge is yours. The badge does not care about your letterhead.',
  },
];

const faqsSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AgentsPage() {
  return (
    <>
      <JsonLd data={[agentsPageSchema, faqsSchema]} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto pt-14 sm:pt-20">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            For agents &amp; landlords
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Serious agents have nothing to hide. Finally, a place to prove it.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nigerian buyers have been burned so often they treat every agent as a suspect.
            That is unfair to you, and it costs you deals. Xavorian’s verified badge gives
            them a reason to pick up when you call.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Join the waitlist as an agent
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works" className="link-underline text-sm font-semibold">
              How verification works
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Why verified agents win ──────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Why verified agents win
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            The market already punishes strangers. Be the opposite.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wins.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <w.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-bold tracking-tight">{w.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── The verification ladder ──────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            The verification ladder
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            More volume, more proof. That is the deal.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Everyone starts at the same four gates. As your business grows, your badge grows
            with it, and buyers can see exactly how far you have climbed.
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

      {/* ── Documents you'll need ────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Come prepared
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                What to have ready when your review starts.
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Gather these once and every future listing review moves faster. Incomplete
                files are the number one reason verification drags.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ul className="space-y-4">
                {documents.map((doc) => (
                  <li key={doc} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    {doc}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-muted p-4 text-[13px] leading-relaxed text-muted-foreground">
                Your bank account name must match your verified ID exactly. That single rule
                is what lets buyers pay you without wondering where the money went.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Get reviewed before launch day ───────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-2xl border border-border bg-muted p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="max-w-xl">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Get reviewed before launch day.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Join the waitlist as an agent and your verification starts before your city
                opens. When launch day comes, you are not queuing for review. You are
                already listed, with the badge on.
              </p>
            </div>
            <Link
              href="/waitlist"
              className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:translate-y-0 sm:mt-0"
            >
              Start as an agent
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ lite ─────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Quick answers for agents
          </h2>
        </Reveal>
        <div className="mt-5 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 70}>
              <details className="group rounded-2xl border border-border bg-card px-5 py-4 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-xl font-light leading-none text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <Link href="/faq" className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
            All questions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="container mx-auto mt-20 sm:mt-28">
        <Reveal>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-white sm:px-12">
            <span className="eyebrow border-white/15 bg-white/10 text-white/70">
              <span className="eyebrow-dot" />
              Waitlist agents reviewed first
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Be the agent buyers stop being afraid of.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
              Free to join. Reviewed before launch. First in line when your city opens.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/waitlist"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
