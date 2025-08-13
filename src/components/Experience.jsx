import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="experience-content">
          {experiences && experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="experience-title-company">
                    <h3 className="experience-title">{experience.title}</h3>
                    <h4 className="experience-company">{experience.company}</h4>
                  </div>
                  <div className="experience-duration">
                    <span className="duration">{experience.duration}</span>
                    <span className="location">{experience.location}</span>
                  </div>
                </div>
                <div className="experience-description">
                  <p>{experience.description}</p>
                  {experience.achievements && experience.achievements.length > 0 && (
                    <ul className="achievements-list">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {experience.technologies && (
                  <div className="experience-technologies">
                    <span className="tech-label">Technologies:</span>
                    <span className="tech-list">{experience.technologies}</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-experience">
              <p>Experience information will be updated soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;