// Image imports
import logo from "../assets/kl-logo.png";
// Dependency imports
import { Link } from "react-scroll";
// Data imports
import { navigation } from "../data/navigationData";

function NavItem({ id, title }) {
  return (
    <Link to={id}>
      <li>| {title.toUpperCase()}</li>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <header className="sidebar">
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
      <footer></footer>
    </header>
  );
}
