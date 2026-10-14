import PageIntro from "@/components/PageIntro";
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
      <PageIntro
        eyebrow="The traditional council"
        title="The people behind the institution."
        description="Meet the Och’Idoma, the Council Secretary and the chiefs who represent our communities."
        imageIndex={2}
        links={[
          { label: "Leadership directory", href: "#directory" },
          { label: "The paramount stool", href: "/the-throne" },
        ]}
      />
      <section id="directory" className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Leadership directory</span>
            <h2>Meet the traditional institution</h2>
          </div>
          <p>Discover each office, its communities and its story.</p>
        </div>
        <div className="editorial-note">
          Chief profiles follow the June 2024 anniversary programme. The Council
          Secretary’s name and title have been confirmed separately. The
          historical roster is not a current appointments register. Second-class
          and community leadership rosters were not included in the supplied
          pages.
        </div>
        <LeadershipDirectory />
      </section>
    </>
  );
}
