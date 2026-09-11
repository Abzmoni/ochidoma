import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cdn } from "@/lib/media";

export const metadata: Metadata = {
  title: "The Throne",
  description:
    "The Office of the Och'Idoma: the reigning paramount monarch, the succession of the sacred stool since 1947, and the four-tier structure of the Idoma Area Traditional Council.",
};

export default function TheThrone() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section: Regal Archival Presentation */}
      <section className="relative w-full bg-surface-container-low overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-xl lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
            {/* Monarch Photographic Stool Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-surface-container-lowest p-space-sm shadow-xl rounded-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#2a1d16]">
                  <Image
                    alt="His Royal Majesty Agaba'Idu John Elaigwu Odogbo, Och'Idoma V seated in full traditional regalia upon the ancestral carved wooden stool"
                    className="object-cover object-center"
                    src={cdn(
                      "https://lh3.googleusercontent.com/aida/AEtjO1UGeLMZtRIEckgkpqtCE9yAQq_i7cq7EB7IZHH63uoQB5GIkBEvv36XLQCcXqj9JkCa6Xzb6tZJsRuZ3eKZubu-U3M6R9roiWHboWanu4u-ld-ItfE8u_FNPPrt7whsuP8kYjEdAQJPtBRVsERBLcWTduN8PEc4jG7mm6A8c4RHfOe2VCxprZS2xLAY7ROeAyeiq6rJLr4RbDhFloPL1lKUy70p9QhWW-u72wTDSLjhObJBRF3CPeRXlKg"
                    )}
                    fill
                    sizes="(max-width: 480px) 90vw, 448px"
                    quality={88}
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface">
                    <div className="flex items-center gap-space-xs">
                      <span
                        className="material-symbols-outlined text-tertiary-fixed text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        workspace_premium
                      </span>
                      <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-surface">
                        Seat of Otukpo
                      </span>
                    </div>
                    <span className="px-space-sm py-0.5 bg-primary/80 backdrop-blur rounded text-surface font-body text-[11px] font-semibold uppercase tracking-wider">
                      Agaba&apos;Idu V
                    </span>
                  </div>
                </div>
                <div className="pt-space-sm pb-space-xs text-center">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                    Imperial Portraiture · Royal Chambers Otukpo
                  </p>
                </div>
              </div>
            </div>

            {/* Monarch Titles & Imperial Pull Quote */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-body text-[12px] font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                Imperial Stool of the Idoma Kingdom
              </div>

              <div className="space-y-space-xs">
                <h1 className="font-heading type-display font-bold text-text-primary">
                  His Royal Majesty, Agaba&apos;Idu — Och&apos;Idoma V
                </h1>
                <p className="font-heading text-[20px] sm:text-[22px] font-semibold italic text-primary">
                  Paramount Ruler &amp; Custodian of the Alekwu Sacred Stool of
                  the Idoma Nation
                </p>
              </div>

              {/* Imperial Proclamation Callout */}
              <div className="relative mt-space-sm p-space-lg bg-surface-container rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-[36px] text-tertiary opacity-40 leading-none mb-space-xs block select-none">
                  format_quote
                </span>
                <blockquote className="font-heading text-[18px] font-bold italic text-text-primary leading-relaxed">
                  “Our ancestors did not leave us a heritage of discord; the Alekwu
                  commands that justice, communal fraternity, and the sacred dignity
                  of every Idoma soul remain inviolate.”
                </blockquote>
                <p className="mt-space-md font-body text-[12px] font-semibold uppercase tracking-wider text-text-muted">
                  — Royal Address from the Otukpo Palace Chambers
                </p>
              </div>

              {/* Quick Metadata Pillars */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
                <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm text-center">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted block">
                    Reign Commenced
                  </span>
                  <span className="font-heading text-[18px] font-bold text-text-primary">
                    2021 – Present
                  </span>
                </div>
                <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm text-center">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted block">
                    Ancestral Seat
                  </span>
                  <span className="font-heading text-[18px] font-bold text-text-primary">
                    Otukpo Royal Stool
                  </span>
                </div>
                <div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm text-center">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted block">
                    Jurisdiction
                  </span>
                  <span className="font-heading text-[18px] font-bold text-text-primary">
                    9 LGAs · 22 Districts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Office of the Och'Idoma */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <span className="font-body text-[12px] uppercase tracking-widest text-primary font-bold">
                Institutional Sovereignty
              </span>
              <h2 className="font-heading type-headline font-semibold text-text-primary">
                The Office of the Och&apos;Idoma
              </h2>
              <p className="font-body text-[18px] text-text-muted">
                The revered seat of paramount traditional governance, codified at
                Otukpo to unify the historical clans, agrarian riverine plains, and
                highland settlements of the ancestral Idoma domain.
              </p>
            </div>
            <div className="flex flex-wrap gap-space-xs">
              <span className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-status-success text-on-secondary font-body text-[11px] font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>{" "}
                Paramount Authority
              </span>
              <span className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-surface-container-high text-text-primary font-body text-[11px] font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  shield
                </span>{" "}
                Alekwu Moral Custody
              </span>
              <span className="inline-flex items-center gap-1.5 px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-body text-[11px] font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">
                  domain
                </span>{" "}
                Otukpo Royal Seat
              </span>
            </div>
          </div>

          {/* Bento Grid: The Authority & Territorial Reach */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md mt-space-sm">
            <div className="md:col-span-7 bg-surface-container-low p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
              <div className="space-y-space-md">
                <div className="flex items-center gap-space-sm text-primary">
                  <span className="material-symbols-outlined text-[30px]">
                    account_balance
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                    Custody of the Sovereign Realm
                  </h3>
                </div>
                <p className="font-body text-[16px] text-text-muted leading-relaxed">
                  The Office represents both spiritual equilibrium and civic
                  primacy. Guided by <em className="text-text-primary">Alekwu</em>
                  —the ancestral ethical jurisprudence prohibiting injustice,
                  deception, and kinship fratricide—the Och&apos;Idoma serves as
                  the highest court of arbitration, cultural diplomacy, and
                  territorial guardianship.
                </p>
                <p className="font-body text-[16px] text-text-muted leading-relaxed">
                  Encompassing twenty-two historic districts across the Benue
                  basin, the Stool champions peaceful coexistence, sustainable
                  communal agrarian prosperity, and the preservation of our
                  distinct red-and-black regal vestments.
                </p>
              </div>

              <div className="pt-space-lg flex items-center justify-between">
                <div>
                  <span className="font-heading text-[48px] font-bold text-primary leading-none block">
                    9
                  </span>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Constituent LGAs Unified
                  </span>
                </div>
                <div>
                  <span className="font-heading text-[48px] font-bold text-tertiary leading-none block">
                    22
                  </span>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Autonomous Districts
                  </span>
                </div>
                <div>
                  <span className="font-heading text-[48px] font-bold text-text-primary leading-none block">
                    78+
                  </span>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Years Modern Dynasty
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-container p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm text-primary mb-space-sm">
                  <span className="material-symbols-outlined text-[28px]">
                    map
                  </span>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary">
                    Territorial Enclaves (9 LGAs)
                  </h3>
                </div>
                <p className="font-body text-[14px] text-text-muted mb-space-md">
                  Each council territory maintains ancestral representation directly
                  to the Palace Secretariat at Otukpo:
                </p>
                <div className="grid grid-cols-3 gap-space-xs text-center font-body text-[12px] font-semibold uppercase tracking-wider">
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Ado
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Agatu
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Apa
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Obi
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Ogbadibo
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Ohimini
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Oju
                  </div>
                  <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm text-text-primary">
                    Okpokwu
                  </div>
                  <div className="p-space-sm bg-primary-container text-on-primary rounded shadow-sm font-bold">
                    Otukpo
                  </div>
                </div>
              </div>

              <div className="mt-space-lg p-space-sm bg-surface-container-high rounded-lg flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-tertiary text-[24px]">
                  gavel
                </span>
                <p className="font-body text-[14px] text-text-primary">
                  <strong className="font-semibold">Civic Seat:</strong> All
                  district disputes are resolved within the Hall of Traditional
                  Arbitration at the Otukpo Palace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Succession of the Sacred Stool (Timeline) */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-space-xs">
            <span className="font-body text-[12px] uppercase tracking-widest text-primary font-bold">
              Sacred Lineage
            </span>
            <h2 className="font-heading type-headline font-semibold text-text-primary">
              Succession of the Sacred Stool
            </h2>
            <p className="font-body text-[16px] text-text-muted">
              From the foundational unification of the modern Idoma polity in 1947
              to the contemporary era of institutional diplomacy and renewal.
            </p>
          </div>

          {/* Chronological Vertical Stack with Bespoke Layout */}
          <div className="relative flex flex-col gap-space-md max-w-4xl mx-auto">
            {/* Och'Idoma I */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container flex items-center justify-center font-heading text-[18px] font-bold text-text-primary">
                  I
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <h3 className="font-heading text-[18px] font-bold text-text-primary">
                      Agaba&apos;Idu Ogiri Oko
                    </h3>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-text-muted font-body text-[11px] font-semibold">
                      1947 – 1960
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-text-muted mt-1">
                    The pioneering paramount ruler of the modern Idoma nation.
                    Consolidated the 22 districts into a unified polity and
                    institutionalized the palace at Otukpo.
                  </p>
                </div>
              </div>
              <span className="self-start md:self-center font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted shrink-0">
                13 Years Reign
              </span>
            </div>

            {/* Och'Idoma II */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container flex items-center justify-center font-heading text-[18px] font-bold text-text-primary">
                  II
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <h3 className="font-heading text-[18px] font-bold text-text-primary">
                      Agaba&apos;Idu Ajene Okpabi
                    </h3>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-text-muted font-body text-[11px] font-semibold">
                      1960 – 1995
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-text-muted mt-1">
                    Reigned for 35 monumental years; led the kingdom through
                    national independence, post-war reconstruction, regional civic
                    integration, and widespread educational expansion.
                  </p>
                </div>
              </div>
              <span className="self-start md:self-center font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted shrink-0">
                35 Years Reign
              </span>
            </div>

            {/* Och'Idoma III */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container flex items-center justify-center font-heading text-[18px] font-bold text-text-primary">
                  III
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <h3 className="font-heading text-[18px] font-bold text-text-primary">
                      Agaba&apos;Idu Edwin Ogbu
                    </h3>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-text-muted font-body text-[11px] font-semibold">
                      1996 – 1997
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-text-muted mt-1">
                    Distinguished international diplomat, United Nations permanent
                    representative, and sovereign custodian during a historic
                    transitional era of royal administration.
                  </p>
                </div>
              </div>
              <span className="self-start md:self-center font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted shrink-0">
                Transitional
              </span>
            </div>

            {/* Och'Idoma IV */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container flex items-center justify-center font-heading text-[18px] font-bold text-text-primary">
                  IV
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <h3 className="font-heading text-[18px] font-bold text-text-primary">
                      Agaba&apos;Idu Elias Ikoyi Obekpa
                    </h3>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-text-muted font-body text-[11px] font-semibold">
                      1997 – 2021
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-text-muted mt-1">
                    24 years of steadfast constitutional consolidation, cultural
                    preservation, and inter-ethnic peace treaties across the
                    middle belt region of Nigeria.
                  </p>
                </div>
              </div>
              <span className="self-start md:self-center font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted shrink-0">
                24 Years Reign
              </span>
            </div>

            {/* Och'Idoma V (Current Monarch - Elevated Feature) */}
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-xl bg-gradient-to-r from-surface-container-lowest via-surface to-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
              <div className="flex items-start gap-space-md">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-md">
                  <span
                    className="material-symbols-outlined text-[32px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                </div>
                <div className="space-y-space-xs">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-body text-[11px] font-semibold uppercase tracking-widest flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>{" "}
                      Reigning Paramount Monarch
                    </span>
                    <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary">
                      2021 – Present
                    </span>
                  </div>
                  <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                    HRM Agaba&apos;Idu John Elaigwu Odogbo — Och&apos;Idoma V
                  </h3>
                  <p className="font-body text-[16px] text-text-muted">
                    Ascended the ancient throne with a mandate for socio-economic
                    revitalisation, diaspora mobilization, educational endowment,
                    and transparent council governance under sacred Alekwu
                    jurisprudence.
                  </p>
                </div>
              </div>
              <Link
                href="/news"
                className="self-start md:self-center inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-body text-[12px] uppercase tracking-wider font-semibold shadow hover:bg-primary-container transition-colors shrink-0"
              >
                Royal Communiqués{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Traditional Council Governance Structure */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-3xl mb-space-xl space-y-space-xs">
            <span className="font-body text-[12px] uppercase tracking-widest text-primary font-bold">
              Traditional Hierarchy
            </span>
            <h2 className="font-heading type-headline font-semibold text-text-primary">
              The Idoma Area Traditional Council
            </h2>
            <p className="font-body text-[18px] text-text-muted">
              A four-tier decentralized constitutional order safeguarding sovereign
              customary law, land arbitration, and communal harmony.
            </p>
          </div>

          {/* Governance Structure Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Apex Tier */}
            <div className="bg-surface-container-high p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center mb-space-md shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    military_tech
                  </span>
                </div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary block mb-space-xs">
                  The Sovereign Apex
                </span>
                <h3 className="font-heading text-[18px] font-bold text-text-primary mb-space-sm">
                  The Och&apos;Idoma
                </h3>
                <p className="font-body text-[14px] text-text-muted">
                  Chairman of the Traditional Council. Paramount final authority
                  over royal titles, moral customary jurisprudence, and the supreme
                  seat of Otukpo.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded">
                <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
                  Agaba&apos;Idu Office
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  Statewide Jurisdiction
                </span>
              </div>
            </div>

            {/* Tier 1 */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-highest text-text-primary flex items-center justify-center mb-space-md shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    groups_2
                  </span>
                </div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted block mb-space-xs">
                  Tier 1 · Divisions
                </span>
                <h3 className="font-heading text-[18px] font-bold text-text-primary mb-space-sm">
                  Oche&apos;K&apos;Idoma
                </h3>
                <p className="font-body text-[14px] text-text-muted">
                  First-Class Chiefs presiding over four macro-divisional regions:
                  Otukpo/Ohimini, Apa/Agatu, Ogbadibo/Okpokwu/Ado, and Oju/Obi.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded">
                <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
                  4 Zonal Enclaves
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  Divisional Arbitration
                </span>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-highest text-text-primary flex items-center justify-center mb-space-md shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    account_balance
                  </span>
                </div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted block mb-space-xs">
                  Tier 2 · Local Govts
                </span>
                <h3 className="font-heading text-[18px] font-bold text-text-primary mb-space-sm">
                  Oche&apos;Ola &amp; Districts
                </h3>
                <p className="font-body text-[14px] text-text-muted">
                  Second-Class Chiefs and District Heads administering ancestral
                  domains and working directly with civic authorities on law and
                  security.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded">
                <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
                  22 Districts
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  Civic Liaison
                </span>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-highest text-text-primary flex items-center justify-center mb-space-md shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    diversity_3
                  </span>
                </div>
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted block mb-space-xs">
                  Tier 3 · Kindreds
                </span>
                <h3 className="font-heading text-[18px] font-bold text-text-primary mb-space-sm">
                  Och&apos;Acho &amp; Elders
                </h3>
                <p className="font-body text-[14px] text-text-muted">
                  Third-Class Chiefs and Clan Custodians of kindred shrines,
                  responsible for village peace accords, youth guidance, and
                  grassroots heritage.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded">
                <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
                  Grassroots Assemblies
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  Kindred &amp; Clan Level
                </span>
              </div>
            </div>
          </div>

          {/* Palace Protocol Note */}
          <div className="mt-space-lg p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[28px]">
                verified_user
              </span>
              <div>
                <h4 className="font-heading text-[18px] font-bold text-text-primary">
                  Palace Audience &amp; Traditional Inquiries
                </h4>
                <p className="font-body text-[14px] text-text-muted">
                  Petitions and official protocol requests must be registered
                  through the Palace Secretariat at Otukpo.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-text-primary font-body text-[12px] font-semibold uppercase tracking-wider hover:bg-surface-container-highest transition-colors shrink-0"
            >
              Palace Protocol Guide{" "}
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Callout: Sovereign Archive CTA */}
      <section className="w-full bg-primary-container text-on-primary py-space-xl shadow-inner">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin text-center flex flex-col items-center gap-space-md">
          <span className="material-symbols-outlined text-tertiary-fixed text-[36px]">
            auto_stories
          </span>
          <div className="max-w-2xl space-y-space-xs">
            <h2 className="font-heading type-headline font-semibold text-on-primary">
              Deepen Your Understanding of Our Ancestral Covenant
            </h2>
            <p className="font-body text-[18px] text-surface-container-highest">
              Explore the epic migrations from Apa, the sacred significance of the
              red-and-black regalia, and centuries of oral history codified into our
              living heritage.
            </p>
          </div>
          <Link
            href="/history-and-culture"
            className="mt-space-sm inline-flex items-center gap-space-xs px-space-xl py-space-md rounded-lg bg-tertiary text-on-primary font-body text-[12px] font-bold uppercase tracking-widest shadow-md hover:bg-tertiary-container transition-colors"
          >
            Explore History &amp; Culture Archive{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
