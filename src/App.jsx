// Import stylesheet
import "./index.css";
// Data import
import { projects } from "./data/projectData";
// Import components
import Sidebar from "./components/Sidebar";
import ProjectItem from "./components/ProjectItem";

function App() {
  return (
    <div>
      <Sidebar />
      <main className="content-container">
        <section id="home">
          <h1>Karsten Leung</h1>
          <div className="tag-container">
            <p className="tag">| Software Developer</p>
            <p className="tag">| Game Dev Hobbyist</p>
          </div>
        </section>
        <section id="about-me">
          <h2>About Me</h2>
          <div className="about-me-content-container">
            <img
              className="personal-photo"
              src="/karsten-leung-photo.webp"
              alt="Image of me"
            />
            <div className="personal-description-container">
              <h4>Hi, I’m Karsten Leung</h4>
              <p className="personal-description">
                I'm a software developer who loves building
                clean, functional, and visually appealing projects.
              </p>
              <p className="personal-description">
                Whether it’s crafting smooth front-end experiences or dabbling
                in game development as a hobby, I’m all about exploring new
                ideas and pushing my skills further. I’m always curious and
                excited to keep growing in the tech world!
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project) => (
            <ProjectItem
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              dependencies={project.dependencies}
              url={project.url}
              image={`/project-images/${project.image}`}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
