import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-md navbar-dark" id="stickyNav">
      <div class="container d-flex justify-content-between">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="./assets/resume/GinaLucyResume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
