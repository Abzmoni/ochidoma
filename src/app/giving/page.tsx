"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cdn } from "@/lib/media";

/** Quick-give ladders per currency. A ₦50,000 gift and a $50,000 gift are not
 *  the same ask, so the ladder and the sensible default move with the currency
 *  rather than staying pinned to the naira figures. */
type Currency = {
  code: string;
  symbol: string;
  steps: number[];
  min: number;
  step: number;
};

const CURRENCIES: Currency[] = [
  {
    code: "NGN",
    symbol: "₦",
    steps: [10000, 25000, 50000, 100000, 250000],
    min: 1000,
    step: 500,
  },
  { code: "USD", symbol: "$", steps: [25, 50, 100, 250, 500], min: 5, step: 5 },
  { code: "GBP", symbol: "£", steps: [25, 50, 100, 250, 500], min: 5, step: 5 },
  { code: "EUR", symbol: "€", steps: [25, 50, 100, 250, 500], min: 5, step: 5 },
];

const PROJECTS = [
  "All General Projects",
  "Flood Relief",
  "Healthcare Support",
  "Centenary Fund",
];

const PAYMENT_METHODS = [
  {
    id: "card",
    title: "Debit / Credit Card",
    icon: "credit_card",
    desc: "Mastercard, Visa, Verve (Paystack)",
  },
  {
    id: "nip",
    title: "Direct Bank Transfer",
    icon: "account_balance",
    desc: "Instant Dynamic NIP Virtual Account",
  },
  {
    id: "ussd",
    title: "USSD Quick Code",
    icon: "dialpad",
    desc: "*737#, *894#, *919#, *966#",
  },
  {
    id: "wire",
    title: "International Wire",
    icon: "language",
    desc: "SWIFT / IBAN Automated Remittance",
  },
];

const DONOR_TITLES = [
  "Chief",
  "Prince / Princess",
  "Dr.",
  "Prof.",
  "Mr.",
  "Mrs.",
  "Engr.",
  "Bar.",
  "Anonymous",
];

