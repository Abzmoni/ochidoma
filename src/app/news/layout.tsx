import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Royal Gazette",
  description:
    "Royal statements, appeals and endowments, traditional events and press releases issued by the Palace of the Och'Idoma, Otukpo, Benue State.",
  openGraph: {
    title: "The Royal Gazette · Palace of the Och'Idoma",
    description:
      "Official dispatches of the Paramount Ruler of the Idoma Nation, published in full from the Royal Archive at Otukpo.",
  },
};

export default function NewsLayout({ children }: LayoutProps<"/news">) {
  return children;
}
