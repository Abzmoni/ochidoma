"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cdn } from "@/lib/media";

type Tone = "dark" | "gold" | "red" | "green";

type Category = "centenary" | "coronation" | "diaspora" | "community";

type Plate = {
  ref: string;
  category: Category;
  /** Year the plate was struck — drives chronological sorting, not display. */
  year: number;
  ratio: string;
  tone: Tone;
  badgeIcon: string;
  badgeLabel: string;
  series: string;
  title: string;
  caption: string;
  placeIcon: string;
  place: string;
  date: string;
  alt: string;
  src: string;
};

/* Badge colours were previously hardcoded hex per card; these map onto the
   design tokens so a palette change reaches the gallery too. */
const TONE: Record<Tone, string> = {
  dark: "bg-rich-black/80 backdrop-blur-sm text-tertiary-fixed-dim",
  gold: "bg-royal-gold text-rich-black",
  red: "bg-regal-red/90 backdrop-blur-sm text-on-primary",
  green: "bg-status-success/90 backdrop-blur-sm text-on-primary",
};

const RAW_PLATES: Plate[] = [
  {
    ref: "IDM-PH-1926-004",
    category: "centenary",
    year: 1926,
    ratio: "aspect-[16/10]",
    tone: "dark",
    badgeIcon: "history_edu",
    badgeLabel: "Historical Council",
    series: "Vintage Sepia Plate",
    title: "Centenary Preparatory Conclave: Council of Chiefs in Apa Regalia",
    caption:
      "Historic gathering of high traditional rulers and titleholders seated in council wearing antique red-and-black woven Apa vestments at the Otukpo Palace square.",
    placeIcon: "location_on",
    place: "Otukpo Palace Grounds",
    date: "Circa 1926 · Restored 2025",
    alt: "Council of Idoma chiefs seated in woven Apa regalia at the Otukpo palace square",
    src: "/ph1.jpg",
  },
  {
    ref: "IDM-PH-2024-118",
    category: "community",
    year: 2024,
    ratio: "aspect-[16/11]",
    tone: "red",
    badgeIcon: "festival",
    badgeLabel: "Alekwu Festival",
    series: "Ceremonial Field",
    title: "Alekwu Cultural Dancers & Traditional Hornblowers",
    caption:
      "Royal drummers and cultural dancers clad in canonical cowrie-beaded red-black regalia performing sacred welcoming melodies for assembled monarchs.",
    placeIcon: "calendar_month",
    place: "Palace Ceremonial Field",
    date: "October 2024",
    alt: "Alekwu dancers and horn blowers in cowrie-beaded regalia on the palace field",
    src: "/ph2.jpg",
  },
  {
    ref: "IDM-PH-2023-042",
    category: "coronation",
    year: 2023,
    ratio: "aspect-[4/5]",
    tone: "dark",
    badgeIcon: "military_tech",
    badgeLabel: "Chieftaincy Investiture",
    series: "Chamber Archive",
    title: "Solemn Investiture of First-Class Royal Traditional Rulers",
    caption:
      "Presentation of the sacred Staffs of Traditional Authority to district paramount elders inside the inner council sanctuary.",
    placeIcon: "door_front",
    place: "Council Chambers, Otukpo",
    date: "November 2023",
    alt: "Presentation of staffs of authority to district elders in the inner council chamber",
    src: "/ph3.jpg",
  },
  {
    ref: "IDM-PH-2022-001",
    category: "coronation",
    year: 2022,
    ratio: "aspect-[16/10]",
    tone: "gold",
    badgeIcon: "workspace_premium",
    badgeLabel: "The Paramount Stool",
    series: "Official State Registry",
    title: "Paramount Ruler Enthroned: HRM Och'Idoma V Imperial Portrait",
    caption:
      "Dignified ceremonial portrait of the paramount ruler holding the carved royal ivory flywhisk (Irukere) upon the carved mahogany throne of Agaba'Idu.",
    placeIcon: "verified",
    place: "Sovereign Official Portrait",
    date: "Archival Master File",
    alt: "Ceremonial portrait of HRM Och'Idoma V holding the royal flywhisk upon the mahogany throne",
    src: "/ph4.jpg",
  },
  {
    ref: "IDM-PH-2024-055",
    category: "diaspora",
    year: 2024,
    ratio: "aspect-[4/3]",
    tone: "dark",
    badgeIcon: "public",
    badgeLabel: "Diaspora Chapter",
    series: "Diplomatic Protocol",
    title: "Diaspora Delegation from the United Kingdom Paying Homage",
    caption:
      "Executive members of the Idoma Association UK & Ireland during their sovereign audience and endowment pledge to the Centenary Fund.",
    placeIcon: "flight_land",
    place: "Executive Audience Hall",
    date: "August 2024",
    alt: "Idoma Association UK and Ireland delegates in audience with the paramount ruler",
    src: "/ph1.jpg",
  },
  {
    ref: "IDM-RG-1947-012",
    category: "coronation",
    year: 1947,
    ratio: "aspect-[3/4]",
    tone: "dark",
    badgeIcon: "token",
    badgeLabel: "Sacred Regalia",
    series: "Sacred Vault Artifact",
    title: "The Sacred Royal Staff of Agaba'Idu & Antique Flywhisks",
    caption:
      "The supreme insignia of royal justice and traditional suzerainty, cast in historic lost-wax bronze and handed through generations of Paramount Rulers.",
    placeIcon: "lock",
    place: "Inner Palace Vaults",
    date: "Archival Specimen",
    alt: "Macro study of the bronze royal staff of Agaba'Idu beside antique flywhisks",
    src: "/ph2.jpg",
  },
  {
    ref: "IDM-PH-2025-019",
    category: "centenary",
    year: 2025,
    ratio: "aspect-[16/10]",
    tone: "red",
    badgeIcon: "music_note",
    badgeLabel: "Youth Heritage",
    series: "Civic Commemoration",
    title: "Youth Cultural Troupe Performing the Och'Idoma Centenary Anthem",
    caption:
      "Schoolchildren and youth envoys from all nine local governments harmonizing traditional choral compositions during palace centenary preliminaries.",
    placeIcon: "celebration",
    place: "Palace Amphitheater",
    date: "January 2025",
    alt: "Youth choir in matching dress performing before the palace amphitheatre",
    src: "/ph3.jpg",
  },
  {
    ref: "IDM-PH-2024-089",
    category: "community",
    year: 2024,
    ratio: "aspect-[4/3]",
    tone: "green",
    badgeIcon: "agriculture",
    badgeLabel: "Civic Welfare",
    series: "Rural Outreach",
    title: "Distribution of Palace Agricultural Grants in Agatu District",
    caption:
      "Empowerment initiative supervised by the Palace Agricultural Advisory Board supporting agrarian cooperative farmers across riverine communities.",
    placeIcon: "pin_drop",
    place: "Agatu Divisional Field",
    date: "September 2024",
    alt: "Cooperative farmers receiving palace agricultural grants at the Agatu divisional field",
    src: "/ph4.jpg",
  },
];

