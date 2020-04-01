import React, { useState } from "react";

import Project from "../../components/Project/project";
import ProjectDetail from "../../components/ProjectDetail/projectDetail";

import ProjectsList from "../../projects.json";

import "./Projects.css";

function Projects() {
  const [showProject, setShowProject] = useState({
    showing: [ProjectsList[0]],
    clickProject: showing => setShowProject({ ...showProject, showing })
  });

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-md-left">
              <h3 className="sectionTitle">#projects</h3>
            </div>
          </div>
        </div>
      </section>
      {showProject.showing.map(project => (
        <ProjectDetail key={project.name} value={project} />
      ))}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-md-left">
              <h5 className="mb-4">
                <i>Click to expand above:</i>
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
                onClick={showProject.clickProject}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
