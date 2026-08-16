/**
 * FallingDocs — "documents fall, verification lands."
 *
 * Four property documents rain from above and stack over each other
 * (KYC ID → Title deed → Survey plan → Bank slip), then a green
 * seal stamps the pile: VERIFIED.
 *
 * 100% CSS+SVG. No JS, SSR-safe, zero layout shift, every screen.
 * Reduced-motion shows the final composed state.
 */
export const FallingDocs = () => (
  <div className="falling-docs" role="img" aria-label="Property documents stacking over each other before a green verified seal stamps them">
    <svg viewBox="0 0 560 420" className="h-auto w-full">
      {/* deck / platform */}
      <rect x="60" y="330" width="440" height="14" rx="7" fill="#f5f3f0" />
      <ellipse cx="280" cy="336" rx="190" ry="10" fill="#141414" opacity="0.05" />

      {/* card 1 — KYC ID */}
      <g className="fd-card fd-card--1">
        <g transform="rotate(-5 170 296)">
          <rect x="120" y="248" width="150" height="96" rx="10" fill="#ffffff" stroke="#e3e1dd" strokeWidth="1.5" />
          <rect x="134" y="264" width="34" height="42" rx="4" fill="#f5f3f0" />
          <circle cx="151" cy="279" r="7" fill="#c9c6c1" />
          <path d="M140 300 q11 -9 22 0 v6 h-22 z" fill="#c9c6c1" />
          <rect x="176" y="266" width="82" height="7" rx="3.5" fill="#141414" opacity="0.85" />
          <rect x="176" y="280" width="60" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="176" y="291" width="70" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="134" y="318" width="52" height="12" rx="6" fill="#141414" />
          <text x="160" y="327" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="700" fill="#ffffff" letterSpacing="1">KYC ID</text>
        </g>
      </g>

      {/* card 2 — Title deed */}
      <g className="fd-card fd-card--2">
        <g transform="rotate(3 280 288)">
          <rect x="220" y="240" width="120" height="100" rx="8" fill="#ffffff" stroke="#e3e1dd" strokeWidth="1.5" />
          <rect x="234" y="256" width="66" height="8" rx="4" fill="#141414" opacity="0.85" />
          <rect x="234" y="272" width="92" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="234" y="283" width="92" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="234" y="294" width="72" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="234" y="305" width="84" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="234" y="318" width="66" height="14" rx="7" fill="#f5f3f0" stroke="#e3e1dd" />
          <text x="267" y="328" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="700" fill="#141414" letterSpacing="0.8">TITLE DEED</text>
        </g>
      </g>

      {/* card 3 — Survey plan */}
      <g className="fd-card fd-card--3">
        <g transform="rotate(-2.5 400 293)">
          <rect x="350" y="244" width="105" height="96" rx="8" fill="#ffffff" stroke="#e3e1dd" strokeWidth="1.5" />
          <rect x="362" y="258" width="58" height="7" rx="3.5" fill="#141414" opacity="0.85" />
          <rect x="362" y="272" width="81" height="52" rx="4" fill="#f5f3f0" />
          <path d="M370 316 L378 288 L392 298 L404 280 L416 292 L424 284 L436 316 Z" fill="none" stroke="#141414" strokeWidth="1.4" opacity="0.7" />
          <circle cx="436" cy="286" r="2.4" fill="#141414" opacity="0.7" />
          <text x="402" y="336" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="700" fill="#141414" letterSpacing="0.8">SURVEY</text>
        </g>
      </g>

      {/* card 4 — Bank slip (lands on top) */}
      <g className="fd-card fd-card--4">
        <g transform="rotate(1.5 290 270)">
          <rect x="238" y="216" width="110" height="80" rx="8" fill="#ffffff" stroke="#e3e1dd" strokeWidth="1.5" />
          <rect x="250" y="230" width="52" height="7" rx="3.5" fill="#141414" opacity="0.85" />
          <rect x="250" y="244" width="86" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="250" y="255" width="70" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="250" y="270" width="44" height="12" rx="6" fill="#141414" />
          <text x="272" y="279" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700" fill="#ffffff" letterSpacing="0.8">PAID</text>
          <rect x="300" y="272" width="36" height="5" rx="2.5" fill="#c9c6c1" />
          <rect x="300" y="281" width="30" height="5" rx="2.5" fill="#c9c6c1" />
        </g>
      </g>

      {/* verified seal — stamps last */}
      <g className="fd-seal">
        <circle cx="392" cy="214" r="34" fill="#2e9e66" />
        <circle cx="392" cy="214" r="27" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="3.5 3.5" opacity="0.85" />
        <path d="M379 214 l9 9 l18 -18" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="392" y="236" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="800" fill="#ffffff" letterSpacing="1.6">VERIFIED</text>
      </g>

      {/* falling path hints — three faint arcs */}
      <g className="fd-arcs" stroke="#e3e1dd" strokeWidth="1.5" fill="none" strokeDasharray="2 6">
        <path d="M150 60 q60 120 50 185" />
        <path d="M285 40 q10 140 -10 175" />
        <path d="M410 70 q-40 110 -10 170" />
      </g>
    </svg>
  </div>
);
