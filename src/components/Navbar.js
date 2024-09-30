/**
 * File: Navbar.js
 * Student's Name: Jeremy Salvador
 * Student ID: 301353563
 * Date: September 29, 2024
 * Description: Navbar for the navigation bar in the header section.
 */
 
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Path to your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
