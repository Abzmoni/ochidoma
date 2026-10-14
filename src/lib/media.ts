import heroImg from "@/assets/images/hero-ochidoma-v.jpg";
import heritage1 from "@/assets/images/heritage-01.jpg";
import heritage2 from "@/assets/images/heritage-02.jpg";
import heritage3 from "@/assets/images/heritage-03.jpg";
import heritage4 from "@/assets/images/heritage-04.jpg";
import type { StaticImageData } from "next/image";
export const cdn = (url: string) =>
  !url.startsWith("http") || /=[\w-]+$/.test(url) ? url : `${url}=s0`;
export type LandingImage = { src: string | StaticImageData; tone: string };
export const heroImage: LandingImage = { src: heroImg, tone: "#2a1d16" };
export type HeritageImage = LandingImage & {
  n: string;
  label: string;
  alt: string;
  category: string;
};
export const heritageImages: HeritageImage[] = [
  {
    n: "01",
    label: "Royal Regalia",
    alt: "Illustrative royal portrait from the original design collection",
    src: heritage1,
    tone: "#4a371d",
    category: "Royal life",
  },
  {
    n: "02",
    label: "Palace Grounds",
    alt: "Palace building and landscaped grounds from the original design collection",
    src: heritage2,
    tone: "#5c1a1f",
    category: "Palace & heritage",
  },
  {
    n: "03",
    label: "Ceremonial Gathering",
    alt: "Traditional ruler surrounded by attendees in the original design collection",
    src: heritage3,
    tone: "#3b3026",
    category: "Culture & ceremonies",
  },
  {
    n: "04",
    label: "Palace Address",
    alt: "Seated traditional ruler speaking into a microphone in the original design collection",
    src: heritage4,
    tone: "#44301d",
    category: "Royal life",
  },
];
export const ogImage = {
  url: heroImg.src,
  width: heroImg.width,
  height: heroImg.height,
  alt: "Palace of the Och’Idoma · Original design artwork",
};