/* Precomputed once so keystroke filtering never rebuilds these strings. */
const PLATES = RAW_PLATES.map((plate) => ({
  ...plate,
  haystack:
    `${plate.ref} ${plate.title} ${plate.caption} ${plate.place} ${plate.badgeLabel} ${plate.series} ${plate.date}`.toLowerCase(),
}));

const CATEGORIES: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All Archives" },
  { id: "centenary", label: "Centenary 2026" },
  { id: "coronation", label: "Coronation & Investiture" },
  { id: "diaspora", label: "Diaspora Delegations" },
  { id: "community", label: "Community Outreach & Rites" },
];

/* Counts read off the published plates rather than the full physical holding —
   a pill promising 520 that reveals two photographs is worse than an honest 2. */
const COUNTS = Object.fromEntries(
  CATEGORIES.map((c) => [
    c.id,
    c.id === "all"
      ? PLATES.length
      : PLATES.filter((p) => p.category === c.id).length,
  ])
) as Record<string, number>;

const SORTS = [
  { id: "newest", label: "Chronological (Newest first)" },
  { id: "oldest", label: "Chronological (Archival oldest)" },
  { id: "catalog", label: "Catalog Number (Ascending)" },
  { id: "curated", label: "Curator's Special Selection" },
];

const RECORDINGS = [
  {
    ref: "IDM-AV-2024-003",
    kindIcon: "sensors",
    kindLabel: "Palace TV",
    live: true,
    duration: "38:14",
    strand: "State of the Kingdom",
    format: "Annual Proclamation",
    title:
      "The 2024 State of the Kingdom Address by HRM Agaba'Idu Och'Idoma V",
    summary:
      "His Royal Majesty addresses paramount chieftaincy affairs, agricultural security, educational endowments, and unity among the 22 Idoma chiefdoms.",
    holding: "Official Broadcast",
    alt: "Still frame from the televised State of the Kingdom address",
    src: "/ph1.jpg",
  },
  {
    ref: "IDM-AV-2026-001",
    kindIcon: "history",
    kindLabel: "National Heritage",
    live: false,
    duration: "52:00",
    strand: "Centenary Retrospective",
    format: "Docuseries",
    title: "Centenary Plus 2026: Historical Documentary on Idoma Consolidation",
    summary:
      "An authoritative investigative visual chronicle detailing the gazetting of the Paramount Stool in 1926 and the unifying journey of the Apa kingdom.",
    holding: "Archival Production",
    alt: "Film still from the centenary documentary on Idoma consolidation",
    src: "/ph2.jpg",
  },
  {
    ref: "IDM-AV-1988-047",
    kindIcon: "volume_up",
    kindLabel: "Acoustic Archive",
    live: false,
    duration: "14:22",
    strand: "Ethnomusicology",
    format: "Sacred Melodies",
    title: "Traditional Musical Rites & Ancient Horn Trumpeters",
    summary:
      "Raw recordings of the ancient royal horn praise poets and sacred percussion invocations performed exclusively for the Paramount Stool.",
    holding: "Restored Mono Master",
    alt: "Traditional Idoma horn trumpeters and drummers mid-performance",
    src: "/ph3.jpg",
  },
];

