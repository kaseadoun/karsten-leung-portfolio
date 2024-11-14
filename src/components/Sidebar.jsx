// Image imports
import logo from '../assets/kl-logo.png';
// Dependency imports
import { Link } from 'react-scroll';
// Data imports
import { navigation } from '../data/navigationData';

function NavItem({ id, title }) {
    return(
        <Link to={id}>
            <li>| { title }</li>
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
                {
                    navigation.map((navItem) => 
                        <NavItem 
                            id={ navItem.id }
                            title={ navItem.title }
                        />
                    )
                }
            </nav>
            <footer>
                
            </footer>
        </header>
    );
}