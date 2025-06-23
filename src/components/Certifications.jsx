import React from 'react';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Certifications</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="project-card">
              <div className="project-info">
                <h3>{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <div className="certification-actions">
                  {cert.displayAsPdf ? (
                    <a href={cert.pdfFile} target="_blank" rel="noopener noreferrer" className="view-project">
                      View Certificate
                    </a>
                  ) : (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="view-project">
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;