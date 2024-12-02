// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './style/Contact.css'; // Import CSS properly

const ContactUs = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitData();
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Data submitted successfully!');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert('Failed to submit data. Please try again.');
    }
  };

  // Function to submit data to the backend
  const submitData = async () => {
    const { name, email, message } = formData;
    const res = await fetch("https://webduniyaa-54fbb-default-rtdb.firebaseio.com/userDataRecords.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  };

  return (
    <>
      
      <div className="container">
        <div className="left-section">
          <h2 className="subtitle">GET IN TOUCH</h2>
          <h1 className="title">Convey Your Ideas to Us</h1>
          <p>Contact us for questions, technical assistance, or collaboration opportunities</p>
          <div className="contact-info">
            <p>
              <i className="fas fa-phone"></i> +91 8188874730
            </p>
            <p>
              <i className="fas fa-envelope"></i> webduniya.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Uttar Pradesh, India
            </p>
          </div>
        </div>
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="submit-btn" type="submit">SUBMIT NOW</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
