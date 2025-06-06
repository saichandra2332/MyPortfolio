import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>Experience <span>&</span> Education</p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Associate Developer</p>
          <p>Vunathi Technologies</p>
          <p>
            <span>March 2025 - present</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>Internship</p>
          <p>Vulcantechs</p>
          <p>
            <span>April 2023  - April 2024</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelor of Technology - Electrical and Electronics Engineering</p>
          <p>Sai Ganapathi Engineering</p>
          <p>
            <span>2020 - 2023</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>State Board Of Technical Education (Diploma)</p>
          <p>Sai Ganapathi Polytechnic</p>
          <p>
            <span>2017 - 2020</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
        <div className="education">
          <p>Secondary School of Education</p>
          <p>MPEV EM School</p>
          <p>
            <span>2017</span>
            <a href="/">
              <LocationOnIcon />
              Visakhapatnam, Andhra Pradesh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;