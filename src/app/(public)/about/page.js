import Image from "next/image";

const coreFocusAreas = [
  "1. Technically enhanced patent drafting and patentability support.",
  "2. Accurate and compliant patent, trademark, and copyright filing.",
  "3. Strategic IP structuring aligned with business, funding, and expansion plans.",
  "4. Risk identification to reduce objections, oppositions, and future disputes.",
];

const clientChoiceReasons = [
  "1. Strong emphasis on enforceability, not symbolic filings.",
  "2. Client-centric communication with transparent processes.",
  "3. Industry-specific understanding of innovation and R&D workflows.",
  "4. Reliable execution that builds long-term trust.",
];

export const metadata = {
  title: "About Us",
  description:
    "Learn about Veloriq IP — an intellectual property firm focused on technically strong patent, trademark, and copyright filings aligned with business strategy.",
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Veloriq IP",
            url: "https://veloriqip.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "Veloriq IP",
              url: "https://veloriqip.com",
              logo: "https://veloriqip.com/logo.svg",
              description:
                "Veloriq IP is an intellectual property firm focused on technically strong patent, trademark, and IP strategy services.",
            },
          }),
        }}
      />

      <div className="mt-30 mb-20 px-4 sm:px-6 lg:px-8">
        <section className="relative mx-auto overflow-hidden rounded-[40px] border border-[rgb(var(--border))]/70 bg-[linear-gradient(180deg,#f7f4ee_0%,#f9f7f2_42%,#ffffff_100%)] px-5 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,48,73,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(181,155,90,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_34%,rgba(0,48,73,0.02)_100%)]" />

          <div className="relative">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.82fr)] xl:items-center">
              <div className="max-w-3xl">
                <h1 className="text-xl font-semibold uppercase tracking-[0.18em] text-slate-700">
                  What we do?
                </h1>
                <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[rgb(var(--brand-navy))] to-[rgb(var(--brand-gold))]" />
                <div className="mt-8 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                  <p>
                    Veloriq IP is an Intellectual Property Rights (IPR) firm
                    focused on technically strong filings, strategic IP
                    enhancement, and client-oriented execution. We work with
                    startups, MSMEs, universities, and innovation-driven
                    organizations to transform ideas into legally enforceable
                    and commercially valuable IP assets.
                  </p>
                  <p>
                    In a competitive innovation ecosystem, filing alone is not
                    enough. The quality of drafting, accuracy of filing, and
                    alignment with business goals determine the true strength of
                    intellectual property. Veloriq IP follows a structured,
                    detail-driven approach to ensure that every patent,
                    trademark, or copyright filing supports long-term
                    protection and growth.
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[460px]">
                <div className="absolute -left-5 top-6 h-24 w-24 rounded-full bg-[rgba(181,155,90,0.16)] blur-2xl" />
                <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-[rgba(0,48,73,0.12)] blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/70 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-[24px]">
                    <Image
                      width={900}
                      height={900}
                      sizes="(max-width: 1280px) 100vw, 460px"
                      className="h-auto w-full object-cover"
                      src="/about.png"
                      alt="Veloriq IP team providing intellectual property and patent services"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[30px] border border-white/80 bg-white/86 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <p className="text-sm font-semibold text-slate-800">
                  ✓ Our Core Focus Areas
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {coreFocusAreas.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/86 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <p className="text-sm font-semibold text-slate-800">
                  ✓ Why Clients Choose Veloriq IP
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {clientChoiceReasons.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-6 rounded-[30px] border border-white/80 bg-[rgb(var(--brand-navy))] p-6 text-white shadow-[0_18px_50px_rgba(0,48,73,0.18)] sm:p-7">
              <p className="text-sm leading-7 text-white/88 sm:text-[15px] sm:leading-8">
                We believe intellectual property is a business asset, not a
                formality. Veloriq IP exists to help organizations protect
                innovation with clarity, confidence, and technical precision,
                so they can grow securely in competitive markets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
