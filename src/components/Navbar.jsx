import { NavLink } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Vedant Mhatre</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="theme-selector">
        <span onClick={() => setTheme("light")}>🌞</span>
        <span onClick={() => setTheme("dark")}>🌙</span>
        <span onClick={() => setTheme("blue")}>💙</span>
        <span onClick={() => setTheme("purple")}>🟣</span>
      </div>

    </nav>
  );
}

export default Navbar;