import "./About.scss";
import DarkMode from "../../util/DarkMode";
import {
  IconBrandReactNative,
  IconBrandAngular,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandFigma,
  IconBrandTypescript,
  IconBrandBootstrap,
  IconBrandJavascript,
} from "@tabler/icons-react";

function About() {
  DarkMode();

  return (
    <div>
      <section id="about-me" className="settings about-me">
        <div className="container">
          <span>
            <a href="/" rel="noopener noreferrer">
              &#8594;
            </a>
          </span>
          <h2 className="text-center">About me.</h2>

          <p>
            My name is Denis Miškolci. I am primarily involved in web
            development and web design. I am teachable and flexible in
            everything, I can adapt to any request. I always try to pay
            attention to every single smallest detail. I follow the current web
            design trends to make sure it always looks as modern and clear.
          </p>


          <hr />
        </div>
      </section>

      <section className="tech-stack">
        <h3 className="text-center">Tech stack.</h3>
        <div>
          <ul>
            <li title="React">
              <IconBrandReactNative className="icon" size={35} />
            </li>
            <li title="Angular">
              <IconBrandAngular className="icon" size={35} />
            </li>
            <li title="Bootstrap">
              <IconBrandBootstrap className="icon" size={35} />
            </li>
            <li title="CSS3">
              <IconBrandCss3 className="icon" size={35} />
            </li>
            <li title="HTLM5">
              <IconBrandHtml5 className="icon" size={35} />
            </li>
            <li title="Sass">
              <IconBrandSass className="icon" size={35} />
            </li>
            <li title="Figma">
              <IconBrandFigma className="icon" size={35} />
            </li>
            <li title="JavaScipt">
              <IconBrandJavascript className="icon" size={35} />
            </li>
            <li title="TypeScript">
              <IconBrandTypescript className="icon" size={35} />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
