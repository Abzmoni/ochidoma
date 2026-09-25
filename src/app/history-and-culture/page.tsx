"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cdn } from "@/lib/media";

// The Grand Centennial Conclave — 100 years on from the 1926 Northern Nigeria
// Gazette consolidation of the Idoma polities. The countdown is derived from a
// fixed target so it is actually correct; the prototype hard-coded "280 days"
// into state and decremented it, which meant it reset on every page load and
// bore no relation to the date in the copy beside it. The exact day is still
// to be confirmed by the Palace Secretariat — update this one constant.
const CENTENARY = new Date("2026-12-01T00:00:00+01:00");

type Remaining = { days: number; hours: number; mins: number; secs: number };

function remainingUntil(target: Date): Remaining {
  const ms = Math.max(0, target.getTime() - Date.now());
  const secsTotal = Math.floor(ms / 1000);
  return {
    days: Math.floor(secsTotal / 86400),
    hours: Math.floor((secsTotal % 86400) / 3600),
    mins: Math.floor((secsTotal % 3600) / 60),
    secs: secsTotal % 60,
  };
}

export default function HistoryAndCulture() {
  // Start null so server and first client render agree (no hydration mismatch);
  // fill in on mount, then tick every second.
  const [timeLeft, setTimeLeft] = useState<Remaining | null>(null);

  useEffect(() => {
    setTimeLeft(remainingUntil(CENTENARY));
    const timer = setInterval(
      () => setTimeLeft(remainingUntil(CENTENARY)),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Archival Hero Section */}
      <section className="relative w-full overflow-hidden bg-inverse-surface text-surface">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Archival photograph of Och'Idoma and council of elders in ceremonial attire"
            className="object-cover object-center opacity-40 mix-blend-luminosity filter contrast-125 scale-105"
            src={cdn(
              "/ph3.jpg"
            )}
            fill
            sizes="100vw"
            quality={88}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-rich-black/85 to-rich-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl lg:py-28 flex flex-col justify-end min-h-[540px]">
          {/* Archival Metadata Header */}
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="inline-block w-2.5 h-2.5 bg-tertiary-container rotate-45"></span>
            <span className="font-body text-[12px] uppercase tracking-widest text-tertiary-fixed-dim font-semibold">
              Palace Archives · Cultural Custody Directorate
            </span>
            <span className="hidden sm:inline-block h-px w-12 bg-tertiary-container/40"></span>
            <span className="hidden sm:inline font-body text-[11px] text-surface-container-highest/60 tracking-wider font-semibold">
              DOC REF: IDM-ARCH-1926-C
            </span>
          </div>
          {/* Main Heading & Sovereign Narrative */}
          <h1 className="font-heading type-display font-bold text-surface max-w-4xl tracking-tight mb-space-md">
            History &amp; Culture of the Idoma Nation
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-surface-container-high max-w-2xl font-normal leading-relaxed mb-space-lg">
            From the ancestral cradle of Apa to the sovereign stool at Otukpo —
            a millennium of courage, egalitarian justice, and oral majesty.
          </p>
          {/* Institutional Badges & Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-md border-t border-tertiary-container/30 max-w-3xl">
            <div className="flex flex-col">
              <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim uppercase tracking-wider">
                Ancestral Origin
              </span>
              <span className="font-heading text-[18px] font-bold text-surface">
                Kwararafa Empire
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim uppercase tracking-wider">
                Traditional Seat
              </span>
              <span className="font-heading text-[18px] font-bold text-surface">
                Otukpo, Benue
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim uppercase tracking-wider">
                Constituent Stools
              </span>
              <span className="font-heading text-[18px] font-bold text-surface">
                22 Och&apos;Idoma Polities
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim uppercase tracking-wider">
                Paramount Lineage
              </span>
              <span className="font-heading text-[18px] font-bold text-surface">
                Agaba-Idu Dynasty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pillars of Idoma Heritage */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          {/* Section Title Frame */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl pb-space-sm border-b border-royal-gold/40">
            <div>
              <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[20px]">
                  account_balance
                </span>
                <span className="font-body text-[12px] uppercase tracking-widest font-semibold">
                  Institutional Foundation
                </span>
              </div>
              <h2 className="font-heading text-[28px] md:text-[36px] font-semibold text-text-primary tracking-tight">
                Pillars of Idoma Heritage
              </h2>
            </div>
            <p className="font-body text-[14px] md:text-[16px] text-text-muted max-w-md mt-space-sm md:mt-0">
              The structural pillars upholding our sovereign memory, sacred
              communal morality, and ancient dynastic law.
            </p>
          </div>

          {/* Card Grid of Topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Card 1: Origins & Migration */}
            <article className="group relative bg-surface-container-lowest p-space-lg rounded-lg shadow-sm border border-outline/15 hover:border-tertiary-container transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      explore
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted px-space-sm py-0.5 bg-surface-container rounded">
                    Pillar I
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-space-xs group-hover:text-primary transition-colors">
                  Origins &amp; Migration
                </h3>
                <p className="font-body text-[14px] md:text-[16px] text-text-muted leading-relaxed mb-space-md">
                  The migration from the ancient Kwararafa Kingdom (Apa cradle),
                  settlement along the fertile Benue valley basin, and the
                  enduring unity preserved across centuries by the patriarchal
                  descendants of Idu.
                </p>
              </div>
              {/* Was a "Read Historical Treatise →" pseudo-link: primary-red,
                  arrow, hover-slide, but no destination. The card body *is* the
                  treatise, so the affordance only misled. Keyword line instead. */}
              <div className="pt-space-md border-t border-surface-container-highest flex items-center gap-space-xs font-body text-[11px] uppercase tracking-widest text-text-muted">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  label
                </span>
                <span>
                  Kwararafa · Apa
                </span>
              </div>
            </article>

            {/* Card 2: Language & Dialects */}
            <article className="group relative bg-surface-container-lowest p-space-lg rounded-lg shadow-sm border border-outline/15 hover:border-tertiary-container transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      history_edu
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted px-space-sm py-0.5 bg-surface-container rounded">
                    Pillar II
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-space-xs group-hover:text-primary transition-colors">
                  Language &amp; Dialects
                </h3>
                <p className="font-body text-[14px] md:text-[16px] text-text-muted leading-relaxed mb-space-md">
                  Central Idoma (Otukpo), Western dialects (Okpokwu, Ogbadibo),
                  Southern (Ado, Agila), and regional idioms; the linguistic
                  purity preserved through sacred oral poetry, court genealogies,
                  and paramount proclamations.
                </p>
              </div>
              {/* Was a "Read Historical Treatise →" pseudo-link: primary-red,
                  arrow, hover-slide, but no destination. The card body *is* the
                  treatise, so the affordance only misled. Keyword line instead. */}
              <div className="pt-space-md border-t border-surface-container-highest flex items-center gap-space-xs font-body text-[11px] uppercase tracking-widest text-text-muted">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  label
                </span>
                <span>
                  Oral Linguistics
                </span>
              </div>
            </article>

            {/* Card 3: Festivals & Customs */}
            <article className="group relative bg-surface-container-lowest p-space-lg rounded-lg shadow-sm border border-outline/15 hover:border-tertiary-container transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      theater_comedy
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted px-space-sm py-0.5 bg-surface-container rounded">
                    Pillar III
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-space-xs group-hover:text-primary transition-colors">
                  Festivals &amp; Customs
                </h3>
                <p className="font-body text-[14px] md:text-[16px] text-text-muted leading-relaxed mb-space-md">
                  The sacred Alekwu ancestral festival, Och&apos;Idoma coronation
                  rites, Eje-Aje new yam feasts, ancestral masquerade protocols,
                  and solemn warrior dances honoring communal truth, fidelity, and
                  justice.
                </p>
              </div>
              {/* Was a "Read Historical Treatise →" pseudo-link: primary-red,
                  arrow, hover-slide, but no destination. The card body *is* the
                  treatise, so the affordance only misled. Keyword line instead. */}
              <div className="pt-space-md border-t border-surface-container-highest flex items-center gap-space-xs font-body text-[11px] uppercase tracking-widest text-text-muted">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  label
                </span>
                <span>
                  Alekwu Afia Rites
                </span>
              </div>
            </article>

            {/* Card 4: The 22 Idoma Communities */}
            <article className="group relative bg-surface-container-lowest p-space-lg rounded-lg shadow-sm border border-outline/15 hover:border-tertiary-container transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      shield
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted px-space-sm py-0.5 bg-surface-container rounded">
                    Pillar IV
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-space-xs group-hover:text-primary transition-colors">
                  The 22 Idoma Communities
                </h3>
                <p className="font-body text-[14px] md:text-[16px] text-text-muted leading-relaxed mb-space-md">
                  The traditional geopolitical fabric comprising Otukpo, Adoka,
                  Ugboju, Ochekwu, Agatu, Edumoga, Okpoga, Orokam, Otukpa,
                  Owukpa, Agila, Ulayi, Ijigban, and sister autonomous
                  confederacies under one sovereign aegis.
                </p>
              </div>
              {/* Was a "Read Historical Treatise →" pseudo-link: primary-red,
                  arrow, hover-slide, but no destination. The card body *is* the
                  treatise, so the affordance only misled. Keyword line instead. */}
              <div className="pt-space-md border-t border-surface-container-highest flex items-center gap-space-xs font-body text-[11px] uppercase tracking-widest text-text-muted">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  label
                </span>
                <span>
                  Territorial Confederacy
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Milestone Banner: Idoma Division Centenary Plus 2026 */}
      <section className="w-full bg-surface-container-low py-space-xl border-y border-royal-gold/30">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md border border-royal-gold/50 grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden bg-inverse-surface">
              <Image
                alt="Vibrant Alekwu festival and centenary celebration in Idoma land featuring royal dancers and drummers"
                className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
                src={cdn(
                  "/ph4.jpg"
                )}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                quality={88}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute bottom-4 left-4 right-4 text-surface lg:hidden">
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-tertiary-fixed-dim block">
                  Communal Jubilee
                </span>
                <span className="font-heading text-[18px] font-bold">
                  Centenary Alekwu Assembly
                </span>
              </div>
            </div>

            {/* Narrative & Countdown Column */}
            <div className="lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
              <div>
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-space-md py-1 rounded bg-tertiary-container/20 text-on-tertiary-container font-body text-[12px] uppercase tracking-widest font-bold mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    celebration
                  </span>
                  1926 – 2026 · Centennial Heritage
                </div>
                {/* Title */}
                <h2 className="font-heading text-[22px] md:text-[28px] font-semibold text-text-primary tracking-tight leading-snug mb-space-sm">
                  Idoma Division Centenary Plus 2026: Honoring a Century of
                  Shared Destiny
                </h2>
                {/* Excerpt Narrative */}
                <p className="font-body text-[14px] md:text-[16px] text-text-muted leading-relaxed mb-space-lg">
                  Established in 1926 under the Northern Nigeria Gazette, the
                  administrative consolidation of Idoma speaking polities
                  transformed ancient kinships into a formidable modern
                  commonwealth. The upcoming Centenary celebration honors ten
                  decades of royal continuity, scholarly triumphs, and cultural
                  resilience.
                </p>

                {/* Centennial Countdown Box */}
                <div className="bg-rich-black rounded-lg p-space-md mb-space-lg text-surface">
                  <div className="flex items-center justify-between pb-space-xs border-b border-royal-gold/30 mb-space-md">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-tertiary-fixed-dim">
                      Grand Centennial Conclave Countdown
                    </span>
                    <span className="font-body text-[11px] font-semibold text-surface-container-highest">
                      December 2026 · Otukpo
                    </span>
                  </div>
                  {/* One sentence for assistive tech; the ticking digits below
                      are decorative, and an aria-live region firing every
                      second would be unusable. */}
                  <p className="sr-only">
                    {timeLeft
                      ? `${timeLeft.days} days remaining until the Grand Centennial Conclave at Otukpo, December 2026.`
                      : "Loading the countdown to the Grand Centennial Conclave."}
                  </p>
                  {/* Digital Countdown Blocks */}
                  <div className="grid grid-cols-4 gap-space-sm text-center" aria-hidden="true">
                    {(
                      [
                        ["Days", timeLeft?.days, false],
                        ["Hours", timeLeft?.hours, true],
                        ["Mins", timeLeft?.mins, true],
                        ["Secs", timeLeft?.secs, true],
                      ] as const
                    ).map(([label, value, pad]) => (
                      <div
                        key={label}
                        className="bg-text-primary rounded p-2 border border-royal-gold/25"
                      >
                        <span className="block font-heading text-[22px] md:text-[28px] font-bold text-tertiary-container leading-none tabular-nums">
                          {value === undefined
                            ? "––"
                            : pad
                              ? String(value).padStart(2, "0")
                              : String(value)}
                        </span>
                        <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-surface-container-highest">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions — were dead <button>s with no handler. Point them at
                  the real routes rather than promise a download that isn't
                  wired up yet. */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
                <Link
                  href="/news"
                  className="px-space-lg py-3 rounded-lg bg-primary text-on-primary font-body text-[12px] uppercase font-bold tracking-wider hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2 border border-tertiary-container/30"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    event
                  </span>
                  Centenary Programme &amp; Announcements
                </Link>
                <Link
                  href="/the-throne"
                  className="px-space-md py-3 rounded-lg bg-surface text-text-primary border border-royal-gold font-body text-[12px] uppercase font-semibold tracking-wider hover:bg-surface-container transition-colors text-center"
                >
                  Dynastic Registry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Cultural Archival Gallery Callout */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="bg-surface-container p-space-lg md:p-space-xl rounded-xl border border-royal-gold/40 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-sm">
            {/* Left Side Text */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-body text-[11px] font-semibold uppercase tracking-widest mb-space-xs">
                <span className="material-symbols-outlined text-[18px]">
                  photo_library
                </span>
                Palace Photographic &amp; Document Registry
              </div>
              <h3 className="font-heading text-[22px] md:text-[28px] font-semibold text-text-primary tracking-tight mb-space-xs">
                The Imperial Photographic &amp; Document Archive
              </h3>
              <p className="font-body text-[14px] md:text-[16px] text-text-muted">
                Explore over 500 catalogued glass plates, treaty documents, and
                ceremonial photographs in the Royal Palace Gallery.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 w-full sm:w-auto z-10">
              <Link
                href="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3 rounded-lg bg-rich-black text-tertiary-fixed-dim hover:text-surface font-body text-[12px] uppercase font-bold tracking-wider hover:bg-inverse-surface transition-colors shadow"
              >
                <span>View Palace Photo Gallery (500+ Items)</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Archival watermark decoration */}
            <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-5 text-text-primary">
              <span className="material-symbols-outlined text-[180px]">
                history_edu
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
