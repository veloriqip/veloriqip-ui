export const metadata = {
  title: "Terms and Conditions",
  description:
    "Review VeloriqIP’s Terms and Conditions outlining the rules, responsibilities, and legal guidelines for using our website and intellectual property services.",
  alternates: {
    canonical: "https://veloriqip.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function TermsAndCondtions() {
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
      <div className="mt-25">
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Terms of Service
              </h1>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    Welcome to VeloriqIP These Terms and Conditions (“Terms”)
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

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  2. Nature of Services
                </h2>
                <p>
                  VeloriqIP provides professional services related to
                  Intellectual Property Rights, including but not limited to:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3">
                      <svg
                        className="h-6 w-6 text-blue-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Patent filing and prosecution.</span>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="h-6 w-6 text-blue-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Patentability searches and analysis</span>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="h-6 w-6 text-blue-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Trademark, copyright, and design-related services
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <svg
                        className="h-6 w-6 text-blue-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>IP advisory and consulting services</span>
                    </li>
                  </ul>
                </div>
                <p>
                  All services are provided on a best-effort basis and are
                  subject to applicable laws, regulations, and professional
                  standards in India and other relevant jurisdictions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  3. No Legal Advice Disclaimer
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        The content available on this Website is provided for
                        general informational purposes only and does not
                        constitute legal advice or a professional opinion.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mt-5">
                  <li className="mb-1">
                    Accessing or communicating through this Website does not
                    create a client–professional relationship unless expressly
                    agreed in writing.
                  </li>
                  <li className="mb-1">
                    Users are advised to seek formal professional advice before
                    taking any action based on Website content.
                  </li>
                </ul>

                <br />
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Eligibility and User Responsibility
                </h2>
                <p>By using this Website, you confirm that:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Age Limitations
                    </h3>
                    <p className="text-gray-600">
                      You are at least 18 years of age.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Legal Capacity
                    </h3>
                    <p className="text-gray-600">
                      You have the legal capacity to enter into binding
                      agreements.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Information Integrity
                    </h3>
                    <p className="text-gray-600">
                      Information provided by you is accurate, complete, and
                      lawful.
                    </p>
                  </div>
                </div>
                <p>
                  You agree not to use the Website for any fraudulent, unlawful,
                  or harmful purpose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  5. Intellectual Property Rights
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    All content on this Website, including but not limited to:
                  </p>
                  <ul className="list-disc px-5 py-2 bg-gray-50">
                    <li>Text, graphics, logos, icons</li>
                    <li>Brand name, tagline, and visual identity</li>
                    <li>Website layout and design</li>
                  </ul>
                  <p>
                    is the exclusive intellectual property of VeloriqIP,
                    unless otherwise stated.
                  </p>
                  <p>
                    Unauthorized copying, reproduction, distribution, or
                    commercial use of any content is strictly prohibited and may
                    result in legal action.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  6. Confidentiality and Communication
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    While we take reasonable measures to protect information
                    shared with us:
                  </p>
                  <ul className="list-disc px-5 py-2 bg-gray-50">
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

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  7. Fees, Payments, and Engagement
                </h2>
                <div className="prose text-gray-600">
                  <ul className="list-disc px-5 py-2 bg-gray-50">
                    <li>
                      Fees for services are communicated separately via
                      proposal, quotation, or engagement letter.
                    </li>
                    <li>
                      Payment terms, scope of work, and timelines are governed
                      by individual service agreements.
                    </li>
                  </ul>
                  <p>
                    The Company reserves the right to refuse or discontinue
                    services in case of non-payment or misuse.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  8. Third-Party Links
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    This Website may contain links to third-party websites for
                    convenience. VeloriqIP does not control or endorse such
                    websites and is not responsible for their content, policies,
                    or practices.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  9. Limitation of Liability
                </h2>
                <div className="prose text-gray-600">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc px-5 py-2 bg-gray-50">
                    <li>
                      VeloriqIP shall not be liable for any direct, indirect,
                      incidental, or consequential damages.
                    </li>
                    <li>
                      We do not guarantee uninterrupted or error-free access to
                      the Website.
                    </li>
                  </ul>
                  <p>
                    We are not responsible for decisions taken by users based on
                    Website information.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  10. Indemnification
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    You agree to indemnify and hold harmless VeloriqIP, its
                    directors, employees, and associates from any claims,
                    losses, or liabilities arising from:
                  </p>
                  <ul className="list-disc px-5 py-2 bg-gray-50">
                    <li>Your misuse of the Website.</li>
                    <li>Violation of these Terms</li>
                    <li>Infringement of any third-party rights</li>
                  </ul>
                  <p>
                    We are not responsible for decisions taken by users based on
                    Website information.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  11. Governing Law and Jurisdiction
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    These Terms shall be governed by and interpreted in
                    accordance with the laws of India.
                  </p>
                  <p>
                    Any disputes shall be subject to the exclusive jurisdiction
                    of the courts at [City, State].
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  12. Modification of Terms
                </h2>
                <div className="prose text-gray-600">
                  <p>
                    We reserve the right to update or modify these Terms at any
                    time without prior notice.
                  </p>
                  <p>
                    Continued use of the Website after changes constitutes
                    acceptance of the revised Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
                  <p className="text-gray-600">
                    For any questions or concerns regarding these Terms ? Please
                    contact:
                  </p>
                  <a
                    href="mailto:info@veloriqip.com"
                    className="inline-flex items-center text-[rgb(var(--brand-gold))] hover:text-[rgb(var(--brand-navy))]"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
