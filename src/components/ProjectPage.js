import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
  <div className="project-header">
    <span>Pro</span>jects
  </div>

  <div className="project-list">

    {/* Project 1 – NOVYA */}
    <div className="project">
      <p>Project 1</p>
      <p>NOVYA – AI Educational Platform :</p>
      <p>
        <span>
          Developed NOVYA, a multi-portal AI educational platform with Student, Parent, Teacher, 
          and Admin modules using React, Django, FastAPI, and PostgreSQL. Implemented an 
          AI Learning Assistant using OpenRouter (Google Gemini 2.0 Flash), dynamic Quick Practice & 
          Mock Test generators, gamification (reward points, badges, leaderboard), 
          and dashboards for parents, teachers, and admin.
        </span>
        
      </p>
    </div>

    {/* Project 2 – CashbackMart */}
    <div className="project">
      <p>Project 2</p>
      <p>CashbackMart – E-Commerce App :</p>
      <p>
        <span>
          Built a full-featured e-commerce mobile app using Flutter, FastAPI, and PostgreSQL 
          with wallet system, payments, biometric login, SMS/FCM notifications, 
          and an admin dashboard. Implemented Lucky Draw, Schemes (installment savings), 
          Earn Cashback (bill uploads + admin verification), and complete product management 
          including cart, checkout, and orders.
        </span>
        
      </p>
    </div>

    {/* Project 3 – Vunathi Capital */}
    <div className="project">
      <p>Project 3</p>
      <p>Vunathi Capital – Trading Application :</p>
      <p>
        <span>
          Developed an in-house trading application using Flutter, Node.js (Express), and Firebase. 
          Integrated Zerodha API to fetch real-time portfolio data, P&L reports, trade history, 
          balances, and user account information. Designed dashboards for traders to view 
          performance, trades, and analytics with secure authentication and live data sync.
        </span>
        
      </p>
    </div>

  </div>
</div>

  );
};

export default ProjectPage;