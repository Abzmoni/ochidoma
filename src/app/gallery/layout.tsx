import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Photographs & Videos",
  description:
    "Explore the palace photo collection, royal addresses and cultural videos.",
};
export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
