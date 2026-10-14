import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareLink from "@/components/ShareLink";
import { archiveEntries } from "@/lib/archive";
export function generateStaticParams() {
  return archiveEntries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = archiveEntries.find((i) => i.slug === slug);
  return { title: e?.title ?? "Record not found", description: e?.summary };
}
export default async function Record({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = archiveEntries.find((i) => i.slug === slug);
  if (!e) notFound();
  return (
    <div className="palace-container section-space">
      <Link href="/archive#collection" className="text-link">
        ← Heritage collection
      </Link>
      <article className="archive-record">
        <header>
          <span className="eyebrow">{e.category}</span>
          <h1 className="editorial-title">{e.title}</h1>
          <p className="intro-copy">{e.summary}</p>
        </header>
        <p className="small-note">
          Historical profile · Roles and appointments may have changed.
        </p>
        <div className="button-row">
          <ShareLink title={e.title} />
          {e.category === "The institution" && (
            <Link href="/traditional-council" className="text-link">
              Explore the council →
            </Link>
          )}
          <Link href="/contact" className="text-link">
            Suggest a correction →
          </Link>
        </div>
        <p className="content-attribution">
          Share this page with its link. For content reuse, contact the Palace
          Secretariat.
        </p>
        <div className="article-related">
          <h2 className="subheading">Continue exploring</h2>
          {archiveEntries
            .filter((i) => i.category === e.category && i.slug !== e.slug)
            .slice(0, 3)
            .map((i) => (
              <Link
                className="related-story"
                key={i.slug}
                href={`/archive/${i.slug}`}
              >
                <span>{i.category}</span>
                <h3>{i.title}</h3>
                <span>→</span>
              </Link>
            ))}
        </div>
      </article>
    </div>
  );
}
