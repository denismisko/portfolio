import './About.scss'
import DarkMode from '../../util/DarkMode';

function About() {

  DarkMode();

  return (
    <section id="about-me" className="settings about-me">
      <div className="container">
        <span>
          <a href="/" rel="noopener noreferrer">
            &#8594;
          </a>
        </span>
        <h2 className="text-center">About me.</h2>

        <p>
          My name is Denis Miskolc and I am 21 years old. I am primarily
          involved in web development and web design. I am teachable and
          flexible in everything, I can adapt to any request. I always try to
          pay attention to every single smallest detail. I follow the current
          web design trends to make sure it always looks as modern and clear as
          possible.
        </p>
      </div>
    </section>
  );
}

export default About;
