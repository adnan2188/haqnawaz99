import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
          I am passionate about programming, playing with data is my hobby, I
          love teaching. Making things, processes intelligent and convenient is
          my ultimate goal.
        </p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons-main-div">
          <div className="social-icons">
            <a
              href="https://github.com/haqnawaz99"
              className="footer_social-link github"
            >
              <VscGithubInverted />
            </a>
            <a
              href="https://www.instagram.com/"
              className="footer_social-link instagram"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/haqnawaz99"
              className="footer_social-link twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/haqnawaz99/"
              className="footer_social-link linkedin"
            >
              <GrLinkedinOption />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@HaqNawaz99"
              className="footer_social-link youtube"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=6736322182107245849"
              className="footer_social-link googlePlay"
            >
              <IoLogoGooglePlaystore />
            </a>

            <a
              href="https://www.facebook.com/haq.nawaz.733"
              className="footer_social-link facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul className="contact-info">
          <li>
            <MdEmail className="i" /> haqnawaz99@yahoo.com
          </li>
          <li>
            <IoLogoWhatsapp className="i" /> +92 3344037449
          </li>
          <li>
            <FaMapMarkerAlt className="i" /> 124 DD sector 4 DHA Lahore Pakistan
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
