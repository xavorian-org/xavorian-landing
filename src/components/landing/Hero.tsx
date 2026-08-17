import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { TrustMarquee } from '@/components/landing/TrustMarquee';

const H1_LINE_1 = ['House', 'hunting', 'without', 'the', 'horror', 'story.'];
const H1_LINE_2 = ['Buy', 'properties', 'you', 'can', 'trust'];

export const Hero = () => (
  <>
    <section className="relative isolate flex min-h-[85svh] w-full overflow-hidden bg-foreground">
      {/* Full-bleed estate photo */}
      <Image
        src="/xavorian-estate-street.jpg"
        alt="Duplex homes lining a quiet street in a well-kept Nigerian residential estate — the kind of verified property Xavorian buyers move into with confidence"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Scrims: keep text legible across any photo crop */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex items-center pb-20 pt-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm animate-fade-up">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Nigeria&apos;s trust layer for real estate
          </span>

          <h1
            className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]"
            aria-label="House hunting without the horror story. Buy properties you can trust"
          >
            <span className="block">
              {H1_LINE_1.map((w, i) => (
                <span key={w} className="animate-word-rise" style={{ animationDelay: `${70 + i * 60}ms` }} aria-hidden="true">
                  {w}
                  {i < H1_LINE_1.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
            <span className="mt-3 block text-2xl font-bold text-white/85 sm:text-3xl lg:text-4xl">
              {H1_LINE_2.map((w, i) => (
                <span key={w} className="animate-word-rise" style={{ animationDelay: `${420 + i * 60}ms` }} aria-hidden="true">
                  {w}
                  {i < H1_LINE_2.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 sm:text-lg animate-fade-up"
            style={{ animationDelay: '680ms' }}
          >
            Every property undergoes four multi-layer verification checks before it goes live.
            No stolen photos, no phantom landlords — designed to cut scam risk off at the gate.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 animate-fade-up"
            style={{ animationDelay: '960ms' }}
          >
            <Link
              href="/waitlist"
              className="pressable group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-foreground shadow-xl shadow-black/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" data-icon="inline-end" />
            </Link>
            <Link
              href="/how-it-works"
              className="pressable inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15 active:scale-95"
            >
              See how we verify
            </Link>
          </div>

          <p
            className="mt-4 flex items-center gap-1.5 text-xs font-medium text-white/60 animate-fade-up"
            style={{ animationDelay: '1100ms' }}
          >
            <ShieldCheck className="size-4" />
            Free to join • One email at launch • No spam, ever
          </p>
        </div>
      </div>

      {/* Live verification chip — bottom right */}
      <div
        className="absolute bottom-6 right-5 z-10 hidden sm:block animate-fade-up"
        style={{ animationDelay: '1250ms' }}
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          <p className="text-xs font-semibold text-white/90">Four gates. Every listing.</p>
        </div>
      </div>
    </section>

    <TrustMarquee />
  </>
);
