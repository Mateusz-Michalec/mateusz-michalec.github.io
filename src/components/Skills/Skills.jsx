import React, { forwardRef } from "react";
import "./Skills.scss";
import icons from "../../constans/icons";

const Skills = forwardRef(({ languageData }, ref) => {
  return (
    <section ref={ref} className="container skills">
      <h2 className="section-title hidden-opacity">
        {languageData.skillsTitle}
      </h2>
      <div className="skills__cards hidden-opacity">
        {icons.skills.map((skill) => (
          <div className="skills__skill" key={skill.text}>
            <img loading="lazy" src={skill.icon} alt={skill.alt} />
            <h5 className="skills__skill-name">{skill.text}</h5>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
