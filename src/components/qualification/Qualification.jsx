import { useState } from "react";
import "./Qualification.css";
import { GiTeacher } from "react-icons/gi";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            {/* <i
              className="uil uil-briefcase-alt 
                        qualification_icon"
            ></i> */}
            <i>
              <GiTeacher
                style={{ marginTop: "5px" }}
                className="qualification_icon"
              />
            </i>
            <p>Teaching</p>
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            <p>Education</p>
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Phd Computer Science</h3>
                <span className="qualification_subtitle">
                  Enrolled COMSAT University Islamabad Lahore Campus.
                </span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">MSCS</h3>
                <span className="qualification_subtitle">
                  University of Central Punjab, Lahore, Pakistan.
                </span>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  <span>شہادۃالعالمیہ </span>&nbsp; M.A Arabic / Islamic
                </h3>
                <span className="qualification_subtitle">
                  studies Jamia Ashrafia Lahore, Pakistan
                </span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Natural Language Processing in
                </h3>
                <span className="qualification_subtitle">
                  TensorFlow an online non-credit course authorized by
                  DeepLearning.AI and offered through Coursera
                </span>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Introduction to Data Science in Python
                </h3>
                <span className="qualification_subtitle">
                  Online authorized by DataCamp.
                </span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Punjab University College of Information Technology
                </h3>
                <span className="qualification_subtitle">
                  Programming fundamentals, Android Development, Web Engineering
                </span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Beaconhouse National University
                </h3>
                <span className="qualification_subtitle">
                  Programming fundamentals, OOP
                </span>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> ISDP</h3>
                <span className="qualification_subtitle">
                  Programming fundamentals, Web Designing Mobile Computing
                </span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Jamia Ashrafia</h3>
                <span className="qualification_subtitle">
                  Quran Translation, Arabic Morphology, Islamic Fiqh, English
                  Language
                </span>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Superior University</h3>
                <span className="qualification_subtitle">Islamic Studies</span>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
