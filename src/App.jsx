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
        <div id="home">
          <h1>Karsten Leung</h1>
          <p className="tag">| Software Developer</p>
          <p className="tag">| Game Dev Hobbyist</p>
        </div>
        <div id="about-me">
          <h2>Who am I?</h2>
        </div>
        <div id="projects">
          {
            projects.map(project => 
              <ProjectItem 
                name={ project.name }
                description={ project.description }
                techStack={ project.techStack }
                dependencies={ project.dependencies }
                url={ project.url }
                image={ `/project-images/${ project.image }` }
              />
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
