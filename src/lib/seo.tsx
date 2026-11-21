import type { Metadata } from 'next';
import { MARKETPLACE_URL } from '@/data/site';

export const SITE_NAME = 'Xavorian';
export const LEGAL_NAME = 'Xavorian Technology Company';
export const CAC_REGISTRATION = 'RC-9912416';
export const BASE_URL = 'https://www.xavorian.com';
export const LAST_UPDATED_ISO = '2026-11-20';
export const DEFAULT_OG_IMAGE = '/xavorian-estate-street.jpg';
export const DEFAULT_OG_IMAGE_WIDTH = 960;
export const DEFAULT_OG_IMAGE_HEIGHT = 600;
export const DEFAULT_OG_IMAGE_TYPE = 'image/jpeg';

export const DEFAULT_DESCRIPTION =
  'Xavorian is Nigeria’s verified real estate marketplace. Browse pre-screened houses, apartments, land with C of O, and commercial properties across all 36 states and Abuja FCT with 4-gate verification, Bank-Name-Match payouts, and free browsing for buyers.';

/**
 * Builds a complete, canonical App Router Metadata object with large image previews,
 * unrestricted snippet eligibility for Search and AI features, and clean social cards.
 */
export function pageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image,
  type = 'website',
}: {
  title: string;
  description?: string;
  path?: string;
  /** Absolute or root-relative image URL for social cards; defaults to authentic Nigerian estate photography. */
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = normalizedPath === '/' ? BASE_URL : `${BASE_URL}${normalizedPath}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ogImageUrl = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_NG',
      type,
      images: image
        ? [{ url: image, alt: fullTitle }]
        : [
          {
            url: DEFAULT_OG_IMAGE,
            width: DEFAULT_OG_IMAGE_WIDTH,
            height: DEFAULT_OG_IMAGE_HEIGHT,
            alt: fullTitle,
            type: DEFAULT_OG_IMAGE_TYPE,
          },
        ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@xavorianxyz',
      creator: '@xavorianxyz',
      title: fullTitle,
      description,
      images: [ogImageUrl],
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
}

export type JsonLdNode = Record<string, unknown>;

/** Safely serializes JSON-LD for embedding inside a script tag. */
function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * Combines multiple Schema.org nodes into a single interlinked `@graph` object,
 * stripping redundant nested `@context` declarations from child nodes.
 */
export function buildSchemaGraph(nodes: JsonLdNode[]): JsonLdNode {
  const cleanNodes = nodes.map((node) => {
    const { ['@context']: _context, ...rest } = node;
    return rest;
  });

  return {
    '@context': 'https://schema.org',
    '@graph': cleanNodes,
  };
}

/** Renders one or more JSON-LD blocks in initial server-rendered HTML. Server-component safe. */
export function JsonLd({ data }: { data: JsonLdNode | JsonLdNode[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(block) }}
        />
      ))}
    </>
  );
}

/** Renders a single unified `@graph` JSON-LD script block in initial SSR HTML. */
export function JsonLdGraph({ nodes }: { nodes: JsonLdNode[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSchemaGraph(nodes)) }}
    />
  );
}

/** Stable entity `@id` references for cross-linking across the JSON-LD graph. */
export const SCHEMA_IDS = {
  organization: `${BASE_URL}/#organization`,
  founder: `${BASE_URL}/#founder`,
  website: `${BASE_URL}/#website`,
  webpage: `${BASE_URL}/#webpage`,
  webapp: `${MARKETPLACE_URL}/#webapp`,
  verificationService: `${BASE_URL}/#verification-service`,
  featuredListings: `${BASE_URL}/#featured-listings`,
  faq: `${BASE_URL}/#faq`,
  breadcrumb: `${BASE_URL}/#breadcrumb`,
} as const;

export const founderSchema: JsonLdNode = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': SCHEMA_IDS.founder,
  name: 'Ezeani Chukwuebuka',
  alternateName: 'Damien',
  jobTitle: 'Founder & CEO',
  worksFor: { '@id': SCHEMA_IDS.organization },
  url: `${BASE_URL}/about`,
  sameAs: ['https://x.com/Eze_Damien'],
};

