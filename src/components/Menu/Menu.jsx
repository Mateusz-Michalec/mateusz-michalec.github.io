import React from "react";
import "./Menu.scss";
import Options from "../Options/Options";

const Menu = () => {
  return (
    <nav className="menu">
      <Options />
      <button className="menu__item">
        <i className="bi bi-book"></i>
        <span className="menu__item-name">Edukacja</span>
      </button>
      <button className="menu__item">
        <i className="bi bi-bookmark-check"></i>
        <span className="menu__item-name">Umiejętności</span>
      </button>
      <button className="menu__item">
        <i className="bi bi-briefcase"></i>
        <span className="menu__item-name">Projekty</span>
      </button>
      <button className="menu__item">
        <i className="bi bi-envelope"></i>
        <span className="menu__item-name">Kontakt</span>
      </button>
    </nav>
  );
};

export default Menu;
