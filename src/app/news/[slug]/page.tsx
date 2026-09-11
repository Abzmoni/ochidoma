"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cdn } from "@/lib/media";

export default function GazetteDetail() {
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyRef = async () => {
    try {
      await navigator.clipboard.writeText("ITC/2025/DEC-08");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context / permissions) — leave the label as is.
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // No clipboard access; nothing to announce.
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col w-full">
      {/* Archival Gazette Accent Ribbon */}
      <div className="w-full bg-primary-container text-surface py-space-xs px-margin-mobile md:px-margin">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs font-body text-[11px] font-semibold uppercase tracking-widest text-tertiary-fixed-dim">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            <span>Imperial Gazetted Communiqué · Sovereign Official Record</span>
          </div>
          <div className="flex items-center gap-space-md font-body text-[11px] font-semibold text-surface-variant">
            <span>Folio: ITC/2025/DEC-08</span>
            <span className="text-tertiary-container hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              Inner Chamber Archives · Otukpo
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumbs Bar */}
      <div className="w-full bg-surface-container-low py-space-sm px-margin-mobile md:px-margin">
        <div className="max-w-[1200px] mx-auto flex items-center flex-wrap gap-space-xs font-body text-[12px] font-semibold text-text-muted">
          <Link
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Home</span>
          </Link>
          <span className="text-secondary/60">/</span>
          <Link href="/news" className="hover:text-primary transition-colors">
            News &amp; Gazette
          </Link>
          <span className="text-secondary/60">/</span>
          <span className="text-primary font-semibold truncate max-w-[320px] md:max-w-[600px]">
            Royal Communiqué on Peaceful Coexistence, Ancestral Land
            Stewardship, and Youth Civic Integration
          </span>
        </div>
      </div>

      {/* Main Article Section */}
      <article className="w-full py-space-lg md:py-space-xl px-margin-mobile md:px-margin">
        <div className="max-w-[1200px] mx-auto">
          {/* Article Header */}
          <header className="flex flex-col gap-space-md mb-space-lg md:mb-space-xl">
            <div className="flex flex-wrap items-center gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-sm bg-tertiary-container text-on-tertiary-container font-body text-[12px] uppercase tracking-wider font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  gavel
                </span>
                ROYAL PROCLAMATION · HIGH COUNCIL
              </span>
              <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-sm bg-surface-container-high text-status-success font-body text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  verified_user
                </span>
                Verified Official Statement · Registry Ref: ITC/2025/DEC-08
              </span>
            </div>
            <h1 className="font-heading type-title font-semibold text-text-primary tracking-tight md:max-w-[95%]">
              Royal Communiqué on Peaceful Coexistence, Ancestral Land
              Stewardship, and Youth Civic Integration
            </h1>

            {/* Metadata Sub-bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm pb-space-sm bg-surface-container rounded-sm px-space-md">
              <div className="flex items-center gap-space-md flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      account_balance
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body text-[14px] text-text-primary font-bold">
                      Office of the Och&apos;Idoma
                    </span>
                    <span className="font-body text-[11px] font-semibold text-text-muted">
                      Inner Chambers · Otukpo Palace
                    </span>
                  </div>
                </div>
                <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
                <div className="flex items-center gap-1.5 font-body text-[12px] font-semibold text-text-muted">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    calendar_today
                  </span>
                  <span>October 14, 2025</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-outline-variant"></div>
                <div className="flex items-center gap-1.5 font-body text-[12px] font-semibold text-text-muted">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    hourglass_top
                  </span>
                  <span>8 min reading time · Authenticated Court Record</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex items-center gap-space-xs">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface hover:bg-surface-container-highest text-secondary font-body text-[11px] font-semibold transition-colors border border-surface-container-highest"
                  aria-label="Print official folio"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    print
                  </span>
                  <span className="hidden sm:inline">Print Folio</span>
                </button>
                <button
                  onClick={handleCopyRef}
                  className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface hover:bg-surface-container-highest text-secondary font-body text-[11px] font-semibold transition-colors border border-surface-container-highest"
                  aria-label="Copy registry reference ITC/2025/DEC-08"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    content_copy
                  </span>
                  <span className="hidden sm:inline">
                    {copied ? "Ref Copied!" : "Copy Ref"}
                  </span>
                </button>
              </div>
            </div>
          </header>

          {/* Primary Archival Photography Container */}
          <figure className="w-full flex flex-col gap-space-xs mb-space-xl">
            <div className="relative w-full overflow-hidden rounded-md bg-surface-container-highest shadow-sm h-[300px] md:h-[560px]">
              <Image
                alt="Historical conclave of traditional elders and council chiefs of the Idoma Kingdom gathered in Otukpo Palace"
                className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
                src={cdn(
                  "https://lh3.googleusercontent.com/aida/AEtjO1WDVLT-BKgsgtGy9AMtR3yhb0MZQchBOffI-_hTSKQX09OS3kgue8Ls8rtlaQDV3EHEpqc8tXVmE3oKK9kghu9Qni4fJUZS-yqOgAL4bsEddgHeDF14eyMQejQ0X-8OQH5ANTsnc32tPMEoBi03N5YeW3Vgh-oaJJFEu0z1JqMrUAoBgSxFLY1emKmCuL4jnRpdzak9fF_xm9T7y_1DkVOPp3uN7EXJ99JITfxJUvGOe6Nv12ntIldacHI"
                )}
                fill
                sizes="(max-width: 1240px) 100vw, 1200px"
                quality={88}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <figcaption className="flex items-start gap-2 text-text-muted font-body text-[14px] px-space-xs pt-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                photo_camera
              </span>
              <span>
                <strong className="font-semibold text-text-primary">
                  Archive Photograph:
                </strong>{" "}
                144th Ordinary Sitting of the Idoma Area Traditional Council under
                the presidency of His Royal Majesty Agaba&apos;Idu Och&apos;Idoma
                V, convened at the Palace Inner Chambers, Otukpo, Benue State.
              </span>
            </figcaption>
          </figure>

          {/* Main Editorial Layout: 12-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Sidebar: Proclamation Summary & Downloads (Desktop Col 4) */}
            <aside className="lg:col-span-4 flex flex-col gap-space-lg order-2 lg:order-1">
              {/* Bound gazette folio request. There is no PDF to serve, so the
                  panel asks for the copy the Secretariat actually issues. */}
              <div className="p-space-lg rounded-md bg-surface-container-low shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-sm bg-primary-container text-surface flex items-center justify-center shrink-0">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[24px]"
                    >
                      description
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-heading text-[18px] font-bold text-primary leading-tight">
                      Official Gazette Folio
                    </h3>
                    <span className="font-body text-[11px] font-semibold text-text-muted">
                      Vol. LXXIV Issue 14 · Ref. ITC-2025-DEC-08
                    </span>
                  </div>
                </div>
                <p className="font-body text-[14px] text-text-muted">
                  The authoritative, wax-sealed sovereign folio — complete with
                  traditional council signatories and land boundary annexures —
                  is issued by the Palace Secretariat on request.
                </p>
                <Link
                  className="inline-flex items-center justify-center gap-2 px-space-md py-space-sm rounded-sm bg-primary hover:bg-primary-container text-on-primary font-body text-[12px] uppercase tracking-wider font-bold transition-colors"
                  href="/contact"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[18px]"
                  >
                    mail
                  </span>
                  <span>Request the Sealed Folio</span>
                </Link>
                <div className="pt-space-xs flex items-center justify-between text-text-muted font-body text-[11px] font-semibold">
                  <span className="flex items-center gap-1">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px] text-status-success"
                    >
                      approval
                    </span>
                    Wax seal &amp; council signatories
                  </span>
                  <span>English &amp; Central Idoma</span>
                </div>
              </div>

              {/* Sovereign Proclamation Seal Card */}
              <div className="p-space-lg rounded-md bg-rich-black text-surface shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs bg-surface-container-highest/10 px-2 py-1 rounded">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-tertiary-fixed-dim">
                    Council Ratification
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-status-success inline-block"></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[22px] font-semibold text-tertiary-fixed-dim">
                    Agaba&apos;Idu
                  </span>
                  <p className="font-body text-[14px] text-surface-container-highest">
                    Decreed by royal assent from the Imperial Throne of the
                    Och&apos;Idoma, presiding over the nine ancestral intermediate
                    chiefdoms of Idomaland.
                  </p>
                </div>
                {/* Authentic Seal Badge */}
                <div className="p-space-sm rounded bg-[#211D1A] flex items-center gap-space-sm border border-royal-gold/10">
                  <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center text-tertiary-fixed-dim shrink-0">
                    <span className="material-symbols-outlined text-[28px]">
                      shield
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body text-[12px] font-bold text-surface">
                      Idoma Traditional Council
                    </span>
                    <span className="font-body text-[11px] font-semibold text-tertiary-fixed-dim">
                      General Secretariat · Otukpo
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-space-xs font-body text-[11px] font-semibold text-surface-container-highest pt-space-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                      check_circle
                    </span>
                    <span>Unanimous Conclave Resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                      check_circle
                    </span>
                    <span>Alekwu Customary Inquest Satisfied</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                      check_circle
                    </span>
                    <span>Benue State Government Transmitted</span>
                  </li>
                </ul>
              </div>

              {/* Secondary Festival Context Feature */}
              <div className="p-space-md rounded-md bg-surface-container flex flex-col gap-space-sm">
                <span className="font-body text-[11px] uppercase font-bold text-tertiary tracking-wider">
                  Associated Festivity
                </span>
                <div className="relative overflow-hidden rounded bg-surface-container-highest h-40">
                  <Image
                    alt="Idoma cultural dancers and elders celebrating traditional heritage during palace convocation"
                    className="object-cover object-center"
                    src={cdn(
                      "https://lh3.googleusercontent.com/aida/AEtjO1XJWX2BzJjvcXeBehZL4wTQ0KIXmN1NC3qyziaE1rMSXS0BcxJz1W3hPGBOv6E9nMiNgoNkqmlyzIDlJf-MWYPvc1CkLIoJjQROin2_CCf0byJDeP-NwxUX_G_eZqY_bEA53p5pe8mmWFi7eMslAjsRomGOcJ_k8yopuxhnGTZheLu6nB-lV92FZdFjHuj2zfQSZVN2iowHw90wL5cB0BxEIpW1wuuVpmewUsCAAp4DRfvm9e7U9Fi1yw"
                    )}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    quality={88}
                  />
                </div>
                <p className="font-body text-[14px] text-text-muted">
                  Cultural troupes assemble outside the Otukpo Palace gates to
                  herald the issuance of the peaceful coexistence proclamation.
                </p>
              </div>
            </aside>

            {/* Right / Main Column: Editorial Text & Declarations (Desktop Col 8) */}
            <main className="lg:col-span-8 flex flex-col gap-space-lg order-1 lg:order-2">
              {/* Drop Cap Lead Paragraph */}
              <div className="prose max-w-none">
                <p className="font-body text-[18px] text-text-primary leading-relaxed">
                  <span className="float-left font-heading text-[64px] leading-[0.8] font-bold text-primary mr-3 mt-1">
                    U
                  </span>
                  NDER the sacred auspices of the Alekwu moral covenant and by the
                  sovereign authority invested in the Stool of the Paramount Ruler
                  of the Idoma Nation, the Idoma Area Traditional Council (IATC)
                  in joint extraordinary session with the Och&apos;Idoma-in-Council
                  hereby issues this historic declaration to all sons, daughters,
                  settlers, and civic institutions across the nine local
                  government divisions of our ancestral homeland.
                </p>
                <p className="font-body text-[18px] text-text-primary leading-relaxed mt-space-md">
                  Having received comprehensive field briefings from traditional
                  ward heads, clan chiefs (Ad&apos;Idoma), agricultural
                  cooperatives, and security formations regarding seasonal boundary
                  frictions and civic youth alienation, His Royal Majesty
                  Agaba&apos;Idu Och&apos;Idoma V has sanctioned immediate and
                  binding customary directives aimed at cementing generational
                  concord and safeguarding ancestral commons.
                </p>
              </div>

              {/* Imperial Pull Quote Block */}
              <div className="my-space-md p-space-lg rounded-sm bg-surface-container-low shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal-gold"></div>
                <blockquote className="pl-space-sm">
                  <p className="font-heading text-[22px] font-semibold text-primary italic leading-snug">
                    “Our ancestors did not leave us a heritage of discord; the
                    Alekwu commands that justice, communal fraternity, and the
                    sacred dignity of every Idoma soul remain inviolate. Progress
                    cannot take root where land is surrendered to greed and the
                    voice of the young is relegated to silence.”
                  </p>
                  <footer className="mt-space-md flex items-center gap-space-sm text-text-muted font-body text-[12px] font-semibold">
                    <span className="w-8 h-px bg-tertiary-container"></span>
                    <cite className="not-italic font-bold text-text-primary">
                      HRM Agaba&apos;Idu Och&apos;Idoma V · Paramount Ruler of the
                      Idoma Nation
                    </cite>
                  </footer>
                </blockquote>
              </div>

              {/* Section 1 */}
              <section className="flex flex-col gap-space-sm mt-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-bold flex items-center justify-center font-body text-[12px]">
                    1
                  </span>
                  <h2 className="font-heading text-[28px] font-semibold text-text-primary">
                    Affirmation of Ancestral Agricultural Corridors
                  </h2>
                </div>
                <p className="font-body text-[16px] text-text-primary leading-relaxed">
                  The Council formally reinforces that customary agro-ecological
                  reserves, natural irrigation tributaries connecting to the Benue
                  River basin, and age-old inter-clan harvest passages remain
                  sovereign communal patrimony. Any unauthorized commodification
                  or encroachment on surveyed grazing buffers and family farming
                  tracks is void under customary jurisprudence.
                </p>
                <div className="p-space-md rounded bg-surface-container flex items-start gap-space-sm my-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    policy
                  </span>
                  <p className="font-body text-[14px] text-text-muted">
                    <strong>Executive Provision:</strong> A joint survey oversight
                    committee comprising palace surveyors, the Ministry of Lands
                    and Survey, and local Ad&apos;Ogbadibo, Ad&apos;Okpokwu, and
                    Ad&apos;Otukpo delegates will re-demarcate and digitalize
                    landmark coordinates by Q1 2026.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="flex flex-col gap-space-sm mt-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-bold flex items-center justify-center font-body text-[12px]">
                    2
                  </span>
                  <h2 className="font-heading text-[28px] font-semibold text-text-primary">
                    Ratification of Customary Arbitration Protocols
                  </h2>
                </div>
                <p className="font-body text-[16px] text-text-primary leading-relaxed">
                  In alignment with the peaceful tenets of ancestral
                  reconciliation, all civil disagreements stemming from tenancy,
                  inheritance boundary marks, or marketplace concessions must first
                  exhaust customary adjudication through the respective
                  Oche&apos;kwenu (Ward Elders&apos; Chambers) prior to external
                  litigation.
                </p>
                <p className="font-body text-[16px] text-text-primary leading-relaxed">
                  The Palace reaffirmation reminds all subjects that the ancient
                  Alekwu oath penalizes deceit, false land claims, and coercive
                  disinheritance of widows or orphans. Clan magistrates who violate
                  procedural fairness will face immediate decertification from the
                  Traditional Council.
                </p>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-space-sm mt-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-bold flex items-center justify-center font-body text-[12px]">
                    3
                  </span>
                  <h2 className="font-heading text-[28px] font-semibold text-text-primary">
                    Establishment of the Youth Civic Stewardship Guild
                  </h2>
                </div>
                <p className="font-body text-[16px] text-text-primary leading-relaxed">
                  To bridge contemporary digital commerce with ancient communal
                  obligation, the Stool announces the chartering of the{" "}
                  <em>Idoma Youth Civic Stewardship Guild (IYCSG)</em>. This
                  organ will integrate educated youth leaders, diaspora returnees,
                  and vocational apprentices directly into palace consultative
                  committees.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md my-space-xs">
                  <div className="p-space-md rounded bg-surface-container-low flex flex-col gap-1 border border-outline/10">
                    <div className="flex items-center gap-2 text-primary font-body text-[14px] font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        school
                      </span>
                      <span>Civic Apprenticeship</span>
                    </div>
                    <p className="font-body text-[14px] text-text-muted">
                      Formal pairing of 300 university graduates annually with
                      customary district administrations for leadership and land
                      registry clerkships.
                    </p>
                  </div>
                  <div className="p-space-md rounded bg-surface-container-low flex flex-col gap-1 border border-outline/10">
                    <div className="flex items-center gap-2 text-primary font-body text-[14px] font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        hub
                      </span>
                      <span>Digital Agro-Network</span>
                    </div>
                    <p className="font-body text-[14px] text-text-muted">
                      Direct connection of youthful farming collectives with
                      palace-endorsed cold-chain infrastructure and national
                      wholesale markets.
                    </p>
                  </div>
                </div>
              </section>

              {/* Official Royal Decree Signature & Seal Block */}
              <div className="mt-space-lg p-space-lg rounded-md bg-surface-container-low shadow-sm flex flex-col gap-space-lg border border-outline/10">
                <div className="flex items-center justify-between flex-wrap gap-space-sm pb-space-sm bg-surface-container-highest/20 px-2 py-1 rounded">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    Imperial Ratification &amp; Signatures
                  </span>
                  <span className="font-body text-[11px] font-semibold text-primary font-bold">
                    Recorded in the Grand Palace Register
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
                  {/* Signatory 1 */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="h-14 flex items-end">
                      <span className="font-heading italic text-[22px] text-text-primary font-bold tracking-tight">
                        Och&apos;Idoma V
                      </span>
                    </div>
                    <div className="w-full h-px bg-outline-variant"></div>
                    <div className="flex flex-col pt-1">
                      <span className="font-body text-[14px] font-bold text-text-primary">
                        HRM Agaba&apos;Idu Och&apos;Idoma V
                      </span>
                      <span className="font-body text-[11px] font-semibold text-text-muted">
                        Paramount Ruler of the Idoma Nation · Grand Custodian
                      </span>
                      <span className="font-body text-[11px] font-semibold text-tertiary mt-0.5">
                        Imperial Hand &amp; Royal Crest Affixed
                      </span>
                    </div>
                  </div>
                  {/* Signatory 2 */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="h-14 flex items-end">
                      <span className="font-heading italic text-[22px] text-secondary font-medium">
                        Chief Dr. Edwin E. Ogbu
                      </span>
                    </div>
                    <div className="w-full h-px bg-outline-variant"></div>
                    <div className="flex flex-col pt-1">
                      <span className="font-body text-[14px] font-bold text-text-primary">
                        Chief Dr. Edwin E. Ogbu, mni
                      </span>
                      <span className="font-body text-[11px] font-semibold text-text-muted">
                        Secretary to the Idoma Area Traditional Council
                      </span>
                      <span className="font-body text-[11px] font-semibold text-text-muted mt-0.5">
                        Counter-signed at Otukpo Imperial Secretariat
                      </span>
                    </div>
                  </div>
                </div>
                {/* Authentic Sovereign Seal Stamp Illustration */}
                <div className="flex items-center justify-between pt-space-xs bg-surface-container rounded p-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[32px]">
                      military_tech
                    </span>
                    <div className="flex flex-col">
                      <span className="font-body text-[12px] font-bold text-text-primary">
                        IMPERIAL COAT OF ARMS &amp; COUNCIL EMBLEM
                      </span>
                      <span className="font-body text-[11px] font-semibold text-text-muted">
                        Official Sovereign Archival Serial: IATC-PROCL-2025-091
                      </span>
                    </div>
                  </div>
                  <span className="px-space-sm py-1 bg-status-success/15 text-status-success font-body text-[11px] font-bold rounded">
                    AUTHENTICATED
                  </span>
                </div>
              </div>

              {/* Social Syndication & Sharing Row */}
              <div className="mt-space-md pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-md border border-outline/10">
                <div className="flex flex-col">
                  <span className="font-body text-[12px] font-bold text-text-primary">
                    Official Syndication
                  </span>
                  <span className="font-body text-[14px] text-text-muted">
                    Circulate through verified civic &amp; media dispatches
                  </span>
                </div>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <a
                    className="px-space-md py-1.5 rounded bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-body text-[11px] font-bold flex items-center gap-1 transition-colors"
                    href="https://api.whatsapp.com/send?text=Royal%20Communique%20from%20Palace%20of%20the%20Och%27Idoma"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      chat
                    </span>
                    WhatsApp
                  </a>
                  <a
                    className="px-space-md py-1.5 rounded bg-surface-container-highest hover:bg-surface-container-high text-text-primary font-body text-[11px] font-bold flex items-center gap-1 transition-colors"
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      share
                    </span>
                    X (Twitter)
                  </a>
                  <a
                    className="px-space-md py-1.5 rounded bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-body text-[11px] font-bold flex items-center gap-1 transition-colors"
                    href="https://www.facebook.com/sharer/sharer.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      thumb_up
                    </span>
                    Facebook
                  </a>
                  <button
                    className="px-space-md py-1.5 rounded bg-surface-container-highest hover:bg-surface-container-high text-text-primary font-body text-[11px] font-bold flex items-center gap-1 transition-colors"
                    onClick={handleCopyLink}
                    aria-label="Copy a link to this communiqué"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {linkCopied ? "check" : "link"}
                    </span>
                    {linkCopied ? "Link Copied" : "Copy Link"}
                  </button>
                </div>
              </div>
              <p className="font-body text-[11px] font-semibold text-text-muted text-center sm:text-left flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  rss_feed
                </span>
                RSS / Follow official palace statements via verified sovereign
                dispatches and the Otukpo Palace Gazette Registry.
              </p>
            </main>
          </div>

          {/* Related News & Decrees Row */}
          <section className="mt-space-xl pt-space-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-sm mb-space-lg">
              <div className="flex flex-col gap-1">
                <span className="font-body text-[12px] uppercase tracking-wider text-tertiary font-bold">
                  Archival Gazette Records
                </span>
                <h2 className="font-heading text-[28px] font-semibold text-text-primary">
                  Related News, Decrees &amp; Gazetted Notices
                </h2>
              </div>
              <Link
                href="/news"
                className="font-body text-[12px] uppercase tracking-wider text-primary font-bold hover:underline flex items-center gap-1"
              >
                <span>View All Palace Dispatches</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {/* Card 1 */}
              <div className="flex flex-col justify-between p-space-lg rounded-md bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm hover:shadow group border border-outline/10">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-sm py-0.5 rounded bg-surface-container text-tertiary font-body text-[11px] font-bold uppercase">
                      Appeals &amp; Endowments
                    </span>
                    <span className="font-body text-[11px] font-semibold text-text-muted">
                      Sept 28, 2025
                    </span>
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                    Kingdom Educational Endowment Awards Tertiary Grants to 150
                    Scholars
                  </h3>
                  <p className="font-body text-[14px] text-text-muted line-clamp-3">
                    Under the direct patronage of the Royal Stool, young
                    undergraduates from underserved rural wards across Benue South
                    receive full tuition endowments for scientific and
                    technological faculties.
                  </p>
                </div>
                <div className="pt-space-md mt-space-sm">
                  <Link
                    href="/news/educational-endowment-fund"
                    className="inline-flex items-center gap-1.5 font-body text-[12px] font-semibold text-primary font-bold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Record</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col justify-between p-space-lg rounded-md bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm hover:shadow group border border-outline/10">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-sm py-0.5 rounded bg-surface-container text-tertiary font-body text-[11px] font-bold uppercase">
                      Traditional Events
                    </span>
                    <span className="font-body text-[11px] font-semibold text-text-muted">
                      Sept 10, 2025
                    </span>
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                    Preparation Protocols for the Otukpo Royal Arts and Heritage
                    Exposition 2026
                  </h3>
                  <p className="font-body text-[14px] text-text-muted line-clamp-3">
                    Cultural custodians and master artisans summon delegations for
                    the grand biennial pan-Idoma showcase celebrating black and red
                    Apa textile weaving, brass metallurgy, and traditional
                    masquerade cosmology.
                  </p>
                </div>
                <div className="pt-space-md mt-space-sm">
                  <Link
                    href="/news/otukpo-royal-arts-heritage-exposition"
                    className="inline-flex items-center gap-1.5 font-body text-[12px] font-semibold text-primary font-bold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Record</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col justify-between p-space-lg rounded-md bg-surface-container-low hover:bg-surface-container transition-all duration-200 shadow-sm hover:shadow group border border-outline/10">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="px-space-sm py-0.5 rounded bg-surface-container text-tertiary font-body text-[11px] font-bold uppercase">
                      Royal Statements
                    </span>
                    <span className="font-body text-[11px] font-semibold text-text-muted">
                      Aug 22, 2025
                    </span>
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                    Palace Directive on Environmental Protection Along River Benue
                    Flood Basins
                  </h3>
                  <p className="font-body text-[14px] text-text-muted line-clamp-3">
                    HM Och&apos;Idoma issues sovereign guidelines forbidding
                    untethered riverbed sand mining and sand dredging around
                    vulnerable agricultural riverbanks to prevent soil erosion and
                    flash inundations.
                  </p>
                </div>
                <div className="pt-space-md mt-space-sm">
                  <Link
                    href="/news/environmental-protection-river-benue"
                    className="inline-flex items-center gap-1.5 font-body text-[12px] font-semibold text-primary font-bold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Record</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