export const organizationSchema: JsonLdNode = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': SCHEMA_IDS.organization,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  alternateName: ['Xavorian Nigeria', 'Xavorian Real Estate', 'Xavorian Marketplace'],
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${BASE_URL}/#logo`,
    url: `${BASE_URL}/icon-512.png`,
    contentUrl: `${BASE_URL}/icon-512.png`,
    width: 512,
    height: 512,
    caption: 'Xavorian architectural house mark',
  },
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
    width: DEFAULT_OG_IMAGE_WIDTH,
    height: DEFAULT_OG_IMAGE_HEIGHT,
    caption: 'Residential estate street in Nigeria',
  },
  description:
    'Xavorian is Nigeria’s verified real estate marketplace and pre-publication screening layer operated by Xavorian Technology Company (CAC RC-9912416). Every listing passes pre-publication verification: government ID with liveness KYC, payout bank-account name matching via NIBSS and Paystack, and an automated multi-layer location and media audit.',
  slogan: "Nigeria's trust layer for real estate",
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'CAC Registration Number',
    value: CAC_REGISTRATION,
  },
  foundingDate: '2025',
  founder: { '@id': SCHEMA_IDS.founder },
  email: 'hello@xavorian.com',
  telephone: '+2348056373583',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
  },
  publishingPrinciples: `${BASE_URL}/how-it-works`,
  correctionsPolicy: `${BASE_URL}/disclaimer`,
  areaServed: [
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'AdministrativeArea', name: 'Lagos State' },
    { '@type': 'AdministrativeArea', name: 'Federal Capital Territory (Abuja)' },
    { '@type': 'AdministrativeArea', name: 'Ogun State' },
    { '@type': 'AdministrativeArea', name: 'Edo State' },
    { '@type': 'AdministrativeArea', name: 'Rivers State' },
    { '@type': 'AdministrativeArea', name: 'Delta State' },
    { '@type': 'AdministrativeArea', name: 'Imo State' },
    { '@type': 'AdministrativeArea', name: 'Oyo State' },
    { '@type': 'AdministrativeArea', name: 'Enugu State' },
    { '@type': 'AdministrativeArea', name: 'Akwa Ibom State' },
    { '@type': 'AdministrativeArea', name: 'Nasarawa State' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+2348056373583',
      email: 'support@xavorian.com',
      contactType: 'customer support',
      areaServed: 'NG',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      email: 'hello@xavorian.com',
      contactType: 'sales',
      areaServed: 'NG',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      email: 'legal@xavorian.com',
      contactType: 'legal',
      areaServed: 'NG',
      availableLanguage: ['English'],
    },
  ],
  knowsAbout: [
    'Nigerian real estate verification',
    'Certificate of Occupancy (C of O) verification in Nigeria',
    'Governor’s Consent and Deed of Assignment checks',
    'Registered Survey Plan due diligence',
    'Bank-Name-Match payout security in Nigeria',
    'Real estate fraud prevention in Nigeria',
    'Lagos and Abuja property sales and rentals',
    'Nigerian diaspora property buying',
  ],
  sameAs: [
    'https://x.com/Xavorianxyz',
    'https://www.instagram.com/xavorianxyz',
    'https://tiktok.com/@xavorianxyz',
    'https://www.youtube.com/@Xavorianxyz',
    MARKETPLACE_URL,
  ],
};

export const webSiteSchema: JsonLdNode = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SCHEMA_IDS.website,
  url: BASE_URL,
  name: SITE_NAME,
  alternateName: 'Xavorian Nigeria Real Estate',
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en-NG',
  publisher: { '@id': SCHEMA_IDS.organization },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${MARKETPLACE_URL}/properties?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const webApplicationSchema: JsonLdNode = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': SCHEMA_IDS.webapp,
  name: 'Xavorian Property Marketplace',
  url: MARKETPLACE_URL,
  applicationCategory: 'RealEstateApplication',
  operatingSystem: 'Web, iOS, Android (PWA)',
  browserRequirements: 'Requires a modern web browser',
  inLanguage: 'en-NG',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'NGN',
    description: 'Free for property buyers, tenants, and renters to browse, filter, and enquire.',
  },
  provider: { '@id': SCHEMA_IDS.organization },
  featureList: [
    'Four mandatory pre-publication property verification gates',
    'Government ID and real-time biometric liveness KYC for sellers, landlords, and agents',
    'Bank-Name-Match Rule linking payout accounts to verified identities via NIBSS and Paystack',
    'Optional title-type disclosure (C of O, Governor’s Consent, Deed of Assignment, Survey Plan, R-of-O)',
    'Automated location, media authenticity, and record consistency checks',
    'Optional 3% transaction protection through licensed payment rails',
    'Coverage across all 36 Nigerian states and Abuja FCT',
  ],
};

