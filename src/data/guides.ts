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
 * Guides registry — educational playbooks & field verification guides.
 */
export const GUIDES: Guide[] = [
  {
    slug: 'verify-c-of-o-before-paying',
    title: 'How to verify a Certificate of Occupancy before you pay',
    excerpt:
      'A C of O can be perfectly printed and completely fake. This is how professionals check one, step by step.',
    date: '2026-05-05',
    readingTime: '3 min read',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    intro:
      'The Certificate of Occupancy is a strong land title document in Nigeria, which is why it is often forged. Before money moves, the document should go through these checks.',
    sections: [
      {
        heading: '1. Ask for the title number, not the photocopy',
        body: 'A scanned PDF proves nothing. What matters is the registration number on the document. A genuine owner should be able to share it. Professionals verify numbers, not images.',
      },
      {
        heading: '2. Confirm it at the lands registry',
        body: 'State lands registries (Lands Bureaus) can usually confirm whether a C of O number exists, whose name it carries, and whether the parcel matches. The check costs a small search fee and can save a lot of money. Use a property lawyer to do it.',
      },
      {
        heading: '3. Check the survey plan against the ground',
        body: 'The survey plan carries coordinates and beacon numbers. A licensed surveyor can confirm that the plot on the document is the plot you stood on, not one two streets away.',
      },
      {
        heading: '4. Match the name on the title to the person you are paying',
        body: 'The bank account receiving your money should belong to the name on the title, or a documented authorised agent. A mismatch is a reason to pause, not to negotiate.',
      },
      {
        heading: '5. Let a platform help you check',
        body: 'On Xavorian, listings undergo a document scan, an AI-assisted cross-check against listing claims, and an automated multi-layer audit before a listing goes live. This reduces your risk but does not replace your own lawyer’s search.',
      },
    ],
    keyTakeaways: [
      'Verify the registration number at the lands registry; never rely on a photocopy',
      'Match the survey plan coordinates to the physical plot',
      'Only pay an account whose name matches the title holder, or a documented authorised agent',
      'On Xavorian, listings go through this document check before they are published',
    ],
  },
  {
    slug: 'rent-safely-lagos-benin',
    title: 'Renting safely in Lagos and Benin City: the new renter’s playbook',
    excerpt:
      'Inspection fees, caretaker pressure, flats offered to several people at once, and how to avoid them.',
    date: '2026-05-18',
    readingTime: '3 min read',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    intro:
      'High demand and low accountability make Nigeria’s big rental cities a hunting ground for scammers. These rules help keep your money safe from first viewing to key handover.',
    sections: [
      {
        heading: '1. Be very careful with inspection fees',
        body: 'A fee just to see an ordinary flat is a common warning sign in Lagos and Benin City. Many legitimate agents earn their fee from completed deals. If a fee is charged, get the amount and the refund terms in writing first, and confirm who you are paying.',
      },
      {
        heading: '2. Visit twice, at different hours',
        body: 'A flat shown at noon tells a different story at 7pm. Power, water, noise and security change by the hour. Anyone who refuses a second visit at your chosen time has given you a reason to be cautious.',
      },
      {
        heading: '3. Meet the person who owns the decision',
        body: 'Before paying anything beyond an agent’s registered charge, confirm you are dealing with the owner or a formally mandated agent. Ask directly, and ask for the document trail.',
      },
      {
        heading: '4. Pay against proof, not promises',
        body: 'Receipts, agreements and a verified recipient account for every naira. Cash moved on trust leaves you with no evidence.',
      },
      {
        heading: '5. Rent where verification is the baseline',
        body: 'On Xavorian, agents are KYC-verified and listings are document-audited with AI assist before they go live. Payments made through Xavorian go only to an account matching the verified name.',
      },
    ],
    keyTakeaways: [
      'Treat any fee to view an ordinary property as a warning sign, and get the terms in writing',
      'Always visit a property twice before paying',
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
      'An inspection fee or deposit is a common point where money is lost. These questions take three minutes and help filter out many bad actors before cash is mentioned.',
    sections: [
      {
        heading: '1. What is the full legal name of the owner or agency?',
        body: 'You need a name that appears on documents and bank accounts. Self-described titles, such as “the caretaker” or “a friend of the owner”, are not names.',
      },
      {
        heading: '2. Can I see the title document number before I come?',
        body: 'A genuine seller has little to lose by sharing a registration number. Reluctance here is a warning sign.',
      },
      {
        heading: '3. Why is this price below the area average?',
        body: 'There are good answers (urgency, dated interiors) and bad ones (the flat does not exist). If they cannot explain the discount, you may be the discount.',
      },
      {
        heading: '4. Who exactly receives the payment, and what is their account name?',
        body: 'The account name should match the verified identity chain. “Pay into my cousin’s account” is a reason to stop.',
      },
      {
        heading: '5. May I bring someone to the viewing?',
        body: 'Legitimate agents usually welcome witnesses. Anyone who insists you come alone is a warning sign.',
      },
      {
        heading: '6. What happens to my fee if the property is not as described?',
        body: 'The answer tells you whether you are entering a transaction or a trap. Get it in writing.',
      },
      {
        heading: '7. Is this listing on a verified platform?',
        body: 'Xavorian listings pass identity, bank-match, document and automated-verification gates before going live. This helps answer several of these questions, but you should still ask them and check the answers yourself.',
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