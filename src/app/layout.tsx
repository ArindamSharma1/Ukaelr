import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbita AI | Always-On AI Support for a Global Customer Base",
  description: "Global chat assistant that keeps your business in orbit with seamless communication, instant responses, and smarter support across 30+ languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#03080c] text-white min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
