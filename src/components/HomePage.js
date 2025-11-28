import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <span>Hey,</span>
          <p>
            This is<span> Sai Chandra</span>,
          </p>
        </div>
        <span>a Web and Android developer.</span>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/saichandra2332"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sabbavarapu-sai-chandra-43a302248/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        
      </div>
    </div>
  );
};

export default HomePage;