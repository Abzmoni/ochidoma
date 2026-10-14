"use client";
import { useState } from "react";
import RoyalCrest from "@/components/RoyalCrest";
import Link from "next/link";
import { archiveEntries } from "@/lib/archive";
export default function ArchiveLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All records");
  const results = archiveEntries.filter(
    (e) =>
      (category === "All records" || category === e.category) &&
      `${e.title} ${e.summary}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="filter-bar">
        <label className="search-field">
          Search the collection
          <input
            type="search"
            placeholder="Try a name, community or subject…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label className="search-field">
          Record type
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {[
              "All records",
              ...new Set(archiveEntries.map((e) => e.category)),
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <p role="status" className="small-note">
        {results.length} historical profiles and records
      </p>
      <div className="archive-grid">
        {results.map((e) => (
          <Link
            href={`/archive/${e.slug}`}
            key={e.slug}
            className="archive-card"
          >
            <div className="archive-record-mark" aria-hidden="true">
              <RoyalCrest className="w-12 h-12" />
              <span>{e.category}</span>
            </div>
            <div className="card-body">
              <span className="eyebrow">{e.category}</span>
              <h2>{e.title}</h2>
              <p>{e.summary}</p>
              <span className="text-link">Read more ↗</span>
            </div>
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>No matching records</h2>
          <p>Try another name or subject.</p>
          <button
            className="palace-button"
            onClick={() => {
              setQuery("");
              setCategory("All records");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
