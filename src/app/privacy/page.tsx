import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalToc } from '@/components/LegalToc';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy – How Xavorian Protects Your Data',
  description:
    'How Xavorian Technology Company collects, uses, protects, and retains your personal data, including waitlist data now and identity, payment, and property data when the marketplace launches, under the NDPR 2019 and the Nigeria Data Protection Act 2023.',
  path: '/privacy',
});

const sections = [
  { id: 'sec-1', label: '1. Who We Are' },
  { id: 'sec-2', label: '2. Scope of This Policy and Your Consent' },
  { id: 'sec-3', label: '3. Personal Data We Collect' },
  { id: 'sec-4', label: '4. Legal Bases for Processing' },
  { id: 'sec-5', label: '5. How We Use Your Data' },
  { id: 'sec-6', label: '6. Biometric and Identity Data' },
  { id: 'sec-7', label: '7. Cookies and Tracking' },
  { id: 'sec-8', label: '8. Who We Share Your Data With' },
  { id: 'sec-9', label: '9. International Data Transfers' },
  { id: 'sec-10', label: '10. How Long We Keep Your Data' },
  { id: 'sec-11', label: '11. How We Protect Your Data' },
  { id: 'sec-12', label: '12. Data Breach Notification' },
  { id: 'sec-13', label: '13. Your Rights Under Nigerian Law' },
  { id: 'sec-14', label: '14. Automated Decision-Making and Profiling' },
  { id: 'sec-15', label: "15. Children's Privacy" },
  { id: 'sec-16', label: '16. Changes to This Policy' },
  { id: 'sec-17', label: '17. Contact and Complaints' },
];

