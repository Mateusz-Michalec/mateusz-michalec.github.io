import React from "react";
import "./Education.scss";
import EducationCard from "./EducationCard";

const Education = ({ languageData }) => {
  return (
    <section className="container education">
      <h2 className="section-title">{languageData.educationTitle}</h2>
      <div className="education__content">
        <EducationCard
          languageData={languageData}
          school={languageData.educationSchoolName1}
          years={"2015 - 2019"}
          degree={languageData.educationSchoolDegree1}
        />
        <EducationCard
          languageData={languageData}
          school={languageData.educationSchoolName2}
          years={"2019 - 2023"}
          degree={languageData.educationSchoolDegree2}
        />
      </div>
    </section>
  );
};

export default Education;
