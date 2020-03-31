import React from "react";

import "./About.css";

function About() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-3 text-center d-md-none">
            <div class="text-md-left">
              <img
                src="./assets/images/headshot/GINALUCY.jpg"
                class="headshot"
              />
            </div>
          </div>
          <div class="col-md-9 text-center text-md-left pr-md-5">
            <h3 class="sectionTitle">#about</h3>
            <p class="text-justify">
              Full stack web developer located in Richmond, Virginia.
            </p>
            <p class="text-justify">
              Certificate in Full Stack Web Development (MERN Stack) from the
              University of Richmond. Passionate about learning to use new and
              evolving technologies to create efficient and scalable code.
              Interested in shaping the future trends of how people interact
              with software.
            </p>
            <p class="text-justify">
              Background in communications and graphic design with over 7 years
              of experience as a marketing specialist. B.S. Business
              Administration with a major in marketing from Old Dominion
              University. Skilled with the Adobe Creative Suite. Positioned well
              to translate client needs into a cohesive online brand identity.
            </p>
            <h4 class="text-justify">Technical Skills:</h4>
            <p class="text-left">
              <span class="font-weight-bold">Languages:</span> JavaScript, HTML,
              CSS, SQL
              <br />
              <span class="font-weight-bold">JavaScript Libraries:</span>
              React, jQuery, Chart.js, Moment.js
              <br />
              <span class="font-weight-bold">
                CSS Preprocessors & Frameworks:
              </span>
              Sass, Bootstrap, Materialize
              <br />
              <span class="font-weight-bold">Databases:</span>
              MongoDB, MySQL, IndexedDB
              <br />
              <span class="font-weight-bold">Server-Side Development:</span>
              Node.js, Express, Handlebars, Mongoose, Sequelize, Passport.js
              <br />
              <span class="font-weight-bold">Deployment:</span>
              Git, GitHub, Heroku, JawsDB
              <br />
            </p>
            <div class="d-inline-block mt-3">
              <div class="d-flex justify-content-center skillIcons">
                <i class="fab fa-js-square"></i>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-node"></i>
                <i class="fab fa-bootstrap"></i>
                <i class="fab fa-git-square"></i>
              </div>
            </div>
          </div>
          <div class="col-md-3 text-center d-none d-md-block">
            <div class="text-md-left">
              <img
                src="./assets/images/headshot/GINALUCY.jpg"
                class="headshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
