import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Clarity from "@/components/Clarity";
import GlobalFetchLoader from "@/components/GlobalFetchLoader";
import ChatBot from "@/components/ChatBot";
import ToastProvider from "@/components/ToastProvider";

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
      "Veloriq IP | Intellectual Property & Patent Services for Innovators",
    template: "%s | Veloriq IP",
  },

  description:
    "Veloriq IP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, universities, and innovation-driven enterprises.",

  openGraph: {
    title:
      "Veloriq IP | Intellectual Property & Patent Services for Innovators",
    description:
      "Veloriq IP helps innovators protect, manage, and scale their ideas through strong intellectual property, patent, and trademark services.",
    url: "https://veloriqip.com/",
    siteName: "Veloriq IP",
    images: [
      {
        url: "https://veloriqip.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "Veloriq IP – Intellectual Property Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Veloriq IP | Intellectual Property & Patent Services for Innovators",
    description:
      "Expert intellectual property, patent, and trademark services by Veloriq IP for startups and enterprises.",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics gaId={GA_ID}/>
        <Clarity id={CLARITY_ID}/>
        <GlobalFetchLoader />
        <ToastProvider />
        {children}
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
