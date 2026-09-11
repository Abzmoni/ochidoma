"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RoyalCrest from "./RoyalCrest";

const navLinks = [
  { label: "The Throne", href: "/the-throne" },
  { label: "History & Culture", href: "/history-and-culture" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Giving", href: "/giving" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // The home page opens on a full-bleed dark portrait. Letting the masthead sit
  // transparent over it until the reader scrolls buys the hero its full height
  // back; every other page starts on ivory and needs the solid bar immediately.
  const overHero = pathname === "/" && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change so a tapped link doesn't leave it hanging open.
  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        overHero
          ? "bg-gradient-to-b from-rich-black/85 to-transparent"
          : "bg-rich-black shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
      }`}
    >
      <div className="h-[var(--header-h)] max-w-[1200px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-space-sm md:gap-space-md shrink-0 group"
        >
          <RoyalCrest className="h-9 w-9 md:h-10 md:w-10 shrink-0" />
          <div className="flex flex-col">
            <span className="font-heading text-[20px] md:text-[22px] font-semibold uppercase tracking-[0.08em] text-surface leading-tight">
              OCH&apos;IDOMA
            </span>
            <span className="font-body text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-tertiary-fixed-dim leading-[14px] whitespace-nowrap">
              PALACE OF THE PARAMOUNT RULER
            </span>
          </div>
        </Link>

        {/* Desktop nav + actions */}
        <div className="flex items-center gap-space-md">
          <nav aria-label="Primary" className="hidden lg:flex items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative font-body text-[11px] xl:text-[12px] font-semibold uppercase tracking-[0.09em] transition-colors px-space-sm xl:px-space-md py-space-sm ${
                    active
                      ? "text-tertiary-fixed-dim"
                      : "text-surface-container hover:text-tertiary-fixed-dim"
                  }`}
                >
                  {link.label}
                  {/* Gold underscore marks the section you're reading. */}
                  <span
                    className={`absolute left-space-sm right-space-sm xl:left-space-md xl:right-space-md bottom-0 h-[2px] bg-royal-gold transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-space-sm">
            <Link
              href="/giving"
              className="hidden lg:inline-flex items-center justify-center px-space-md md:px-space-lg py-space-sm rounded-lg bg-royal-gold text-rich-black font-body text-[11px] md:text-[12px] font-bold uppercase tracking-wider hover:bg-tertiary-fixed transition-colors shadow-sm"
            >
              Donate
            </Link>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="lg:hidden w-10 h-10 rounded-lg border border-royal-gold/40 text-surface flex items-center justify-center hover:bg-white/5 transition-colors"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Gold hairline seats the masthead against the page below it. */}
      <div
        className={`h-px bg-royal-gold transition-opacity duration-300 ${
          overHero ? "opacity-0" : "opacity-60"
        }`}
      />

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="lg:hidden bg-rich-black border-t border-royal-gold/20 shadow-lg max-h-[calc(100dvh_-_var(--header-h))] overflow-y-auto"
        >
          <div className="max-w-[1200px] mx-auto px-margin-mobile py-space-md flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-body text-[14px] font-semibold uppercase tracking-wider py-space-md border-b border-surface-container/10 flex items-center justify-between transition-colors ${
                    active
                      ? "text-tertiary-fixed-dim"
                      : "text-surface-container hover:text-tertiary-fixed-dim"
                  }`}
                >
                  <span className="flex items-center gap-space-sm">
                    {active && (
                      <span className="w-1.5 h-1.5 rotate-45 bg-royal-gold" />
                    )}
                    {link.label}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-outline">
                    chevron_right
                  </span>
                </Link>
              );
            })}
            <div className="mt-space-lg mb-space-sm">
              <Link
                href="/giving"
                className="flex items-center justify-center w-full px-space-md py-space-md rounded-lg bg-royal-gold text-rich-black font-body text-[14px] font-bold uppercase tracking-wider hover:bg-tertiary-fixed transition-colors shadow-sm"
              >
                Donate
              </Link>
            </div>
            <p className="font-body text-[11px] text-outline uppercase tracking-widest pt-space-lg">
              Otukpo · Benue State · Nigeria
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
