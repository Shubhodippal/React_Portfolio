import React from 'react';

const Publications = ({ publications }) => {
  return (
    <section id="publications" className="section publications-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Publications</h2>
          <div className="underline"></div>
        </div>
        <div className="publications-content">
          {publications.map((publication, index) => (
            <div key={index} className="publication-item">
              <h3>{publication.title}</h3>
              <p>{publication.conference}</p>
              <p>DOI: <a href={publication.link} target="_blank" rel="noopener noreferrer">{publication.doi}</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;