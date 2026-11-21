import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MarketplaceUtm } from '@/components/MarketplaceUtm';
import { BASE_URL, DEFAULT_DESCRIPTION, SITE_NAME } from '@/lib/seo';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const metadataBaseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: 'Verified Properties for Sale & Rent in Nigeria | Xavorian',
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Xavorian Technology Company', url: BASE_URL }],
  creator: 'Xavorian Technology Company',
  publisher: 'Xavorian Technology Company',
  category: 'Real Estate',
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
  icons: {
    icon: [
      { url: '/favicon.ico?v=20261120' },
      { url: '/icon-192.png?v=20261120', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png?v=20261120', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icon-192.png?v=20261120', sizes: '192x192', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    types: {
      'application/atom+xml': '/feed.xml',
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/xavorian-estate-street.jpg',
        width: 960,
        height: 600,
        alt: 'Xavorian: Verified Properties for Sale & Rent in Nigeria',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xavorianxyz',
    creator: '@xavorianxyz',
    images: ['/xavorian-estate-street.jpg'],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': SITE_NAME,
  },
};

export const viewport: Viewport = {
  themeColor: '#FCFBF7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18524454114" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-18524454114');`,
          }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Xavorian LLMs Summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Xavorian Full AI Knowledge Base" />
        <link rel="alternate" type="application/json" href="/ai-facts.json" title="Xavorian Structured AI Facts" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <MarketplaceUtm />
      </body>
    </html>
  );
}
