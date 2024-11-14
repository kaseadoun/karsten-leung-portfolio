// Image imports
import logo from '../assets/kl-logo.png';
// Dependency imports
import { Link } from 'react-scroll';
// Data import
import projects from "../data/projectData";

function NavItems() {
    return(
        <Link>
            <li></li>
        </Link>
    );
}

export default function Sidebar() {
    return(
        <header className="sidebar">
            <div>
                <img src={ logo }/>
            </div>
            <nav>

            </nav>
            <footer>

            </footer>
        </header>
    );
}