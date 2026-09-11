import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History & Culture of the Idoma Nation",
  description:
    "From the ancestral cradle of Apa to the sovereign stool at Otukpo — the migration, language, Alekwu belief, festivals and regalia of the Idoma people.",
  openGraph: {
    title: "History & Culture of the Idoma Nation",
    description:
      "The lineage of the Och'Idoma, the Apa migration, Alekwu ancestral veneration, and the ceremonial life of the Idoma nation.",
  },
};

export default function HistoryLayout({
  children,
}: LayoutProps<"/history-and-culture">) {
  return children;
}
