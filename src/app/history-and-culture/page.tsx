import PageIntro from "@/components/PageIntro";
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
            Historical sources ↗
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
            The historical account in the 2024 anniversary programme connects
            Idoma origins to Kwararafa. This is presented here as a tradition of
            origin: an account of belonging and ancestry, rather than a precise,
            independently established migration chronology.
          </p>
          <p>
            Before a central Och’Idoma stool was established, leadership was
            rooted in local communities. The programme describes a later
            administrative structure of districts and zones. Understanding these
            local foundations helps explain why the traditional institution
            today includes many chiefs and community leaders alongside the
            paramount ruler.
          </p>
          <div className="heritage-pullquote">
            The palace is one chapter in the history of a people; the
            communities are where the story begins.
          </div>
          <p>
            Different communities carry their own histories. This account
            follows the material supplied for the palace archive; it is a
            starting point for a fuller record of community traditions, oral
            histories and cultural practice.
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
              The programme traces a progression from district administration to
              the central stool established in 1947.
            </p>
          </div>
          <div className="heritage-chapters">
            <article>
              <span className="chapter-year">1928</span>
              <div>
                <h3>The district structure</h3>
                <p>
                  The programme records the grouping of 22 districts into a
                  shared administrative structure in 1928. District heads
                  remained important figures in the relationship between local
                  communities and wider administration.
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
                  The historical account identifies four zonal headquarters: Ito
                  in the east, Iga-Okpaya in the north, Utonkon in the south and
                  Ugbokolo in the west. These appear in the programme as
                  intermediate centres in the organisation of the districts.
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
                  The central Och’Idoma stool was established in 1947, according
                  to the programme. Ogiri Oko, previously district head of
                  Adoka, was elected on 15 August that year as the first
                  Och’Idoma.
                </p>
                <p>
                  The programme describes the paramount ruler as supported by
                  first-, second- and third-class chiefs and district heads. The
                  council directory reflects that wider institution, with the
                  Council Secretary also represented.
                </p>
                <Link href="/traditional-council" className="text-link">
                  Meet the council and its chiefs ↗
                </Link>
              </div>
            </article>
          </div>
          <p className="small-note">
            Source: the historical-background pages of the Second Coronation
            Anniversary Programme, June 2024.{" "}
            <Link href="/archive/history-of-the-stool">
              Read the historical record →
            </Link>
          </p>
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
      <section id="living-heritage" className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / A living heritage</span>
            <h2>History carried into the present.</h2>
          </div>
          <p>
            The anniversary programme records more than officeholders. It brings
            together ceremony, community recognition and the people who
            participate in palace life.
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
              The programme’s citations recognise work in medicine, education,
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
