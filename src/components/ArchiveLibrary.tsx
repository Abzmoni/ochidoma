"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { archiveEntries, archiveImage } from "@/lib/archive";
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
        {results.length} records · June 2024 collection
      </p>
      <div className="archive-grid">
        {results.map((e) => (
          <Link
            href={`/archive/${e.slug}`}
            key={e.slug}
            className="archive-card"
          >
            <div className="archive-thumb">
              <Image
                src={archiveImage(e.images[0])}
                alt={`Printed programme page: ${e.title}`}
                fill
                sizes="(max-width:760px) 45vw, 25vw"
                className="object-contain"
              />
            </div>
            <div className="card-body">
              <span className="eyebrow">{e.category}</span>
              <h2>{e.title}</h2>
              <p>{e.summary}</p>
              <span className="text-link">
                Read record · {e.images.length}{" "}
                {e.images.length === 1 ? "page" : "pages"} ↗
              </span>
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
