import React from 'react';

const About = ({ data }) => {
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
            <button className="download-cv">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;