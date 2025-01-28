function TechTag({ techName }) {
  return(
    <div className="technology-tag">
      { techName }
    </div>
  );
}

export default function ProjectItem({
  name,
  description,
  techStack,
  url,
  image,
  text
}) {
  return (
    <div className="project-card">
      <img className="project-images" src={image} alt={ `Image of ${name}` }/>
      <div className="project-card-text">
        <h3>{name.toUpperCase()}</h3>
        <p>{description}</p>
        {url && (
          <p className="demo-link">
            <span className="demo">DEMO: </span>
            <a href={url} target="_blank">{text}</a>
          </p>
        )}
        <div className="tech-stack-container">
          {techStack.map((tech) => (
            <TechTag techName={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
