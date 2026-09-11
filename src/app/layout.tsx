import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/media";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ochidoma.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Palace of the Och'Idoma — Official Royal Portal",
    template: "%s · Palace of the Och'Idoma",
  },
  description:
    "The official website of the Palace of the Och'Idoma, Paramount Ruler of the Idoma Nation. Royal statements, history, culture, diaspora directory, and kingdom development.",
  keywords: [
    "Och'Idoma",
    "Idoma",
    "Otukpo",
    "Benue State",
    "Traditional Council",
    "IATC",
    "Agaba'Idu",
    "Idoma culture",
    "Centenary 2026",
  ],
  // Statements from this site are routinely re-shared on WhatsApp and X, where the
  // link preview is often all a reader sees. Worth getting right.
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Palace of the Och'Idoma",
    title: "Palace of the Och'Idoma — Official Royal Portal",
    description:
      "The official seat of the Paramount Ruler of the Idoma Nation, Otukpo, Benue State. Royal statements, history, culture, and kingdom development.",
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palace of the Och'Idoma — Official Royal Portal",
    description:
      "The official seat of the Paramount Ruler of the Idoma Nation, Otukpo, Benue State.",
    images: [ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#161311",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${playfairDisplay.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          precedence="default"
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-space-sm focus:left-space-sm focus:z-[60] focus:px-space-lg focus:py-space-sm focus:rounded-lg focus:bg-royal-gold focus:text-rich-black focus:font-body focus:text-[12px] focus:font-bold focus:uppercase focus:tracking-wider"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 w-full pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
