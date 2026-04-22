import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Exotic Timepieces",
  description: "Explore Ukaelr's exclusive collection of exotic timepieces, from skeletonized mechanical wonders to luxury tourbillons. Engineered for precision and style.",
  openGraph: {
    title: "Ukaelr Exotic Timepieces",
    description: "A curated collection of the world's most precise and elegant watches.",
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
