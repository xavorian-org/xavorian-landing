/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serverless Next.js on Vercel — required so opengraph-image / twitter-image
  // (next/og ImageResponse) render dynamically at request time.
  trailingSlash: false,
  // We are live: the old waitlist URL is a real HTTP 308 to the marketplace (the page-level
  // permanentRedirect only renders a client-side redirect on a static page).
  async redirects() {
    return [{ source: '/waitlist', destination: 'https://marketplace.xavorian.com', permanent: true }];
  },
};

export default nextConfig;
