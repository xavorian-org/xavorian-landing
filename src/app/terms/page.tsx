import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalToc } from '@/components/LegalToc';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service – Xavorian Nigeria',
  description:
    'The Terms of Service governing the waitlist and pre-launch use of the Xavorian property marketplace in Nigeria, including verification limits, risk allocation, payments, liability limits, and dispute resolution.',
  path: '/terms',
});

const sections = [
  { id: 'sec-1', label: '1. Definitions & Interpretation' },
  { id: 'sec-2', label: '2. The Platform & Our Role' },
  { id: 'sec-3', label: '3. Eligibility, Accounts & Security' },
  { id: 'sec-4', label: '4. Verification: What It Is & Is Not' },
  { id: 'sec-5', label: '5. Payments & Financial Transactions' },
  { id: 'sec-6', label: "6. Acceptable Use: Dos & Don'ts" },
  { id: 'sec-7', label: '7. User Content & Intellectual Property' },
  { id: 'sec-8', label: '8. Assumption of Risk & Fraud Limits' },
  { id: 'sec-9', label: '9. Fraud Reports & Authorities' },
  { id: 'sec-10', label: '10. Transactions Outside Platform' },
  { id: 'sec-11', label: '11. No Warranties' },
  { id: 'sec-12', label: '12. Limitation of Liability' },
  { id: 'sec-13', label: '13. Indemnification' },
  { id: 'sec-14', label: '14. Suspension & Termination' },
  { id: 'sec-15', label: '15. Dispute Resolution & Governing Law' },
  { id: 'sec-16', label: '16. Official Directory & Notices' },
];

