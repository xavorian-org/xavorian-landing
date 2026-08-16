import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalToc } from '@/components/LegalToc';

export const metadata: Metadata = pageMetadata({
  title: 'Disclaimer – Liability Limitations & AI Verification Xavorian',
  description:
    'Review the legal disclaimers of Xavorian regarding property listing accuracy, AI verification limitations, and payment services.',
  path: '/disclaimer',
});

const sections = [
  { id: 'sec-1', label: '1. General Disclaimer' },
  { id: 'sec-2', label: '2. Limitation of Liability' },
  { id: 'sec-3', label: '3. No Real Estate Advice' },
  { id: 'sec-4', label: '4. No Financial/Investment Advice' },
  { id: 'sec-5', label: '5. No Legal Advice' },
  { id: 'sec-6', label: '6. Property Listings Disclaimer' },
  { id: 'sec-7', label: '7. Chat & Fraud Prevention' },
  { id: 'sec-8', label: '8. Payment Disclaimer' },
  { id: 'sec-9', label: '9. User Conduct' },
  { id: 'sec-10', label: '10. Modifications' },
];

export default function DisclaimerPage() {
  return (
    <article className="container mx-auto py-12 sm:py-16">
      <header>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Legal Notice
        </span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Xavorian Disclaimer.
        </h1>
<p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Last Updated: August 2026</span>
            <span>&bull;</span>
            <span>Effective Date: August 2026</span>
          </p>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-foreground">Important Notice on Marketplace Roles & Liability</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Xavorian is a technology marketplace platform, not a landlord, real estate broker, bank, insurer, or escrow agent. We build multi-layer identity, document, and bank-name verification tools to filter out bad actors before listings go live. However, because we provide the screening technology rather than owning or selling the properties ourselves, each user remains responsible for conducting their own independent physical due diligence and lands registry searches. Xavorian is not liable for third-party criminal conduct, forgeries, or scams committed by independent users, to the maximum extent permitted by Nigerian Law.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
        <LegalToc sections={sections} />

        <div className="space-y-8 text-sm leading-7 text-foreground/80">
        {/* Section 1 */}
        <section id="sec-1" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">1. GENERAL DISCLAIMER</h2>
          <p>
            Xavorian (&quot;Platform,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or
            &quot;Company&quot;) provides a{' '}
            <strong className="font-semibold text-foreground">technology-enabled real estate marketplace</strong>{' '}
            platform that facilitates connections between property buyers, sellers, and agents. This Disclaimer
            outlines the limitations of liability, disclaimers of warranties, and important legal information
            regarding your use of our Platform and services.
          </p>
          <p>
            Please note that Xavorian is{' '}
            <strong className="font-semibold text-foreground">not itself a real estate broker</strong>, agent, or
            financial institution. We do not buy, sell, or hold property on our own behalf. We do not provide
            real estate advice, financial advice, legal advice, or tax advice. Our role is limited to providing
            the technology platform and infrastructure that enables real estate transactions.
          </p>
        </section>

        {/* Section 2 */}
        <section id="sec-2" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">2. LIMITATION OF LIABILITY</h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">2.1 Disclaimer of Warranties</h3>
            <div className="mt-2 rounded-2xl border border-border bg-muted p-6">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
                XAVORIAN PROVIDES ITS PLATFORM AND SERVICES ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </div>
            <p className="mt-3">We do not warrant that:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Our Platform will be uninterrupted, error-free, or secure</li>
              <li>All information on our Platform is accurate, complete, or current</li>
              <li>Defects will be corrected</li>
              <li>Our servers are free from viruses or harmful components</li>
              <li>Services will meet your expectations</li>
              <li>All users are honest or trustworthy</li>
              <li>Property listings are authentic or legally held</li>
              <li>AI verification systems are infallible</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">2.2 Limitation of Damages</h3>
            <div className="mt-2 rounded-2xl border border-border bg-muted p-6">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
                IN NO EVENT SHALL XAVORIAN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, OR LOST DATA.
              </p>
            </div>
            <p className="mt-3">
              Our total aggregate liability shall not exceed the lesser of (a) the fees actually paid by you to
              Xavorian in the twelve (12) months preceding the claim, or{' '}
              <strong className="font-semibold text-foreground">₦50,000 (fifty thousand naira)</strong>. Where
              you have paid no fees to Xavorian, we shall have no monetary liability to you, to the maximum
              extent permitted by applicable law. This limitation is subject to the saver clause in our Terms of
              Service for liability that cannot lawfully be excluded.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="sec-3" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">3. NO REAL ESTATE ADVICE</h2>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
              XAVORIAN DOES NOT PROVIDE REAL ESTATE ADVICE, INVESTMENT ADVICE, OR GUIDANCE ON PROPERTY VALUATION.
            </p>
          </div>
          <p>We strongly recommend that you:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-foreground">Consult licensed real estate agents</strong> in
              your jurisdiction
            </li>
            <li>
              <strong className="font-semibold text-foreground">Hire professional property inspectors</strong> to
              evaluate physical condition
            </li>
            <li>
              <strong className="font-semibold text-foreground">Conduct independent market research</strong> and
              property valuation
            </li>
            <li>
              <strong className="font-semibold text-foreground">Consult real estate attorneys</strong> regarding
              legal matters
            </li>
            <li>
              <strong className="font-semibold text-foreground">Verify all information</strong> through
              government records and official sources
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="sec-4" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            4. NO FINANCIAL OR INVESTMENT ADVICE
          </h2>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
              XAVORIAN DOES NOT PROVIDE FINANCIAL ADVICE, INVESTMENT ADVICE, TAX ADVICE, OR LOAN ADVICE.
            </p>
          </div>
          <p>
            Prices, mortgage calculations, rental yield estimates, and other financial information provided on
            our Platform are <strong className="font-semibold text-foreground">estimates only</strong> and should
            not be relied upon for financial decision-making.
          </p>
        </section>

        {/* Section 5 */}
        <section id="sec-5" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">5. NO LEGAL ADVICE</h2>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm font-bold uppercase leading-relaxed tracking-wide text-foreground">
              NOTHING ON XAVORIAN CONSTITUTES LEGAL ADVICE.
            </p>
          </div>
          <p>
            Real estate transactions involve complex legal issues that vary by jurisdiction. Before entering into
            any property transaction, you must consult with a{' '}
            <strong className="font-semibold text-foreground">qualified attorney</strong> licensed in your
            jurisdiction.
          </p>
        </section>

        {/* Section 6 */}
        <section id="sec-6" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            6. PROPERTY LISTINGS DISCLAIMER
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">6.1 Accuracy of Listings</h3>
            <p className="mt-1">
              While we implement AI verification systems, Xavorian{' '}
              <strong className="font-semibold text-foreground">cannot guarantee</strong> the accuracy,
              completeness, or authenticity of property listings. Sellers are responsible for the accuracy of
              information they provide.
            </p>
            <p className="mt-2">We do not independently verify:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Property ownership</li>
              <li>Physical property conditions</li>
              <li>Property boundaries or survey accuracy</li>
              <li>Title clarity or liens</li>
              <li>Zoning compliance</li>
              <li>Building code compliance</li>
              <li>Environmental conditions</li>
              <li>Price accuracy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">6.2 Verification Limitations</h3>
            <p className="mt-1">
              Our AI verification system analyzes documents for authenticity and fraud indicators, but{' '}
              <strong className="font-semibold text-foreground">automated systems are not infallible</strong>.
              Even if documents receive &quot;verified&quot; status, this does not guarantee absolute
              authenticity or legal validity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">6.3 Sellers&apos; Responsibility</h3>
            <p className="mt-1">
              Sellers are <strong className="font-semibold text-foreground">solely responsible</strong> for the
              accuracy, legality, and authenticity of listings and documents they provide. Xavorian does not
              endorse, recommend, or vouch for any sellers or properties.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="sec-7" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            7. COMMUNICATION AND CHAT DISCLAIMER
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.1 AI Monitoring</h3>
            <p className="mt-1">
              Our AI system monitors communications to detect fraud, scams, and violations. However, AI
              monitoring is <strong className="font-semibold text-foreground">not comprehensive</strong> and may
              not detect all problematic communications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">7.2 Fraud Prevention Red Flags</h3>
            <p className="mt-1">Be vigilant of these warning signs:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Requests for payment outside the Platform</li>
              <li>Pressure to move quickly</li>
              <li>Offers that seem too good to be true</li>
              <li>Requests for personal financial details</li>
              <li>Inconsistencies in information</li>
              <li>Requests to wire money or use untraceable payment methods</li>
              <li>Unknown sellers with no verification badges</li>
              <li>Refusal to use secure payment services</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-foreground">
              Report suspected fraud to our support team immediately.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="sec-8" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">8. PAYMENT DISCLAIMER</h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.1 Payment Process via Paystack</h3>
            <p className="mt-1">
              All payment transactions connected with the Platform are routed through Paystack (a Central Bank of Nigeria licensed payment solution service provider) directly to verified bank accounts.{' '}
              <strong className="font-semibold text-foreground">
                Xavorian is a neutral technology platform, not a bank, payment service provider, escrow agent, or financial institution.
              </strong>{' '}
              Xavorian never holds, pools, or takes custody of User funds.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.2 No Guarantee of Transaction Completion</h3>
            <p className="mt-1">
              Xavorian does not guarantee that payment transactions will complete successfully. Transactions may
              fail for numerous reasons including verification failures, document issues, or participant
              disputes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">8.3 Dispute Resolution</h3>
            <p className="mt-1">
              Disputes arising from payment transactions are subject to our Terms of Service and applicable law.
              Xavorian is not responsible for resolving disputes or compensating parties for losses.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="sec-9" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            9. USER CONDUCT AND RESPONSIBILITY
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.1 Your Responsibility</h3>
            <p className="mt-1">
              You are <strong className="font-semibold text-foreground">solely responsible</strong> for your
              conduct on the Platform and your interactions with other users.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.2 No Endorsement</h3>
            <p className="mt-1">
              A listing on our Platform does not constitute an endorsement or recommendation by Xavorian.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">9.3 Prohibited Uses</h3>
            <p className="mt-1">Users agree not to:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Commit fraud, scams, or misrepresentation</li>
              <li>Violate applicable laws</li>
              <li>Infringe intellectual property rights</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Access or tamper with Platform systems</li>
              <li>Post false or misleading information</li>
              <li>Conduct illegal transactions</li>
              <li>Engage in money laundering or sanctions evasion</li>
            </ul>
          </div>
        </section>

        {/* Section 10 */}
        <section id="sec-10" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            10. MODIFICATIONS TO DISCLAIMER
          </h2>
          <p>
            Xavorian reserves the right to modify this Disclaimer at any time. Changes become effective upon
            posting to the Platform. Your continued use indicates acceptance of the modified Disclaimer.
          </p>
        </section>

        <hr className="border-border" />

        <div className="rounded-2xl border border-border bg-muted p-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-foreground">
            For legal inquiries, contact us at{' '}
            <span className="font-semibold text-foreground">xavorianlegal@gmail.com</span>
          </p>
        </div>
      </div>
      </div>
    </article>
  );
}
