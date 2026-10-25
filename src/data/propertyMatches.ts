/** Options for the opt-in "Get properties matched to you" form (values match subscribe_marketing_lead). */

export const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
] as const;

export const stateLabel = (s: string) => (s === 'FCT' ? 'Abuja (FCT)' : s);

export type MatchListingType = 'buy' | 'rent' | 'any';

export const LISTING_CHOICES: { value: MatchListingType; label: string }[] = [
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
  { value: 'any', label: 'Either' },
];

export const PROPERTY_TYPE_CHOICES = [
  { value: 'any', label: 'Any type' },
  { value: 'apartment', label: 'Flat / apartment' },
  { value: 'self-contain', label: 'Self-contain / mini flat' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'bungalow', label: 'Bungalow' },
  { value: 'detached', label: 'Detached or semi-detached house' },
  { value: 'terrace', label: 'Terrace' },
  { value: 'land', label: 'Land' },
  { value: 'commercial', label: 'Shop, office or commercial' },
] as const;

export interface BudgetPreset {
  value: string;
  label: string;
  min: number | null;
  max: number | null;
}

const M = 1_000_000;
const K = 1_000;

export const BUDGETS: Record<'buy' | 'rent', BudgetPreset[]> = {
  buy: [
    { value: 'any', label: 'Any budget', min: null, max: null },
    { value: 'b1', label: 'Under ₦10m', min: null, max: 10 * M },
    { value: 'b2', label: '₦10m to ₦30m', min: 10 * M, max: 30 * M },
    { value: 'b3', label: '₦30m to ₦75m', min: 30 * M, max: 75 * M },
    { value: 'b4', label: '₦75m to ₦150m', min: 75 * M, max: 150 * M },
    { value: 'b5', label: '₦150m to ₦500m', min: 150 * M, max: 500 * M },
    { value: 'b6', label: 'Above ₦500m', min: 500 * M, max: null },
  ],
  rent: [
    { value: 'any', label: 'Any budget', min: null, max: null },
    { value: 'r1', label: 'Under ₦500k a year', min: null, max: 500 * K },
    { value: 'r2', label: '₦500k to ₦1.5m a year', min: 500 * K, max: 1.5 * M },
    { value: 'r3', label: '₦1.5m to ₦3m a year', min: 1.5 * M, max: 3 * M },
    { value: 'r4', label: '₦3m to ₦6m a year', min: 3 * M, max: 6 * M },
    { value: 'r5', label: '₦6m to ₦15m a year', min: 6 * M, max: 15 * M },
    { value: 'r6', label: 'Above ₦15m a year', min: 15 * M, max: null },
  ],
};

export const CONSENT_TEXT = 'Send me matching properties from Xavorian. I can unsubscribe anytime.';
