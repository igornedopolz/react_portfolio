import React from 'react';
import './Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social-media">
          <h3 className="footer__title">Follow</h3>
          <ul className="footer__social-list">
            <li className="footer__social-item"><a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className="footer__social-item"><a href="https://linkedin.com/" className="footer__social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__title">Contact</h3>
          <p className="footer__email"><a href="mailto:igor.nedopolz@gmail.com" className="footer__email-link">igor.nedopolz@gmail.com</a></p>
          <p className="footer__email"><a href="tel:+420777622676" className="footer__email-link">+420 777 622 676</a></p>
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__copyright">
        <p className="footer__text">&copy; 2024 Igor Nedopolz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
