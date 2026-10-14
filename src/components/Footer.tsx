import Link from "next/link";
import RoyalCrest from "./RoyalCrest";
const columns = [
  {
    title: "The institution",
    links: [
      ["The Och’Idoma", "/the-throne"],
      ["Traditional council & chiefs", "/traditional-council"],
      ["History & culture", "/history-and-culture"],
      ["Heritage collection", "/archive"],
    ],
  },
  {
    title: "News & stories",
    links: [
      ["News & stories", "/news"],
      ["Photo stories", "/gallery#photographs"],
      ["Videos & addresses", "/gallery#videos"],
    ],
  },
  {
    title: "Our community",
    links: [
      ["Idoma diaspora", "/diaspora"],
      ["Support our heritage", "/giving"],
      ["Contact the palace", "/contact"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="palace-footer">
      <div className="idoma-weave h-[5px]" />
      <div className="palace-container">
        <div className="footer-top">
          <div className="footer-brand">
            <RoyalCrest className="w-14 h-14" />
            <div>
              <h2>Palace of the Och’Idoma</h2>
              <p>The palace. The council. The people.</p>
            </div>
          </div>
          <Link className="footer-contact" href="/contact">
            Connect with the Secretariat ↗
          </Link>
        </div>
        <div className="footer-columns">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              {column.links.map(([label, href]) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          ))}
          <div>
            <h3>Rooted in Idoma. Open to the world.</h3>
            <p>Otukpo, Benue State, Nigeria.</p>
            <p>Follow palace news and share page links with your community.</p>
            <Link className="footer-contact" href="/news">
              News & stories →
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Palace of the Och’Idoma. All rights
            reserved.
          </p>
          <p>Content and media reuse by permission.</p>
        </div>
      </div>
    </footer>
  );
}
