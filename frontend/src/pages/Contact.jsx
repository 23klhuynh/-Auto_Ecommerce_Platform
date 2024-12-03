import React from "react";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact__container">
        <h2 className="contact__header">Contact Us</h2>
        <ContactForm />
        <ContactInfo />
        <SocialMedia />
      </div>
    </section>
  );
}

export default Contact;
