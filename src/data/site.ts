export const BRAND = {
  name: 'Xavorian',
  tagline: "Nigeria's trust layer for real estate",
  email: 'hello@xavorian.com',
  supportEmail: 'support@xavorian.com',
  legalEmail: 'legal@xavorian.com',
  phoneDisplay: '+234 805 637 3583',
  phoneHref: '+2348056373583',
  whatsapp: 'https://wa.me/2348056373583',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/xavorianxyz' },
    { label: 'X (Twitter)', href: 'https://x.com/Xavorianxyz' },
    { label: 'TikTok', href: 'https://tiktok.com/@xavorianxyz' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Xavorianxyz' },
  ],
} as const;

/** The live property marketplace. Keep every cross-site CTA on this canonical host. */
export const MARKETPLACE_URL = 'https://marketplace.xavorian.com';

export const CITIES = [
  { slug: 'lagos', name: 'Lagos', state: 'Lagos State' },
  { slug: 'abuja', name: 'Abuja', state: 'FCT' },
  { slug: 'benin-city', name: 'Benin City', state: 'Edo State' },
  { slug: 'port-harcourt', name: 'Port Harcourt', state: 'Rivers State' },
  { slug: 'ibadan', name: 'Ibadan', state: 'Oyo State' },
  { slug: 'asaba', name: 'Asaba', state: 'Delta State' },
  { slug: 'warri', name: 'Warri', state: 'Delta State' },
  { slug: 'enugu', name: 'Enugu', state: 'Enugu State' },
  { slug: 'uyo', name: 'Uyo', state: 'Akwa Ibom State' },
] as const;

/**
 * The four verification gates every listing passes before it goes live.
 * Single source of truth — used by the landing page, How It Works, and the 3D scene labels.
 */
export const GATES = [
  {
    id: 'identity',
    step: 'Gate 1',
    name: 'Check ID',
    short: 'Government ID and live selfie',
    body: 'Every agent and property owner on Xavorian has to show a real government ID and take a live selfie. If they do not show their real identity, they cannot post. There are no hidden sellers here.',
  },
  {
    id: 'bank',
    step: 'Gate 2',
    name: 'Check bank account',
    short: 'Bank name must match the real ID',
    body: 'The bank account that gets the money must have the exact same name as the ID they showed us. Money only goes to the person who proved who they are, never to a stranger.',
  },
  {
    id: 'document',
    step: 'Gate 3',
    name: 'Optional title disclosure',
    short: 'Optional title type stated upfront',
    body: 'Sellers can optionally state the property title type (such as C of O, Governor’s Consent, or Deed of Assignment). Xavorian does not verify or certify property documents; buyers should always run an independent state land registry search.',
  },
  {
    id: 'human',
    step: 'Gate 4',
    name: 'Automated audit & verification',
    short: 'Multi-layer automated checks before publication',
    body: 'Our system cross-checks property details, location coordinates, media authenticity, and account names before any listing goes live. Only when verification checks pass does a listing earn its verified badge.',
  },
] as const;
