import { NavLink } from 'react-router-dom';
import "../App.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">About Me</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/project">Project</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
       </ul>
    </nav>
  );
}

export default Navigation;

