import type { Metadata } from 'next';
import { Hero } from '@/components/landing/Hero';
import { Problem } from '@/components/landing/Problem';
import { Showcase } from '@/components/landing/Showcase';
import { Gates } from '@/components/landing/Gates';
import { LowerGuard } from '@/components/landing/LowerGuard';
import { Principles } from '@/components/landing/Principles';
import { Locations } from '@/components/landing/Locations';
import { PropertyMatches } from '@/components/landing/PropertyMatches';
import { FaqTeaser, FAQ_ITEMS } from '@/components/landing/FaqTeaser';
import { FinalCta } from '@/components/landing/FinalCta';
import { JsonLd, organizationSchema, BASE_URL, DEFAULT_DESCRIPTION } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
  description:
    'Browse verified homes, land and commercial property for sale or rent across Nigeria. Document-verified listings, escrow protection, and trusted real estate in Lagos, Abuja, Benin City, Port Harcourt, and all 36 states.',
  keywords: [
    'Verified Properties for Sale & Rent in Nigeria',
    'Nigeria real estate',
    'houses for sale in Nigeria',
    'houses for rent in Nigeria',
    'land for sale in Nigeria',
    'buy house in Lagos',
    'rent apartment Abuja',
    'property in Port Harcourt',
    'real estate Benin City',
    'verified C of O Nigeria',
    'scam-free real estate Nigeria',
    'escrow property Nigeria',
  ],
  alternates: { canonical: BASE_URL },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Xavorian',
  publisher: { '@id': `${BASE_URL}/#organization` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS,
};

export default function LandingPage() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, faqSchema]} />
      <Hero />
      <Problem />
      <Showcase />
      <Gates />
      <LowerGuard />
      <Principles />
      <Locations />
      <PropertyMatches />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
