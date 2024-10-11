import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Send me a message!</h2>
      <p className="contact-form__subtitle">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <form className="contact-form__container">
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="name">Your Name</label>
            <input className="contact-form__input" type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="email">Email Address</label>
            <input className="contact-form__input" type="email" id="email" name="email" placeholder="Enter your email address" />
          </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="message">Your Message</label>
          <textarea className="contact-form__textarea" id="message" name="message" placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?" />
        </div>
        <button type="submit" className="contact-form__button">SHOOT →</button>
      </form>
    </div>
  );
}

export default Contact;
