import type { Metadata } from "next";

/* The route renders one communiqué regardless of the slug, so the title states
   that communiqué rather than deriving a heading the body would not match. */
export const metadata: Metadata = {
  title:
    "Royal Communiqué on Peaceful Coexistence, Ancestral Land Stewardship, and Youth Civic Integration",
  description:
    "The full text of the Royal Communiqué of the Och'Idoma on peaceful coexistence, ancestral land stewardship, and youth civic integration across the Idoma nation.",
  openGraph: {
    type: "article",
    title: "Royal Communiqué on Peaceful Coexistence & Land Stewardship",
    description:
      "Issued by the Palace of the Och'Idoma, Otukpo, and ratified by the Idoma Area Traditional Council.",
  },
};

export default function CommuniqueLayout({
  children,
}: LayoutProps<"/news/[slug]">) {
  return children;
}
