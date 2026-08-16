/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serverless Next.js on Vercel — required so opengraph-image / twitter-image
  // (next/og ImageResponse) render dynamically at request time.
  trailingSlash: false,
};

export default nextConfig;
