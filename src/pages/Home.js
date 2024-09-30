/**
 * File: Home.js
 * Student's Name: Jeremy Salvador
 * Student ID: 301353563
 * Date: September 29, 2024
 * Description: Display's welcome message and a mission statement with navigation buttons to move from different pages.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you are using a separate CSS file for styling

const Home = () => (
  <div className="home">
    <h1>Welcome to My Portfolio</h1>
    <p className="mission-statement">
      I am Jeremy Fernando Salvador, a Software Engineering student passionate about using technology to solve complex problems. 
      With a background in process optimization and data analysis, my mission is to continuously improve my skills and deliver impactful solutions.
    </p>
    <div className="home-buttons">
      <Link to="/about" className="btn">About Me</Link>
      <Link to="/projects" className="btn">My Projects</Link>
      <Link to="/services" className="btn">Services</Link>
      <Link to="/contact" className="btn">Contact Me</Link>
    </div>
  </div>
);

export default Home;
