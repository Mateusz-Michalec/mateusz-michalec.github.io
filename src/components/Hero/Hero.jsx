import React from "react";
import "./Hero.scss";
import { images } from "../../constans";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__gradient" />
      <div className="container">
        <img
          src={images.myPhoto}
          className="hero__img"
          alt="Mateusz Michalec"
        />

        <header className="hero__header">
          <h1 className="hero__name">Mateusz Michalec</h1>
          <h5 className="hero__job">Frontend developer</h5>
          <div className="hero__btns">
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              <i className="bi bi-envelope"></i>
            </button>
            <button>
              <a href="https://github.com/Mateusz-Michalec" target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </button>
            <button className="hero__cv">
              <i className="bi bi-filetype-pdf"></i>
              <span className="hero__cv-text">CV</span>
            </button>
          </div>

          <p className="hero__desc ">
            "Moim celem jest projektowanie stron internetowych poprzez tworzenie
            intuicyjnych, responsywnych i estetycznych interfejsów, które
            zapewnią użytkownikom pozytywne doświadczenia."
          </p>
        </header>
      </div>
    </section>
  );
};

export default Hero;
