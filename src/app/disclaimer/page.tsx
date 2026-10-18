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
  { id: 'sec-1', label: '1. General Disclaimer & Role' },
  { id: 'sec-2', label: '2. Limitation of Liability' },
  { id: 'sec-3', label: '3. No Real Estate Advice' },
  { id: 'sec-4', label: '4. No Financial or Investment Advice' },
  { id: 'sec-5', label: '5. No Legal Advice' },
  { id: 'sec-6', label: '6. Property Listings Disclaimer' },
  { id: 'sec-7', label: '7. Chat & Fraud Prevention Red Flags' },
  { id: 'sec-8', label: '8. Payment Disclaimer (Paystack, CBN-licensed)' },
  { id: 'sec-9', label: '9. User Conduct & Prohibited Uses' },
  { id: 'sec-10', label: '10. Modifications & Legal Notices' },
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
          <span>Effective Date: August 2026</span>
          <span>&bull;</span>
          <span>Last Updated: October 2026</span>
          <span>&bull;</span>
          <span>Jurisdiction: Federal Republic of Nigeria</span>
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-foreground">
          Important Notice on Marketplace Roles &amp; Liability
        </p>
        <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>
            Xavorian is a technology marketplace platform, not a landlord, real estate broker, bank, insurer, or escrow
            agent. We build multi-layer identity, document, and bank-name verification tools to help filter out bad
            actors before listings go live.
          </p>
          <p>
            Because we provide screening technology rather than owning or selling the properties ourselves, each user
            remains responsible for conducting their own independent physical due diligence and lands registry searches.
          </p>
          <p>
            Subject to the Terms of Service and Nigerian law, Xavorian is not liable for losses caused solely by the
            independent fraud, forgery, or criminal conduct of users or third parties that are not attributable to
            Xavorian&apos;s own fault. Nothing in this Disclaimer limits liability that cannot lawfully be excluded.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
        <LegalToc sections={sections} />

        <div className="space-y-8 text-sm leading-7 text-foreground/80">
          {/* Section 1 */}
          <section id="sec-1" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
              1. GENERAL DISCLAIMER &amp; ROLE
            </h2>
            <p>
              Xavorian (&quot;Platform,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;)
              provides a{' '}
              <strong className="font-semibold text-foreground">technology-enabled real estate marketplace</strong>{' '}
              platform that facilitates connections between property buyers, sellers, and agents. This Disclaimer
              outlines the limitations of liability, disclaimers of warranties, and important legal information
              regarding your use of our Platform and services.
            </p>
            <p>
              Xavorian is <strong className="font-semibold text-foreground">not itself a real estate broker</strong>,
              agent, or financial institution. We do not buy, sell, or hold property on our own behalf. We do not provide
              real estate advice, financial advice, legal advice, or tax advice. Our role is limited to providing the
              technology platform and infrastructure that enables real estate transactions.
            </p>
            <p>
              This Disclaimer is read together with the Terms of Service. If they conflict, the Terms of Service
              prevail.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec-2" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">2. LIMITATION OF LIABILITY</h2>

            <div>
              <h3 className="text-sm font-bold text-foreground">2.1 Disclaimer of Warranties</h3>
              <p className="mt-2">
                Subject to applicable Nigerian law, Xavorian provides its Platform and Services on an &quot;as is&quot;
                and &quot;as available&quot; basis. Except as expressly stated in the Terms of Service or required by
                law, Xavorian gives no warranties.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground">2.2 Limitation of Damages</h3>
              <p className="mt-2">
                To the maximum extent permitted by Nigerian law, Xavorian is not liable for indirect or consequential
                loss, including lost profits, lost revenue, or lost data, where such loss is legally excludable.
              </p>
              <p className="mt-2">
                Xavorian&apos;s total liability to a user is capped as set out in Section 12.2 of the Terms of Service:
                the greater of 70% of the fees the user paid Xavorian in the previous six months, or &#8358;50,000. This
                applies only where the law allows, and it does not limit liability for fraud or any liability that cannot
                lawfully be excluded.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-3" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">3. NO REAL ESTATE ADVICE</h2>
            <p>
              Xavorian does not provide real estate advice, investment advice, or guidance on property valuation. We
              strongly recommend that you:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Consult licensed real estate agents in your jurisdiction</li>
              <li>Hire professional property inspectors to evaluate physical condition</li>
              <li>Conduct independent market research and property valuation</li>
              <li>Consult real estate attorneys regarding legal matters</li>
              <li>Verify all information through government records and official sources</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec-4" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
              4. NO FINANCIAL OR INVESTMENT ADVICE
            </h2>
            <p>
              Xavorian does not provide financial advice, investment advice, tax advice, or loan advice. Prices,
              mortgage calculations, rental yield estimates, and other financial information provided on our Platform
              are estimates only and should not be relied upon for financial decision-making.
            </p>
          </section>

          {/* Section 5 */}
          <section id="sec-5" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">5. NO LEGAL ADVICE</h2>
            <p>
              Nothing on Xavorian constitutes legal advice. Real estate transactions involve complex legal issues that
              vary by jurisdiction. Before entering into any property transaction, you must consult with a qualified
              attorney licensed in your jurisdiction.
            </p>
          </section>

          {/* Section 6 */}
          <section id="sec-6" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
              6. PROPERTY LISTINGS DISCLAIMER
            </h2>

            <div>
              <h3 className="text-sm font-bold text-foreground">6.1 Accuracy of Listings</h3>
              <p className="mt-2">
                Xavorian uses AI-assisted verification, but except as expressly stated in the Terms of Service, we
                cannot guarantee the accuracy, completeness, or authenticity of property listings. Sellers are
                responsible for the accuracy of information they provide. We do not independently verify:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
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
              <p className="mt-2">
                Our AI verification system analyses documents for authenticity and fraud indicators, but automated
                systems are not infallible. Even if documents receive &quot;verified&quot; status, this does not
                guarantee absolute authenticity or legal validity.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground">6.3 Sellers&apos; Responsibility</h3>
              <p className="mt-2">
                Sellers are solely responsible for the accuracy, legality, and authenticity of listings and documents
                they provide. Xavorian does not endorse, recommend, or vouch for any sellers or properties.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-7" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
              7. COMMUNICATION AND CHAT DISCLAIMER
            </h2>

            <div>
              <h3 className="text-sm font-bold text-foreground">7.1 Automated Monitoring</h3>
              <p className="mt-2">
                Our automated systems may monitor in-platform communications to detect fraud, scams, and violations, as
                explained in our Privacy Policy. Monitoring is not comprehensive and may not detect all problematic
                communications.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground">7.2 Fraud Prevention Red Flags</h3>
              <p className="mt-2">
                Be vigilant of these warning signs, and report suspected fraud to our support team immediately:
              </p>
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
            </div>
          </section>

          {/* Section 8 */}
          <section id="sec-8" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">8. PAYMENT DISCLAIMER</h2>

            <div>
              <h3 className="text-sm font-bold text-foreground">8.1 Payment Process via Paystack</h3>
              <p className="mt-2">
                All payment transactions connected with the Platform are routed through Paystack (a Central Bank of
                Nigeria licensed payment solution service provider) directly to verified bank accounts. Xavorian is a
                neutral technology platform, not a bank, payment service provider, escrow agent, or financial
                institution. Xavorian does not hold, pool, or take custody of User funds.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground">8.2 No Guarantee of Transaction Completion</h3>
              <p className="mt-2">
                Xavorian does not guarantee that payment transactions will complete successfully. Transactions may fail
                for numerous reasons including verification failures, document issues, or participant disputes.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground">8.3 Dispute Resolution</h3>
              <p className="mt-2">
                Disputes arising from payment transactions are subject to our Terms of Service and applicable law.
                Xavorian does not resolve payment disputes between users and is not responsible for compensating
                parties for losses, except where required by law or caused by Xavorian&apos;s own breach or
                negligence.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="sec-9" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
              9. USER CONDUCT AND RESPONSIBILITY
            </h2>
            <p>
              You are solely responsible for your conduct on the Platform and your interactions with other users. A
              listing on our Platform does not constitute an endorsement or recommendation by Xavorian. Users agree not
              to:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Commit fraud, scams, or misrepresentation</li>
              <li>Violate applicable laws</li>
              <li>Infringe intellectual property rights</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Access or tamper with Platform systems</li>
              <li>Post false or misleading information</li>
              <li>Conduct illegal transactions</li>
              <li>Engage in money laundering or sanctions evasion</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="sec-10" className="scroll-mt-24 space-y-4">
            <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
              10. MODIFICATIONS &amp; LEGAL NOTICES
            </h2>
            <div>
              <h3 className="text-sm font-bold text-foreground">10.1 Modifications to Disclaimer</h3>
              <p className="mt-2">
                Xavorian may modify this Disclaimer. Material changes take effect after at least fourteen (14) days&apos;
                notice by email or prominent Platform notice, in line with the Terms of Service. Other changes take
                effect on posting.
              </p>
            </div>
            <div className="mt-4 space-y-2 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
              <p>
                <strong className="font-semibold text-foreground">Entity:</strong> Xavorian Technology Company
                (RC-9912416), incorporated in the Federal Republic of Nigeria
              </p>
              <p>
                <strong className="font-semibold text-foreground">Founder:</strong> Ezeani Chukwuebuka
              </p>
              <p>
                <strong className="font-semibold text-foreground">Legal &amp; Privacy Notices:</strong>{' '}
                <span className="font-semibold text-foreground">legal@xavorian.com</span> |{' '}
                <strong className="font-semibold text-foreground">Support:</strong>{' '}
                <span className="font-semibold text-foreground">support@xavorian.com</span>
              </p>
              <p>
                <strong className="font-semibold text-foreground">Telephone / WhatsApp:</strong>{' '}
                <span className="font-semibold text-foreground">+234 805 637 3583</span> |{' '}
                <strong className="font-semibold text-foreground">Website:</strong>{' '}
                <span className="font-semibold text-foreground">https://xavorian.com</span>
              </p>
              <p>
                <strong className="font-semibold text-foreground">Launch Focus (pre-launch):</strong> Lagos, Abuja,
                Benin City, Port Harcourt, and expanding across Nigeria.
              </p>
              <p className="pt-1 text-xs">
                For legal inquiries or statutory communications, contact the Xavorian Legal Office at{' '}
                <span className="font-semibold text-foreground">legal@xavorian.com</span>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
