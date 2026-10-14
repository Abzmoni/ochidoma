import type { Metadata } from "next";
import LeadershipDirectory from "@/components/LeadershipDirectory";

export const metadata: Metadata = {
  title: "Traditional Council & Chiefs",
  description:
    "Explore the Och’Idoma, first, second and third class chiefs, and community leadership.",
};
export default function CouncilPage() {
  return (
    <>
      <section className="page-intro">
        <div className="palace-container">
          <span className="eyebrow">Our traditional institution</span>
          <h1>
            Many custodians.
            <br />
            One shared heritage.
          </h1>
          <p>
            The Och’Idoma, first, second and third class chiefs, and community
            leaders all have a place in the story of our people.
          </p>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Leadership directory</span>
            <h2>Meet the traditional institution</h2>
          </div>
          <p>Discover each office, its communities and its story.</p>
        </div>
        <div className="editorial-note">
          Historical roster · 22 named profiles from the June 2024 anniversary
          programme. This is not a current appointments register. Second-class
          and community leadership rosters were not included in the supplied
          pages.
        </div>
        <LeadershipDirectory />
      </section>
    </>
  );
}
