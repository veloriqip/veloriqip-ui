import RequirementMultiStepForm from "@/components/Form/RequirementMultiStepForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Veloriq IP for expert guidance on intellectual property, patents, trademarks, and IP strategy. Our team is here to help.",

  alternates: {
    canonical: "https://veloriqip.com/contact",
  },

  openGraph: {
    title: "Contact Veloriq IP | IP Support & Assistance",
    description:
      "Get professional intellectual property support and guidance from the Veloriq IP team.",
    url: "https://veloriqip.com/contact",
    siteName: "Veloriq IP",
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
            name: "Contact Veloriq IP",
            url: "https://veloriqip.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Veloriq IP",
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
