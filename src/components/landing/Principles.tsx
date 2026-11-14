import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FallingDocs } from '@/components/three/FallingDocs';

/**
 * Principles — "Three rules we never break."
 * Unified architectural layout: all three visual frames share identical surface elevation,
 * border radius, and grid proportions across alternating left/right rows.
 */
const MoneyMatch = () => (
  <div
    className="money-match"
    role="img"
    aria-label="An ID card and a bank card whose names are checked against each other, ending in a verified match"
  >
    <svg viewBox="0 0 560 380" className="h-auto w-full">
      {/* Subtle grounded shadow */}
      <ellipse cx="280" cy="332" rx="190" ry="12" fill="#141414" opacity="0.06" />

      {/* ID card — top left */}
      <g className="mm-card mm-card--id">
        <rect x="70" y="88" width="200" height="118" rx="14" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1.5" />
        <text
          x="90"
          y="116"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#141414"
          letterSpacing="1.6"
        >
          GOVERNMENT ID
        </text>
        <circle cx="112" cy="148" r="15" fill="#f4f4f5" />
        <path d="M99 168 q13 -13 26 0 v8 h-26 z" fill="#e4e4e7" />
        <rect x="142" y="136" width="106" height="9" rx="4.5" fill="#141414" />
        <rect x="142" y="152" width="82" height="7" rx="3.5" fill="#a1a1aa" />
        <rect x="90" y="182" width="74" height="14" rx="7" fill="#141414" />
        <text
          x="127"
          y="192"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="8.5"
          fontWeight="700"
          fill="#ffffff"
          letterSpacing="1.2"
        >
          REAL NAME
        </text>
      </g>

      {/* Bank card — bottom right */}
      <g className="mm-card mm-card--bank">
        <rect x="290" y="176" width="200" height="118" rx="14" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1.5" />
        <text
          x="310"
          y="204"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#141414"
          letterSpacing="1.6"
        >
          BANK ACCOUNT
        </text>
        <rect x="310" y="218" width="34" height="24" rx="5" fill="#e8c547" />
        <rect x="354" y="224" width="106" height="9" rx="4.5" fill="#141414" />
        <rect x="354" y="240" width="82" height="7" rx="3.5" fill="#a1a1aa" />
        <rect x="310" y="266" width="100" height="14" rx="7" fill="#141414" />
        <text
          x="360"
          y="276"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="8.5"
          fontWeight="700"
          fill="#ffffff"
          letterSpacing="1.2"
        >
          SAME NAME
        </text>
      </g>

      {/* Violet connector line */}
      <path
        className="mm-line"
        d="M170 206 C 170 250, 250 240, 280 232 S 380 214, 398 206"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="2.5"
        strokeDasharray="5 7"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Match seal */}
      <g className="mm-seal">
        <circle cx="284" cy="146" r="30" fill="#16a34a" />
        <circle
          cx="284"
          cy="146"
          r="24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="3.5 3.5"
          opacity="0.9"
        />
        <path
          d="M272 146 l8 8 l17 -17"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="284"
          y="166"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="6.5"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="1.4"
        >
          MATCH
        </text>
      </g>
    </svg>
  </div>
);

const rows = [
  {
    value: 'Nothing unchecked goes online',
    body: 'If a seller will not show real ID, match their bank details, and verify their documents, they cannot post. No pending badges or exceptions.',
    points: ['Real ID or nothing', 'Bank name must match', 'Papers audited upfront'],
    visual: <FallingDocs />,
    visualLabel: 'Documents stacking and being stamped verified',
  },
  {
    value: 'Automated multi-layer verification',
    body: 'Our system cross-checks property details, account names, and document records systematically before any listing reaches your screen.',
    points: ['Records cross-checked', 'Consistent algorithmic screening', 'Every document audited'],
    visual: (
      // eslint-disable-next-line @next/next/no-img-element
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
    value: 'Payments only go to verified people',
    body: 'Receiving bank accounts must match the verified identity on file. You always know who stands behind the listing.',
    points: ['Payments match the verified ID name', 'Clear accountability trail', 'Never an anonymous stranger'],
    visual: <MoneyMatch />,
    visualLabel: 'ID and bank names being matched',
  },
];

export const Principles = () => (
  <section className="w-full bg-background py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          How we operate
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Three rules we never break.
        </h2>
      </Reveal>

      <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-20">
        {rows.map((row, i) => (
          <div key={row.value} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Copy column — alternates smoothly on desktop */}
            <Reveal className={`lg:col-span-5 ${i === 1 ? 'lg:order-2' : ''}`}>
              <span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
                Rule {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {row.value}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {row.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {row.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Unified visual stage — 7 cols, identical surface language for every rule */}
            <Reveal variant="scale" delay={80} className={`lg:col-span-7 ${i === 1 ? 'lg:order-1' : ''}`}>
              <div
                className="overflow-hidden rounded-2xl border border-border/80 bg-muted/35 p-6 shadow-sm sm:rounded-3xl sm:p-8"
                aria-label={row.visualLabel}
              >
                {row.visual}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);