const MEDIA_KIT_MAILTO = `mailto:press@ochidomapalace.org.ng?subject=${encodeURIComponent(
  "Request: Palace Media Kit (2025)"
)}`;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("curated");
  const [view, setView] = useState<"mosaic" | "plate">("mosaic");

  const [lightbox, setLightbox] = useState<number | null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [prefill, setPrefill] = useState("");
  const [sent, setSent] = useState<string | null>(null);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<HTMLDivElement>(null);
  /* Whatever the reader was on when an overlay opened, so focus can go back. */
  const returnFocus = useRef<HTMLElement | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PLATES.filter(
      (plate) =>
        (activeFilter === "all" || plate.category === activeFilter) &&
        (q === "" || plate.haystack.includes(q))
    );

    if (sort === "newest") return [...list].sort((a, b) => b.year - a.year);
    if (sort === "oldest") return [...list].sort((a, b) => a.year - b.year);
    if (sort === "catalog")
      return [...list].sort((a, b) => a.ref.localeCompare(b.ref));
    return list;
  }, [activeFilter, query, sort]);

  const active = lightbox === null ? null : (visible[lightbox] ?? null);
  const lightboxOpen = active !== null;
  const overlayOpen = lightboxOpen || requestOpen;

  const closeOverlay = useCallback(() => {
    setLightbox(null);
    setRequestOpen(false);
    returnFocus.current?.focus();
  }, []);

  const openLightbox = (index: number) => {
    returnFocus.current = document.activeElement as HTMLElement;
    setRequestOpen(false);
    setLightbox(index);
  };

  const openRequest = (reference = "") => {
    returnFocus.current = document.activeElement as HTMLElement;
    setLightbox(null);
    setPrefill(reference);
    setSent(null);
    setRequestOpen(true);
  };

  /* The page behind an overlay must not scroll away under it. */
  useEffect(() => {
    if (!overlayOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [overlayOpen]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeOverlay();
      if (event.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
      if (event.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + visible.length) % visible.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, visible.length, closeOverlay]);

  /* Keyed on open/closed rather than on the index, so stepping through plates
     does not yank focus off the Next button between presses. */
  useEffect(() => {
    if (!lightboxOpen) return;
    lightboxRef.current?.focus();
  }, [lightboxOpen]);

  /* Escape plus a Tab cycle, so keyboard readers cannot fall out of the dialog
     into the page they can no longer see. */
  useEffect(() => {
    if (!requestOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = requestRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    /* First field while the form stands; the close button once the receipt
       replaces it and there is no field left to fill. */
    const target =
      requestRef.current?.querySelector<HTMLElement>("input, textarea") ??
      requestRef.current?.querySelector<HTMLElement>("button");
    target?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [requestOpen, sent, closeOverlay]);

  return (
    <div className="flex flex-col w-full">
      {/* Archival Ambient Background Header Strip */}
      <section className="w-full bg-surface-container-low border-b border-tertiary-container/30">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
          {/* Institutional Breadcrumb & Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
            <div className="inline-flex items-center gap-space-xs font-body text-[12px] uppercase tracking-widest text-primary font-semibold">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[16px] text-tertiary"
              >
                photo_library
              </span>
              <span>Palace Photographic &amp; Document Registry</span>
              <span aria-hidden="true" className="text-text-muted/60">
                •
              </span>
              <span className="text-text-muted">Record Division IDM-ARC-88</span>
            </div>
            <div className="inline-flex items-center gap-space-xs font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted bg-surface-container px-space-sm py-1 rounded-sm">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-status-success inline-block"
              ></span>
              <span>Imperial Archive Status: Public Cleared</span>
            </div>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="max-w-3xl mb-space-lg">
            <h1 className="font-heading type-display text-text-primary mb-space-xs font-semibold">
              The Imperial Gallery &amp; Visual Chronicle
            </h1>
            <p className="font-body text-[18px] text-text-muted leading-relaxed">
              The Paramount Stool holds over five hundred catalogued glass
              plates, royal conclaves, traditional rites and diplomatic
              encounters. Published below is the cleared public selection from
              that registry — an unbroken visual record of sovereign heritage and
              civic communion.
            </p>
          </div>

          {/* Filter Controls, Category Pills, Search, and Sort */}
          <div className="flex flex-col gap-space-md pt-space-sm">
            {/* Category Filter Pills */}
            <div
              aria-label="Filter plates by category"
              className="flex items-center gap-space-xs overflow-x-auto pb-space-xs"
              role="group"
            >
              {CATEGORIES.map((option) => (
                <button
                  key={option.id}
                  aria-pressed={activeFilter === option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`whitespace-nowrap px-space-md py-space-xs rounded-full font-body text-[12px] uppercase font-semibold tracking-wider flex items-center gap-space-xs transition-colors ${
                    activeFilter === option.id
                      ? "bg-primary-container text-on-primary shadow-sm"
                      : "bg-surface-container hover:bg-surface-container-high text-text-primary"
                  }`}
                  type="button"
                >
                  <span>{option.label}</span>
                  <span
                    className={`text-[10px] py-0.5 px-1.5 rounded-full ${
                      activeFilter === option.id
                        ? "bg-black/30 text-tertiary-fixed-dim"
                        : "bg-surface-variant text-text-muted"
                    }`}
                  >
                    {COUNTS[option.id]}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Bar and Sort Selector */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-xs">
              <div className="relative w-full md:max-w-md">
                <label className="sr-only" htmlFor="gallery-search">
                  Search the photographic registry
                </label>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[20px]"
                >
                  search
                </span>
                <input
                  className="w-full pl-10 pr-space-md py-2.5 bg-surface-container-lowest text-text-primary font-body text-[14px] rounded-lg shadow-sm border border-outline/20 focus:outline-none focus:border-primary placeholder:text-text-muted/60"
                  id="gallery-search"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search gallery by keyword, regalia, or year..."
                  type="search"
                  value={query}
                />
              </div>

              <div className="flex items-center gap-space-sm w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-space-xs">
                  <label
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted"
                    htmlFor="gallery-sort"
                  >
                    Sort By:
                  </label>
                  <div className="relative">
                    <select
                      className="appearance-none bg-surface-container-lowest text-text-primary font-body text-[12px] font-semibold py-2 pl-3 pr-8 rounded-lg shadow-sm border border-outline/20 focus:outline-none focus:border-primary cursor-pointer"
                      id="gallery-sort"
                      onChange={(event) => setSort(event.target.value)}
                      value={sort}
                    >
                      {SORTS.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-muted text-[18px]"
                    >
                      expand_more
                    </span>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="h-6 w-px bg-outline/20 hidden sm:block"
                ></div>
                <div
                  aria-label="Gallery layout"
                  className="flex items-center gap-1 bg-surface-container p-1 rounded-lg"
                  role="group"
                >
                  <button
                    aria-label="Mosaic layout"
                    aria-pressed={view === "mosaic"}
                    className={`p-1 rounded transition-colors ${
                      view === "mosaic"
                        ? "text-primary bg-surface-container-lowest shadow-sm"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                    onClick={() => setView("mosaic")}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px]"
                    >
                      grid_view
                    </span>
                  </button>
                  <button
                    aria-label="Single plate layout"
                    aria-pressed={view === "plate"}
                    className={`p-1 rounded transition-colors ${
                      view === "plate"
                        ? "text-primary bg-surface-container-lowest shadow-sm"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                    onClick={() => setView("plate")}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px]"
                    >
                      view_agenda
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery Grid Section */}
      <section className="w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg pb-space-xs border-b border-tertiary/20">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="font-heading text-[18px] font-bold text-text-primary">
              Imperial Photographic Plates
            </span>
            <span className="text-text-muted font-body text-[14px]">
              — Preserving the Agaba&apos;Idu Royal Memory
            </span>
            <span
              aria-live="polite"
              className="font-body text-[12px] font-semibold uppercase tracking-wider text-primary"
            >
              {visible.length} {visible.length === 1 ? "plate" : "plates"}
            </span>
          </div>
          <span className="hidden sm:inline-block font-body text-[11px] text-tertiary-container uppercase tracking-widest font-semibold">
            Curated under the Authority of the Otukpo Royal Secretariat
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="flex flex-col items-center text-center gap-space-sm py-space-xl">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[48px] text-tertiary"
            >
              search_off
            </span>
            <p className="font-heading text-[20px] font-semibold text-text-primary">
              No plate in the public selection matches that search.
            </p>
            <p className="font-body text-[14px] text-text-muted max-w-md">
              The wider holding is catalogued off-line at the Royal Archive in
              Otukpo and may be searched on request.
            </p>
            <button
              className="mt-space-xs inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-body text-[12px] font-semibold uppercase tracking-wider"
              onClick={() => {
                setActiveFilter("all");
                setQuery("");
              }}
              type="button"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                restart_alt
              </span>
              Clear filters
            </button>
          </div>
        ) : (
          /* Masonry columns in mosaic view; a single wide column when the reader
             asks for one plate at a time. `space-y` cannot be used on a
             multi-column container — it measures the flow, not the columns, and
             leaves the tops ragged — so spacing lives on each figure. */
          <div
            className={
              view === "mosaic"
                ? "columns-1 md:columns-2 lg:columns-3 gap-gutter"
                : "flex flex-col gap-gutter max-w-3xl mx-auto"
            }
          >
            {visible.map((plate, index) => (
              <figure
                key={plate.ref}
                className={`group relative break-inside-avoid bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                  view === "mosaic" ? "mb-gutter" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-surface-container-high ${plate.ratio}`}
                >
                  <Image
                    alt={plate.alt}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    quality={88}
                    sizes={
                      view === "mosaic"
                        ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                        : "(max-width: 768px) 100vw, 768px"
                    }
                    src={cdn(plate.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                  <div
                    className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded font-body text-[11px] font-semibold uppercase tracking-wider ${
                      TONE[plate.tone]
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px]"
                    >
                      {plate.badgeIcon}
                    </span>
                    <span>{plate.badgeLabel}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-space-md text-surface-container-lowest">
                    <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim uppercase tracking-wider block mb-1">
                      #{plate.ref} · {plate.series}
                    </span>
                    <h3 className="font-heading text-[18px] font-bold text-white leading-snug mb-1">
                      {plate.title}
                    </h3>
                    <p className="font-body text-[14px] text-surface-variant/90 line-clamp-2 leading-tight">
                      {plate.caption}
                    </p>
                  </div>
                  {/* Covers the plate rather than wrapping it: a button may not
                      contain a heading, and the whole image should be the target. */}
                  <button
                    aria-label={`Enlarge plate ${plate.ref}: ${plate.title}`}
                    className="absolute inset-0 z-10 flex items-start justify-end p-3 text-white/0 group-hover:text-white/90 focus-visible:text-white/90 transition-colors"
                    onClick={() => openLightbox(index)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[20px]"
                    >
                      zoom_in
                    </span>
                  </button>
                </div>
                <figcaption className="p-space-sm bg-surface-container-lowest flex items-center justify-between gap-space-xs text-text-muted font-body text-[11px] font-semibold border-t border-outline/10">
                  <span className="flex items-center gap-1">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[16px] text-tertiary"
                    >
                      {plate.placeIcon}
                    </span>
                    {plate.place}
                  </span>
                  <span className="text-text-primary text-right">
                    {plate.date}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* What the public selection is, and how the rest is reached. */}
        <div className="mt-space-xl flex flex-col items-center justify-center gap-space-sm text-center">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[28px] text-tertiary"
          >
            inventory_2
          </span>
          <p className="font-body text-[14px] text-text-muted max-w-xl leading-relaxed">
            Record Division IDM-ARC-88 publishes {PLATES.length} cleared plates
            in full. The remaining holding — glass negatives, protocol albums and
            unreleased ceremonial series — is conserved at the Royal Archive in
            Otukpo and released by application.
          </p>
          <button
            className="inline-flex items-center justify-center gap-space-sm px-space-xl py-3 rounded-lg bg-surface text-text-primary border border-tertiary hover:bg-tertiary-fixed/30 font-body text-[14px] font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
            onClick={() => openRequest("General Centenary Suite")}
            type="button"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px] text-tertiary"
            >
              plagiarism
            </span>
            <span>Search the Full Archive by Application</span>
          </button>
          <span className="font-body text-[14px] text-text-muted">
            Catalogued under Benue State Cultural Preservation Act &amp; Palace
            Charter
          </span>
        </div>
      </section>

      {/* Video & Oral Recordings Section */}
      <section className="w-full bg-surface-container-high py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div className="flex items-start gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-md">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[28px]"
                >
                  movie
                </span>
              </div>
              <div>
                <span className="font-body text-[11px] uppercase tracking-widest text-primary font-semibold block">
                  Imperial Audio-Visual Archive
                </span>
                <h2 className="font-heading text-[28px] font-semibold text-text-primary leading-tight">
                  Royal Audio-Visual Records &amp; Oral Histories
                </h2>
              </div>
            </div>
            <p className="font-body text-[14px] text-text-muted max-w-md">
              Restored film broadcasts, sovereign proclamations, and acoustic
              recordings capturing the sonic heritage and spoken declarations of
              the Och&apos;Idoma reign. Viewing copies are issued by the Records
              Directorate.
            </p>
          </div>

          {/* Catalogued recordings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {RECORDINGS.map((record) => (
              <div
                key={record.ref}
                className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-video bg-rich-black overflow-hidden">
                  <Image
                    alt={record.alt}
                    className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                    fill
                    quality={88}
                    sizes="(max-width: 768px) 100vw, 380px"
                    src={cdn(record.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-surface font-body text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1">
                    {record.live ? (
                      <span
                        aria-hidden="true"
                        className="w-2 h-2 rounded-full bg-error inline-block animate-pulse"
                      ></span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim"
                      >
                        {record.kindIcon}
                      </span>
                    )}
                    <span>{record.kindLabel}</span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-surface font-body text-[11px] font-semibold">
                    {record.duration}
                  </div>
                  {/* The recordings are not streamed from this site, so the
                      control says what it actually does. */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-full bg-royal-gold text-rich-black font-body text-[11px] font-bold uppercase tracking-wider shadow-lg group-hover:scale-105 transition-transform"
                      onClick={() => openRequest(record.ref)}
                      type="button"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_circle
                      </span>
                      <span>Request Viewing Copy</span>
                    </button>
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-space-xs text-text-muted font-body text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                      <span>{record.strand}</span>
                      <span aria-hidden="true">•</span>
                      <span>{record.format}</span>
                    </div>
                    <h3 className="font-heading text-[18px] text-text-primary font-semibold mb-2 leading-snug">
                      {record.title}
                    </h3>
                    <p className="font-body text-[14px] text-text-muted line-clamp-2 leading-relaxed">
                      {record.summary}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline/10 flex items-center justify-between text-text-muted font-body text-[11px] font-semibold">
                    <span className="flex items-center gap-1">
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-[16px]"
                      >
                        tag
                      </span>
                      {record.ref}
                    </span>
                    <span className="text-tertiary uppercase">
                      {record.holding}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archival Request Note Banner */}
      <section className="w-full bg-warm-ivory py-space-xl border-t border-b border-royal-gold/40 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-5 pointer-events-none"
        >
          <span className="material-symbols-outlined text-[320px] text-primary">
            verified_user
          </span>
        </div>
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg bg-surface-container-low/80 p-space-lg rounded-xl shadow-sm border border-outline/10">
            <div className="flex items-start gap-space-md max-w-2xl">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm mt-1">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[24px]"
                >
                  menu_book
                </span>
              </div>
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-body text-[11px] uppercase tracking-widest text-regal-red font-bold">
                    Official Protocol Notice
                  </span>
                  <span aria-hidden="true" className="text-text-muted/50">
                    •
                  </span>
                  <span className="font-body text-[11px] font-semibold text-text-muted">
                    Research &amp; Academic Media
                  </span>
                </div>
                <h3 className="font-heading text-[22px] text-text-primary font-semibold mb-1">
                  Palace Directorate of Archival Records &amp; Research Access
                </h3>
                <p className="font-body text-[16px] text-text-muted leading-relaxed">
                  Researchers, accredited historians, museum curators, and
                  international press requiring uncompressed RAW master
                  negatives, high-resolution 600 DPI digital plates, or formal
                  publishing clearance may submit an official inquiry to the
                  Palace Secretariat.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto shrink-0">
              <button
                className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-body text-[12px] uppercase font-bold tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-space-xs"
                onClick={() => openRequest()}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[18px]"
                >
                  request_quote
                </span>
                <span>Request High-Res Media Access</span>
              </button>
              <a
                className="w-full sm:w-auto px-space-md py-3 rounded-lg border border-outline/30 bg-surface-container-lowest hover:bg-surface-container text-text-primary font-body text-[12px] uppercase font-semibold tracking-wider transition-colors flex items-center justify-center gap-space-xs text-center"
                href={MEDIA_KIT_MAILTO}
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[18px] text-tertiary"
                >
                  outgoing_mail
                </span>
                <span>Request the 2025 Media Kit</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plate lightbox */}
      {active && (
        <div
          aria-label={`Plate ${active.ref}`}
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-rich-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeOverlay}
          ref={lightboxRef}
          role="dialog"
          tabIndex={-1}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full aspect-[3/2] max-h-[70vh] bg-rich-black rounded-lg overflow-hidden">
              <Image
                alt={active.alt}
                className="object-contain"
                fill
                quality={88}
                sizes="100vw"
                src={cdn(active.src)}
              />
            </div>
            <div className="mt-space-md flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm text-surface">
              <div className="max-w-2xl">
                <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim uppercase tracking-wider block mb-1">
                  #{active.ref} · {active.series} · {active.date}
                </span>
                <h2 className="font-heading text-[22px] font-bold leading-snug mb-1">
                  {active.title}
                </h2>
                <p className="font-body text-[14px] text-surface-variant/80 leading-relaxed">
                  {active.caption}
                </p>
              </div>
              <button
                className="shrink-0 inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-royal-gold text-rich-black font-body text-[11px] font-bold uppercase tracking-wider"
                onClick={() => openRequest(active.ref)}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[18px]"
                >
                  request_quote
                </span>
                Request this plate
              </button>
            </div>

            {visible.length > 1 && (
              <>
                <button
                  aria-label="Previous plate"
                  className="absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-14 w-11 h-11 rounded-full bg-rich-black/70 text-surface flex items-center justify-center hover:bg-royal-gold hover:text-rich-black transition-colors"
                  onClick={() =>
                    setLightbox((i) =>
                      i === null ? i : (i - 1 + visible.length) % visible.length
                    )
                  }
                  type="button"
                >
                  <span aria-hidden="true" className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button
                  aria-label="Next plate"
                  className="absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-14 w-11 h-11 rounded-full bg-rich-black/70 text-surface flex items-center justify-center hover:bg-royal-gold hover:text-rich-black transition-colors"
                  onClick={() =>
                    setLightbox((i) =>
                      i === null ? i : (i + 1) % visible.length
                    )
                  }
                  type="button"
                >
                  <span aria-hidden="true" className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </>
            )}
          </div>

          <button
            aria-label="Close plate viewer"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-rich-black/70 text-surface flex items-center justify-center hover:bg-royal-gold hover:text-rich-black transition-colors"
            onClick={closeOverlay}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined">
              close
            </span>
          </button>
        </div>
      )}

      {/* Archival access inquiry */}
      {requestOpen && (
        <div
          aria-labelledby="archival-request-title"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-rich-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
        >
          <div
            className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-2xl relative my-auto"
            ref={requestRef}
          >
            <button
              aria-label="Close inquiry form"
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary"
              onClick={closeOverlay}
              type="button"
            >
              <span aria-hidden="true" className="material-symbols-outlined">
                close
              </span>
            </button>
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span aria-hidden="true" className="material-symbols-outlined">
                  archive
                </span>
              </div>
              <div>
                <h2
                  className="font-heading text-[18px] font-bold text-text-primary"
                  id="archival-request-title"
                >
                  Archival Media Inquiry
                </h2>
                <span className="font-body text-[11px] font-semibold text-text-muted uppercase">
                  Palace Records Directorate
                </span>
              </div>
            </div>

            {sent ? (
              <div
                aria-live="polite"
                className="flex flex-col items-center text-center gap-space-sm py-space-md"
                role="status"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[40px] text-status-success"
                >
                  mark_email_read
                </span>
                <p className="font-heading text-[18px] font-semibold text-text-primary">
                  Your inquiry has been lodged with the Directorate of Records.
                </p>
                <p className="font-body text-[14px] text-text-muted">
                  Protocol dispatch confirmation{" "}
                  <span className="font-semibold text-text-primary">
                    #{sent}
                  </span>
                  . The Secretariat replies to accredited requests within ten
                  working days.
                </p>
                <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
                  <button
                    className="px-space-lg py-2 rounded bg-primary-container text-on-primary font-body text-[12px] font-semibold uppercase"
                    onClick={closeOverlay}
                    type="button"
                  >
                    Close
                  </button>
                  <Link
                    className="px-space-lg py-2 rounded border border-outline/30 text-text-primary font-body text-[12px] font-semibold uppercase text-center"
                    href="/contact"
                  >
                    Contact the Secretariat
                  </Link>
                </div>
              </div>
            ) : (
              <form
                className="space-y-space-sm"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(
                    `IDM-REQ-${Math.floor(1000 + Math.random() * 9000)}`
                  );
                }}
              >
                <div>
                  <label
                    className="block font-body text-[11px] font-semibold uppercase text-text-primary mb-1"
                    htmlFor="request-name"
                  >
                    Full Name &amp; Institutional Affiliation
                  </label>
                  <input
                    autoComplete="name"
                    className="w-full px-3 py-2 bg-surface-container-low rounded border border-outline/20 font-body text-[14px] focus:outline-none focus:border-primary"
                    id="request-name"
                    name="name"
                    placeholder="e.g. Dr. Adaeze Okoh, Department of History"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block font-body text-[11px] font-semibold uppercase text-text-primary mb-1"
                    htmlFor="request-email"
                  >
                    Institutional / Professional Email
                  </label>
                  <input
                    autoComplete="email"
                    className="w-full px-3 py-2 bg-surface-container-low rounded border border-outline/20 font-body text-[14px] focus:outline-none focus:border-primary"
                    id="request-email"
                    name="email"
                    placeholder="name@university.edu or agency@press.ng"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block font-body text-[11px] font-semibold uppercase text-text-primary mb-1"
                    htmlFor="request-ref"
                  >
                    Archival Catalog Reference #
                  </label>
                  <input
                    className="w-full px-3 py-2 bg-surface-container-low rounded border border-outline/20 font-body text-[14px] focus:outline-none focus:border-primary"
                    id="request-ref"
                    name="reference"
                    onChange={(event) => setPrefill(event.target.value)}
                    placeholder="e.g. IDM-PH-1926-004 or 'General Centenary Suite'"
                    type="text"
                    value={prefill}
                  />
                </div>
                <div>
                  <label
                    className="block font-body text-[11px] font-semibold uppercase text-text-primary mb-1"
                    htmlFor="request-intent"
                  >
                    Research Intent or Publication Scope
                  </label>
                  <textarea
                    className="w-full px-3 py-2 bg-surface-container-low rounded border border-outline/20 font-body text-[14px] focus:outline-none focus:border-primary"
                    id="request-intent"
                    name="intent"
                    placeholder="State intended publication, academic thesis, or broadcast purpose..."
                    required
                    rows={3}
                  ></textarea>
                </div>
                <div className="pt-space-xs flex justify-end gap-space-sm">
                  <button
                    className="px-space-md py-2 rounded bg-surface-container text-text-primary font-body text-[12px] font-semibold uppercase"
                    onClick={closeOverlay}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="px-space-lg py-2 rounded bg-primary-container text-on-primary font-body text-[12px] font-semibold uppercase"
                    type="submit"
                  >
                    Transmit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
