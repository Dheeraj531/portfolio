import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaChevronDown } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = ({ personal }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Cloud Computing Enthusiast',
    'AI & ML Developer',
    'Data Science Student',
    'Full Stack Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">{personal?.name || 'B Dheeraj'}</h1>
          <h2 className="title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="description">
            Passionate about Cloud Computing, AI, Data Science, and Full Stack Development.
            Ready to build innovative solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="social-links">
            <a href={`mailto:${personal?.email}`} title="Email">
              <FaEnvelope />
            </a>
            <a href={personal?.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`tel:${personal?.phone}`} title="Phone">
              <FaPhone />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="gradient-circle"></div>
            <img src="/profile.jpg" alt="B Dheeraj" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
