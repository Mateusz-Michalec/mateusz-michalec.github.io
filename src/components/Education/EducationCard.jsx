import React from "react";

const EducationCard = ({ school, years, degree }) => {
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
            <span>Kierunek:</span> <b>Informatyka</b>
          </p>
          <p>
            <span>Tytuł:</span> <b>{degree}</b>
          </p>
          <p>Stypendia naukowe za wyróżniające wyniki w nauce</p>
        </header>
      </div>
    </div>
  );
};

export default EducationCard;
