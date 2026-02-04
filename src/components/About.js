import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import '../styles/About.css';

const About = ({ personal }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-img-container">
              <img src="/profile.jpg" alt="B Dheeraj" className="about-profile-img" />
            </div>
          </div>
          <div className="about-text">
            <h3>A Dedicated Developer & Tech Enthusiast</h3>
            <p>
              I am pursuing my engineering graduation with expertise in cloud computing, AI, Data Science,
              and Full Stack Development. Skilled in AWS, Java, Python, and troubleshooting technical issues.
            </p>
            <p>
              Adept at supporting critical applications, delivering excellent customer service, and collaborating
              in fast-paced environments. Ready to contribute to the tech industry by utilizing cloud knowledge
              and problem-solving skills.
            </p>
            <div className="about-info">
              <div className="info-item">
                <FaGraduationCap />
                <span>B.Tech CSE Student</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Annamacharya Institute of Technology</span>
              </div>
              <div className="info-item">
                <FaCalendar />
                <span>Expected Graduation: July 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
