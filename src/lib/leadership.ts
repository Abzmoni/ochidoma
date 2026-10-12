export const leadershipClasses = [
  "Paramount ruler",
  "First class",
  "Second class",
  "Third class",
  "Community leadership",
] as const;
export type LeadershipClass = (typeof leadershipClasses)[number];
export type Leader = {
  slug: string;
  name: string;
  title: string;
  rank: LeadershipClass;
  community: string;
  biography: string;
  confirmed: boolean;
};

// Replace preview entries with the Secretariat's approved roster. Each record
// automatically gets its own searchable card, URL, metadata and profile page.
export const leaders: Leader[] = [
  {
    slug: "och-idoma-v",
    name: "Agaba’Idu Elaigwu Odogbo John",
    title: "Och’Idoma V",
    rank: "Paramount ruler",
    community: "Idoma nation · Otukpo",
    biography:
      "The Och’Idoma is the paramount ruler of the Idoma nation and chairman of the Idoma Area Traditional Council. This office sits within a wider traditional institution that includes first, second and third class chiefs and community leaders.",
    confirmed: true,
  },
  {
    slug: "first-class-profile-preview",
    name: "First class chief",
    title: "Chief’s profile preview",
    rank: "First class",
    community: "Territory awaiting confirmation",
    biography:
      "This dedicated profile will introduce the chief, the traditional title, the communities represented and the history of the office. The Palace Secretariat’s approved name, biography and portrait are required before publication.",
    confirmed: false,
  },
  {
    slug: "second-class-profile-preview",
    name: "Second class chief",
    title: "Chief’s profile preview",
    rank: "Second class",
    community: "Local area awaiting confirmation",
    biography:
      "A dedicated home for the chief’s biography, local traditional institution, community notices and ceremonial engagements. Officeholder details will be published after confirmation by the Palace Secretariat.",
    confirmed: false,
  },
  {
    slug: "third-class-profile-preview",
    name: "Third class chief",
    title: "Chief’s profile preview",
    rank: "Third class",
    community: "Community awaiting confirmation",
    biography:
      "This profile provides a place for the chief’s story, community history, photographs and announcements. Names, titles and areas of responsibility await the approved palace roster.",
    confirmed: false,
  },
  {
    slug: "community-leadership-preview",
    name: "District, ward & clan leaders",
    title: "Community profile preview",
    rank: "Community leadership",
    community: "Community awaiting confirmation",
    biography:
      "The directory also makes room for district and ward heads, clan and kindred heads, and other recognised title holders. Each approved officeholder can have an individual profile with their own community information.",
    confirmed: false,
  },
];
