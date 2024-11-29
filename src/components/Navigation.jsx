// Dependency imports
import { useState } from "react";
import { Link } from "react-scroll";
// Data imports
import { navigation } from "../data/navigationData";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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

export default function Navigation({ windowWidth, breakpoints, logoSrc }) {
  const [index, setIndex] = useState(0);

  const navLength = navigation.length;
  let isDesktop = windowWidth >= breakpoints.TABLET;

  function previousNavItem() {
    setIndex((index) => {
      if (index < 0) {
        return 0;
      }

      return index - 1;
    });
  }

  function nextNavItem() {
    setIndex((index) => {
      if (index > navLength) {
        return navLength - 1;
      }

      return index + 1;
    });
  }

  return (
    <div className="navigation">
      <header>
        {isDesktop && (
          <div>
            <img id="logo" src={logoSrc} />
          </div>
        )}
        <nav>
          {!isDesktop && index > 0 && (
            <FontAwesomeIcon
              className="nav-arrows"
              icon={faChevronLeft}
              onClick={previousNavItem}
            />
          )}
          <ul style={!isDesktop && { translate: `${1 * index}%` }}>
            {navigation.map((navItem) => (
              <NavItem
                id={navItem.id}
                title={navItem.title}
              />
            ))}
          </ul>
          {!isDesktop && index < navLength - 1 && (
            <FontAwesomeIcon
              className="nav-arrows"
              id="nav-arrow-right"
              icon={faChevronRight}
              onClick={nextNavItem}
            />
          )}
        </nav>
      </header>
      {windowWidth >= breakpoints.TABLET && (
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
      )}
    </div>
  );
}
