import "./Project.css";
import Projects from "./Projects";

const Project = () => {
  return (
    <section className="project section" id="portfolio">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Most recent works</span>
      <Projects />
    </section>
  );
};

export default Project;
