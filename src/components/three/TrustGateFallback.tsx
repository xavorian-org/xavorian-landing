/**
 * Static illustration of the TrustGate story — shown when WebGL is
 * unavailable, on reduced-motion, or on small/low-power screens.
 * Server-component safe.
 */
const PURPLE = '#7C3AED';

export const TrustGateFallback = () => (
  <svg
    viewBox="0 0 560 320"
    role="img"
    aria-label="A document passing through three verification gates toward a house crowned with a shield"
    className="h-auto w-full"
  >
    {/* platform */}
    <rect x="8" y="252" width="544" height="20" rx="10" fill="#f5f3f0" />

    {/* gates */}
    {[150, 265, 380].map((cx, i) => (
      <g key={cx}>
        <rect x={cx - 7} y="240" width="14" height="14" rx="4" fill="#141414" />
        <ellipse
          cx={cx}
          cy="160"
          rx="42"
          ry="78"
          fill="none"
          stroke="#141414"
          strokeWidth="7"
          opacity={i === 1 ? 1 : 0.85}
        />
      </g>
    ))}

    {/* document card */}
    <g className="animate-float-soft">
      <rect x="46" y="118" width="52" height="66" rx="6" fill="#ffffff" stroke="#e3e1dd" strokeWidth="2" />
      <rect x="56" y="132" width="32" height="4" rx="2" fill="#c9c6c1" />
      <rect x="56" y="143" width="32" height="4" rx="2" fill="#c9c6c1" />
      <rect x="56" y="154" width="24" height="4" rx="2" fill="#c9c6c1" />
      <circle cx="84" cy="172" r="7" fill={PURPLE} />
    </g>

    {/* house */}
    <g>
      <rect x="452" y="150" width="76" height="62" rx="4" fill="#ffffff" stroke="#e3e1dd" strokeWidth="2" />
      <polygon points="446,150 534,150 490,112" fill="#141414" />
      <rect x="480" y="176" width="20" height="36" rx="2" fill={PURPLE} />
    </g>

    {/* shield */}
    <g className="animate-float-soft" style={{ animationDelay: '-2.5s' }}>
      <polygon points="490,64 508,73 508,92 490,108 472,92 472,73" fill={PURPLE} />
      <path d="M482 84 l6 6 l12 -12" stroke="#ffffff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* travel dots */}
    {[118, 212, 327, 432].map((cx) => (
      <circle key={cx} cx={cx} cy="266" r="3" fill="#c9c6c1" />
    ))}
  </svg>
);
