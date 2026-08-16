import type { Metadata } from 'next';

export const SITE_NAME = 'Xavorian';
export const BASE_URL = 'https://www.xavorian.com';
export const DEFAULT_DESCRIPTION =
  "Xavorian is Nigeria's trust layer for real estate. Every listing is ID-checked and document-audited before going live.";

/** Builds the per-page Metadata object for App Router pages. */
export function pageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_NG',
      type: 'website',
      // Images inherit from the root opengraph-image/twitter-image files.
    },
    twitter: {
      card: 'summary_large_image',
      site: '@xavorianxyz',
      creator: '@xavorianxyz',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: { index: true, follow: true },
  };
}

/** Renders one or more JSON-LD blocks. Server-component safe. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/icon-512.png`,
  description:
    "Nigeria's trust-first real estate marketplace. Verified agents, audited documents, autonomous AI verification.",
  foundingDate: '2025',
  founder: { '@type': 'Person', name: 'Ezeani Chukwuebuka' },
  address: { '@type': 'PostalAddress', addressCountry: 'NG' },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  sameAs: [
    'https://x.com/Xavorianxyz',
    'https://www.instagram.com/xavorianxyz',
    'https://tiktok.com/@xavorianxyz',
    'https://www.youtube.com/@Xavorianxyz',
  ],
};
