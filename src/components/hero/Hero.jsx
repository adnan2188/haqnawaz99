import "./Hero.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import ScrollDown from "./ScrollDown.jsx";

// import About from "../about/About.jsx";
// import Research from "../Research/Research.jsx";
// import Skills from "../skills/Skills";
// import Qualification from "../qualification/Qualification.jsx";
// import Project from "../projects/Project.jsx";
// import Contact from "../contact/Contact.jsx";
// import ScrollUp from "../scrollup/ScrollUp.jsx";

const Hero = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <Social />

            <div className="home_img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
      {/*       
      <main className="main">
        <About />
        <Skills />
        <Qualification />
        <Research />
        <Project />
        <Contact />
        <ScrollUp />
      </main> 
      */}
    </>
  );
};

export default Hero;
