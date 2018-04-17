import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Hanger Games
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" || window.location.pathname === "/main"
              ? "active"
              : ""
          }
        >
          <Link to="/">Main</Link>
        </li>
        <li className={window.location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={window.location.pathname === "/signup" ? "active" : ""}>
          <Link to="/signup"><span className = "glyphicon glyphicon-user" />Sign Up</Link>
        </li>
      </ul>
      <span className = "slogan"><h4>May the odds be ever in your favor.</h4></span>
    </div>
  </nav>
);

export default Navbar;
