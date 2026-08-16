import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HomeAnimation } from '@/components/landing/HomeAnimation';
import { TrustMarquee } from '@/components/landing/TrustMarquee';

const H1_LINE_1 = ['House', 'hunting', 'without', 'the', 'horror', 'story.'];
const H1_LINE_2 = ['Buy', 'properties', 'you', 'can', 'trust'];

export const Hero = () => (
  <section className="container mx-auto pt-8 sm:pt-14 lg:pt-20">
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center text-center lg:text-left">
      {/* Left Column: Eyebrow, Headline, Subtext & CTAs */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Eyebrow badge */}
        <span className="eyebrow animate-fade-up">
          <span className="eyebrow-dot" />
          Nigeria&apos;s trust layer for real estate
        </span>

        {/* Main Headline */}
        <h1
          className="mt-5 w-full text-balance font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          aria-label="House hunting without the horror story. Buy properties you can trust"
        >
          <span className="block">
            {H1_LINE_1.map((w, i) => (
              <span key={w} className="animate-word-rise" style={{ animationDelay: `${70 + i * 60}ms` }} aria-hidden="true">
                {w}
                {i < H1_LINE_1.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </span>
          <span className="block text-foreground/80 font-bold text-2xl sm:text-4xl lg:text-5xl mt-2">
            {H1_LINE_2.map((w, i) => (
              <span key={w} className="animate-word-rise" style={{ animationDelay: `${420 + i * 60}ms` }} aria-hidden="true">
                {w}
                {i < H1_LINE_2.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </span>
        </h1>

        {/* Supporting subtext paragraph */}
        <p className="mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg animate-fade-up" style={{ animationDelay: '680ms' }}>
          Every property undergoes four multi-layer verification checks before it goes live. No stolen photos, no phantom landlords, zero scam risk.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full animate-fade-up"
          style={{ animationDelay: '960ms' }}
        >
          <Link
            href="/waitlist"
            className="pressable group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-neutral-900 hover:shadow-xl active:scale-95"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" data-icon="inline-end" />
          </Link>
          <Link href="/how-it-works" className="pressable link-underline inline-flex h-12 items-center justify-center text-sm font-semibold text-foreground px-4">
            See how we verify
          </Link>
        </div>

        {/* Trust micro-indicator */}
        <p className="mt-3.5 flex items-center gap-1.5 text-xs text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: '1100ms' }}>
          <ShieldCheck className="size-4 text-foreground/60" />
          Free to join • One email at launch • Zero spam guarantee
        </p>
      </div>

      {/* Right Column: Staged House SVG Animation Visual */}
      <div className="w-full animate-scale-in flex justify-center lg:justify-end" style={{ animationDelay: '550ms' }}>
        <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl border border-border/40 bg-card/40 p-2 sm:p-4 shadow-xl shadow-black/5 backdrop-blur-sm">
          <HomeAnimation />
        </div>
      </div>
    </div>

    {/* Moving Trust Marquee (right-to-left) stretching full width under the hero section */}
    <div className="mt-12 sm:mt-16 w-full animate-fade-up" style={{ animationDelay: '820ms' }}>
      <TrustMarquee />
    </div>
  </section>
);
