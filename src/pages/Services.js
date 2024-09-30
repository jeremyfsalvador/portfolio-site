/**
 * File: Services.js
 * Student's Name: Jeremy Salvador
 * Student ID: 301353563
 * Date: September 29, 2024
 * Description: Services Page displaying all the services that I can offer.
 */
 
import React from 'react';
import './Services.css'; // Link to the CSS file for styling
import programmingImg from '../assets/programming.jpg'; // Add relevant images
import webDevImg from '../assets/web-development.jpg';
import analyticsImg from '../assets/data-analytics.jpg'; // New image for Dashboard Development

const Services = () => (
  <div className="services">
    <h1>Services I Offer</h1>
    <div className="service-list">
      <div className="service">
        <img src={programmingImg} alt="General Programming" />
        <h2>General Programming</h2>
        <p>Providing solutions for complex problems using languages like Python, Java, C++, and more.</p>
      </div>

      <div className="service">
        <img src={webDevImg} alt="Web Development" />
        <h2>Web Development</h2>
        <p>Building modern and responsive websites with HTML, CSS, JavaScript, React, and other frameworks.</p>
      </div>

      <div className="service">
        <img src={analyticsImg} alt="Data Analytics" />
        <h2>Data Analytics</h2>
        <p>Designing and implementing data dashboards with real-time analytics for decision-making using tools like Power BI and Tableau.</p>
      </div>
    </div>
  </div>
);

export default Services;
