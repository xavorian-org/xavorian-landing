import { Suspense } from 'react';
import type { Metadata } from 'next';
import { WaitlistForm } from '@/components/WaitlistForm';
import { JsonLd, pageMetadata, BASE_URL } from '@/lib/seo';
import { ShieldCheck, MapPin, BellRing } from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: 'Join the Waitlist — Verified Nigerian Real Estate',
  description:
    'Reserve your place on Xavorian. Verified agents, document-audited listings and automated multi-layer verification — opening city by city across Nigeria.',
  path: '/waitlist',
});

const perks = [
  { icon: BellRing, title: 'First to know', body: 'One email when your city opens. You will never wonder if you missed it.' },
  { icon: MapPin, title: 'Your city moves up', body: 'Cities open in waitlist order. Every signup pushes yours forward.' },
  { icon: ShieldCheck, title: 'Early agents get verified first', body: 'Agents who join now go through the verification gates before launch day.' },
];

export default function WaitlistPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Join the Xavorian Waitlist',
          url: `${BASE_URL}/waitlist`,
          description: 'Reserve early access to verified Nigerian real estate.',
        }}
      />
      <div className="container mx-auto py-12 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Early access
            </span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Your seat at a verified property market.
            </h1>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Tell us who you are and where you are. We will do the verifying from here.
            </p>

            <ul className="mt-10 space-y-5">
              {perks.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <p.icon className="h-5 w-5 text-[hsl(var(--accent))]" />
                  </span>
                  <div>
                    <p className="text-sm font-bold tracking-tight">{p.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </>
  );
}
