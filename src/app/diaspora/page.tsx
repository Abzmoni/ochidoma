"use client";

import Link from "next/link";
import { useState } from "react";
import RoyalCrest from "@/components/RoyalCrest";

export default function Diaspora() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [submitted, setSubmitted] = useState(false);

  const regions = [
    { id: "all", label: "All Regions (32)" },
    { id: "europe", label: "Europe & UK" },
    { id: "north-america", label: "North America" },
    { id: "asia-pacific", label: "Asia-Pacific" },
    { id: "africa", label: "Africa & Regional Nigeria" },
  ];

  const chapters = [
    {
      region: "europe",
      location: "London, United Kingdom",
      name: "Idoma Community Association United Kingdom & Ireland",
      liaisonTitle: "President",
      liaisonName: "Chief Dr. Edwin Agada",
      email: "uk.liaison@idomacouncil.org",
      eventName: "Flagship Gathering",
      eventDate: "Aug 16, 2025",
    },
    {
      region: "north-america",
      location: "Atlanta, GA, USA",
      name: "Idoma Development League of North America (IDLNA)",
      liaisonTitle: "President",
      liaisonName: "Engr. Patricia Oche",
      email: "idlna.secretariat@idomacouncil.org",
      eventName: "Annual Convention",
      eventDate: "Oct 04, 2025",
    },
    {
      region: "north-america",
      location: "Toronto & Calgary, Canada",
      name: "Idoma Cultural Union Canada (ICUC)",
      liaisonTitle: "Liaison Officer",
      liaisonName: "Barr. Audu Michael Onoja",
      email: "canada@idomacouncil.org",
      eventName: "Cultural Heritage Gala",
      eventDate: "Nov 22, 2025",
    },
    {
      region: "europe",
      location: "Berlin & Paris, EU",
      name: "Och'Idoma Diaspora Chapter European Union",
      liaisonTitle: "Coordinator",
      liaisonName: "Dr. Christopher Ogwuche",
      email: "eu.diaspora@idomacouncil.org",
      eventName: "EU Idoma Conclave",
      eventDate: "Sep 19, 2025",
    },
    {
      region: "asia-pacific",
      location: "Sydney & Melbourne, AU",
      name: "Idoma Association of Australasia",
      liaisonTitle: "President",
      liaisonName: "Arc. Stephen Idoko",
      email: "australasia@idomacouncil.org",
      eventName: "Pacific Heritage Forum",
      eventDate: "Nov 08, 2025",
    },
    {
      region: "africa",
      location: "Johannesburg, South Africa",
      name: "Idoma Peoples Congress Southern Africa",
      liaisonTitle: "Secretary-General",
      liaisonName: "Mrs. Joy Elaigwu",
      email: "southernafrica@idomacouncil.org",
      eventName: "Pan-African Youth Meet",
      eventDate: "Jul 26, 2025",
    },
  ];

  const filteredChapters =
    activeFilter === "all"
      ? chapters
      : chapters.filter((chapter) => chapter.region === activeFilter);

  const handleDiasporaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Sovereign Hero Band */}
      <section className="relative w-full bg-primary-container text-on-primary overflow-hidden">
        {/* Geometric Filigree & Watermark Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg
            className="w-full h-full"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            width="100%"
          >
            <pattern
              height="20"
              id="royal-mesh"
              patternUnits="userSpaceOnUse"
              width="20"
            >
              <path
                d="M 0 10 L 10 0 L 20 10 L 10 20 Z"
                fill="none"
                stroke="#ffe08e"
                strokeWidth="0.5"
              ></path>
              <circle cx="10" cy="10" fill="#ffe08e" r="1.5"></circle>
            </pattern>
            <rect fill="url(#royal-mesh)" height="100%" width="100%"></rect>
          </svg>
        </div>

        {/* Inner Wrapper */}
        <div className="relative max-w-[1200px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl flex flex-col items-center text-center">
          {/* Royal Crest Badge */}
          <div className="mb-space-md flex items-center justify-center">
            {/* Vector, not a raster: the CDN copy arrived as a thumbnail and
                blurred at 64px. Same crest as the masthead. */}
            <RoyalCrest className="w-16 h-16 shadow-md rounded-full" />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-space-sm mb-space-sm">
            <span className="w-6 h-[1px] bg-tertiary-fixed-dim"></span>
            <span className="font-body text-[12px] uppercase font-semibold tracking-widest text-tertiary-fixed">
              Office of Diaspora Mobilization &amp; Global Engagement
            </span>
            <span className="w-6 h-[1px] bg-tertiary-fixed-dim"></span>
          </div>

          {/* Headline */}
          <h1 className="font-heading type-display font-bold text-surface tracking-tight max-w-4xl">
            The Idoma Nation Abroad
          </h1>

          {/* Editorial Narrative Paragraph */}
          <p className="font-body text-[18px] text-surface-container-low max-w-3xl mt-space-md leading-relaxed">
            Connecting sons and daughters of the Idoma Kingdom across five
            continents. Wherever you dwell, you remain an indispensable branch of
            the sacred Alekwu lineage, committed to cultural preservation,
            ancestral heritage, and homeland development.
          </p>

          {/* Institutional Proclamation Hairline */}
          <div className="w-24 h-[2px] bg-tertiary-container my-space-lg opacity-80"></div>

          {/* Quick Stats Banner */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs text-left">
            {/* Stat Card 1 */}
            <div className="bg-primary/50 backdrop-blur-sm p-space-md rounded-lg shadow-sm flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px] leading-none">
                public
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-[22px] text-surface font-bold">
                  32 Chapters
                </span>
                <span className="font-body text-[11px] font-semibold text-surface-container-highest uppercase tracking-wider">
                  Officially Accredited Globally
                </span>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-primary/50 backdrop-blur-sm p-space-md rounded-lg shadow-sm flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px] leading-none">
                flag
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-[22px] text-surface font-bold">
                  18 Nations
                </span>
                <span className="font-body text-[11px] font-semibold text-surface-container-highest uppercase tracking-wider">
                  Five Continents Represented
                </span>
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-primary/50 backdrop-blur-sm p-space-md rounded-lg shadow-sm flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px] leading-none">
                account_balance
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-[22px] text-surface font-bold">
                  ₦120M+
                </span>
                <span className="font-body text-[11px] font-semibold text-surface-container-highest uppercase tracking-wider">
                  Homeland Infrastructure In 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monarch Proclamation Quote Band */}
      <section className="w-full bg-surface-container-high py-space-md">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="material-symbols-outlined text-tertiary text-[28px]">
              shield_with_heart
            </span>
            <p className="font-body text-[16px] text-on-surface italic">
              “Our border is not marked by the sands of Otukpo alone, but spans
              wherever an Idoma child breathes honor into our ancestral name.”
            </p>
          </div>
          <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-secondary whitespace-nowrap">
            — His Paramount Majesty, Och’Idoma V
          </span>
        </div>
      </section>

      {/* Chapter Directory Section */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex flex-col">
          {/* Section Title & Narrative */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-tertiary">
                Global Diplomatic Roll
              </span>
              <h2 className="font-heading type-headline font-semibold text-text-primary tracking-tight mt-space-xs">
                Official Recognized Chapters
              </h2>
            </div>
            <p className="font-body text-[14px] text-text-muted max-w-md">
              Accredited civic chapters operating with official charter
              recognition from the Idoma Traditional Council.
            </p>
          </div>

          {/* Region Filter Pills */}
          <div className="flex flex-wrap items-center gap-space-xs mb-space-lg">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveFilter(region.id)}
                className={`px-space-md py-space-xs rounded-full font-body text-[12px] font-semibold tracking-wider transition-colors ${
                  activeFilter === region.id
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
                type="button"
              >
                {region.label}
              </button>
            ))}
          </div>

          {/* Dossier Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {filteredChapters.map((chapter) => (
              <article
                key={chapter.name}
                className="group flex flex-col justify-between bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 border border-outline/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded font-body text-[11px] font-semibold text-text-primary">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        location_on
                      </span>{" "}
                      {chapter.location}
                    </span>
                    <span className="inline-flex items-center gap-1 font-body text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-status-success font-semibold">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>{" "}
                      Charter Valid
                    </span>
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                    {chapter.name}
                  </h3>

                  {/* Liaison Information */}
                  <div className="flex flex-col gap-space-xs mt-space-md pt-space-md bg-surface-container-lowest/60 p-space-sm rounded-lg border border-outline/10">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        badge
                      </span>
                      <span className="font-body text-[14px] text-text-muted">
                        {chapter.liaisonTitle}:{" "}
                        <strong className="text-text-primary">
                          {chapter.liaisonName}
                        </strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        mail
                      </span>
                      <span className="font-body text-[14px] text-text-muted truncate">
                        {chapter.email}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-space-lg pt-space-md flex flex-col gap-space-sm bg-surface-container-high/40 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl border-t border-outline/10">
                  <div className="flex items-center justify-between text-secondary">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                      {chapter.eventName}
                    </span>
                    <span className="font-body text-[12px] text-primary font-bold">
                      {chapter.eventDate}
                    </span>
                  </div>
                  {/* Was href="#". There is no per-chapter page, but the
                      liaison's desk is the thing a reader actually wants. */}
                  <a
                    href={`mailto:${chapter.email}`}
                    className="inline-flex items-center justify-between font-body text-[12px] text-primary hover:text-primary-container font-semibold transition-colors mt-space-xs"
                  >
                    <span>Contact the {chapter.liaisonTitle}</span>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Strip */}
      <section className="w-full bg-surface-container py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex flex-col">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <div className="inline-flex items-center gap-space-xs text-tertiary">
                <span className="material-symbols-outlined text-[20px]">
                  calendar_month
                </span>
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider">
                  Imperial Assembly Calendar
                </span>
              </div>
              <h2 className="font-heading type-headline font-semibold text-text-primary tracking-tight mt-space-xs">
                Upcoming Global Diaspora Conclaves &amp; Gatherings
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-space-xs font-body text-[12px] uppercase tracking-wider text-primary font-bold hover:text-primary-container transition-colors"
            >
              <span>Request the 2025 Gazette</span>
              <span className="material-symbols-outlined text-[16px]">
                mail
              </span>
            </Link>
          </div>

          {/* 4 Event Cards Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Event 1 */}
            <div className="flex flex-col justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow transition-shadow border border-outline/10">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline/10">
                  <div className="flex flex-col items-center bg-primary-container text-on-primary rounded-lg px-space-md py-1">
                    <span className="font-body text-[11px] font-bold uppercase tracking-wider">
                      AUG
                    </span>
                    <span className="font-heading text-[28px] font-bold text-tertiary-fixed leading-none">
                      16
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold px-space-xs py-0.5 rounded bg-surface-container-high text-secondary">
                    In-Person
                  </span>
                </div>
                <h4 className="font-heading text-[18px] font-bold text-text-primary leading-tight">
                  UK Annual Idoma Cultural Day &amp; Youth Heritage Forum
                </h4>
                <div className="flex items-center gap-space-xs mt-space-sm text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    location_on
                  </span>
                  <span className="truncate">London, United Kingdom</span>
                </div>
                <div className="flex items-center gap-space-xs mt-1 text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    schedule
                  </span>
                  <span>10:00 AM – 6:00 PM BST</span>
                </div>
              </div>
              <button
                className="w-full mt-space-md py-space-xs px-space-md bg-surface-container-high hover:bg-primary hover:text-on-primary text-text-primary font-body text-[12px] font-bold uppercase tracking-wider rounded transition-colors text-center"
                type="button"
              >
                Register Attendance
              </button>
            </div>

            {/* Event 2 */}
            <div className="flex flex-col justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow transition-shadow border border-outline/10">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline/10">
                  <div className="flex flex-col items-center bg-primary-container text-on-primary rounded-lg px-space-md py-1">
                    <span className="font-body text-[11px] font-bold uppercase tracking-wider">
                      OCT
                    </span>
                    <span className="font-heading text-[28px] font-bold text-tertiary-fixed leading-none">
                      04
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold px-space-xs py-0.5 rounded bg-surface-container-high text-secondary">
                    Hybrid / Zoom
                  </span>
                </div>
                <h4 className="font-heading text-[18px] font-bold text-text-primary leading-tight">
                  North America Virtual Townhall with the Palace Secretariat
                </h4>
                <div className="flex items-center gap-space-xs mt-space-sm text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    videocam
                  </span>
                  <span className="truncate">Atlanta &amp; Zoom Broadcast</span>
                </div>
                <div className="flex items-center gap-space-xs mt-1 text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    schedule
                  </span>
                  <span>2:00 PM EST / 7:00 PM WAT</span>
                </div>
              </div>
              <button
                className="w-full mt-space-md py-space-xs px-space-md bg-surface-container-high hover:bg-primary hover:text-on-primary text-text-primary font-body text-[12px] font-bold uppercase tracking-wider rounded transition-colors text-center"
                type="button"
              >
                Register Attendance
              </button>
            </div>

            {/* Event 3 */}
            <div className="flex flex-col justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow transition-shadow border border-outline/10">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline/10">
                  <div className="flex flex-col items-center bg-primary-container text-on-primary rounded-lg px-space-md py-1">
                    <span className="font-body text-[11px] font-bold uppercase tracking-wider">
                      NOV
                    </span>
                    <span className="font-heading text-[28px] font-bold text-tertiary-fixed leading-none">
                      12
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold px-space-xs py-0.5 rounded bg-surface-container-high text-secondary">
                    Hybrid Plenary
                  </span>
                </div>
                <h4 className="font-heading text-[18px] font-bold text-text-primary leading-tight">
                  Diaspora Economic Summit on Benue South Infrastructure
                </h4>
                <div className="flex items-center gap-space-xs mt-space-sm text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    location_on
                  </span>
                  <span className="truncate">Transcorp Hilton, Abuja</span>
                </div>
                <div className="flex items-center gap-space-xs mt-1 text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    schedule
                  </span>
                  <span>9:00 AM – 4:30 PM WAT</span>
                </div>
              </div>
              <button
                className="w-full mt-space-md py-space-xs px-space-md bg-surface-container-high hover:bg-primary hover:text-on-primary text-text-primary font-body text-[12px] font-bold uppercase tracking-wider rounded transition-colors text-center"
                type="button"
              >
                Register Attendance
              </button>
            </div>

            {/* Event 4 */}
            <div className="flex flex-col justify-between bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow transition-shadow border border-outline/10">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline/10">
                  <div className="flex flex-col items-center bg-primary-container text-on-primary rounded-lg px-space-md py-1">
                    <span className="font-body text-[11px] font-bold uppercase tracking-wider">
                      DEC
                    </span>
                    <span className="font-heading text-[28px] font-bold text-tertiary-fixed leading-none">
                      28
                    </span>
                  </div>
                  <span className="font-body text-[11px] px-space-xs py-0.5 rounded bg-primary-fixed-dim text-primary font-bold">
                    Royal Gala
                  </span>
                </div>
                <h4 className="font-heading text-[18px] font-bold text-text-primary leading-tight">
                  Homecoming Royal Banquet &amp; Investiture at Otukpo Palace
                </h4>
                <div className="flex items-center gap-space-xs mt-space-sm text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    castle
                  </span>
                  <span className="truncate">Otukpo Royal Grounds</span>
                </div>
                <div className="flex items-center gap-space-xs mt-1 text-text-muted font-body text-[14px]">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    schedule
                  </span>
                  <span>6:00 PM WAT Till Dawn</span>
                </div>
              </div>
              <button
                className="w-full mt-space-md py-space-xs px-space-md bg-primary-container hover:bg-primary text-on-primary font-body text-[12px] font-bold uppercase tracking-wider rounded transition-colors text-center"
                type="button"
              >
                Request Royal Invite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Registration Form */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Side: Editorial & Palace Seal Context */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  how_to_reg
                </span>
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider">
                  Palace Registry Protocol
                </span>
              </div>
              <h2 className="font-heading type-headline font-semibold text-text-primary leading-tight">
                Institutional Registry of the Diaspora
              </h2>
              <p className="font-body text-[16px] text-text-muted leading-relaxed">
                The Idoma Traditional Council maintains an unbroken, verified roll
                of all community chapters, liaison officers, and cultural clubs
                across the diaspora.
              </p>
              <p className="font-body text-[16px] text-text-muted leading-relaxed">
                Whether integrating with an established umbrella body or seeking
                council patronage for a newly formed city union, registration
                entitles your community to imperial seals, direct communications
                from the Stool, and ceremonial representation during the annual
                Och’Idoma festival.
              </p>

              {/* Archival Verification Box */}
              <div className="bg-surface-container p-space-md rounded-xl mt-space-sm flex flex-col gap-space-xs border border-outline/10">
                <div className="flex items-center gap-space-xs text-status-success font-semibold">
                  <span className="material-symbols-outlined text-[20px]">
                    verified_user
                  </span>
                  <span className="font-body text-[12px] uppercase tracking-wider">
                    Direct Palace Accreditation
                  </span>
                </div>
                <p className="font-body text-[14px] text-on-surface">
                  Registered chapters receive verified civic credentials signed by
                  the Council Custodian of Traditional Records and direct advisory
                  access to the Palace Envoy for International Relations.
                </p>
              </div>

              <div className="flex items-center gap-space-md pt-space-xs">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[24px]">
                    call
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Secretariat Direct Desk
                  </span>
                  <span className="font-body text-[16px] text-text-primary font-bold">
                    +234 (0) 708 000 IDOMA
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Ceremonial Styled Form Container */}
            <div className="lg:col-span-7 bg-surface-container-low p-space-lg md:p-space-xl rounded-xl shadow-md border border-outline/10">
              <div className="mb-space-md">
                <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                  Join an Existing Chapter or Register a New Community Liaison
                </h3>
                <p className="font-body text-[14px] text-text-muted mt-1">
                  Ensure your voice is recognized in the official registry of the
                  Idoma Traditional Council.
                </p>
              </div>

              {submitted ? (
                <div
                  className="flex flex-col items-center text-center gap-space-sm rounded-xl bg-surface-container p-space-xl border border-status-success/30"
                  role="status"
                  aria-live="polite"
                >
                  <span className="material-symbols-outlined text-[40px] text-status-success">
                    verified
                  </span>
                  <h4 className="font-heading text-[22px] font-semibold text-text-primary">
                    Registration received
                  </h4>
                  <p className="font-body text-[14px] text-text-muted max-w-sm">
                    Your details have been transmitted to the Palace Secretariat.
                    You will receive official correspondence within 7 working
                    days.
                  </p>
                  <button
                    className="mt-space-xs inline-flex items-center gap-space-xs font-body text-[12px] font-semibold uppercase tracking-wider text-primary hover:text-primary-container transition-colors"
                    onClick={() => setSubmitted(false)}
                    type="button"
                  >
                    Register another liaison
                  </button>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-space-md"
                  onSubmit={handleDiasporaSubmit}
                >
                {/* Full Legal Name */}
                <div className="flex flex-col gap-1">
                  <label
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary"
                    htmlFor="legal-name"
                  >
                    Full Legal Name <span className="text-primary">*</span>
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                    id="legal-name"
                    placeholder="e.g. Dr. Emmanuel Agbo Oche"
                    required
                    type="text"
                  />
                </div>

                {/* Country & City of Residence */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary"
                      htmlFor="residence-country"
                    >
                      Country of Residence <span className="text-primary">*</span>
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                      id="residence-country"
                      placeholder="e.g. United Kingdom"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary"
                      htmlFor="residence-city"
                    >
                      City / State <span className="text-primary">*</span>
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                      id="residence-city"
                      placeholder="e.g. Greater Manchester"
                      required
                      type="text"
                    />
                  </div>
                </div>

                {/* Chapter of Interest Dropdown */}
                <div className="flex flex-col gap-1">
                  <label
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary"
                    htmlFor="chapter-interest"
                  >
                    Chapter of Interest or Liaison Scope{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <select
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all cursor-pointer"
                    id="chapter-interest"
                    required
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select an affiliated diaspora chapter
                    </option>
                    <option value="uk-ireland">
                      Idoma Community Association United Kingdom &amp; Ireland
                    </option>
                    <option value="north-america">
                      Idoma Development League of North America (IDLNA)
                    </option>
                    <option value="canada">
                      Idoma Cultural Union Canada (ICUC)
                    </option>
                    <option value="eu">
                      Och&apos;Idoma Diaspora Chapter European Union
                    </option>
                    <option value="australasia">
                      Idoma Association of Australasia
                    </option>
                    <option value="southern-africa">
                      Idoma Peoples Congress Southern Africa
                    </option>
                    <option value="other-existing">
                      Other Recognized Regional Union
                    </option>
                    <option value="new-chapter">
                      ★ Starting a New Chapter / Civic Liaison Desk
                    </option>
                  </select>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex flex-col gap-1">
                  <label
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary"
                    htmlFor="contact-phone"
                  >
                    Phone / WhatsApp with Country Code{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                    id="contact-phone"
                    placeholder="+44 7700 900077"
                    required
                    type="tel"
                  />
                </div>

                {/* Inquiries / Message */}
                <div className="flex flex-col gap-1">
                  <label
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary"
                    htmlFor="message-notes"
                  >
                    Inquiry, Clan Affiliation, or Liaison Background
                  </label>
                  <textarea
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                    id="message-notes"
                    placeholder="Include lineage/ancestral district in Idomaland (e.g., Otukpo, Ogbadibo, Okpokwu) or specific community objectives..."
                    rows={3}
                  ></textarea>
                </div>

                {/* Submit Button & Reassurance */}
                <div className="flex flex-col gap-space-sm mt-space-sm">
                  <button
                    className="w-full py-space-sm px-space-lg bg-primary hover:bg-primary-container text-on-primary font-body text-[12px] font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center justify-center gap-space-sm"
                    type="submit"
                  >
                    <span>Submit Registration to Palace Secretariat</span>
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                  <div className="flex items-center gap-space-xs text-text-muted justify-center text-center">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      lock
                    </span>
                    <p className="font-body text-[11px] font-semibold">
                      All records are securely maintained under the authority of
                      the Palace Directorate of Diaspora Affairs.
                    </p>
                  </div>
                </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
