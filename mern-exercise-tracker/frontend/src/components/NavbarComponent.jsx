import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavbarComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navLight = theme === "light";
  const navClasses = "navbar navbar-expand-lg mb-3 px-2"
  
  return (
  <nav className={ navLight ?  navClasses + " navbar-light bg-light" : navClasses + " navbar-dark bg-dark"} >
    <Link to="/" className="navbar-brand"> Exercise Tracker </Link>
    <div className="navbar-collapse">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link"> Exercises </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link"> Create Exercise Log </Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link"> Create User </Link>
        </li>
      </ul>
      <button className="btn btn-secondary" onClick={toggleTheme}>Switch the theme</button>
    </div>
  </nav>
  );
}

export default NavbarComponent;