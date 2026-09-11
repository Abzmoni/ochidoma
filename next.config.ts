import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: on the low-end Android devices this audience mostly browses on,
    // it typically lands 25–40% smaller than WebP for the same photographic quality.
    formats: ["image/avif", "image/webp"],
    // Widened at the small end — the stock ladder starts at 640px, which overshoots
    // a 360px-wide budget phone by nearly 2x on a full-bleed hero.
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1440, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 384],
    // Next 16 only permits qualities on this allowlist. 75 is the default for
    // everything; 88 is reserved for the hero portrait, where the face and
    // beadwork show JPEG ringing at 75 across a full-bleed frame.
    qualities: [75, 88],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
