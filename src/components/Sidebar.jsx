// Image imports
import logo from "../assets/kl-logo.png";
// Dependency imports
import { Link } from "react-scroll";
// Data imports
import { navigation } from "../data/navigationData";

function NavItem({ id, title }) {
  return (
    <Link
      to={id}
      smooth={true}
      duration={600}
      {...(id !== "home" && { offset: -50 })}
    >
      <li>| {title.toUpperCase()}</li>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <header>
        <div>
          <img id="logo" src={logo} />
        </div>
        <nav>
          <ul>
            {navigation.map((navItem) => (
              <NavItem id={navItem.id} title={navItem.title} />
            ))}
          </ul>
        </nav>
      </header>
      <footer>
        <a class="footer-links" href="https://github.com/kaseadoun">
          <i class="fa-brands fa-square-github footer-icons"></i>
          github.com/kaseadoun
        </a>
        <a
          class="footer-links"
          href="https://www.linkedin.com/in/karsten-leung/"
        >
          <i class="fa-brands fa-linkedin footer-icons"></i>
          linkedin.com/in/karsten-leung/
        </a>
      </footer>
    </div>
  );
}
