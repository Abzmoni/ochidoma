"use client";

import Link from "next/link";
import RoyalCrest from "./RoyalCrest";

const columns = [
  {
    heading: "Palace",
    links: [
      { label: "About the Royal Stool", href: "/the-throne" },
      { label: "History of the Stool", href: "/the-throne#succession" },
      { label: "Traditional Council Structure", href: "/the-throne#council" },
      { label: "Palace Protocol", href: "/contact" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Diaspora Chapters", href: "/diaspora" },
      { label: "Giving & Endowments", href: "/giving" },
      { label: "Volunteer & Cultural Service", href: "/diaspora" },
      { label: "Royal Foundation", href: "/giving" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Press Statements & News", href: "/news" },
      { label: "Media Kit", href: "/news" },
      { label: "Palace Gazette", href: "/news" },
      { label: "Contact the Secretariat", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-rich-black text-surface-container">
      {/* Woven ceremonial edge, mirroring the foot of the hero. */}
      <div className="h-[6px] idoma-weave" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        {/* Institutional identity */}
        <div className="flex items-center gap-space-md pb-space-lg mb-space-xl border-b border-royal-gold/25">
          <RoyalCrest className="h-14 w-14 shrink-0" />
          <div className="flex flex-col">
            <span className="font-heading text-[20px] font-semibold uppercase tracking-[0.08em] text-warm-ivory leading-tight">
              Och&apos;Idoma
            </span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-tertiary-fixed-dim">
              Idoma Area Traditional Council · Otukpo
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          {columns.map((column) => (
            <nav
              key={column.heading}
              aria-label={column.heading}
              className="flex flex-col gap-space-md"
            >
              <h2 className="font-heading text-[18px] font-bold text-tertiary-fixed-dim border-b border-royal-gold/30 pb-space-xs leading-[26px]">
                {column.heading}
              </h2>
              <ul className="flex flex-col gap-space-sm font-body text-[14px] text-surface-container-highest">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-tertiary-fixed-dim transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Gazette subscription */}
          <div className="flex flex-col gap-space-md">
            <h2 className="font-heading text-[18px] font-bold text-tertiary-fixed-dim border-b border-royal-gold/30 pb-space-xs leading-[26px]">
              Royal Gazette
            </h2>
            <p className="font-body text-[14px] text-surface-container-highest">
              Receive imperial proclamations, gazette archives, and civic notices
              from the Stool.
            </p>
            <form
              className="flex flex-col gap-space-sm mt-space-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Placeholder text alone leaves the field unnamed for screen readers. */}
              <label htmlFor="gazette-email" className="sr-only">
                Email address for the Royal Gazette
              </label>
              <input
                id="gazette-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter institutional email"
                className="w-full px-space-md py-space-sm bg-[#211D1A] text-surface font-body text-[14px] rounded-lg border border-outline/30 focus:border-royal-gold focus:outline-none placeholder:text-outline"
              />
              <button
                type="submit"
                className="w-full px-space-lg py-space-sm bg-royal-gold text-rich-black font-body text-[12px] uppercase font-bold tracking-wider rounded-lg hover:bg-tertiary-fixed transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="font-body text-[11px] text-outline leading-snug">
              Handled under the Nigeria Data Protection Act. Unsubscribe at any
              time.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full border-t border-royal-gold/60 pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left">
          <p className="font-body text-[13px] text-surface-container-highest">
            © {new Date().getFullYear()} The Palace of the Och&apos;Idoma · All
            Rights Reserved · Otukpo, Benue State, Nigeria.
          </p>
          <nav
            aria-label="Legal and archive"
            className="flex items-center gap-space-md font-body text-[11px] font-semibold text-tertiary-fixed-dim"
          >
            <Link href="/contact" className="hover:text-surface transition-colors">
              Imperial Registry
            </Link>
            <span className="text-outline/40" aria-hidden="true">
              ·
            </span>
            <Link href="/contact" className="hover:text-surface transition-colors">
              Civic Protocol
            </Link>
            <span className="text-outline/40" aria-hidden="true">
              ·
            </span>
            <Link href="/gallery" className="hover:text-surface transition-colors">
              Archival Access
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
