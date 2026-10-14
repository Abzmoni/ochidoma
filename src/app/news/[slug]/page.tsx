import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notices } from "@/lib/news";
import ShareLink from "@/components/ShareLink";
export function generateStaticParams() {
  return notices.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = notices.find((item) => item.slug === slug);
  return {
    title: item?.title ?? "Story not found",
    description: item?.excerpt,
    openGraph: {
      title: item?.title,
      description: item?.excerpt,
      type: "article",
    },
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = notices.find((item) => item.slug === slug);
  if (!item) notFound();
  return (
    <div className="palace-container section-space">
      <Link href="/news" className="text-link">
        ← Back to the palace journal
      </Link>
      <article className="article-layout">
        <header>
          <span className="eyebrow">{item.categoryLabel} · 2024 record</span>
          <h1 className="editorial-title">{item.title}</h1>
          <p className="small-note">
            {item.date} · {item.source}
          </p>
        </header>
        <div className="article-image">
          <Image
            src={item.image}
            alt="Illustrative palace imagery"
            fill
            sizes="(max-width: 900px) 100vw, 850px"
            className="object-cover"
          />
          <span className="photo-credit">Illustrative palace imagery</span>
        </div>
        <p className="intro-copy">{item.excerpt}</p>
        {item.body.map((paragraph) => (
          <p className="article-paragraph" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <div className="editorial-note">
          Historical summary based on the supplied programme. Offices and
          scheduled activities reflect the 2024 publication.
        </div>
        <div className="button-row">
          <Link className="palace-button" href={`/archive/${item.sourceId}`}>
            Read the source record ↗
          </Link>
          <Link className="text-link" href="/archive#collection">
            Browse the complete archive →
          </Link>
        </div>
        <ShareLink title={item.title} />
        <div className="article-related">
          <h2 className="subheading">Continue reading</h2>
          {notices
            .filter((other) => other.slug !== slug)
            .slice(0, 2)
            .map((other) => (
              <Link
                className="related-story"
                key={other.slug}
                href={`/news/${other.slug}`}
              >
                <span>{other.categoryLabel}</span>
                <h3>{other.title}</h3>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
        </div>
      </article>
    </div>
  );
}
