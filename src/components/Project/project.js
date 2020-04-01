import React from "react";

function Project(props) {
  return (
    <div className="col-md-4">
      <div
        className="projectLink mb-4"
        onClick={() => props.onClick([props.projectObj])}
      >
        <div className="card">
          <img
            className="card-img-top staticGif"
            src={props.staticImg}
            alt={props.imgAlt}
          />
          <img
            className="card-img-top hoverGif"
            src={props.demoGif}
            alt={props.imgAlt}
          />
          <div className="card-body">
            <p className="card-title text-center">{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
