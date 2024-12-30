// Dependency imports
import { useRef, useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
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

export default function Navigation({ windowWidth, breakpoints, logoSrc, activeSection }) {
  const navigationRef = useRef(null);
  const [index, setIndex] = useState(0);

  const navLength = navigation.length;
  let isDesktop = windowWidth >= breakpoints.LAPTOP;

  useEffect(() => {
    if (navigation[index]) {
      scroller.scrollTo(navigation[index].id, {
        duration: 600,
        smooth: true,
        offset: index !== 0 ? -40 : 0, 
      });
    }
  }, [index]);

  const handleScroll = () => {
    const scrollLeft = navigationRef.current.scrollLeft;
    const containerWidth = navigationRef.current.offsetWidth;
    const totalScrollWidth = navigationRef.current.scrollWidth;

    if (navigationRef.current) {
      console.log("Horizontal:", navigationRef.current.scrollLeft);
      console.log("Container Width:", navigationRef.current.offsetWidth);
      console.log("Scroll Width:", navigationRef.current.scrollWidth);
    }

    const itemWidth = (totalScrollWidth - containerWidth) / 2;

    const newIndex = Math.round(scrollLeft / itemWidth);

    const targetScroll = newIndex * itemWidth;

    if (Math.abs(scrollLeft - targetScroll) > 0) {
      navigationRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }

    setIndex(newIndex);
  }

  useEffect(() => {
    const element = navigationRef.current;
    if (element) {
      element.addEventListener("mouseup", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseup", handleScroll);
      }
    }
  }, []);

  function previousNavItem() {
    setIndex((index) => {
      if (index < 0) {
        return 0;
      }

      return index - 1;
    });
    navigationRef.current.scrollLeft -= window.innerWidth;
  }

  function nextNavItem() {
    setIndex((index) => {
      if (index > navLength) {
        return navLength - 1;
      }

      return index + 1;
    });
    navigationRef.current.scrollLeft += window.innerWidth;
  }

  return (
    <div className="navigation" ref={navigationRef}
    
    onScroll={() => {
      // Debounce the lockScroll function for smoother performance
      clearTimeout(navigationRef.current?.scrollTimeout);
      navigationRef.current.scrollTimeout = setTimeout(handleScroll, 200);
    }}
    >
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
          <ul>
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
      {windowWidth >= breakpoints.LAPTOP && (
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
