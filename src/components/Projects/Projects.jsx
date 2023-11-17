import React, { forwardRef, useState } from "react";
import images from "../../constans/images";
import Project from "./Project/Project";
import "./Projects.scss";

const Projects = forwardRef(({ languageData }, ref) => {
  const projects = [images.rdi, images.eStore, images.crypto, images.calendar];

  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <section ref={ref} className="container projects">
      <div className="projects__header hidden-opacity">
        <h2 className="section-title">{languageData.projectsTitle}</h2>
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
      </div>
      <Project
        languageData={languageData}
        projectIndex={projectIndex}
        project={projects[projectIndex]}
      />
    </section>
  );
});

export default Projects;
