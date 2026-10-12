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
          The directory structure is ready. Chief profiles marked “preview”
          await names, titles, territories and portraits approved by the Palace
          Secretariat.
        </div>
        <LeadershipDirectory />
      </section>
    </>
  );
}
