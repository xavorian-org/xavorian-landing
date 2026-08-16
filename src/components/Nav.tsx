'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ArrowRight, Route, Users, BookOpen, MessageCircleQuestion,
  BadgeCheck, Newspaper, Mail, LifeBuoy, ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { to: '/how-it-works', label: 'How it works', desc: 'The four checks', icon: Route },
  { to: '/about', label: 'About', desc: 'Why we exist', icon: Users },
  { to: '/guides', label: 'Guides', desc: 'Rent safely', icon: BookOpen },
  { to: '/faq', label: 'FAQ', desc: 'Plain answers', icon: MessageCircleQuestion },
];

const SECONDARY_LINKS = [
  { to: '/agents', label: 'For agents', icon: BadgeCheck },
  { to: '/blog', label: 'Blog', icon: Newspaper },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/support', label: 'Support', icon: LifeBuoy },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        open
          ? 'bg-background border-b border-border/80'
          : scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/80 shadow-sm'
          : 'bg-background/80 backdrop-blur-lg border-b border-transparent',
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6" aria-label="Main navigation">
        <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90" aria-label="Xavorian home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/xavorian-wordmark.svg" alt="Xavorian" className="h-7 w-auto sm:h-8" width="200" height="40" />
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              prefetch={true}
              className={cn(
                'text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground',
                pathname === l.to && 'text-foreground font-bold',
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/waitlist"
            prefetch={true}
            className="group hidden md:inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-neutral-900 hover:shadow-md active:scale-95"
          >
            Join the waitlist
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" data-icon="inline-end" />
          </Link>
          <button
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted active:scale-95 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Menu
              className={cn(
                'absolute size-[18px] transition-all duration-300 ease-out',
                open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100',
              )}
            />
            <X
              className={cn(
                'absolute size-[18px] transition-all duration-300 ease-out',
                open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0',
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Dimmed, blurred backdrop below the header */}
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-foreground/20 backdrop-blur-[3px] md:hidden animate-fade-in sm:top-20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Solid panel anchored under the header, full width inside the container */}
          <div className="container fixed inset-x-0 top-[4.75rem] z-50 mx-auto px-4 md:hidden sm:top-[5.75rem]">
            <div className="max-h-[calc(100dvh-6.75rem)] overflow-y-auto rounded-3xl border border-border bg-card p-4 shadow-2xl shadow-black/15 animate-fade-blur no-scrollbar sm:p-5">
              <nav aria-label="Mobile">
                {/* Primary destinations — large rows with icons */}
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((l, i) => (
                    <li key={l.to} className="animate-fade-up" style={{ animationDelay: `${70 + i * 60}ms` }}>
                      <Link
                        href={l.to}
                        prefetch={true}
                        className={cn(
                          'group flex items-center gap-3.5 rounded-2xl px-3 py-3 transition-colors hover:bg-muted active:bg-muted',
                          pathname === l.to && 'bg-muted',
                        )}
                      >
                        <span
                          className={cn(
                            'flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background',
                            pathname === l.to && 'bg-foreground text-background group-hover:bg-foreground',
                          )}
                        >
                          <l.icon className="size-[18px]" strokeWidth={1.75} />
                        </span>
                        <span className="flex flex-1 flex-col">
                          <span className="text-[15px] font-extrabold tracking-tight text-foreground">{l.label}</span>
                          <span className="text-[11px] font-medium text-muted-foreground">{l.desc}</span>
                        </span>
                        <ArrowRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Secondary destinations — compact two-column grid */}
                <div
                  className="mt-3 grid grid-cols-2 gap-1 border-t border-border/80 pt-3 animate-fade-up"
                  style={{ animationDelay: `${70 + NAV_LINKS.length * 60}ms` }}
                >
                  {SECONDARY_LINKS.map((l) => (
                    <Link
                      key={l.to}
                      href={l.to}
                      prefetch={true}
                      className={cn(
                        'group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted',
                        pathname === l.to && 'bg-muted text-foreground',
                      )}
                    >
                      <l.icon className="size-4 shrink-0" strokeWidth={1.75} />
                      {l.label}
                    </Link>
                  ))}
                </div>

                {/* CTA — always visible, never scrolled away */}
                <div
                  className="mt-3.5 border-t border-border/80 pt-3.5 animate-fade-up"
                  style={{ animationDelay: `${130 + NAV_LINKS.length * 60}ms` }}
                >
                  <Link
                    href="/waitlist"
                    prefetch={true}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-extrabold text-primary-foreground shadow-md transition-all hover:bg-neutral-900 active:scale-95"
                  >
                    Join the waitlist
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-muted-foreground">
                    <ShieldCheck className="size-3.5 text-foreground/60" strokeWidth={2} />
                    Free. One email at launch. Nothing else.
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
