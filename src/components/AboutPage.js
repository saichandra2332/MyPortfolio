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
      "Building efficient and dynamic digital solutions with modern full-stack and mobile technologies."
    </div>

    <div className="about-right">
      <p>
        I am currently working on <span>Flutter app development</span>, applying Dart programming
        fundamentals to build cross-platform mobile applications with smooth performance and
        intuitive user interfaces.
      </p>

      <p>
        I also have hands-on experience with <span>React.js</span>, which strengthened my
        front-end development skills and deepened my understanding of modern,
        component-based UI architecture.
      </p>

      

      <p>
        Presently, I'm working on both a website and a mobile application:
      </p>

      <p>
        <strong>Website (Novya):</strong> An educational platform built using
        <span> React</span>, <span>Python</span>, <span>Django</span>, 
        <span> FastAPI</span>, and <span>PostgreSQL</span>.
      </p>

      <p>
        <strong>Mobile App:</strong> An e-commerce application developed with
        <span> Flutter</span>, <span> Dart</span>, <span>Python</span>, <span>FastAPI</span>, and
        <span> PostgreSQL</span>.
      </p>

      <p>
        I'm continuously improving my full-stack and mobile development skills to build powerful,
        scalable, and user-focused digital solutions.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutPage;