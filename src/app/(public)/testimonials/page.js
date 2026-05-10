import TestimonialsSectionV2 from "@/components/TestimonialsSectionV2";
export const metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials and feedback highlighting Veloriq IP’s expertise in patents, trademarks, and strategic intellectual property services.",
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
            name: "Veloriq IP Client Testimonials",
            url: "https://veloriqip.com/testimonials",
            itemListElement: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Startup Founder",
                },
                reviewBody:
                  "Veloriq IP supported us from idea structuring to filing a well-defined patent application. Their technical inputs strengthened our claims and overall IP strategy.",
                itemReviewed: {
                  "@type": "Organization",
                  name: "Veloriq IP",
                },
              },
            ],
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <TestimonialsSectionV2 />
      </div>
    </>
  );
}
