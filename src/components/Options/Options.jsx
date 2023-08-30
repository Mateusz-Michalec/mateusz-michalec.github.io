import React from "react";
import "./Options.scss";
import { icons } from "../../constans";

const Options = () => {
  return (
    <aside className="options container">
      <button>
        <img className="options__flag" src={icons.gbFlag} alt="Flaga Polski" />
      </button>
      <button>
        <i className="bi bi-sun-fill"></i>
      </button>

      {/* <i className="bi bi-moon-stars-fill"></i> */}
    </aside>
  );
};

export default Options;
