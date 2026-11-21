import Link from 'next/link';
import { Instagram, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SiTiktok, SiX } from 'react-icons/si';
import { BRAND, MARKETPLACE_URL } from '@/data/site';

const CURRENT_YEAR = new Date().getFullYear();

const CORRIDOR_LINKS = [
  { label: 'Browse all properties', to: MARKETPLACE_URL },
  { label: 'Lagos', to: `${MARKETPLACE_URL}/properties?search=Lagos` },
  { label: 'Abuja FCT', to: `${MARKETPLACE_URL}/properties?search=Abuja` },
  { label: 'Ogun', to: `${MARKETPLACE_URL}/properties?search=Ogun` },
  { label: 'Benin City', to: `${MARKETPLACE_URL}/properties?search=Benin%20City` },
  { label: 'Port Harcourt', to: `${MARKETPLACE_URL}/properties?search=Port%20Harcourt` },
  { label: 'Asaba', to: `${MARKETPLACE_URL}/properties?search=Asaba` },
];

const PLATFORM_LINKS = [
  { label: 'How verification works', to: '/how-it-works' },
  { label: 'For verified agents', to: '/agents' },
  { label: 'About Xavorian', to: '/about' },
  { label: 'Our vision', to: '/vision' },
  { label: 'Contact us', to: '/contact' },
];

const GUIDE_LINKS = [
  { label: 'Real estate blog', to: '/blog' },
  { label: 'Buying & renting guides', to: '/guides' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Support center', to: '/support' },
];

const LEGAL_LINKS = [
  { label: 'Terms & conditions', to: '/terms' },
  { label: 'Privacy policy', to: '/privacy' },
  { label: 'Legal disclaimer', to: '/disclaimer' },
  { label: 'XML Sitemap', to: '/sitemap.xml' },
];

const AI_DISCOVERY_LINKS = [
  { label: 'AI summary (llms.txt)', to: '/llms.txt' },
  { label: 'Full knowledge base (llms-full.txt)', to: '/llms-full.txt' },
  { label: 'Structured facts (ai-facts.json)', to: '/ai-facts.json' },
];

const socialLinks = [
  { href: BRAND.socials[0].href, label: 'Instagram', icon: <Instagram className="size-3.5" /> },
  { href: BRAND.socials[1].href, label: 'X (Twitter)', icon: <SiX className="size-3" /> },
  { href: BRAND.socials[2].href, label: 'TikTok', icon: <SiTiktok className="size-3" /> },
  { href: BRAND.socials[3].href, label: 'YouTube', icon: <Youtube className="size-3.5" /> },
];

export const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-[#DCD8CA] bg-[#F3F1E9] sm:mt-20" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          {/* Brand & Registration Column */}
          <div className="col-span-2 pr-4 md:col-span-4">
            <Link href="/" className="inline-flex items-center" aria-label="Xavorian home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/xavorian-wordmark.svg" alt="Xavorian" className="h-6 w-auto" width="160" height="30" />
            </Link>

            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.65] text-[#52525B]">
              Nigeria&apos;s trust layer for real estate. Four pre-publication verification gates,
              Bank-Name-Match payouts via CBN-licensed payment rails, and optional 3% transaction protection
              across all 36 states and Abuja FCT.
            </p>

            {/* Hairline Registration Stamp */}
            <div className="mt-5 border-l-2 border-[#9C3495] pl-3">
              <p className="text-[12.5px] font-semibold text-[#141414]">Xavorian Technology Company</p>
              <p className="text-[12px] tabular-nums text-[#52525B]">CAC Registered · RC-9912416</p>
            </div>

            <address className="mt-5 flex flex-col gap-2 text-[12.5px] not-italic text-[#52525B]">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[#7B2276]"
              >
                <Mail className="size-3.5 shrink-0 text-[#141414]" />
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phoneHref}`}
                className="inline-flex items-center gap-2 tabular-nums transition-colors hover:text-[#7B2276]"
              >
                <Phone className="size-3.5 shrink-0 text-[#141414]" />
                {BRAND.phoneDisplay}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0 text-[#141414]" />
                All 36 Nigerian States &amp; Abuja (FCT)
              </span>
            </address>

            <nav aria-label="Social media links" className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Xavorian on ${s.label}`}
                  className="flex size-8 items-center justify-center rounded-md border border-[#DCD8CA] bg-[#FCFBF7] text-[#52525B] transition-colors hover:border-[#9C3495] hover:text-[#7B2276]"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 1: Corridors */}
          <nav className="col-span-1 md:col-span-2" aria-label="Corridors links">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141414]">
              Corridors
            </h3>
            <ul className="flex flex-col gap-2.5">
              {CORRIDOR_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="group inline-flex items-center gap-1 text-[13px] font-medium text-[#52525B] transition-colors hover:text-[#7B2276]"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2: Platform */}
          <nav className="col-span-1 md:col-span-2" aria-label="Platform links">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141414]">
              Platform
            </h3>
            <ul className="flex flex-col gap-2.5">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-[#52525B] transition-colors hover:text-[#7B2276]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Guides & Research */}
          <nav className="col-span-1 md:col-span-2" aria-label="Guides and Research links">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141414]">
              Guides &amp; Research
            </h3>
            <ul className="flex flex-col gap-2.5">
              {GUIDE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-[#52525B] transition-colors hover:text-[#7B2276]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Legal & AI Discovery */}
          <nav className="col-span-1 md:col-span-2" aria-label="Legal and AI Discovery links">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141414]">
              Legal &amp; Discovery
            </h3>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-[#52525B] transition-colors hover:text-[#7B2276]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-3 border-t border-[#E4E1D6]" />

            <ul className="flex flex-col gap-2">
              {AI_DISCOVERY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-[#75736B] transition-colors hover:text-[#7B2276]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Colophon Bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-[#DCD8CA] pt-6 text-[12px] text-[#75736B] sm:flex-row sm:items-center sm:justify-between">
          <p className="tabular-nums">
            © {CURRENT_YEAR} Xavorian Technology Company (RC-9912416). All rights reserved.
          </p>
          <p>
            Verification is a structured pre-publication process, not a legal title warranty. Updated November
            2026.
          </p>
        </div>
      </div>
    </footer>
  );
};
