// https://learnwith-zaid.vercel.app/#roadmap
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Research from "./components/Research/Research.jsx";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification.jsx";
import Project from "./components/projects/Project.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Research />
        <Project />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
