import React from "react";
import "./Hero.scss";
import { images } from "../../constans";

const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="hero__gradient" /> */}
      <div className="container">
        <div className="hero__img-glow-border">
          <img src={images.myPhoto} className="hero__img" alt="Zdjęcie " />
        </div>
        <header className="hero__header">
          <h1 className="hero__name">Mateusz Michalec</h1>
          <h5 className="hero__job">Frontend developer</h5>
          <div className="hero__btns">
            <button>
              <i className="bi bi-envelope"></i>
            </button>
            <button>
              <i className="bi bi-github"></i>
            </button>
            <button>
              <i className="bi bi-filetype-pdf"></i>
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
