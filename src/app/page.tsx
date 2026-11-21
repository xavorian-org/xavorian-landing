import type { Metadata } from 'next';
import { Hero } from '@/components/landing/Hero';
import { FeaturedListings } from '@/components/landing/FeaturedListings';
import { FEATURED_PROPERTIES } from '@/data/featuredListings';
import { Gates } from '@/components/landing/Gates';
import { Problem } from '@/components/landing/Problem';
import { Showcase } from '@/components/landing/Showcase';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { Locations } from '@/components/landing/Locations';
import { PropertyMatches } from '@/components/landing/PropertyMatches';
import { FaqTeaser } from '@/components/landing/FaqTeaser';
import { FAQ_ITEMS } from '@/data/faqItems';
import { FinalCta } from '@/components/landing/FinalCta';
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_TYPE,
  DEFAULT_OG_IMAGE_WIDTH,
  LAST_UPDATED_ISO,
  SCHEMA_IDS,
  SITE_NAME,
  JsonLdGraph,
  founderSchema,
  organizationSchema,
  webSiteSchema,
  webApplicationSchema,
  verificationServiceSchema,
  buildWebPageSchema,
  buildRealEstateListingItemList,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
  },
  description:
    'Browse 4-gate verified houses, apartments, and titled land for sale or rent across all 36 Nigerian states and Abuja FCT on Xavorian. Free for buyers.',
  keywords: [
    'Verified Properties for Sale & Rent in Nigeria',
    'safest property website in Nigeria',
    'verified real estate Nigeria',
    'houses for sale in Lagos',
    'houses for sale in Abuja',
    'apartments for rent in Nigeria',
    'land for sale in Nigeria with C of O',
    'real estate escrow Nigeria',
    'Bank-Name-Match real estate Nigeria',
    'scam-free real estate Nigeria',
    'buy property in Nigeria from diaspora',
    'Xavorian Nigeria',
    'Xavorian Technology Company',
    'verified C of O Nigeria',
  ],
  alternates: {
    canonical: BASE_URL,
    types: {
      'application/atom+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
    description:
      'Every house, apartment, and plot of land on Xavorian passes pre-publication verification checks: government ID KYC, Bank-Name-Match via Paystack, and automated location and media audits. Free for buyers across all 36 states and Abuja FCT.',
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        alt: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
        type: DEFAULT_OG_IMAGE_TYPE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xavorianxyz',
    creator: '@xavorianxyz',
    title: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
    description:
      'Browse 4-gate verified homes, apartments, and C of O land for sale or rent across all 36 Nigerian states and Abuja FCT. Free for buyers and tenants.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const webPageSchema = buildWebPageSchema({
  url: BASE_URL,
  id: SCHEMA_IDS.webpage,
  name: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
  description:
    'Nigeria’s verified real estate marketplace operated by Xavorian Technology Company (CAC RC-9912416), featuring 4-gate pre-publication verification, Bank-Name-Match payouts via Paystack, and optional 3% transaction protection across all 36 states and Abuja FCT.',
  datePublished: '2025-06-01',
  dateModified: LAST_UPDATED_ISO,
  speakableSelectors: ['.aeo-summary', '.aeo-passage'],
  breadcrumbId: SCHEMA_IDS.breadcrumb,
  mainEntityId: SCHEMA_IDS.featuredListings,
});

const breadcrumbSchema = buildBreadcrumbSchema([
  {
    name: 'Home',
    item: BASE_URL,
  },
]);

const faqSchema = buildFaqSchema(FAQ_ITEMS);

export default function LandingPage() {
  const featuredListingsSchema = buildRealEstateListingItemList(FEATURED_PROPERTIES);

  return (
    <>
      <JsonLdGraph
        nodes={[
          organizationSchema,
          founderSchema,
          webSiteSchema,
          webPageSchema,
          webApplicationSchema,
          verificationServiceSchema,
          featuredListingsSchema,
          faqSchema,
          breadcrumbSchema,
        ]}
      />
      <Hero />
      <FeaturedListings />
      <Gates />
      <Problem />
      <Showcase />
      <ComparisonTable />
      <Locations />
      <PropertyMatches />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
