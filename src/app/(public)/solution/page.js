import SolutionSectionV3 from "@/components/Solution/SolutionSectionV3";
import solutions from "@/data/solutions.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "Our Solutions",
  description:
    "Explore Veloriq IP's innovative IP solutions, including patent strategies, IP analytics, and legal consulting services.",
  alternates: {
    canonical: "https://veloriqip.com/solution",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Solutions | Veloriq IP",
    description:
      "Explore Veloriq IP's innovative IP solutions, including patent strategies, IP analytics, and legal consulting services.",
    url: "https://veloriqip.com/solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Solutions | Veloriq IP",
    description:
      "Explore Veloriq IP's innovative IP solutions, including patent strategies, IP analytics, and legal consulting services.",
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
            "@id": "https://veloriqip.com/solutions#itemlist",
            name: "Veloriq IP Solutions",
            url: "https://veloriqip.com/solutions",
            description:
              "Explore Veloriq IP’s intellectual property solutions, including patent strategy, IP analytics, and legal consulting services for innovators.",
            numberOfItems: solutions.length,
            publisher: {
              "@id": "https://veloriqip.com/#organization",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://veloriqip.com/solutions",
            },
            itemListElement: solutions.map((solution, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://veloriqip.com/solutions/${solution.slug}`,
              name: solution.headline,
            })),
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <SolutionSectionV3 />
      </div>
    </>
  );
}
