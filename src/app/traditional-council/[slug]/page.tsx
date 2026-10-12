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
  const leader = leaders.find((item) => item.slug === slug);
  return {
    title: leader ? `${leader.name} · ${leader.rank}` : "Profile not found",
  };
}
export default async function LeaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leader = leaders.find((item) => item.slug === slug);
  if (!leader) notFound();
  return (
    <div className="palace-container section-space">
      <Link className="text-link" href="/traditional-council">
        ← All traditional leaders
      </Link>
      <div className="profile-layout">
        <aside className="profile-seal">
          <RoyalCrest className="w-36 h-36" />
          <span className="eyebrow">{leader.rank}</span>
          <p>
            {leader.confirmed
              ? "The paramount stool"
              : "Official portrait pending"}
          </p>
        </aside>
        <article>
          <span className="eyebrow">{leader.title}</span>
          <h1 className="editorial-title">{leader.name}</h1>
          <p className="intro-copy">{leader.community}</p>
          {!leader.confirmed && (
            <div className="editorial-note">
              Profile preview · This is a page template, not an identified
              officeholder. Approved details will replace this entry.
            </div>
          )}
          <h2 className="subheading">About the office</h2>
          <p>{leader.biography}</p>
          <div className="profile-facts">
            <div>
              <span>Classification</span>
              <strong>{leader.rank}</strong>
            </div>
            <div>
              <span>Office & community enquiries</span>
              <Link href="/contact">Contact the Palace Secretariat ↗</Link>
            </div>
          </div>
          <h2 className="subheading">News & engagements</h2>
          <p className="small-note">
            No approved announcements have been added to this profile yet.
          </p>
          <h2 className="subheading">Photographs & videos</h2>
          <p className="small-note">
            Media from this office will appear here once approved for
            publication.
          </p>
          <div className="button-row">
            <Link
              className="palace-button"
              href={leader.confirmed ? "/the-throne" : "/traditional-council"}
            >
              {leader.confirmed ? "Explore the throne" : "Explore the council"}{" "}
              →
            </Link>
            <ShareLink title={leader.name} />
          </div>
        </article>
      </div>
    </div>
  );
}
