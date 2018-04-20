import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
        </Link>
      </div>
      <span className="mr-auto">
        <img src={logo} />
      </span>
      <ul className="nav navbar-nav ml-auto">
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
    </div>
  </nav>
);

export default Navbar;

