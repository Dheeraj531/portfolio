import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({ personal }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Dheeraj<span>.</span></a>
          </div>
          <div className="footer-social">
            <a href={`mailto:${personal?.email}`}>
              <FaEnvelope />
            </a>
            <a href={personal?.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={`tel:${personal?.phone}`}>
              <FaPhone />
            </a>
          </div>
          <p className="copyright">© 2026 B Dheeraj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
