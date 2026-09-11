"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { cdn } from "@/lib/media";

const notices = [
  {
    id: 1,
    category: "appeals",
    categoryLabel: "Appeals & Endowments",
    date: "Sept 28, 2025",
    title:
      "Kingdom Educational Endowment Awards Tertiary Grants to 150 Idoma Scholars",
    excerpt:
      "The Palace Educational Trust Fund concludes its fourth annual merit-based selection cycle, granting comprehensive university tuition sponsorships across STEM and cultural humanities disciplines.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFOmn1tjDkLys3yhhoaq36U6jvE5msbb0OdZ03B3c2xVYnWKJy_q1XFZpol9Cz4NjxpV9jkZ4Q_q7ffmwDd112r24BdyNL3uGl_a5ut0PGJ8WLjmlbhfbKr7Qy1lU5lfIqOwftZo02SmUrf2QZLvaaeNPzt3mZnngOh34DNpP7IupT2Z_ixEkH_eZaUvGyEnBKngBHT0EqBStgBRmKfnqWJPweHP2sRunsArRvNLr2NzRQXFAjtbC4",
    source: "Otukpo Administrative Registry",
    slug: "educational-endowment-fund",
  },
  {
    id: 2,
    category: "events",
    categoryLabel: "Traditional Events",
    date: "Sept 10, 2025",
    title:
      "Preparation Protocols for the Otukpo Royal Arts and Heritage Exposition 2026",
    excerpt:
      "The Palace Directorate of Culture outlines security logistics, artisan entry criteria, and historical display curation for the grand bicentennial cultural gathering scheduled for Easter season.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMi6a6v7VMGnKYZTtT7OI5sX7Wa6JftQFXyDuILUyijvEZcKcTkz232ScjXuIdg5mgaNuOzRHNatwG1HHyOWUjz6lOgweG0cfycmpr2ororZ8WJ8s6NyLkmM6zUjy-Sp27VvWjkI1FbuW8lnJTMUVCtnyz_BM7SPwNPRAYDWeCvOJw-OXJjO1XcBIFoMx82ULpmMPZSBoQf4WMLhQbfv7CfLolTUECv7vMAR-gSiYdkNqvQm_6b6Ob",
    source: "Culture & Heritage Dept",
    slug: "otukpo-royal-arts-heritage-exposition",
  },
  {
    id: 3,
    category: "statements",
    categoryLabel: "Royal Statements",
    date: "Aug 22, 2025",
    title:
      "Palace Directive on Environmental Protection Along River Benue Flood Basins",
    excerpt:
      "A formal royal advisory restricting uncontrolled industrial sand dredging and mandating buffer-zone re-vegetation across riparian agrarian chiefdoms in Benue South.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3-t-wLBkecUmAxaXZ-D2OF4HQDjwEFXEWnSmdBElM30ftDrKRZ13q9HOsOL97f5NGgpmQuRtSn5cOI4Dn7tgpYvP4n8ipctoR_MjXgbw_XfZsb-uP7Dsk9zEMLUk8Q6KONzvY4lG-BHQpl2NtSk_ezEyyj6cXG43jfQwg_5Uv-ToXYpHDdFz8bmvHAcsYv2qhqnLHfdMaK3cTFnjuJzWXatBofVLTLbA8OmXLGmCisdJaAp-g9_Mq",
    source: "Palace Secretariat",
    slug: "environmental-protection-river-benue",
  },
  {
    id: 4,
    category: "press",
    categoryLabel: "Press Releases",
    date: "Aug 05, 2025",
    title: "Och'Idoma Receives Delegation of United Kingdom Diaspora Chapter",
    excerpt:
      "The Paramount Ruler welcomes expatriate professionals in healthcare and infrastructure technology to finalize the establishment of a specialized mobile clinics initiative across nine local governments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCybaN4Cu6L8cOlEY1rSP1iKOHxOqpqfrWMmvnNNi9Qsy5eoZmoriiqwwxastniZ9NmckxvGx0Kj8PbEfaqwYUCVrirrdxrSJmoHP3aIrDSAYBHgGl0g-PsZnL-N50lYhLcBDMM3CvntFcUBqsN-hA3VUwQitLLHxhWz3qHEdQn7IfseN04Kaez-iIhQRC0qZsWpzCxqWl8wH0EA6X-gmzlbs9ByYQZby7tsfpcZ7duMNEeezGyHVgW",
    source: "Palace Protocol Bureau",
    slug: "uk-diaspora-chapter-delegation",
  },
  {
    id: 5,
    category: "statements",
    categoryLabel: "Royal Statements",
    date: "July 19, 2025",
    title:
      "Resolution on Traditional Dispute Settlement in Apa and Agatu Agricultural Corridors",
    excerpt:
      "Following consensus agreements mediated under royal charter, the Council codifies shared grazing timelines and seasonal harvest pathways to protect rural farming livelihoods.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6pPOPAFpeBiPr2ldzF7IbOBR3hN_4Bj190n8eYkYSgSBs3wcKkWUlVlrA7YCk9zSfhMcQHsOFQ3DA77jsr0194FkUE0Sd8QZpfxpb4q6kOpwOaH0jpKCrafx5Ezw70xM1AAUkePkTqGmyldJRC0aCBcBtDBjp-8phg3TuJvd7hay7jTqNVRFuMhBqdjmA1YVeLzjeTmrAjE7SuA9MdeQl1TKTuFJoDOLMvS5njbiUUq7yoFaGOJT",
    source: "High Council Judiciary",
    slug: "resolution-dispute-settlement-apa-agatu",
  },
  {
    id: 6,
    category: "events",
    categoryLabel: "Traditional Events",
    date: "July 02, 2025",
    title:
      "Inaugural Advisory Board Appointed for the Centenary Plus 2026 Foundation",
    excerpt:
      "Royal assent is granted to the committee overseeing capital construction for the Otukpo Royal Museum, Archival Library, and traditional crafts incubation complex.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4f5iJqBE-w2_QuML-eIVE4RqBDmZzrmQLx_9FveCcCK5hSO9fLZq5TB9LDgmkb2MgTD4qFnsmGUdIEGVz9vIRa3Qcr_7_3l2lK4AFGEQfmHchC5zz0ibNIiOARmrvlCWEDAyJqlwlhf_NUs1UAbFm-7hG7-NKScoAQmEgCcnrD-FCPNTx80C23Dlq-eqaOCkp4R3BCPqNc2M_BlvG7H1zmd14Ovo5aep_KlKHbmhmL2ZGYpSEujqa",
    source: "Centenary Commission",
    slug: "advisory-board-centenary-foundation",
  },
];

