import type { Metadata } from 'next';

export const SITE_NAME = 'Xavorian';
export const BASE_URL = 'https://www.xavorian.com';
export const DEFAULT_DESCRIPTION =
  "Xavorian is live: browse verified property listings across Nigeria. Buyers, renters, sellers and agents find homes, land and commercial property with transparent verification checks.";

/** Builds the per-page Metadata object for App Router pages. */
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
  /** Absolute image URL for social cards; defaults to the site OG image. */
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

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
              url: '/og-image.png',
              width: 1200,
              height: 630,
              alt: fullTitle,
              type: 'image/png',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@xavorianxyz',
      creator: '@xavorianxyz',
      title: fullTitle,
      description,
      images: [image ?? '/og-image.png'],
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
    "Nigeria's trust-first real estate marketplace for verified homes, land and commercial property.",
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
