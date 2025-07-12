import React from 'react';
import resumePDF from '../assets/Resume.pdf';

const About = ({ data }) => {
  const handleViewResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>{data.about}</p>
            <button className="download-cv" onClick={handleViewResume}>
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;