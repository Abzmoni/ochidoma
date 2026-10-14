import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "History & Culture · The Story of the Stool",
  description:
    "Explore the historical account and succession record preserved in the 2024 coronation anniversary programme.",
};
const reigns = [
  [
    "1947–1960",
    "Ogiri Oko",
    "Och’Idoma I",
    "The programme records his election on 15 August 1947 after service as district head of Adoka.",
  ],
  [
    "1960–1995",
    "Abraham Ajene Ukpabi",
    "Och’Idoma II",
    "The succession account describes his accession in March 1960 and his earlier work in district leadership and public service.",
  ],
  [
    "1995–1996",
    "Edwin Ogbu",
    "Och’Idoma III",
    "The programme records his election on 8 January 1995 following a career in administration and international diplomacy.",
  ],
  [
    "1996–2021",
    "Elias Ikoyi Obekpa",
    "Och’Idoma IV",
    "The account records his accession on 1 December 1996, following studies in business administration and a career in taxation.",
  ],
  [
    "Selected 2021 · Staff of office 2022",
    "Elaigwu Odogbo Obagaji John",
    "Och’Idoma V",
    "Selected on 30 December 2021 and presented with the staff of office on 30 June 2022, according to the anniversary programme.",
  ],
];
export default function History() {
  return (
    <>
      <section className="page-intro">
        <div className="palace-container">
          <span className="eyebrow">History & culture</span>
          <h1>
            Our roots run deep.
            <br />
            Our story continues.
          </h1>
          <p>
            Follow the history of the paramount stool and the wider institution
            that holds our communities together.
          </p>
          <div className="button-row">
            <a href="#succession" className="palace-button">
              Explore the succession ↓
            </a>
            <Link href="/archive" className="text-link">
              Visit the archive ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Origins & continuity</span>
            <h2>
              From community leadership
              <br />
              to a central stool.
            </h2>
          </div>
          <p>
            The 2024 programme relates an origin tradition connected to
            Kwararafa, then traces district administration and the establishment
            of the central stool in 1947.
          </p>
        </div>
        <div className="gateway-grid">
          {[
            [
              "1928",
              "District organisation",
              "The source describes 22 districts brought into a shared administrative structure.",
            ],
            [
              "Four zones",
              "A wider institution",
              "Ito, Iga-Okpaya, Utonkon and Ugbokolo appear in the programme’s account of zonal administration.",
            ],
            [
              "1947",
              "The paramount stool",
              "The central stool forms part of a wider institution of ranked chiefs and district heads.",
            ],
          ].map(([n, title, copy]) => (
            <article className="gateway" key={n}>
              <span className="eyebrow">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="succession" className="media-feature">
        <div className="palace-container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The succession record</span>
              <h2>Five chapters of leadership.</h2>
            </div>
            <Link href="/archive/history-of-the-stool" className="text-link">
              Read the source pages ↗
            </Link>
          </div>
          <div className="history-timeline">
            {reigns.map(([years, name, title, copy]) => (
              <article key={name}>
                <div className="timeline-date">{years}</div>
                <div>
                  <span className="eyebrow">{title}</span>
                  <h3>{name}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="small-note">
            Dates and summaries follow the 2024 programme. Its first reign dates
            and stated duration do not agree; the timeline preserves the printed
            dates without repeating the conflicting duration.
          </p>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="contact-band">
          <div>
            <span className="eyebrow">Culture, preserved in pictures</span>
            <h2>The life around the institution.</h2>
            <p>
              Explore the programme’s photographic record of ceremonies,
              cultural performance and palace gatherings.
            </p>
          </div>
          <Link href="/gallery" className="palace-button">
            Explore photographs →
          </Link>
        </div>
      </section>
    </>
  );
}
