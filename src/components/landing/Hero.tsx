import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, ScanFace, Landmark, FileSearch, BadgeCheck } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';

const heroChecks = [
  { icon: ScanFace, label: 'Gate 01 · Identity & Live Selfie', status: 'Verified' },
  { icon: Landmark, label: 'Gate 02 · Bank Name Match', status: 'Matched' },
  { icon: FileSearch, label: 'Gate 03 · Property Title Papers', status: 'Audited' },
  { icon: BadgeCheck, label: 'Gate 04 · Automated Release Check', status: 'Passed' },
];

export const Hero = () => (
  <section className="relative isolate w-full overflow-hidden bg-[#0B0F17] text-white">
    {/* Architectural background photograph — sharp, restrained scrim for high contrast */}
    <Image
      src="/types-of-real-estate-overview-scaled.jpg"
      alt="Residential Nigerian real estate development — the caliber of verified property on Xavorian"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center opacity-35"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-[#0B0F17]/65"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/40"
    />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left column — 7 cols: Clear hierarchy, restrained copy, dual CTA */}
        <div className="lg:col-span-7">
          <Link
            href={MARKETPLACE_URL}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Live across Nigeria · Accepting buyers, renters &amp; agents
          </Link>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.06]">
            House hunting without{' '}
            <span className="text-violet-300">the horror story.</span>
          </h1>

          <p className="mt-4 text-lg font-semibold tracking-tight text-white/90 sm:text-xl">
            Buy and rent properties you can actually trust.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Every property passes four multi-layer verification checks before it goes live. No stolen
            photos, no phantom landlords — built to stop scam risk at the gate.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href={MARKETPLACE_URL}
              className="pressable group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#0B0F17] shadow-lg transition-all hover:bg-neutral-100 active:scale-95"
            >
              Browse the marketplace
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-it-works"
              className="pressable inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 active:scale-95"
            >
              See how we verify
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs font-medium text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" />
              Four-gate screening
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-violet-300" />
              Identity &amp; bank name matched
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-violet-300" />
              Free for buyers &amp; renters
            </span>
          </div>
        </div>

        {/* Right column — 5 cols: Structured verification status card anchored on the grid */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-300">
                  Pre-listing protocol
                </p>
                <p className="mt-1 text-base font-bold text-white">Four gates. Every listing.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Enforced
              </span>
            </div>

            <ul className="mt-4 divide-y divide-white/10">
              {heroChecks.map(({ icon: Icon, label, status }) => (
                <li key={label} className="flex items-center justify-between gap-3 py-3.5 first:pt-1 last:pb-1">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-violet-200">
                      <Icon className="size-4" strokeWidth={2} />
                    </span>
                    <span className="truncate text-xs font-medium text-white/90 sm:text-sm">{label}</span>
                  </div>
                  <span className="shrink-0 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                    {status}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 rounded-xl bg-black/30 px-3.5 py-2.5 text-xs leading-relaxed text-white/70">
              Any property that fails even one check is blocked automatically before it reaches buyers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
