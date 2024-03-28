import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  /* ===================================== Change Background Header ===================================== */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header calss to a tag with the header tagg
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* ===================================== Toggle Menu ===================================== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <Link to="/home" className="nav_logo">
            <img src={logo} style={{ width: "70px", height: "30px" }} alt="" />
          </Link>
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <Link
                  to="/home"
                  onClick={() => setActiveNav("/home")}
                  className={
                    activeNav === "/home" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="uil uil-estate nav_icon"></i>
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/about"
                  onClick={() => setActiveNav("/about")}
                  className={
                    activeNav === "/about" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="uil uil-user nav_icon"></i>
                  About
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/skills"
                  onClick={() => setActiveNav("/skills")}
                  className={
                    activeNav === "/skills"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-file-alt nav_icon"></i>
                  Skills
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/research"
                  onClick={() => setActiveNav("/research")}
                  className={
                    activeNav === "/research"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav_icon"></i>
                  Researches
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/projects"
                  onClick={() => setActiveNav("/portfolio")}
                  className={
                    activeNav === "/portfolio"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-scenery nav_icon"></i>
                  Projects
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/contact"
                  onClick={() => setActiveNav("/contact")}
                  className={
                    activeNav === "/contact"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-message nav_icon"></i>
                  Contact
                </Link>
              </li>
            </ul>
            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
