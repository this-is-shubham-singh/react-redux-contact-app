import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-heading" to="/">
        React Redux Contact App
      </Link>
    </nav>
  );
};

export default Navbar;
