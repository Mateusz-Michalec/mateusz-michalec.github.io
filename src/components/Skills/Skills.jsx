import React from "react";
import "./Skills.scss";
import icons from "../../constans/icons";

const Skills = () => {
  return (
    <section className="container skills">
      <div>
        <h2 className="section-title">Umiejętności</h2>
        <div className="skills__cards">
          {icons.skills.map((skill) => (
            <div className="skills__skill" key={skill.text}>
              <img src={skill.icon} alt={skill.alt} />
              <h5 className="skills__skill-name">{skill.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
