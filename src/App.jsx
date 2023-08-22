import "./App.scss";

import React from "react";
import Hero from "./components/Hero/Hero";
import Options from "./components/Hero/Options/Options";
import Menu from "./components/Hero/Menu/Menu";
import Education from "./components/Education/Education";

const App = () => {
  return (
    <>
      <div className="container">
        <Options />
        <Menu />
      </div>
      <main className="app">
        <Hero />
        <div className="container">
          <Education />
        </div>
      </main>
    </>
  );
};

export default App;
