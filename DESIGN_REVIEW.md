# Palace prototype design review

The redesign shifts the portal from a single-ruler presentation to the palace, the traditional council and the communities they represent. Ivory, burgundy and muted gold, consistent editorial headings, restrained borders and generous spacing now connect the homepage, throne, leadership directory, news and media pages. Shared navigation and the footer link the existing heritage, diaspora, giving and contact pages into that structure.

Implemented:

- Searchable leadership directory with class filters, useful empty states and separate profile routes. First, second and third class chiefs and community leadership use clearly labelled previews pending the approved roster.
- A shared news dataset, category/search/sort controls, distinct article routes, related stories, page-specific metadata and native sharing with a copy-link fallback. Unknown slugs return 404.
- Photo categories and a native modal viewer with arrow-key navigation, Escape dismissal and restored focus. Video cards support native playback, posters, captions and transcripts once approved footage is supplied. No sample footage is presented as palace video.
- Copy, context-menu and image-drag deterrents for main content; a print permission notice. Inputs and intentional sharing remain usable. These are browser-level deterrents: screenshots, source access and determined extraction cannot be prevented for public content. The visible gallery attribution is an overlay, not a watermark embedded in the original files.
- Removed the non-submitting newsletter form and simulated media-request confirmations from the redesigned footer and gallery.

Content handoff:

- `src/lib/leadership.ts`: add one approved record per chief, with a unique slug, class, title, community and biography. The directory and individual profile routes update together. Portraits and richer chief-specific media can be wired in after the assets arrive; previews currently use the palace crest.
- `src/lib/news.ts`: replace sample stories with approved reports; the article body currently uses the supplied excerpt and an explicit prototype notice.
- `src/lib/videos.ts`: add approved MP4 sources, posters, English WebVTT captions and transcripts. The video section shows an honest empty state until then.
- `src/lib/media.ts`: replace retained prototype images with approved assets; captions now describe the actual local images.
- Existing contact, diaspora and giving forms remain prototype flows, not production submissions or payments. This design pass does not add a CMS, newsletter service or publishing backend.

Reference used to cross-check the general institution: [Federal ACReSAL Benue profile](https://acresal.gov.ng/states/benue/) describes the paramount, first-class and second-class structure. No unverified current chief roster was imported. The user will supply the detailed roster later.

Validation: production build and TypeScript pass. Browser verification is in `scripts/check-palace-design.cjs`; screenshots and results are written to ignored `artifacts/design-review/`. Run against `npm run start -- --port 3100` with Playwright and Chrome available. Full-repository lint initially reported existing errors in the two image-fetch helper scripts and the heritage countdown; changed components are checked separately.

Final verification: 90 browser checks passed across 320, 390, 1024 and 1440 pixel viewports with no browser exceptions. Build and TypeScript pass; lint of changed application files and the browser check script passes. Full-repository lint still has the pre-existing helper/countdown errors described above. The icon font is now hosted locally with its Apache license, removing a failing external stylesheet dependency. A branded 404 provides routes back into the site. Local preview: http://localhost:3100 (not deployed).
