import "./App.scss";

import React from "react";
import Hero from "./components/Hero/Hero";
import Options from "./components/Hero/Options/Options";
import Menu from "./components/Hero/Menu/Menu";

const App = () => {
  return (
    <>
      <div className="container">
        <Options />
        <Menu />
      </div>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
