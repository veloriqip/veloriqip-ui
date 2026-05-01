import ServicePage from "@/components/Service/ServicePage";
import services from "@/data/services.json";
import { notFound } from "next/navigation";

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title}`,
    description: service.description,
    alternates: {
      canonical: `https://veloriqip.com/service/${slug}`,
    },
    openGraph: {
      title: `${service.title} | VeloriqIP`,
      description: service.description,
      url: `https://veloriqip.com/service/${slug}`,
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
      title: `${service.title} | VeloriqIP`,
      description: service.description,
      images: [`https://veloriqip.com/logo.svg`],
    },
  };
}

/* -------------------- PAGE -------------------- */
export default async function Page({ params }) {
  const { slug } = await params;
  if (!services) notFound();
  const service = services?.find((b) => b.slug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://veloriqip.com/service/${service.slug}#service`,
            name: service.title,
            description: service.description,
            serviceType: service.title,
            url: `https://veloriqip.com/service/${service.slug}`,
            provider: {
              "@id": "https://veloriqip.com/#organization",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "India",
            },
          }),
        }}
      />

      <div className="mt-35">
        {service && <ServicePage service={service} />}
      </div>
    </>
  );
}

/* -------------------- STATIC GENERATION -------------------- */
export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}
