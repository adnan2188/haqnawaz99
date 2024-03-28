import Hero from "./hero/Hero.jsx";
import About from "./about/About.jsx";
import Research from "./Research/Research.jsx";
import Skills from "./skills/Skills";
import Qualification from "./qualification/Qualification.jsx";
import Project from "./projects/Project.jsx";
import Contact from "./contact/Contact.jsx";
import ScrollUp from "./scrollup/ScrollUp.jsx";
const Home = () => {
  return (
    <>
      <Hero />
      <main className="main">
        <About />
        <Skills />
        <Qualification />
        <Research />
        <Project />
        <Contact />
        <ScrollUp />
      </main>
    </>
  );
};

export default Home;
