import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Idoma Nation Abroad",
  description:
    "Diaspora chapters, homage protocol and civic partnership between the Palace of the Och'Idoma and Idoma communities across the world.",
  openGraph: {
    title: "The Idoma Nation Abroad · Palace of the Och'Idoma",
    description:
      "Registered diaspora chapters, sovereign audiences, and how Idoma sons and daughters abroad remain joined to the Paramount Stool.",
  },
};

export default function DiasporaLayout({ children }: LayoutProps<"/diaspora">) {
  return children;
}
