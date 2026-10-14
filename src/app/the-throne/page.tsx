import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { heritageImages } from "@/lib/media";
export const metadata: Metadata = {
  title: "The Och’Idoma & the Throne",
  description:
    "Discover the paramount stool and its place within the wider Idoma traditional institution.",
};
export default function TheThrone() {
  return (
    <>
      <section className="page-intro">
        <div className="palace-container">
          <span className="eyebrow">The paramount stool</span>
          <h1>
            A custodian of heritage.
            <br />A symbol of unity.
          </h1>
          <p>
            The office of the Och’Idoma sits at the heart of a wider traditional
            institution, connecting the palace, the chiefs and the people.
          </p>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="profile-layout">
          <div className="throne-photo">
            <Image
              src={heritageImages[0].src}
              alt={heritageImages[0].alt}
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
              className="object-cover"
            />
            <span className="photo-credit">Illustrative royal portrait</span>
          </div>
          <article>
            <span className="eyebrow">His Royal Majesty · Agaba’Idu</span>
            <h2 className="editorial-title">Och’Idoma V</h2>
            <p className="intro-copy">
              Elaigwu Odogbo Obagaji John, CON
              <br />
              Paramount ruler of the Idoma nation
            </p>
            <p>
              The Och’Idoma chairs the Idoma Area Traditional Council. Together
              with the chiefs and recognised community leaders, the institution
              represents a shared connection to the history, culture and
              communal life of the Idoma people.
            </p>
            <div className="profile-facts">
              <div>
                <span>Birth recorded in the biography</span>
                <strong>27 March 1969 · Obagaji, Agatu</strong>
              </div>
              <div>
                <span>Selection</span>
                <strong>30 December 2021</strong>
              </div>
              <div>
                <span>Staff of office</span>
                <strong>30 June 2022</strong>
              </div>
              <div>
                <span>The royal seat</span>
                <strong>Otukpo, Benue State, Nigeria</strong>
              </div>
              <div>
                <span>The traditional institution</span>
                <Link href="/traditional-council">
                  The Och’Idoma, chiefs & community leadership ↗
                </Link>
              </div>
            </div>
            <div className="button-row">
              <Link
                className="palace-button"
                href="/traditional-council/och-idoma-v"
              >
                View leadership profile ↗
              </Link>
              <Link className="text-link" href="/contact">
                Contact the Secretariat →
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section id="council" className="media-feature">
        <div className="palace-container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Leadership in every community</span>
              <h2>The throne and the council.</h2>
            </div>
            <p>
              Every class of traditional leadership deserves to be seen and
              understood.
            </p>
          </div>
          <div className="gateway-grid">
            {[
              "First class chiefs",
              "Second class chiefs",
              "Third class chiefs",
            ].map((title, i) => (
              <Link href="/traditional-council" className="gateway" key={title}>
                <span className="eyebrow">
                  0{i + 1} / Traditional leadership
                </span>
                <h3>{title}</h3>
                <p>
                  Explore the directory for dedicated profiles, community
                  information and updates from each office.
                </p>
                <span className="text-link">Explore the council ↗</span>
              </Link>
            ))}
          </div>
          <p className="small-note">
            Second-class and community-leadership names will be added when those
            rosters are supplied.
          </p>
        </div>
      </section>
      <section id="succession" className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Life before the throne</span>
            <h2>Education, service and community.</h2>
          </div>
          <p>
            The 2024 biography describes accounting studies at Ahmadu Bello
            University, postgraduate study, a career at the Federal Inland
            Revenue Service, consultancy and pastoral work before his selection.
          </p>
        </div>
        <div className="gateway-grid">
          <Link className="gateway" href="/archive/royal-biography">
            <span className="eyebrow">The royal biography</span>
            <h3>A life of service</h3>
            <p>
              Read the biographical account and its original programme pages.
            </p>
            <span className="text-link">Explore the biography ↗</span>
          </Link>
          <Link className="gateway" href="/archive/royal-household">
            <span className="eyebrow">The royal household</span>
            <h3>Her Royal Majesty</h3>
            <p>
              The programme introduces Agaba’anya Mrs. Omabo Elaigwu, wife of
              the Och’Idoma.
            </p>
            <span className="text-link">View the household record ↗</span>
          </Link>
          <Link className="gateway" href="/archive/anniversary-programme">
            <span className="eyebrow">29 June 2024</span>
            <h3>The second anniversary</h3>
            <p>
              Discover the programme, the traditional institution and the
              occasion’s citations.
            </p>
            <span className="text-link">Explore the celebration ↗</span>
          </Link>
        </div>
        <div className="contact-band">
          <div>
            <span className="eyebrow">Continuity & remembrance</span>
            <h2>The story of the stool.</h2>
            <p>
              Follow five chapters of leadership, from the establishment of the
              central stool in 1947 to the record preserved in the 2024
              programme.
            </p>
          </div>
          <Link className="palace-button" href="/history-and-culture">
            History & culture ↗
          </Link>
        </div>
      </section>
    </>
  );
}
