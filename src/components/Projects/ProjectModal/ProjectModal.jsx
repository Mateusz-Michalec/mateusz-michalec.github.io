import React, { useRef, useState } from "react";
import "./ProjectModal.scss";

const ProjectModal = ({ images, isModal, setIsModal }) => {
  const modal = useRef();

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <dialog open={isModal} className="project__modal" ref={modal}>
      <div className="project__modal-close-bar">
        <button
          onClick={() => {
            setIsModal(false);
            document.body.style.overflow = "visible";
          }}
        >
          <i className="bi bi-x-circle-fill" />
        </button>
      </div>
      <div className="project__modal-img-wrapper">
        <img
          className="project__modal-img"
          src={images[imgIndex]}
          alt="Podgląd projektu"
        />
      </div>
      <div className="project__modal-btns">
        <button
          onClick={() => {
            setImgIndex((prev) => {
              if (prev === 0) return images.length - 1;
              else return prev - 1;
            });
            modal.current.scrollTop = 0;
          }}
          className="project__modal-btn"
        >
          <i className="bi bi-arrow-left-circle-fill" />
        </button>
        <button
          onClick={() => {
            setImgIndex((prev) => {
              if (prev === images.length - 1) return 0;
              else return prev + 1;
            });
            modal.current.scrollTop = 0;
          }}
        >
          <i className="bi bi-arrow-right-circle-fill" />
        </button>
      </div>
    </dialog>
  );
};

export default ProjectModal;
