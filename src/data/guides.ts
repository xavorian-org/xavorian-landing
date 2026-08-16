export interface GuideSection {
  heading: string;
  body: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  intro: string;
  sections: GuideSection[];
  keyTakeaways: string[];
  author?: {
    name: string;
    role: string;
    twitter?: string;
  };
}

/**
 * Guides registry — informational long-tail pages. Add an entry and
 * /guides/:slug renders with Article + FAQPage JSON-LD automatically.
 */
export const GUIDES: Guide[] = [
  {
    slug: 'verify-c-of-o-before-paying',
    title: 'How to verify a Certificate of Occupancy before you pay',
    excerpt:
      'A C of O can be perfectly printed and completely fake. This is how professionals check one — step by step.',
    date: '2026-05-05',
    readingTime: '3 min read',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    intro:
      'The Certificate of Occupancy is the strongest land title document in Nigeria — which is exactly why it is the most forged. Before money moves, the document must move through these checks.',
    sections: [
      {
        heading: '1. Ask for the title number, not the photocopy',
        body: 'A scanned PDF proves nothing. What matters is the registration number on the document. Any genuine owner will share it; professionals verify numbers, not images.',
      },
      {
        heading: '2. Confirm it at the lands registry',
        body: 'Every state lands registry (Lands Bureau) can confirm whether a C of O number exists, whose name it carries, and whether the parcel matches. This check costs a small search fee and saves fortunes.',
      },
      {
        heading: '3. Check the survey plan against the ground',
        body: 'The survey plan carries coordinates and beacon numbers. A licensed surveyor can confirm the plot on the document is the plot you stood on — not one two streets away.',
      },
      {
        heading: '4. Match the name on the title to the person you are paying',
        body: 'The bank account receiving your money should belong to the name on the title, or to someone with documented authority to sell for them. A mismatch is a walk-away signal, not a negotiating point.',
      },
      {
        heading: '5. Let a platform do it for you',
        body: 'Xavorian runs this pipeline on every listing: document scan, AI-assisted cross-check against the listing claims, and a human reviewer before anything goes live. Verification becomes the default, not your homework.',
      },
    ],
    keyTakeaways: [
      'Verify the registration number at the lands registry — never rely on a photocopy',
      'Match the survey plan coordinates to the physical plot',
      'Only pay an account whose name matches the title holder',
      'On Xavorian this entire pipeline runs before a listing can exist',
    ],
  },
  {
    slug: 'rent-safely-lagos-benin',
    title: 'Renting safely in Lagos and Benin City: the new renter\'s playbook',
    excerpt:
      'Inspection fees, caretaker extortion, agents selling the same flat to five people — and how to sidestep all of it.',
    date: '2026-05-18',
    readingTime: '3 min read',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    intro:
      'High demand and low accountability make Nigeria\'s big rental cities a hunting ground. These rules keep your money safe from first viewing to key handover.',
    sections: [
      {
        heading: '1. Never pay an inspection fee to see an ordinary flat',
        body: 'Legitimate agents earn from completed deals, not door openings. A fee to simply view a property is the single most common small-scale scam in Lagos and Benin City — and the easiest to refuse.',
      },
      {
        heading: '2. Visit twice, at different hours',
        body: 'A flat shown at noon tells a different story at 7pm. Power, water, noise and security change by the hour. Anyone who refuses a second visit at your chosen time has given you a reason to leave.',
      },
      {
        heading: '3. Meet the person who owns the decision',
        body: 'Before paying anything beyond an agent\'s registered charge, confirm you are dealing with the owner or a formally mandated agent. Ask directly, and ask for the document trail.',
      },
      {
        heading: '4. Pay against proof, not promises',
        body: 'Receipts, agreements and a verified recipient account for every naira. Cash moved on trust is cash donated to the absence of evidence.',
      },
      {
        heading: '5. Or rent where verification is the baseline',
        body: 'On Xavorian, agents are KYC-verified, listings are document-audited and human-reviewed before they go live, and the paying side always knows whose account receives the money.',
      },
    ],
    keyTakeaways: [
      'Refuse inspection fees for ordinary viewings',
      'Always double-visit a property before paying',
      'Confirm you are dealing with the owner or a verified agent',
      'Every payment must have a receipt and a verified recipient',
    ],
  },
  {
    slug: 'questions-before-inspection-fee',
    title: 'Seven questions to ask before any inspection fee or deposit',
    excerpt:
      'The scammers rely on your politeness. Interrupt it with these seven questions.',
    date: '2026-06-02',
    readingTime: '2 min read',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    intro:
      'An inspection fee or deposit is the usual exit point for your money. These questions take three minutes and filter out almost every bad actor before cash is mentioned.',
    sections: [
      {
        heading: '1. What is the full legal name of the owner or agency?',
        body: 'You need a name that appears on documents and bank accounts. Self-described titles — "the caretaker", "a friend of the owner" — are not names.',
      },
      {
        heading: '2. Can I see the title document number before I come?',
        body: 'A genuine seller has nothing to lose by sharing a registration number. Reluctance here predicts everything that follows.',
      },
      {
        heading: '3. Why is this price below the area average?',
        body: 'There are good answers (urgency, dated interiors) and bad ones (the flat does not exist). If they cannot explain the discount, you are the discount.',
      },
      {
        heading: '4. Who exactly receives the payment, and what is their account name?',
        body: 'The account name should match the verified identity chain. "Pay into my cousin\'s account" ends the conversation.',
      },
      {
        heading: '5. May I bring someone to the viewing?',
        body: 'Legitimate agents welcome witnesses. Anyone who insists you come alone is scripting the encounter.',
      },
      {
        heading: '6. What happens to my fee if the property is not as described?',
        body: 'The answer tells you whether you are entering a transaction or a trap. Get it in writing.',
      },
      {
        heading: '7. Is this listing on a verified platform?',
        body: 'Xavorian listings pass identity, bank-match, document and human-review gates before going live. When the answer is yes, most of the questions above are already answered for you.',
      },
    ],
    keyTakeaways: [
      'Always get the legal name behind the property',
      'Ask for the title registration number before visiting',
      'The account name must match the verified identity chain',
      'Get refund terms in writing before any fee moves',
    ],
  },
];