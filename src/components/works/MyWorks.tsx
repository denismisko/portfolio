import "./Works.scss";
import "../../sass/DarkMode.scss";
import DarkMode from "../../util/DarkMode";
import hermix from "../../assets/hermix.png";
import znavrat from "../../assets/znavrat.png";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyWorks() {
  DarkMode();

  const works = [
    {
      image: hermix,
      name: "Hermix s.r.o.",
      description:
        "Webová stránka na kosenie je užívateľsky prívetivá platforma,ktorá ponúka rôzne služby súvisiace s kosením pre rôzne typytrávnatých plôch. S podrobnými informáciami, flexibilnýmimožnosťami a jednoduchou navigáciou je to ideálne miesto prevšetky vaše potreby v oblasti kosenia.",
      technologies: ["HTML", "CSS"],
      link: "https://www.hermix.sk",
    },
  ];

  const reverseWorks = [
    {
      image: znavrat,
      name: "Z-Návrat n.o",
      description:
        "Webová stránka pre resocializačné zariadenie je intuitívna a informačne bohatá platforma, ktorá ponúka podrobné informácie o poslaní, službách a aktivitách zariadenia. S jasnými sekciamitýkajúcimi sa podpory, rehabilitácie a začlenenia do spoločnostije to kľúčový zdroj pre klientov, ich rodiny a odborníkov.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.znavrat.sk",
    },
  ];

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
              <p key={index}>{technology}</p>
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
