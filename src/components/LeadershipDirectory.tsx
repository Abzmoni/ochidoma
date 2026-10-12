"use client";

import { useState } from "react";
import Link from "next/link";
import { leaders, leadershipClasses } from "@/lib/leadership";
import RoyalCrest from "./RoyalCrest";

export default function LeadershipDirectory() {
  const [rank, setRank] = useState("All leadership");
  const [query, setQuery] = useState("");
  const results = leaders.filter(
    (leader) =>
      (rank === "All leadership" || leader.rank === rank) &&
      `${leader.name} ${leader.title} ${leader.community} ${leader.rank}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="filter-bar">
        <label className="search-field">
          Find a leader or community
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search names, titles or communities…"
          />
        </label>
        <label className="search-field">
          Leadership class
          <select value={rank} onChange={(e) => setRank(e.target.value)}>
            {["All leadership", ...leadershipClasses].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="small-note" role="status">
        {results.length} {results.length === 1 ? "profile" : "profiles"} shown ·
        Preview entries are not an official roster.
      </p>
      <div className="leadership-grid">
        {results.map((leader) => (
          <Link
            className="leader-card"
            key={leader.slug}
            href={`/traditional-council/${leader.slug}`}
          >
            <div className="leader-symbol">
              <RoyalCrest className="w-16 h-16" />
              <span>{leader.rank}</span>
            </div>
            <div className="card-body">
              <span className="eyebrow">
                {leader.confirmed ? "The paramount stool" : "Profile preview"}
              </span>
              <h2>{leader.name}</h2>
              <p>{leader.title}</p>
              <p className="small-note">{leader.community}</p>
              <span className="text-link">
                View profile <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>No matching profiles</h2>
          <p>Try another name, community or leadership class.</p>
          <button
            className="palace-button secondary"
            onClick={() => {
              setQuery("");
              setRank("All leadership");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
