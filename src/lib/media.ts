import heroImg from "@/assets/images/hero-ochidoma-v.jpg";
import heritage1 from "@/assets/images/heritage-01.jpg";
import heritage2 from "@/assets/images/heritage-02.jpg";
import heritage3 from "@/assets/images/heritage-03.jpg";
import heritage4 from "@/assets/images/heritage-04.jpg";
import type { StaticImageData } from "next/image";

/**
 * Landing-page photography, resolved in one place — plus the `cdn()` normaliser
 * the rest of the site's pages use on their own inline Stitch URLs.
 *
 * Why this file exists: the prototype pointed <Image> at Stitch's CDN using the
 * bare asset URL, and that URL returns a *thumbnail* — the hero portrait was
 * arriving as a 512x286 JPEG and being stretched across a ~1920px full-bleed
 * section. That, not the markup, was the blur. Appending `=s0` asks Google's
 * image host for the unresized master (hero: 1376x768), which Next then
 * downscales into per-device AVIF/WebP.
 *
 * `npm run prepare-images` (scripts/prepare-images.mjs) pulls these masters to
 * `src/assets/images/`, upscales the hero 2x with Lanczos + unsharp so large
 * desktop viewports are downscaling rather than stretching, and writes
 * `public/og-image.jpg`. Once it has run, swap the `src` values below for the
 * static imports noted on each entry — nothing outside this file changes.
 *
 * These are design-comp images on an ephemeral CDN, not palace photography.
 * They must be replaced with verified images from the Palace Secretariat before
 * launch — same swap, same one file.
 */

const CDN = "https://lh3.googleusercontent.com/aida-public/";

/**
 * Normalises a Stitch CDN URL to its unresized master.
 *
 * Every page of the prototype embedded these URLs bare, and a bare URL returns a
 * ~512px thumbnail no matter how large the frame is — that, not the markup, is
 * why the photography looked soft everywhere. `=s0` asks Google's image host for
 * the original. Covers both asset paths Stitch emits (`/aida-public/` and
 * `/aida/`); `next.config.ts` allows the hostname at `/**`, so both optimise.
 *
 * Idempotent — a URL that already carries a size parameter is returned untouched.
 */
export const cdn = (url: string) => (/=[\w-]+$/.test(url) ? url : `${url}=s0`);

const master = (id: string) => cdn(`${CDN}${id}`);

export type LandingImage = {
  src: string | StaticImageData;
  /**
   * Frame's dominant tone, painted on the container while the image loads.
   *
   * Remote sources carry no build-time pixel data, so `placeholder="blur"` would
   * need a hand-supplied `blurDataURL` — and Next splices that into the `href` of
   * a percent-encoded SVG, so only base64 rasters survive the trip. A flat tone
   * costs nothing and reads the same behind a photo that covers the frame. Static
   * imports generate real blur placeholders automatically; that arrives for free
   * with the `prepare-images` swap.
   */
  tone: string;
};

/** Swap for: import heroImg from "@/assets/images/hero-ochidoma-v.jpg" */
export const heroImage: LandingImage = {
  src: heroImg,
  tone: "#2a1d16",
};

export type HeritageImage = LandingImage & {
  /** Plate number, shown in the caption. */
  n: string;
  label: string;
  alt: string;
};

/** Swap for: import … from "@/assets/images/heritage-*.jpg" */
export const heritageImages: HeritageImage[] = [
  {
    n: "01",
    label: "Royal Court Regalia & Flywhisks",
    alt: "Intricate ceremonial regalia and beaded flywhisk of the Idoma paramount ruler",
    src: heritage1,
    tone: "#4a371d",
  },
  {
    n: "02",
    label: "Apa Traditional Woven Cloth",
    alt: "Close-up of authentic handwoven Apa textile in Idoma red and black",
    src: heritage2,
    tone: "#5c1a1f",
  },
  {
    n: "03",
    label: "Palace Council in Session",
    alt: "Assembly of the traditional Idoma royal council of elders in session",
    src: heritage3,
    tone: "#3b3026",
  },
  {
    n: "04",
    label: "Sacred Alekwu Cultural Performance",
    alt: "Traditional sacred Alekwu ancestral masquerade performance",
    src: heritage4,
    tone: "#44301d",
  },
];

/**
 * Social preview card. `prepare-images` writes `public/og-image.jpg`; until it
 * has run, the hero master stands in so shared links are never previewless —
 * WhatsApp and X are where most of this site's statements actually get read.
 */
export const ogImage = {
  url: typeof heroImage.src === "string" ? heroImage.src : heroImage.src.src,
  width: 1376,
  height: 768,
  alt: "His Royal Majesty Agaba'Idu Och'Idoma V in full ceremonial regalia",
};
