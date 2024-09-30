/**
 * File: Contact.js
 * Student's Name: Jeremy Salvador
 * Student ID: 301353563
 * Date: September 29, 2024
 * Description: Contact page for capturing user messages and redirecting them to the Home page.
 */

import React, { useState } from 'react';
import './Contact.css'; // Link to the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and redirect
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Information</h1>
        <p>Email: jsalva17@my.centennialcollege.ca</p>
        <p>Phone: +123-456-7890</p>
        <p>Location: Toronto, Canada</p>
      </div>

      <div className="contact-form">
        <h1>Send Me a Message</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
