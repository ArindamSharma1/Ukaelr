import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ukaelr | Industrial Engineering & Innovation",
  description: "Ukaelr (OPC) Private Limited — Engineering excellence in plant machinery, industrial infrastructure, scientific research, and intellectual property solutions. Building India's industrial future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#2E3665] text-[#A8B0D8] min-h-screen selection:bg-[#6E8CFB]/30 selection:text-[#E0E4FF]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
