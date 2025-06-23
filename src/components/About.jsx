import React from 'react';
import resumePDF from '../assets/Resume.pdf';

const About = ({ data }) => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Shubhodip_Pal_Resume.pdf'; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <button className="download-cv" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;