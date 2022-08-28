import {Link} from 'react-router-dom'
import './navigation.css'
const Navbar = () => {
  return (
    <nav className="navigation">
      <h1 ><Link to="/">Privine</Link></h1>
      <ul >
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
