import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareLink from "@/components/ShareLink";
import { archiveEntries, archiveImage, archiveSource } from "@/lib/archive";
export function generateStaticParams() {
  return archiveEntries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = archiveEntries.find((e) => e.slug === slug);
  return {
    title: entry?.title ?? "Record not found",
    description: entry?.summary,
  };
}
export default async function Record({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = archiveEntries.find((e) => e.slug === slug);
  if (!entry) notFound();
  return (
    <div className="palace-container section-space">
      <Link href="/archive#collection" className="text-link">
        ← All archive records
      </Link>
      <article className="archive-record">
        <header>
          <span className="eyebrow">{entry.category} · 2024 archive</span>
          <h1 className="editorial-title">{entry.title}</h1>
          <p className="intro-copy">{entry.summary}</p>
          <p className="small-note">{archiveSource}</p>
        </header>
        <div className="editorial-note">
          This historical record reflects the programme as published. It does
          not confirm present appointments. Summaries retain the source’s
          meaning; the photographed pages below preserve the original record.
        </div>
        <div className="button-row">
          <ShareLink title={entry.title} />
          {entry.category === "The institution" && (
            <Link href="/traditional-council" className="text-link">
              Chiefs directory →
            </Link>
          )}
          <a href="#source-pages" className="text-link">
            Read source pages ↓
          </a>
        </div>
        <section id="source-pages">
          <h2 className="subheading">From the printed programme</h2>
          <p className="small-note">
            Open a page below to read the photograph in full. Source numbers
            identify the supplied images, not printed page numbers.
          </p>
          {entry.images.map((id, index) => (
            <details className="source-page" key={id}>
              <summary>
                Page {index + 1} of {entry.images.length} · Source{" "}
                {String(id).padStart(2, "0")}
              </summary>
              <figure>
                <Image
                  src={archiveImage(id)}
                  alt={`${entry.title}, photographed source page ${index + 1}`}
                  width={960}
                  height={1280}
                  sizes="(max-width:900px) 100vw, 850px"
                />
                <figcaption>
                  {archiveSource} · Source {id}
                </figcaption>
              </figure>
            </details>
          ))}
        </section>
        <div className="contact-band">
          <div>
            <h2>Keep exploring the collection.</h2>
            <p>
              Find related biographies, the chiefs roster and the history of the
              stool.
            </p>
          </div>
          <Link href="/archive#collection" className="palace-button">
            Browse records →
          </Link>
        </div>
      </article>
    </div>
  );
}