export default function PrivacyPage() {
  return (
    <article className="container mx-auto py-12 sm:py-16">
      <header>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Data Protection
        </span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Privacy Policy.
        </h1>
        <p className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>Effective Date: August 2026</span>
          <span>&bull;</span>
          <span>NDPR &amp; NDPA Compliant</span>
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
        <LegalToc sections={sections} />

        <div className="space-y-8 text-sm leading-7 text-foreground/80">
        <section className="space-y-4">
          <p>
            Xavorian Technology Company is committed to protecting the privacy of every person who visits
            xavorian.com, joins the Xavorian waitlist, or uses the Xavorian marketplace when it launches. This
            Privacy Policy explains, in plain language, what personal data we collect, why we collect it, the
            legal bases on which we process it, who we share it with, how long we keep it, how we protect it,
            and the rights you have in relation to it. This Policy is prepared in accordance with the Nigeria
            Data Protection Regulation 2019 (NDPR) and the Nigeria Data Protection Act 2023 (NDPA), and it
            reflects our breach-notification obligations to the national data protection supervisory authority
            currently exercised under those instruments.
          </p>
          <p>
            Please read this Policy carefully. If you do not agree with any part of it, you should not submit
            the waitlist form or otherwise provide us with your personal data.
          </p>
        </section>

        <hr className="border-border" />

        {/* Section 1 */}
        <section id="sec-1" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">1. WHO WE ARE</h2>
          <p>
            1.1. Xavorian Technology Company, a private limited liability company incorporated under the laws
            of the Federal Republic of Nigeria, is the data controller responsible for personal data collected
            through xavorian.com, through the Xavorian waitlist, and through the Xavorian marketplace when it
            launches. As data controller, we determine the purposes and means of processing your personal data
            and we are accountable to you and to the supervisory authority for that processing.
          </p>
          <p>
            1.2. Xavorian is currently in its pre-launch waitlist stage. References in this Policy to
            marketplace features, identity verification, listings, offers, and payments describe processing
            that will take place only when the marketplace launches, and they are included now so that you can
            understand our full intended data practices before you decide to join the waitlist.
          </p>
          <p>1.3. Our Data Protection Officer can be reached at any time through the following channels:</p>
          <div className="max-w-md space-y-1 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
            <p className="font-bold text-foreground">Data Protection Officer: Xavorian Technology Company</p>
            <p>
              Email: <span className="font-semibold text-foreground">xavorianlegal@gmail.com</span>
            </p>
            <p>
              Website: <span className="font-semibold text-foreground">xavorian.com</span>
            </p>
            <p>
              Phone: <span className="font-semibold text-foreground">+234 805 637 3583</span>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="sec-2" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            2. SCOPE OF THIS POLICY AND YOUR CONSENT
          </h2>
          <p>
            2.1. This Policy applies to (a) the Xavorian website at xavorian.com, (b) the Xavorian waitlist and
            any forms, surveys, or communications connected with it, and (c) the Xavorian marketplace, when it
            launches, including its accounts, listings, chat, offers, and payment features. It applies to all
            persons whose data we process, including site visitors, waitlist subscribers, and future users
            registering as property seekers, agents, or landlords.
          </p>
          <p>
            2.2. When you submit the waitlist form, you give your express consent, by a clear affirmative
            action, to our processing of the personal data you submit for the purposes described in this
            Policy. Consent is not bundled with unrelated purposes: we ask only for the data described in
            Section 3.1 and we use it only for the purposes described in Section 5.
          </p>
          <p>
            2.3. You may withdraw your consent at any time, free of charge, by emailing
            xavorianlegal@gmail.com or by using the unsubscribe link in any of our emails. Withdrawal of
            consent does not affect the lawfulness of processing carried out before the withdrawal. If you
            withdraw consent to waitlist processing, we will remove you from the waitlist within thirty days.
            Where a different legal basis applies to a specific item of data, for example a legal retention
            obligation, withdrawal of consent ends the consent-based processing but not the processing the law
            requires.
          </p>
          <p>
            2.4. This Policy explains how we handle personal data. Your use of the Platform itself is governed
            by our Terms and Conditions, which you should read together with this Policy.
          </p>
        </section>

        {/* Section 3 */}
        <section id="sec-3" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            3. PERSONAL DATA WE COLLECT
          </h2>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.1 Data You Give Us Now (Waitlist Stage)</h3>
            <p className="mt-1">
              When you join the Xavorian waitlist we collect only the following fields, exactly as they appear
              on the form: your full name, your email address, your phone number (optional), your role (whether
              you join as a property seeker, an agent, or a landlord), your city, and an optional free-text
              note you choose to add. If you contact us by email or phone, we also collect the content of that
              correspondence and the contact details you use.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              3.2 Data We Will Collect When the Marketplace Launches
            </h3>
            <p className="mt-1">
              The following categories are not collected at the waitlist stage. They will be collected only
              when the marketplace launches and only from users who choose to register and transact. This
              future-stage data will include: account credentials and profile information; a
              government-issued identity document such as a national identity card, driver&apos;s licence, or
              international passport; a liveness check or selfie capture used to confirm that the person
              presenting the document is its genuine holder; your National Identification Number (NIN) or Bank
              Verification Number (BVN), which we store only as irreversible cryptographic hashes; your bank
              account name and account number, used for name-match verification and for payment and secure
              payment purposes through our payment partner, Paystack; property title documents and supporting
              listing materials; messages exchanged through the in-platform chat; offers, counter-offers, and
              transaction records; Paystack payment metadata such as transaction references and payment status;
              device and usage logs; IP-based approximate location; and your notification preferences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.3 Data We Collect Automatically</h3>
            <p className="mt-1">
              When you visit xavorian.com or use the Platform, we automatically collect technical data
              including your IP address and the coarse, city-level location derived from it; your device type,
              operating system, and browser type and version; pages visited, links clicked, and time spent;
              the website or campaign that referred you to us; and cookie or similar identifiers described in
              Section 7. At the waitlist stage this data is used in aggregate to understand demand and to keep
              the site secure. We do not collect precise GPS location at the waitlist stage.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">3.4 Data We Receive From Third Parties</h3>
            <p className="mt-1">
              When marketplace verification launches, our independent KYC verification providers will confirm
              identity data against official records and return to us only a verification result and a risk
              or match score. We do not receive a copy of your full NIN or BVN record back from these
              providers. Our payment partner, Paystack, returns payment confirmation data such as transaction
              references, amounts, and payment status. We never receive or store your card number (PAN); card
              data is processed entirely within Paystack&apos;s own environment.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              3.5 Special and Sensitive Categories of Data
            </h3>
            <p className="mt-1">
              Identity documents and liveness captures are treated as sensitive, biometric-adjacent data. When
              the marketplace launches we will process them only with your explicit consent and on the
              additional basis of our legal obligations to verify identity and prevent fraud. We apply stricter
              access controls and shorter retention periods to this data, as described in Section 6 and Section
              10. We do not sell personal data of any kind to any third party, and we do not use sensitive
              data to build advertising profiles.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="sec-4" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            4. LEGAL BASES FOR PROCESSING
          </h2>
          <p>
            4.1. We process personal data only where a lawful basis under the NDPR 2019 and the Nigeria Data
            Protection Act 2023 applies. Depending on the purpose, we rely on the following bases:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-foreground">Performance of a contract or steps before a
              contract:</strong> processing needed to provide the services you request, such as managing your
              waitlist registration and, at launch, operating your account, listings, offers, and
              transactions.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Legal obligation:</strong> processing required
              to comply with Nigerian law, including identity verification, anti-money laundering, fraud
              prevention, tax and financial record-keeping, and valid court orders.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Legitimate interests:</strong> processing
              necessary for our legitimate business interests, such as keeping the Platform secure,
              preventing fraud, planning our city launch order from aggregated waitlist data, and improving
              the Platform. Before relying on this basis we balance our interests against your rights and
              freedoms, and we proceed only where your interests do not override ours. You may object to
              processing based on legitimate interests as described in Section 13.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Consent:</strong> processing we carry out only
              because you asked us to or agreed that we could, including waitlist communications and, at
              launch, identity and biometric-adjacent verification data. You may withdraw consent at any time
              under Section 2.3.
            </li>
          </ul>
          <p>
            4.2. Where processing is based on consent, withdrawal does not affect processing already completed
            lawfully. Where processing is based on a legal obligation, we may be unable to act on a deletion
            request until the relevant statutory retention period ends; we will tell you if that is the case.
          </p>
        </section>

        {/* Section 5 */}
        <section id="sec-5" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">5. HOW WE USE YOUR DATA</h2>
          <p>
            5.1. We use personal data only for the purposes below, each tied to the legal basis shown:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              To register and manage your position on the waitlist, including confirming your role and city
              (consent; steps before a contract).
            </li>
            <li>
              To send you waitlist updates, launch announcements, and product information you signed up to
              receive (consent, withdrawable at any time).
            </li>
            <li>
              To determine the order in which we launch cities and to plan capacity, using aggregated or
              de-identified waitlist data rather than identifiable profiles (legitimate interest).
            </li>
            <li>
              To respond to your enquiries and provide support (legitimate interest; contract).
            </li>
            <li>
              At launch, to create and administer your account, publish and manage listings, process offers
              and transactions, and operate payment and secure payment arrangements with Paystack (contract).
            </li>
            <li>
              At launch, to verify the identity of users through our verification partners before they
              transact, and to screen listings, documents, and conduct for fraud (legal obligation; legitimate
              interest in platform safety).
            </li>
            <li>
              To send transactional notifications such as verification outcomes, offer alerts, and payment
              confirmations (contract).
            </li>
            <li>
              To monitor, detect, investigate, and prevent fraud and other unlawful use of the Platform,
              including monitoring in-platform chat for scam activity (legal obligation; legitimate interest;
              your awareness and consent where required).
            </li>
            <li>
              To keep records required by law, to establish or defend legal claims, and to cooperate with
              competent Nigerian authorities (legal obligation; legitimate interest).
            </li>
            <li>
              To analyse aggregated usage data to improve performance, reliability, and the design of the
              Platform (legitimate interest).
            </li>
          </ul>
          <p>
            5.2. We will not use your personal data for a purpose that is incompatible with the purposes above
            without first telling you and, where the law requires, obtaining your consent. We do not use your
            personal data to make decisions about you that are based solely on automated processing and that
            have legal or similarly significant effects, except as described in Section 14.
          </p>
        </section>

        {/* Section 6 */}
        <section id="sec-6" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            6. BIOMETRIC AND IDENTITY DATA
          </h2>
          <p>
            6.1. This section applies when the marketplace launches and you choose to complete identity
            verification. Verification is a mandatory gate for transacting users; it is not automatic, and it
            happens only after you initiate it.
          </p>
          <div className="max-w-md space-y-1 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
            <p className="font-bold text-foreground">Explicit consent</p>
            <p>
              By starting identity verification you expressly consent to Xavorian and its verification
              partners processing your identity document and liveness capture solely to confirm your identity,
              as required by law and by our platform rules. You may withdraw consent at any time, but a
              withdrawn consent means we cannot verify you, and unverified users cannot transact.
            </p>
          </div>
          <p>
            6.2. The liveness or selfie capture is compared with the photograph on your identity document to
            confirm that the person submitting the document is its genuine holder. It is used for match
            verification only. We do not use liveness or identity data for advertising, we do not sell, rent,
            or trade it, and we do not build a searchable biometric database for unrelated purposes.
          </p>
          <p>
            6.3. Your NIN and BVN are converted to irreversible cryptographic hashes. The plain number is used
            transiently at the point of verification and is then discarded; it is never stored in plain text
            and cannot be reconstructed from the stored hash.
          </p>
          <p>
            6.4. Raw facial liveness captures are deleted immediately once the identity verification match is
            completed, unless a longer period is specifically mandated by applicable anti-fraud law or a binding court order. Verification outcomes and hashed identifiers are retained in line with Section
            10. Verification providers process this data under contract, solely for the verification service,
            and must delete or return it when the service ends.
          </p>
        </section>

        {/* Section 7 */}
        <section id="sec-7" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">7. COOKIES AND TRACKING</h2>
          <p>
            7.1. We use a small number of cookies and similar technologies in three categories: strictly
            necessary cookies that keep the site and your session working; preference cookies that remember
            choices such as form inputs you have already made; and analytics cookies that help us understand,
            in aggregate, how visitors use the site so we can improve it.
          </p>
          <p>
            7.2. We do not use advertising cookies, we do not allow third-party advertising networks to place
            cookies through our site, and we do not share cookie or tracking data with ad networks.
          </p>
          <p>
            7.3. You can control or delete cookies through your browser settings. Blocking strictly necessary
            cookies may prevent parts of the site, including the waitlist form, from working correctly.
          </p>
        </section>

        {/* Section 8 */}
        <section id="sec-8" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            8. WHO WE SHARE YOUR DATA WITH
          </h2>
          <p>
            8.1. We do not sell your personal data. We do not rent it, trade it, or share it for third-party
            advertising. We share personal data only in the circumstances below.
          </p>
          <p>
            8.2. Service providers acting as data processors. We share data with vendors that process it on our
            behalf and on our documented instructions, including identity verification providers (verification
            result and risk score only), Paystack for payment and secure payment purposes, email, SMS, and push
            notification providers that deliver our communications, and hosting and cloud infrastructure
            providers that store and serve the Platform. Each processor is bound by a written contract to
            process data only as instructed, to keep it confidential, to apply appropriate security measures,
            and to delete or return the data when the engagement ends. We conduct due diligence on processors
            before engaging them.
          </p>
          <p>
            8.3. Legal authorities. We may disclose personal data to the Nigeria Police Force, the Economic and
            Financial Crimes Commission (EFCC), the Independent Corrupt Practices Commission (ICPC), the
            national data protection supervisory authority, or a court where we are required to do so by law or
            court order, or where we reasonably believe disclosure is necessary to prevent fraud, protect the
            safety of users, or report suspected criminal conduct. Fraud reports may include identifying and
            transaction data about the suspected party.
          </p>
          <p>
            8.4. Professional advisers. We share data with our lawyers, auditors, and insurers where necessary,
            under strict confidentiality obligations.
          </p>
          <p>
            8.5. Business transfers. If Xavorian is involved in a merger, acquisition, or sale of all or part
            of its business, personal data may transfer to the successor entity, which must protect it in a
            manner equivalent to this Policy. We will notify you of any such transfer and of your choices.
          </p>
        </section>

        {/* Section 9 */}
        <section id="sec-9" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            9. INTERNATIONAL DATA TRANSFERS
          </h2>
          <p>
            9.1. Xavorian is a Nigerian company, but some of our service providers, including cloud hosting and
            email delivery providers, may store or process data on servers located outside Nigeria. This means
            your personal data may be transferred to and processed in other countries.
          </p>
          <p>
            9.2. International transfers are made only in accordance with the Nigeria Data Protection Act 2023.
            Before transferring data we confirm that the destination benefits from an adequacy decision or the
            transfer is covered by appropriate safeguards, including contractual data protection clauses with
            the recipient, security due diligence on the vendor, and encryption of data in transit between our
            systems and theirs.
          </p>
          <p>
            9.3. You may contact our Data Protection Officer at xavorianlegal@gmail.com to request information
            about the safeguards applied to a specific transfer of your data.
          </p>
        </section>

        {/* Section 10 */}
        <section id="sec-10" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            10. HOW LONG WE KEEP YOUR DATA
          </h2>
          <p>
            10.1. We keep personal data only for as long as necessary for the purpose it was collected for, and
            for any longer period the law requires. Our current retention schedule is:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-foreground">Waitlist data:</strong> retained until the
              marketplace launches, at which point you may register an account or ask us to delete your entry,
              or until you ask us to delete it sooner, whichever comes first.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Account data:</strong> retained for the life of
              your account and for seven years after account closure, to satisfy legal, tax, and financial
              record-keeping obligations under Nigerian law.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Payment and audit logs:</strong> retained for
              ten years from the date of the transaction, in line with financial record-keeping requirements.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Identity verification data:</strong>{' '}
              verification records and supporting documents retained for the life of the account plus seven
              years after closure, to satisfy identity verification and anti-fraud obligations; raw liveness
              captures deleted immediately upon verification completion as described in Section 6.4.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Correspondence:</strong> support and legal
              correspondence retained for as long as needed to handle the matter and for any resulting
              retention obligation.
            </li>
          </ul>
          <p>
            10.2. When you make a valid deletion request we will delete or irreversibly anonymise your personal
            data within thirty days, except where we must retain specific data because the law requires it, or
            because it is necessary to resolve an outstanding dispute or establish or defend a legal claim.
            Residual copies in encrypted backups are overwritten on our scheduled backup cycle.
          </p>
        </section>

        {/* Section 11 */}
        <section id="sec-11" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            11. HOW WE PROTECT YOUR DATA
          </h2>
          <p>
            11.1. We apply technical and organisational measures proportionate to the sensitivity of the data
            we handle:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              NIN and BVN values are stored only as irreversible cryptographic hashes, never in plain text.
            </li>
            <li>
              All data transmitted between your device and our servers is encrypted using HTTPS with HSTS
              enforcement.
            </li>
            <li>
              Access to personal data within Xavorian follows least-privilege, need-to-know rules: staff and
              contractors can access only the data their role requires, and only while they require it.
            </li>
            <li>
              Payment card data is processed entirely by Paystack in its own environment; Xavorian does not
              receive or store card numbers.
            </li>
            <li>
              Processors are engaged only after due diligence and only under contracts that impose security and
              confidentiality obligations.
            </li>
            <li>
              Staff with access to personal data are bound by confidentiality undertakings and receive data
              protection guidance.
            </li>
            <li>
              We maintain an incident response plan with defined escalation steps, as described in Section 12.
            </li>
          </ul>
          <p>
            11.2. No method of transmission over the internet or of electronic storage is completely secure.
            We work continuously to protect your data, but we cannot guarantee absolute security. You share
            responsibility for protecting your own data: choose a strong password, keep your credentials
            confidential, and watch for phishing messages that pretend to come from Xavorian.
          </p>
        </section>

        {/* Section 12 */}
        <section id="sec-12" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            12. DATA BREACH NOTIFICATION
          </h2>
          <p>
            12.1. If we become aware of a personal data breach, we will act quickly to contain it, assess its
            effect, and remediate the cause. Every breach is documented, whether or not it must be reported.
          </p>
          <p>
            12.2. Where Nigerian law requires notification, we will notify the national data protection
            supervisory authority, the Nigeria Data Protection Commission (NDPC), which took over the data
            protection functions previously exercised by the National Information Technology Development Agency
            (NITDA), within seventy-two hours of becoming aware of the breach.
          </p>
          <p>
            12.3. Where a breach is likely to result in a high risk to your rights and freedoms, we will also
            notify you directly and without undue delay, using the contact details we hold for you.
          </p>
          <p>
            12.4. Our notification will tell you, in plain language, what happened, the categories and
            approximate amount of data affected, the likely consequences, the measures we have taken or propose
            to take, and how to reach our Data Protection Officer. We will also tell you what you can do, for
            example resetting credentials or contacting your bank where financial data is involved.
          </p>
        </section>

        {/* Section 13 */}
        <section id="sec-13" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            13. YOUR RIGHTS UNDER NIGERIAN LAW
          </h2>
          <p>
            13.1. Under the NDPR 2019 and the Nigeria Data Protection Act 2023 you have the following rights in
            relation to your personal data:
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-bold text-foreground">Right of access</h3>
              <p>You may request confirmation that we process your data and a copy of the data we hold.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Right to rectification</h3>
              <p>You may request correction of inaccurate or incomplete data we hold about you.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Right to erasure</h3>
              <p>
                You may request deletion of your data where it is no longer needed for the purpose it was
                collected for, subject to legal retention obligations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Right to restriction of processing</h3>
              <p>
                You may ask us to limit how we process your data in certain circumstances, for example while
                you contest its accuracy.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Right to data portability</h3>
              <p>
                You may receive the data you provided to us in a structured, commonly used, machine-readable
                format, and ask us to transmit it to another controller where technically feasible.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Right to object</h3>
              <p>
                You may object at any time to processing based on our legitimate interests, and to any
                processing for direct marketing.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Right to withdraw consent</h3>
              <p>
                Where processing rests on consent, you may withdraw it at any time without affecting the
                lawfulness of processing before withdrawal.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Rights in relation to automated decision-making
              </h3>
              <p>
                You may object to decisions based solely on automated processing that significantly affect
                you, and request human reconsideration as described in Section 14.
              </p>
            </div>
          </div>
          <p>
            13.2. To exercise any right, email our Data Protection Officer at xavorianlegal@gmail.com with the
            subject line &quot;Data Subject Request&quot;. To protect you, we may take reasonable steps to
            confirm your identity before disclosing or acting on personal data. Exercising your rights is free
            of charge; where a request is manifestly unfounded or excessive we may charge a reasonable fee or
            decline to act, and we will explain why.
          </p>
          <p>
            13.3. We will respond within thirty days of a valid request. Where a request is complex or you have
            made several requests, we may extend this period by up to sixty further days, and we will tell you
            within the first thirty days if that applies.
          </p>
          <p>
            13.4. If you are not satisfied with our handling of your personal data or our response to a
            complaint, you have the right to lodge a complaint with the supervisory authority, the Nigeria
            Data Protection Commission (NDPC), the body established under the Nigeria Data Protection Act 2023
            which succeeded the NDPR-era data protection functions of the National Information Technology
            Development Agency (NITDA). Complaints may be made through the Commission&apos;s official channels,
            including its website at ndpc.gov.ng.
          </p>
        </section>

        {/* Section 14 */}
        <section id="sec-14" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            14. AUTOMATED DECISION-MAKING AND PROFILING
          </h2>
          <p>
            14.1. To keep the Platform safe we use automated systems that produce fraud risk indicators and
            verification screening results. These systems consider signals such as the consistency of the
            identity data submitted, the outcome returned by verification partners, device and IP signals, and
            patterns of conduct associated with known fraud. We describe this logic only at a high level so
            that it cannot be circumvented by bad actors.
          </p>
          <p>
            14.2. We do not make decisions that produce legal or similarly significant effects about you, such
            as restricting your ability to transact, solely by automated means. Where an automated indicator
            suggests heightened risk, a member of our team reviews the matter before any significant
            restriction is applied.
          </p>
          <p>
            14.3. If an automated indicator has affected you, you may contact xavorianlegal@gmail.com to ask
            for human review, to put forward your point of view, and to contest the outcome. We will have a
            person re-examine the matter and tell you the result.
          </p>
        </section>

        {/* Section 15 */}
        <section id="sec-15" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            15. CHILDREN&apos;S PRIVACY
          </h2>
          <p>
            15.1. The Platform is intended only for persons aged eighteen years and above. We do not knowingly
            collect personal data from anyone under eighteen. If we discover that we have collected personal
            data from a person under eighteen, we will delete that data promptly. If you believe a minor has
            provided us with personal data, please contact xavorianlegal@gmail.com.
          </p>
        </section>

        {/* Section 16 */}
        <section id="sec-16" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            16. CHANGES TO THIS POLICY
          </h2>
          <p>
            16.1. We may update this Policy from time to time to reflect changes in our data practices, our
            product, or applicable law. For material changes, we will give you at least fourteen days&apos;
            notice, by email to the address we hold for you or through a prominent notice on the Platform,
            before the change takes effect. The current version will always be available at xavorian.com with
            its effective date shown at the top. Your continued use of the Platform after an updated Policy
            takes effect constitutes your acceptance of the updated Policy.
          </p>
        </section>

        {/* Section 17 */}
        <section id="sec-17" className="scroll-mt-24 space-y-4">
          <h2 className="pt-4 text-base font-bold tracking-tight text-foreground">
            17. CONTACT AND COMPLAINTS
          </h2>
          <p>
            17.1. For all privacy-related questions, requests, or complaints, please contact our Data
            Protection Office:
          </p>
          <div className="max-w-md space-y-2 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
            <p className="font-bold text-foreground">Xavorian Technology Company — Data Protection Office</p>
            <p>
              Email: <span className="font-semibold text-foreground">xavorianlegal@gmail.com</span>
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
          <p>
            17.2. We will acknowledge your enquiry and respond within the timeframes described in Section 13.
            If you are not satisfied with our response, you may escalate your complaint to the Nigeria Data
            Protection Commission (NDPC), the supervisory authority under the Nigeria Data Protection Act 2023
            (successor to the NDPR-era functions of NITDA), through its official channels including
            ndpc.gov.ng.
          </p>
        </section>

        <hr className="border-border" />

        <div className="rounded-2xl border border-border bg-muted p-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-foreground">
            Trust is not a feature. It is the product.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">xavorian.com | xavorianlegal@gmail.com</p>
        </div>
      </div>
      </div>
    </article>
  );
}
