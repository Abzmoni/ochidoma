import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & stories",
  description:
    "Palace announcements, community stories and moments from our history.",
  openGraph: {
    title: "News & stories · Palace of the Och'Idoma",
    description:
      "News, community stories and the life of the traditional institution.",
  },
};

export default function NewsLayout({ children }: LayoutProps<"/news">) {
  return children;
}
