# OpenGraph and Twitter Image Replacement with Public Asset
Date: 2026-08-17

## Overview
Updated `public/og-image.png`, `src/app/opengraph-image.png`, and `src/app/twitter-image.png` with a clean, high-resolution 1200×630 graphic matching the official brand headline:
- **Headline**: "House hunting without the horror story."
- **Subheading**: "Buy properties you can trust."
- **Micro-copy**: "Every listing is ID-checked and document-audited before going live."
- **Visuals**: Xavorian wordmark logo, Nigeria's Trust Layer pill badge, verified house visual with purple seal, "Join the waitlist" CTA button, and social handles.

## Changes Made
- **Asset Generation**: Rendered the pixel-perfect 1200×630 PNG with Instrument Serif (normal & italic) and Plus Jakarta Sans, SVG checkmark and arrow icons, and saved to:
  - `public/og-image.png` (98.5 KB)
  - `src/app/opengraph-image.png`
  - `src/app/twitter-image.png`
- **Metadata Alt Texts**: Set `src/app/opengraph-image.alt.txt` and `src/app/twitter-image.alt.txt` to `"Xavorian — House hunting without the horror story. Buy properties you can trust."`.
- **Layout & SEO Configuration**:
  - `src/app/layout.tsx` references `/og-image.png` (1200×630).
  - `src/lib/seo.tsx` `pageMetadata` ensures all sub-routes use `/og-image.png`.
- **Verification**: Verified `npm run build` exits with code 0 across 37 static pages.
