import MetricsSectionV2 from "@/components/Metrics/MetricsSectionV2";
export const metadata = {
  title: "Metrics",
  description:
    "View Veloriq IP’s key metrics and impact, highlighting intellectual property matters handled, technical domains covered, and our client-focused execution approach.",
  alternates: {
    canonical: "https://veloriqip.com/metrics",
  },
  openGraph: {
    title: "Veloriq IP Metrics & Impact",
    description:
      "Key performance and impact metrics highlighting Veloriq IP’s experience across patents, trademarks, and IP strategy.",
    url: "https://veloriqip.com/metrics",
    type: "website",
  },
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://veloriqip.com/metrics",
            name: "Veloriq IP Metrics & Impact",
            url: "https://veloriqip.com/metrics",
            description:
              "Key metrics and impact highlighting Veloriq IP’s intellectual property experience, technical coverage, and client-focused execution.",
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

      <div className="mt-35 mb-20">
        <MetricsSectionV2 />
      </div>
    </>
  );
}
