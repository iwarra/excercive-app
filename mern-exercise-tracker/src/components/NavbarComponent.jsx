import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-3">
    <Link to="/" className="navbar-brand ml-2"> Exercise Tracker </Link>
    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
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