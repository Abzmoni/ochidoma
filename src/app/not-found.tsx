import Link from "next/link";
export default function NotFound() {
  return (
    <section className="palace-container section-space">
      <div className="empty-state">
        <span className="eyebrow">Page not found · 404</span>
        <h1 className="editorial-title">Let’s find your way back.</h1>
        <p>
          This story or profile is not available. Explore the journal or return
          to the traditional council.
        </p>
        <div className="button-row">
          <Link className="palace-button" href="/">
            Return to the palace
          </Link>
          <Link className="palace-button secondary" href="/traditional-council">
            Explore the council
          </Link>
          <Link className="palace-button secondary" href="/news">
            Read the journal
          </Link>
        </div>
      </div>
    </section>
  );
}
