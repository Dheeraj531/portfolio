import React from 'react';
import { FaTrafficLight, FaSeedling, FaCheck } from 'react-icons/fa';
import '../styles/Projects.css';

const iconMap = {
  'traffic-light': FaTrafficLight,
  'seedling': FaSeedling,
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects?.map((project) => {
            const IconComponent = iconMap[project.icon] || FaCheck;
            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <IconComponent />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature, index) => (
                      <span key={index}>
                        <FaCheck /> {feature}
                      </span>
                    ))}
                  </div>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
