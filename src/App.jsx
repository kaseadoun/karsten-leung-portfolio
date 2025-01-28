import { useState, useEffect, useRef } from "react";
// Import stylesheet
import "./index.css";
// Data import
import projects from "./data/projectData";
// Import components
import Navigation from "./components/Navigation";
import ProjectItem from "./components/ProjectItem";
import TechIcons from "./components/TechItem";
// Import Assets
// Image imports
import logo from "./assets/kl-logo.png";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section
  const [sectionIndex, setSectionIndex] = useState(0);
  const sectionRefs = useRef(["home", "about-me", "projects"]); // Refs for the sections

  // Phone dimensions (min-width)
  const breakpoints = {
    LARGE_PHONE: 640,
    TABLET: 768,
    LAPTOP: 1024,
    DESKTOP: 1280,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section when it intersects
          }
        });
      },
      { threshold: 0.7 } // Trigger when the section is fully at the top
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    switch (activeSection) {
      case "home":
        setSectionIndex(0);
        break;
      case "about-me":
        setSectionIndex(1);
        break;
      case "projects":
        setSectionIndex(2);
        break;
      default:
        return -1; // In case no match is found
    }
    console.log(sectionIndex);
  }, [activeSection]);

  return (
    <div className="app-container">
      {/* <Navigation
        activeSection={activeSection} // Pass the active section to Navigation
        breakpoints={breakpoints}
        windowWidth={windowWidth}
        logoSrc={logo}
      /> */}
      <main className="content-container">
        <section id="home" ref={(el) => (sectionRefs.current[0] = el)} key={0}>
          <img id="logo" src={logo} />
          <div id="home-text">
            <h1>KARSTEN LEUNG</h1>
            <p id="title-tag">Software Developer</p>
            <p id="summary-tag">
              I love building pixel perfect digital experiences on the web and
              dabbling in game development.
            </p>
            <div id="social-icon-container">
              <a className="social-links" href="https://github.com/kaseadoun">
                <i class="fa-brands fa-square-github social-icons"></i>
              </a>
              <a
                className="social-links"
                href="https://www.linkedin.com/in/karsten-leung/"
              >
                <i class="fa-brands fa-linkedin social-icons"></i>
              </a>
            </div>
          </div>
        </section>
        <section
          id="about-me"
          ref={(el) => (sectionRefs.current[1] = el)}
          key={1}
        >
          <h2>ABOUT</h2>
          <p className="about-text">
            I'm a passionate aspiring software developer actively seeking an
            internship opportunity. With a strong interest in developing and a
            growing skill set in various programming languages and frameworks,
            I’m eager to contribute to development teams while learning and
            growing my technical expertise.
          </p>
        </section>
        <section>
          <h2>TECH STACK</h2>
          <TechIcons />
        </section>
        <section
          id="projects"
          ref={(el) => (sectionRefs.current[2] = el)}
          key={2}
          style={{
            height: "100vh",
          }}
        >
          <h2>PROJECTS</h2>
          <div className="project-container">
            {projects.map((project) => (
              <ProjectItem
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                url={project.url}
                image={`/project-images/${project.image}`}
                text={project.text}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
