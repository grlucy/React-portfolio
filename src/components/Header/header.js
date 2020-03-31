import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white text-center">
            <div className="text-md-left">
              <h1 className="mt-4 mb-4 logo">Gina Lucy</h1>
              <h4>Full Stack Web Developer &bull; Richmond, Virginia</h4>
              <div className="d-inline-block mb-4">
                <div className="iconStyle d-flex justify-content-start align-items-baseline">
                  <a
                    href="https://www.linkedin.com/in/grlucy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./assets/images/icons/linkedin-32.png"
                      alt="LinkedIn Icon"
                    />
                  </a>
                  <a
                    href="https://github.com/grlucy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./assets/images/icons/GitHub-Mark-Light-32px.png"
                      alt="Github Icon"
                    />
                  </a>
                  <p>
                    <a href="mailto:ginalucy9@gmail.com">
                      <i className="far fa-envelope"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
