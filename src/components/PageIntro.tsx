import Image from "next/image";
import Link from "next/link";
import { heritageImages } from "@/lib/media";
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  imageIndex?: number;
  variant?: "split" | "panorama" | "journal";
  links?: { label: string; href: string }[];
};
export default function PageIntro({
  eyebrow,
  title,
  description,
  imageIndex = 2,
  variant = "split",
  links = [],
}: Props) {
  const photo = heritageImages[imageIndex];
  return (
    <section className={`inner-intro inner-intro--${variant}`}>
      <div className="palace-container">
        <nav className="intro-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <div className="inner-intro-grid">
          <div className="inner-intro-copy">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            {links.length > 0 && (
              <nav className="intro-jumps" aria-label={`${eyebrow} sections`}>
                {links.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </nav>
            )}
          </div>
          {variant !== "journal" && (
            <div className="inner-intro-image">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  variant === "panorama"
                    ? "100vw"
                    : "(max-width:760px) 100vw, 45vw"
                }
                className="object-cover"
                priority
              />
              <span className="intro-image-label">
                The palace · The council · The people
              </span>
            </div>
          )}
          {variant === "journal" && (
            <div className="journal-masthead">
              <span>THE PALACE</span>
              <strong>{eyebrow.includes("archive") ? "Archive" : "Journal"}</strong>
              <span>Stories · People · Heritage</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
