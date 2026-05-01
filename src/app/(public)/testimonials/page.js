import TestimonialsSection from "@/components/TestimonialsSection";
export const metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials and feedback highlighting VeloriqIP’s expertise in patents, trademarks, and strategic intellectual property services.",
  alternates: {
    canonical: "https://veloriqip.com/testimonials",
  },
  robots: {
    index: true,
    follow: true,
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
            "@type": "ItemList",
            name: "VeloriqIP Client Testimonials",
            url: "https://veloriqip.com/testimonials",
            itemListElement: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Startup Founder",
                },
                reviewBody:
                  "VeloriqIP supported us from idea structuring to filing a well-defined patent application. Their technical inputs strengthened our claims and overall IP strategy.",
                itemReviewed: {
                  "@type": "Organization",
                  name: "VeloriqIP",
                },
              },
            ],
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <TestimonialsSection />
      </div>
    </>
  );
}
