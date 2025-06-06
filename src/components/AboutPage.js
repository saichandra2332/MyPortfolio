import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        Ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
        "Building efficient and dynamic web solutions with full-stack technologies excites me."
        </div>
        <div className="about-right">
          <p>
            I'm Sai Chandra Sabbavarapu. I am an <span>aspiring web developer</span>. I have
            done My Graduation in Electrical and Electronics Engineering from{" "}
            <span>Sai Ganapathi Engineering</span>, Sontyam, Andhra Pradesh.
          </p>
          <p>
            I specialize in efficient <span>Websites</span>  and
            <span> HTML</span> & <span>CSS</span> & <span>PHP</span> that just work across all
            platforms and browsers. I care deeply about building user-friendly and accessible interfaces for everyone
          </p>
          <p>
            At the moment, I'm passionate about designing more innovative
            <span> Front-end and Back-end Technologies</span> and working towards a career as a <span>Web developer</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;