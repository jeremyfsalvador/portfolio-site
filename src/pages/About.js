/**
 * File: About.js
 * Student's Name: Jeremy Salvador
 * Student ID: 301353563
 * Date: September 29, 2024
 * Description: About me page introducing myself and sharing my background information.
 */

import React from 'react';
import profileImg from '../assets/profile.JPG'; // Import your profile image
import resume from '../resume.pdf'; // Import your resume

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <img src={profileImg} alt="Profile" className="profile-img" />
    <p>
      I’m <strong>Jeremy Fernando Salvador</strong>, a Software Engineering student at Centennial College in Toronto with a background in automation and systems development.
      I have 8 years of professional experience at Unilever, where I specialized in process optimization and data analysis.
      I hold a Bachelor's degree in Computer Science and am skilled in programming languages like VBA, SQL, and Python.
    </p>
    <p>
      I'm passionate about using technology to solve complex problems and continuously improving my technical expertise.
      Fluent in both English and Tagalog, I enjoy working in collaborative environments and delivering impactful solutions.
    </p>
    <a href={resume} download="resume.pdf" className="btn">Download Resume</a>
  </div>
);

export default About;
