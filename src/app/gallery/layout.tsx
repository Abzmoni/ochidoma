import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Imperial Gallery & Visual Chronicle",
  description:
    "The publicly cleared selection from Record Division IDM-ARC-88 — royal conclaves, investitures, sacred regalia, diaspora audiences and civic outreach of the Paramount Stool.",
  openGraph: {
    title: "The Imperial Gallery · Palace of the Och'Idoma",
    description:
      "Photographic plates, audio-visual records and oral histories held by the Palace Directorate of Archival Records at Otukpo.",
  },
};

export default function GalleryLayout({ children }: LayoutProps<"/gallery">) {
  return children;
}
