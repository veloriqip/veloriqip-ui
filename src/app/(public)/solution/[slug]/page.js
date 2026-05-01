import SolutionPage from "@/components/Solution/SolutionPage";
import solutions from "@/data/solutions.json";
import { notFound } from "next/navigation";

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.audience}`,
    description: solution.headline,
    alternates: {
      canonical: `https://veloriqip.com/solution/${slug}`,
    },
    openGraph: {
      title: `${solution.audience} | VeloriqIP`,
      description: solution.headline,
      url: `https://veloriqip.com/solution/${slug}`,
      type: "article",
      images: [
        {
          url: `https://veloriqip.com/logo.svg`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.audience} | VeloriqIP`,
      description: solution.headline,
      images: [
        `https://veloriqip.com/logo.svg`,
      ],
    },
  };
}

/* -------------------- PAGE -------------------- */
export default async function Page({ params }) {
  const { slug } = await params;
  if (!solutions) notFound();
  const solution = solutions?.find((b) => b.slug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: solution.audience,
            description: solution.headline,
            url: `https://veloriqip.com/solution/${solution.slug}`,
            provider: {
              "@type": "Organization",
              name: "VeloriqIP",
              url: "https://veloriqip.com",
              logo: "https://veloriqip.com/logo.svg",
            },
          }),
        }}
      />
      <div className="mt-35">
        {solution && <SolutionPage solution={solution} />}
      </div>
    </>
  );
}

/* -------------------- STATIC GENERATION -------------------- */
export async function generateStaticParams() {
  return solutions.map((s) => ({
    slug: s.slug,
  }));
}