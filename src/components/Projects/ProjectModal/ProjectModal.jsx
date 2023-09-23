import React, { useEffect, useRef, useState } from "react";
import "./ProjectModal.scss";
import ReactDOM from "react-dom";

const ProjectModal = ({ images, isModal, setIsModal }) => {
  const modalRef = useRef();
  const [imgIndex, setImgIndex] = useState(0);

  const handleTabDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const focusableElements = modalRef.current.querySelectorAll(
        "button, .project__modal-img-wrapper"
      );

      const focusableElementsArray = Array.from(focusableElements);

      const currentIndex = focusableElementsArray.indexOf(
        document.activeElement
      );

      const nextIndex = (currentIndex + 1) % focusableElementsArray.length;

      focusableElementsArray[nextIndex].focus();
    }
  };

  useEffect(() => {
    if (isModal && modalRef.current) {
      modalRef.current.classList.add("show");
      modalRef.current.focus();
      window.addEventListener("keydown", handleTabDown);
    }
    return () => window.removeEventListener("keydown", handleTabDown);
  }, [isModal]);

  return ReactDOM.createPortal(
    <dialog
      tabIndex={0}
      open={isModal}
      className="project__modal"
      ref={modalRef}
    >
      <div className="project__modal-close-bar">
        <button
          onClick={() => {
            setIsModal(false);
            modalRef.current.classList.remove("show");
            document.body.style.overflow = "visible";
          }}
        >
          <i className="bi bi-x-circle-fill" />
        </button>
      </div>
      <div tabIndex={0} className="project__modal-img-wrapper">
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
          }}
        >
          <i className="bi bi-arrow-right-circle-fill" />
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
};

export default ProjectModal;
