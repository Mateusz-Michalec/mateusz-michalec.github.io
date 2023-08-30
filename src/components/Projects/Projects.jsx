import React from "react";
import images from "../../constans/images";
import Project from "./Project/Project";
import "./Projects.scss";

const Projects = () => {
  const projects = [images.eStore];

  return (
    <section className="container projects">
      <div>
        <h2 className="section-title">Projekty</h2>
        <div className="projects__btns-control">
          <button>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
      <Project project={projects[0]} />
    </section>
  );
};

export default Projects;
