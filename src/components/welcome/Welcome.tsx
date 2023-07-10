import { useEffect } from "react";
import "../../sass/App.scss";
import "./Welcome.scss";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Welcome() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Web developer",
        "Web designer",
        "<span class='coffee-lover'>Coffee lover</span>",
      ],
      typeSpeed: 20,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="settings introduction">
      <div className="container flexbox">
        <div className="item1">
          <h2>Hi, I'm Denis Miškolci.</h2>
          <h3 className="text-center">
            <span className="auto-type"></span>
          </h3>
        </div>
        <div className="item2">
          <a href="works" className="btn">
            My works
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/denismisko"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/dm.uiux/"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/denis-mi%C5%A1kolci-b0007b236/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
