import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-3 px-2">
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
    </div>
  </nav>
  );
}

export default NavbarComponent;