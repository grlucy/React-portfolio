import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark" id="stickyNav">
      <div className="container">
        <ul className="navbar-nav mx-auto ml-md-0 mr-md-auto text-center">
          <li className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="./assets/resume/GinaLucyResume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
