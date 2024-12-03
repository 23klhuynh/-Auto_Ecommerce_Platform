import React from "react";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";

function ContactForm() {
  return (
    <form className="contact__form">
      <FormField
        label="Name"
        id="name"
        placeholder="John Doe"
        required={true}
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="example@example.com"
        required={true}
      />
      <FormField
        label="Subject"
        id="subject"
        placeholder="Inquiry about services"
        required={true}
      />
      <FormField
        label="Message"
        id="message"
        type="textarea"
        placeholder="Any questions or concerns"
        rows={5}
        required={true}
      />

      <SubmitButton
        className="contact__btn"
        text="Send Message"
        type="submit"
      />
    </form>
  );
}

export default ContactForm;
