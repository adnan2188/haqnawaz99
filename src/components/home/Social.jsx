/* eslint-disable react/jsx-no-target-blank */
import "./Home.css";
const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://twitter.com/haqnawaz99"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter"></i>
      </a>
      <a
        href="https://play.google.com/store/apps/dev?id=6736322182107245849"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-google-play"></i>
      </a>
      <a
        href="https://github.com/haqnawaz99"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
