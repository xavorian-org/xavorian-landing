export const BRAND = {
  name: 'Xavorian',
  tagline: "Nigeria's trust layer for real estate",
  email: 'xavorian01@gmail.com',
  supportEmail: 'xavoriansupport@gmail.com',
  legalEmail: 'xavorianlegal@gmail.com',
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
    name: 'Check property papers',
    short: 'Property papers are scanned and checked',
    body: 'We scan and check all the important property papers. Our computers help compare what the papers say to what the post says, and flag anything that looks wrong.',
  },
  {
    id: 'human',
    step: 'Gate 4',
    name: 'Automated audit & verification',
    short: 'Multi-layer automated checks before publication',
    body: 'Our system cross-checks property details, account names and document records before any listing goes live. Only when all four gates are passed does a listing earn its verified badge.',
  },
] as const;
