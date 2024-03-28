import "./NLP.css";
const N_L_P = () => {
  return (
    <>
      <section className="nlp section">
        <h2 className="section_title">
          Quran Text Analysis using
          <br />
          Natural Language Processing (NLP)
        </h2>
        <p style={{ textAlign: "center" }}>
          This project explores the application of NLP techniques on the text of
          the Quran.
          <br />
          Here is a breakdown of the implemented functionalities.
        </p>

        <div className="nlp_container container">
          <div className="nlp_sub-section">
            <h1 className="sub-section_p">1 : Data Preprocessing</h1>
            <div className="nlp_main-div">
              <div className="nlp_main-one">
                <h3>1: Text Segmentation</h3>
                <p>
                  The Quran text has been segmented into individual words or
                  meaningful units for further processing.
                </p>
              </div>
              <div className="nlp_main-one">
                <h3>2: Part-of-Speech (POS) Tagging:</h3>
                <p>
                  Each word has been assigned a POS tag indicating its
                  grammatical function (e.g., noun, verb, adjective).
                </p>
              </div>
            </div>
          </div>

          <div className="nlp_sub-section">
            <h1>2 : Dataset Generation</h1>
            <p className="sub-section_p">
              A dataset specifically designed for the Indo-Pakistani Uthmani
              script of <br /> the Quran has been created. The dataset includes
              the following features:
            </p>
            <div className="nlp_main-div">
              <div className="nlp_main-one">
                <h3>1: Word-Level Data:</h3>
                <p>
                  Over 80,000 words from the Quran have been processed and
                  marked with 23 attributes per word.
                </p>
              </div>

              <div className="nlp_main-one">
                <h3>2: Large-Scale Annotations: </h3>
                <p>
                  The total number of marked attributes exceeds 5.4 million,
                  providing a comprehensive resource for further research
                </p>
              </div>

              <div className="nlp_main-one">
                <h3>3: Multilingual Annotation</h3>
                <p>
                  Each attribute is marked in three languages: Arabic, English,
                  and Urdu. This enriches the dataset and facilitates analysis
                  from different linguistic perspectives.
                </p>
              </div>
            </div>
          </div>

          <div className="nlp_sub-section">
            <h1>3 : Data Resources</h1>
            <p className="sub-section_p">
              The project leverages existing resources for Quranic morphology
              analysis.
            </p>
            <div className="nlp_main-div">
              <div className="nlp_main-one">
                <h3>1: Urdu</h3>
                <p>
                  <a
                    style={{ color: "gray", textDecoration: "underline" }}
                    href="http://haqnawaz.org/Ur/QuranSarfNahaw/qm"
                  >
                    http://haqnawaz.org/Ur/QuranSarfNahaw/qm
                  </a>
                  <br />
                  (This link provides morphological analysis of the Quran in
                  Urdu)
                </p>
              </div>
              <div className="nlp_main-one">
                <h3>2: English</h3>
                <p>
                  <a
                    style={{ color: "gray", textDecoration: "underline" }}
                    href="http://haqnawaz.org/En/QuranMorphology/QM"
                  >
                    http://haqnawaz.org/En/QuranMorphology/QM
                  </a>
                  <br />
                  (This link provides morphological analysis of the Quran in
                  English)
                </p>
              </div>
            </div>
          </div>

          <div className="nlp_sub-section">
            <h1>4 : Technical Details:</h1>

            <div
              className=""
              style={{
                width: "100%",
                margin: "Auto",
                marginTop: "30px",
                textAlign: "justify",
              }}
            >
              <div className="nlp_main-one">
                <p>
                  While the specific NLP tools and libraries used might not be
                  explicitly mentioned here, the description implies the use of
                  techniques like tokenization, rule-based or statistical POS
                  tagging, and custom attribute tagging logic. The multilingual
                  annotation suggests the use of language processing libraries
                  or tools capable of handling Arabic, English, and Urdu text.
                </p>
                <p>
                  This revised version provides a more professional tone and
                  incorporates technical details to showcase the project is
                  scope and potential impact. It also clarifies the purpose of
                  the provided links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default N_L_P;
