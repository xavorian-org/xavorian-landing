import { BellRing, MapPin, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { PropertyMatchForm } from '@/components/PropertyMatchForm';

const points = [
  {
    icon: MapPin,
    title: 'Only where you want to live',
    body: 'Pick a state and, if you like, a specific city or area. We never send listings from outside your search.',
  },
  {
    icon: BellRing,
    title: 'One best match per email',
    body: 'Tuesdays and Thursdays, receive the single listing that fits your type and budget best — never the same one twice.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified before it reaches your inbox',
    body: 'Sellers pass live ID, bank-name matching, and document checks before any listing can be published.',
  },
];

export const PropertyMatches = () => (
  <section id="property-matches" className="w-full scroll-mt-24 bg-background py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal variant="blur" className="lg:col-span-5">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Property matches by email
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Get verified properties matched to you.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you are looking for and where. When a verified listing fits, we send it to
            your inbox with clear pricing, photos, and location details.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <Icon className="size-4" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-tight text-foreground">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:rounded-3xl sm:p-8">
            <PropertyMatchForm source="landing_home" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
