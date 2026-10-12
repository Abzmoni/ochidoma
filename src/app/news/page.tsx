"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { notices } from "@/lib/news";
export default function News() {
  const [category, setCategory] = useState("All news");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("newest");
  const categories = [
    "All news",
    ...new Set(notices.map((item) => item.categoryLabel)),
  ];
  const results = notices
    .filter(
      (item) =>
        (category === "All news" || category === item.categoryLabel) &&
        `${item.title} ${item.excerpt}`
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
      <section className="page-intro">
        <div className="palace-container">
          <span className="eyebrow">The palace journal</span>
          <h1>
            Stories from the palace.
            <br />
            News for our people.
          </h1>
          <p>
            Royal statements, community developments and cultural gatherings.
            Stay close to the life of the traditional institution.
          </p>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="editorial-note">
          Design preview · These sample stories demonstrate the news experience
          and await palace editorial approval.
        </div>
        <div className="filter-bar">
          <label className="search-field">
            Search the journal
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories and announcements…"
            />
          </label>
          <label className="search-field">
            Sort stories
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>
        <div className="filter-pills" aria-label="Filter news">
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="small-note" role="status">
          {results.length} {results.length === 1 ? "story" : "stories"} found
        </p>
        <div className="news-grid">
          {results.map((item) => (
            <article className="story-card" key={item.slug}>
              <Link href={`/news/${item.slug}`} className="story-image">
                <Image
                  src={item.image}
                  alt="Illustrative sample story photograph"
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className="object-cover"
                />
              </Link>
              <div className="card-body">
                <span className="eyebrow">{item.categoryLabel}</span>
                <h2>
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.excerpt}</p>
                <p className="small-note">{item.date}</p>
                <Link className="text-link" href={`/news/${item.slug}`}>
                  Read story →
                </Link>
              </div>
            </article>
          ))}
        </div>
        {!results.length && (
          <div className="empty-state">
            <h2>No stories found</h2>
            <p>Try a different search or category.</p>
            <button
              className="palace-button"
              onClick={() => {
                setQuery("");
                setCategory("All news");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
