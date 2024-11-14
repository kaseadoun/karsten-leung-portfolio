// Import stylesheet
import './index.css'
// Data import
import projects from "../data/projectData";
// Import components
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <main>
        <div id="home">

        </div>
        <div id="about-me">

        </div>
        <div id="projects">

        </div>
        <div id="contact-me">

        </div>
      </main>
    </div>
  )
}

export default App
