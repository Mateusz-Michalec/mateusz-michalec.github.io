import React, { forwardRef } from "react";
import "./Hero.scss";
import { images } from "../../constans";

const Hero = forwardRef(({ languageData }, ref) => {
  return (
    <section className="hero ">
      <div className="hero__gradient" />
      <div ref={ref} className="container">
        <img
          src={images.myPhoto}
          className="hero__img hidden-opacity"
          alt="Mateusz Michalec"
        />

        <header className="hero__header hidden-opacity">
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
              <a
                href="https://drive.google.com/file/d/15AA3DqkPOomysj90bT-u1Q8AR-9Ter5t/view?usp=sharing"
                target="_blank"
              >
                <i className="bi bi-filetype-pdf"></i>
                <span className="hero__cv-text">CV</span>
              </a>
            </button>
          </div>

          <p className="hero__desc ">"{languageData.heroDesc}"</p>
        </header>
      </div>
    </section>
  );
});

export default Hero;
