/**
 * Fetches the landing-page photography at full master resolution, upscales the
 * hero, and writes local originals for Next.js to optimise.
 *
 * Why this exists: the prototype pointed <Image unoptimized> straight at Stitch's
 * CDN, and those URLs serve a *thumbnail* by default — the hero was arriving as a
 * 512x286 JPEG and being stretched across a ~1920px full-bleed section. Appending
 * `=s0` returns the 1376x768 master instead. Pulling the masters local also means
 * Next can emit AVIF/WebP at per-device sizes (the design brief targets phones on
 * slow Nigerian connections) and the page stops depending on CDN URLs that expire.
 *
 * The page renders correctly without this script — `src/lib/media.ts` points at
 * the `=s0` masters remotely, which is what fixes the thumbnail blur. Running it
 * adds the 2x-upscaled hero (so wide desktop viewports downscale instead of
 * stretching) and removes the dependency on the expiring CDN. After it runs,
 * follow the swap note it writes to src/assets/images/SOURCES.md.
 *
 * Run: npm run prepare-images
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src", "assets", "images");
const publicDir = join(root, "public");

const CDN = "https://lh3.googleusercontent.com/aida-public/";

/** `=s0` asks Google's image host for the unresized original. */
const master = (id) => `${CDN}${id}=s0`;

const HERO = {
  name: "hero-ochidoma-v",
  id: "AB6AXuAV6fWi7e1YLOuDBiHsycEC24eDFJrmgJCa5-2Kf2kfHzYLxA_lC9RHPUrzHLa-JAf9hg2yUYAzHV0Q1nYROd7LJkp4U_uqK7O9w2tW18yc7UnDbrDBZdW5InX-kJh4JhVj46DBERvlPZbSLNZFPUFNp7kzdlu-Dxib9yku-yS6fahJagSbUcN_xrhrhtUJIIEcKwvCWOUQV30X9FQTdxAzBBx4yfbNmC4X_CMKXY5JbT7bnbdUr-Z6",
};

const HERITAGE = [
  {
    name: "heritage-regalia",
    id: "AB6AXuB10zNffeuNPMAu-pwDNsrfaWlqT6FZNvJgvMZD8UfKw7JxwdjHb6P9SZGhGyrOaz2pqLNiMo4RagjynUt29S7JN8d6zS7yQRPJb2-R-QTHTDGsBu5OPx8MwbJu-9UwL1hf-kQ7GFZQQRtVPAzkXV_J_gdzaGfe73TOvO1EKw2rjRvHchsaLSI_6MmTNS9xy8KXYhDyAbTTIBDHgc6k9p6JC2ioZVVTh0sa2FPOSWROaNa6lZEiLvtL",
  },
  {
    name: "heritage-textile",
    id: "AB6AXuAjG5z7xjsdDpOVhj0AWnyvzzELyRJfmFrH16TwurzCtA0ZxyB61LvbUxqgBMlnPznsX09dwu3z0pVj1_GnWT2WYfJGA-hltUBjDr1KUgG635X7rZVoVTzpH_s3flyNAncblRMtPKyLPUwg6GBAQSnZ_Ll4woxK2JC_l_50ykZB7A18NHymmLFxjmelehpH87A1YETg9gYKEy4aHEgkRCLuRMeh0Nz_xqZtWJK1KduGfuDD-M7Z6d60",
  },
  {
    name: "heritage-council",
    id: "AB6AXuB5F19ouLW5U_AMmdLly7cfAuiLu_jW9mcUtHiUGMFj3hm5ASBSX0HwVO84ZUB9rlJwCTDFVuxVP_noeS18NwP1LL5SAr73m_aVBHopL67BrdOcS4-KriNJqnHG0Y_tM0hzwqUOlfY-3kR6fyw9GcF1eXrJwtk7b6NYDGmUSdC0_X53zHYtOKKXrcfRYQnVFUGw4ygFKD98x31y0lhpvzsNSBQ3ToeazQhmkgLIQf1tWL46BvN9KF7L",
  },
  {
    name: "heritage-alekwu",
    id: "AB6AXuAymxQNIzTxY23KxPWL3xbFJa4BBKESYc8mnmBnTfle7L_pZjHxUNNs0NaSbRxNJkI7s_NO0oybVfJKCrQlVk30qaRSg4EhzGfgB13piW04myW6bkc0E-9ePTF6Q8Qi0yZavJisW_bsRgdgkMlaE6o3e7wr7QdTAP9cKRdhBMv_ilMufDYrqh2ADu3dnq7sLKbtkMbK1wHNweA3o67VAgKOuItaFU1REABFeLal99e0PEaJ_ySCi5jh",
  },
];

