import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Our Products | Ukaelr — Exotic Timepiece Collection",
  description: "Explore Ukaelr's curated collection of exotic luxury watches. From skeleton mechanicals to gold chronographs — precision engineering meets timeless design.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
