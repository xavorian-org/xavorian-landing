'use client';

import { useEffect, useState } from 'react';

type TocSection = { id: string; label: string };

export function LegalToc({ sections }: { sections: TocSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Table of contents"
      className="hidden overflow-hidden rounded-2xl border border-border bg-muted lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
    >
      <p className="px-6 pt-6 text-xs font-bold uppercase tracking-wider text-foreground">Table of Contents</p>
      <ul className="mt-4 space-y-1 pb-6 text-sm">
        {sections.map((sec) => {
          const isActive = sec.id === activeId;
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`block border-l-2 py-1.5 pl-5 pr-4 transition-colors ${
                  isActive
                    ? 'border-foreground font-semibold text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {sec.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}