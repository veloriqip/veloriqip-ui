import RequirementMultiStepForm from "@/components/Form/RequirementMultiStepForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact VeloriqIP for expert guidance on intellectual property, patents, trademarks, and IP strategy. Our team is here to help.",

  alternates: {
    canonical: "https://veloriqip.com/contact",
  },

  openGraph: {
    title: "Contact VeloriqIP | IP Support & Assistance",
    description:
      "Get professional intellectual property support and guidance from the VeloriqIP team.",
    url: "https://veloriqip.com/contact",
    siteName: "VeloriqIP",
    type: "website",
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
            "@type": "ContactPage",
            name: "Contact VeloriqIP",
            url: "https://veloriqip.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "VeloriqIP",
              url: "https://veloriqip.com",
              logo: "https://veloriqip.com/logo.svg",
            },
          }),
        }}
      />

      <RequirementMultiStepForm />
    </>
  );
}
