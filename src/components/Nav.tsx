'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MARKETPLACE_URL } from '@/data/site';

const NAV_LINKS = [
  { to: '/how-it-works', label: 'How it works', desc: 'Four pre-publication verification gates' },
  { to: '/agents', label: 'For agents', desc: 'Accreditation tiers & verified badges' },
  { to: '/guides', label: 'Guides', desc: 'C of O checks & safe renting playbooks' },
  { to: '/blog', label: 'Blog', desc: '1,049+ Nigerian real estate briefs' },
  { to: '/faq', label: 'FAQ', desc: 'Direct answers on verification & safety' },
];

const SECONDARY_LINKS = [
  { to: '/about', label: 'About us' },
  { to: '/vision', label: 'Our vision' },
  { to: '/contact', label: 'Contact' },
  { to: '/support', label: 'Support' },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        'sticky top-0 z-50 w-full bg-[#FCFBF7]/95 backdrop-blur-sm transition-colors duration-200',
        open || scrolled ? 'border-b border-[#E4E1D6]' : 'border-b border-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:h-[76px] sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-85"
          aria-label="Xavorian home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/xavorian-wordmark.svg"
            alt="Xavorian"
            className="h-[22px] w-auto sm:h-6"
            width="154"
            height="28"
          />
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to || (l.to !== '/' && pathname?.startsWith(`${l.to}/`));
            return (
              <Link
                key={l.to}
                href={l.to}
                prefetch={true}
                className={cn(
                  'py-1 text-[13.5px] transition-colors',
                  active
                    ? 'font-semibold text-[#141414] underline decoration-[#9C3495] decoration-[1.5px] underline-offset-[6px]'
                    : 'font-medium text-[#52525B] hover:text-[#141414]',
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-4">
          <Link
            href={`${MARKETPLACE_URL}/upload`}
            className="hidden items-center text-[13.5px] font-medium text-[#52525B] transition-colors hover:text-[#7B2276] xl:inline-flex"
          >
            List a property
          </Link>
          <Link
            href={MARKETPLACE_URL}
            prefetch={true}
            className="pressable hidden h-10 items-center gap-1.5 rounded-lg bg-[#141414] px-5 text-[13px] font-semibold text-[#FCFBF7] transition-colors hover:bg-[#7B2276] md:inline-flex"
          >
            Explore Marketplace
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="relative inline-flex size-10 items-center justify-center rounded-lg border border-[#DCD8CA] bg-[#FFFFFF] text-[#141414] transition-colors hover:bg-[#F3F1E9] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Menu
              className={cn(
                'absolute size-[18px] transition-all duration-200',
                open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100',
              )}
            />
            <X
              className={cn(
                'absolute size-[18px] transition-all duration-200',
                open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0',
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-[#141414]/20 animate-fade-in sm:top-[76px] lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-0 top-16 z-50 border-b border-[#DCD8CA] bg-[#FCFBF7] shadow-elevated animate-fade-blur sm:top-[76px] lg:hidden">
            <div className="mx-auto max-h-[calc(100dvh-4rem)] max-w-[1280px] overflow-y-auto px-5 py-6 sm:px-8">
              <nav aria-label="Mobile navigation">
                <ul className="divide-y divide-[#EBE8DE] border-y border-[#E4E1D6]">
                  {NAV_LINKS.map((l) => {
                    const active = pathname === l.to || (l.to !== '/' && pathname?.startsWith(`${l.to}/`));
                    return (
                      <li key={l.to}>
                        <Link
                          href={l.to}
                          prefetch={true}
                          className="group flex items-center justify-between py-3.5 transition-colors"
                        >
                          <div>
                            <p
                              className={cn(
                                'text-[15px] tracking-tight',
                                active ? 'font-semibold text-[#7B2276]' : 'font-semibold text-[#141414]',
                              )}
                            >
                              {l.label}
                            </p>
                            <p className="mt-0.5 text-[12px] text-[#75736B]">{l.desc}</p>
                          </div>
                          <ArrowUpRight className="size-4 text-[#75736B] transition-colors group-hover:text-[#7B2276]" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {SECONDARY_LINKS.map((l) => (
                    <Link
                      key={l.to}
                      href={l.to}
                      prefetch={true}
                      className="py-1 text-[13px] font-medium text-[#52525B] transition-colors hover:text-[#141414]"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link
                    href={`${MARKETPLACE_URL}/upload`}
                    className="py-1 text-[13px] font-medium text-[#7B2276] transition-colors hover:text-[#141414]"
                  >
                    List a property
                  </Link>
                </div>

                <div className="mt-6 border-t border-[#E4E1D6] pt-5">
                  <Link
                    href={MARKETPLACE_URL}
                    prefetch={true}
                    className="pressable flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#141414] text-[13.5px] font-semibold text-[#FCFBF7] transition-colors hover:bg-[#7B2276]"
                  >
                    Explore Marketplace
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <p className="mt-3 text-center text-[11.5px] tabular-nums text-[#75736B]">
                    4-Gate verified listings · Free for buyers · RC-9912416
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
