import ServiceSection from "@/components/Service/ServiceSection";
import services from "@/data/services.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "Our Services",
  description:
    "Discover VeloriqIP's professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",

  alternates: {
    canonical: "https://veloriqip.com/service",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Our Services | VeloriqIP",
    description:
      "Discover VeloriqIP's professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",
    url: "https://veloriqip.com/service",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | VeloriqIP",
    description:
      "Discover VeloriqIP's professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",
    images: ["https://veloriqip.com/logo.svg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://veloriqip.com/service#itemlist",
            name: "VeloriqIP Services",
            url: "https://veloriqip.com/service",
            description:
              "Professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",
            publisher: {
              "@id": "https://veloriqip.com/#organization",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://veloriqip.com/service",
            },
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://veloriqip.com/service#${service.slug}`,
              name: service.title,
              description: service.description,
            })),
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <ServiceSection />
      </div>
    </>
  );
}
