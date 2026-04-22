import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ukaelr | Industrial Engineering & Innovation",
    template: "%s | Ukaelr"
  },
  description: "Ukaelr (OPC) Private Limited — Engineering excellence in plant machinery, industrial infrastructure, scientific research, and intellectual property solutions. Building India's industrial future.",
  keywords: ["Industrial Engineering", "Plant Machinery", "Infrastructure", "Scientific Research", "Intellectual Property", "Manufacturing India", "Ukaelr"],
  authors: [{ name: "Ukaelr Team" }],
  creator: "Ukaelr",
  publisher: "Ukaelr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ukaelr.com"), // Placeholder URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ukaelr | Industrial Engineering & Innovation",
    description: "Engineering excellence in plant machinery, industrial infrastructure, and IP solutions.",
    url: "https://ukaelr.com",
    siteName: "Ukaelr",
    images: [
      {
        url: "/ukaelr-logo.png",
        width: 800,
        height: 600,
        alt: "Ukaelr Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ukaelr | Industrial Engineering & Innovation",
    description: "Building India's Industrial Future.",
    images: ["/ukaelr-logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#2E3665] text-[#A8B0D8] min-h-screen selection:bg-[#6E8CFB]/30 selection:text-[#E0E4FF] md:cursor-none`}>
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
