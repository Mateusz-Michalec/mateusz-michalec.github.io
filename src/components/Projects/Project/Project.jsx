import React, { useEffect, useState } from "react";
import "./Project.scss";
import ProjectModal from "../ProjectModal/ProjectModal";

const Project = ({ project, projectIndex, languageData }) => {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [images, setImages] = useState(project.desktop);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setImages(project.desktop);
  }, [project]);

  return (
    <article className="project">
      <ProjectModal images={images} isModal={isModal} setIsModal={setIsModal} />
      <header className="project__header">
        <div className="project__preview">
          <div className="project__technologies">
            {project.technologies.map((tech) => (
              <img
                loading="lazy"
                key={tech.text}
                className="project__technology"
                src={tech.icon}
                alt={tech.text}
                title={tech.text}
              />
            ))}
          </div>
          <div className="project__preview-img-wrapper">
            <img
              loading="lazy"
              className="project__preview-img"
              src={images[0]}
              alt={project.desc}
              onClick={() => {
                document.body.style.overflow = "hidden";
                setIsModal(true);
              }}
            />
          </div>
          <div className="project__view-btns">
            <button
              onClick={() => {
                setIsDesktopView(true);
                setImages(project.desktop);
              }}
              className={`project__view-btn ${isDesktopView ? "" : "grayed"} `}
            >
              {languageData.projectsDesktopView}
            </button>
            <button
              onClick={() => {
                setIsDesktopView(false);
                setImages(project.mobile);
              }}
              className={`project__view-btn ${isDesktopView ? "grayed" : ""} `}
            >
              {" "}
              {languageData.projectsMobileView}
            </button>
          </div>
        </div>
        <div className="project__features">
          <div>
            <h2 className="project__name">
              {languageData.projects[projectIndex].title}
            </h2>
            <ul className="project__features-list">
              {languageData.projects[projectIndex].features.map((feature) => (
                <li className="project__feature" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="project__href-btns">
            <button className="project__href-btn">
              <a href={project.link} target="_blank">
                <i className="bi bi-eye-fill"></i>
              </a>
              <span>Demo</span>
            </button>
            <button className="project__href-btn">
              <a href={project.github} target="_blank">
                <i className="bi bi-github"></i>
              </a>
              <span>{languageData.projectsCode}</span>
            </button>
          </div>
        </div>
      </header>
    </article>
  );
};

export default Project;
