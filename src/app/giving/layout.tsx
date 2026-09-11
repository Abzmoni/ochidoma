import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support the Kingdom's Development",
  description:
    "Contribute to the strategic projects of the Palace of the Och'Idoma — flood relief, educational endowment and rural health — with published funding progress and audited reporting.",
  openGraph: {
    title: "Support the Kingdom's Development · Palace of the Och'Idoma",
    description:
      "Endowments and civic contributions to the Paramount Stool, in naira, dollars, pounds or euro, with audit folios released on request.",
  },
};

export default function GivingLayout({ children }: LayoutProps<"/giving">) {
  return children;
}
