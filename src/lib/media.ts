import heroImg from "@/assets/images/hero-ochidoma-v.jpg";
import type { StaticImageData } from "next/image";
import { archiveImage } from "@/lib/archive";
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
    label: "The royal biography",
    alt: "Printed biography and portrait of Och’Idoma V in the 2024 programme",
    src: archiveImage(1),
    tone: "#e8dfd1",
    category: "Royal life",
  },
  {
    n: "02",
    label: "Culture & community",
    alt: "A printed photographic spread showing cultural performance and community gatherings",
    src: archiveImage(31),
    tone: "#e8dfd1",
    category: "Culture & ceremonies",
  },
  {
    n: "03",
    label: "Palace audiences",
    alt: "A printed collage of palace audiences and ceremonial gatherings",
    src: archiveImage(28),
    tone: "#e8dfd1",
    category: "Palace gatherings",
  },
  {
    n: "04",
    label: "Royal life in the album",
    alt: "Photographs of royal and family occasions reproduced in the programme",
    src: archiveImage(35),
    tone: "#e8dfd1",
    category: "Royal life",
  },
  {
    n: "05",
    label: "Gatherings & engagements",
    alt: "A photographic spread of palace engagements in the anniversary programme",
    src: archiveImage(29),
    tone: "#e8dfd1",
    category: "Palace gatherings",
  },
  {
    n: "06",
    label: "Ceremonial occasions",
    alt: "Printed photographs of ceremonial and worship occasions",
    src: archiveImage(30),
    tone: "#e8dfd1",
    category: "Culture & ceremonies",
  },
];
export const ogImage = {
  url: archiveImage(18),
  width: 960,
  height: 1280,
  alt: "Second coronation anniversary programme of Och’Idoma V, June 2024",
};
