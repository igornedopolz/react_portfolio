import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error('Please fill out all fields.', { position: 'top-right' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', { position: 'top-right' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if validation fails
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_ACCESS_KEY, // Use environment variable for access key
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully!', { position: 'top-right' });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const result = await response.json();
        toast.error(result.message || 'Failed to send message. Please try again.', { position: 'top-right' });
      }
    } catch (error) {
      toast.error('An error occurred. Please check your network and try again.', { position: 'top-right' });
    } finally {
      setLoading(false); // Stop loading after response or error
    }
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Send me a message!</h2>
      <p className="contact-form__subtitle">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <form className="contact-form__container" onSubmit={handleSubmit}>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="name">Your Name</label>
          <input
            className="contact-form__input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading} // Disable input when loading
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">Email Address</label>
          <input
            className="contact-form__input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            disabled={loading} // Disable input when loading
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="message">Your Message</label>
          <textarea
            className="contact-form__textarea"
            id="message"
            name="message"
            placeholder="Your message here"
            value={formData.message}
            onChange={handleChange}
            disabled={loading} // Disable textarea when loading
          />
        </div>
        <button type="submit" className="contact-form__button" disabled={loading}>
          {loading ? 'SENDING...' : 'SHOOT →'}
        </button>
      </form>

      {/* ToastContainer for toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
