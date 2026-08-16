import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HomeAnimation } from '@/components/landing/HomeAnimation';
import { TrustMarquee } from '@/components/landing/TrustMarquee';

const H1_LINE_1 = ['House', 'hunting', 'without', 'the', 'horror', 'story.'];
const H1_LINE_2 = ['Buy', 'properties', 'you', 'can', 'trust'];

export const Hero = () => (
  <section className="container mx-auto pt-6 sm:pt-12 lg:pt-16">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-center text-center lg:text-left">
      {/* Left Column: Eyebrow, Headline & CTAs */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Eyebrow badge */}
        <span className="eyebrow animate-fade-up">
          <span className="eyebrow-dot" />
          Nigeria&apos;s trust layer for real estate
        </span>

        {/* Main Headline */}
        <h1
          className="mt-5 w-full text-balance font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
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
      </div>

      {/* Right Column: Hero SVG Animation — scaled up slightly while maintaining side-by-side placement */}
      <div className="w-full animate-scale-in flex justify-center lg:justify-end" style={{ animationDelay: '550ms' }}>
        <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
          <HomeAnimation />
        </div>
      </div>
    </div>

    {/* Moving Trust Marquee (right-to-left) directly under the hero section */}
    <div className="mt-10 sm:mt-14 w-full animate-fade-up" style={{ animationDelay: '820ms' }}>
      <TrustMarquee />
    </div>
  </section>
);
