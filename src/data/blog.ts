export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  body: string[]; // paragraphs
  author?: {
    name: string;
    role: string;
    twitter?: string;
  };
}

/**
 * Blog registry — add an entry here and /blog/:slug renders + sitemaps
 * automatically. This is how the site scales to 40–50 pages.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-we-built-xavorian',
    title: 'Why we built Xavorian',
    excerpt:
      'Almost everyone who has searched for property in Nigeria has a scam story. We decided that story should stop being normal.',
    date: '2026-05-01',
    readingTime: '4 min read',
    category: 'Announcement',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      'Ask anyone who has rented or bought property in Nigeria, and within minutes you will hear the story: the listing that did not exist, the agent who vanished with the inspection fee, the documents that looked perfect until someone finally checked them at the lands registry.',
      "Here is one we hear in different forms every week. A young nurse in Lagos finds a clean two-bedroom flat in Surulere listed at ₦1.8 million a year, while every similar flat on that street sits at ₦2.3 million and above. The photos are sharp, the agent is polite. He collects ₦15,000 for the inspection, then ₦50,000 as a 'commitment fee' to hold the flat over the weekend. By Tuesday his number stops connecting. The flat was real. It had simply been rented out months earlier, by a completely different person.",
      'Or the family in Enugu that bought a plot, fenced it and laid a foundation, only to watch a stranger arrive with papers for the same land. Two folders of documents. One truth.',
      "None of these people were foolish. They were doing their best inside a market with no shared system of proof, where the available verification is a cousin who 'knows the area' and a WhatsApp profile picture that looks official.",
      'When there is no infrastructure, suspicion becomes the only security system, and suspicion is both exhausting and weak. A determined scammer rehearses confidence for a living. Tired buyers do not stand a chance against rehearsed confidence.',
      'The cost shows up everywhere. Diaspora Nigerians pay relatives and agents to inspect on their behalf and still lose money. Families hold savings in cash for years because committing to property feels like gambling. Honest landlords with clean houses struggle to stand out from forged ones. Everyone pays the scam tax, including the people who never fall for one.',
      'We built Xavorian because the Nigerian property market deserves better than cautionary tales. Trust should not be a promise made in a DM. It should be a process that runs before a listing ever reaches your screen.',
      'Xavorian is a verification-first marketplace. Before any listing goes live, the person behind it proves their identity with a government-issued ID and a live liveness selfie. The payout bank account must carry that same name. Title documents are scanned and checked against the claims made in the listing. And a human reviewer reads the full file before anything publishes.',
      'If any one of those gates fails, there is no listing. Not a listing with a smaller badge. No listing at all. That sounds strict until you remember the current default, where anyone with a phone and data can publish a mansion.',
      'We want to be precise about what this means. Verification is a filter, not a force field. We will not pretend it catches every clever person on earth. What it changes is the starting point: you browse from a pool that has already been screened, and when money moves, it moves towards a bank account whose name matches a verified identity. Anonymity, the room where most of these scams live, is removed.',
      'We are opening city by city across Nigeria, and each city opens first through the waitlist. That order is deliberate. We would rather arrive in one city with verified supply than appear in ten cities with listings we cannot stand behind.',
      'If you have ever lowered your guard and paid for it, this one is for you. And if you have not yet, the goal is that you never find out how it feels. Renting a flat should require proof, not street wisdom.',
    ],
  },
  {
    slug: 'how-to-spot-a-cloned-listing',
    title: 'How to spot a cloned listing in 60 seconds',
    excerpt:
      'The cloned listing is the oldest trick in the Nigerian property market — real house, fake poster. Here are the tells.',
    date: '2026-05-12',
    readingTime: '4 min read',
    category: 'Safety',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      "A cloned listing is a real property advertised by someone who has no right to it. The photos are stolen from a genuine post, the price is set just low enough to feel lucky, and the 'agent' is in a hurry for your inspection fee.",
      "It is the oldest trick in the market because it is the cheapest. No property to acquire, no papers to forge, only the confidence to rent out a stranger's house by lunchtime. Setup takes one evening: screenshot a genuine listing, register a fresh number under a fresh name, and repost the same house the next morning with 'just out' in the caption.",
      'Tell one: the price undercuts everything similar in the area by twenty percent or more. A two-bedroom in Lekki offered at ₦2.4 million when every comparable flat nearby holds between ₦3 million and ₦3.5 million is not luck. It is bait. Scammers price for speed, not value: they need you committed before doubt arrives.',
      "Tell two: pressure before proof. Ask for the title document number and watch the creativity. The oga is abroad. The caretaker has the files but has travelled to the village. Copies will come 'after the commitment'. Any agent who wants money before you have seen documents, or who gets irritated by reasonable questions, has already told you who they are.",
      "Manufactured urgency is part of the script. 'Three people are coming this weekend' exists so that you pay today instead of thinking tonight. Real landlords in this market are rarely in a hurry: a fairly priced property in Lagos, Abuja or Port Harcourt sells itself.",
      "Tell three: photo archaeology. Run the images through a reverse image search. If the same parlour appears across listings in Ajah, Gwarinpa and Ring Road, you have your answer. Smaller details confess too: a watermark carrying a different agency's name, or a rainy-season sky in a city currently in harmattan.",
      "Tell four: the account-name test. Before you go anywhere, ask which account the inspection or commitment fee would enter. An unrelated personal name, a 'company account' that resolves to one man's first son, a name that matches nothing on any document: that is the scam showing its hands early.",
      "Tell five: viewing games. They will not meet you at the property in daylight, they suggest you 'check out the area first', or the appointment keeps shifting because the oga 'just stepped out'. A genuine agent wants you inside the property. A cloner wants you near it, briefly, then paid.",
      "Our companion checklist of questions to ask before paying any inspection fee covers exactly what to say on that first phone call. Keep it open while you talk; the agent's answers will sort themselves.",
      'The clean defence is not vigilance, because vigilance gets tired by the third viewing of the week. The clean defence is verification. On Xavorian, before a listing can exist, the person behind it clears a government ID check, a liveness check, a bank-account name match, a document scan and a human review. A clone has to survive all five gates to reach your screen. The pipeline exists to make sure it does not.',
      'Whatever platform you browse on, keep the paperwork habit: our step-by-step guide on verifying a C of O before paying walks through the registry check in plain language. Sixty seconds of doubt costs nothing. The lesson this market teaches the trusting costs everything.',
    ],
  },
  {
    slug: 'what-verification-actually-means',
    title: "What 'verified' actually means (and what it should never mean)",
    excerpt:
      "Verified has become a decorative word in Nigerian real estate. On Xavorian it is a checklist with a name behind it.",
    date: '2026-05-28',
    readingTime: '4 min read',
    category: 'Trust',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      "Most platforms hand out 'verified' badges the way supermarkets hand out loyalty points: automatically, and to everyone. A seller uploads a photo, ticks a box, maybe pays a small fee, and the badge appears beside the listing. The word loses its meaning, and buyers pay for the confusion.",
      'We have spoken to buyers who filtered entire searches by that badge and still lost money. The badge was real. The checking behind it was not.',
      'Nigerian property scammers understood badge inflation early. The badge became a costume. A cloned post can carry five ticks across three apps without a single human ever having met the poster.',
      'The result is a market where the safest-looking listings are sometimes the loudest lies, and where honest sellers must prove themselves from zero, every single time.',
      'On Xavorian, verified is a record, not a decoration. It is the output of a process with hard gates, and every listing on the platform has passed all of them.',
      "Gate one: identity. The seller passes a government-issued ID check and a live liveness selfie. This proves a real, present person stands behind the listing, not a rented identity or a dead man's documents. The liveness part matters because photographs of stolen IDs circulate widely; a face that blinks on command is far harder to borrow.",
      'Gate two: the bank-name match. The account that receives money must carry the same name as the verified identity. This single gate quietly deletes the most common scam move in the market: collect through an unrelated account, deny everything afterwards, and let the trail die at a stranger\'s doorstep.',
      'Gate three: documents. Title papers are scanned, and our AI truthing layer compares them against the claims in the listing: names, dates, plot descriptions, property type, asking price band. Papers describing a different property, or a different owner, do not pass.',
      'Gate four: human review. A named reviewer reads the file end to end and decides whether it publishes. Machines are good at matching. People are good at smelling. We use both, on purpose.',
      "Here is the part that matters most: the gates are all-or-nothing. If one fails, there is no listing. Not a listing with a smaller badge, not a listing with a warning label. No listing. Contrast that with the usual model: a form, a fee, a tick. A badge you can buy is decoration. A badge you must earn is information.",
      "Now the honest limits, because verified should never mean more than it does. Verification answers one question: is this person who they claim to be, and do the documents support the listing? It is not a court judgment on a family land dispute, and it does not replace your own search at the lands registry; our guide on verifying a C of O before paying shows how that search works.",
      'Used properly, the badge is a starting point with a name behind it. You still inspect, you still ask the questions from our inspection-fee checklist, you still verify the paperwork. Verification simply means the listing in front of you has already cleared obstacles that stop most scams cold.',
      'When a listing fails a gate, the seller is told why where it is safe to share, and may resubmit with better papers. We would rather lose a listing than launder a doubt.',
      "This is the standard 'verified' should have meant all along: a checklist, a record, and a human being accountable for the yes. It is the standard every Xavorian listing is held to, everywhere in Nigeria.",
    ],
  },
  {
    slug: 'how-to-avoid-property-scams-nigeria',
    title: 'How to avoid property scams in Nigeria',
    excerpt:
      'Most Nigerian property scams fit four shapes: the Cloned Listing, the Vanishing Agent, the Forged Document and the Double Sale. Learn the shapes, then the seven questions that defuse them.',
    date: '2026-06-09',
    readingTime: '5 min read',
    category: 'Safety',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      "Property scams in Nigeria look chaotic from the outside. Up close, they are repetitive. Almost every story we hear, from a student securing a first apartment in Yaba to a family buying land in Asaba, fits one of four shapes. Learn the four shapes and most of the market's danger becomes visible long before it reaches your pocket.",
      'Archetype one: the Cloned Listing. A real property, advertised by someone with no right to it, running on stolen photos and a tempting price. We broke its tells down in our piece on spotting a cloned listing in sixty seconds. The short version: price, pressure and paperwork, in that order.',
      "Archetype two: the Vanishing Agent. Charming on the phone, thorough on the viewing, gone after the first ₦20,000 'inspection fee' or ₦50,000 'commitment fee'. Sometimes the viewing is even a genuine empty flat, with a caretaker tipped a few thousand naira to open the door. The fee is the product. The house was only ever packaging.",
      "Archetype three: the Forged Document. A C of O with a real-looking stamp and a borrowed identity, or a survey plan whose coordinates point at an empty road. Forgeries survive because most buyers never check them at the lands registry, which is precisely where they die. The defence is never the paper's appearance; it is the paper's number, checked against the registry's own record.",
      "Archetype four: the Double Sale. One plot, two buyers, two receipts. Common with family land and omonile arrangements, where the oga's signature in January does not restrain his cousin in June. The second buyer usually discovers the first when the foundation is being dug. And note: a receipt proves payment. It does not prove ownership.",
      "Every archetype shares one solvent: speed. Each of them needs you to pay this week, before someone else 'takes it', before the price 'goes up'. Legitimate deals generally survive a fortnight of checking. Scams rarely do.",
      'Now the defence. Whatever shape the scam takes, seven questions defuse most of it. Ask them on the first call, calmly, and listen to the texture of the answers.',
      'One: what is the full legal name of the owner, and can I see it on a document? Two: which title document covers this property, and what is its number? Three: whose bank account receives payment, and does that name match the documents?',
      'Four: can I inspect in daylight, and will the caretaker or neighbours confirm who manages this property? Five: will you wait while I conduct a search at the lands registry before paying? Six: what happens, in writing, if the deal falls through? Seven: why is the price set where it is?',
      'A genuine agent answers these without offence, because genuine agents hear them weekly. A scammer answers question one and starts negotiating with question five. That friction is not awkwardness. It is the finding.',
      "The single most powerful check on that list is the title search. A C of O number, holder name and plot or file number can be confirmed at the state lands registry, with the coordinates charted at the Surveyor-General's office, usually for a modest fee and a day or two of patience. Our step-by-step guide on verifying a C of O before paying walks through it. It is the cheapest insurance in Nigerian real estate.",
      "Then the money rule. Pay only into an account whose name matches the verified documents: never cash, never a third party 'because of network issues', never a POS stranger. Every naira routed through a matched name is traceable. Every naira routed elsewhere is a gift.",
      'This is exactly the logic Xavorian is built on. Listings clear identity checks, liveness checks, bank-name matching, document scanning and human review before they go live, and payments route to name-matched verified accounts. Treat it as a verification-first filter, not a promise of perfection. The habits in this guide remain yours to keep.',
      'Save this page. Send it to the friend currently hunting for a flat, and the uncle about to pay for land. The scams are old. So are the defences. What is new is that there is finally infrastructure enforcing them.',
    ],
  },
  {
    slug: 'inspection-fee-scam-red-flag',
    title: "Why the 'inspection fee' is real estate's loudest red flag",
    excerpt:
      'The inspection fee is small enough to pay without fear and profitable enough to build a scam business on. Here is how the script runs, what the real norm is, and how to view safely.',
    date: '2026-06-20',
    readingTime: '4 min read',
    category: 'Safety',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      'Of all the fees in Nigerian property, the inspection fee is the one designed to disappear. It is small enough to pay without fear, ₦5,000 here, ₦20,000 there, and large enough to fund a lifestyle when collected from thirty people a week. For many scammers the fee is the entire business. The house was never for rent.',
      "The maths explains the confidence. Collect ₦15,000 from twenty flat-hunters a week and the 'agent' out-earns the rent on the very flat being advertised, without owning a single block.",
      "The script is consistent. You find a sharp listing, call, and hear the property is 'hot'. A viewing is arranged, sometimes a genuine viewing of a genuine empty flat, the caretaker tipped to open the door. Afterwards comes the fee: inspection, form, commitment, whatever the day calls it. Then the excuses begin. The rent changes. The oga has travelled. Finally, the number stops connecting.",
      "Why does it work on careful people? Sunk cost plus urgency. Once you have paid ₦10,000, paying ₦25,000 more to 'secure' the flat feels like protecting an investment. It is not. It is feeding a meter that never switches off.",
      'The fee also filters. Anyone unwilling to pay is dropped at once, which saves the scammer time. Your hesitation is their queue management.',
      'Here is the norm worth memorising: a genuine first viewing is free. Agents in this market earn their commission when a deal closes, not when a door opens. Transport is their cost of doing business, not yours. The moment money is requested before you have seen a property and its papers, you are no longer the client. You are the product.',
      "Three red flags usually travel with inspection fees: the fee appears before any viewing, it is payable in cash or to an unrelated personal account, and it is 'refundable' only in speech. One of the three can occur in an honest transaction. All three together is a business model.",
      'To be fair, some legitimate arrangements involve charges after a viewing: application forms, agreement drafting, processing. Even then, pay nothing you cannot trace, insist on receipts, and confirm every account name against the documents shown. Our checklist of questions to ask before paying an inspection fee gives you the exact wording for that conversation.',
      "Viewing safely is simple, and worth the small awkwardness. Go in daylight. Go with someone. Meet at the property itself, not 'nearby'. Ask the neighbours or the caretaker who manages the house, and for whom. Photograph every document you are shown. If anyone objects to any of this, believe the objection.",
      'What does Xavorian do instead? The viewing moves to the middle of the journey, after the risk has been screened: listings only exist after identity, liveness, bank-name match, document and human review gates, and payments route to accounts whose names match verified identities. Small untraceable fees to anonymous strangers are exactly what this design refuses to host.',
      'A fee you cannot trace, to a person you cannot name, for a property you have not verified: that is the classic exit point. Recognise the shape early, and the oldest scam in the market has nothing to collect from you.',
    ],
  },
  {
    slug: 'c-of-o-vs-deed-of-assignment',
    title: 'C of O vs deed of assignment: what each document actually proves',
    excerpt:
      "One is the state's word on the land, the other is the handover note between people. Here is what each proves, where governor's consent fits, and how to verify both at the lands registry.",
    date: '2026-07-03',
    readingTime: '5 min read',
    category: 'Documents',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      'Ask five buyers what papers came with their property and you will hear these two documents swapped and waved around interchangeably. They are not interchangeable. They answer different questions, and confusing them is how good money chases bad land.',
      "The Certificate of Occupancy, the C of O, is the state's word on a property. Rooted in the Land Use Act of 1978, it records the governor's grant of a right of occupancy over a defined parcel, commonly for a term of up to 99 years, for a stated purpose. In plain language: this person, this plot, this use, this term, on the government's own record.",
      'The Deed of Assignment is a private word between two people. It is the document by which a seller transfers their interest in a property to a buyer: the parties, the price paid, the description of the property, signatures, witnesses. In plain language: the person who held this interest has handed it to me.',
      'Think of it this way. The C of O is the land\'s identity card. The deed is the handover note. You would not accept a handover note from someone with no identity card, and an identity card alone hands nothing to you.',
      'So which is stronger? Neither, because they do different jobs. The C of O roots title with the state. The deed moves interest between parties. A deed backed by no solid title conveys nothing: you cannot assign what the seller never had. And a C of O sitting in the seller\'s name does nothing for you until the interest is properly transferred.',
      "This is where governor's consent enters. Under the Land Use Act, a statutory right of occupancy cannot be transferred without the governor's consent, and in practice the deed should be presented for consent and then registered. An unconsented, unregistered deed leaves you holding a contract rather than a perfected title: the difference between owning the land and owning a promise about the land.",
      "How to verify a C of O: take the certificate number, the holder's name and the plot or file number to the state lands registry and run a search. For the survey side, chart the coordinates at the Surveyor-General's office: confirm the plot exists where claimed, is not inside a committed government acquisition, and matches the beacons on paper. Fees vary by state, typically from a few thousand naira to tens of thousands for a proper search and charting. Our step-by-step guide on verifying a C of O before paying details the full walk-through.",
      "How to check a deed: read the recitals first, they tell the property's story from the root of title down to the seller. Confirm the parties' names, and that those names match every other document in the chain. Confirm a survey plan is attached and that its numbers match your charting. Finally, confirm the deed itself is registered: the lands registry keeps the registered copy, so the file either exists or it does not.",
      "Watch for the mismatch trick: a seller waves a C of O proudly, then pushes you to close on a deed of assignment alone, in a relative's name, 'for convenience'. The convenience is always theirs. Match the names, or the deal stops.",
      'Two more habits. Engage a property lawyer for the search and the drafting; a good search fee is cheaper than a bad parcel. And align names across everything: the seller, the C of O, the deed, the survey, the bank account receiving your money.',
      'Where Xavorian fits: sellers pass document scanning with AI truthing plus human review before listings publish, and payments route to name-matched verified accounts. That filters the loudest forgeries early, at the gate. Your lawyer\'s registry search remains the final word. It should.',
      'Read these two documents side by side and listings stop being mysteries. The C of O tells you the state recognises a right. The deed tells you the right changed hands. You want both, plus consent, plus a search, before a naira moves.',
    ],
  },
  {
    slug: 'what-to-do-if-you-have-been-scammed',
    title: 'What to do if you have been scammed: a recovery playbook',
    excerpt:
      'Evidence first, bank second, petitions third, civil recovery fourth. A practical sequence for the days after a property scam, and the habits that stop a second one.',
    date: '2026-07-17',
    readingTime: '5 min read',
    category: 'Recovery',
    author: {
      name: 'Ezeani Chukwuebuka (Damien)',
      role: 'Founder',
      twitter: '@Eze_Damien',
    },
    body: [
      "If it has happened, hear this first: it happens to sharp, careful people, and shame is the scammer's last weapon. Silence and delay protect them. Speed protects you. What decides outcomes is what happens in the first seventy-two hours, so move in this order.",
      'Step one: freeze the evidence. Screenshot the advert, the chats, the call logs, the profile pictures, every receipt and transfer alert. Record the account numbers, account names, phone numbers, and every name or office mentioned. Then write a timeline while memory is fresh: dates, amounts, promises, meeting points. Evidence degrades fastest in the first week.',
      'Do not delete the chat thread, even when it stings to look at. And resist the urge to lead with threats: preserve first, confront later, with copies in hand.',
      "Step two: call your bank immediately. Report the transfer as fraudulent and request a recall to the receiving bank. Report the receiving account number to that bank's own fraud desk as well. Recalls are not promises, and freezes typically require court process, but early alerts raise the odds that money is still sitting where it can be held.",
      'Step three: report properly, on paper. File a report with the Police, and where the fraud involved impersonation, forged documents or advance-fee tactics, petition the EFCC: advance-fee and property fraud sit squarely in their mandate. Your petition should carry your timeline, the evidence bundle, the account numbers and names, and a clear statement of the total amount. Keep certified copies of everything you submit. If the matter crossed state lines or involved forged government documents, say so plainly; it shapes how the case is handled.',
      "Step four: consider civil recovery. A lawyer's letter of demand sometimes shakes loose money that had 'disappeared'. Beyond that, an action to recover money paid for a failed consideration is the usual route, and where the amount qualifies, the small-claims track moves faster and costs less. A frank lawyer will also tell you when the numbers do not justify the fight. That honesty is worth paying for.",
      'Step five: warn others, factually. Report the account and phone number everywhere they appeared: the platform hosting the advert, the banks involved, and neighbourhood or professional groups. Patterns only become visible when people speak.',
      "Now the honest part. Recovery is possible but not certain, and anyone who promises your full money back in days, for an upfront 'processing fee', is running the same hustle in a new costume. Treat the official channels as the real path, keep your copies, and be patient with the timeline.",
      'Then rebuild the habit that fails most people: verify before money, never after. Confirm title at the lands registry, match every account name to documents, view in daylight, and keep the seven defensive questions close; our full guide on how to avoid property scams in Nigeria gathers them in one place.',
      'On Xavorian, that order is enforced by design: listings publish only after identity, liveness, bank-name match, document and human review gates, and payments route to name-matched verified accounts. Verification-first browsing cannot rewrite what already happened. It can make your next search begin from a pool that has already been screened.',
      'One last thing. Report even when the amount feels \'too small\'. The ₦10,000 inspection fee is the scammer\'s bread and butter, and a paper trail across fifty small reports is often how one large case finally stands up.',
    ],
  },
];
