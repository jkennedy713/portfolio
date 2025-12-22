import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <div className="education-content">
          <div className="education-item">
            <div className="education-icon">
              <FontAwesomeIcon icon={faGraduationCap} size="2x"/>
            </div>
            <div className="education-details">
              <h3>University of Washington</h3>
              <h4>Computer Science</h4>
              <p>2023 - 2027</p>
              <p><strong>GPA:</strong> 3.7/4.0 (Dean's List); <strong>Minors:</strong> Business, Cybersecurity, Policy Studies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

