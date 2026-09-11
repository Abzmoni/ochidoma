import Image from "next/image";
import Link from "next/link";

import { heritageImages, heroImage } from "@/lib/media";

const latestNews = [
  {
    tag: "Royal Proclamation",
    tone: "primary" as const,
    date: "14 October 2025",
    href: "/news/communique-peace-land-stewardship",
    title:
      "Communiqué on Peace, Land Stewardship, and Communal Harmony Across the Nine Local Governments",
    excerpt:
      "His Royal Majesty addresses clan leaders and community elders on sustainable land stewardship, ancestral preservation, and interstate border unity.",
    meta: "Recorded: Otukpo Inner Chambers",
  },
  {
    tag: "Development",
    tone: "tertiary" as const,
    date: "28 September 2025",
    href: "/news/educational-endowment-fund",
    title:
      "Kingdom Educational Endowment Fund Awards Inaugural Tertiary Scholarships",
    excerpt:
      "Palace education board announces comprehensive merit-based grants for over 150 exceptional students pursuing engineering, medicine, and legal studies.",
    meta: "Board of Trustees",
  },
  {
    tag: "Culture & Tradition",
    tone: "success" as const,
    date: "10 September 2025",
    href: "/news/otukpo-royal-arts-heritage-exposition",
    title:
      "Preparation Protocols for the Otukpo Royal Arts and Heritage Exposition 2026",
    excerpt:
      "Traditional council details ceremonial schedule, guild registrations, and masquerade guidelines celebrating the rich cultural tapestry of the Idoma people.",
    meta: "Advisory Council",
  },
];

