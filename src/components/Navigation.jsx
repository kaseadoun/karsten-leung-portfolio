// Dependency imports
import { Link, scroller } from "react-scroll";
// Data imports
import navigation from "../data/navigationData";

function NavItem({ id, title }) {
  return (
    <Link to={id} smooth={true} duration={600} offset={-80}>
      <li>{title}</li>
    </Link>
  );
}

export default function Navigation({ windowWidth, breakpoints }) {
  let isDesktop = windowWidth >= breakpoints.LAPTOP;

  return (
    <header>
      <nav className="navigation">
        <Link to={"home"} smooth={true} duration={600} offset={-70}>
          <h4>KL</h4>
        </Link>
        <ul>
          {navigation.map((navItem) => (
            <NavItem id={navItem.id} title={navItem.title} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
