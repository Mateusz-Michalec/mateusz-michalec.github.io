import React, { useState } from "react";
import images from "../../constans/images";
import Project from "./Project/Project";
import "./Projects.scss";

const Projects = () => {
  const projects = [images.eStore, images.crypto, images.calendar];

  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <section className="container projects">
      <h2 className="section-title">Projekty</h2>
      <Project project={projects[projectIndex]} />
      <div className="projects__btns-control">
        <button
          onClick={() =>
            setProjectIndex((prev) => {
              if (prev === 0) return projects.length - 1;
              else return prev - 1;
            })
          }
        >
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button
          onClick={() =>
            setProjectIndex((prev) => {
              if (prev === projects.length - 1) return 0;
              else return prev + 1;
            })
          }
        >
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    </section>
  );
};

export default Projects;
