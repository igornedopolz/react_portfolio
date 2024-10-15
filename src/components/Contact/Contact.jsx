import React from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.ACCESS_KEY,
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully!', { position: 'top-right', theme: "colored" });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        toast.error('Failed to send message. Please try again.', { position: 'top-right', theme: "colored" });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', { position: 'top-right', theme: "colored" });
    }
  };

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
