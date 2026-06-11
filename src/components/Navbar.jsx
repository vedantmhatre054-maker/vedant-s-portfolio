import { NavLink } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Vedant Mhatre</h2>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

     <div className="theme-selector">
  <button onClick={() => setTheme("light")}>Light</button>
  <button onClick={() => setTheme("dark")}>Dark</button>
</div>
    </nav>
  );
}

export default Navbar;