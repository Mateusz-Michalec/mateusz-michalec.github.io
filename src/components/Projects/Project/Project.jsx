import React, { useState } from "react";
import "./Project.scss";
import ProjectModal from "../ProjectModal/ProjectModal";

const Project = ({ project }) => {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [images, setImages] = useState(project.desktop);
  const [isModal, setIsModal] = useState(false);

  return (
    <article className="project">
      <ProjectModal images={images} isModal={isModal} setIsModal={setIsModal} />
      <header className="project__header">
        <div>
          <div className="project__features">
            <h2 className="project__name">{project.title}</h2>
            <ul className="project__features-list">
              {project.features.map((feature) => (
                <li className="project__feature" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="project__href-btns">
            <button>
              <i className="bi bi-eye-fill"></i>
            </button>
            <button>
              <i className="bi bi-github"></i>
            </button>
          </div>
        </div>
        <div className="project__preview">
          <div className="project__technologies">
            {project.technologies.map((tech) => (
              <img
                key={tech.text}
                className="project__technology"
                src={tech.icon}
                alt={tech.text}
                title={tech.alt}
              />
            ))}
          </div>
          <div className="project__preview-img-wrapper">
            <img
              className="project__preview-img"
              src={images[0]}
              alt={project.desc}
              onClick={() => {
                setIsModal(true);
                document.body.style.overflow = "hidden";
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
              Duże ekrany
            </button>
            <button
              onClick={() => {
                setIsDesktopView(false);
                setImages(project.mobile);
              }}
              className={`project__view-btn ${isDesktopView ? "grayed" : ""} `}
            >
              {" "}
              Małe ekrany
            </button>
          </div>
        </div>
      </header>
    </article>
  );
};

export default Project;
