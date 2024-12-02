// eslint-disable-next-line no-unused-vars
import React from "react";
import "../style/Footer.css"

const Footer = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1405.4710561193017!2d82.66286602611298!3d26.160509832865397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1730874638982!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="footer">
        <div className="logo">
          <img
            alt="Company logo"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/McBgJ3RSHgbjBJhCjBsgjjf78tQiYVTxeWcX8xeedeESpv8cC.jpg"
            width="40"
          />
          <span>web tech</span>
        </div>
        <div className="newsletter">
          <p>Stay in the loop and sign up for the Wardiere newsletter:</p>
          <div>
            <input placeholder="Enter your email" type="email" />
            <button>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="links">
          <div>
            <strong>Company</strong>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Solutions</a>
            <a href="#">Pricing</a>
            <a href="#">Team</a>
            <a href="#">Career</a>
          </div>
          <div>
            <strong>Documentation</strong>
            <a href="#">Help Centre</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <strong>Social</strong>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer bottom1">
        <span>© Wardiere Inc. All Rights Reserved 2023</span>
        <a href="#">Terms &amp; Conditions</a>
      </div>
    </>
  );
};

export default Footer;
