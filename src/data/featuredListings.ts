export interface FeaturedPropertyItem {
  slug: string;
  title: string;
  propertyType: string;
  listingType: 'sale' | 'rent';
  price: number;
  priceFormatted: string;
  city: string;
  state: string;
  address: string;
  bedrooms: number | null;
  landSize?: string | null;
  titleType: string | null;
  shortTitle?: string;
  image: string;
}

export const FEATURED_PROPERTIES: FeaturedPropertyItem[] = [
  {
    slug: 'detached-house-for-sale-in-lekki-lagos',
    title: 'Detached House at The Palm Residence, Lekki',
    propertyType: 'Detached House',
    listingType: 'sale',
    price: 900000000,
    priceFormatted: '₦900,000,000',
    city: 'Lekki',
    state: 'Lagos',
    address: 'Osapa London, Lekki, Lagos',
    bedrooms: null,
    landSize: null,
    titleType: 'Certificate of Occupancy (C of O)',
    shortTitle: 'C of O',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/515a90a2-c7cf-4995-a3c0-a0ff567eb718-tg-wm-1794030810021-0.jpg',
  },
  {
    slug: '4-bedroom-detached-house-for-sale-in-mabushi-fct',
    title: '4-Bedroom Detached House in Mabushi',
    propertyType: 'Detached House',
    listingType: 'sale',
    price: 650000000,
    priceFormatted: '₦650,000,000',
    city: 'Mabushi',
    state: 'Abuja (FCT)',
    address: 'Behind Ministers Hill, Mabushi, Abuja FCT',
    bedrooms: 4,
    landSize: null,
    titleType: 'Certificate of Occupancy (C of O)',
    shortTitle: 'C of O',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/57c93754-4eef-48b5-9dcc-d02982012267-cover-1793302847203-0.jpg',
  },
  {
    slug: '5-bedroom-duplex-for-sale-in-ikeja-lagos',
    title: '5-Bedroom Duplex in Omole Phase 2',
    propertyType: 'Duplex',
    listingType: 'sale',
    price: 670000000,
    priceFormatted: '₦670,000,000',
    city: 'Ikeja',
    state: 'Lagos',
    address: 'Omole Phase 2, Ikeja, Lagos',
    bedrooms: 5,
    landSize: null,
    titleType: 'Certificate of Occupancy (C of O)',
    shortTitle: 'C of O',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/b7a42236-53c2-49a9-8944-fff68c887407-1000167245.webp',
  },
  {
    slug: 'duplex-for-sale-in-gra-lagos',
    title: 'Contemporary Duplex in Amuwo Odofin GRA',
    propertyType: 'Duplex',
    listingType: 'sale',
    price: 350000000,
    priceFormatted: '₦350,000,000',
    city: 'Amuwo Odofin GRA',
    state: 'Lagos',
    address: 'Amuwo Odofin GRA, Lagos',
    bedrooms: null,
    landSize: null,
    titleType: 'Certificate of Occupancy (C of O)',
    shortTitle: 'C of O',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/e35dff74-a298-432f-8a47-f256d9fbfe58-IMG-20261020-WA0137.webp',
  },
  {
    slug: '5-bedroom-detached-house-for-sale-in-new-owerri-imo',
    title: '5-Bedroom Detached House in New Owerri',
    propertyType: 'Detached House',
    listingType: 'sale',
    price: 900000000,
    priceFormatted: '₦900,000,000',
    city: 'New Owerri',
    state: 'Imo',
    address: 'Udenwa Estate, New Owerri, Imo',
    bedrooms: 5,
    landSize: '1,000 sqm',
    titleType: 'Certificate of Occupancy (C of O)',
    shortTitle: 'C of O',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/d88b10b1-9b9b-438d-8a57-33938216705e-cover-1792773207160.jpg',
  },
  {
    slug: 'land-for-sale-in-kuje-fct',
    title: '1,000 sqm Residential Plot in Kuje',
    propertyType: 'Land',
    listingType: 'sale',
    price: 45000000,
    priceFormatted: '₦45,000,000',
    city: 'Kuje',
    state: 'Abuja (FCT)',
    address: 'Kuje Layout, Kuje, Abuja FCT',
    bedrooms: null,
    landSize: '1,000 sqm',
    titleType: 'Allocation Letter (R-of-O)',
    shortTitle: 'R-of-O Allocation',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/b183c973-8275-4177-a000-bf47f6f6f075-cover-1792772491338.jpg',
  },
  {
    slug: 'land-for-sale-in-asaba-delta-4',
    title: 'Titled Residential Plot in Okpanam, Asaba',
    propertyType: 'Land',
    listingType: 'sale',
    price: 25000000,
    priceFormatted: '₦25,000,000',
    city: 'Asaba',
    state: 'Delta',
    address: 'Ogbeozoma, Okpanam, Asaba, Delta',
    bedrooms: null,
    landSize: null,
    titleType: 'Deed of Assignment',
    shortTitle: 'Deed of Assignment',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/92d855df-4b42-40f2-8ea6-35716b8e8710-tg-1792668839705-0.jpg',
  },
  {
    slug: 'land-for-sale-in-benin-city-edo',
    title: 'Estate Plot off Benin-Auchi Road',
    propertyType: 'Land',
    listingType: 'sale',
    price: 1400000,
    priceFormatted: '₦1,400,000',
    city: 'Benin City',
    state: 'Edo',
    address: 'Uzala Community, Benin City, Edo',
    bedrooms: null,
    landSize: 'Per plot',
    titleType: 'Deed of Assignment',
    shortTitle: 'Deed of Assignment',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/6fe4fe0c-5764-4fa7-b31c-d229e4ab8f7f-wm-150554.webp',
  },
  {
    slug: 'land-for-sale-in-iseyin-moniya-oyo',
    title: '16-Acre Perimeter-Fenced Land in Moniya Axis',
    propertyType: 'Land',
    listingType: 'sale',
    price: 136000000,
    priceFormatted: '₦136,000,000',
    city: 'Iseyin-Moniya',
    state: 'Oyo',
    address: 'Iseyin-Moniya Axis, Oyo State',
    bedrooms: null,
    landSize: '16 acres',
    titleType: 'Registered Survey Plan',
    shortTitle: 'Registered Survey',
    image:
      'https://xavorian-media-worker.xavorian.workers.dev/media/properties/9c95e521-4ecb-4c93-8f01-71d204dd9690-1000169307.jpg',
  },
];
