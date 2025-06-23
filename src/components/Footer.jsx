import React from 'react';

const Footer = ({ name, socialLinks }) => {
  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="social-links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;