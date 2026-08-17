import Link from 'next/link';
import { Instagram, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SiTiktok, SiX } from 'react-icons/si';
import { BRAND } from '@/data/site';

const CURRENT_YEAR = new Date().getFullYear();

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Vision', to: '/vision' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'For Agents', to: '/agents' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Waitlist for Lagos', to: '/waitlist?city=lagos' },
      { label: 'Waitlist for Abuja', to: '/waitlist?city=abuja' },
      { label: 'Waitlist for Benin City', to: '/waitlist?city=benin-city' },
      { label: 'Waitlist for Port Harcourt', to: '/waitlist?city=port-harcourt' },
      { label: 'Join from your city', to: '/waitlist' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Real Estate Guides', to: '/guides' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Support Center', to: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Disclaimer', to: '/disclaimer' },
    ],
  },
];

const socialLinks = [
  { href: BRAND.socials[0].href, label: 'Instagram', icon: <Instagram className="size-4" /> },
  { href: BRAND.socials[1].href, label: 'X (Twitter)', icon: <SiX className="size-3.5" /> },
  { href: BRAND.socials[2].href, label: 'TikTok', icon: <SiTiktok className="size-3.5" /> },
  { href: BRAND.socials[3].href, label: 'YouTube', icon: <Youtube className="size-4" /> },
];

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border bg-muted/60" role="contentinfo">
      {/* Top CTA strip */}
      <div className="border-b border-border/80 bg-background/50 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-6 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">Be first in line</h2>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Verified Nigerian real estate is almost here. Reserve your place.
            </p>
          </div>
          <Link
            href="/waitlist"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-neutral-900 hover:shadow-md active:scale-95 sm:h-11 sm:text-sm"
          >
            Join the waitlist
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-icon="inline-end" />
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 flex flex-col gap-5 pr-4">
            <Link href="/" className="inline-flex items-center" aria-label="Xavorian home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/xavorian-wordmark.svg" alt="Xavorian" className="h-7 w-auto" width="200" height="40" />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Nigeria&apos;s trust layer for real estate. Verified agents, audited documents,
              automated multi-layer verification.
            </p>
            <address className="flex flex-col gap-2.5 text-xs not-italic text-muted-foreground">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="size-3.5 shrink-0 text-foreground" />
                {BRAND.email}
              </a>
              <a href={`tel:${BRAND.phoneHref}`} className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Phone className="size-3.5 shrink-0 text-foreground" />
                {BRAND.phoneDisplay}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5 shrink-0 text-foreground" />
                Serving all of Nigeria — Lagos, Abuja, Benin City, Port Harcourt &amp; more
              </span>
            </address>
            <nav aria-label="Social media links" className="flex gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Xavorian on ${s.label}`}
                  className="flex size-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <nav key={section.title} aria-label={`${section.title} links`}>
              <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-foreground">{section.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.to}
                      className="inline-block text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/80 pt-6 sm:flex-row">
          <p className="text-xs font-medium text-muted-foreground">
            © {CURRENT_YEAR} Xavorian. All rights reserved.
          </p>
          <p className="text-xs font-medium text-muted-foreground">
            Built for a verified Nigerian property market.
          </p>
        </div>
      </div>
    </footer>
  );
};
