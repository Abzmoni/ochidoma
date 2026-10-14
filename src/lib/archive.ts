export type ArchiveEntry = {
  slug: string;
  title: string;
  category: string;
  images: number[];
  summary: string;
};
export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "anniversary-programme",
    title: "The second coronation anniversary",
    category: "Programme",
    images: [18, 17, 6],
    summary:
      "The programme announces the second coronation anniversary for 29 June 2024 at 10:00 am at the Och’Idoma Palace, Otukpo. Its order of proceedings includes welcome remarks, cultural performances, the royal address, chieftaincy conferments, goodwill messages and closing prayers.",
  },
  {
    slug: "royal-biography",
    title: "The life of Och’Idoma V",
    category: "The institution",
    images: [1, 4],
    summary:
      "Born in Obagaji, Agatu, in 1969, Elaigwu Odogbo Obagaji John pursued accounting and finance, worked in taxation and consultancy, and served as a pastor before his selection in December 2021. These pages record his education, career and family life as presented in 2024.",
  },
  {
    slug: "history-of-the-stool",
    title: "The history of the paramount stool",
    category: "The institution",
    images: [5, 2],
    summary:
      "The programme traces the institution through district administration, the establishment of the central stool in 1947 and five successive Och’Idoma reigns. Its account places the paramount ruler within an institution of first, second and third class chiefs and district heads.",
  },
  {
    slug: "first-class-chiefs",
    title: "First class chiefs",
    category: "The institution",
    images: [7],
    summary:
      "Four named chiefs and their printed portraits: George Edeh, Ogah Ero, Agangwu Baba Odangala and Emmanuel Okochi. The directory uses the names and titles printed on this page.",
  },
  {
    slug: "third-class-chiefs",
    title: "Third class chiefs",
    category: "The institution",
    images: [9],
    summary:
      "Seventeen names are listed across Apa, Agatu, Ohimini, Okpokwu, Ogbadibo, Ado, Obi, Oju and Otukpo. Jerry Ochola’s entry is marked Acting. This is the programme’s 2024 record, not a confirmation of present appointments.",
  },
  {
    slug: "royal-household",
    title: "The royal household",
    category: "The institution",
    images: [10],
    summary:
      "A printed portrait caption identifies Her Royal Majesty Agaba’anya Mrs. Omabo Elaigwu as wife of the Och’Idoma.",
  },
  {
    slug: "planning-committee",
    title: "The people behind the anniversary",
    category: "Programme",
    images: [24, 21],
    summary:
      "The Central Planning Committee is chaired by HRH Emmanuel Okochi. The programme lists 21 committee members, with Pst. Adole Ejah, PhD, as planning-committee secretary, and includes the committee’s message of appreciation. Council Secretary Dr. Adegbe Uloko also appears in the programme’s committee list. The planning-committee role and Council Secretary are separate offices.",
  },
  {
    slug: "palace-in-pictures",
    title: "Palace life in pictures",
    category: "Photographs",
    images: [28, 29, 30, 31, 35],
    summary:
      "Five photographic spreads record ceremonial gatherings, palace audiences, cultural performances and royal life. Individual scenes are undated and most people are not captioned, so they are presented as booklet photographs without inferred identities.",
  },
  {
    slug: "silas-ochejele",
    title: "Professor Silas Ochejele",
    category: "Citations",
    images: [37, 36],
    summary:
      "An obstetrician and gynaecologist from Agatu, Ochejele is recognised in the programme for medical service, maternal-health outreach and community development. The citation records his appointment as pioneer acting Chief Medical Director of the Federal University of Health Sciences Teaching Hospital, Otukpo, in April 2023.",
  },
  {
    slug: "aminu-suleiman",
    title: "Aminu Suleiman",
    category: "Citations",
    images: [38, 41],
    summary:
      "The programme describes Suleiman’s education in quantity surveying, business work in petroleum and investment, and public service. This citation is preserved as a 2024 biographical account.",
  },
  {
    slug: "michael-oglegba",
    title: "Hon. Michael Oglegba",
    category: "Citations",
    images: [39],
    summary:
      "The citation describes a career in finance, technology and agriculture, together with education, scholarship and ICT initiatives. It identifies Oglegba with Adim Akpa, Otukpo, and records his finance and economic planning portfolio at the time of publication.",
  },
  {
    slug: "patrick-olonta",
    title: "Captain Patrick Agwo Olonta",
    category: "Citations",
    images: [42, 40],
    summary:
      "The programme follows Olonta’s aviation training and career through Sky Power, Dornier, Bristow and Air Peace. It also describes contributions to education, water and electricity in Ochaigede, Agadagba, Ohimini.",
  },
  {
    slug: "paul-edeh",
    title: "Paul Samuel Edeh",
    category: "Citations",
    images: [48, 43],
    summary:
      "A lawyer and sports administrator from Orokam, Ogbadibo, Edeh is profiled for football development, including women’s football, and for education and community support. The programme describes Naija Ratels, Honey Badgers and his contributions to legal education.",
  },
  {
    slug: "agada-apochi",
    title: "Dr. Agada Boniface Apochi",
    category: "Citations",
    images: [46, 45],
    summary:
      "Apochi’s citation describes his legal and financial technology career and community initiatives in Owukpa, Ogbadibo. It records healthcare, classroom, water, road and scholarship support, including the Apochi Memorial Hospital.",
  },
  {
    slug: "innocent-ujah",
    title: "Professor Innocent Achanya Otobo Ujah",
    category: "Citations",
    images: [47],
    summary:
      "The programme profiles Ujah’s career in obstetrics, maternal health, research and university leadership. It records his service at the Nigerian Institute of Medical Research and as pioneer vice-chancellor of the Federal University of Health Sciences, Otukpo.",
  },
  {
    slug: "ameh-idoko",
    title: "Dr. Ameh Idoko",
    category: "Citations",
    images: [49],
    summary:
      "Idoko’s citation traces a medical career beginning with an Ibadan medical degree in 1967, followed by paediatric care and the development of Madonna Clinic and Hospital. It also records teaching and clinical contributions in Benue.",
  },
  {
    slug: "bright-ogaji",
    title: "Chief Bright Igodo Ogaji",
    category: "Citations",
    images: [51, 50],
    summary:
      "The programme describes Ogaji’s business and community development work, including education, infrastructure and enterprise in Ibilla and Oju. The printed citation uses the title Obe’Oba 1 of Igede.",
  },
  {
    slug: "ojotu-ojema",
    title: "Hon. Pst. Ojotu Ojema",
    category: "Citations",
    images: [52],
    summary:
      "The citation records Ojema’s origins in Obagaji, Agatu, studies at Benue State University, civil service and union work, and later public service. It describes his election to represent Apa/Agatu in 2023.",
  },
  {
    slug: "francis-ikpobu",
    title: "Chief Francis Alochu Ikpobu",
    category: "Citations",
    images: [53],
    summary:
      "The programme describes business and philanthropic work through the Alochu Foundation, including scholarships, water, electricity, a town hall and a football academy. The heading uses Francis, while the body also uses Frank.",
  },
  {
    slug: "godwin-obla",
    title: "Barr. Godwin Odumu Obla, SAN",
    category: "Citations",
    images: [55, 54],
    summary:
      "The citation describes Obla’s legal practice, arbitration and public service. It also records the Godwin Obla Foundation’s work in education, health, water and community infrastructure.",
  },
  {
    slug: "abba-adaudu",
    title: "Abba Adaudu",
    category: "Citations",
    images: [56],
    summary:
      "The programme profiles Adaudu’s accounting, taxation and consulting work, education at Benue institutions and professional fellowships. It also describes community scholarships and school governance work.",
  },
  {
    slug: "lami-ogenyi",
    title: "Chief Hon. Mrs. Lami Danladi Ogenyi",
    category: "Citations",
    images: [62, 58, 57],
    summary:
      "The citation records Ogenyi’s education, public service and community support in Ado. It describes scholarships, water projects, support for displaced people and her role as deputy speaker at the time of the 2024 publication.",
  },
  {
    slug: "nick-eworo",
    title: "Rt. Hon. Chief Nick Eworo",
    category: "Citations",
    images: [59],
    summary:
      "The programme describes Eworo’s business, logistics and public service career. It records his earlier service in the Benue State House of Assembly and science, technology and innovation portfolio in 2024.",
  },
  {
    slug: "sam-ode",
    title: "Barr. Dr. Sam Ode, mni",
    category: "Citations",
    images: [66, 61, 60],
    summary:
      "The programme traces Ode’s education, legal training and public administration career. It also describes community infrastructure, educational support and youth development. The deputy governor designation belongs to this 2024 record.",
  },
  {
    slug: "hyacinth-alia",
    title: "Rev. Fr. Dr. Hyacinth Iormem Alia",
    category: "Citations",
    images: [15, 64, 63],
    summary:
      "The supplied pages describe Alia’s pastoral work and public service and explain the programme’s recognition of him. The governor designation and policy claims are part of the 2024 publication; they are not presented here as current news.",
  },
];
export const archiveImage = (id: number) =>
  `/archive/coronation-2024/source-${String(id).padStart(2, "0")}.jpg`;
export const archiveSource =
  "Second Coronation Anniversary Programme · 29 June 2024";
