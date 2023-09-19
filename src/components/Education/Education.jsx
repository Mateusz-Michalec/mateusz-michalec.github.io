import React, { forwardRef } from "react";
import "./Education.scss";
import EducationCard from "./EducationCard";

const Education = forwardRef(({ languageData }, ref) => {
  return (
    <section ref={ref} className="container education">
      <h2 className="section-title hidden-opacity">
        {languageData.educationTitle}
      </h2>
      <div className="education__content hidden-fadeIn-right">
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
});

export default Education;
