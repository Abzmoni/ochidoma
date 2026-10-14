import Image from "next/image";
import Link from "next/link";
import { heritageImages, heroImage } from "@/lib/media";
import { notices } from "@/lib/news";

export default function Home() {
  return (
    <>
      <section className="palace-hero">
        <Image
          src={heroImage.src}
          alt="Original palace design artwork"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 760px) 1400px, 100vw"
          className="object-cover"
        />
        <div className="palace-hero-shade" />
        <div className="palace-container hero-content">
          <span className="eyebrow">The palace · The council · The people</span>
          <h1>
            A living heritage.
            <br />A united people.
          </h1>
          <p>
            Welcome to the Palace of the Och’Idoma.
            <br />A home for our traditional institution, our culture
            <br className="desktop-break" /> and the stories that bring us
            together.
          </p>
          <div className="button-row">
            <Link href="/traditional-council" className="palace-button gold">
              Explore our leadership ↗
            </Link>
            <Link href="/news" className="hero-link">
              Explore the palace journal →
            </Link>
          </div>
          <div className="hero-caption">
            Idoma nation <span>Otukpo · Benue State · Nigeria</span>
          </div>
        </div>
        <div className="idoma-weave hero-weave" />
      </section>
      <div className="news-ribbon">
        <div className="palace-container">
          <span className="eyebrow">From the archive</span>
          <Link href={`/news/${notices[0].slug}`}>{notices[0].title} ↗</Link>
          <span className="ribbon-label">2024 archive</span>
        </div>
      </div>
      <section className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              Rooted in tradition. Connected today.
            </span>
            <h2>The palace belongs to a greater story.</h2>
          </div>
          <p>
            Meet the custodians of our heritage, follow the work of the
            traditional institution, and stay connected to community life.
          </p>
        </div>
        <div className="gateway-grid">
          {[
            {
              n: "01",
              title: "Our traditional leadership",
              text: "The Och’Idoma, first, second and third class chiefs, and the leaders closest to our communities.",
              href: "/traditional-council",
            },
            {
              n: "02",
              title: "News from the palace",
              text: "Statements, community announcements and cultural events, brought together in one place.",
              href: "/news",
            },
            {
              n: "03",
              title: "The palace archive",
              text: "Read the anniversary programme, biographies, historical records and the stories behind our institution.",
              href: "/archive",
            },
          ].map((item) => (
            <Link className="gateway" href={item.href} key={item.n}>
              <span className="eyebrow">{item.n} / Discover</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="text-link">Explore ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="council-feature">
        <div className="palace-container council-feature-grid">
          <div className="feature-photo">
            <Image
              src={heritageImages[2].src}
              alt={heritageImages[2].alt}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="photo-credit">Palace design collection</span>
          </div>
          <div className="feature-copy">
            <span className="eyebrow">A shared responsibility</span>
            <h2>
              One institution.
              <br />
              Every leader represented.
            </h2>
            <p>
              Beyond the paramount stool is a wider circle of traditional
              leadership. Discover the chiefs and community custodians who each
              have their own story to tell.
            </p>
            <div className="rank-list">
              {[
                "The Och’Idoma",
                "First class chiefs",
                "Second class chiefs",
                "Third class chiefs",
                "District, ward & clan leaders",
              ].map((rank, i) => (
                <div key={rank}>
                  <span>0{i + 1}</span>
                  {rank}
                </div>
              ))}
            </div>
            <Link href="/traditional-council" className="palace-button gold">
              Meet the traditional council ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">The palace journal</span>
            <h2>Stories from our archive.</h2>
          </div>
          <Link className="text-link" href="/news">
            All news & announcements ↗
          </Link>
        </div>
        <div className="news-grid">
          {notices.slice(0, 3).map((item) => (
            <article className="story-card" key={item.slug}>
              <Link href={`/news/${item.slug}`} className="story-image">
                <Image
                  src={item.image}
                  alt="Illustrative palace imagery"
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="image-label">2024 archive</span>
              </Link>
              <div className="card-body">
                <span className="eyebrow">{item.categoryLabel}</span>
                <h3>
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="small-note">{item.date}</p>
                <Link href={`/news/${item.slug}`} className="text-link">
                  Read story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="media-feature">
        <div className="palace-container section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">See. Listen. Belong.</span>
              <h2>A window into palace life.</h2>
            </div>
            <Link href="/gallery" className="text-link">
              Explore the media library ↗
            </Link>
          </div>
          <div className="media-home-grid">
            <Link href="/gallery#photographs" className="media-tile">
              <Image
                src={heritageImages[1].src}
                alt={heritageImages[1].alt}
                fill
                sizes="(max-width: 760px) 100vw, 60vw"
                className="object-cover"
              />
              <div>
                <span className="eyebrow">Photo stories</span>
                <h3>Details that carry our heritage.</h3>
                <span>Browse photographs ↗</span>
              </div>
            </Link>
            <Link href="/gallery#videos" className="video-promo">
              <span className="play-emblem" aria-hidden="true">
                ▷
              </span>
              <span className="eyebrow">Palace video</span>
              <h3>
                Our stories,
                <br />
                in motion.
              </h3>
              <p>
                A dedicated space for royal addresses, cultural events and
                community voices.
              </p>
              <span className="text-link">Visit the video library ↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="palace-container section-space">
        <div className="contact-band">
          <div>
            <span className="eyebrow">Stay connected to your roots</span>
            <h2>Near or far, you are part of the story.</h2>
            <p>
              Explore our heritage, connect with the diaspora or get in touch
              with the palace.
            </p>
          </div>
          <div className="button-row">
            <Link href="/diaspora" className="palace-button">
              Our global community ↗
            </Link>
            <Link href="/contact" className="text-link">
              Contact the palace →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
