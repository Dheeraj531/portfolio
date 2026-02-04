import React from 'react';
import { FaUniversity, FaSchool, FaBook } from 'react-icons/fa';
import '../styles/Education.css';

const iconMap = {
  university: FaUniversity,
  school: FaSchool,
  book: FaBook,
};

const Education = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education?.map((edu) => {
            const IconComponent = iconMap[edu.icon] || FaBook;
            return (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-icon">
                  <IconComponent />
                </div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  {edu.duration && <p className="timeline-date">{edu.duration}</p>}
                  <p className="timeline-grade"><strong>{edu.grade}</strong></p>
                  {edu.coursework && (
                    <p className="timeline-description">
                      <strong>Relevant Coursework:</strong> {edu.coursework}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
