import React from "react";
import "./Skills.scss";
import icons from "../../constans/icons";

const Skills = () => {
  const removeAnimation = (skill) => skill.classList.remove("scaleDown");

  const handleSkillHover = (e) => {
    const skill = e.currentTarget;
    if (!skill.classList.contains("scaleDown")) {
      skill.classList.add("scaleDown");
      setTimeout(() => removeAnimation(skill), 3030);
    } else return;
  };

  return (
    <section className="container skills">
      <div>
        <h2 className="section-title">Umiejętności</h2>
        <div className="skills__cards">
          {icons.skills.map((skill) => (
            <div
              onMouseEnter={(e) => handleSkillHover(e)}
              className="skills__skill"
              key={skill.text}
            >
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
