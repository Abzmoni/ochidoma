import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { leaders } from "@/lib/leadership";
import RoyalCrest from "@/components/RoyalCrest";
import ShareLink from "@/components/ShareLink";
export function generateStaticParams() {
  return leaders.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = leaders.find((e) => e.slug === slug);
  return {
    title: l ? `${l.name} · ${l.rank}` : "Profile not found",
    description: l?.biography,
  };
}
export default async function LeaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = leaders.find((e) => e.slug === slug);
  if (!l) notFound();
  const peers = leaders.filter((e) => e.rank === l.rank && e.slug !== slug);
  return (
    <div className="palace-container section-space">
      <Link className="text-link" href="/traditional-council">
        ← All traditional leaders
      </Link>
      <div className="profile-layout">
        <aside className="profile-seal">
          <RoyalCrest className="w-36 h-36" />
          <span className="eyebrow">{l.rank}</span>
          <p>Idoma traditional institution</p>
          <span className="archive-badge">
            {l.rank === "Council Secretary"
              ? "Council Secretariat"
              : "Historical profile"}
          </span>
        </aside>
        <article>
          <span className="eyebrow">{l.title}</span>
          <h1 className="editorial-title">{l.name}</h1>
          <p className="intro-copy">{l.community}</p>
          <div className="editorial-note">
            {l.rank === "Council Secretary"
              ? "Council Secretariat · Full biography and official portrait to follow."
              : "Historical officeholder record. Contact the Palace Secretariat for current appointment information."}
          </div>
          <h2 className="subheading">
            {l.confirmed ? "About" : "About the office"}
          </h2>
          <p>{l.biography}</p>
          <div className="profile-facts">
            <div>
              <span>Classification</span>
              <strong>{l.rank}</strong>
            </div>
            <div>
              <span>Office / area</span>
              <strong>{l.area}</strong>
            </div>
            <div>
              <span>Community / territory</span>
              <strong>{l.community}</strong>
            </div>
          </div>
          <div className="button-row">
            {l.sourceId && (
              <Link className="palace-button" href={`/archive/${l.sourceId}`}>
                Explore related history ↗
              </Link>
            )}
            <ShareLink title={l.name} />
          </div>
          <h2 className="subheading">Office & community enquiries</h2>
          <p>
            For current information, biography updates or enquiries relating to
            this office, contact the Palace Secretariat.
          </p>
          <Link className="text-link" href="/contact">
            Contact the palace →
          </Link>
          {peers.length > 0 && (
            <div className="article-related">
              <h2 className="subheading">More {l.rank.toLowerCase()} chiefs</h2>
              {peers.slice(0, 3).map((e) => (
                <Link
                  className="related-story"
                  href={`/traditional-council/${e.slug}`}
                  key={e.slug}
                >
                  <span>{e.community}</span>
                  <h3>{e.name}</h3>
                  <span>→</span>
                </Link>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
