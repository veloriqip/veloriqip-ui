export const metadata = {
  title: "Technical Support",
  description:
    "Report technical issues, bugs, or access problems related to the Veloriq IP website. Our support team will assist you promptly.",
  alternates: {
    canonical: "https://veloriqip.com/support",
  },
  openGraph: {
    title: "Technical Support | Veloriq IP",
    description:
      "Facing a technical issue on the Veloriq IP website? Report bugs, errors, or access issues and get help from our support team.",
    url: "https://veloriqip.com/support",
  },
};

import SupportForm from "@/components/Form/SupportForm";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Veloriq IP Technical Support",
            url: "https://veloriqip.com/support",
            description:
              "Technical support page for reporting website issues, bugs, and access problems.",
            mainEntity: {
              "@id": "https://veloriqip.com/#organization",
            },
          }),
        }}
      />

      <SupportForm />
    </>
  );
}
