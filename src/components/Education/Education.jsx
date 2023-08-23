import React from "react";
import "./Education.scss";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section className="container education">
      <h2 className="section-title">Edukacja</h2>
      <div className="education__content">
        <EducationCard
          school={"Zespół Szkół Technicznych im. Tadeusza Kościuszki w Radomiu"}
          years={"2015 - 2019"}
          degree={"technik informatyk (E.12, E.13, E.14)"}
        />
        <EducationCard
          school={
            "Uniwersytet Technologiczno-Humanistyczny im. Kazimierza Pułaskiego w Radomiu"
          }
          years={"2019 - 2023"}
          degree={"inżynier"}
        />
      </div>
    </section>
  );
};

export default Education;
