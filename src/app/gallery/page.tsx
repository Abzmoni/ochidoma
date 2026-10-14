"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { heritageImages } from "@/lib/media";
import { palaceVideos } from "@/lib/videos";

export default function Gallery() {
  const [filter, setFilter] = useState("All photographs");
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const photos = heritageImages;
  const visible = photos.filter(
    (photo) => filter === "All photographs" || photo.category === filter,
  );
  function openPhoto(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }
  function step(direction: number) {
    setSelected(
      (index) => (index + direction + visible.length) % visible.length,
    );
  }
  const active = visible[selected];
  return (
    <>
      <section className="page-intro">
        <div className="palace-container">
          <span className="eyebrow">The palace media library</span>
          <h1>
            Our heritage.
            <br />
            Seen, heard, remembered.
          </h1>
          <p>
            A place for photographs, royal addresses, cultural ceremonies and
            the voices of our communities.
          </p>
          <div className="button-row">
            <a className="palace-button" href="#photographs">
              Explore photographs ↓
            </a>
            <a className="palace-button secondary" href="#videos">
              Explore videos ↓
            </a>
          </div>
        </div>
      </section>
      <section id="photographs" className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">The photographic collection</span>
            <h2>Stories in every frame.</h2>
          </div>
          <p>Select a photograph to explore the collection.</p>
        </div>
        <div className="editorial-note">
          From the 2024 programme · These are photographs of printed album
          pages. Scenes are not individually dated or captioned; no identities
          have been inferred.
        </div>
        <div className="filter-pills" aria-label="Filter photographs">
          {[
            "All photographs",
            "Royal life",
            "Palace gatherings",
            "Culture & ceremonies",
          ].map((item) => (
            <button
              aria-pressed={filter === item}
              key={item}
              onClick={() => {
                setFilter(item);
                setSelected(0);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="small-note" role="status">
          {visible.length} album pages
        </p>
        <div className="photo-grid">
          {visible.map((photo, index) => (
            <button
              key={photo.n}
              className="photo-card"
              onClick={() => openPhoto(index)}
              aria-label={`View ${photo.label}`}
            >
              <div className="photo-frame">
                <Image
                  src={photo.src}
                  alt={`${photo.alt}`}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="object-contain"
                />
                <span className="photo-credit">2024 programme collection</span>
                <span className="photo-expand" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="photo-caption">
                <span className="eyebrow">{photo.category}</span>
                <strong>{photo.label}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>
      <section id="videos" className="media-feature">
        <div className="palace-container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Palace video</span>
              <h2>Hear the story. Feel the occasion.</h2>
            </div>
            <p>Royal addresses, cultural ceremonies and community voices.</p>
          </div>
          {palaceVideos.length ? (
            <div className="news-grid">
              {palaceVideos.map((video) => (
                <article key={video.id} className="story-card">
                  <video
                    controls
                    preload="none"
                    poster={video.poster}
                    controlsList="nodownload"
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    <track
                      kind="captions"
                      src={video.captions}
                      srcLang="en"
                      label="English"
                      default
                    />
                  </video>
                  <div className="card-body">
                    <span className="eyebrow">{video.category}</span>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <details>
                      <summary>Read transcript</summary>
                      <p>{video.transcript}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="video-empty">
              <span className="play-emblem" aria-hidden="true">
                ▷
              </span>
              <div>
                <span className="eyebrow">The next chapter is coming</span>
                <h3>A home for the palace’s moving stories.</h3>
                <p>
                  Ceremony films and royal addresses will appear here when
                  recordings are supplied. For now, explore the programme’s
                  photographic collection and historical records.
                </p>
                <div className="filter-pills">
                  <span>Royal addresses</span>
                  <span>Culture & ceremonies</span>
                  <span>Community voices</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="contact-band">
          <div>
            <span className="eyebrow">Respecting our cultural record</span>
            <h2>Share the story. Request permission to reuse.</h2>
            <p>
              For press enquiries, image licensing or publication requests,
              contact the Palace Secretariat.
            </p>
          </div>
          <Link className="palace-button" href="/contact">
            Media enquiries ↗
          </Link>
        </div>
      </section>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-labelledby="photo-dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        <div data-protected className="dialog-content">
          <button
            className="dialog-close"
            aria-label="Close photograph"
            onClick={() => dialog.current?.close()}
            autoFocus
          >
            ✕
          </button>
          {active && (
            <>
              <div className="dialog-photo">
                <Image
                  src={active.src}
                  alt={`${active.alt}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
                <span className="photo-credit">
                  2024 programme collection · Reuse by permission
                </span>
              </div>
              <div className="dialog-caption">
                <button
                  className="palace-button secondary"
                  aria-label="Previous photograph"
                  onClick={() => step(-1)}
                >
                  ←
                </button>
                <div>
                  <h2 id="photo-dialog-title">{active.label}</h2>
                  <p>
                    {selected + 1} of {visible.length} · Programme photograph
                  </p>
                </div>
                <button
                  className="palace-button secondary"
                  aria-label="Next photograph"
                  onClick={() => step(1)}
                >
                  →
                </button>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
