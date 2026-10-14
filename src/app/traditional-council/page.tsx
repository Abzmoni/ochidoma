import type { Metadata } from "next";
import Link from "next/link";
import LeadershipDirectory from "@/components/LeadershipDirectory";
export const metadata: Metadata = {
  title: "Traditional Council & Chiefs",
  description:
    "Meet the Och’Idoma, Council Secretary and the chiefs of the traditional institution.",
};
export default function CouncilPage() {
  return (
    <>
      <header className="compact-heading">
        <div className="palace-container">
          <nav className="intro-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Traditional council</span>
          </nav>
          <h1>Traditional council & chiefs</h1>
          <p>
            The Och’Idoma, Council Secretary and the leaders of our communities.
          </p>
        </div>
      </header>
      <section id="directory" className="palace-container compact-content">
        <LeadershipDirectory />
        <details className="directory-context">
          <summary>About this directory</summary>
          <p>
            Chief profiles include historical officeholder records and may not
            reflect recent appointments. The Secretary’s name and title have
            been confirmed separately. Second-class and community leadership
            profiles will be added as details become available.
          </p>
          <Link href="/contact" className="text-link">
            Request an update →
          </Link>
        </details>
      </section>
    </>
  );
}
