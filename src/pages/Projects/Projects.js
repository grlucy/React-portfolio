import React, { useState } from "react";

import Project from "../../components/Project/project";

import ProjectsList from "../../projects.json";

import "./Projects.css";

function Projects() {
  const [showProject, setShowProject] = useState();

  const projectClick = projectObj => {
    console.log(projectObj);
    console.log("hi");
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-md-left">
            <h3 className="sectionTitle">#projects</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center text-md-left">
            <h5>
              <i>Click to expand:</i>
            </h5>
          </div>
        </div>
        <div className="row">
          {ProjectsList.map(project => (
            <Project
              key={project.name}
              projectObj={project}
              staticImg={project.staticImg}
              imgAlt={project.imgAlt}
              demoGif={project.demoGif}
              name={project.name}
              onClick={projectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
