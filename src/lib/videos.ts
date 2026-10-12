export type PalaceVideo = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  captions: string;
  transcript: string;
  category: "Royal addresses" | "Culture & ceremonies" | "Community voices";
};
// Add palace-approved videos and WebVTT captions here. Empty by design: no footage was supplied.
export const palaceVideos: PalaceVideo[] = [];
