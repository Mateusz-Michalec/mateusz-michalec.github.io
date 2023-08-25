import React, { useRef, useState } from "react";
import "./Project.scss";

const Project = ({ project }) => {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [images, setImages] = useState(project.desktop);

  const modal = useRef();

  const nextImage = () => {};

  return (
    <>
      <dialog className="project__modal" ref={modal}>
        <img
          className="project__modal-img"
          src={images[0]}
          alt={project.desc}
        />
        <button
          onClick={() => {
            modal.current.close();
            document.body.style.overflow = "visible";
          }}
          className="project__modal-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>
        <div className="project__modal-btns">
          <button className="project__modal-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </button>
          <button>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </button>
        </div>
      </dialog>

      <article className="project">
        <header className="project__header">
          <div>
            <h3 className="project__name">E-commerce</h3>
            <p className="project__desc">{project.desc}</p>
          </div>
          <div className="project__preview-img-wrapper">
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
            <img
              className="project__preview-img"
              src={images[0]}
              alt={project.desc}
              onClick={() => {
                modal.current.showModal();
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
        </header>
        <h4>Funkcjonalności</h4>
      </article>
    </>
  );
};

export default Project;
