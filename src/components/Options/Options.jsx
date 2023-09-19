import React, { useState } from "react";
import "./Options.scss";
import { icons } from "../../constans";
import { useLanguage } from "../../context/LanguageContext";

const Options = ({ languageData }) => {
  const { language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      document.querySelector("#root").setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.querySelector("#root").setAttribute("data-theme", "dark");
    }
  };

  return (
    <aside className="options container">
      <button
        onClick={() => {
          document
            .querySelectorAll(".visible")
            .forEach((el) => el.classList.remove("visible"));
          setLanguage((prev) => (prev === "pl" ? "en" : "pl"));
        }}
      >
        <img
          className="options__flag"
          src={language === "pl" ? icons.gbFlag : icons.plFlag}
          alt={language === "pl" ? "Flaga Polski" : "Flaga Wielkiej Brytanii"}
        />
      </button>
      <button onClick={() => handleThemeChange()}>
        {theme === "dark" ? (
          <i className="bi bi-sun-fill" />
        ) : (
          <i className="bi bi-moon-stars-fill"></i>
        )}
      </button>
    </aside>
  );
};

export default Options;
