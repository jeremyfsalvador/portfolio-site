/**
 * File: Project.js
 * Student's Name: Jeremy Salvador
 * Student ID: 301353563
 * Date: September 29, 2024
 * Description: Projects page showing all projects completed.
 */
 
import React from 'react';
import './Projects.css'; // Ensure this file is linked for styles
import project1 from '../assets/project1.jpg'; // Image for HR Dashboard
import project2 from '../assets/project2.jpg'; // Image for Payroll Tool
import project3 from '../assets/project3.jpg'; // Image for Club Management

const Projects = () => (
  <div className="projects">
    <h1>My Projects</h1>

    <div className="project">
      <img src={project1} alt="HR Dashboard Automation" />
      <h2>HR Dashboard Automation for Southeast Asia, Australia, and New Zealand</h2>
      <p><strong>Role:</strong> Lead Developer | <strong>Outcome:</strong> Streamlined data analysis for HR teams across multiple regions</p>
      <p>
        I developed and implemented an HR dashboard that automated high-level data review, giving HR teams and leaders instant access to key metrics. 
        This project reduced manual processes by 80%, saving hundreds of hours annually and enabling more strategic decision-making. 
        The dashboard, integrated with Power BI, provided real-time insights into employee metrics, streamlining decision-making across Southeast Asia, Australia, and New Zealand.
      </p>
    </div>

    <div className="project">
      <img src={project2} alt="Payroll Reporting Tool" />
      <h2>Payroll Reporting Tool Using VBA</h2>
      <p><strong>Role:</strong> Developer | <strong>Outcome:</strong> Reduced payroll reporting time from 8 hours to 10 minutes</p>
      <p>
        This project involved creating a VBA-driven payroll reporting tool that automated payroll calculations and reports. 
        I reduced the time spent on this bi-monthly task from 8 hours to just 10 minutes, resulting in an annual time savings of over 188 hours. 
        The tool also enhanced accuracy, eliminating human errors in payroll processing and improving overall efficiency.
      </p>
    </div>

    <div className="project">
      <img src={project3} alt="School Club Management Application" />
      <h2>School Club Management Application</h2>
      <p><strong>Role:</strong> Software Engineering Student | <strong>Outcome:</strong> Building a one-stop shop for student club management</p>
      <p>
        As part of my Software Engineering studies, I am currently developing a web-based application for managing student clubs. 
        This platform allows students to join clubs, view announcements, and engage with events. Features include feedback systems, event ratings, push notifications, and real-time chat. 
        I’m responsible for designing the system architecture and implementing key functionalities using technologies like Java, SQL, and front-end frameworks. 
        The goal is to simplify club administration and enhance student engagement across campus.
      </p>
    </div>
  </div>
);

export default Projects;
