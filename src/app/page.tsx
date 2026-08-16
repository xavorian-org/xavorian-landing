import type { Metadata } from 'next';
import { Hero } from '@/components/landing/Hero';
import { Problem } from '@/components/landing/Problem';
import { Showcase } from '@/components/landing/Showcase';
import { Gates } from '@/components/landing/Gates';
import { LowerGuard } from '@/components/landing/LowerGuard';
import { Principles } from '@/components/landing/Principles';
import { Locations } from '@/components/landing/Locations';
import { FaqTeaser, FAQ_ITEMS } from '@/components/landing/FaqTeaser';
import { FinalCta } from '@/components/landing/FinalCta';
import { JsonLd, organizationSchema, BASE_URL, DEFAULT_DESCRIPTION } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Xavorian — Buy Property in Nigeria Without the Fear',
  description: DEFAULT_DESCRIPTION,
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
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
