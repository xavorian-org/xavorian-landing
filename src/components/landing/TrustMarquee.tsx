import { ShieldCheck, FileCheck2, UserCheck, Landmark, Globe2, BadgeCheck } from 'lucide-react';
import { Fragment } from 'react';

const items = [
  { icon: ShieldCheck, label: 'Checked agents and owners' },
  { icon: FileCheck2, label: 'Checked property papers' },
  { icon: UserCheck, label: 'Automated checks before anything goes live' },
  { icon: Landmark, label: 'Payments match the real ID name only' },
  { icon: BadgeCheck, label: 'Agents are checked before we launch' },
  { icon: Globe2, label: 'All of Nigeria, city by city' },
];

const shifted = [...items.slice(2), ...items.slice(0, 2)];
const reversed = [...items].reverse();

const MarqueeRow = ({ row, reverse = false, ariaHidden = false }: { row: typeof items; reverse?: boolean; ariaHidden?: boolean }) => (
  <div className="overflow-hidden" aria-hidden={ariaHidden || undefined}>
    <div
      className={`${reverse ? 'animate-marquee-rev' : 'animate-marquee'} flex w-max items-center gap-8 pr-8 sm:gap-12 sm:pr-12`}
    >
      {/* 4 copies keep every line seamless on wide screens while it loops */}
      {[0, 1, 2, 3].map((half) => (
        <Fragment key={half}>
          {row.map((item) => (
            <span
              key={`${half}-${item.label}`}
              aria-hidden={half !== 0}
              className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-medium text-muted-foreground"
            >
              <item.icon className="h-3.5 w-3.5 text-foreground/70" strokeWidth={1.75} />
              {item.label}
            </span>
          ))}
        </Fragment>
      ))}
    </div>
  </div>
);

/**
 * Quiet reassurance strip — three single-line marquees between hero and
 * CTAs, looping constantly: lines 1 + 3 drift right-to-left, line 2
 * drifts left-to-right. Duplicated content is aria-hidden.
 */
export const TrustMarquee = () => (
  <div className="relative overflow-hidden border-y border-border/70 py-3.5 sm:py-4" aria-label="What Xavorian verifies">
    <div className="marquee-mask flex flex-col gap-3 sm:gap-3.5">
      <MarqueeRow row={items} />
      <MarqueeRow row={shifted} reverse ariaHidden />
      <MarqueeRow row={reversed} ariaHidden />
    </div>
  </div>
);
