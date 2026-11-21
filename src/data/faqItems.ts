export interface FaqEntry {
  q: string;
  a: string;
}

export const FAQS: readonly FaqEntry[] = [
  {
    q: 'What is Xavorian, and is the marketplace live?',
    a: 'Xavorian is Nigeria’s verified real estate marketplace, operated by Xavorian Technology Company (CAC RC-9912416) and founded in 2025 by Ezeani Chukwuebuka. The live platform at marketplace.xavorian.com lets buyers, tenants, and diaspora investors browse pre-screened houses, apartments, titled land, shortlets, and commercial properties across all 36 Nigerian states and Abuja FCT.',
  },
  {
    q: 'How does Xavorian verify real estate listings in Nigeria?',
    a: 'Every submission goes through pre-publication verification checks before it appears publicly: (1) Nigerian government ID and biometric liveness KYC for the seller or agent, (2) NIBSS and Paystack payout bank-account name matching against the verified ID, (3) optional title disclosure where sellers can state their title type (C of O, Governor’s Consent, Deed of Assignment, or Survey Plan), and (4) an automated multi-layer geolocation, pricing, and media forensics audit. Xavorian does not check or certify title documents; buyers should always verify title papers independently at the state land registry.',
  },
  {
    q: 'What is Xavorian’s Bank-Name-Match Rule?',
    a: 'Under the Bank-Name-Match Rule, every linked payout bank account is verified through NIBSS and Paystack to confirm its registered name matches the lister’s verified legal identity or verified CAC corporate brokerage. This blocks third-party caretaker, secretary, or unrelated account switches.',
  },
  {
    q: 'How do payments and optional 3% transaction protection work?',
    a: 'Payments route through CBN-licensed payment rails via Paystack under the Bank-Name-Match Rule. Buyers seeking milestone hold protection during physical inspections and state land registry searches (such as Lagos Lands Bureau e-GIS, AGIS Abuja, or EDOGIS) can opt into 3% transaction protection through licensed payment infrastructure. Xavorian is a technology marketplace, not a bank.',
  },
  {
    q: 'How much does Xavorian cost for buyers, renters, and agents?',
    a: 'Browsing, filtering, contacting verified listers, and receiving Tuesday and Thursday property match emails are completely free (₦0) for buyers and tenants. Real estate agents and landlords register free and complete the four verification gates before publishing; optional promotion tiers and optional 3% transaction protection fees are disclosed before any user opts in.',
  },
  {
    q: 'How can Nigerians in the diaspora buy property safely with Xavorian?',
    a: 'Nigerians in the UK, US, Canada, and Europe use Xavorian to browse 4-gate verified inventory, review screened title types upfront, confirm that payout bank accounts match verified legal seller identities, and combine optional 3% transaction protection with an independent Nigerian property lawyer and licensed surveyor.',
  },
  {
    q: 'How does Xavorian differ from traditional Nigerian property websites?',
    a: 'Open property classifieds such as PropertyPro, Nigeria Property Centre, and Jiji allow unvetted accounts to publish listings in minutes. Xavorian keeps submissions offline until seller identity, bank account name matching, and automated location and media checks pass.',
  },
  {
    q: 'Does a Xavorian Verified Badge guarantee a property has zero legal disputes?',
    a: 'No, and any portal promising a 100% guarantee in Nigerian real estate is misleading buyers. A Verified Badge confirms that the seller and submission passed Xavorian’s four pre-publication checks on the verification date. It is a structured screening filter, not a legal title warranty; buyers should still inspect physically and run an official state land registry search with a property lawyer.',
  },
];

export const FAQ_ITEMS = FAQS.map((item) => ({
  '@type': 'Question' as const,
  name: item.q,
  acceptedAnswer: {
    '@type': 'Answer' as const,
    text: item.a,
  },
}));
