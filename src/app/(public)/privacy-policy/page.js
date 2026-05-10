import { Mail } from "lucide-react";

const sectionClassName =
  "rounded-[20px] border border-slate-200 bg-white p-6 sm:p-8";

const listPanelClassName =
  "mt-5 rounded-[16px] border border-slate-200 bg-slate-50 p-5";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Veloriq IP’s Privacy Policy to understand how we collect, use, protect, and manage personal information across our website and services.",
  alternates: {
    canonical: "https://veloriqip.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://veloriqip.com/privacy-policy",
            name: "Privacy Policy",
            url: "https://veloriqip.com/privacy-policy",
            description:
              "Privacy policy explaining how Veloriq IP collects, uses, protects, and manages personal information.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://veloriqip.com/#website",
            },
            about: {
              "@type": "Organization",
              "@id": "https://veloriqip.com/#organization",
              name: "Veloriq IP",
            },
          }),
        }}
      />

      <div className="mt-28 mb-20 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white px-5 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:px-8 lg:px-12 lg:py-12">
          <div className="max-w-3xl border-b border-slate-200 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Legal Information
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              This privacy policy sets out how our website uses and protects
              any information that you give us when you use this website.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            <section className={sectionClassName}>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Information We Collect
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                We may collect the following information:
              </p>
              <ul className={`${listPanelClassName} list-disc pl-10 text-sm leading-7 text-slate-600 sm:text-[15px]`}>
                <li>Your name and contact information</li>
                <li>Demographic information</li>
                <li>
                  Other information relevant to customer surveys and/or offers
                </li>
              </ul>
            </section>

            <section className={sectionClassName}>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                How We Use the Information
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                We require this information to understand your needs and provide
                you with a better service, and in particular for the following
                reasons:
              </p>
              <ul className={`${listPanelClassName} list-disc pl-10 text-sm leading-7 text-slate-600 sm:text-[15px]`}>
                <li>Internal record keeping</li>
                <li>Improving our products and services</li>
                <li>
                  Sending promotional emails about new products, special
                  offers, or other information which we think you may find
                  interesting
                </li>
                <li>
                  From time to time, we may also use your information to
                  contact you for market research purposes. We may contact you
                  by email, phone, or mail. We may use the information to
                  customize the website according to your interests.
                </li>
              </ul>
            </section>

            <div className="grid gap-6 xl:grid-cols-2">
              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900">
                  Security
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  We are committed to ensuring that your information is secure.
                  In order to prevent unauthorized access or disclosure, we
                  have put in place suitable physical, electronic, and
                  managerial procedures to safeguard and secure the information
                  we collect online.
                </p>
              </section>

              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900">
                  Cookies
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  <p>
                    A cookie is a small file that asks permission to be placed
                    on your computer&apos;s hard drive. Once you agree, the file is
                    added, and the cookie helps analyze web traffic or lets you
                    know when you visit a particular site. Cookies allow web
                    applications to respond to you as an individual. The web
                    application can tailor its operations to your needs, likes,
                    and dislikes by gathering and remembering information about
                    your preferences.
                  </p>
                  <p>
                    Overall, cookies help us provide you with a better website
                    by enabling us to monitor which pages you find useful and
                    which you do not. A cookie in no way gives us access to your
                    computer or any information about you, other than the data
                    you choose to share with us.
                  </p>
                </div>
              </section>

              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900">
                  Links to Other Websites
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  Our website may contain links to other websites of interest.
                  However, once you have used these links to leave our site,
                  you should note that we do not have any control over that
                  other website. Therefore, we cannot be responsible for the
                  protection and privacy of any information which you provide
                  whilst visiting such sites and such sites are not governed by
                  this privacy statement. You should exercise caution and look
                  at the privacy statement applicable to the website in
                  question.
                </p>
              </section>

              <section className={sectionClassName}>
                <h2 className="text-xl font-semibold text-slate-900">
                  Controlling Your Personal Information
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                  You may choose to restrict the collection or use of your
                  personal information in the following ways:
                </p>
                <ul className={`${listPanelClassName} list-disc pl-10 text-sm leading-7 text-slate-600 sm:text-[15px]`}>
                  <li>
                    If you have previously agreed to us using your personal
                    information for direct marketing purposes, you may change
                    your mind at any time by writing or emailing us at
                    info@veloriqip.com
                  </li>
                  <li>
                    We will not sell, distribute, or lease your personal
                    information to third parties unless we have your permission
                    or are required by law to do so. We may use your personal
                    information to send you promotional information about third
                    parties which we think you may find interesting if you tell
                    us that you wish this to happen.
                  </li>
                  <li>
                    You may request details of personal information which we
                    hold about you. If you would like a copy of the information
                    held on you, please email us at info@veloriqip.com
                  </li>
                  <li>
                    If you believe that any information we are holding on you
                    is incorrect or incomplete, please write us as soon as
                    possible at the above address. We will promptly correct any
                    information found to be incorrect.
                  </li>
                </ul>
              </section>
            </div>

            <section className="rounded-[20px] border border-slate-200 bg-slate-900 p-6 text-white sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Updates and Contact
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                    This privacy policy is subject to change without notice.
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
        </section>
      </div>
    </>
  );
}
