import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ukaelr | Premium Global AI Solutions",
  description: "Ukaelr provides intelligent, seamless communication, instant responses, and smarter support across 30+ languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-blue-950 text-white min-h-screen selection:bg-blue-500/30 selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
