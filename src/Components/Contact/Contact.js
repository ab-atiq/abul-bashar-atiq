import React from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_h4w3a81",
        e.target,
        "user_k1hkxGgcIjzozr8nSk82l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <br />
        <input type="submit" value="Send" />
      </form>
    </Container>
  );
};

export default Contact;
