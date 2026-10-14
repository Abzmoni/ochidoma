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
      `${leader.name} ${leader.title} ${leader.community} ${leader.area} ${leader.rank}`
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
          Office or leadership class
          <select value={rank} onChange={(e) => setRank(e.target.value)}>
            {["All leadership", ...leadershipClasses].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="small-note" role="status">
        {results.length} {results.length === 1 ? "profile" : "profiles"} shown ·
        Historical chief records · Recent appointments may differ.
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
                {leader.rank === "Council Secretary"
                  ? "Council Secretariat"
                  : "Traditional leadership"}
              </span>
              <h2>{leader.name}</h2>
              <p>{leader.title}</p>
              <p className="small-note">
                {leader.community} · {leader.area}
              </p>
              <span className="text-link">
                View profile <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>
            {rank === "Second class" || rank === "Community leadership"
              ? "This part of the record is still to come"
              : "No matching profiles"}
          </h2>
          <p>
            {rank === "Second class" || rank === "Community leadership"
              ? "Names and profiles will be added as details are confirmed by the Palace Secretariat."
              : "Try another name, community or leadership class."}
          </p>
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