export const verificationServiceSchema: JsonLdNode = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': SCHEMA_IDS.verificationService,
  name: 'Xavorian 4-Gate Property Listing Verification',
  serviceType: 'Real Estate Listing Verification and Fraud Screening',
  provider: { '@id': SCHEMA_IDS.organization },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  termsOfService: `${BASE_URL}/terms`,
  url: `${BASE_URL}/how-it-works`,
  description:
    'Pre-publication government ID and biometric liveness KYC, NIBSS and Paystack bank-account name matching, and automated multi-layer location and media auditing for Nigerian property sales and rentals. Xavorian does not check or certify property title documents; verification is a screening process and not a legal title warranty.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Buyer & Tenant Access',
      price: '0',
      priceCurrency: 'NGN',
      description: 'Free browsing, filtering, verified seller enquiries, and twice-weekly property match alerts.',
    },
    {
      '@type': 'Offer',
      name: 'Optional Transaction Protection',
      description: 'Optional 3% transaction protection routed via CBN-licensed payment rails (Paystack), disclosed before opt-in.',
    },
  ],
};

export interface WebPageSchemaInput {
  url?: string;
  id?: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  speakableSelectors?: string[];
  breadcrumbId?: string;
  mainEntityId?: string;
  primaryImageUrl?: string;
}

/** Builds a WebPage node linked to `#website`, `#organization`, SpeakableSpecification, and freshness dates. */
export function buildWebPageSchema({
  url = BASE_URL,
  id = SCHEMA_IDS.webpage,
  name,
  description,
  datePublished = '2025-06-01',
  dateModified = LAST_UPDATED_ISO,
  speakableSelectors = ['.aeo-summary', '.aeo-passage'],
  breadcrumbId = SCHEMA_IDS.breadcrumb,
  mainEntityId,
  primaryImageUrl = `${BASE_URL}${DEFAULT_OG_IMAGE}`,
}: WebPageSchemaInput): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': id,
    url,
    name,
    description,
    isPartOf: { '@id': SCHEMA_IDS.website },
    about: { '@id': SCHEMA_IDS.organization },
    publisher: { '@id': SCHEMA_IDS.organization },
    breadcrumb: { '@id': breadcrumbId },
    ...(mainEntityId ? { mainEntity: { '@id': mainEntityId } } : {}),
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: primaryImageUrl,
    },
    datePublished,
    dateModified,
    inLanguage: 'en-NG',
    ...(speakableSelectors.length > 0
      ? {
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: speakableSelectors,
        },
      }
      : {}),
  };
}

export interface BreadcrumbItemInput {
  name: string;
  item: string;
}

