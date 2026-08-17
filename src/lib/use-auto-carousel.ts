'use client';

import { useCallback, useEffect, useRef, useState, type RefCallback } from 'react';

/**
 * Auto-advance horizontal carousel (mobile only) that pauses while the user
 * touches/hovers/focuses it and resumes on release. Desktop layouts keep
 * their static grid — the hook self-deactivates at lg breakpoint.
 */
export function useAutoCarousel<T extends HTMLElement>(intervalMs = 3000) {
  const nodeRef = useRef<T | null>(null);
  const [paused, setPaused] = useState(false);

  const ref: RefCallback<T> = useCallback((node) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    if (window.matchMedia('(min-width: 1024px)').matches) return;

    const id = window.setInterval(() => {
      const el = nodeRef.current;
      if (!el || paused) return;
      const first = el.querySelector<HTMLElement>(':scope > *');
      const step = (first?.offsetWidth ?? 300) + 16;
      const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: nearEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, paused]);

  const pauseHandlers = {
    onTouchStart: () => setPaused(true),
    onTouchEnd: () => setPaused(false),
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
  };

  return { ref, pauseHandlers };
}
