import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Clarity from "@/components/Clarity";
import GlobalFetchLoader from "@/components/GlobalFetchLoader";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://veloriqip.com"),

  title: {
    default:
      "VeloriqIP | Intellectual Property & Patent Services for Innovators",
    template: "%s | VeloriqIP",
  },

  description:
    "VeloriqIP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, universities, and innovation-driven enterprises.",

  openGraph: {
    title:
      "VeloriqIP | Intellectual Property & Patent Services for Innovators",
    description:
      "VeloriqIP helps innovators protect, manage, and scale their ideas through strong intellectual property, patent, and trademark services.",
    url: "https://veloriqip.com/",
    siteName: "VeloriqIP",
    images: [
      {
        url: "https://veloriqip.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "VeloriqIP – Intellectual Property Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "VeloriqIP | Intellectual Property & Patent Services for Innovators",
    description:
      "Expert intellectual property, patent, and trademark services by VeloriqIP for startups and enterprises.",
  },

  alternates: {
    canonical: "https://veloriqip.com/",
  },
};


const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics gaId={GA_ID}/>
        <Clarity id={CLARITY_ID}/>
        <GlobalFetchLoader />
        {children}
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
