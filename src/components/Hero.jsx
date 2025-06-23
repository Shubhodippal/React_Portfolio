import React from 'react';
import profileImage from '../assets/me.jpg';
//import { useTheme } from '../context/ThemeContext';

const Hero = ({ data, scrollToSection, children }) => {
  //const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animate-in glow-text">{data.name}</h1>
          <h2 className="animate-in-delayed">{data.title}</h2>
          <p className="tagline animate-in-delayed-more">{data.tagline}</p>
          <div className="hero-buttons animate-in-delayed-most">
            <button className="primary-button glow-button" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="secondary-button" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image animate-in" aria-hidden="true">
          {children || (
            <img 
              src={profileImage} 
              alt={`${data.name} - ${data.title}`} 
              className="profile-image"
              loading="eager" // Load this image immediately as it's above the fold
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;