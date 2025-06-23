import React from 'react';

const Skills = ({ skills, children }) => {
  // Group skills into two columns
  const halfwayPoint = Math.ceil(skills.length / 2);
  const firstColumnSkills = skills.slice(0, halfwayPoint);
  const secondColumnSkills = skills.slice(halfwayPoint);

  // Function to convert percentage to skill level text
  const getSkillLevel = (percentage) => {
    if (percentage >= 85) return "Advanced";
    if (percentage >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        
        {children && <div className="skills-visualizer-container">{children}</div>}
        
        <div className="skills-content">
          <div className="skills-column">
            {firstColumnSkills.map((skill, index) => (
              <div key={index} className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{getSkillLevel(skill.level)}</span>
                </div>
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {secondColumnSkills.map((skill, index) => (
              <div key={index} className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{getSkillLevel(skill.level)}</span>
                </div>
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;