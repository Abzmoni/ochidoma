"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { notices } from "@/lib/news";
export default function News() {
  const [category, setCategory] = useState("All stories");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("newest");
  const [section, setSection] = useState("Stories");
  const categories = [
    "All stories",
    ...new Set(notices.map((i) => i.categoryLabel)),
  ];
  const results = notices
    .filter(
      (i) =>
        (category === "All stories" || i.categoryLabel === category) &&
        `${i.title} ${i.excerpt}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    )
    .sort(
      (a, b) =>
        (order === "newest" ? 1 : -1) *
        (Date.parse(b.date) - Date.parse(a.date)),
    );
  return (
    <>
      <header className="compact-heading">
        <div className="palace-container">
          <nav className="intro-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>News & stories</span>
          </nav>
          <h1>News & stories</h1>
          <p>
            Palace announcements, community stories and moments from our
            history.
          </p>
        </div>
      </header>
      <section className="palace-container compact-content">
        <div className="news-sections" aria-label="Content type">
          {["Stories", "Announcements"].map((s) => (
            <button
              key={s}
              aria-pressed={section === s}
              onClick={() => setSection(s)}
            >
              {s}
            </button>
          ))}
          <Link href="/archive">Heritage collection ↗</Link>
        </div>
        {section === "Announcements" ? (
          <div className="empty-state">
            <h2>No current announcements</h2>
            <p>New notices from the Palace Secretariat will appear here.</p>
            <button
              className="palace-button"
              onClick={() => setSection("Stories")}
            >
              Explore stories
            </button>
          </div>
        ) : (
          <>
            <details className="news-filters">
              <summary>
                Search & filter stories
                {query || category !== "All stories" ? " · Filters active" : ""}
              </summary>
              <div className="filter-bar">
                <label className="search-field">
                  Search stories
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search names, places or topics…"
                  />
                </label>
                <label className="search-field">
                  Sort stories
                  <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </label>
              </div>
              <div className="filter-pills" aria-label="Filter stories">
                {categories.map((c) => (
                  <button
                    key={c}
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </details>
            <p className="small-note" role="status">
              {results.length} {results.length === 1 ? "story" : "stories"} ·
              Past events retain their original dates.
            </p>
            <div className="news-grid">
              {results.map((i) => (
                <article className="story-card" key={i.slug}>
                  <Link href={`/news/${i.slug}`} className="story-image">
                    <Image
                      src={i.image}
                      alt="Illustrative palace imagery"
                      fill
                      sizes="(max-width:760px) 100vw,33vw"
                      className="object-cover"
                    />
                  </Link>
                  <div className="card-body">
                    <span className="eyebrow">{i.categoryLabel}</span>
                    <h2>
                      <Link href={`/news/${i.slug}`}>{i.title}</Link>
                    </h2>
                    <p>{i.excerpt}</p>
                    <p className="small-note">{i.date}</p>
                    <Link className="text-link" href={`/news/${i.slug}`}>
                      Read story →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {!results.length && (
              <div className="empty-state">
                <h2>No stories found</h2>
                <button
                  className="palace-button"
                  onClick={() => {
                    setQuery("");
                    setCategory("All stories");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
