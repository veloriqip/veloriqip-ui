import BlogSection from "@/components/Blog/BlogSection";
import blogs from "@/data/blogs.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "IP & Legal Insights Blog",
  description:
    "Expert insights on patents, trademarks, copyrights, and intellectual property laws by VeloriqIP.",

  alternates: {
    canonical: "https://veloriqip.com/insights",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "IP & Legal Insights Blog | VeloriqIP",
    description:
      "Stay updated with the latest IP laws, filing strategies, and legal insights.",
    url: "https://veloriqip.com/insights",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IP & Legal Insights Blog | VeloriqIP",
    description:
      "Expert insights on patents, trademarks, copyrights, and intellectual property laws.",
    images: [
      "https://veloriqip.com/logo.svg", // optional, shows in Twitter preview
    ],
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
            "@id": "https://veloriqip.com/insights#itemlist",
            name: "IP & Legal Insights Blog",
            url: "https://veloriqip.com/insights",
            description:
              "Expert insights on patents, trademarks, copyrights, and intellectual property laws by VeloriqIP.",

            publisher: {
              "@type": "Organization",
              "@id": "https://veloriqip.com/#organization",
              name: "VeloriqIP",
              url: "https://veloriqip.com",
              logo: {
                "@type": "ImageObject",
                url: "https://veloriqip.com/logo.svg",
              },
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://veloriqip.com/insights",
            },

            itemListElement: blogs.map((blog, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://veloriqip.com/insights/${blog.slug}`,
              name: blog.title,
            })),
          }),
        }}
      />

      <BlogSection />
    </>
  );
}
