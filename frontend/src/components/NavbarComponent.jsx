import { Link, useLocation  } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavbarComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navLight = theme === "light";
  const navClasses = "navbar navbar-expand-lg mb-3 px-2";

  const location = useLocation();
  
  return (
  <nav className={ navLight ?  navClasses + " navbar-light bg-light" : navClasses + " navbar-dark bg-dark"} >
    <Link to="/" className="navbar-brand"> Exercise Tracker </Link>
    <div className="navbar-collapse">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          > Exercises </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/create" 
            className={`nav-link ${location.pathname === "/create" ? "active" : ""}`}
          > Create Exercise Log </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/user" 
            className={`nav-link ${location.pathname === "/user" ? "active" : ""}`}
          > Create User </Link>
        </li>
        <li className="nav-item">
          <Link 
            to='/delete' 
            className={`nav-link ${location.pathname === "/delete" ? "active" : ""}`}
          > Delete a user </Link>
        </li>
      </ul>
      <button className="btn btn-secondary" onClick={toggleTheme}>Switch the theme</button>
    </div>
  </nav>
  );
}

export default NavbarComponent;