/** Builds a Schema.org BreadcrumbList node. */
export function buildBreadcrumbSchema(
  items: BreadcrumbItemInput[],
  id: string = SCHEMA_IDS.breadcrumb,
): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${BASE_URL}${crumb.item}`,
    })),
  };
}

export interface RealEstateListingSchemaInput {
  slug: string;
  title: string;
  propertyType?: string;
  listingType?: string;
  price: number;
  city: string;
  state: string;
  address?: string;
  bedrooms?: number | null;
  titleType?: string | null;
  image: string;
}

/**
 * Builds an ItemList of Schema.org v30-compliant RealEstateListing nodes.
 * Places PostalAddress inside `contentLocation` and `about` (Place/Residence)
 * and omits bedroom counts when null so structured data stays 100% truthful.
 */
export function buildRealEstateListingItemList(
  listings: readonly RealEstateListingSchemaInput[],
  options?: {
    id?: string;
    name?: string;
    description?: string;
  },
): JsonLdNode {
  const id = options?.id ?? SCHEMA_IDS.featuredListings;
  const name = options?.name ?? 'Featured Verified Nigerian Properties on Xavorian';
  const description =
    options?.description ??
    'Live pre-screened Nigerian houses, duplexes, and titled land verified across Lagos, Abuja FCT, Imo, Delta, Edo, and Oyo.';

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': id,
    name,
    description,
    numberOfItems: listings.length,
    itemListElement: listings.map((prop, index) => {
      const listingUrl = `${MARKETPLACE_URL}/property/${prop.slug}`;
      const locationName = prop.address || `${prop.city}, ${prop.state}`;
      const postalAddress: JsonLdNode = {
        '@type': 'PostalAddress',
        addressLocality: prop.city,
        addressRegion: prop.state,
        addressCountry: 'NG',
      };
      const isLand = prop.propertyType?.toLowerCase() === 'land';
      const isRent = prop.listingType?.toLowerCase() === 'rent';

      const aboutEntity: JsonLdNode = {
        '@type': isLand ? 'Place' : 'Residence',
        name: prop.title,
        address: postalAddress,
        ...(typeof prop.bedrooms === 'number' && prop.bedrooms > 0
          ? { numberOfBedrooms: prop.bedrooms }
          : {}),
        ...(prop.titleType
          ? {
            additionalProperty: {
              '@type': 'PropertyValue',
              name: 'Title Document',
              value: prop.titleType,
            },
          }
          : {}),
      };

      return {
        '@type': 'ListItem',
        position: index + 1,
        url: listingUrl,
        item: {
          '@type': 'RealEstateListing',
          name: prop.title,
          url: listingUrl,
          image: prop.image,
          publisher: { '@id': SCHEMA_IDS.organization },
          contentLocation: {
            '@type': 'Place',
            name: locationName,
            address: postalAddress,
          },
          about: aboutEntity,
          offers: {
            '@type': 'Offer',
            url: listingUrl,
            price: prop.price,
            priceCurrency: 'NGN',
            availability: 'https://schema.org/InStock',
            businessFunction: isRent
              ? 'https://purl.org/goodrelations/v1#LeaseOut'
              : 'https://purl.org/goodrelations/v1#Sell',
          },
        },
      };
    }),
  };
}

export interface FaqPairInput {
  q: string;
  a: string;
}

export interface FaqSchemaQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

/**
 * Builds a semantic FAQPage node from either `{ q, a }[]` or Schema.org `Question[]`.
 * Note: Google retired FAQ SERP rich results on 2026-05-07; retained strictly as
 * accurate structured Q&A markup for non-SERP semantic consumers and AI parsers.
 */
export function buildFaqSchema(
  items: readonly (FaqPairInput | FaqSchemaQuestion)[],
  id: string = SCHEMA_IDS.faq,
): JsonLdNode {
  const mainEntity = items.map((item) => {
    if ('q' in item) {
      return {
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      };
    }
    return item;
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': id,
    mainEntity,
  };
}

export interface VerifiedAgentSchemaInput {
  name: string;
  url: string;
  city: string;
  state: string;
  telephone?: string;
  image?: string;
  cacNumber?: string;
}

/**
 * Helper for verified brokerage or agent partner profiles (Tier 1 to Tier 3).
 * Xavorian itself is modeled as Organization + WebApplication + Service (not a broker)
 * to remain strictly consistent with Xavorian's Terms of Service and Disclaimer.
 */
export function buildRealEstateAgentSchema(agent: VerifiedAgentSchemaInput): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: agent.name,
    url: agent.url,
    ...(agent.image ? { image: agent.image } : {}),
    ...(agent.telephone ? { telephone: agent.telephone } : {}),
    ...(agent.cacNumber
      ? {
        identifier: {
          '@type': 'PropertyValue',
          propertyID: 'CAC Registration Number',
          value: agent.cacNumber,
        },
      }
      : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: agent.city,
      addressRegion: agent.state,
      addressCountry: 'NG',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: agent.state,
    },
    memberOf: { '@id': SCHEMA_IDS.organization },
  };
}
