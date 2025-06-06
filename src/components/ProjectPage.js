import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>Pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Project 1</p>
          <p>IT Help Support Desk :</p>
          <p>
            <span>Developed an IT support ticketing system for users to raise issues, track status, and streamline communication. Built an admin dashboard to manage, assign, and resolve tickets efficiently.
</span>
            <a href="https://github.com/saichandra2332/Helpdesk-system.git">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Project 2</p>
          <p>Invoice Bill Generator :</p>
          <p>
            <span>Developed a responsive invoicing system with authentication, data validation, auto-calculations, PDF generation, and efficient invoice management for a seamless billing process.</span>
            <a href="https://github.com/saichandra2332/Invoice.git">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Project 3</p>
          <p>Dyanamic Mail Sender :</p>
          <p>
            <span>Developed a secure login, client management, dynamic template, Excel export, file upload, and bulk email system, ensuring efficient data handling and personalized communication.</span>
            <a href="https://github.com/saichandra2332/Dynamic-Mail-Sender.git">
              Tap to view
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectPage;