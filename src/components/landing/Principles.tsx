import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FallingDocs } from '@/components/three/FallingDocs';

/**
 * Principles — "Three rules we never break."
 * Handhold-style alternating feature rows: text beside a visual card.
 * Cards stay in the white / gray / black palette, and each carries an
 * SVG trust animation that matches the words beside it.
 */

const MoneyMatch = () => (
  <div className="money-match" role="img" aria-label="An ID card and a bank card whose names are checked against each other, ending in a verified match">
    <svg viewBox="0 0 560 380" className="h-auto w-full">
      {/* soft base shadow */}
      <ellipse cx="280" cy="330" rx="190" ry="12" fill="#ffffff" opacity="0.06" />

      {/* ID card — top left */}
      <g className="mm-card mm-card--id">
        <rect x="70" y="88" width="200" height="118" rx="14" fill="#ffffff" />
        <text x="90" y="116" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#141414" letterSpacing="1.6">GOVERNMENT ID</text>
        <circle cx="112" cy="148" r="15" fill="#e8e8e8" />
        <path d="M99 168 q13 -13 26 0 v8 h-26 z" fill="#e8e8e8" />
        <rect x="142" y="136" width="106" height="9" rx="4.5" fill="#141414" />
        <rect x="142" y="152" width="82" height="7" rx="3.5" fill="#b9b9b9" />
        <rect x="90" y="182" width="74" height="14" rx="7" fill="#141414" />
        <text x="127" y="192" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill="#ffffff" letterSpacing="1.2">REAL NAME</text>
      </g>

      {/* bank card — bottom right */}
      <g className="mm-card mm-card--bank">
        <rect x="290" y="176" width="200" height="118" rx="14" fill="#ffffff" />
        <text x="310" y="204" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#141414" letterSpacing="1.6">BANK ACCOUNT</text>
        <rect x="310" y="218" width="34" height="24" rx="5" fill="#e8c547" />
        <rect x="354" y="224" width="106" height="9" rx="4.5" fill="#141414" />
        <rect x="354" y="240" width="82" height="7" rx="3.5" fill="#b9b9b9" />
        <rect x="310" y="266" width="100" height="14" rx="7" fill="#141414" />
        <text x="360" y="276" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill="#ffffff" letterSpacing="1.2">SAME NAME</text>
      </g>

      {/* connector — draws itself between the two names */}
      <path
        className="mm-line"
        d="M170 206 C 170 250, 250 240, 280 232 S 380 214, 398 206"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeDasharray="5 7"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* match seal — pops in once the line lands */}
      <g className="mm-seal">
        <circle cx="284" cy="146" r="30" fill="#2e9e66" />
        <circle cx="284" cy="146" r="24" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="3.5 3.5" opacity="0.9" />
        <path d="M272 146 l8 8 l17 -17" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="284" y="166" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="800" fill="#ffffff" letterSpacing="1.4">MATCH</text>
      </g>
    </svg>
  </div>
);

const rows = [
  {
    value: 'Nothing unchecked goes online',
    body: 'If they do not show real ID, match their bank details, and prove their documents are real, they cannot post. No exceptions or pending badges. They simply will not be there.',
    points: ['Real ID or nothing', 'Bank name must match', 'Papers proven first'],
    theme: 'white' as const,
    visual: <FallingDocs />,
    visualLabel: 'Documents stacking and being stamped verified',
  },
  {
    value: 'Automated multi-layer verification',
    body: 'Our system cross-checks property details, account names, and document records systematically before any listing reaches your screen.',
    points: ['Records cross-checked', 'Consistent algorithmic screening', 'Every document audited'],
    theme: 'gray' as const,
    visual: (
      <img
        src="/xavorian-list-animation.svg"
        alt="A checklist of property documents — IDs, deeds and bank matches — being verified one by one"
        width={934}
        height={744}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    ),
    visualLabel: 'Checklist being verified one by one',
  },
  {
    value: 'Money only goes to real people',
    body: 'Payments only go to bank accounts that match their checked ID. When you pay, you know exactly who is getting the money.',
    points: ['Payments match the real ID name', 'You always know who gets paid', 'Never to a stranger'],
    theme: 'black' as const,
    visual: <MoneyMatch />,
    visualLabel: 'ID and bank names being matched',
  },
];

const themeClass = {
  white: 'border-border bg-card shadow-sm',
  gray: 'border-border/70 bg-muted',
  black: 'border-foreground bg-foreground',
};

export const Principles = () => (
  <section className="container mx-auto mt-20 sm:mt-28 lg:mt-32">
    <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        How we operate
      </span>
      <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        Three rules we never break.
      </h2>
    </Reveal>

    <div className="mt-14 flex flex-col gap-16 sm:mt-20 sm:gap-24">
      {rows.map((row, i) => (
        <div key={row.value} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* words by the side */}
          <Reveal className={i === 1 ? 'lg:order-2' : ''}>
            <span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Rule {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 max-w-md text-balance font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {row.value}
            </h3>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{row.body}</p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {row.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-xs font-semibold text-foreground sm:text-sm">
                  <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-background">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* the card with its trust animation */}
          <Reveal variant="scale" delay={120} className={i === 1 ? 'lg:order-1' : ''}>
            <div
              className={`relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 sm:p-10 ${themeClass[row.theme]}`}
              aria-label={row.visualLabel}
            >
              {row.visual}
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);
