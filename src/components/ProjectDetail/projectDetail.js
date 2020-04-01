import React from "react";

import "./projectDetail.css";

function ProjectDetail({ value }) {
  return (
    <section className="darkSection" id="project">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              alt={value.imgAlt}
              src={value.demoGif}
              className="demoGif mb-4 mb-md-0"
            />
          </div>
          <div className="col-md-8">
            <h3>{value.name}</h3>
            <hr />
            <div className="mb-3 buttonLink">
              <a href={value.demoURL} target="_blank" rel="noopener noreferrer">
                <button type="button" className="codeBtn mr-1">
                  Demo
                </button>
              </a>
              <a href={value.repoURL} target="_blank" rel="noopener noreferrer">
                <button type="button" className="contactBtn">
                  Code
                </button>
              </a>
            </div>
            <p>{value.description}</p>
            <p className="font-weight-bold">Technologies used:</p>
            <p>{value.technologies}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
