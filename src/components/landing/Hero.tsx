import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HomeAnimation } from '@/components/landing/HomeAnimation';
import { TrustMarquee } from '@/components/landing/TrustMarquee';

const H1_LINE_1 = ['House', 'hunting', 'without', 'the', 'horror', 'story.'];
const H1_LINE_2 = ['Buy', 'properties', 'you', 'can', 'trust'];

export const Hero = () => (
  <section className="container mx-auto pt-8 sm:pt-14 lg:pt-20 text-center">
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      {/* Eyebrow badge */}
      <span className="eyebrow animate-fade-up">
        <span className="eyebrow-dot" />
        Nigeria&apos;s trust layer for real estate
      </span>

      {/* Main Headline */}
      <h1
        className="mt-6 w-full text-balance font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.08]"
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
        <span className="block text-foreground/80 font-bold text-3xl sm:text-5xl lg:text-6xl mt-1.5 sm:mt-2">
          {H1_LINE_2.map((w, i) => (
            <span key={w} className="animate-word-rise" style={{ animationDelay: `${420 + i * 60}ms` }} aria-hidden="true">
              {w}
              {i < H1_LINE_2.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </span>
      </h1>
    </div>

    {/* Centered Hero SVG Animation — takes the place of the old copy block,
        staged like a hero visual: ambient brand glow + drifting sparkles */}
    <div className="mt-6 sm:mt-10 w-full animate-scale-in" style={{ animationDelay: '550ms' }}>
      <HomeAnimation />
    </div>

    {/* Moving Trust Marquee (right-to-left) directly under the visual */}
    <div className="w-full animate-fade-up" style={{ animationDelay: '820ms' }}>
      <TrustMarquee />
    </div>

    {/* CTA Buttons — sit after the marquee */}
    <div
      className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row w-full animate-fade-up"
      style={{ animationDelay: '960ms' }}
    >
      <Link
        href="/waitlist"
        className="pressable group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-neutral-900 hover:shadow-xl active:scale-95 sm:w-auto"
      >
        Join the waitlist
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" data-icon="inline-end" />
      </Link>
      <Link href="/how-it-works" className="pressable link-underline inline-flex h-12 items-center justify-center text-sm font-semibold text-foreground px-4">
        See how we verify
      </Link>
    </div>
  </section>
);
