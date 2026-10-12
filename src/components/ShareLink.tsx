"use client";

import { useState } from "react";

export default function ShareLink({ title }: { title: string }) {
  const [message, setMessage] = useState("");
  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        setMessage("Link copied. Share it with your community.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      setMessage(
        "Copy the page address from your browser to share this story.",
      );
    }
  }
  return (
    <div data-allow-copy>
      <button className="palace-button secondary" onClick={share}>
        Share this page ↗
      </button>
      <p role="status" className="small-note">
        {message}
      </p>
    </div>
  );
}
