import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact the Palace Secretariat",
  description:
    "Official channels for civic correspondence, traditional council inquiries, media relations, and diplomatic liaison with the Palace of the Och'Idoma, Otukpo.",
  openGraph: {
    title: "Contact the Palace Secretariat · Palace of the Och'Idoma",
    description:
      "Write to the Palace Directorate of Communications, the Media & Press Bureau, or the Secretariat at Otukpo, Benue State.",
  },
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
