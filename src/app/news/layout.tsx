import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Palace Journal",
  description:
    "Explore source-based stories from the 2024 coronation anniversary programme, traditional leadership and palace heritage.",
  openGraph: {
    title: "The Palace Journal · Palace of the Och'Idoma",
    description:
      "Historical stories, biographies and community records from the June 2024 coronation anniversary programme.",
  },
};

export default function NewsLayout({ children }: LayoutProps<"/news">) {
  return children;
}
