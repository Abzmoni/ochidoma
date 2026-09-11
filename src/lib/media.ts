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
  src: string;
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
  src: master(
    "AB6AXuAV6fWi7e1YLOuDBiHsycEC24eDFJrmgJCa5-2Kf2kfHzYLxA_lC9RHPUrzHLa-JAf9hg2yUYAzHV0Q1nYROd7LJkp4U_uqK7O9w2tW18yc7UnDbrDBZdW5InX-kJh4JhVj46DBERvlPZbSLNZFPUFNp7kzdlu-Dxib9yku-yS6fahJagSbUcN_xrhrhtUJIIEcKwvCWOUQV30X9FQTdxAzBBx4yfbNmC4X_CMKXY5JbT7bnbdUr-Z6"
  ),
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
    src: master(
      "AB6AXuB10zNffeuNPMAu-pwDNsrfaWlqT6FZNvJgvMZD8UfKw7JxwdjHb6P9SZGhGyrOaz2pqLNiMo4RagjynUt29S7JN8d6zS7yQRPJb2-R-QTHTDGsBu5OPx8MwbJu-9UwL1hf-kQ7GFZQQRtVPAzkXV_J_gdzaGfe73TOvO1EKw2rjRvHchsaLSI_6MmTNS9xy8KXYhDyAbTTIBDHgc6k9p6JC2ioZVVTh0sa2FPOSWROaNa6lZEiLvtL"
    ),
    tone: "#4a371d",
  },
  {
    n: "02",
    label: "Apa Traditional Woven Cloth",
    alt: "Close-up of authentic handwoven Apa textile in Idoma red and black",
    src: master(
      "AB6AXuAjG5z7xjsdDpOVhj0AWnyvzzELyRJfmFrH16TwurzCtA0ZxyB61LvbUxqgBMlnPznsX09dwu3z0pVj1_GnWT2WYfJGA-hltUBjDr1KUgG635X7rZVoVTzpH_s3flyNAncblRMtPKyLPUwg6GBAQSnZ_Ll4woxK2JC_l_50ykZB7A18NHymmLFxjmelehpH87A1YETg9gYKEy4aHEgkRCLuRMeh0Nz_xqZtWJK1KduGfuDD-M7Z6d60"
    ),
    tone: "#5c1a1f",
  },
  {
    n: "03",
    label: "Palace Council in Session",
    alt: "Assembly of the traditional Idoma royal council of elders in session",
    src: master(
      "AB6AXuB5F19ouLW5U_AMmdLly7cfAuiLu_jW9mcUtHiUGMFj3hm5ASBSX0HwVO84ZUB9rlJwCTDFVuxVP_noeS18NwP1LL5SAr73m_aVBHopL67BrdOcS4-KriNJqnHG0Y_tM0hzwqUOlfY-3kR6fyw9GcF1eXrJwtk7b6NYDGmUSdC0_X53zHYtOKKXrcfRYQnVFUGw4ygFKD98x31y0lhpvzsNSBQ3ToeazQhmkgLIQf1tWL46BvN9KF7L"
    ),
    tone: "#3b3026",
  },
  {
    n: "04",
    label: "Sacred Alekwu Cultural Performance",
    alt: "Traditional sacred Alekwu ancestral masquerade performance",
    src: master(
      "AB6AXuAymxQNIzTxY23KxPWL3xbFJa4BBKESYc8mnmBnTfle7L_pZjHxUNNs0NaSbRxNJkI7s_NO0oybVfJKCrQlVk30qaRSg4EhzGfgB13piW04myW6bkc0E-9ePTF6Q8Qi0yZavJisW_bsRgdgkMlaE6o3e7wr7QdTAP9cKRdhBMv_ilMufDYrqh2ADu3dnq7sLKbtkMbK1wHNweA3o67VAgKOuItaFU1REABFeLal99e0PEaJ_ySCi5jh"
    ),
    tone: "#44301d",
  },
];

/**
 * Social preview card. `prepare-images` writes `public/og-image.jpg`; until it
 * has run, the hero master stands in so shared links are never previewless —
 * WhatsApp and X are where most of this site's statements actually get read.
 */
export const ogImage = {
  url: heroImage.src,
  width: 1376,
  height: 768,
  alt: "His Royal Majesty Agaba'Idu Och'Idoma V in full ceremonial regalia",
};