const toneClasses: Record<string, string> = {
  primary:
    "bg-primary-container/10 text-primary-container border-primary-container/20",
  tertiary: "bg-tertiary/10 text-tertiary border-tertiary/25",
  success: "bg-status-success/10 text-status-success border-status-success/30",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative w-full -mt-[var(--header-h)] overflow-hidden bg-rich-black"
      >
        <div
          className="relative w-full h-[92svh] min-h-[600px] max-h-[960px]"
          style={{ backgroundColor: heroImage.tone }}
        >
          {/* Master portrait, served at full resolution (see src/lib/media.ts —
              the bare CDN URL returns a 512px thumbnail, which is what made this
              look soft). eager + fetchPriority high makes it the LCP fetch;
              `priority` is deprecated in Next 16. object-position favours the
              crown and face when the frame goes tall on a phone. */}
          <Image
            alt="His Royal Majesty Agaba'Idu Och'Idoma V seated in full ceremonial Apa regalia and beaded crown within the Otukpo Palace"
            src={heroImage.src}
            fill
            loading="eager"
            fetchPriority="high"
            quality={88}
            sizes="100vw"
            className="object-cover object-[52%_22%] md:object-[center_28%] select-none"
          />

          {/* Scrims + vignette, composed in one paint (see globals.css). */}
          <div className="absolute inset-0 hero-scrim" />
          <div className="absolute inset-0 hero-vignette" />

          {/* Content */}
          <div className="absolute inset-0">
            <div className="max-w-[1200px] mx-auto h-full px-margin-mobile md:px-margin flex flex-col justify-end pb-[calc(env(safe-area-inset-bottom)_+_3.5rem)] md:pb-space-xl">
              <div className="max-w-3xl flex flex-col items-start gap-space-md">
                {/* Eyebrow */}
                <div className="hidden md:inline-flex items-center gap-space-sm px-space-md py-space-xs bg-rich-black/55 border border-royal-gold/50 rounded-full backdrop-blur-sm">
                  <span
                    className="material-symbols-outlined text-royal-gold text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                  <span className="font-body text-[10.5px] md:text-[11px] font-semibold uppercase tracking-[0.28em] text-royal-gold">
                    Agaba&apos;Idu · Paramount Stool
                  </span>
                </div>

                {/* Name */}
                <h1
                  id="hero-heading"
                  className="font-heading type-display font-bold text-warm-ivory [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]"
                >
                  His Royal Majesty, Agaba&apos;Idu
                  <span className="block text-royal-gold">Och&apos;Idoma V</span>
                </h1>

                {/* Gold rule + title */}
                <div className="flex items-center gap-space-md">
                  <span className="h-px w-12 bg-royal-gold" />
                  <p className="font-body text-[15px] md:text-[18px] text-surface-container-highest tracking-wide font-light">
                    Paramount Ruler of the Idoma Nation
                    <span className="hidden sm:inline"> · Otukpo, Benue State</span>
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-space-sm flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-space-sm w-full sm:w-auto">
                  <Link
                    href="/news"
                    className="group inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-royal-gold text-rich-black font-body text-[12px] uppercase tracking-wider font-bold rounded-lg hover:bg-tertiary-fixed transition-colors shadow-lg"
                  >
                    <span>Read the Latest Statement</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    href="/the-throne"
                    className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-white/5 border border-warm-ivory/40 text-warm-ivory font-body text-[12px] uppercase tracking-wider font-semibold rounded-lg hover:bg-white/10 hover:border-royal-gold transition-colors backdrop-blur-sm"
                  >
                    <span>About the Throne</span>
                  </Link>
                </div>

                {/* Gazette line */}
                <div className="flex items-center gap-space-sm pt-space-xs text-surface-container/80">
                  <span className="material-symbols-outlined text-[15px] text-royal-gold/80">
                    menu_book
                  </span>
                  <span className="font-body text-[10.5px] font-semibold tracking-[0.18em] uppercase">
                    Gazette Vol. XXXIV · Royal Court of Otukpo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Woven ceremonial edge — drawn from the Apa cloth, replacing a plain rule. */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[6px] idoma-weave"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ─── 2. QUICK ACCESS ─────────────────────────────────────────────── */}
      <section className="w-full bg-surface py-space-xl relative z-20">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* The Throne */}
            <article className="group bg-surface-container-lowest rounded-lg border-2 border-royal-gold p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary-container">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    account_balance
                  </span>
                </div>
                <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-space-xs">
                  The Throne
                </h2>
                <p className="font-body text-[14px] text-text-muted">
                  Custodianship of the sacred royal stool, representing centuries
                  of ancestral continuity, customary law, and the paramount unity
                  of all Idoma clans.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between">
                <Link
                  href="/the-throne"
                  className="text-primary-container font-body text-[12px] uppercase tracking-wider font-semibold hover:text-primary flex items-center gap-1"
                >
                  <span>Palace Secretariat</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    chevron_right
                  </span>
                </Link>
                <span className="font-body text-[11px] font-semibold text-text-muted">
                  Est. 1947
                </span>
              </div>
            </article>

            {/* News & Gazette */}
            <article className="group bg-surface-container-lowest rounded-lg border-2 border-royal-gold p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary-container">
                  <span className="material-symbols-outlined text-[28px]">
                    campaign
                  </span>
                </div>
                <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-space-xs">
                  News &amp; Gazette
                </h2>
                <p className="font-body text-[14px] text-text-muted">
                  Official communiqués, imperial decrees, court notices,
                  traditional council sittings, and civic announcements from the
                  Kingdom registry.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between">
                <Link
                  href="/news"
                  className="text-primary-container font-body text-[12px] uppercase tracking-wider font-semibold hover:text-primary flex items-center gap-1"
                >
                  <span>Read Gazette</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    chevron_right
                  </span>
                </Link>
                <span className="font-body text-[11px] font-semibold text-text-muted">
                  Weekly Dispatch
                </span>
              </div>
            </article>

            {/* Centenary — featured */}
            <article className="group relative bg-primary-container text-warm-ivory rounded-lg p-space-lg shadow-md flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Watermark weave */}
              <div
                className="absolute inset-0 idoma-weave-diagonal opacity-60 pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute top-0 right-0">
                <span className="inline-flex items-center gap-1 px-space-md py-space-xs bg-royal-gold text-rich-black font-body text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">
                  <span className="material-symbols-outlined text-[13px]">
                    flag
                  </span>
                  Featured Milestone
                </span>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-royal-gold/15 border border-royal-gold/40 text-royal-gold flex items-center justify-center mb-space-md mt-space-md">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    hourglass_top
                  </span>
                </div>
                <span className="inline-block px-2 py-0.5 bg-black/25 text-tertiary-fixed-dim font-body text-[11px] font-bold uppercase tracking-wider rounded mb-space-sm">
                  1926 – 2026
                </span>
                <h2 className="font-heading text-[22px] font-semibold text-warm-ivory mb-space-xs">
                  Centenary Plus 2026
                </h2>
                <p className="font-body text-[14px] text-surface-container-highest/90">
                  A monumental century celebration marking one hundred years of
                  institutional solidarity, cultural resilience, and progressive
                  evolution across the Nine Local Governments.
                </p>
              </div>
              <div className="relative mt-space-lg pt-space-sm border-t border-royal-gold/25 flex items-center justify-between">
                <Link
                  href="/history-and-culture"
                  className="inline-flex items-center gap-1 px-space-md py-1.5 bg-royal-gold text-rich-black font-body text-[12px] uppercase tracking-wider font-bold rounded hover:bg-tertiary-fixed transition-colors"
                >
                  <span>Centenary Charter</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-body text-[11px] text-tertiary-fixed-dim font-semibold">
                  Legacy Fund
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── 3. LATEST FROM THE PALACE ───────────────────────────────────── */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm pb-space-md border-b border-royal-gold/40">
            <div>
              <div className="flex items-center gap-space-xs text-primary-container mb-space-xs">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-body text-[12px] uppercase tracking-[0.2em] font-bold">
                  Imperial Press · Otukpo
                </span>
              </div>
              <h2 className="font-heading type-headline font-semibold text-text-primary">
                Latest from the Palace
              </h2>
              <p className="font-body text-[16px] text-text-muted mt-space-xs">
                Official communiqués, royal court hearings, and kingdom
                developments
              </p>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-1 text-primary-container font-body text-[12px] uppercase tracking-wider font-bold border-b-2 border-royal-gold pb-1 hover:text-primary self-start md:self-end whitespace-nowrap"
            >
              <span>View all news</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {latestNews.map((item) => (
              <article
                key={item.href}
                className="group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-transparent hover:border-royal-gold/30"
              >
                <div className="p-space-lg flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <span
                      className={`px-space-sm py-1 font-body text-[11px] font-bold uppercase tracking-wider rounded border ${toneClasses[item.tone]}`}
                    >
                      {item.tag}
                    </span>
                    <span className="font-body text-[11px] font-semibold text-text-muted flex items-center gap-1 whitespace-nowrap">
                      <span className="material-symbols-outlined text-[14px]">
                        calendar_today
                      </span>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary leading-snug">
                    <Link
                      href={item.href}
                      className="hover:text-primary-container transition-colors after:absolute after:inset-0"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="font-body text-[14px] text-text-muted">
                    {item.excerpt}
                  </p>
                </div>
                <div className="px-space-lg pb-space-lg pt-space-xs border-t border-surface-container flex items-center justify-between">
                  <span className="font-body text-[11px] font-semibold text-text-muted">
                    {item.meta}
                  </span>
                  <span className="text-primary-container group-hover:text-primary font-body text-[12px] uppercase tracking-wider font-semibold flex items-center gap-0.5">
                    Read
                    <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. HERITAGE ─────────────────────────────────────────────────── */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-space-md mb-space-xl">
            <div className="h-px bg-gradient-to-r from-transparent to-royal-gold flex-1" />
            <div className="flex items-center gap-space-sm text-primary-container">
              <span className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
              <span className="font-body text-[11px] uppercase tracking-[0.28em] font-bold">
                Sovereign Continuity
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
            </div>
            <div className="h-px bg-gradient-to-l from-transparent to-royal-gold flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Editorial */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-sm text-primary-container">
                <span className="material-symbols-outlined text-[20px]">
                  history_edu
                </span>
                <span className="font-body text-[12px] uppercase tracking-widest font-bold">
                  Alekwu Ethos &amp; Warrior Legacy
                </span>
              </div>
              <h2 className="font-heading type-headline font-semibold text-text-primary">
                The Living Heritage of the Idoma Kingdom
              </h2>
              <p className="font-body text-[16px] text-text-muted">
                Rooted in ancestral valor, communal consensus, and deep spiritual
                reverence for the ancestral{" "}
                <span className="font-semibold text-text-primary">Alekwu</span>{" "}
                moral code, the Idoma nation possesses a celebrated oral and
                judicial legacy stretching back through centuries of high
                civilization.
              </p>
              <p className="font-body text-[14px] text-text-muted">
                The Paramount Stool of the Och&apos;Idoma, established permanently
                at Otukpo, serves as the unifying sacred anchor for the nine local
                government divisions: Ado, Agatu, Apa, Obi, Ogbadibo, Ohimini, Oju,
                Okpokwu, and Otukpo. Under this traditional governance, age grades,
                clan elders, and royal councils safeguard truth, peace, and mutual
                defense.
              </p>
              <div className="pt-space-sm">
                <Link
                  href="/history-and-culture"
                  className="group inline-flex items-center gap-space-sm px-space-xl py-space-md bg-primary-container text-warm-ivory font-body text-[12px] uppercase tracking-wider font-semibold rounded-lg hover:bg-primary transition-colors shadow-sm"
                >
                  <span>Explore Kingdom History</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    menu_book
                  </span>
                </Link>
              </div>
            </div>

            {/* Image grid */}
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <div className="grid grid-cols-2 gap-space-sm">
                {heritageImages.map((img) => (
                  <figure
                    key={img.label}
                    style={{ backgroundColor: img.tone }}
                    className="group relative h-44 sm:h-56 rounded-lg overflow-hidden shadow-sm ring-1 ring-black/5"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 50vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 via-rich-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-space-sm flex items-center gap-space-xs">
                      <span className="font-heading text-[13px] font-bold text-royal-gold">
                        {img.n}
                      </span>
                      <span className="font-body text-[11px] font-semibold text-warm-ivory">
                        {img.label}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              {/* Gallery link bar */}
              <Link
                href="/gallery"
                className="group flex items-center justify-between p-space-md bg-surface-container-highest rounded-lg border border-royal-gold/40 shadow-sm hover:border-royal-gold hover:bg-surface-container-high transition-colors"
              >
                <span className="flex items-center gap-space-sm text-text-primary">
                  <span className="material-symbols-outlined text-primary-container">
                    photo_library
                  </span>
                  <span className="font-body text-[12px] uppercase tracking-wider font-semibold">
                    The Imperial Photographic Archive
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-primary-container font-body text-[12px] uppercase font-bold">
                  <span className="hidden sm:inline">120+ Archival Photos</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. DIASPORA & COMMUNITY ─────────────────────────────────────── */}
      <section className="w-full bg-primary-container text-warm-ivory py-space-xl relative overflow-hidden">
        <div
          className="absolute inset-0 idoma-weave-diagonal opacity-70 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
            <div className="max-w-2xl flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs bg-black/25 rounded-full border border-royal-gold/40 text-royal-gold self-start font-body text-[11px] uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  public
                </span>
                Global Secretariat
              </div>
              <h2 className="font-heading type-headline font-semibold text-warm-ivory">
                Idoma in the Diaspora &amp; Global Community
              </h2>
              <p className="font-body text-[16px] text-surface-container-highest/90 font-light leading-relaxed">
                Connecting sons and daughters of the Idoma Kingdom worldwide to
                preserve heritage, foster unity, and invest in ancestral homeland
                development.
              </p>
              <div className="flex flex-wrap gap-space-xs mt-space-sm">
                {[
                  "United Kingdom & Ireland Chapter",
                  "North America (USA & Canada)",
                  "European Union",
                  "Southern Africa Network",
                  "Lagos & Abuja Chapters",
                ].map((chapter) => (
                  <span
                    key={chapter}
                    className="px-space-md py-1.5 bg-black/25 text-warm-ivory rounded font-body text-[11px] font-semibold border border-white/10 hover:border-royal-gold transition-colors"
                  >
                    {chapter}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col bg-rich-black/50 p-space-lg rounded-lg border border-royal-gold/40 backdrop-blur-sm lg:min-w-[300px]">
              <span className="font-body text-[11px] uppercase tracking-widest text-royal-gold mb-space-sm font-bold">
                Liaison Directorate
              </span>
              <p className="font-body text-[14px] text-surface-container-highest text-center mb-space-md">
                Register your chapter or locate your nearest accredited regional
                representative.
              </p>
              <Link
                href="/diaspora"
                className="group w-full inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-royal-gold text-rich-black font-body text-[12px] uppercase font-bold tracking-wider rounded-lg hover:bg-tertiary-fixed transition-colors shadow-md"
              >
                <span>Find your chapter</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  travel_explore
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. SUPPORT THE KINGDOM ──────────────────────────────────────── */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/50 shadow-sm p-space-lg lg:p-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm text-status-success">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    volunteer_activism
                  </span>
                  <span className="font-body text-[12px] uppercase tracking-wider font-bold">
                    Royal Philanthropy &amp; Trust
                  </span>
                </div>
                <h2 className="font-heading type-headline font-semibold text-text-primary">
                  Support the Kingdom&apos;s Development
                </h2>
                <p className="font-body text-[16px] text-text-muted">
                  Through the sovereign oversight of the Palace, your generous
                  contributions power critical interventions: the{" "}
                  <strong className="text-text-primary font-semibold">
                    Royal Healthcare Outreach
                  </strong>{" "}
                  across rural communities,{" "}
                  <strong className="text-text-primary font-semibold">
                    Otukpo Flood Relief &amp; Ecological Resilience
                  </strong>{" "}
                  infrastructure, and the historic{" "}
                  <strong className="text-text-primary font-semibold">
                    Centenary Legacy Fund
                  </strong>{" "}
                  for youth technical apprenticeships.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link
                    href="/giving"
                    className="group inline-flex items-center gap-space-sm px-space-xl py-space-md bg-primary-container text-warm-ivory font-body text-[12px] uppercase tracking-wider font-bold rounded-lg hover:bg-primary transition-colors shadow-sm"
                  >
                    <span>Give to the Royal Foundation</span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                  </Link>
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <span className="material-symbols-outlined text-status-success text-[18px]">
                      verified_user
                    </span>
                    <span className="font-body text-[11px] font-semibold">
                      Transparent stewardship with quarterly public audits
                    </span>
                  </div>
                </div>
              </div>

              {/* Fund meter */}
              <div className="lg:col-span-5 bg-surface-container p-space-lg rounded-lg border border-royal-gold/30 flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-highest">
                  <div className="flex flex-col">
                    <span className="font-body text-[11px] text-text-muted font-semibold uppercase tracking-wider">
                      Fund Horizon
                    </span>
                    <span className="font-heading text-[18px] text-text-primary font-bold">
                      2025 / 2026 Key Projects
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-status-success/10 text-status-success font-body text-[11px] font-bold uppercase rounded border border-status-success/30 flex items-center gap-1 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[34px] md:text-[44px] leading-none font-bold text-primary-container">
                    ₦142,500,000
                  </span>
                  <div className="flex items-center justify-between text-text-muted font-body text-[13px] mt-space-xs">
                    <span>Raised toward ₦250,000,000 target</span>
                    <span className="font-bold text-tertiary">57%</span>
                  </div>
                </div>

                <div
                  className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden p-0.5 border border-royal-gold/40"
                  role="progressbar"
                  aria-valuenow={57}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Fund progress: 57 percent of ₦250,000,000 target raised"
                >
                  <div
                    className="h-full bg-gradient-to-r from-primary-container via-royal-gold to-primary-container rounded-full"
                    style={{ width: "57%" }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-space-sm border-t border-surface-container-highest font-body text-[11px] font-semibold">
                  <div className="flex flex-col">
                    <span className="font-bold text-text-primary text-[15px] font-heading">
                      ₦65M
                    </span>
                    <span className="text-text-muted text-[10px] uppercase tracking-wide mt-0.5">
                      Flood Defense
                    </span>
                  </div>
                  <div className="flex flex-col border-l border-r border-surface-container-highest">
                    <span className="font-bold text-text-primary text-[15px] font-heading">
                      ₦48M
                    </span>
                    <span className="text-text-muted text-[10px] uppercase tracking-wide mt-0.5">
                      Clinics
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-text-primary text-[15px] font-heading">
                      ₦29.5M
                    </span>
                    <span className="text-text-muted text-[10px] uppercase tracking-wide mt-0.5">
                      Centenary
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 pt-space-xs">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    gavel
                  </span>
                  <span className="text-[11px] text-text-muted font-body font-semibold text-center">
                    Authorized by the Office of the Traditional Custodian
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
