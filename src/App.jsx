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
            <img className="personal-photo" src="/karsten-leung-photo.webp" alt="Image of me"/>
            <p></p>
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
