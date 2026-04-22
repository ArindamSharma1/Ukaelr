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
    <html lang="en">
      <body className={`${inter.className} bg-[#F7F3EB] text-[#4A5568] min-h-screen selection:bg-teal-500/20 selection:text-[#1B2A3D]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
