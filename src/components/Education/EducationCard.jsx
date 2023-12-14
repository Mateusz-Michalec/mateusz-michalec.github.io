import React from "react"

const EducationCard = ({ school, years, degree, languageData }) => {
  return (
    <div className="education__card">
      <i className="bi bi-mortarboard"></i>
      <div>
        <header className="education__card-content">
          <div>
            <h4>{school}</h4>
            <span className="education__years">{years}</span>
          </div>
          <p>
            <span>{languageData.educationType}: </span>
            <b>{languageData.educationStudies}</b>
          </p>
          <p>
            <span>{languageData.educationDegree}:</span> <b>{degree}</b>
          </p>
        </header>
      </div>
    </div>
  )
}

export default EducationCard
