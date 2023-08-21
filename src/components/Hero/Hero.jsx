import React from "react";
import "./Hero.scss";
import myPhoto from "../../assets/images/myphoto.png";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={myPhoto}
        className="hero__img"
        alt="Zdjęcie - Mateusz Michalec"
      />
      <header>
        <h1 className="hero__name">Mateusz Michalec</h1>
        <p>Frontend developer</p>
      </header>
    </section>
  );
};

export default Hero;
