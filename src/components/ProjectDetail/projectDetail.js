import React from "react";

import "./projectDetail.css";

function ProjectDetail({ value }) {
  return (
    <section className="darkSection">
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
            <p>Name: {value.name}</p>
            <p>imgAlt: {value.imgAlt}</p>
            <p>demoURL: {value.demoURL}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
