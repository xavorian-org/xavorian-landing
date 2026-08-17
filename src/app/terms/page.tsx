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
  { id: 'sec-8', label: '8. Assumption of Risk & Fraud' },
  { id: 'sec-9', label: '9. Fraud Reports & Authorities' },
  { id: 'sec-10', label: '10. Transactions Outside the Platform' },
  { id: 'sec-11', label: '11. No Warranties' },
  { id: 'sec-12', label: '12. Limitation of Liability' },
  { id: 'sec-13', label: '13. Indemnification' },
  { id: 'sec-14', label: '14. Suspension & Termination' },
  { id: 'sec-15', label: '15. Disputes, Law & General Provisions' },
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
          <span>Version 2.0 &mdash; Pre-Launch Edition</span>
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-foreground">
          Please read this carefully
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This is a binding legal contract. Before you join the waitlist or use the Platform, note the five
          most onerous clauses for you:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="font-semibold text-foreground">You assume all risk.</strong> Property
            transactions are at your sole risk, on or off the Platform{' '}
            <a href="#sec-8" className="underline transition-colors hover:text-foreground">(Section 8)</a>.
          </li>
          <li>
            <strong className="font-semibold text-foreground">No guarantee against fraud.</strong>{' '}
            Verification is a good-faith screening process, not an assurance that any User, listing, or
            document is genuine{' '}
            <a href="#sec-4" className="underline transition-colors hover:text-foreground">(Section 4)</a>{' '}
            and{' '}
            <a href="#sec-8" className="underline transition-colors hover:text-foreground">(Section 8)</a>.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Our liability is capped.</strong> At the lesser
            of fees you paid us in the prior 12 months or &#8358;50,000, with no indirect damages and a
            one-year time bar{' '}
            <a href="#sec-12" className="underline transition-colors hover:text-foreground">(Section 12)</a>.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Individual disputes only.</strong> Arbitration
            in Lagos under the Arbitration and Mediation Act 2023; class actions are waived{' '}
            <a href="#sec-15" className="underline transition-colors hover:text-foreground">(Section 15)</a>.
          </li>
          <li>
            <strong className="font-semibold text-foreground">You indemnify us.</strong> You cover Xavorian,
            its founder, and its team against claims arising from your conduct, listings, or documents{' '}
            <a href="#sec-13" className="underline transition-colors hover:text-foreground">(Section 13)</a>.
          </li>
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          This summary is for convenience only and does not override the full Terms below.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
        <LegalToc sections={sections} />

        <div className="space-y-8 text-sm leading-7 text-foreground/80">
          <section className="space-y-4">
          <p>
            These Terms of Service (these <strong className="font-semibold text-foreground">&quot;Terms&quot;</strong>)
            govern your access to and use of the Xavorian platform, including the waitlist, and all services
            of Xavorian Technology Company. By joining the waitlist, creating an account, or using any part
            of the Platform, you confirm that you have read, understood, and agree to be legally bound by
            these Terms, our Privacy Policy, and our Disclaimer, each incorporated here by reference.
          </p>
          <p>
            If you do not agree to these Terms, you must not join the waitlist, register, or use the Platform.
          </p>
        </section>

        <hr className="border-border" />

        {/* Section 1 */}
        <section id="sec-1" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            1. DEFINITIONS AND INTERPRETATION
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">1.1 Definitions</h3>
            <p className="mt-1">
              In these Terms, unless the context requires otherwise:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-foreground">
                  &quot;Xavorian&quot;, &quot;the Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;
                </strong>{' '}
                means Xavorian Technology Company, a private limited liability company incorporated in the
                Federal Republic of Nigeria, founded by Ezeani Chukwuebuka, operating xavorian.com.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Platform&quot;</strong> means the
                Xavorian website, applications, waitlist pages, APIs, tools, and features, and{' '}
                <strong className="font-semibold text-foreground">&quot;Services&quot;</strong> means the
                marketplace, listing, communication, verification, and payment-facilitation features provided
                through it.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;User&quot;, &quot;you&quot;, &quot;your&quot;</strong>{' '}
                means any person who accesses, joins the waitlist of, registers on, or uses the Platform,
                including a <strong className="font-semibold text-foreground">&quot;Buyer&quot;</strong>{' '}
                (seeking to purchase or rent property), a{' '}
                <strong className="font-semibold text-foreground">&quot;Seller&quot;</strong> (listing
                property for sale, rent, or lease), and an{' '}
                <strong className="font-semibold text-foreground">&quot;Agent&quot;</strong> (listing or
                marketing property on behalf of a Seller).
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Listing&quot;</strong> means any
                property advertisement published on the Platform by a Seller or Agent, and{' '}
                <strong className="font-semibold text-foreground">&quot;Offer&quot;</strong> means an
                expression of intent to purchase, rent, or lease made through the Platform, which binds no one
                unless the Users concerned execute separate written contractual documentation.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Transaction&quot;</strong> means any
                negotiation, offer, agreement, payment, or dealing between Users in connection with a Listing,
                whether conducted on or off the Platform.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;User Content&quot;</strong> means any
                text, images, documents, listings, messages, reviews, or other material submitted to or
                through the Platform by a User.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Verification Processes&quot;</strong>{' '}
                means Xavorian&apos;s good-faith, risk-based screening procedures: (a) KYC identity gates
                checked against government-issued identity references; (b) the{' '}
                <strong className="font-semibold text-foreground">Bank-Name-Match Rule</strong>, under which
                payments are directed only to bank accounts whose account name matches the payee&apos;s
                verified identity; (c) AI-assisted{' '}
                <strong className="font-semibold text-foreground">Document Audit</strong>; and (d){' '}
                <strong className="font-semibold text-foreground">Human Review</strong> of flagged accounts,
                listings, and documents.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Verified Badge&quot;</strong> means
                any &quot;verified&quot; status indicator on the Platform, which records only that a
                Verification Process was completed on a particular date. It is not a warranty of any kind.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Payment Processor&quot;</strong> means
                Paystack and any other Central Bank of Nigeria licensed third-party payment provider through
                whom User payments are routed.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Waitlist&quot;</strong> and{' '}
                <strong className="font-semibold text-foreground">&quot;Pre-Launch Period&quot;</strong> mean
                the early-access stage of the Platform described in Section 2.4.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Authorities&quot;</strong> means the
                Nigeria Police Force, the Economic and Financial Crimes Commission (EFCC), the Independent
                Corrupt Practices Commission (ICPC), the courts, and any other competent Nigerian regulatory,
                investigative, or law-enforcement body.
              </li>
              <li>
                <strong className="font-semibold text-foreground">&quot;Privacy Policy&quot;</strong> and{' '}
                <strong className="font-semibold text-foreground">&quot;Disclaimer&quot;</strong> mean those
                documents as published on the Platform, and{' '}
                <strong className="font-semibold text-foreground">&quot;Nigerian Law&quot;</strong> means the
                laws of the Federal Republic of Nigeria, including the Federal Competition and Consumer
                Protection Act 2018, the Arbitration and Mediation Act 2023, the Nigeria Data Protection Act
                2023, and the NDPR 2019.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">1.2 Interpretation</h3>
            <p className="mt-1">
              In these Terms: headings are for convenience only; the singular includes the plural;
              &quot;person&quot; includes any legal entity; &quot;including&quot; means &quot;including without
              limitation&quot;; statute references include amendments and replacements; writing includes email;
              the English version of these Terms prevails over any translation; and these Terms are not
              construed against Xavorian merely because Xavorian drafted them, you having had the opportunity
              to take independent legal advice before accepting them.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="sec-2" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            2. THE PLATFORM AND OUR ROLE
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">2.1 Marketplace Facilitator Only</h3>
            <p className="mt-1">
              Xavorian operates a technology-enabled marketplace connecting independent Buyers, Sellers, and
              Agents of real property in Nigeria.               Our role is that of a neutral technology
              facilitator, providing infrastructure through which Users discover one another, communicate,
              exchange Offers, and route payments through licensed Payment Processors. Any contract of sale,
              tenancy, lease, or agency is made solely between the Users concerned. Xavorian is not, and shall
              never be deemed, a party to any Transaction, and has no obligation to perform, enforce, or
              procure the performance of any User&apos;s obligations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">2.2 What Xavorian Is Not</h3>
            <p className="mt-1">Xavorian is not, and does not act as:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>a real estate broker, estate agent, valuer, surveyor, or property developer;</li>
              <li>a lawyer or provider of legal, financial, investment, or tax advice;</li>
              <li>a bank or any other financial institution licensed by the Central Bank of Nigeria;</li>
              <li>an escrow agent, trustee, stakeholder, or custodian of User funds;</li>
              <li>an insurer or guarantor of any User, Listing, document, or Transaction; or</li>
              <li>the agent, partner, employer, or representative of any User.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">2.3 No Advice; No Endorsement</h3>
            <p className="mt-1">
              Nothing on the Platform is real estate, legal, financial, or other professional advice. We do
              not independently verify ownership, condition, boundaries, title, encumbrances, zoning
              compliance, or pricing. Publication of a Listing and display of a Verified
              Badge are not endorsements of any User, property, or document.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">2.4 Pre-Launch and Waitlist Status</h3>
            <p className="mt-1">
              The Platform is offered in an early-access, waitlist, pre-launch stage. You acknowledge and
              agree that: (a) joining the Waitlist creates no entitlement to an account, access, any feature,
              launch date, or level of service; (b) features may be added, changed, suspended, or withdrawn at
              any time, with or without notice, without liability; (c) the Platform may be unavailable,
              interrupted, or contain errors, and data may be lost or reset during the Pre-Launch Period; and
              (d) no representation is made that the Platform will proceed to general availability. You accept
              the heightened risks of using a pre-launch service.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="sec-3" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            3. ELIGIBILITY, ACCOUNTS AND SECURITY
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.1 Eligibility — 18+ Only</h3>
            <p className="mt-1">
              The Platform is strictly for persons aged eighteen (18) years or older with full legal capacity
              to contract under Nigerian Law. By using the Platform you represent and warrant that you meet
              this requirement. Consistent with our Privacy Policy, we do not knowingly collect data from
              minors; any account found to belong to a person under 18 will be terminated and its data
              deleted. You may not use the Platform if you have previously been banned or if your use would
              violate any law.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.2 Accurate Information</h3>
            <p className="mt-1">
              You must provide accurate, current, and complete information at registration, during
              verification, and thereafter, and must promptly update it. Providing false, misleading, or
              stolen identity information is a material breach and may be a criminal offence under Nigerian
              Law.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.3 One Account Per Person</h3>
            <p className="mt-1">
              Each person or legal entity may maintain only one active account. You may not operate multiple
              accounts, transfer your account, or create any account to circumvent a suspension, ban,
              verification refusal, or other restriction.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.4 Account Security</h3>
            <p className="mt-1">
              You are solely responsible for your login credentials and one-time passwords (OTPs) and for all
              activity under your account. Xavorian will never telephone, email, or message you to ask for
              your password, OTP, PIN, BVN, or NIN — any such request is impersonation; report it immediately
              to xavoriansupport@gmail.com. Notify us without delay at xavoriansupport@gmail.com or
              +234 805 637 3583 of any unauthorised account use; you remain responsible for account activity
              until we receive that notice and have reasonable opportunity to act.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.5 Organisations</h3>
            <p className="mt-1">
              If you use the Platform for a company, partnership, or other entity, you warrant that you are
              authorised to bind it, and &quot;you&quot; includes both you personally and that entity, which
              are jointly responsible for compliance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.6 Verification-Gated Features</h3>
            <p className="mt-1">
              Publishing Listings, making or receiving Offers, and receiving payouts are gated behind the
              Verification Processes. If you decline, withdraw from, or fail verification, those features stay
              unavailable, without liability to Xavorian.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="sec-4" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            4. VERIFICATION: WHAT IT IS AND WHAT IT IS NOT
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">4.1 What Our Screening Is</h3>
            <p className="mt-1">
              Xavorian applies the Verification Processes defined in Section 1. These are good-faith,
              risk-based screening measures; they are not forensic investigations, audits, certifications, or
              law-enforcement checks.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">4.2 The Bank-Name-Match Rule</h3>
            <p className="mt-1">
              Where the Platform facilitates a payment to a User, funds are directed only to a bank account
              whose registered account name matches the payee&apos;s verified identity — never to third-party
              or differently named accounts. If a counterparty asks you to pay an account that does not
              exactly match their verified name, treat that as a serious red flag: decline and report it under
              Section 9. Paying a name-mismatched or third-party account is a breach of these Terms and is
              entirely at your own risk and cost.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">4.3 What the Verified Badge Means</h3>
            <p className="mt-1">
              A Verified Badge is solely a record that a screening process was completed on a particular date.
              It is <strong className="font-semibold text-foreground">not</strong> a certificate, guarantee,
              endorsement, or warranty of identity, good character, solvency, title, ownership, authority to
              sell, document authenticity, legality, property condition, or value.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">4.4 The Limits of Verification</h3>
            <p className="mt-1">
                You acknowledge that our Verification Processes are inherently fallible: AI systems
                can err or be deceived; identity documents can be stolen or forged well enough to
              defeat screening; databases consulted may be incomplete or outdated; verification reflects a
              point in time only; and a person who passed screening can still commit fraud.
              Xavorian makes no representation that any Verification Process will detect any particular fraud,
              and accepts no liability for any failure to detect fraud, impersonation, forgery, or
              misrepresentation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">4.5 Your Duty of Independent Due Diligence</h3>
            <p className="mt-1">
              Before paying any money or signing any document you must independently: physically inspect the
              property; engage a qualified property lawyer to search the relevant land registry and, for
              corporate Sellers, the Corporate Affairs Commission; engage a licensed surveyor where boundaries
              matter; and meet the counterparty and inspect original title and identity documents. Relying on
              a Verified Badge instead of independent due diligence is at your own risk.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">4.6 A Process, Not an Assurance</h3>
            <p className="mt-1">
              Verification at Xavorian is a{' '}
              <strong className="font-semibold text-foreground">process, not an assurance</strong>. By using
              the Platform you expressly acknowledge that you understand this distinction and that no
              screening outcome, badge, or verification result shifts any risk of fraud away from you. This
              Section forms part of the allocation of risk in Sections 8, 11, and 12.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="sec-5" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            5. PAYMENTS AND FINANCIAL TRANSACTIONS
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.1 How Payments Move</h3>
            <p className="mt-1">
              Payments connected with the Platform move directly between Users through our third-party Payment
              Processor, Paystack, or another Central Bank of Nigeria licensed provider. Your payment
              relationship is with the Payment Processor and your counterparty — not with Xavorian.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.2 Xavorian Is Not a Financial Institution</h3>
            <p className="mt-1">
              Xavorian is not a bank, not a payment service provider, and not licensed by the Central Bank of
              Nigeria as any kind of financial institution; it does not hold, pool, control, or take
              possession of User funds and provides no escrow, trustee, or safekeeping service — any holding
              of funds pending a Transaction is performed solely by the Payment Processor under its own
              licence, consistent with our Disclaimer.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.3 Bank-Name-Match Payouts</h3>
            <p className="mt-1">
              All payouts facilitated through the Platform go only to bank accounts whose account name matches
              the payee&apos;s verified identity. You must never request, and must refuse, payment to any
              account not carrying the exact name of the verified counterparty. Xavorian may decline, delay,
              or reverse any payout that fails the Bank-Name-Match Rule, without liability.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.4 Processor Terms Apply</h3>
            <p className="mt-1">
              Payments are subject to the Payment Processor&apos;s own terms, limits, and compliance and
              anti-money-laundering controls, which you agree to follow. Xavorian is not responsible for
              the acts, omissions, errors, delays, downtime, fees, failed payments, chargebacks, or decisions
              of any Payment Processor or bank.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.5 Fees</h3>
            <p className="mt-1">
              Where Xavorian charges a fee for a paid feature or transaction service, it is disclosed before
              you commit, and is non-refundable once the service period has commenced or the transaction has
              completed, except where a refund is required by applicable Nigerian Law.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.6 No Guarantee of Completion; Records</h3>
            <p className="mt-1">
              Consistent with our Disclaimer, Xavorian does not guarantee that any payment or Transaction will
              complete; transactions may fail or be reversed because of verification failures, document
              issues, bank or processor outages, disputes, or regulatory restrictions, and Xavorian is not
              responsible for compensating any User for a failed, delayed, reversed, or incomplete
              Transaction. In any platform-side review, the Payment Processor&apos;s records are the primary
              record of payment events.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">5.7 Chargebacks and Taxes</h3>
            <p className="mt-1">
              Chargebacks, reversals, and recalls are matters between you, your counterparty, your bank, and
              the Payment Processor; you bear the risk of any chargeback or reversal affecting a payment you
              made or received, and must cooperate in good faith with any processor investigation. You are
              solely responsible for determining, declaring, and paying all taxes, duties, and levies arising
              from your Transactions — including value added tax, stamp duties, capital gains tax, withholding
              tax, and state or local levies. Xavorian provides no tax advice.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="sec-6" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            6. ACCEPTABLE USE: OUR DOS AND DON&apos;TS
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">6.1 What You Must Do</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Independently verify every property, party, document, and account name before paying.</li>
              <li>Physically inspect property and use a qualified property lawyer and, where needed, a licensed surveyor.</li>
              <li>Pay only through Platform payment flows, and only to accounts passing the Bank-Name-Match Rule.</li>
              <li>Keep negotiations and communications on the Platform so a record exists.</li>
              <li>Keep complete evidence of every Transaction — receipts, messages, account-name confirmations, signed agreements.</li>
              <li>Report suspected fraud or pressure tactics to xavoriansupport@gmail.com immediately.</li>
              <li>Protect your credentials, OTPs, and identity documents.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">6.2 What You Must Not Do</h3>
            <p className="mt-1">You must not, directly or indirectly:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
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
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">6.3 Consequences</h3>
            <p className="mt-1">
              Any violation of this Section 6 is a material breach, entitling Xavorian to suspend or
              permanently terminate your account under Section 14, remove Listings and User Content,
              preserve evidence, and refer the matter to the Authorities under Section 9 — without prejudice
              to any other right or remedy, and without liability to you.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="sec-7" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            7. USER CONTENT AND INTELLECTUAL PROPERTY
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.1 Your Content; Your Warranties</h3>
            <p className="mt-1">
              You retain ownership of your User Content. By submitting User Content you represent and warrant
              that you own it or have all rights needed to submit it; that it is accurate, lawful, and not
              misleading; and that its use on the Platform will not infringe the intellectual property,
              privacy, or other rights of any person.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.2 Licence to Xavorian</h3>
            <p className="mt-1">
              You grant Xavorian a worldwide, non-exclusive, royalty-free, transferable, sublicensable licence
              to host, store, reproduce, adapt for formatting, display, publish, and distribute your User
              Content for the purposes of operating, securing, improving, and promoting the Platform. This
              licence ends when you delete the content, except where it has been shared with other Users in
              the ordinary course, forms part of a Transaction record, sits in routine backups, or must be
              retained by law — in which cases it continues for those residual purposes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.3 Moderation</h3>
            <p className="mt-1">
              Xavorian may, but is not obliged to, review, refuse, remove, or restrict any User Content,
              including Listings and reviews we reasonably believe violate these Terms or applicable law,
              infringe rights, or present a fraud risk. Moderation creates no liability and no duty to
              monitor.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.4 Xavorian&apos;s Intellectual Property</h3>
            <p className="mt-1">
              The Platform — its software, code, algorithms, design, text, graphics, trademarks, and logos —
              is the exclusive property of Xavorian or its licensors, protected by Nigerian and international
              law. Except for the limited right to use the Platform in compliance with these Terms, no right,
              title, or interest in the Platform passes to you.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.5 Restrictions</h3>
            <p className="mt-1">
              You may not copy, republish, frame, scrape, harvest, data-mine, modify, create derivative works
              from, reverse engineer, or commercially exploit any part of the Platform or its content (other
              than your own User Content) without Xavorian&apos;s prior written consent.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.6 Infringement Notices</h3>
            <p className="mt-1">
              To report content you believe infringes your copyright, trademark, or other intellectual
              property right, email xavorianlegal@gmail.com identifying: (a) the right claimed; (b) the
              content and its location on the Platform; (c) your contact details; (d) a good-faith statement
              that the use is unauthorised; and               (e) a good-faith declaration that the notice is accurate and
              that you own or are authorised to act for the right. Xavorian may remove or disable the content
              and notify the posting User, who may send a reasoned counter-notice to the same address. Knowing
              misrepresentation in a notice or counter-notice breaches these Terms.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="sec-8" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            8. ASSUMPTION OF RISK AND NO GUARANTEE AGAINST FRAUD
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.1 No Guarantee Against Fraud</h3>
            <div className="mt-2 rounded-2xl border border-border bg-muted p-6">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
                XAVORIAN DOES NOT REPRESENT, WARRANT, OR GUARANTEE THAT FRAUD, SCAMS, MISREPRESENTATION, OR
                OTHER UNLAWFUL CONDUCT WILL NOT OCCUR ON, THROUGH, OR IN CONNECTION WITH THE PLATFORM. ALL USE
                OF THE PLATFORM, AND ALL DEALINGS WITH ANY USER OR THIRD PARTY, ARE AT YOUR SOLE RISK.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.2 Express Assumption of Risk</h3>
            <p className="mt-1">
              You expressly and voluntarily assume all risks arising out of or in connection with
              property transactions and your use of the Platform, including: advance-fee fraud; impersonation
              of owners, agents, or Xavorian staff; forged, cloned, or fabricated title and identity
              documents; double sale of the same property; sale or letting of non-existent, encumbered, or
              dispute-bound property; land-grabbing and ownership-dispute schemes; rental and inspection-fee
              scams; payment redirection and account-name manipulation; and other criminal conduct, on the
              Platform or off it.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.3 Verification Is a Process, Not an Assurance</h3>
            <p className="mt-1">
              You confirm you have read Section 4 and expressly acknowledge that the KYC identity gates, the
              Bank-Name-Match Rule, the Document Audit, Human Review, and every Verified Badge are good-faith
              screening processes only; that AI and automated systems are fallible; and that no outcome of
              any Verification Process is a warranty or assurance of identity, title, ownership, authenticity,
              legality, or value. You assume the entire risk of any failure of any Verification Process.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.4 No Liability for Scams — On or Off the Platform</h3>
            <p className="mt-1">
              To the maximum extent permitted by applicable law, Xavorian shall not be liable for any loss,
              damage, harm, cost, or expense arising from the fraudulent, deceptive, dishonest, or criminal
              conduct of any User or any third party — whether it occurs on the Platform, through the
              Platform, off the Platform, or partly on and partly off it, and whether or not the parties first
              met or were introduced through the Platform. This Section operates with, and is given further
              effect by, Sections 11 and 12.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.5 Your Confirmations</h3>
            <p className="mt-1">By using the Platform, you confirm that:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>you understand Xavorian provides a marketplace and screening tools — not protection, insurance, or guarantees;</li>
              <li>you will conduct independent professional due diligence before paying money or signing documents;</li>
              <li>no badge, screening result, or Platform publication has substituted for your own enquiries.</li>
            </ul>
          </div>
        </section>

        {/* Section 9 */}
        <section id="sec-9" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            9. FRAUD REPORTS, INVESTIGATIONS AND AUTHORITIES
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.1 Reporting</h3>
            <p className="mt-1">
              Report suspected fraud, impersonation, or criminal conduct in connection with Platform activity
              immediately to xavoriansupport@gmail.com, with all available evidence. You should also report
              crime directly to the Nigeria Police Force or the EFCC.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.2 Discretionary Review and Investigation</h3>
            <p className="mt-1">
              Where alleged fraud is reported in connection with Platform activity, Xavorian may, at its sole
              discretion, review and investigate the report and, where it considers appropriate, preserve
              records and refer the matter to, or cooperate with, the Nigeria Police Force, the EFCC, the
              ICPC, or other competent Authorities. You agree that: (a) Xavorian has no obligation to
              investigate any report, reach any outcome, take any action, or act within any timeframe; (b)
              commencing, declining, or concluding any review or investigation creates no obligation,
              admission, concession, or liability on Xavorian&apos;s part; and (c) no review, investigation,
              or referral entitles you or any User to compensation, a refund, recovery of funds, or any
              particular outcome.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.3 Preservation, Referral and Cooperation</h3>
            <p className="mt-1">
              Where Xavorian considers it appropriate, it may preserve account records, verification results,
              messages, payment logs, and documents, and disclose relevant information to the Authorities as
              permitted by our Privacy Policy, the Nigeria Data Protection Act 2023, and the NDPR. Xavorian will comply with lawful requests, court orders, and regulatory
              demands.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.4 No Recovery Service; No Compensation</h3>
            <p className="mt-1">
              Xavorian is not an insurer, a law-enforcement agency, or a funds-recovery service. Investigating
              crime and recovering lost funds are matters for the Authorities and the courts. Nothing Xavorian
              does or omits under this Section 9 creates any duty to compensate you, and Xavorian has no
              liability for the outcome, speed, or conduct of any investigation, by Xavorian or any Authority.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.5 Monitoring Limitations</h3>
            <p className="mt-1">
              Platform communications may be screened by automated systems for fraud indicators but, as our
              Disclaimer states, monitoring is not comprehensive and may not detect all fraudulent
              communications; Xavorian undertakes no duty to monitor and accepts no liability for fraud that
              monitoring misses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.6 False and Malicious Reports</h3>
            <p className="mt-1">
              You must not make reports you know or ought reasonably to know are false, malicious, or made to
              harass a counterparty or gain leverage in a dispute. False or malicious reporting is a material
              breach, and Xavorian&apos;s reasonable costs of handling it are recoverable from you as a debt.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section id="sec-10" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            10. TRANSACTIONS OUTSIDE THE PLATFORM
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">10.1 Entirely Beyond Our Control</h3>
            <p className="mt-1">
              Any communication, negotiation, inspection, payment, or transaction that takes place wholly
              outside the Platform is entirely beyond Xavorian&apos;s control and responsibility,{' '}
              <strong className="font-semibold text-foreground">
                even if the parties first met or were introduced through Xavorian
              </strong>
              . Xavorian accepts no responsibility whatsoever for such dealings.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">10.2 Platform Protections Do Not Travel</h3>
            <p className="mt-1">
              The KYC identity gates, the Bank-Name-Match Rule, the Document Audit, Human Review, message
              monitoring, and Transaction records apply only to activity on the Platform. Once any part of a
              dealing moves off-Platform, those protections cease; a Verified Badge confers no protection on
              any off-Platform conduct or transaction.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">10.3 Pressure to Move Off-Platform</h3>
            <p className="mt-1">
              Pressure from any User to take negotiations, inspections, or payments off the Platform is a
              recognised fraud indicator and a breach of these Terms by the User applying it. If you proceed
              off-Platform anyway, the risk and any resulting loss are entirely yours.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">10.4 No Assistance for Off-Platform Dealings</h3>
            <p className="mt-1">
              Xavorian has no obligation to assist with, mediate, investigate, or provide records for
              off-Platform dealings, and, to the maximum extent permitted by applicable law, its liability for
              any off-Platform communication, negotiation, inspection, payment, or transaction is nil. Reports
              of off-Platform fraud may inform internal risk analysis without creating any duty to act.
            </p>
          </div>
        </section>

        {/* Section 11 */}
        <section id="sec-11" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">11. NO WARRANTIES</h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">11.1 &quot;As Is&quot; and &quot;As Available&quot;</h3>
            <div className="mt-2 rounded-2xl border border-border bg-muted p-6">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
                THE PLATFORM AND ALL SERVICES ARE PROVIDED STRICTLY &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot;, WITH ALL FAULTS, AND WITHOUT ANY WARRANTY OF ANY KIND, WHETHER EXPRESS,
                IMPLIED, OR STATUTORY, INCLUDING ANY WARRANTY OF MERCHANTABILITY, SATISFACTORY QUALITY,
                FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, NON-INFRINGEMENT, TITLE,
                SECURITY, OR AVAILABILITY, AND INCLUDING ANY WARRANTY THAT ANY LISTING, DOCUMENT, USER,
                VERIFICATION PROCESS, OR VERIFICATION RESULT IS ACCURATE, RELIABLE, COMPLETE, OR AUTHENTIC.
              </p>
            </div>
            <p className="mt-3">
              Xavorian does not warrant that the Platform will be uninterrupted, secure, or error-free; that
              defects will be corrected; that any Listing is genuine or any property exists, is available, or
              matches its description; that any User is who they claim to be or will perform; or that any
              Verification Process has detected or will detect any fraud.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">11.2 Listings Not Warranted</h3>
            <p className="mt-1">
              Consistent with the Property Listings Disclaimer, Xavorian does not warrant the accuracy or
              authenticity of any Listing and does not independently verify ownership, physical condition,
              boundaries or survey accuracy, title clarity, encumbrances or liens, zoning or planning
              compliance, building-code compliance, environmental conditions, or pricing. Sellers are solely
              responsible for their Listings and documents.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">11.3 Users and Third Parties</h3>
            <p className="mt-1">
              Xavorian gives no warranty for the conduct, identity, solvency, or performance of any User, and
              none for any third party on which the Platform depends, including Payment Processors,
              identity-verification partners, banks, telecommunications, or electricity providers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">11.4 Non-Excludable Rights</h3>
            <p className="mt-1">
              Nothing in this Section excludes any warranty, condition, or consumer right that cannot lawfully
              be excluded under applicable Nigerian Law, including non-waivable rights under the Federal
              Competition and Consumer Protection Act 2018, and this Section is subject to the saver in
              Section 12.8.
            </p>
          </div>
        </section>

        {/* Section 12 */}
        <section id="sec-12" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            12. LIMITATION OF LIABILITY
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.1 Exclusion of Indirect Damages</h3>
            <div className="mt-2 rounded-2xl border border-border bg-muted p-6">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, XAVORIAN SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND, OR
                FOR ANY LOST PROFITS, LOST REVENUE, LOST DATA, LOST OPPORTUNITY, LOSS OF GOODWILL, BUSINESS
                INTERRUPTION, OR COST OF SUBSTITUTE SERVICES, HOWSOEVER ARISING, EVEN IF XAVORIAN HAS BEEN
                ADVISED OF THEIR POSSIBILITY.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.2 Aggregate Liability Cap</h3>
            <div className="mt-2 rounded-2xl border border-border bg-muted p-6">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, XAVORIAN&apos;S TOTAL AGGREGATE LIABILITY TO
                YOU FOR ALL CLAIMS ARISING OUT OF OR IN CONNECTION WITH THESE TERMS, THE PLATFORM, OR THE
                SERVICES SHALL NOT EXCEED THE LESSER OF (A) THE TOTAL FEES ACTUALLY PAID BY YOU TO XAVORIAN IN
                THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B)
                &#8358;50,000 (FIFTY THOUSAND NAIRA). WHERE YOU HAVE PAID NO FEES TO XAVORIAN, XAVORIAN&apos;S
                TOTAL AGGREGATE LIABILITY TO YOU SHALL BE ZERO, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.3 No Liability for Scams</h3>
            <p className="mt-1">
              To the maximum extent permitted by applicable law, Xavorian shall have no liability for any
              loss, damage, or harm arising from the fraudulent, deceptive, or criminal conduct of any User or
              any third party, whether such conduct occurs on the Platform, off the Platform, or partly on and
              partly off it, and whether or not the parties first met or were introduced through the Platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.4 Basis of the Bargain; Scope</h3>
            <p className="mt-1">
              The limitations in this Section 12: (a) extend to Xavorian&apos;s founder, officers, employees,
              agents, and contractors; (b) apply to every theory of liability — contract, tort (including
              negligence), statute, equity, or otherwise; (c) apply even if a limited remedy fails of its
              essential purpose; and (d) reflect the agreed allocation of risk between you and Xavorian, an
              essential basis of the bargain priced into the fees (if any) charged.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.5 Class Action and Representative Action Waiver</h3>
            <p className="mt-1">
              All claims must be brought and pursued only in your individual capacity, and not as a plaintiff,
              claimant, or member in any purported class, collective, consolidated, group, or representative
              proceeding. You waive any right to participate in, or obtain relief through, any such proceeding
              against Xavorian, and claims of different Users may not be joined or consolidated without
              Xavorian&apos;s prior written consent. This waiver applies equally in arbitration under Section
              15.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.6 One-Year Time Bar</h3>
            <p className="mt-1">
              Any claim or cause of action arising out of or in connection with these Terms, the Platform, or
              the Services must be formally commenced (by dispute notice under Section 15.1) within one (1)
              year of the event giving rise to it. Any claim not so commenced is permanently waived, released,
              and barred.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.7 Individual Remedies Only</h3>
            <p className="mt-1">
              Any relief awarded between you and Xavorian shall be individual and affect no other User.
              Injunctive or other equitable relief shall be available only to the extent necessary to protect
              Xavorian&apos;s intellectual property rights or confidential information, and nothing in these
              Terms prevents Xavorian from seeking urgent interim or protective relief from a competent court
              in respect of such rights without breaching the agreement to arbitrate.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">12.8 Non-Excludable Liability Saver</h3>
            <p className="mt-1">
              Nothing in these Terms excludes or limits liability for death or personal injury caused by
              negligence, for fraud or fraudulent misrepresentation, or any other liability which cannot be
              excluded or limited under applicable Nigerian law, including non-waivable consumer rights under
              the Federal Competition and Consumer Protection Act 2018. Every exclusion and limitation in
              Sections 8, 10, 11, and this Section 12 is subject to, and read down only to the extent required
              to give effect to, this Section 12.8.
            </p>
          </div>
        </section>

        {/* Section 13 */}
        <section id="sec-13" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">13. INDEMNIFICATION</h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">13.1 Your Indemnity</h3>
            <p className="mt-1">
              You agree to indemnify, defend, and hold harmless Xavorian, its founder (Ezeani Chukwuebuka),
              and its officers, employees, agents, contractors, and assigns (the{' '}
              <strong className="font-semibold text-foreground">&quot;Indemnified Persons&quot;</strong>) from
              and against all claims, demands, proceedings, losses, liabilities, damages, fines, costs, and
              expenses, including reasonable legal fees, arising out of or in connection with: (a) your breach
              of these Terms; (b) your use or misuse of the Platform; (c) your Listings, User Content,
              documents, or representations, including any claim that they are false, misleading, fraudulent,
              or infringing; (d) your Transactions with any User or third party, wherever conducted; (e) your
              violation of any applicable law; (f) your violation of any third party&apos;s rights; and (g)
              any taxes, duties, or penalties arising from your Transactions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">13.2 Procedure</h3>
            <p className="mt-1">
              Xavorian will notify you of any indemnified claim; delay in notice relieves you only to the
              extent you are actually prejudiced. Xavorian may take control of the defence and settlement of
              any indemnified claim, with your full cooperation at your reasonable expense. You shall not
              settle any claim in a way that imposes any liability or admission on an Indemnified Person
              without Xavorian&apos;s prior written consent.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">13.3 Survival</h3>
            <p className="mt-1">
              This indemnity is a continuing obligation and survives suspension or termination of your account
              and of these Terms.
            </p>
          </div>
        </section>

        {/* Section 14 */}
        <section id="sec-14" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            14. SUSPENSION AND TERMINATION
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">14.1 By Xavorian</h3>
            <p className="mt-1">
              Xavorian may suspend, restrict, or terminate your account, access, any Listing, or any Platform
              feature at any time, at its sole discretion, with or without notice, and with or without cause —
              including for suspected fraud, impersonation, or unlawful conduct; pending review of a report
              under Section 9; for breach of these Terms; for conduct creating risk, harm, or potential
              liability for Xavorian or any User; or as required by law or an Authority. Interim suspension of
              features may apply pending review. Xavorian has no liability to you for any good-faith
              suspension or termination under this Section.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">14.2 By You</h3>
            <p className="mt-1">
              You may close your account at any time via xavoriansupport@gmail.com. Closure takes effect once
              any outstanding Transactions, payment obligations, disputes, or investigations affecting your
              account have been resolved.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">14.3 Effect of Termination</h3>
            <p className="mt-1">
              On suspension or termination: your right to use the Platform ceases immediately; your Listings
              may be removed; and the licence in Section 7.2 continues only to the extent stated there.
              Termination does not relieve you of accrued obligations, of winding up pending Transactions
              through the Payment Processor, or of Sections 8 to 13. Post-termination data handling follows
              our Privacy Policy and legal retention requirements.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">14.4 Survival</h3>
            <p className="mt-1">
              The following survive suspension or termination, together with any provision that by its nature
              is intended to survive: Sections 1, 2, 4, 5 (including unpaid fees), 6.3, 7, 8, 9, 10, 11, 12,
              13, 14, and 15.
            </p>
          </div>
        </section>

        {/* Section 15 */}
        <section id="sec-15" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            15. DISPUTE RESOLUTION, GOVERNING LAW AND GENERAL PROVISIONS
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.1 Good-Faith Negotiation (30 Days)</h3>
            <p className="mt-1">
              Before any formal proceeding, the complaining party must send a written dispute notice (for
              Xavorian, to xavorianlegal@gmail.com) describing the dispute and the relief sought, and the
              parties shall attempt in good faith to resolve the dispute by negotiation for thirty (30) days
              from receipt.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.2 Mediation</h3>
            <p className="mt-1">
              Failing resolution, either party may refer the dispute to mediation in Lagos, Nigeria, before a
              single agreed mediator; the mediator&apos;s costs are shared equally, and each party otherwise
              bears its own costs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.3 Binding Individual Arbitration</h3>
            <p className="mt-1">
              Any dispute not resolved by negotiation or mediation shall be finally resolved by binding
              arbitration under the Arbitration and Mediation Act 2023. The seat shall be Lagos, Nigeria;
              there shall be one (1) arbitrator, appointed by agreement or failing that under the default
              mechanism of the Arbitration and Mediation Act 2023; the language shall be English; the award
              shall be final and binding; the proceedings, submissions, and award shall be confidential except
              as required for enforcement or by law; and each party bears its own costs unless the tribunal
              decides otherwise. Arbitration is individual only, per Section 12.5.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.4 Small Claims Exception; Class Waiver</h3>
            <p className="mt-1">
              Either party may instead bring an individual claim falling within the monetary jurisdiction of a
              Magistrate Court before the Magistrate Court or District Court of competent jurisdiction where the User
              resides or where the Property is located. The class, collective, consolidated, and representative
              action waiver in Section 12.5 applies to every proceeding under this Section 15, whether in negotiation,
              mediation, arbitration, or court.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.5 Governing Law and Courts</h3>
            <p className="mt-1">
              These Terms, and any dispute or claim arising from them (including non-contractual disputes),
              are governed by the laws of the Federal Republic of Nigeria. Subject to Sections 15.3 and 15.4,
              the courts sitting in Lagos, Nigeria have exclusive jurisdiction over any court proceedings
              permitted under these Terms.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.6 Entire Agreement; Order of Precedence</h3>
            <p className="mt-1">
              These Terms, the Privacy Policy, and the Disclaimer together form the entire agreement between
              you and Xavorian concerning the Platform, superseding all prior understandings and
              representations. In case of conflict, precedence is: first these Terms, then the Privacy
              Policy, then the Disclaimer.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.7 Amendments</h3>
            <p className="mt-1">
              Xavorian may amend these Terms by posting the amended version on the Platform. For material
              changes, we will give at least fourteen (14) days&apos; notice by email or prominent Platform
              notice before they take effect. If you disagree, your sole remedy is to close your account
              before the effective date; continued use after it is acceptance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.8 Severability</h3>
            <p className="mt-1">
              If any provision is held invalid, illegal, or unenforceable, it shall be modified to the minimum
              extent needed to make it enforceable while preserving its intent — or, failing that, severed —
              and the rest of these Terms continues in full force.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.9 No Waiver</h3>
            <p className="mt-1">
              No failure or delay by Xavorian in exercising any right or remedy is a waiver of it, and no
              single or partial exercise precludes any further exercise of that or any other right or remedy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.10 Assignment</h3>
            <p className="mt-1">
              Xavorian may assign or transfer these Terms and its rights and obligations to any person,
              including in a merger, acquisition, reorganisation, or asset sale, with notice to you. You may not assign or transfer these Terms or any rights under them without Xavorian&apos;s
              prior written consent; any purported transfer without consent is void.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.11 Force Majeure</h3>
            <p className="mt-1">
              Xavorian is not liable for failure or delay caused by events beyond its reasonable control,
              including electricity grid failures and outages, telecommunications or internet infrastructure
              disruption, fuel scarcity, strikes, civil commotion, epidemics, acts of government or
              regulators, failures of Payment Processors or verification partners, fire, and flood.
              Obligations are suspended for the duration; if the event runs beyond ninety (90) consecutive
              days, either party may terminate the affected arrangements on written notice without liability.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.12 Notices</h3>
            <p className="mt-1">
              Legal notices to Xavorian: xavorianlegal@gmail.com. Support: xavoriansupport@gmail.com. Urgent
              matters: +234 805 637 3583. Notices to you go to your registered email or by Platform posting.
              An email notice is deemed received twenty-four (24) hours after sending, absent a delivery
              failure notification.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.13 Relationship; No Agency</h3>
            <p className="mt-1">
              You and Xavorian are independent contractors. Nothing in these Terms creates any agency,
              partnership, joint venture, fiduciary, or employment relationship between you and Xavorian, and
              neither party may bind or contract in the other&apos;s name.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.14 No Third-Party Beneficiaries</h3>
            <p className="mt-1">
              These Terms benefit you and Xavorian only. Except for the Indemnified Persons under Section 13,
              who may rely on that Section, no third party has any right to enforce any provision of these
              Terms.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">15.15 Pre-Launch Acknowledgement</h3>
            <p className="mt-1">
              You acknowledge that the Platform is in an early-access, waitlist stage and that features may be
              added, changed, or withdrawn at any time without liability, as set out in Section 2.4.
            </p>
          </div>

          <div className="max-w-md space-y-2 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
            <p className="font-bold text-foreground">Xavorian Technology Company</p>
            <p>
              Legal notices: <span className="font-semibold text-foreground">xavorianlegal@gmail.com</span>
            </p>
            <p>
              Support: <span className="font-semibold text-foreground">xavoriansupport@gmail.com</span>
            </p>
            <p>
              Phone: <span className="font-semibold text-foreground">+234 805 637 3583</span>
            </p>
            <p>
              Website: <span className="font-semibold text-foreground">xavorian.com</span>
            </p>
          </div>
        </section>

        <hr className="border-border" />

        <div className="rounded-2xl border border-border bg-muted p-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-foreground">
            By joining the waitlist or using the Platform, you acknowledge that you have read, understood,
            and agree to be bound by these Terms of Service.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            xavorian.com | xavorianlegal@gmail.com | +234 805 637 3583
          </p>
        </div>
      </div>
      </div>
    </article>
  );
}
