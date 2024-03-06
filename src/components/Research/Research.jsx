import { GrStatusGood } from "react-icons/gr";
import "./Research.css";
const Data = [
  {
    title: "Arabic natural language processing for Qur’anic research",
    desc: "Arabic natural language processing for Qur’anic research: a systematic review Muhammad Huzaifa Bashir, Aqil M. Azmi, Haq Nawaz, Wajdi Zaghouani, Mona Diab, Ala Al-Fuqaha & Junaid Qadir Ahmed Wasfey Sleem, Eman Mohammed lotfy Elrefai, Marwa Mohammed Matar and Haq Nawaz. Stars at Qur'an QA 2022: Building Automatic Extractive Question Answering Systems for the Holy Qur'an with TransformerModels and Releasing a New Dataset.Qur'an QA 2022 Shared Task! Answering Questions on the Holy Qur'an @ OSACT 2022 Workshop, LREC 2022 M arseille, France, 20th June 2022",
    link: "https://link.springer.com/article/10.1007/s10462-022-10313-2",
  },
  {
    span: "التصریف",
    title: "Classical Arabic Conjugation Android Application",
    desc: "8th International Conference on Islamic Applications in Computer Science and Technologies (IMAN 2020)26 – 27 December 2020 Online",
    link: "https://play.google.com/store/apps/details?id=com.islamiculoom.tasreefapp",
  },
  {
    title: "SENTIMENTAL ANALYSIS OF SOCIAL MEDIA TO FIND OUT CUSTOMER OPINION.",
    desc: " International Conference on Intelligent Technologies and Applications INTAP 2018 October 23–25, 2018 | Bahawalpur, Pakistan. ",
    link: "https://www.springer.com/gp/book/9789811360510",
  },
  {
    title: "DEVELOPMENT OF ARTIFICIAL INTELLIGENCE BASE SYSTEM",
    desc: "ARABIC & QUR'ANIC VOCABULARIES FOR URDU LANGUAGE USERS Vol 10 No 1 (2018): QURANICA - International Journal of Quranic Research Volume 10, Number 1 (June 2018) Published: 2018-06-26.",
    link: "https://ejournal.um.edu.my/index.php/quranica/article/view/12108",
  },
  {
    title:
      "DATA SET GENERATION FOR THE ATTRIBUTES OF THE WORDS OF THE HOLY QURAN",
    desc: "INFORMATION RETRIEVAL SYSTEM FOR E-LEARNING Taibah University International Conference on Advances in Information Technology for the Holy Quran and Its Sciences Al-Madinah Al-Munawwarah, Saudi Arabia 19-22 Safar(2) 1435 Hijri (22-25 December 2013)",
    link: "https://ieeexplore.ieee.org/document/7277250",
  },
  {
    title: "DEVELOPMENT AND IMPLEMENTATION OF A COMPUTATIONAL ALGORITHM",
    desc: "DEVELOPMENT AND IMPLEMENTATION OF A COMPUTATIONAL ALGORITHM TO PREDICT THE CLASSICAL ARABIC CONJUGATE PATTERN FOCUSING ON WEAK VERBS. Second Workshop on Arabic Corpus Linguistics (WACL-2) Workshop in conjunction with the Corpus Linguistics 2013 conference Monday 22nd July 2013 – Lancaster University, UK",
    link: "http://ucrel.lancs.ac.uk/cl2013/wacl2.php",
  },
];
const Research = () => {
  return (
    <section className="section ser" id="research">
      <div className="confernce_div-main container">
        <h1 className="section_title">Research Papers</h1>
        <span className="section_subtitle">
          International Conferences and Journal Research Papers
        </span>
        <ul>
          {Data.map((item, index) => (
            <>
              <li key={index}>
                <h2>
                  <GrStatusGood style={{ marginRight: "5px" }} />
                  <span> {item.span}</span> {item.title}
                </h2>
                <p>{item.desc}</p>
                <a href={item.link} target="blank">
                  View more
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Research;
