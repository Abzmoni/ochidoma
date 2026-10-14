import type { Metadata } from "next";
import Link from "next/link";
import ArchiveLibrary from "@/components/ArchiveLibrary";
export const metadata: Metadata = {
  title: "Heritage Collection",
  description:
    "Historical biographies, the traditional institution and community contributions.",
};
export default function Archive() {
  return (
    <>
      <header className="compact-heading">
        <div className="palace-container">
          <nav className="intro-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Heritage collection</span>
          </nav>
          <h1>Heritage collection</h1>
          <p>
            Historical profiles, milestones and the people who have shaped our
            communities.
          </p>
          <Link className="text-link" href="/news">
            For current announcements, visit News & stories →
          </Link>
        </div>
      </header>
      <section id="collection" className="palace-container compact-content">
        <ArchiveLibrary />
      </section>
    </>
  );
}
