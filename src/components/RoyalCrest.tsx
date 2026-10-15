type RoyalCrestProps = {
  className?: string;
  /** Decorative by default — the wordmark beside it already names the institution. */
  title?: string;
};

/**
 * The seal of the Paramount Stool, drawn as vector rather than raster.
 *
 * The motif is the royal stool itself (the institution's own symbol, per the
 * Traditional Council's framing) beneath a ceremonial flywhisk, ringed in the
 * the palace’s black, red and white palette. Vector keeps it sharp on the masthead at 32px and on the
 * footer at 56px, and costs about a kilobyte on a slow connection.
 */
export default function RoyalCrest({ className, title }: RoyalCrestProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {/* Field */}
      <circle cx="32" cy="32" r="31" fill="#0B0C10" />
      {/* Outer white band */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="#F4F6FA"
        strokeWidth="2"
      />
      {/* Regal red band */}
      <circle
        cx="32"
        cy="32"
        r="26.5"
        fill="none"
        stroke="#B5142B"
        strokeWidth="2.5"
      />
      {/* Dashed inner rule — the engraved detail of a struck seal */}
      <circle
        cx="32"
        cy="32"
        r="22.5"
        fill="none"
        stroke="#F4F6FA"
        strokeWidth="0.9"
        strokeDasharray="1.4 3.2"
        opacity="0.85"
      />

      {/* Finial */}
      <circle cx="32" cy="16.5" r="2.6" fill="#F4F6FA" />
      <rect x="31" y="19" width="2" height="4" fill="#F4F6FA" />

      {/* Ceremonial flywhisk */}
      <path
        d="M14.5 28.5c5-4.6 30-4.6 35 0-5 3.1-30 3.1-35 0Z"
        fill="#F4F6FA"
      />
      <path
        d="M14.5 28.5c5-4.6 30-4.6 35 0-6.5-1.6-28.5-1.6-35 0Z"
        fill="#7BA3E5"
      />

      {/* The stool: stepped seat over a splayed plinth */}
      <rect x="26" y="32" width="12" height="2.6" fill="#B5142B" />
      <path d="M22 47h20l-4.5-10h-11L22 47Z" fill="#F4F6FA" />
      <path d="M27.6 37h8.8l1.3 3h-11.4l1.3-3Z" fill="#0B0C10" opacity="0.55" />
      <rect x="20" y="47" width="24" height="2.4" rx="0.6" fill="#F4F6FA" />
    </svg>
  );
}
