import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArchiveLibrary from "@/components/ArchiveLibrary";
import { heritageImages } from "@/lib/media";
export const metadata: Metadata = {
  title: "Palace Archive · Coronation Anniversary 2024",
  description:
    "Explore the 2024 anniversary programme, traditional leadership, historical records, citations and photographs.",
};
export default function Archive() {
  return (
    <>
      <section className="page-intro">
        <div className="palace-container">
          <span className="eyebrow">The palace archive · Collection 01</span>
          <h1>
            A record of our people.
            <br />A legacy to remember.
          </h1>
          <p>
            Discover the names, stories and photographs preserved in the second
            coronation anniversary programme.
          </p>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="archive-feature">
          <div className="archive-cover">
            <Image
              src={heritageImages[0].src}
              alt={heritageImages[0].alt}
              width={960}
              height={1280}
              priority
            />
          </div>
          <div>
            <span className="eyebrow">29 June 2024 · Otukpo</span>
            <h2 className="editorial-title">
              Two years.
              <br />
              One shared celebration.
            </h2>
            <p className="intro-copy">
              The anniversary of His Royal Majesty Agaba-Idu Dr. Elaigwu Odogbo
              Obagaji John, CON, Och’Idoma V.
            </p>
            <p>
              The programme brings together the traditional institution, royal
              history, community service and the people recognised on this
              occasion.
            </p>
            <div className="button-row">
              <Link
                href="/archive/anniversary-programme"
                className="palace-button"
              >
                Explore the programme →
              </Link>
              <a href="#collection" className="text-link">
                Browse all records ↓
              </a>
            </div>
            <p className="small-note">
              Historical collection · Names, offices and achievements reflect
              the 2024 publication. Photographs of printed pages may contain
              glare or incomplete text.
            </p>
          </div>
        </div>
      </section>
      <section id="collection" className="media-feature">
        <div className="palace-container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Read · Discover · Remember</span>
              <h2>Inside the collection.</h2>
            </div>
            <Link href="/traditional-council" className="text-link">
              Explore the chiefs directory ↗
            </Link>
          </div>
          <ArchiveLibrary />
        </div>
      </section>
    </>
  );
}
