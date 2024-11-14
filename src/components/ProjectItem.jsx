export default function ProjectItem({
  name,
  description,
  techStack,
  dependencies,
  url,
  image,
}) {
  return (
    <div className="project-card">
      <img className="project-images" src={image} alt={ `Image of ${name}` }/>
      <div className="project-card-text">
        <h2>{name}</h2>
        <p>{description}</p>
        {url && (
          <p className="demo-link">
            <span className="demo">DEMO: </span>
            <a href={url}>{url}</a>
          </p>
        )}
        <div>
          {techStack.map((tech) => (
            <span className="technology-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
