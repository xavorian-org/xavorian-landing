'use client';

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: 'div' | 'section' | 'span';
  /** entrance style: up (default) | blur | in | scale */
  variant?: 'up' | 'blur' | 'in' | 'scale';
}

const VARIANT_CLASS: Record<NonNullable<RevealProps['variant']>, string> = {
  up: 'animate-fade-up',
  blur: 'animate-fade-blur',
  in: 'animate-fade-in',
  scale: 'animate-scale-in',
};

/** IntersectionObserver-driven entrance. Respects reduced motion (CSS side). */
export const Reveal = ({ children, className, delay = 0, as: Tag = 'div', variant = 'up' }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = {
    animationDelay: visible ? `${delay}ms` : undefined,
    // hold pre-entrance state without layout shift (transform/opacity only)
    opacity: visible ? undefined : 0,
  };

  return (
    // @ts-expect-error polymorphic tag + ref is safe here
    <Tag ref={ref} style={style} className={cn(visible && VARIANT_CLASS[variant], className)}>
      {children}
    </Tag>
  );
};
