import { useState, useEffect, useRef } from "react";
// Import stylesheet
import "./index.css";
// Data import
import { projects } from "./data/projectData";
// Import components
import Navigation from "./components/Navigation";
import ProjectItem from "./components/ProjectItem";
// Import Assets
// Image imports
import logo from "./assets/kl-logo.png";

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
  }, [activeSection])

  return (
    <div className="app-container">
      <Navigation
        activeSection={activeSection} // Pass the active section to Navigation
        breakpoints={breakpoints}
        windowWidth={windowWidth}
        logoSrc={logo}
      />
      <main className="content-container">
        <section
          id="home"
          ref={(el) => (sectionRefs.current[0] = el)}
          key={0}
        >
          {windowWidth >= breakpoints.TABLET ? (
            <>
              <h1>Karsten Leung</h1>
              <div className="tag-container">
                <p className="tag">| Software Developer</p>
                <p className="tag">| Game Dev Hobbyist</p>
              </div>
            </>
          ) : (
            <div id="home-content">
              <img id="logo" src={logo} />
              <div id="home-text-content">
                <h1>Karsten Leung</h1>
                <div className="tag-container">
                  <p className="tag">Software Developer | Game Dev Hobbyist</p>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          id="about-me"
          ref={(el) => (sectionRefs.current[1] = el)}
          key={1}
        >
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
                I'm a software developer who loves building clean, functional,
                and visually appealing projects.
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
        <section
          id="projects"
          ref={(el) => (sectionRefs.current[2] = el)}
          key={2}
          style={{
            height: "100vh",
          }}
        >
          <h2>Projects</h2>
          <div className="project-container">
            {projects.map((project) => (
              <ProjectItem
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                dependencies={project.dependencies}
                url={project.url}
                image={`/project-images/${project.image}`}
                breakpoints={breakpoints}
                windowWidth={windowWidth}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
