import type { CSSProperties } from 'react';

/**
 * HomeAnimation — the Xavorian "documents → verified" motion story,
 * exported as an animated SVG and placed in the hero's visual slot.
 * Rendered full-bleed: no frame, no crop — the scene sits directly
 * on the page canvas and loops on its own, surrounded by soft
 * drifting sparkles in the brand purple.
 */

const SPARKLES = [
  { left: '10%', top: '58%', s: 6, d: 10.7, delay: 0.2, wide: false },
  { left: '16%', top: '78%', s: 4, d: 9.2, delay: 2.6, wide: false },
  { left: '22%', top: '46%', s: 5, d: 12.1, delay: 1.4, wide: true },
  { left: '30%', top: '72%', s: 7, d: 8.6, delay: 3.8, wide: false },
  { left: '38%', top: '38%', s: 4, d: 11.4, delay: 0.9, wide: true },
  { left: '46%', top: '64%', s: 5, d: 9.9, delay: 4.6, wide: false },
  { left: '54%', top: '30%', s: 6, d: 12.7, delay: 2.1, wide: true },
  { left: '62%', top: '70%', s: 4, d: 9.0, delay: 1.1, wide: false },
  { left: '70%', top: '42%', s: 7, d: 10.9, delay: 3.2, wide: true },
  { left: '78%', top: '76%', s: 5, d: 10.3, delay: 5.1, wide: false },
  { left: '85%', top: '52%', s: 6, d: 11.8, delay: 0.6, wide: false },
  { left: '92%', top: '70%', s: 4, d: 9.6, delay: 2.9, wide: true },
];

export const HomeAnimation = () => (
  <div className="hero-stage">
    {/* Drifting sparkles, twinkling as they rise */}
    {SPARKLES.map((sp, i) => (
      <span
        key={i}
        aria-hidden="true"
        className={`hero-stage__sparkle${sp.wide ? ' hidden sm:block' : ''}`}
        style={
          {
            left: sp.left,
            top: sp.top,
            '--s': `${sp.s}px`,
            '--d': `${sp.d}s`,
            '--delay': `${sp.delay}s`,
          } as CSSProperties
        }
      />
    ))}

    <img
      src="/xavorian-home-animation.svg"
      alt="Xavorian verification flow — property documents are gathered, checked and sealed as verified"
      width={1920}
      height={1080}
      loading="eager"
      decoding="async"
      className="relative z-[1] mx-auto h-auto w-full max-w-6xl"
    />
  </div>
);