const categories = [
  { id: "all", label: "All Dispatches" },
  { id: "statements", label: "Royal Statements" },
  { id: "appeals", label: "Appeals & Endowments" },
  { id: "events", label: "Traditional Events" },
  { id: "press", label: "Press Releases" },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchCat =
        activeCategory === "all" || notice.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* Top Sovereign Header Segment */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
          {/* Title & Archival Framing */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex items-center gap-space-xs">
                <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary-container">
                  Official Court Bulletin · Otukpo
                </span>
                <span className="text-text-muted">|</span>
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                  Idoma Traditional Council
                </span>
              </div>
              <h1 className="font-heading type-title font-semibold text-text-primary">
                Palace Gazette &amp; Royal Announcements
              </h1>
              <p className="font-body text-[16px] text-text-muted">
                Official communiqués, royal court hearings, civic decrees, and
                institutional notices from the Office of the Och&apos;Idoma.
              </p>
            </div>

            {/* Official Registry Seal / Status Indicator */}
            <div className="flex items-center gap-space-sm bg-surface-container-highest px-space-md py-space-xs rounded-lg shadow-sm">
              <span
                className="material-symbols-outlined text-status-success text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                verified
              </span>
              <div className="flex flex-col">
                <span className="font-body text-[11px] text-text-primary font-bold">
                  Authenticated Registry
                </span>
                <span className="font-body text-[10px] text-text-muted leading-tight">
                  Gazette Vol. LXXIV · Issue 14
                </span>
              </div>
            </div>
          </div>

          {/* Category Filter Bar and Live Search */}
          <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            {/* Interactive Pill Categories */}
            <div
              className="flex items-center flex-wrap gap-space-xs"
              role="group"
              aria-label="Filter dispatches by category"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  className={`px-space-md py-space-xs rounded-lg font-body text-[12px] uppercase tracking-wider transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary-container text-on-primary shadow-sm"
                      : "bg-surface-container text-text-primary hover:bg-surface-container-high"
                  }`}
                  type="button"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Court Registry Search Bar */}
            <div className="relative min-w-[280px]">
              <label htmlFor="gazette-search" className="sr-only">
                Search gazette archives and decrees
              </label>
              <span
                className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-tertiary-container text-[20px] pointer-events-none"
                aria-hidden="true"
              >
                search
              </span>
              <input
                id="gazette-search"
                className="w-full pl-10 pr-space-md py-space-xs bg-surface-container font-body text-[14px] rounded-lg text-text-primary placeholder:text-text-muted focus:bg-surface-container-lowest focus:outline-none transition-colors"
                placeholder="Search gazette archives & decrees..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Canvas */}
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin w-full py-space-xl flex flex-col gap-space-xl">
        {/* Pinned / Hero Dispatch Card */}
        <article className="w-full bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row">
          {/* Media Aspect Left */}
          <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-full overflow-hidden bg-inverse-surface">
            <Image
              className="object-cover object-center"
              alt="Dignified sovereign assembly of the Och'Idoma royal court with elders, traditional rulers, and cultural drummers in vibrant red and black woven Idoma ceremonial attire, sitting under an embroidered palace pavilion canopy in the sun-drenched Otukpo palace courtyard."
              src={cdn(
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC76x6KfF6Onk78jP8CGhukZte4sg2HrfE7e-DowQeXb_rE3DRlNmYKIp0Ysl5EyxSGy_hNJe0B6aHCSSmBGBBfwbG0ip5BaJnYk07U0I4I73Q_nxXfhVA7wnTAshHDmZVe2k6Dn4zUCWYbDfOMQ7o6040ezPt5ceVEFK1JVjqwX0U2BTEANLjAafjEt502n6v4IEo3j5oGb2enbGZvAj8y8taFbz5sL7Udl3EM5hm3l2DDOJ3scqPp",
              )}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              quality={88}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute top-space-md left-space-md bg-inverse-surface/90 text-tertiary-fixed-dim px-space-md py-space-xs rounded-lg font-body text-[11px] font-semibold uppercase tracking-wider flex items-center gap-space-xs shadow-md backdrop-blur">
              <span
                className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                push_pin
              </span>
              Featured Imperial Dispatch
            </div>
            <div className="absolute bottom-space-md left-space-md right-space-md bg-gradient-to-t from-black/80 to-transparent p-space-sm rounded-lg">
              <span className="text-on-primary font-body text-[11px] font-semibold opacity-90">
                Archive Photograph · High Council Conclave in Otukpo
              </span>
            </div>
          </div>

          {/* Editorial Summary Right */}
          <div className="lg:w-1/2 p-space-lg lg:p-space-xl flex flex-col justify-between gap-space-md bg-surface-container-lowest">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between flex-wrap gap-space-xs">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-space-sm py-space-xs rounded font-body text-[11px] uppercase font-bold tracking-wider">
                  Royal Proclamation · High Council
                </span>
                <span className="font-body text-[11px] font-semibold text-text-muted">
                  October 14, 2025 · Otukpo Palace Inner Chambers
                </span>
              </div>
              <h2 className="font-heading text-[28px] font-semibold text-text-primary leading-tight">
                <Link
                  href="/news/communique-peace-land-stewardship"
                  className="hover:text-primary transition-colors"
                >
                  Royal Communiqué on Peaceful Coexistence, Ancestral Land
                  Boundary Stewardship, and Youth Civic Integration
                </Link>
              </h2>
              <p className="font-body text-[16px] text-text-muted">
                His Royal Majesty the Och&apos;Idoma V addresses traditional
                rulers, community elders, and diaspora representatives following
                the 144th Ordinary Sitting of the Idoma Area Traditional Council.
                The decree ratifies traditional boundary protocols and inaugurates
                regional land reconciliation panels across Benue South.
              </p>

              {/* Archival metadata tags */}
              <div className="flex items-center flex-wrap gap-space-md pt-space-xs text-text-muted font-body text-[11px] font-semibold">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-primary-container"
                    aria-hidden="true"
                  >
                    article
                  </span>
                  Ref: ITC/2025/DEC-08
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-primary-container"
                    aria-hidden="true"
                  >
                    schedule
                  </span>
                  8 min reading time
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-status-success"
                    aria-hidden="true"
                  >
                    lock_open
                  </span>
                  Public Domain
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-sm">
              <Link
                href="/news/communique-peace-land-stewardship"
                className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-body text-[12px] uppercase tracking-wider font-semibold shadow-sm hover:bg-primary transition-colors gap-space-xs"
              >
                <span>Read Full Communiqué</span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-surface-container text-text-primary font-body text-[12px] font-semibold uppercase tracking-wider hover:bg-surface-container-high transition-colors gap-space-xs"
              >
                <span
                  className="material-symbols-outlined text-[18px] text-tertiary"
                  aria-hidden="true"
                >
                  mail
                </span>
                <span>Request Bound Gazette Copy</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Main Two-Column Structure: News List & High Council Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Primary News Stream (8 cols) */}
          <section className="lg:col-span-8 flex flex-col gap-space-lg">
            <div className="flex items-center justify-between pb-space-xs">
              <h3 className="font-heading text-[18px] font-bold text-text-primary flex items-center gap-space-xs">
                <span
                  className="material-symbols-outlined text-primary-container text-[22px]"
                  aria-hidden="true"
                >
                  newspaper
                </span>
                Institutional Notices &amp; Gazettes
              </h3>
              <span
                className="font-body text-[11px] font-semibold text-text-muted uppercase tracking-wider"
                aria-live="polite"
              >
                Showing {filteredNotices.length} Recorded Notice
                {filteredNotices.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* 2-Column Subgrid of Gazette Records */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {filteredNotices.map((notice) => (
                <article
                  key={notice.id}
                  className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="w-full h-44 rounded-lg overflow-hidden bg-surface-container mb-space-xs relative">
                      <Image
                        className="object-cover"
                        alt=""
                        src={cdn(notice.image)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                        quality={88}
                      />
                    </div>
                    <div className="flex items-center justify-between font-body text-[11px] font-semibold">
                      <span className="text-primary-container uppercase">
                        {notice.categoryLabel}
                      </span>
                      <span className="text-text-muted">{notice.date}</span>
                    </div>
                    <h4 className="font-heading text-[18px] font-bold text-text-primary leading-snug">
                      <Link
                        href={`/news/${notice.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {notice.title}
                      </Link>
                    </h4>
                    <p className="font-body text-[14px] text-text-muted line-clamp-3">
                      {notice.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-body text-[11px] font-semibold text-text-muted">
                      {notice.source}
                    </span>
                    <Link
                      href={`/news/${notice.slug}`}
                      className="font-body text-[11px] text-primary-container font-semibold inline-flex items-center gap-1 hover:text-primary"
                    >
                      <span>Read Record</span>
                      <span
                        className="material-symbols-outlined text-[16px]"
                        aria-hidden="true"
                      >
                        chevron_right
                      </span>
                      <span className="sr-only">: {notice.title}</span>
                    </Link>
                  </div>
                </article>
              ))}
              {filteredNotices.length === 0 && (
                <div className="col-span-full py-space-xl flex flex-col items-center gap-space-sm text-center">
                  <span
                    className="material-symbols-outlined text-text-muted text-[36px]"
                    aria-hidden="true"
                  >
                    search_off
                  </span>
                  <p className="font-body text-[14px] text-text-muted">
                    No notice in the current volume matches that search.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className="font-body text-[12px] uppercase tracking-wider font-semibold text-primary-container hover:text-primary transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Current volume footer — the gazette cycle currently published in
                full, plus the route to everything older, which lives in the
                bound physical folios rather than online. */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-sm">
                <span
                  className="material-symbols-outlined text-primary-container text-[22px]"
                  aria-hidden="true"
                >
                  inventory_2
                </span>
                <p className="font-body text-[12px] text-text-muted">
                  <span className="font-semibold text-text-primary">
                    Gazette Vol. LXXIV · Issue 14
                  </span>{" "}
                  is published here in full — {notices.length} recorded notices.
                  Earlier volumes are held as bound folios in the Royal Archive
                  at Otukpo.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-space-md py-space-xs rounded-lg bg-surface-container-high text-text-primary font-body text-[12px] font-semibold uppercase tracking-wider hover:bg-surface-container-highest transition-colors inline-flex items-center gap-space-xs"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  history
                </span>
                <span>Request Historical Decrees</span>
              </Link>
            </div>
          </section>

          {/* Right Column: Institutional Sidebar (4 cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-space-lg">
            {/* Sidebar Card 1: Official Gazette Subscription */}
            <div className="bg-inverse-surface text-surface rounded-xl p-space-lg shadow-md flex flex-col gap-space-md relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span
                  className="material-symbols-outlined text-[160px] text-tertiary-fixed"
                  aria-hidden="true"
                >
                  account_balance
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span
                  className="material-symbols-outlined text-tertiary-container text-[24px]"
                  aria-hidden="true"
                >
                  mark_email_unread
                </span>
                <span className="font-body text-[11px] uppercase tracking-widest text-tertiary-fixed-dim font-bold">
                  Imperial Registry Dispatch
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-heading text-[18px] font-bold text-surface-container-lowest">
                  Subscribe for Official Court Updates
                </h3>
                <p className="font-body text-[14px] text-surface-container-highest">
                  Receive direct royal proclamations, emergency palace notices,
                  and council gazettes directly in your institutional inbox.
                </p>
              </div>
              {subscribed ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="z-10 flex items-start gap-space-sm rounded-lg bg-surface-container-highest/15 p-space-md mt-space-xs"
                >
                  <span
                    className="material-symbols-outlined text-tertiary-container text-[22px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    mark_email_read
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-body text-[14px] text-surface-container-lowest font-semibold">
                      Entered into the registry dispatch list.
                    </p>
                    <p className="font-body text-[11px] text-surface-container-highest leading-tight">
                      A confirmation will follow from the Palace Communications
                      Directorate.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubscribed(false)}
                      className="self-start mt-space-xs font-body text-[11px] uppercase tracking-wider font-bold text-tertiary-fixed-dim hover:text-tertiary-fixed transition-colors"
                    >
                      Add another address
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-space-sm mt-space-xs"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                >
                  <div className="flex flex-col gap-1 z-10">
                    <label
                      htmlFor="gazette-email"
                      className="font-body text-[11px] font-semibold uppercase tracking-wider text-tertiary-fixed-dim"
                    >
                      Institutional Email
                    </label>
                    <input
                      id="gazette-email"
                      name="email"
                      autoComplete="email"
                      className="w-full px-space-md py-space-sm bg-surface-container-highest/10 text-surface font-body text-[14px] rounded-lg placeholder:text-surface-container-highest/60 focus:bg-surface-container-highest/20 focus:outline-none transition-colors"
                      placeholder="protocol@organization.org"
                      required
                      type="email"
                    />
                  </div>
                  <button
                    className="w-full py-space-sm rounded-lg bg-tertiary-container text-on-secondary-fixed font-body text-[12px] uppercase tracking-wider font-bold hover:bg-tertiary-fixed transition-colors shadow-sm z-10"
                    type="submit"
                  >
                    Subscribe to Gazette
                  </button>
                </form>
              )}
              <div className="flex items-start gap-space-xs pt-space-xs">
                <span
                  className="material-symbols-outlined text-tertiary-fixed text-[18px]"
                  aria-hidden="true"
                >
                  verified_user
                </span>
                <p className="font-body text-[11px] font-semibold text-surface-container-highest leading-tight">
                  Authenticated and distributed by the Palace Communications
                  Directorate. Zero spam mandate.
                </p>
              </div>
            </div>

            {/* Sidebar Card 2: Press & Media Inquiries */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span
                  className="material-symbols-outlined text-primary-container text-[22px]"
                  aria-hidden="true"
                >
                  perm_media
                </span>
                <h3 className="font-heading text-[18px] font-bold text-text-primary">
                  Palace Media Kit &amp; Press Bureau
                </h3>
              </div>
              <p className="font-body text-[14px] text-text-muted">
                Accredited domestic and foreign journalists, broadcasters, and
                cultural researchers can obtain vetted press resources and royal
                portraiture guidelines. Assets are released on request by the
                Press Bureau.
              </p>
              <ul className="flex flex-col gap-space-xs">
                {[
                  {
                    icon: "portrait",
                    title: "Official Royal Portrait (High Res)",
                    meta: "HRM Och'Idoma V · TIFF & JPEG",
                    subject: "Press request: Official Royal Portrait (high resolution)",
                  },
                  {
                    icon: "shield",
                    title: "Imperial Coat of Arms Vector",
                    meta: "EPS, SVG & PDF Guidelines",
                    subject: "Press request: Imperial Coat of Arms vector pack",
                  },
                  {
                    icon: "menu_book",
                    title: "Traditional Protocol & Titles Guide",
                    meta: "2025 Revised Edition (PDF)",
                    subject:
                      "Press request: Traditional Protocol & Titles Guide (2025 edition)",
                  },
                ].map((asset) => (
                  <li key={asset.title}>
                    <a
                      href={`mailto:press@ochidomapalace.org.ng?subject=${encodeURIComponent(
                        asset.subject,
                      )}`}
                      className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-space-sm transition-colors"
                    >
                      <span className="flex items-center gap-space-sm">
                        <span
                          className="material-symbols-outlined text-primary-container text-[20px]"
                          aria-hidden="true"
                        >
                          {asset.icon}
                        </span>
                        <span className="flex flex-col">
                          <span className="font-body text-[12px] text-text-primary font-bold">
                            {asset.title}
                          </span>
                          <span className="font-body text-[11px] font-semibold text-text-muted">
                            {asset.meta}
                          </span>
                        </span>
                      </span>
                      <span
                        className="material-symbols-outlined text-text-muted text-[18px] shrink-0"
                        aria-hidden="true"
                      >
                        outgoing_mail
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                <span className="font-body text-[11px] text-text-primary font-bold">
                  Press Office Contact:
                </span>
                <a
                  href="mailto:press@ochidomapalace.org.ng"
                  className="font-body text-[14px] text-text-muted hover:text-primary transition-colors"
                >
                  press@ochidomapalace.org.ng
                </a>
                <a
                  href="tel:+2348030007401"
                  className="font-body text-[14px] text-text-muted hover:text-primary transition-colors"
                >
                  +234 (0) 803 000 7401
                </a>
              </div>
            </div>

            {/* Sidebar Card 3: Recent Court Statements Archive (2020–2025) */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span
                    className="material-symbols-outlined text-primary-container text-[22px]"
                    aria-hidden="true"
                  >
                    folder_open
                  </span>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary">
                    Archival Volumes
                  </h3>
                </div>
                <span className="font-body text-[11px] font-semibold text-text-muted uppercase">
                  2020–2025
                </span>
              </div>
              <p className="font-body text-[14px] text-text-muted">
                Access past bound annual folios of royal judgments, customary
                rulings, and chieftaincy appointments.
              </p>
              <ul className="flex flex-col divide-y divide-surface-container">
                {[
                  { volume: "Volume LXXIII (2024 Gazette)", records: 42 },
                  { volume: "Volume LXXII (2023 Gazette)", records: 38 },
                  {
                    volume: "Volume LXXI (2022 Coronation Special)",
                    records: 64,
                  },
                  { volume: "Volume LXX (2021 Gazette)", records: 31 },
                  { volume: "Volume LXIX (2020 COVID Notices)", records: 27 },
                ].map((vol) => (
                  <li
                    key={vol.volume}
                    className="py-space-xs flex items-center justify-between gap-space-sm"
                  >
                    <span className="font-body text-[14px] font-semibold text-text-primary">
                      {vol.volume}
                    </span>
                    <span className="font-body text-[11px] font-semibold text-text-muted whitespace-nowrap">
                      {vol.records} Records
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="w-full py-space-xs rounded-lg bg-surface-container text-text-primary font-body text-[12px] font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors text-center inline-flex items-center justify-center gap-space-xs"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  local_library
                </span>
                <span>Arrange an Archive Visit</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
