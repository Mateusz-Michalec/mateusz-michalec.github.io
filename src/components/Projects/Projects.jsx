import React from "react";
import images from "../../constans/images";
import Project from "./Project";

const Projects = () => {
  const projects = [images.eStore];

  return (
    <section className="container">
      <h2 className="section-title">Projekty</h2>
      <Project project={projects[0]} />;
    </section>
  );
};

export default Projects;
