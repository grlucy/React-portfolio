import React from "react";

import "./About.css";

function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center d-md-none">
            <div className="text-md-left">
              <img
                src="./assets/images/headshot/GINALUCY.jpg"
                className="headshot"
                alt="Gina Lucy Headshot"
              />
            </div>
          </div>
          <div className="col-md-9 text-center text-md-left pr-md-5">
            <h3 className="sectionTitle">#about</h3>
            <p className="text-justify">
              Full stack web developer located in Richmond, Virginia.
            </p>
            <p className="text-justify">
              Certificate in Full Stack Web Development (MERN Stack) from the
              University of Richmond. Passionate about learning to use new and
              evolving technologies to create efficient and scalable code.
              Interested in shaping the future trends of how people interact
              with software.
            </p>
            <p className="text-justify">
              Background in communications and graphic design with over 7 years
              of experience as a marketing specialist. B.S. Business
              Administration with a major in marketing from Old Dominion
              University. Skilled with the Adobe Creative Suite. Positioned well
              to translate client needs into a cohesive online brand identity.
            </p>
            <h4 className="text-justify">Technical Skills:</h4>
            <p className="text-left">
              <span className="font-weight-bold">Languages:</span>
              &nbsp;JavaScript, HTML, CSS, SQL
              <br />
              <span className="font-weight-bold">JavaScript Libraries:</span>
              &nbsp;React, jQuery, Chart.js, Moment.js
              <br />
              <span className="font-weight-bold">
                CSS Preprocessors & Frameworks:
              </span>
              &nbsp;Sass, Bootstrap, Materialize
              <br />
              <span className="font-weight-bold">Databases:</span>
              &nbsp;MongoDB, MySQL, IndexedDB
              <br />
              <span className="font-weight-bold">Server-Side Development:</span>
              &nbsp;Node.js, Express, Handlebars, Mongoose, Sequelize,
              Passport.js
              <br />
              <span className="font-weight-bold">Deployment:</span>
              &nbsp;Git, GitHub, Heroku, JawsDB, mLab
              <br />
            </p>
            <div className="d-inline-block mt-3">
              <div className="d-flex justify-content-center skillIcons">
                <i className="fab fa-js-square"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-node"></i>
                <i className="fab fa-bootstrap"></i>
                <i className="fab fa-git-square"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center d-none d-md-block">
            <div className="text-md-left">
              <img
                src="./assets/images/headshot/GINALUCY.jpg"
                className="headshot"
                alt="Gina Lucy Headshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