async function fetchImage(url, label) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${label}: ${res.status} ${res.statusText} for ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const meta = await sharp(buf).metadata();
  return { buf, meta };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(publicDir, { recursive: true });

  // ── Hero ──────────────────────────────────────────────────────────────────
  const { buf: heroBuf, meta: heroMeta } = await fetchImage(
    master(HERO.id),
    "hero"
  );
  console.log(`hero master ......... ${heroMeta.width}x${heroMeta.height}`);

  // 2x Lanczos with a restrained unsharp pass. Lanczos gives the cleanest
  // classical upscale available here; the sharpen restores the acuity
  // interpolation costs, mainly around the face and the beadwork. This does not
  // invent detail the 1376px master never had — it just stops the browser from
  // doing a cruder bilinear stretch, and gives Next a master it only ever has to
  // scale *down* from for every device size.
  const heroTarget = {
    width: heroMeta.width * 2,
    height: heroMeta.height * 2,
  };
  const heroPath = join(outDir, `${HERO.name}.jpg`);
  await sharp(heroBuf)
    .resize(heroTarget.width, heroTarget.height, {
      kernel: sharp.kernel.lanczos3,
      fit: "fill",
    })
    .sharpen({ sigma: 0.9, m1: 0.4, m2: 1.7 })
    .jpeg({ quality: 90, chromaSubsampling: "4:4:4", mozjpeg: true })
    .toFile(heroPath);
  console.log(
    `hero upscaled ....... ${heroTarget.width}x${heroTarget.height} -> ${heroPath}`
  );

  // ── Social preview card ───────────────────────────────────────────────────
  // Statements from this site get re-shared on WhatsApp and X constantly; the
  // preview image is often all a reader sees.
  const ogPath = join(publicDir, "og-image.jpg");
  await sharp(heroBuf)
    .resize(1200, 630, {
      kernel: sharp.kernel.lanczos3,
      fit: "cover",
      position: "top",
    })
    .sharpen({ sigma: 0.7 })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(ogPath);
  console.log(`og image ............ 1200x630 -> ${ogPath}`);

  // ── Heritage grid ─────────────────────────────────────────────────────────
  // These render at roughly 340px wide in a 2-column grid, so the master is
  // already ample — no upscale, just a local original for Next to work from.
  for (const item of HERITAGE) {
    const { buf, meta } = await fetchImage(master(item.id), item.name);
    const dest = join(outDir, `${item.name}.jpg`);
    await sharp(buf)
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(dest);
    console.log(
      `${item.name.padEnd(19, ".")} ${meta.width}x${meta.height} -> ${dest}`
    );
  }

  await writeFile(
    join(outDir, "SOURCES.md"),
    [
      "# Landing page photography",
      "",
      "Generated by `npm run prepare-images`.",
      "",
      "Pulled from the Stitch design CDN at master resolution (`=s0`). The hero is",
      "upscaled 2x (Lanczos + unsharp) so Next.js only ever downscales when emitting",
      "per-device AVIF/WebP.",
      "",
      "## Point the site at these files",
      "",
      "`src/lib/media.ts` ships pointing at the remote `=s0` masters so the page",
      "builds with no generated assets. To use these local originals instead, replace",
      'each `src: master("…")` with a static import:',
      "",
      "```ts",
      'import heroImg from "@/assets/images/hero-ochidoma-v.jpg";',
      'import regaliaImg from "@/assets/images/heritage-regalia.jpg";',
      'import textileImg from "@/assets/images/heritage-textile.jpg";',
      'import councilImg from "@/assets/images/heritage-council.jpg";',
      'import alekwuImg from "@/assets/images/heritage-alekwu.jpg";',
      "```",
      "",
      "…and set `ogImage.url` to `/og-image.jpg` (1200x630, written to `public/`).",
      "",
      "Static imports carry their own generated blur placeholder, so once swapped you",
      "can add `placeholder=\"blur\"` to the <Image> tags in `src/app/page.tsx` and drop",
      "the `tone` fills. (Remote sources can't use it: Next splices `blurDataURL` into",
      "the href of a percent-encoded SVG, where only base64 rasters survive.)",
      "",
      "## These are not palace photography",
      "",
      "They are design comps. Before launch they should be replaced with verified",
      "photographs supplied by the Palace Secretariat, under the same filenames —",
      "nothing else needs to change.",
      "",
    ].join("\n"),
    "utf8"
  );

  console.log("\ndone.");
}

main().catch((err) => {
  console.error("\nimage preparation failed:", err.message);
  process.exitCode = 1;
});
