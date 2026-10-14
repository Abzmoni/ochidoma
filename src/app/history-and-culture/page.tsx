import PageIntro from "@/components/PageIntro";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "History & Culture · The Story of the Stool",
  description:
    "Explore Idoma traditions of origin, local leadership and the history of the paramount stool.",
};
const reigns = [
  [
    "1947–1960",
    "Ogiri Oko",
    "Och’Idoma I",
    "Elected on 15 August 1947 after service as district head of Adoka.",
  ],
  [
    "1960–1995",
    "Abraham Ajene Ukpabi",
    "Och’Idoma II",
    "He acceded in March 1960 after earlier work in district leadership and public service.",
  ],
  [
    "1995–1996",
    "Edwin Ogbu",
    "Och’Idoma III",
    "Elected on 8 January 1995 following a career in administration and international diplomacy.",
  ],
  [
    "1996–2021",
    "Elias Ikoyi Obekpa",
    "Och’Idoma IV",
    "He acceded on 1 December 1996, following studies in business administration and a career in taxation.",
  ],
  [
    "Selected 2021 · Staff of office 2022",
    "Elaigwu Odogbo Obagaji John",
    "Och’Idoma V",
    "Selected on 30 December 2021 and presented with the staff of office on 30 June 2022.",
  ],
];
export default function History() {
  return (
    <>
      <PageIntro
        eyebrow="History & heritage"
        title="The story of the Idoma people."
        description="From traditions of origin and community leadership to the establishment of the paramount stool: explore the history that connects the palace and its people."
        imageIndex={1}
        links={[
          { label: "Our origins", href: "#origins" },
          { label: "The institution", href: "#institution" },
          { label: "The succession", href: "#succession" },
        ]}
      />
      <section
        id="origins"
        className="palace-container section-space heritage-story"
      >
        <aside className="heritage-contents">
          <span className="eyebrow">Explore our history</span>
          <a href="#origins">01 · Origins & belonging</a>
          <a href="#institution">02 · The traditional institution</a>
          <a href="#succession">03 · The paramount rulers</a>
          <a href="#living-heritage">04 · A living heritage</a>
          <Link href="/archive/history-of-the-stool" className="text-link">
            Heritage collection ↗
          </Link>
        </aside>
        <article className="heritage-narrative">
          <span className="eyebrow">01 / Origins & belonging</span>
          <h2>
            A people’s story begins
            <br />
            before a throne.
          </h2>
          <p className="heritage-lead">
            The history of the Idoma people is larger than the history of the
            palace. It includes the communities, traditions of origin and local
            institutions from which the modern paramount stool emerged.
          </p>
          <p>
            Idoma traditions of origin connect the people to Kwararafa. These
            accounts preserve a sense of belonging and ancestry, while the
            details of migration and early settlement remain part of a wider
            historical inquiry.
          </p>
          <p>
            Before a central Och’Idoma stool was established, leadership was
            rooted in local communities. A later administrative structure
            organised districts and zones. Understanding these local foundations
            helps explain why the traditional institution today includes many
            chiefs and community leaders alongside the paramount ruler.
          </p>
          <div className="heritage-pullquote">
            The palace is one chapter in the history of a people; the
            communities are where the story begins.
          </div>
          <p>
            Different communities carry their own histories. Community
            traditions, oral accounts and cultural practices all contribute to
            the wider story of the Idoma people.
          </p>
        </article>
      </section>
      <section id="institution" className="media-feature">
        <div className="palace-container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / The traditional institution</span>
              <h2>
                From local leadership
                <br />
                to a shared institution.
              </h2>
            </div>
            <p>
              The institution developed through district administration and the
              establishment of the central stool in 1947.
            </p>
          </div>
          <div className="heritage-chapters">
            <article>
              <span className="chapter-year">1928</span>
              <div>
                <h3>The district structure</h3>
                <p>
                  In 1928, 22 districts were grouped into a shared
                  administrative structure. District heads remained important
                  figures in the relationship between local communities and
                  wider administration.
                </p>
                <p>
                  This history helps place community leadership at the centre of
                  the institution’s development. The central stool did not erase
                  the local offices through which communities were represented.
                </p>
              </div>
            </article>
            <article>
              <span className="chapter-year">Four zones</span>
              <div>
                <h3>Connecting the communities</h3>
                <p>
                  Four zonal headquarters connected the districts: Ito in the
                  east, Iga-Okpaya in the north, Utonkon in the south and
                  Ugbokolo in the west. These served as intermediate centres in
                  the organisation of the districts.
                </p>
                <p>
                  Their inclusion shows how the story of the institution extends
                  beyond Otukpo and into the communities connected through these
                  administrative arrangements.
                </p>
              </div>
            </article>
            <article>
              <span className="chapter-year">1947</span>
              <div>
                <h3>The establishment of the central stool</h3>
                <p>
                  The central Och’Idoma stool was established in 1947. Ogiri
                  Oko, previously district head of Adoka, was elected on 15
                  August that year as the first Och’Idoma.
                </p>
                <p>
                  The paramount ruler is supported by first-, second- and
                  third-class chiefs and district heads. The council directory
                  reflects that wider institution, with the Council Secretary
                  also represented.
                </p>
                <Link href="/traditional-council" className="text-link">
                  Meet the council and its chiefs ↗
                </Link>
              </div>
            </article>
          </div>
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
              Explore related history ↗
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
        </div>
      </section>
      <section id="living-heritage" className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / A living heritage</span>
            <h2>History carried into the present.</h2>
          </div>
          <p>
            Palace life brings together ceremony, community recognition and the
            people who keep traditions alive.
          </p>
        </div>
        <div className="gateway-grid">
          <article className="gateway">
            <span className="eyebrow">Gathering together</span>
            <h3>Culture & ceremony</h3>
            <p>
              Traditional dance and musical interludes appear in the
              anniversary’s order of proceedings, alongside the royal address
              and chieftaincy conferments. They place cultural performance
              within the shared public life of the institution.
            </p>
            <Link href="/archive/anniversary-programme" className="text-link">
              Explore the occasion ↗
            </Link>
          </article>
          <article className="gateway">
            <span className="eyebrow">Service & remembrance</span>
            <h3>People who contribute</h3>
            <p>
              Community recognition celebrates work in medicine, education,
              sport, enterprise and community development. These personal
              stories connect the ceremonial occasion to the everyday lives of
              communities.
            </p>
            <Link href="/archive#collection" className="text-link">
              Read the biographies ↗
            </Link>
          </article>
          <article className="gateway">
            <span className="eyebrow">The next chapter</span>
            <h3>Preserving our stories</h3>
            <p>
              Community histories and oral accounts can deepen this collection.
              The palace welcomes contact about historical documents, cultural
              knowledge and material that can help preserve the record.
            </p>
            <Link href="/contact" className="text-link">
              Contact the Secretariat ↗
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
