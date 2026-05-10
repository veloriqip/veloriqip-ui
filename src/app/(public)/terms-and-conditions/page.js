import { Mail } from "lucide-react";

const sectionClassName =
  "rounded-[20px] border border-slate-200 bg-white p-6 sm:p-8";

const listPanelClassName =
  "mt-5 rounded-[16px] border border-slate-200 bg-slate-50 p-5";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Review Veloriq IP’s Terms and Conditions outlining the rules, responsibilities, and legal guidelines for using our website and intellectual property services.",
  alternates: {
    canonical: "https://veloriqip.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function TermsAndConditions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            url: "https://veloriqip.com/terms-and-conditions",
            publisher: {
              "@id": "https://veloriqip.com/#organization",
            },
          }),
        }}
      />
      <div className="mt-28 mb-20 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white px-5 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:px-8 lg:px-12 lg:py-12">
          <div>
            <div className="max-w-3xl border-b border-slate-200 pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Legal Information
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Terms of Service
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Review the terms, responsibilities, and usage conditions that
                apply when accessing the Veloriq IP website and related
                services.
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  1. Acceptance of Terms
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  <p>
                    Welcome to Veloriq IP These Terms and Conditions (“Terms”)
                    govern your access to and use of our website
                    [www.veloriqip.com] (“Website”) and the services provided
                    through it.
                  </p>
                  <p>
                    By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                </div>
              </section>

              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  2. Nature of Services
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  Veloriq IP provides professional services related to
                  Intellectual Property Rights, including but not limited to:
                </p>
                <div className={listPanelClassName}>
                  <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    <li>Patent filing and prosecution.</li>
                    <li>Patentability searches and analysis</li>
                    <li>Trademark, copyright, and design-related services</li>
                    <li>IP advisory and consulting services</li>
                  </ul>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  All services are provided on a best-effort basis and are
                  subject to applicable laws, regulations, and professional
                  standards in India and other relevant jurisdictions.
                </p>
              </section>

              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  3. No Legal Advice Disclaimer
                </h2>
                <div className="mt-5 rounded-[16px] border border-amber-200 bg-amber-50 px-5 py-4">
                  <p className="text-sm leading-7 text-amber-900 sm:text-[15px] sm:leading-8">
                    The content available on this Website is provided for
                    general informational purposes only and does not constitute
                    legal advice or a professional opinion.
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  <li>
                    Accessing or communicating through this Website does not
                    create a client–professional relationship unless expressly
                    agreed in writing.
                  </li>
                  <li>
                    Users are advised to seek formal professional advice before
                    taking any action based on Website content.
                  </li>
                </ul>
              </section>

              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  4. Eligibility and User Responsibility
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  By using this Website, you confirm that:
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      Age Limitations
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      You are at least 18 years of age.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      Legal Capacity
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      You have the legal capacity to enter into binding
                      agreements.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      Information Integrity
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Information provided by you is accurate, complete, and
                      lawful.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  You agree not to use the Website for any fraudulent, unlawful,
                  or harmful purpose.
                </p>
              </section>

              <div className="grid gap-6 xl:grid-cols-2">
                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    5. Intellectual Property Rights
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>
                      All content on this Website, including but not limited to:
                    </p>
                    <ul className={`${listPanelClassName} list-disc pl-10`}>
                      <li>Text, graphics, logos, icons</li>
                      <li>Brand name, tagline, and visual identity</li>
                      <li>Website layout and design</li>
                    </ul>
                    <p>
                      is the exclusive intellectual property of Veloriq IP,
                      unless otherwise stated.
                    </p>
                    <p>
                      Unauthorized copying, reproduction, distribution, or
                      commercial use of any content is strictly prohibited and
                      may result in legal action.
                    </p>
                  </div>
                </section>

                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    6. Confidentiality and Communication
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>
                      While we take reasonable measures to protect information
                      shared with us:
                    </p>
                    <ul className={`${listPanelClassName} list-disc pl-10`}>
                      <li>
                        Communication via the Website or email is not guaranteed
                        to be secure
                      </li>
                      <li>
                        Submission of information does not automatically imply
                        confidentiality unless agreed in writing
                      </li>
                    </ul>
                    <p>
                      Users are advised not to share sensitive or confidential
                      information unless formally instructed to do so.
                    </p>
                  </div>
                </section>

                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    7. Fees, Payments, and Engagement
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <ul className={`${listPanelClassName} list-disc pl-10`}>
                      <li>
                        Fees for services are communicated separately via
                        proposal, quotation, or engagement letter.
                      </li>
                      <li>
                        Payment terms, scope of work, and timelines are
                        governed by individual service agreements.
                      </li>
                    </ul>
                    <p>
                      The Company reserves the right to refuse or discontinue
                      services in case of non-payment or misuse.
                    </p>
                  </div>
                </section>

                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    8. Third-Party Links
                  </h2>
                  <div className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>
                      This Website may contain links to third-party websites for
                      convenience. Veloriq IP does not control or endorse such
                      websites and is not responsible for their content,
                      policies, or practices.
                    </p>
                  </div>
                </section>

                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    9. Limitation of Liability
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>To the maximum extent permitted by law:</p>
                    <ul className={`${listPanelClassName} list-disc pl-10`}>
                      <li>
                        Veloriq IP shall not be liable for any direct, indirect,
                        incidental, or consequential damages.
                      </li>
                      <li>
                        We do not guarantee uninterrupted or error-free access
                        to the Website.
                      </li>
                    </ul>
                    <p>
                      We are not responsible for decisions taken by users based
                      on Website information.
                    </p>
                  </div>
                </section>

                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    10. Indemnification
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>
                      You agree to indemnify and hold harmless Veloriq IP, its
                      directors, employees, and associates from any claims,
                      losses, or liabilities arising from:
                    </p>
                    <ul className={`${listPanelClassName} list-disc pl-10`}>
                      <li>Your misuse of the Website.</li>
                      <li>Violation of these Terms</li>
                      <li>Infringement of any third-party rights</li>
                    </ul>
                    <p>
                      We are not responsible for decisions taken by users based
                      on Website information.
                    </p>
                  </div>
                </section>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    11. Governing Law and Jurisdiction
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>
                      These Terms shall be governed by and interpreted in
                      accordance with the laws of India.
                    </p>
                    <p>
                      Any disputes shall be subject to the exclusive
                      jurisdiction of the courts at [City, State].
                    </p>
                  </div>
                </section>

                <section className={sectionClassName}>
                  <h2 className="text-xl font-semibold text-slate-900">
                    12. Modification of Terms
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <p>
                      We reserve the right to update or modify these Terms at
                      any time without prior notice.
                    </p>
                    <p>
                      Continued use of the Website after changes constitutes
                      acceptance of the revised Terms.
                    </p>
                  </div>
                </section>
              </div>

              <section className="rounded-[20px] border border-slate-200 bg-slate-900 p-6 text-white sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      Contact
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                      For any questions or concerns regarding these Terms ?
                      Please contact:
                    </p>
                  </div>
                  <a
                    href="mailto:info@veloriqip.com"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
