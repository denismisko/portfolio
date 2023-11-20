import "./Works.scss";
import "../../sass/DarkMode.scss";
import DarkMode from "../../util/DarkMode";
import { works, reverseWorks } from "./works";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyWorks() {
  
  DarkMode();

  const renderProjects = (projects: any[], isReversed: boolean) => {
    return projects.map((project, index) => (
      <div className={`card work ${isReversed ? "reverse" : ""}`} key={index}>
        <div className="card-image">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="card-description">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((technology: any, index: any) => (
              <li key={index}>{technology}</li>
            ))}
          </div>
          <div className="info-icons">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="settings hidden works">
      <div className="container">
        <span>
          <a href="/" rel="noopener noreferrer">
            &#8594;
          </a>
        </span>
        <div className="headline text-center">
          <h2>Showcase of my works.</h2>
        </div>
        {renderProjects(works, false)}
        {renderProjects(reverseWorks, true)}
      </div>
    </section>
  );
}

export default MyWorks;