export default function TermsPage() {
  return (
    <article className="container mx-auto py-12 sm:py-16">
      <header>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Legal Documentation
        </span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Terms of Service.
        </h1>
        <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>Effective Date: August 2026</span>
          <span>&bull;</span>
          <span>Version 2.1 &mdash; Pre-Launch Edition (Revised October 2026)</span>
          <span>&bull;</span>
          <span>Jurisdiction: Federal Republic of Nigeria</span>
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-foreground">
          Please read this carefully &mdash; Binding Legal Contract
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="font-semibold text-foreground">Take care with every transaction:</strong> Property
            transactions carry real risk, on or off the Platform. You must take reasonable precautions{' '}
            <a href="#sec-8" className="underline transition-colors hover:text-foreground">
              (Section 8)
            </a>
            .
          </li>
          <li>
            <strong className="font-semibold text-foreground">No guarantee against fraud:</strong> Verification is a
            good-faith screening process, not an assurance that any User, listing, or document is genuine{' '}
            <a href="#sec-4" className="underline transition-colors hover:text-foreground">
              (Section 4)
            </a>{' '}
            and{' '}
            <a href="#sec-8" className="underline transition-colors hover:text-foreground">
              (Section 8)
            </a>
            .
          </li>
          <li>
            <strong className="font-semibold text-foreground">Our liability is capped:</strong> At the greater of
            &#8358;50,000 or 70% of the fees you paid us in the prior 6 months, with indirect losses excluded only
            where the law allows{' '}
            <a href="#sec-12" className="underline transition-colors hover:text-foreground">
              (Section 12)
            </a>
            .
          </li>
          <li>
            <strong className="font-semibold text-foreground">Disputes:</strong> Individual claims, with arbitration
            only where a valid arbitration agreement exists, seated in the User&apos;s state or the property&apos;s
            state, under the Arbitration and Mediation Act 2023. Statutory rights to group or representative
            proceedings are preserved{' '}
            <a href="#sec-15" className="underline transition-colors hover:text-foreground">
              (Section 15)
            </a>
            .
          </li>
          <li>
            <strong className="font-semibold text-foreground">You indemnify us for your own conduct:</strong> You
            cover Xavorian and its team for reasonable losses directly caused by your material breach, fraud, false or
            infringing listings or documents, or unauthorised claims over property{' '}
            <a href="#sec-13" className="underline transition-colors hover:text-foreground">
              (Section 13)
            </a>
            .
          </li>
        </ul>
        <div className="mt-4 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground space-y-2">
          <p>
            These Terms of Service (these &quot;Terms&quot;) govern your access to and use of the Xavorian platform,
            including the waitlist, and all services of Xavorian Technology Company. By joining the waitlist, creating
            an account, or using any part of the Platform, you confirm that you have read, understood, and agree to be
            legally bound by these Terms, our Privacy Policy, and our Disclaimer, each incorporated here by reference.
          </p>
          <p className="font-semibold text-foreground">
            If you do not agree to these Terms, you must not join the waitlist, register, or use the Platform.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
        <LegalToc sections={sections} />

        <div className="space-y-8 text-sm leading-7 text-foreground/80">
        {/* Section 1 */}
        <section id="sec-1" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">1. DEFINITIONS AND INTERPRETATION</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">1.1 Definitions</h3>
          </div>
          <p>In these Terms, unless the context requires otherwise:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>“Xavorian”, “the Company”, “we”, “us”, “our” means Xavorian Technology Company (RC-9912416), a private limited liability company incorporated in the Federal Republic of Nigeria, founded by Ezeani Chukwuebuka, operating xavorian.com.</li>
            <li>“Platform” means the Xavorian website, applications, waitlist pages, APIs, tools, and features, and “Services” means the marketplace, listing, communication, verification, and payment-facilitation features provided through it.</li>
            <li>“User”, “you”, “your” means any person who accesses, joins the waitlist of, registers on, or uses the Platform, including a “Buyer” (seeking to purchase or rent property), a “Seller” (listing property for sale, rent, or lease), and an “Agent” (listing or marketing property on behalf of a Seller).</li>
            <li>“Listing” means any property advertisement published on the Platform by a Seller or Agent, and “Offer” means an expression of intent to purchase, rent, or lease made through the Platform, which binds no one unless the Users concerned execute separate written contractual documentation.</li>
            <li>“Transaction” means any negotiation, offer, agreement, payment, or dealing between Users in connection with a Listing, whether conducted on or off the Platform.</li>
            <li>“User Content” means any text, images, documents, listings, messages, reviews, or other material submitted to or through the Platform by a User.</li>
            <li>“Verification Processes” means Xavorian’s good-faith, risk-based screening procedures: (a) KYC identity gates checked against government-issued identity references; (b) the Bank-Name-Match Rule, under which payments are directed only to bank accounts whose account name matches the payee’s verified identity; (c) AI-assisted Document Audit; and (d) Human Review of flagged accounts, listings, and documents.</li>
            <li>“Verified Badge” means any “verified” status indicator on the Platform, which records only that a Verification Process was completed on a particular date. It is not a warranty of any kind.</li>
            <li>“Payment Processor” means Paystack and any other Central Bank of Nigeria licensed third-party payment provider through whom User payments are routed.</li>
            <li>“Waitlist” and “Pre-Launch Period” mean the early-access stage of the Platform described in Section 2.4.</li>
            <li>“Authorities” means the Nigeria Police Force, the Economic and Financial Crimes Commission (EFCC), the Independent Corrupt Practices Commission (ICPC), the courts, and any other competent Nigerian regulatory, investigative, or law-enforcement body.</li>
            <li>“Privacy Policy” and “Disclaimer” mean those documents as published on the Platform, and “Nigerian Law” means the laws of the Federal Republic of Nigeria, including the Federal Competition and Consumer Protection Act 2018, the Arbitration and Mediation Act 2023, the Nigeria Data Protection Act 2023, and the NDPR 2019.</li>
          </ul>
          <div>
            <h3 className="text-sm font-bold text-foreground">1.2 Interpretation</h3>
          </div>
          <p>In these Terms: headings are for convenience only; the singular includes the plural; “person” includes any legal entity; “including” means “including without limitation”; statute references include amendments and replacements; writing includes email; and the English version of these Terms prevails over any translation.</p>
        </section>

        {/* Section 2 */}
        <section id="sec-2" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">2. THE PLATFORM AND OUR ROLE</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">2.1 Marketplace Facilitator Only</h3>
          </div>
          <p>Xavorian operates a technology-enabled marketplace connecting independent Buyers, Sellers, and Agents of real property in Nigeria. Our role is that of a neutral technology facilitator, providing infrastructure through which Users discover one another, communicate, exchange Offers, and route payments through licensed Payment Processors. Any contract of sale, tenancy, lease, or agency is made solely between the Users concerned. Xavorian is not, and shall never be deemed, a party to any Transaction, and has no obligation to perform, enforce, or procure the performance of any User’s obligations.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">2.2 What Xavorian Is Not</h3>
          </div>
          <p>Xavorian is not, and does not act as:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>a real estate broker, estate agent, valuer, surveyor, or property developer;</li>
            <li>a lawyer or provider of legal, financial, investment, or tax advice;</li>
            <li>a bank or any other financial institution licensed by the Central Bank of Nigeria;</li>
            <li>an escrow agent, trustee, stakeholder, or custodian of User funds;</li>
            <li>an insurer or guarantor of any User, Listing, document, or Transaction; or</li>
            <li>the agent, partner, employer, or representative of any User.</li>
          </ul>
          <div>
            <h3 className="text-sm font-bold text-foreground">2.3 No Advice; No Endorsement</h3>
          </div>
          <p>Nothing on the Platform is real estate, legal, financial, or other professional advice. We do not independently verify ownership, condition, boundaries, title, encumbrances, zoning compliance, or pricing. Publication of a Listing and display of a Verified Badge are not endorsements of any User, property, or document.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">2.4 Pre-Launch and Waitlist Status</h3>
          </div>
          <p>The Platform is offered in an early-access, waitlist, pre-launch stage. You acknowledge and agree that: (a) joining the Waitlist creates no entitlement to an account, access, any feature, launch date, or level of service; (b) features may be added, changed, suspended, or withdrawn at any time, with or without notice, without liability; (c) the Platform may be unavailable, interrupted, or contain errors, and data may be lost or reset during the Pre-Launch Period; and (d) no representation is made that the Platform will proceed to general availability. You accept the heightened risks of using a pre-launch service.</p>
        </section>

        {/* Section 3 */}
        <section id="sec-3" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">3. ELIGIBILITY, ACCOUNTS AND SECURITY</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">3.1 Eligibility — 18+ Only</h3>
          </div>
          <p>The Platform is strictly for persons aged eighteen (18) years or older with full legal capacity to contract under Nigerian Law. By using the Platform you represent and warrant that you meet this requirement. Consistent with our Privacy Policy, we do not knowingly collect data from minors; any account found to belong to a person under 18 will be terminated and its data deleted. You may not use the Platform if you have previously been banned or if your use would violate any law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">3.2 Accurate Information</h3>
          </div>
          <p>You must provide accurate, current, and complete information at registration, during verification, and thereafter, and must promptly update it. Providing false, misleading, or stolen identity information is a material breach and may be a criminal offence under Nigerian Law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">3.3 One Account Per Person</h3>
          </div>
          <p>Each person or legal entity may maintain only one active account. You may not operate multiple accounts, transfer your account, or create any account to circumvent a suspension, ban, verification refusal, or other restriction.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">3.4 Account Security</h3>
          </div>
          <p>You are solely responsible for your login credentials and one-time passwords (OTPs) and for all activity under your account. Xavorian will never telephone, email, or message you to ask for your password, OTP, PIN, BVN, or NIN — any such request is impersonation; report it immediately to support@xavorian.com. Notify us without delay at support@xavorian.com or +234 805 637 3583 of any unauthorised account use; you remain responsible for account activity until we receive that notice and have reasonable opportunity to act. This does not apply to unauthorised use caused by Xavorian’s own failure to maintain reasonable security.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">3.5 Organisations</h3>
          </div>
          <p>If you use the Platform for a company, partnership, or other entity, you warrant that you are authorised to bind it, and “you” includes both you personally and that entity, which are jointly responsible for compliance.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">3.6 Verification-Gated Features</h3>
          </div>
          <p>Publishing Listings, making or receiving Offers, and receiving payouts are gated behind the Verification Processes. If you decline, withdraw from, or fail verification, those features stay unavailable, without liability to Xavorian.</p>
        </section>

        {/* Section 4 */}
        <section id="sec-4" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">4. VERIFICATION: WHAT IT IS AND WHAT IT IS NOT</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">4.1 What Our Screening Is</h3>
          </div>
          <p>Xavorian applies the Verification Processes defined in Section 1. These are good-faith, risk-based screening measures; they are not forensic investigations, audits, certifications, or law-enforcement checks.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">4.2 The Bank-Name-Match Rule</h3>
          </div>
          <p>Where the Platform facilitates a payment to a User, funds are directed only to a bank account whose registered account name matches the payee’s verified identity — never to third-party or differently named accounts. If a counterparty asks you to pay an account that does not exactly match their verified name, treat that as a serious red flag: decline and report it under Section 9. Paying a name-mismatched or third-party account is a breach of these Terms and is entirely at your own risk and cost.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">4.3 What the Verified Badge Means</h3>
          </div>
          <p>A Verified Badge is solely a record that a screening process was completed on a particular date. It is not a certificate, guarantee, endorsement, or warranty of identity, good character, solvency, title, ownership, authority to sell, document authenticity, legality, property condition, or value.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">4.4 The Limits of Verification</h3>
          </div>
          <p>Xavorian’s Verification Processes are subject to limitations. Artificial intelligence and automated systems may produce errors; identity documents may be stolen or forged; databases may be incomplete or outdated; and verification results may become inaccurate after the date of verification. A User who passes verification may nevertheless engage in fraudulent or unlawful conduct. Xavorian does not guarantee that its Verification Processes will detect every instance of fraud, impersonation, forgery or misrepresentation. However, nothing in this Section excludes or limits liability arising from Xavorian’s own breach of contract, negligence, misleading representation or other conduct to the extent such liability cannot lawfully be excluded or limited under applicable Nigerian law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">4.5 Your Duty of Independent Due Diligence</h3>
          </div>
          <p>Before paying any money or signing any document you must independently: physically inspect the property; engage a qualified property lawyer to search the relevant land registry and, for corporate Sellers, the Corporate Affairs Commission; engage a licensed surveyor where boundaries matter; and meet the counterparty and inspect original title and identity documents. Relying on a Verified Badge instead of independent due diligence is at your own risk.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">4.6 A Process, Not an Assurance</h3>
          </div>
          <p>Verification at Xavorian is a process, not an assurance. By using the Platform you expressly acknowledge that you understand this distinction and that no screening outcome, badge, or verification result shifts any risk of fraud away from you. This Section forms part of the allocation of risk in Sections 8, 11, and 12.</p>
        </section>

        {/* Section 5 */}
        <section id="sec-5" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">5. PAYMENTS AND FINANCIAL TRANSACTIONS</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.1 How Payments Move</h3>
          </div>
          <p>Payments connected with the Platform move directly between Users through our third-party Payment Processor, Paystack, or another Central Bank of Nigeria licensed provider. Your payment relationship is with the Payment Processor and your counterparty — not with Xavorian.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.2 Xavorian Is Not a Financial Institution</h3>
          </div>
          <p>Xavorian is not a bank, not a payment service provider, and not licensed by the Central Bank of Nigeria as any kind of financial institution; it does not hold, pool, control, or take possession of User funds and provides no escrow, trustee, or safekeeping service — any holding of funds pending a Transaction is performed solely by the Payment Processor under its own licence, consistent with our Disclaimer.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.3 Bank-Name-Match Payouts</h3>
          </div>
          <p>All payouts facilitated through the Platform go only to bank accounts whose account name matches the payee’s verified identity. You must never request, and must refuse, payment to any account not carrying the exact name of the verified counterparty. Xavorian may decline or delay facilitating any payout that fails the Bank-Name-Match Rule, and may ask the Payment Processor to reverse it where the Payment Processor’s terms permit, without liability except where required by law or caused by Xavorian’s own breach or negligence.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.4 Processor Terms Apply</h3>
          </div>
          <p>Payments are subject to the applicable Payment Processor’s terms, transaction limits, compliance requirements and anti-money-laundering controls, which Users must comply with where applicable. Xavorian is not responsible for acts or omissions of a Payment Processor or bank that are outside Xavorian’s reasonable control, except to the extent a loss results from Xavorian’s own breach of contract, negligence, misleading representation or other conduct for which it is legally responsible. Xavorian will provide reasonable assistance in referring payment-related complaints to the relevant Payment Processor where the complaint concerns a payment made through the Platform and such assistance falls within Xavorian’s role. Nothing in this Section guarantees a refund, reversal or recovery of funds.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.5 Fees</h3>
          </div>
          <p>Where Xavorian charges a fee for a paid feature or transaction service, the applicable fee shall be disclosed to the User before the User commits to the service. Fees may be non-refundable once the relevant service has commenced or the transaction has completed, except where a refund, cancellation or other remedy is required by applicable Nigerian law or where Xavorian agrees otherwise in writing.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.6 No Guarantee of Completion; Records</h3>
          </div>
          <p>Consistent with our Disclaimer, Xavorian does not guarantee that any payment or Transaction will complete; transactions may fail or be reversed because of verification failures, document issues, bank or processor outages, disputes, or regulatory restrictions, and Xavorian is not responsible for compensating any User for a failed, delayed, reversed, or incomplete Transaction, except where required by law or caused by Xavorian’s own breach or negligence. In any platform-side review, the Payment Processor’s records are the primary record of payment events.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">5.7 Chargebacks and Taxes</h3>
          </div>
          <p>Chargebacks, reversals, and recalls are matters between you, your counterparty, your bank, and the Payment Processor; you bear the risk of any chargeback or reversal affecting a payment you made or received, and must cooperate in good faith with any processor investigation. You are solely responsible for determining, declaring, and paying all taxes, duties, and levies arising from your Transactions — including value added tax, stamp duties, capital gains tax, withholding tax, and state or local levies. Xavorian provides no tax advice.</p>
        </section>

        {/* Section 6 */}
        <section id="sec-6" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">6. ACCEPTABLE USE: OUR DOS AND DON’TS</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">6.1 What You Must Do</h3>
          </div>
          <ul className="list-disc space-y-2 pl-5">
            <li>Independently verify every property, party, document, and account name before paying.</li>
            <li>Physically inspect property and use a qualified property lawyer and, where needed, a licensed surveyor.</li>
            <li>Pay only through Platform payment flows, and only to accounts passing the Bank-Name-Match Rule.</li>
            <li>Keep negotiations and communications on the Platform so a record exists.</li>
            <li>Keep complete evidence of every Transaction — receipts, messages, account-name confirmations, signed agreements.</li>
            <li>Report suspected fraud or pressure tactics to support@xavorian.com immediately.</li>
            <li>Protect your credentials, OTPs, and identity documents.</li>
          </ul>
          <div>
            <h3 className="text-sm font-bold text-foreground">6.2 What You Must Not Do</h3>
          </div>
          <p>You must not, directly or indirectly:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>commit fraud, scams, advance-fee schemes, or misrepresentation of any kind, in breach of the Advance Fee Fraud and Other Fraud Related Offences Act, the Cybercrimes (Prohibition, Prevention, etc.) Act 2015, or any other law;</li>
            <li>pressure, persuade, or trick any User into negotiating, paying, or completing a transaction outside the Platform;</li>
            <li>pay, or request payment to, any account whose name does not exactly match the verified payee;</li>
            <li>ask for, share, or misuse any OTP, password, PIN, BVN, or NIN;</li>
            <li>publish fake, cloned, misleading, or duplicated Listings, or list property you do not own or lack authority to list;</li>
            <li>forge, alter, or submit false title, identity, or supporting documents;</li>
            <li>impersonate any person or entity, or misrepresent your identity, authority, property condition, title, or price;</li>
            <li>use the Platform for money laundering, terrorism financing, or sanctions evasion;</li>
            <li>scrape, crawl, harvest, or bulk-collect Platform data, or use bots or automated access to it, without our prior written consent, or probe, breach, or circumvent our security, monitoring, or verification controls;</li>
            <li>harass, threaten, defame, or abuse any User or member of the Xavorian team; or</li>
            <li>interfere with the operation, integrity, or performance of the Platform.</li>
          </ul>
          <div>
            <h3 className="text-sm font-bold text-foreground">6.3 Consequences</h3>
          </div>
          <p>Any violation of this Section 6 is a material breach, entitling Xavorian to suspend or permanently terminate your account under Section 14, remove Listings and User Content, preserve evidence, and refer the matter to the Authorities under Section 9 — without prejudice to any other right or remedy, and subject to Section 14.1.</p>
        </section>

        {/* Section 7 */}
        <section id="sec-7" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">7. USER CONTENT AND INTELLECTUAL PROPERTY</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">7.1 Your Content; Your Warranties</h3>
          </div>
          <p>You retain ownership of your User Content. By submitting User Content you represent and warrant that you own it or have all rights needed to submit it; that it is accurate, lawful, and not misleading; and that its use on the Platform will not infringe the intellectual property, privacy, or other rights of any person.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">7.2 Licence to Xavorian</h3>
          </div>
          <p>You grant Xavorian a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, format, display, publish and distribute your User Content to the extent reasonably necessary to operate, secure, maintain and improve the Platform and provide its Services. Xavorian may authorise its service providers to use User Content for these purposes, subject to appropriate contractual safeguards. Use of User Content for advertising or promotional purposes unrelated to the ordinary operation of the Platform shall be subject to applicable intellectual property and data protection laws and any additional notice or consent required by law. The licence shall cease to apply to deleted content except to the extent continued retention or use is reasonably necessary for transaction records, legal compliance, dispute resolution, security or routine backups. Retained content shall remain subject to applicable law and the Privacy Policy.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">7.3 Moderation</h3>
          </div>
          <p>Xavorian may, but is not obliged to, review, refuse, remove, or restrict any User Content, including Listings and reviews we reasonably believe violate these Terms or applicable law, infringe rights, or present a fraud risk. Moderation creates no liability and no duty to monitor.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">7.4 Xavorian’s Intellectual Property</h3>
          </div>
          <p>The Platform — its software, code, algorithms, design, text, graphics, trademarks, and logos — is the exclusive property of Xavorian or its licensors, protected by Nigerian and international law. Except for the limited right to use the Platform in compliance with these Terms, no right, title, or interest in the Platform passes to you.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">7.5 Restrictions</h3>
          </div>
          <p>You may not copy, republish, frame, scrape, harvest, data-mine, modify, create derivative works from, reverse engineer, or commercially exploit any part of the Platform or its content (other than your own User Content) without Xavorian’s prior written consent.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">7.6 Infringement Notices</h3>
          </div>
          <p>To report content you believe infringes your copyright, trademark, or other intellectual property right, email legal@xavorian.com identifying: (a) the right claimed; (b) the content and its location on the Platform; (c) your contact details; (d) a good-faith statement that the use is unauthorised; and (e) a good-faith declaration that the notice is accurate and that you own or are authorised to act for the right. Xavorian may remove or disable the content and notify the posting User, who may send a reasoned counter-notice to the same address. Knowing misrepresentation in a notice or counter-notice breaches these Terms.</p>
        </section>

        {/* Section 8 */}
        <section id="sec-8" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">8. ASSUMPTION OF RISK AND NO GUARANTEE AGAINST FRAUD</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">8.1 No Guarantee Against Fraud</h3>
          </div>
          <p>Xavorian does not represent or guarantee that fraud, scams, misrepresentation or other unlawful conduct will never occur on, through or in connection with the Platform. Users should exercise appropriate caution and conduct independent due diligence before entering into property transactions. Nothing in this Section means that every loss connected with fraud is automatically the User’s responsibility, or excludes liability for which Xavorian is legally responsible under applicable Nigerian law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">8.2 Assumption of Transaction Risks</h3>
          </div>
          <p>Users acknowledge that property transactions and dealings with other Users may involve risks, including advance-fee fraud, impersonation, forged documents, competing ownership claims, payment redirection and misleading property listings. Users are responsible for taking reasonable precautions appropriate to their transactions, including verifying relevant documents, the identity and authority of counterparties, and the ownership and legal status of a property. This assumption of risk does not exclude or limit any liability that cannot lawfully be excluded or transferred under applicable Nigerian law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">8.3 Verification Is a Process, Not an Assurance</h3>
          </div>
          <p>Users acknowledge that the KYC identity checks, Bank-Name-Match Rule, Document Audit, Human Review and Verified Badges described in Section 4 are screening measures and do not guarantee identity, title, ownership, authenticity, legality or property value. Users should not rely solely on a verification result when deciding whether to pay money or enter into a property transaction. The limitations of these processes do not exclude liability arising from Xavorian’s own legally actionable conduct or any obligation that cannot lawfully be excluded.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">8.4 Liability for Third-Party Fraud</h3>
          </div>
          <p>To the maximum extent permitted by applicable Nigerian law, Xavorian shall not be liable for losses arising solely from the independent fraudulent, deceptive, dishonest or criminal conduct of a User or third party where those losses are not attributable to any act or omission for which Xavorian is legally responsible.</p>
          <p>This applies whether the conduct occurs on the Platform, off the Platform, or partly on and partly off it, and whether or not the parties first met or were introduced through the Platform. Nothing in this Section excludes or limits liability arising from Xavorian’s own breach of contract, negligence, misleading representation or other conduct to the extent such liability cannot lawfully be excluded or limited. This Section shall be read together with Sections 11 and 12.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">8.5 Your Confirmations</h3>
          </div>
          <p>By using the Platform, you confirm that:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>you understand Xavorian provides a marketplace and screening tools — not protection, insurance, or guarantees;</li>
            <li>you will conduct independent professional due diligence before paying money or signing documents;</li>
            <li>no badge, screening result, or Platform publication has substituted for your own enquiries.</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section id="sec-9" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">9. FRAUD REPORTS, INVESTIGATIONS AND AUTHORITIES</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">9.1 Reporting</h3>
          </div>
          <p>Report suspected fraud, impersonation, or criminal conduct in connection with Platform activity immediately to support@xavorian.com, with all available evidence. You should also report crime directly to the Nigeria Police Force or the EFCC.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">9.2 Review and Investigation</h3>
          </div>
          <p>Where alleged fraud is reported in connection with Platform activity, Xavorian may assess the report, review available information, preserve relevant records and refer the matter to or cooperate with the Nigeria Police Force, the EFCC, the ICPC or another competent authority, as appropriate and permitted by law. The scope and timing of any review will depend on the nature of the report, the evidence available, the risk of further harm and applicable legal requirements. Xavorian does not guarantee that every report will result in an investigation, recovery of funds or a particular outcome. Nothing in this Section excludes a legal obligation applicable to Xavorian or makes Xavorian responsible for the outcome of an investigation conducted by a competent authority.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">9.3 Preservation, Referral and Cooperation</h3>
          </div>
          <p>Xavorian may preserve relevant account records, verification results, messages, payment logs and documents where reasonably necessary for fraud prevention, security, dispute resolution or compliance with applicable law. Xavorian may disclose relevant information to competent authorities where legally permitted or required, subject to the Nigeria Data Protection Act 2023 and other applicable legal requirements. Xavorian shall comply with lawful requests, court orders and regulatory demands. Personal data shall be accessed, retained and disclosed only on a lawful basis and to the extent reasonably necessary for the relevant purpose.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">9.4 No Recovery Service; No Guaranteed Compensation</h3>
          </div>
          <p>Xavorian is not an insurer, law-enforcement agency or funds-recovery service and does not guarantee the recovery of money lost through fraud. Investigation and recovery may require action by the relevant authorities, financial institutions, payment providers or courts.</p>
          <p>Nothing in this Section guarantees compensation, a refund or recovery of funds. However, it does not exclude any refund obligation, contractual remedy or other liability for which Xavorian is legally responsible under applicable Nigerian law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">9.5 Monitoring Limitations</h3>
          </div>
          <p>Platform communications may be screened by automated systems or other measures for fraud indicators. Such monitoring may be incomplete and may not detect all fraudulent communications. Xavorian does not guarantee that monitoring will prevent or detect every instance of fraud. Nothing in this Section creates a monitoring obligation beyond those expressly undertaken by Xavorian or imposed by applicable law, or excludes liability for a breach of an obligation that Xavorian is legally required to perform.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">9.6 False and Malicious Reports</h3>
          </div>
          <p>You must not make reports you know are false, or that are made maliciously to harass a counterparty or gain leverage in a dispute. Knowingly false or malicious reporting is a material breach, and Xavorian’s reasonable costs of handling it may be recoverable from you. Reports made honestly and in good faith are never a breach, even if they turn out to be mistaken.</p>
        </section>

        {/* Section 10 */}
        <section id="sec-10" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">10. TRANSACTIONS OUTSIDE THE PLATFORM</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">10.1 Transactions Outside Our Control</h3>
          </div>
          <p>Communications, negotiations, inspections, payments and transactions conducted wholly outside the Platform may fall outside Xavorian’s operational controls and available transaction records, even where the parties first met or were introduced through Xavorian. Xavorian is not ordinarily responsible for the independent conduct of Users in such transactions, subject to any liability or obligation arising from Xavorian’s own conduct or imposed by applicable Nigerian law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">10.2 Platform Protections Do Not Travel</h3>
          </div>
          <p>The KYC identity gates, the Bank-Name-Match Rule, the Document Audit, Human Review, message monitoring, and Transaction records apply only to activity on the Platform. Once any part of a dealing moves off-Platform, those protections cease; a Verified Badge confers no protection on any off-Platform conduct or transaction.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">10.3 Pressure to Move Off-Platform</h3>
          </div>
          <p>Pressure from any User to take negotiations, inspections, or payments off the Platform is a recognised fraud indicator and a breach of these Terms by the User applying it. If you proceed off-Platform anyway, Xavorian’s controls and records will not be available to you, and Xavorian is not ordinarily responsible for any resulting loss, subject to Sections 8.4 and 12.8.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">10.4 Assistance for Off-Platform Dealings</h3>
          </div>
          <p>Xavorian is not ordinarily required to negotiate, mediate or complete transactions conducted outside the Platform and may be unable to provide records or transaction controls relating to such dealings. Where reasonably appropriate, Xavorian may review reports of off-platform fraud and preserve or disclose relevant records in accordance with applicable law and its Privacy Policy. Nothing in this Section excludes any liability or obligation that Xavorian cannot lawfully exclude, including liability arising from its own conduct or representations.</p>
        </section>

        {/* Section 11 */}
        <section id="sec-11" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">11. NO WARRANTIES</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">11.1 “As Is” and “As Available”</h3>
          </div>
          <p>Subject to applicable Nigerian law, the Platform and Services are provided on an “as is” and “as available” basis. Xavorian does not guarantee uninterrupted or error-free operation, continuous availability, or the accuracy or completeness of information supplied by Users or third parties. Except as expressly stated in these Terms or required by applicable law, Xavorian makes no warranty that the Platform will meet every User’s requirements or that every Listing, document, User or Verification Process will be accurate, reliable, complete or authentic. Nothing in this Section excludes any statutory consumer right or other liability that cannot lawfully be excluded or limited.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">11.2 Listings Not Warranted</h3>
          </div>
          <p>Except as expressly stated in these Terms, and consistent with the Property Listings Disclaimer, Xavorian does not warrant the accuracy or authenticity of any Listing and does not independently verify ownership, physical condition, boundaries or survey accuracy, title clarity, encumbrances or liens, zoning or planning compliance, building-code compliance, environmental conditions, or pricing. Sellers are solely responsible for their Listings and documents.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">11.3 Users and Third Parties</h3>
          </div>
          <p>Xavorian gives no warranty for the conduct, identity, solvency, or performance of any User, and none for any third party on which the Platform depends, including Payment Processors, identity-verification partners, banks, telecommunications, or electricity providers.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">11.4 Non-Excludable Rights</h3>
          </div>
          <p>Nothing in this Section excludes any warranty, condition, or consumer right that cannot lawfully be excluded under applicable Nigerian Law, including non-waivable rights under the Federal Competition and Consumer Protection Act 2018, and this Section is subject to the saver in Section 12.8.</p>
        </section>

        {/* Section 12 */}
        <section id="sec-12" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">12. LIMITATION OF LIABILITY</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.1 Exclusion of Indirect Damages</h3>
          </div>
          <p>To the maximum extent permitted by applicable Nigerian law, Xavorian shall not be liable for indirect or consequential loss, or for loss of anticipated profits, revenue, business opportunities, goodwill or business interruption, where such loss is legally excludable. This exclusion shall not automatically apply to direct losses merely because they arise from a property transaction, a User’s conduct or a third party’s actions. Nothing in this Section excludes liability that cannot lawfully be excluded or limited.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.2 Aggregate Liability Cap</h3>
          </div>
          <p>To the maximum extent permitted by applicable Nigerian law, Xavorian’s total aggregate liability to a User for claims arising out of or in connection with these Terms, the Platform or the Services shall not exceed the greater of: (a) seventy per cent (70%) of the total fees actually paid by the affected User directly to Xavorian during the six (6) months immediately preceding the event giving rise to the claim; or (b) ₦50,000 (fifty thousand naira). This limitation applies only to liability that may lawfully be limited. It shall not exclude or reduce liability for matters identified in Section 12.8 or otherwise render a non-waivable statutory right ineffective. The absence of fees paid by a User shall not, by itself, extinguish liability that cannot lawfully be excluded.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.3 Liability for Third-Party Fraud</h3>
          </div>
          <p>To the maximum extent permitted by applicable Nigerian law, Xavorian shall not be liable for losses arising solely from the independent fraudulent, deceptive or criminal conduct of a User or third party where those losses are not attributable to any act or omission for which Xavorian is legally responsible. This exclusion applies whether the conduct occurs on the Platform, off the Platform or partly on and partly off it. Nothing in this Section excludes liability arising from Xavorian’s own conduct to the extent such liability cannot lawfully be excluded or limited.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.4 Basis of the Bargain; Scope</h3>
          </div>
          <p>The limitations in this Section 12, to the extent permitted by applicable Nigerian law: (a) may also be relied on by Xavorian’s officers, employees, agents, and contractors; (b) apply to every theory of liability — contract, tort (including negligence), statute, equity, or otherwise; and (c) reflect the allocation of risk between you and Xavorian. They remain subject to Section 12.8.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.5 Individual Claims and Representative Proceedings</h3>
          </div>
          <p>Subject to applicable Nigerian law, a User may pursue an individual claim arising under these Terms. Nothing in this Section prevents a User from exercising a statutory right to bring or participate in representative, collective, consolidated or other proceedings where such a right cannot lawfully be excluded. Any restriction on the joinder or consolidation of claims shall apply only to the extent permitted by applicable law. This Section shall be read consistently with Sections 15.3 and 15.4.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.6 Limitation Periods</h3>
          </div>
          <p>Any claim arising out of or in connection with these Terms, the Platform or the Services shall be commenced within the limitation period prescribed by applicable Nigerian law. The dispute-notice procedure in Section 15.1 is intended to facilitate amicable resolution and shall not, by itself, shorten a mandatory statutory limitation period, extinguish a non-waivable right or prevent a party from taking a step necessary to preserve a claim.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.7 Remedies</h3>
          </div>
          <p>Subject to applicable Nigerian law, the remedies available to a party shall be determined by the applicable dispute-resolution procedure and the law governing the claim. Nothing in these Terms restricts a User from seeking interim, injunctive or other relief from a competent court where legally available. Any restriction on collective or representative relief shall apply only to the extent permitted by law. Xavorian may also seek urgent interim or protective relief from a competent court where reasonably necessary to protect its intellectual property, confidential information or other legally protectable interests.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">12.8 Non-Excludable Liability</h3>
          </div>
          <p>Nothing in these Terms excludes or limits liability to the extent that such exclusion or limitation is prohibited by applicable Nigerian law, including liability for fraud or fraudulent misrepresentation and any non-waivable consumer rights or statutory obligations. All exclusions and limitations in Sections 8, 10, 11 and 12 shall be interpreted subject to this Section and shall apply only to the extent legally permitted.</p>
        </section>

        {/* Section 13 */}
        <section id="sec-13" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">13. INDEMNIFICATION</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">13.1 Your Indemnity</h3>
          </div>
          <p>To the extent permitted by applicable Nigerian law, you agree to indemnify Xavorian and its officers, employees, agents and contractors against reasonable losses, liabilities, damages and legal costs arising directly from:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>(a) your material breach of these Terms;</li>
            <li>(b) your fraud, wilful misconduct or unlawful use of the Platform;</li>
            <li>(c) User Content, Listings or documents submitted by you that infringe third-party rights or are materially false or misleading;</li>
            <li>(d) your unauthorised representation that you own, control or have authority to advertise, sell, lease or let a property; or</li>
            <li>(e) your violation of applicable law or third-party rights in connection with your use of the Platform. The indemnity applies only to the extent the relevant loss is attributable to the conduct described above. It does not require you to indemnify Xavorian for losses to the extent caused by Xavorian’s own breach of contract, negligence, fraud or other liability that cannot lawfully be transferred to you.</li>
          </ul>
          <div>
            <h3 className="text-sm font-bold text-foreground">13.2 Procedure</h3>
          </div>
          <p>Xavorian shall give you reasonably prompt notice of any claim for which indemnification is sought, together with sufficient information to understand the nature of the claim, subject to applicable legal and security restrictions. Xavorian may coordinate the defence of an indemnified claim, provided that you are given a reasonable opportunity to participate where your interests may be affected. No settlement that imposes a payment obligation, admission of liability or continuing obligation on you shall be entered into on your behalf without your prior written consent. You shall provide reasonable cooperation in the defence of the claim. Recoverable legal costs must be reasonable and directly related to the indemnified claim.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">13.3 Survival</h3>
          </div>
          <p>This indemnity is a continuing obligation and survives suspension or termination of your account and of these Terms.</p>
        </section>

        {/* Section 14 */}
        <section id="sec-14" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">14. SUSPENSION AND TERMINATION</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">14.1 By Xavorian</h3>
          </div>
          <p>Xavorian may suspend, restrict or terminate an account, Listing or Platform feature where reasonably necessary because of a material breach of these Terms, suspected fraud, security risks, unlawful conduct, a credible risk of harm to Users or a legal or regulatory requirement. Where practicable and lawful, Xavorian shall notify the affected User of the reason for the action and provide an appropriate opportunity to respond or request a review. Immediate suspension or termination may occur where reasonably necessary to prevent suspected fraud, protect Users, secure the Platform, preserve evidence or comply with a lawful direction. Suspension or termination shall not extinguish accrued obligations or relieve Xavorian of applicable legal obligations concerning payments, refunds, personal data or pending contractual commitments.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">14.2 By You</h3>
          </div>
          <p>You may close your account at any time via support@xavorian.com. Closure takes effect once any outstanding Transactions, payment obligations, disputes, or investigations affecting your account have been resolved. This does not affect your rights under the Privacy Policy and Nigerian data protection law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">14.3 Effect of Termination</h3>
          </div>
          <p>On suspension or termination: your right to use the Platform ceases immediately; your Listings may be removed; and the licence in Section 7.2 continues only to the extent stated there. Termination does not relieve you of accrued obligations, of winding up pending Transactions through the Payment Processor, or of Sections 8 to 13. Post-termination data handling follows our Privacy Policy and legal retention requirements.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">14.4 Survival</h3>
          </div>
          <p>The following survive suspension or termination, together with any provision that by its nature is intended to survive: Sections 1, 2, 4, 5 (including unpaid fees), 6.3, 7, 8, 9, 10, 11, 12, 13, 14, and 15.</p>
        </section>

        {/* Section 15 */}
        <section id="sec-15" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">15. DISPUTE RESOLUTION, GOVERNING LAW AND GENERAL PROVISIONS</h2>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.1 Good-Faith Negotiation (30 Days)</h3>
          </div>
          <p>Before commencing formal proceedings, a party should, where reasonably practicable, send a written dispute notice describing the dispute and the relief sought. Notices to Xavorian shall be sent to legal@xavorian.com. The parties shall attempt in good faith to resolve the dispute through negotiation for thirty (30) days after receipt of the notice. This procedure shall not prevent a party from seeking urgent interim relief, complying with a legal deadline, preserving evidence or exercising a statutory right where delay could materially prejudice that right. Failure to complete negotiations shall not bar a claim where applicable law permits the claim to proceed.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.2 Mediation</h3>
          </div>
          <p>If a dispute is not resolved through negotiation, either party may refer it to mediation before a mutually agreed mediator. Unless the parties agree otherwise, mediation shall take place in the State in which the User initiating the complaint ordinarily resides or, where the dispute principally concerns a property transaction, in the State in which the relevant property is situated. The parties may agree to conduct mediation by video conference or other suitable remote means. Where the parties cannot agree on a mediator or practical arrangements for mediation, they may seek assistance from an appropriate mediation centre or other competent appointing body. Unless otherwise agreed, the mediator’s fees shall be shared equally, and each party shall bear its own professional costs, subject to applicable law or subsequent agreement.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.3 Arbitration</h3>
          </div>
          <p>Where the parties have entered into a valid and enforceable arbitration agreement covering the dispute, the dispute shall be referred to arbitration in accordance with the Arbitration and Mediation Act 2023 and other applicable Nigerian law.</p>
          <p>Unless the parties agree otherwise, the seat of arbitration shall be in the State in which the User initiating the claim ordinarily resides or, where the dispute principally concerns a property transaction, in the State in which the relevant property is situated. The parties may agree to conduct hearings remotely or at another mutually convenient location, provided that the agreed arrangements are consistent with applicable law and do not alter the legal seat unless the parties expressly agree to change it. The arbitration shall be conducted by a single arbitrator appointed by agreement of the parties or, failing agreement, in accordance with the applicable statutory procedure. The language shall be English. Nothing in this clause prevents a party from seeking interim relief from a competent court where legally available or excludes any statutory right that cannot lawfully be waived. Nothing in these Terms requires a User to submit a dispute to arbitration unless that User has separately agreed in writing to do so.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.4 Court Proceedings and Statutory Remedies</h3>
          </div>
          <p>A party may bring a claim before a competent court where the claim falls within that court’s subject-matter and territorial jurisdiction and where proceedings are permitted under applicable Nigerian law. Nothing in these Terms confers jurisdiction on a court where none exists or prevents a User from exercising a statutory remedy that cannot lawfully be excluded. Any applicable arbitration agreement shall be given effect only to the extent valid and enforceable.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.5 Governing Law and Courts</h3>
          </div>
          <p>These Terms and any dispute arising out of or in connection with them shall be governed by the laws of the Federal Republic of Nigeria. Subject to any valid and enforceable arbitration agreement and applicable mandatory law, proceedings may be brought before a competent Nigerian court having jurisdiction over the subject matter and the parties.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.6 Entire Agreement; Order of Precedence</h3>
          </div>
          <p>These Terms, the Privacy Policy, and the Disclaimer together form the entire agreement between you and Xavorian concerning the Platform, superseding all prior understandings and representations, except that nothing in this Section excludes liability for fraud or fraudulent misrepresentation. In case of conflict, precedence is: first these Terms, then the Privacy Policy, then the Disclaimer. Guides, FAQs and other informational content on the Platform are general information and, if they conflict with these Terms, these Terms prevail, subject to applicable consumer law.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.7 Amendments</h3>
          </div>
          <p>Xavorian may amend these Terms by posting the amended version on the Platform. For material changes, we will give at least fourteen (14) days’ notice by email or prominent Platform notice before they take effect. If you disagree, your sole remedy is to close your account before the effective date; continued use after it is acceptance, except where Nigerian law requires your fresh consent to the change, in which case we will ask for it. Amendments do not affect rights that accrued, or disputes already notified, before they take effect.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.8 Severability</h3>
          </div>
          <p>If any provision is held invalid, illegal, or unenforceable, it shall be modified to the minimum extent needed to make it enforceable while preserving its intent — or, failing that, severed — and the rest of these Terms continues in full force.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.9 No Waiver</h3>
          </div>
          <p>No failure or delay by Xavorian in exercising any right or remedy is a waiver of it, and no single or partial exercise precludes any further exercise of that or any other right or remedy.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.10 Assignment</h3>
          </div>
          <p>Xavorian may assign or transfer these Terms and its rights and obligations to any person, including in a merger, acquisition, reorganisation, or asset sale, with notice to you. You may not assign or transfer these Terms or any rights under them without Xavorian’s prior written consent; any purported transfer without consent is void.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.11 Force Majeure</h3>
          </div>
          <p>Xavorian is not liable for failure or delay caused by events beyond its reasonable control, including electricity grid failures and outages, telecommunications or internet infrastructure disruption, fuel scarcity, strikes, civil commotion, epidemics, acts of government or regulators, outages of Payment Processors or verification partners that Xavorian could not reasonably have prevented, fire, and flood. Obligations are suspended for the duration; if the event runs beyond ninety (90) consecutive days, either party may terminate the affected arrangements on written notice without liability.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.12 Notices</h3>
          </div>
          <p>Legal notices to Xavorian: legal@xavorian.com. Support: support@xavorian.com. Urgent matters: +234 805 637 3583. Notices to you go to your registered email or by Platform posting. An email notice is deemed received twenty-four (24) hours after sending, absent a delivery failure notification.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.13 Relationship; No Agency</h3>
          </div>
          <p>You and Xavorian are independent contractors. Nothing in these Terms creates any agency, partnership, joint venture, fiduciary, or employment relationship between you and Xavorian, and neither party may bind or contract in the other’s name.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.14 No Third-Party Beneficiaries</h3>
          </div>
          <p>These Terms benefit you and Xavorian only. Except for Xavorian’s officers, employees, agents and contractors, who may rely on Sections 12 and 13 to the extent stated there, no third party has any right to enforce any provision of these Terms.</p>
          <div>
            <h3 className="text-sm font-bold text-foreground">15.15 Pre-Launch Acknowledgement</h3>
          </div>
          <p>You acknowledge that the Platform is in an early-access, waitlist stage and that features may be added, changed, or withdrawn at any time without liability, as set out in Section 2.4.</p>
        </section>

        {/* Section 16 */}
        <section id="sec-16" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">16. OFFICIAL DIRECTORY AND NOTICES</h2>
          <div className="space-y-2 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
            <p><strong className="font-semibold text-foreground">Entity:</strong> Xavorian Technology Company (RC-9912416), incorporated in the Federal Republic of Nigeria</p>
            <p><strong className="font-semibold text-foreground">Founder:</strong> Ezeani Chukwuebuka</p>
            <p><strong className="font-semibold text-foreground">Legal &amp; Privacy Notices:</strong> <span className="font-semibold text-foreground">legal@xavorian.com</span> | <strong className="font-semibold text-foreground">Support:</strong> <span className="font-semibold text-foreground">support@xavorian.com</span></p>
            <p><strong className="font-semibold text-foreground">Telephone / WhatsApp:</strong> <span className="font-semibold text-foreground">+234 805 637 3583</span> | <strong className="font-semibold text-foreground">Website:</strong> <span className="font-semibold text-foreground">https://xavorian.com</span></p>
            <p><strong className="font-semibold text-foreground">Launch Focus (pre-launch):</strong> Lagos, Abuja, Benin City, Port Harcourt, and expanding across Nigeria.</p>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-6 text-center text-sm font-medium text-foreground">
            <p>By joining the waitlist, registering an account, submitting documents, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </div>
        </section>
        </div>
      </div>
    </article>
  );
}
