import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Culinova</p>
          <ul className="footer-links">
            
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

