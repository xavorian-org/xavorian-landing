import type { Metadata, Viewport } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { DEFAULT_DESCRIPTION, SITE_NAME } from '@/lib/seo';
import './globals.css';

// og:image / twitter-image must always resolve to a *publicly fetchable* URL.
// Note: VERCEL_URL is the per-deployment hash URL, which sits behind Vercel
// Deployment Protection (SSO) — scrapers get a 302 login redirect there.
// VERCEL_PROJECT_PRODUCTION_URL is the project's public URL (your custom domain
// once attached, otherwise the stable *.vercel.app alias) and stays public.
const metadataBaseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: 'Xavorian — Buy Property in Nigeria Without the Fear',
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
    other: {
      rel: 'manifest',
      url: '/manifest.webmanifest',
    },
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xavorian — Buy property in Nigeria. Without fear of scam.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xavorianxyz',
    creator: '@xavorianxyz',
    images: ['/og-image.png'],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': SITE_NAME,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
