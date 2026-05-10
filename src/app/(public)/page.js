import styles from "../page.module.css";
import HR from "@/components/HR";
import ServiceSectionV2 from "@/components/Service/ServiceSectionV2";
import SolutionSectionV3 from "@/components/Solution/SolutionSectionV3";
import MetricsSectionV2 from "@/components/Metrics/MetricsSectionV2";
import TestimonialsSectionV2 from "@/components/TestimonialsSectionV2";
import HeroSectionV3 from "@/components/HeroSectionV3";

export const metadata = {
  title: {
    absolute:
      "Veloriq IP | Intellectual Property & Patent Services for Innovators",
  },
  description:
    "Veloriq IP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, universities, and innovation-driven enterprises.",
  alternates: {
    canonical: "https://veloriqip.com",
  },
};


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://veloriqip.com/#organization",
                name: "Veloriq IP",
                alternateName: [
                  "Veloriq IP",
                  "Veloriq IP",
                ],
                url: "https://veloriqip.com",
                logo: "https://veloriqip.com/logo.svg",
                description:
                  "Veloriq IP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, and innovation-driven enterprises.",
              },
              {
                "@type": "WebSite",
                "@id": "https://veloriqip.com/#website",
                url: "https://veloriqip.com",
                name: "Veloriq IP",
                publisher: {
                  "@id": "https://veloriqip.com/#organization",
                },
              },
            ],
          }),
        }}
      />

      <div className={styles.page}>
        <main className={styles.main}>
          <HeroSectionV3 />
          <HR />
          <ServiceSectionV2 />
          <HR />
          <SolutionSectionV3 />
          <HR />
          <MetricsSectionV2 />
          <HR />
          <TestimonialsSectionV2 />
          <HR />
          {/* <BlogSection /> */}
          {/* <HR /> */}
        </main>
      </div>
    </>
  );
}
