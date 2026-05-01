import styles from "../page.module.css";
import BlogSection from "@/components/Blog/BlogSection";
import HR from "@/components/HR";
import ServiceSection from "@/components/Service/ServiceSection";
import SolutionsSection from "@/components/Solution/SolutionSection";
import MetricsSection from "@/components/Metrics/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSectionV2 from "@/components/HeroSectionV2";
import HeroSectionV3 from "@/components/HeroSectionV3";

export const metadata = {
  title: {
    absolute:
      "VeloriqIP | Intellectual Property & Patent Services for Innovators",
  },
  description:
    "VeloriqIP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, universities, and innovation-driven enterprises.",
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
                name: "VeloriqIP",
                alternateName: [
                  "VeloriqIP",
                  "Veloriq IP",
                ],
                url: "https://veloriqip.com",
                logo: "https://veloriqip.com/logo.svg",
                description:
                  "VeloriqIP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, and innovation-driven enterprises.",
              },
              {
                "@type": "WebSite",
                "@id": "https://veloriqip.com/#website",
                url: "https://veloriqip.com",
                name: "VeloriqIP",
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
          <ServiceSection />
          <HR />
          <SolutionsSection />
          <HR />
          <MetricsSection />
          <HR />
          <TestimonialsSection />
          <HR />
          <BlogSection />
          <HR />
        </main>
      </div>
    </>
  );
}
