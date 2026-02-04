import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaBrain, FaCloud, FaLaptopCode } from 'react-icons/fa';
import '../styles/Skills.css';

const SkillBar = ({ name, level, isVisible }) => {
  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ icon: Icon, title, skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-category" ref={categoryRef}>
      <div className="category-header">
        <Icon />
        <h3>{title}</h3>
      </div>
      <div className="skill-items">
        {skills?.map((skill, index) => (
          <SkillBar 
            key={index} 
            name={skill.name} 
            level={skill.level} 
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  const categories = [
    { icon: FaCode, title: 'Programming Languages', skills: skills?.languages },
    { icon: FaBrain, title: 'AI & Machine Learning', skills: skills?.aiml },
    { icon: FaCloud, title: 'Cloud & DevOps', skills: skills?.cloud },
    { icon: FaLaptopCode, title: 'Web Development', skills: skills?.web },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
