import { BellRing, MapPin, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { PropertyMatchForm } from '@/components/PropertyMatchForm';

const points = [
  {
    icon: MapPin,
    title: 'Only where you want to live',
    body: 'Pick a state and, if you like, a city or area. We do not send listings from anywhere else.',
  },
  {
    icon: BellRing,
    title: 'One property per email',
    body: 'Tuesdays and Thursdays, the single listing that fits your type and budget best. Never the same one twice.',
  },
  {
    icon: ShieldCheck,
    title: 'Checked before it reaches you',
    body: 'Sellers are identity-checked before they can list, and you can pay through escrow when you are ready.',
  },
];

export const PropertyMatches = () => (
  <section id="property-matches" className="container mx-auto mt-20 scroll-mt-28 sm:mt-28 lg:mt-32">
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
      <Reveal variant="blur" className="max-w-xl">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Property matches by email
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Get properties matched to you.
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Tell us what you are looking for and where. When a listing fits, we send it to your inbox with the price,
          photos and location, so you do not have to keep searching.
        </p>

        <ul className="mt-8 space-y-5">
          {points.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                <Icon className="size-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-foreground">{title}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <PropertyMatchForm source="landing_home" />
        </div>
      </Reveal>
    </div>
  </section>
);
