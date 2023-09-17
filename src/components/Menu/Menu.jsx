import React from "react";
import "./Menu.scss";
import Options from "../Options/Options";

const Menu = ({ scrollToSection, languageData }) => {
  return (
    <nav className="menu">
      <Options languageData={languageData} />
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="menu__up-btn"
      >
        <i className="bi bi-arrow-up-circle"></i>
      </button>
      <button
        onClick={() => scrollToSection("education")}
        className="menu__item"
      >
        <i className="bi bi-book"></i>
        <span className="menu__item-name">{languageData.educationTitle}</span>
      </button>
      <button onClick={() => scrollToSection("skills")} className="menu__item">
        <i className="bi bi-bookmark-check"></i>
        <span className="menu__item-name">{languageData.skillsTitle}</span>
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="menu__item"
      >
        <i className="bi bi-briefcase"></i>
        <span className="menu__item-name">{languageData.projectsTitle}</span>
      </button>
      <button onClick={() => scrollToSection("contact")} className="menu__item">
        <i className="bi bi-envelope"></i>
        <span className="menu__item-name">{languageData.contactTitle}</span>
      </button>
    </nav>
  );
};

export default Menu;