export default function Giving() {
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0]);
  const [amount, setAmount] = useState(50000);
  const [selectedProject, setSelectedProject] = useState("All General Projects");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [pledge, setPledge] = useState<{
    project: string;
    amount: string;
    method: string;
  } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const quickAmounts = currency.steps;

  const changeCurrency = (next: Currency) => {
    // Keep the equivalent rung on the new ladder rather than carrying a naira
    // figure into dollars.
    const rung = currency.steps.indexOf(amount);
    setAmount(rung === -1 ? next.steps[2] : next.steps[rung]);
    setCurrency(next);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledge({
      project: selectedProject,
      amount: `${currency.symbol}${amount.toLocaleString()}`,
      method:
        PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.title ??
        paymentMethod,
    });
  };

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 2500);
    } catch {
      setCopied(`${key}:failed`);
      window.setTimeout(() => setCopied(null), 2500);
    }
  };

  const setProjectFromCard = (name: string, defaultAmt: number) => {
    setSelectedProject(name);
    setAmount(defaultAmt);
    // Scroll to donation form
    document
      .getElementById("donation-desk")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Archival Proclamation Scrim & Header */}
      <section className="relative w-full bg-surface-container-low py-space-xl overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.035]">
          <svg
            className="w-[520px] h-[520px] text-primary"
            fill="currentColor"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" fill="none" r="92" stroke="currentColor" strokeDasharray="6,4" strokeWidth="4"></circle>
            <path d="M100 24 L108 52 L136 52 L114 68 L122 96 L100 80 L78 96 L86 68 L64 52 L92 52 Z"></path>
            <path d="M30 110 C60 145 140 145 170 110 C140 128 60 128 30 110 Z"></path>
            <rect height="38" width="12" x="94" y="118"></rect>
            <polygon points="50,172 150,172 136,156 64,156"></polygon>
          </svg>
        </div>
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin relative z-10 flex flex-col gap-space-lg">
          <div className="flex flex-wrap items-center gap-space-xs text-secondary">
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary-container">
              PALACE ENDOWMENT &amp; DEVELOPMENT TRUST
            </span>
            <span className="text-tertiary-container font-heading">•</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-text-muted">
              OTUKPO, BENUE SOUTH
            </span>
            <span className="text-tertiary-container font-heading">•</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-status-success flex items-center gap-1">
              <span
                className="material-symbols-outlined text-[14px]"
                aria-hidden="true"
              >
                verified
              </span>{" "}
              CHARTER NO. OCH-BDT-1976
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <h1 className="font-heading type-display text-text-primary font-bold">
                Support the Kingdom’s Development
              </h1>
              <div className="w-24 h-[2px] bg-tertiary-container"></div>
              <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
                The Palace of the Och&apos;Idoma oversees strategic, community-centered
                humanitarian initiatives across the 9 local government areas of Benue
                South. Your contributions protect ancestral livelihoods, support
                vulnerable communities during seasonal floods, and build
                intergenerational educational excellence.
              </p>
            </div>

            <div className="lg:col-span-5 bg-surface-container p-space-lg rounded-lg shadow-sm flex flex-col gap-space-md border border-outline/10">
              <div className="flex items-center gap-space-md">
                <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[32px]">
                    account_balance
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-[12px] uppercase font-semibold tracking-wider text-primary">
                    Sovereign Guarantee
                  </span>
                  <span className="font-heading text-[18px] font-bold text-text-primary">
                    Stool Covenant of Giving
                  </span>
                </div>
              </div>
              <p className="font-body text-[14px] text-text-muted leading-relaxed">
                “Every kobo entrusted to this Trust directly fortifies our
                communities against deprivation and environmental peril. The stool
                stands as guarantor of each gift.”
              </p>
              <div className="flex items-center justify-between pt-space-xs text-text-primary">
                <span className="font-body text-[11px] font-semibold tracking-wider uppercase text-text-muted">
                  Secretariat Directorate of Endowments
                </span>
                <span className="font-body text-[11px] font-semibold text-primary">
                  Otukpo Royal Registry
                </span>
              </div>
            </div>
          </div>

          {/* Trust & Verification Pillar Strip */}
          <div className="w-full bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-space-md border border-outline/10">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-status-success/15 flex items-center justify-center text-status-success">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary">
                  100% Institutionally Audited
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  Ernst &amp; Young &amp; Palace Council Joint Oversight
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[18px]">
                  menu_book
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary">
                  Quarterly Public Registry
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  Gazette publication open to all citizens
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  shield
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary">
                  Zero Overhead Deductions
                </span>
                <span className="font-body text-[14px] text-text-muted">
                  All operating costs absorbed by the Royal Stool
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects Section */}
      <section className="w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="flex flex-col gap-space-sm mb-space-xl">
          <div className="flex items-center gap-space-sm">
            <span className="w-3 h-3 rounded-full bg-primary-container"></span>
            <span className="font-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              Priority Strategic Interventions
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <h2 className="font-heading type-headline font-semibold text-text-primary">
              Active Royal Endowments (2025–2026)
            </h2>
            <span className="font-body text-[14px] text-text-muted">
              Audited balance updated 18 hours ago • Otukpo Treasury
            </span>
          </div>
        </div>

        {/* 3-Column Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Project 1 */}
          <div className="bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow border border-outline/10">
            <div className="relative h-48 w-full bg-secondary-fixed overflow-hidden">
              <Image
                alt="Benue River basin flood plains"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={cdn(
                  "/ph4.jpg",
                )}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                quality={88}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between">
                <span className="bg-primary px-space-sm py-[2px] rounded text-on-primary font-body text-[11px] font-semibold uppercase tracking-wider">
                  Critical Emergency
                </span>
                <span className="bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-[2px] rounded font-body text-[11px] font-semibold">
                  Agatu &amp; Apa LGA
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-md grow">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-heading text-[18px] font-bold text-text-primary">
                  Otukpo &amp; Benue River Flood Relief Fund
                </h3>
                <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  Rapid disaster response, emergency medical deployment, and
                  flood-resilient embankment construction for displaced riverine
                  agrarian families.
                </p>
              </div>
              <div className="mt-auto pt-space-md flex flex-col gap-space-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-body text-[12px] font-semibold uppercase text-text-muted">
                    Target: ₦65,000,000
                  </span>
                  <span className="font-heading text-[18px] font-bold text-primary-container">
                    66% Funded
                  </span>
                </div>
                <div
                  className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden flex"
                  role="progressbar"
                  aria-valuenow={66}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Flood Relief Fund: 66% of ₦65,000,000 target raised"
                >
                  <div
                    className="h-full bg-primary-container transition-all duration-700"
                    style={{ width: "66%" }}
                  ></div>
                  <div
                    className="h-full bg-tertiary-container/60 transition-all duration-700"
                    style={{ width: "8%" }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-text-muted font-body text-[14px] pt-1">
                  <span>
                    Raised: <strong className="text-text-primary font-semibold">₦42,800,000</strong>
                  </span>
                  <span>1,248 Donors</span>
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <button
                className="w-full py-space-sm px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-body text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-space-xs"
                onClick={() => setProjectFromCard("Flood Relief", 50000)}
                type="button"
              >
                <span>Give to Flood Relief</span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow border border-outline/10">
            <div className="relative h-48 w-full bg-secondary-fixed overflow-hidden">
              <Image
                alt="Rural clinic ward"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={cdn(
                  "/ph1.jpg",
                )}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                quality={88}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between">
                <span className="bg-status-success px-space-sm py-[2px] rounded text-on-primary font-body text-[11px] font-semibold uppercase tracking-wider">
                  Maternal Health
                </span>
                <span className="bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-[2px] rounded font-body text-[11px] font-semibold">
                  22 Rural Health Posts
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-md grow">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-heading text-[18px] font-bold text-text-primary">
                  FUHTH Otukpo Teaching Hospital &amp; Clinics
                </h3>
                <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  Procurement of specialized neonatal equipment, mobile ultrasound
                  units, and subsidized maternal care across 22 rural health posts.
                </p>
              </div>
              <div className="mt-auto pt-space-md flex flex-col gap-space-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-body text-[12px] font-semibold uppercase text-text-muted">
                    Target: ₦85,000,000
                  </span>
                  <span className="font-heading text-[18px] font-bold text-status-success">
                    72% Funded
                  </span>
                </div>
                <div
                  className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden flex"
                  role="progressbar"
                  aria-valuenow={72}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Teaching Hospital & Clinics: 72% of ₦85,000,000 target raised"
                >
                  <div
                    className="h-full bg-status-success transition-all duration-700"
                    style={{ width: "72%" }}
                  ></div>
                  <div
                    className="h-full bg-tertiary-container/60 transition-all duration-700"
                    style={{ width: "5%" }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-text-muted font-body text-[14px] pt-1">
                  <span>
                    Raised: <strong className="text-text-primary font-semibold">₦61,200,000</strong>
                  </span>
                  <span>894 Donors</span>
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <button
                className="w-full py-space-sm px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-body text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-space-xs"
                onClick={() => setProjectFromCard("Healthcare Support", 50000)}
                type="button"
              >
                <span>Give to Healthcare Fund</span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow border border-outline/10">
            <div className="relative h-48 w-full bg-secondary-fixed overflow-hidden">
              <Image
                alt="Apprentices working in a digital fabrication workshop"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                src={cdn(
                  "/ph2.jpg",
                )}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                quality={88}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between">
                <span className="bg-tertiary-container text-on-tertiary-container px-space-sm py-[2px] rounded font-body text-[11px] font-bold uppercase tracking-wider">
                  Centenary Vision
                </span>
                <span className="bg-inverse-surface/90 text-inverse-on-surface px-space-sm py-[2px] rounded font-body text-[11px] font-semibold">
                  1,000 Apprentices
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-md grow">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-heading text-[18px] font-bold text-text-primary">
                  Idoma Centenary Plus 2026 Skills Fund
                </h3>
                <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  Vocational engineering apprenticeships, digital fabrication hubs,
                  and agricultural innovation grants for 1,000 young Idoma men and
                  women.
                </p>
              </div>
              <div className="mt-auto pt-space-md flex flex-col gap-space-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-body text-[12px] font-semibold uppercase text-text-muted">
                    Target: ₦100,000,000
                  </span>
                  <span className="font-heading text-[18px] font-bold text-tertiary">
                    38% Funded
                  </span>
                </div>
                <div
                  className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden flex"
                  role="progressbar"
                  aria-valuenow={38}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Centenary Skills Fund: 38% of ₦100,000,000 target raised"
                >
                  <div
                    className="h-full bg-tertiary-container transition-all duration-700"
                    style={{ width: "38%" }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-text-muted font-body text-[14px] pt-1">
                  <span>
                    Raised: <strong className="text-text-primary font-semibold">₦38,500,000</strong>
                  </span>
                  <span>512 Donors</span>
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <button
                className="w-full py-space-sm px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-body text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-space-xs"
                onClick={() => setProjectFromCard("Centenary Fund", 50000)}
                type="button"
              >
                <span>Give to Centenary Fund</span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Donation Desk Section */}
      <section
        className="w-full bg-surface-container py-space-xl px-margin-mobile md:px-margin"
        id="donation-desk"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <span className="font-body text-[12px] font-bold uppercase tracking-widest text-primary">
                DIRECT TREASURY GATEWAY
              </span>
              <h2 className="font-heading type-headline font-semibold text-text-primary">
                Palace Endowment Protocol
              </h2>
              <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                The Och&apos;Idoma Traditional Council maintains strict institutional
                ring-fencing. Every transfer creates an authenticated cryptographic
                registry entry backed by the Palace Secretariat.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-md border border-outline/10">
              <div className="flex items-center justify-between pb-space-xs border-b border-outline/10">
                <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary">
                  Palace Central Trust Accounts
                </span>
                <span className="bg-status-success/10 text-status-success font-body text-[11px] px-space-xs py-0.5 rounded font-semibold">
                  Direct NIP
                </span>
              </div>
              <div className="space-y-space-sm text-[14px] font-body">
                <div className="p-space-sm bg-surface-container-low rounded flex justify-between items-center gap-space-sm border border-outline/10">
                  <div>
                    <p className="text-text-muted text-[12px] uppercase tracking-wider font-semibold">
                      First Bank of Nigeria
                    </p>
                    <p className="text-text-primary font-bold font-mono text-[15px]">
                      2041982841
                    </p>
                    <p className="text-text-muted text-[12px]">
                      Och&apos;Idoma Development Trust
                    </p>
                  </div>
                  <button
                    className="shrink-0 flex flex-col items-center gap-0.5 text-primary hover:text-primary-container p-2 rounded transition-colors"
                    onClick={() => handleCopy("2041982841", "firstbank")}
                    type="button"
                    aria-label="Copy First Bank account number 2041982841"
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      {copied === "firstbank" ? "check" : "content_copy"}
                    </span>
                    <span className="font-body text-[10px] uppercase tracking-wider font-semibold">
                      {copied === "firstbank"
                        ? "Copied"
                        : copied === "firstbank:failed"
                          ? "Select it"
                          : "Copy"}
                    </span>
                  </button>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded flex justify-between items-center gap-space-sm border border-outline/10">
                  <div>
                    <p className="text-text-muted text-[12px] uppercase tracking-wider font-semibold">
                      Zenith Bank Plc (USD / EUR FX)
                    </p>
                    <p className="text-text-primary font-bold font-mono text-[15px]">
                      5072049182
                    </p>
                    <p className="text-text-muted text-[12px]">
                      Sort Code: 057150013 • SWIFT: ZEIBNGLA
                    </p>
                  </div>
                  <button
                    className="shrink-0 flex flex-col items-center gap-0.5 text-primary hover:text-primary-container p-2 rounded transition-colors"
                    onClick={() => handleCopy("5072049182", "zenith")}
                    type="button"
                    aria-label="Copy Zenith Bank FX account number 5072049182"
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      {copied === "zenith" ? "check" : "content_copy"}
                    </span>
                    <span className="font-body text-[10px] uppercase tracking-wider font-semibold">
                      {copied === "zenith"
                        ? "Copied"
                        : copied === "zenith:failed"
                          ? "Select it"
                          : "Copy"}
                    </span>
                  </button>
                </div>
              </div>
              <p className="sr-only" role="status" aria-live="polite">
                {copied === "firstbank" || copied === "zenith"
                  ? "Account number copied to clipboard."
                  : ""}
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs text-text-muted text-[13px] font-body">
                <span
                  className="material-symbols-outlined text-[18px] text-status-success"
                  aria-hidden="true"
                >
                  verified
                </span>
                <span>All wire references must specify the initiative code.</span>
              </div>
            </div>

            <div className="bg-surface-container-high p-space-md rounded-lg flex items-center gap-space-md border border-outline/10">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">
                  gavel
                </span>
              </div>
              <div className="flex flex-col text-[14px] font-body">
                <span className="font-bold text-text-primary">
                  Edict of Paramount Guarantee
                </span>
                <span className="text-on-surface-variant text-[13px]">
                  Donations are non-taxable and recognized under Nigerian
                  Traditional Council Charitable Trusts Act.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg shadow-md overflow-hidden border border-outline/10">
            <div className="h-1.5 w-full bg-tertiary-container"></div>
            {pledge ? (
              <div
                className="p-space-lg md:p-space-xl flex flex-col gap-space-md"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-space-sm">
                  <span
                    className="material-symbols-outlined text-status-success text-[32px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    task_alt
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                    Contribution Recorded
                  </h3>
                </div>
                <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  Your instruction has been entered in the Directorate of
                  Endowments register. An authenticated e-gazette receipt follows
                  by email once the transfer settles.
                </p>
                <dl className="bg-surface-container-low rounded-lg p-space-md border border-outline/10 flex flex-col gap-space-xs font-body text-[14px]">
                  <div className="flex justify-between gap-space-md">
                    <dt className="text-text-muted">Target</dt>
                    <dd className="font-semibold text-text-primary text-right">
                      {pledge.project}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-space-md">
                    <dt className="text-text-muted">Amount</dt>
                    <dd className="font-mono font-bold text-text-primary text-right">
                      {pledge.amount}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-space-md">
                    <dt className="text-text-muted">Channel</dt>
                    <dd className="font-semibold text-text-primary text-right">
                      {pledge.method}
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
                  <button
                    type="button"
                    onClick={() => setPledge(null)}
                    className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-body text-[12px] font-bold uppercase tracking-wider hover:bg-primary-container transition-colors"
                  >
                    Make another contribution
                  </button>
                  <Link
                    href="/contact"
                    className="px-space-lg py-space-sm rounded-lg bg-surface-container text-text-primary font-body text-[12px] font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors text-center"
                  >
                    Contact the Directorate
                  </Link>
                </div>
              </div>
            ) : (
            <form
              className="p-space-lg md:p-space-xl flex flex-col gap-space-lg"
              onSubmit={handleDonationSubmit}
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                    Make an Official Contribution
                  </h3>
                  <span className="font-body text-[11px] text-status-success font-semibold px-2 py-0.5 rounded bg-status-success/10 flex items-center gap-1 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>{" "}
                    Instant E-Gazette Receipt
                  </span>
                </div>
                <p className="font-body text-[14px] text-text-muted">
                  Select an imperial objective and specify your philanthropic
                  investment.
                </p>
              </div>

              {/* Project Selection */}
              <fieldset className="flex flex-col gap-space-xs border-0 p-0 m-0">
                <legend className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary p-0 mb-space-xs">
                  Target Strategic Project
                </legend>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs">
                  {PROJECTS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      aria-pressed={selectedProject === p}
                      className={`py-space-sm px-2 text-center rounded text-[13px] font-semibold transition-colors ${
                        selectedProject === p
                          ? "bg-primary text-on-primary shadow-sm"
                          : "bg-surface-container hover:bg-surface-container-high text-text-primary"
                      }`}
                    >
                      {p === "Healthcare Support" ? "Healthcare" : p}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Currency & Quick Amount Selector */}
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between flex-wrap gap-space-xs">
                  <label
                    htmlFor="gift-amount"
                    className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary"
                  >
                    Contribution Amount
                  </label>
                  <div
                    className="flex items-center bg-surface-container rounded p-0.5 border border-outline/10"
                    role="group"
                    aria-label="Currency"
                  >
                    {CURRENCIES.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => changeCurrency(c)}
                        aria-pressed={currency.code === c.code}
                        className={`px-2.5 py-0.5 rounded text-[12px] transition-colors ${
                          currency.code === c.code
                            ? "font-bold bg-surface-container-lowest text-text-primary shadow-xs"
                            : "font-medium text-text-muted hover:text-text-primary"
                        }`}
                      >
                        {c.code} ({c.symbol})
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className="grid grid-cols-3 md:grid-cols-5 gap-space-xs"
                  role="group"
                  aria-label="Suggested amounts"
                >
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      aria-pressed={amount === amt}
                      className={`py-space-sm rounded text-[14px] font-mono font-bold transition-colors ${
                        amount === amt
                          ? "bg-primary-container text-on-primary shadow-sm"
                          : "bg-surface-container hover:bg-surface-container-high text-text-primary"
                      }`}
                    >
                      {currency.symbol}
                      {amt.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="relative flex items-center">
                  <span
                    className="absolute left-space-md text-text-primary font-bold font-mono text-[18px] pointer-events-none"
                    aria-hidden="true"
                  >
                    {currency.symbol}
                  </span>
                  <input
                    id="gift-amount"
                    name="amount"
                    className="w-full pl-10 pr-[7.5rem] py-space-sm bg-surface-container-low text-text-primary font-mono text-[18px] font-bold rounded-lg border border-outline/20 focus:outline-none focus:ring-2 focus:ring-primary"
                    min={currency.min}
                    step={currency.step}
                    type="number"
                    inputMode="numeric"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                  />
                  <span className="absolute right-space-md text-text-muted font-body text-[11px] font-semibold uppercase pointer-events-none">
                    Custom Amount
                  </span>
                </div>
              </div>

              {/* Payment Gateway Selection */}
              <fieldset className="flex flex-col gap-space-xs border-0 p-0 m-0">
                <legend className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-primary p-0 mb-space-xs">
                  Payment Channel
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  {PAYMENT_METHODS.map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded cursor-pointer hover:bg-surface-container transition-colors border border-outline/10 has-[:checked]:border-primary/40 has-[:checked]:bg-surface-container"
                    >
                      <input
                        className="accent-primary w-4 h-4 shrink-0"
                        name="payment_method"
                        type="radio"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="flex flex-col">
                        <span className="font-body text-[14px] font-bold text-text-primary flex items-center gap-1">
                          {method.title}{" "}
                          <span
                            className="material-symbols-outlined text-[16px] text-text-muted"
                            aria-hidden="true"
                          >
                            {method.icon}
                          </span>
                        </span>
                        <span className="text-[12px] text-text-muted">
                          {method.desc}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Donor Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm">
                <div className="md:col-span-3 flex flex-col gap-1">
                  <label
                    htmlFor="donor-title"
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted"
                  >
                    Title (Optional)
                  </label>
                  <select
                    id="donor-title"
                    name="donorTitle"
                    className="w-full px-space-sm py-space-sm bg-surface-container-low border border-outline/20 text-text-primary font-body text-[14px] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    {DONOR_TITLES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-5 flex flex-col gap-1">
                  <label
                    htmlFor="donor-name"
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted"
                  >
                    Legal / Benefactor Name
                  </label>
                  <input
                    id="donor-name"
                    name="donorName"
                    autoComplete="name"
                    className="w-full px-space-md py-space-sm bg-surface-container-low border border-outline/20 text-text-primary font-body text-[14px] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. David Odeh"
                    required
                    type="text"
                  />
                </div>
                <div className="md:col-span-4 flex flex-col gap-1">
                  <label
                    htmlFor="donor-email"
                    className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted"
                  >
                    Email for Official Receipt
                  </label>
                  <input
                    id="donor-email"
                    name="donorEmail"
                    autoComplete="email"
                    className="w-full px-space-md py-space-sm bg-surface-container-low border border-outline/20 text-text-primary font-body text-[14px] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="name@institution.ng"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Action CTA */}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <button
                  className="w-full py-space-md rounded-lg bg-tertiary-container hover:bg-tertiary-fixed text-on-tertiary-container font-body text-[14px] font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-space-sm"
                  type="submit"
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    aria-hidden="true"
                  >
                    lock
                  </span>
                  <span>
                    Complete Official Contribution ({currency.symbol}
                    {amount.toLocaleString()})
                  </span>
                </button>
                <p className="font-body text-[14px] text-text-muted text-center flex items-start justify-center gap-1.5 pt-1 leading-tight">
                  <span
                    className="material-symbols-outlined text-[16px] text-status-success shrink-0"
                    aria-hidden="true"
                  >
                    verified_user
                  </span>
                  <span>
                    Payments are processed securely via encrypted institutional
                    gateway. An authenticated digital receipt signed by the Palace
                    Financial Directorate will be delivered instantly to your email.
                  </span>
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Covenant of Transparency Section */}
      <section className="w-full max-w-[1200px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="flex flex-col gap-space-xs text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-body text-[12px] font-semibold uppercase tracking-widest text-primary">
            Institutional Governance
          </span>
          <h2 className="font-heading type-headline font-semibold text-text-primary">
            The Stool’s Covenant of Transparency &amp; Financial Stewardship
          </h2>
          <p className="font-body text-[16px] text-on-surface-variant">
            Every contribution enters an immutable public audit flow, supervised
            by the Och&apos;Idoma-in-Council and external chartered comptrollers.
          </p>
        </div>

        {/* 3-Step Visual Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
          <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col gap-space-md relative border border-outline/10">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading text-[18px] font-bold">
                1
              </span>
              <span className="material-symbols-outlined text-text-muted text-[28px]">
                receipt_long
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-heading text-[18px] font-bold text-text-primary">
                Direct Endowment Receipt
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                Funds are received directly into dedicated project accounts
                managed by the Board of Trustees, segregated from operational
                palace expenses.
              </p>
            </div>
            <div className="mt-auto pt-space-xs flex items-center gap-2 text-status-success font-body text-[11px] font-semibold uppercase tracking-wider">
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                check_circle
              </span>{" "}
              Instant Escrow Allocation
            </div>
          </div>

          <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col gap-space-md relative border border-outline/10">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading text-[18px] font-bold">
                2
              </span>
              <span className="material-symbols-outlined text-text-muted text-[28px]">
                fact_check
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-heading text-[18px] font-bold text-text-primary">
                Secretariat Verification
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                Every expenditure is audited against traditional council oversight
                directives and milestone certificates signed by field engineers.
              </p>
            </div>
            <div className="mt-auto pt-space-xs flex items-center gap-2 text-status-success font-body text-[11px] font-semibold uppercase tracking-wider">
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                check_circle
              </span>{" "}
              Dual Sign-off Protocol
            </div>
          </div>

          <div className="bg-surface-container-low p-space-lg rounded-lg shadow-sm flex flex-col gap-space-md relative border border-outline/10">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading text-[18px] font-bold">
                3
              </span>
              <span className="material-symbols-outlined text-text-muted text-[28px]">
                public
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-heading text-[18px] font-bold text-text-primary">
                Quarterly Public Disclosure
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant leading-relaxed">
                Comprehensive audited financial folios published quarterly in the
                Palace Gazette, digital repository, and local government council
                boards.
              </p>
            </div>
            <div className="mt-auto pt-space-xs flex items-center gap-2 text-status-success font-body text-[11px] font-semibold uppercase tracking-wider">
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                check_circle
              </span>{" "}
              Unrestricted Public Access
            </div>
          </div>
        </div>

        {/* Download Callout Banner */}
        <div className="mt-space-xl bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg border border-outline/10">
          <div className="flex items-center gap-space-md">
            <div className="w-16 h-16 rounded bg-primary-container/10 flex items-center justify-center shrink-0 text-primary-container">
              <span className="material-symbols-outlined text-[36px]">
                picture_as_pdf
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Official Audit Folio
              </span>
              <h3 className="font-heading text-[18px] font-bold text-text-primary">
                Q3 2025 Comprehensive Development &amp; Audit Report
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant">
                Includes complete disbursements, contractor performance records,
                and recipient registries. Released on request by the Secretariat.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full md:w-auto px-space-lg py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-text-primary font-body text-[12px] uppercase font-bold tracking-wider transition-colors gap-space-xs shadow-xs"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                aria-hidden="true"
              >
                mail
              </span>
              <span>Request the Audit Folio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Impact Counter */}
      <section className="w-full bg-surface-container-high py-space-xl px-margin-mobile md:px-margin border-t border-outline/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center">
          <div className="flex flex-col gap-1">
            <span className="font-heading type-stat font-bold text-primary">
              ₦242.5M
            </span>
            <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-muted">
              Total Trust Capital Mobilized
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading type-stat font-bold text-text-primary">
              14,200+
            </span>
            <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-muted">
              Agrarian Families Protected
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading type-stat font-bold text-primary">
              22
            </span>
            <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-muted">
              Rural Clinics Equipped
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-heading type-stat font-bold text-status-success">
              100%
            </span>
            <span className="font-body text-[12px] font-semibold uppercase tracking-wider text-text-muted">
              Transparency Rating
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
