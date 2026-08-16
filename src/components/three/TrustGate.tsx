'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { FallingDocs } from './FallingDocs';

/**
 * TrustGate — decides what the hero shows.
 *  1. Mobile / reduced-motion / no-WebGL → the FallingDocs animation
 *     (documents rain down and stack, then the verified seal stamps).
 *  2. Eligible desktop → FallingDocs first; the Three.js scene
 *     lazy-loads on pointerhover or idle and crossfades in.
 */
export const TrustGate = () => {
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [load3D, setLoad3D] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tiny = window.innerWidth < 640;
    let webgl = false;
    try {
      const c = document.createElement('canvas');
      webgl = !!(
        window.WebGLRenderingContext &&
        (c.getContext('webgl') || c.getContext('experimental-webgl'))
      );
    } catch {
      webgl = false;
    }
    const ok = webgl && !reduced && !tiny;
    setAllowed(ok);

    if (!ok) return;
    const el = triggerRef.current;
    if (!el) return;

    const load = () => setLoad3D(true);
    el.addEventListener('pointerenter', load, { once: true, passive: true });
    el.addEventListener('focusin', load, { once: true, passive: true });

    const idleTimer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setLoad3D(true), { timeout: 2500 });
      } else {
        setLoad3D(true);
      }
    }, 2500);

    return () => {
      clearTimeout(idleTimer);
      el.removeEventListener('pointerenter', load);
      el.removeEventListener('focusin', load);
    };
  }, []);

  // SSR + pre-hydration: always the safe animated scene
  if (allowed === null) return <FallingDocs />;
  if (!allowed) return <FallingDocs />;

  return (
    <div ref={triggerRef} className="relative h-full w-full">
      {load3D ? (
        <div className="animate-fade-in h-full w-full">
          <TrustGateSceneLazy />
        </div>
      ) : (
        <FallingDocs />
      )}
    </div>
  );
};

// Loaded only after pointer/idle gate passes
const TrustGateSceneLazy = dynamic(() => import('./TrustGateScene').then((m) => m.default), {
  ssr: false,
  loading: () => <FallingDocs />,
});
