import Footers from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Veloriq IP – IP Services",
    template: "%s | Veloriq IP",
  },
  description:
    "Veloriq IP provides expert intellectual property services, solutions, and legal support for startups and enterprises.",
  openGraph: {
    title: "Veloriq IP – IP Services",
    description:
      "Veloriq IP provides expert intellectual property services, solutions, and legal support for startups and enterprises.",
    url: "https://veloriqip.com/",
    siteName: "Veloriq IP",
    images: [
      {
        url: "https://veloriqip.com/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://veloriqip.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footers />
    </>
  );
}
