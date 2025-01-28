// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function TechTag({ techName }) {
  return (
    <div className="project-tech-tag">
      <p>{techName}</p>
    </div>
  );
}

export default function ProjectItem({
  name,
  description,
  techStack,
  url,
  image,
  text,
  projectType,
}) {
  return (
    <div className="project-card">
      <img className="project-images" src={image} alt={`Image of ${name}`} />
      <div className="project-card-text">
        <div>
          <p className="project-classification">{projectType.toUpperCase()}</p>
          <a className="project-title-link" href={url} target="_blank">
            <h3 className="project-title">
              {name.toUpperCase()}{" "}
              <FontAwesomeIcon className="project-link-icon" icon={faLink} />
            </h3>
          </a>
        </div>
        <p className="project-description">{description}</p>
        {/* {url && (
          <p className="demo-link">
            <span className="demo">DEMO: </span>
            <a href={url} target="_blank">
              {text}
            </a>
          </p>
        )} */}
        <div className="project-tech-stack-container">
          {techStack.map((tech) => (
            <TechTag techName={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
