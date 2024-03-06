import Awards from "./Awards";
import "./Skills.css";
import Skils from "./Skill";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical lecel</span>
      <div className="skills_container container grid">
        <Awards />

        <Skils />
      </div>
    </section>
  );
};

export default Skills;
