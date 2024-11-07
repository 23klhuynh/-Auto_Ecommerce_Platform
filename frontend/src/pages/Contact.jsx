import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact__container">
        <h2 className="contact__header">Contact Us</h2>
        <form className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Inquiry about services"
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Any questions or concerns"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact__btn">
            Send Message
          </button>
        </form>
        <div className="contact__info">
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Hours: Mon-Fri, 9 AM - 5 PM</p>
        </div>
        <div className="contact__social">
          <Link to="/dashboard">
            <FaFacebook />
          </Link>
          <Link to="/dashboard">
            <FaTwitter />
          </Link>
          <Link to="/dashboard">
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
