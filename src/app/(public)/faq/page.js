import FAQs from "@/components/FAQs";
export const metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about VeloriqIP’s intellectual property, patent, trademark, and IP advisory services.",
  alternates: {
    canonical: "https://veloriqip.com/faq",
  },
  openGraph: {
    title: "FAQs | VeloriqIP",
    description:
      "Answers to frequently asked questions about patents, trademarks, and intellectual property services at VeloriqIP.",
    url: "https://veloriqip.com/faq",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does your company provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We provide end-to-end intellectual property services including patent searches, drafting and filing of patents, trademarks, designs, copyrights, IP prosecution support, and IP strategy advisory."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide legal advice through the website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. The information on this website is for general informational purposes only and does not constitute legal advice. A professional relationship is established only after formal engagement."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my invention is patentable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Patentability depends on novelty, inventive step, and industrial applicability. We conduct structured patentability and prior-art searches to assess eligibility."
      }
    }
  ]
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQs />
    </>
  );
}
