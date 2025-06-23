import React from 'react';
import profileImage from '../assets/me.jpg';
import { useTheme } from '../context/ThemeContext';

const Hero = ({ data, scrollToSection, children }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <section id="hero" className="section hero-section">
      {/* Mobile Theme Toggle - Only shows on mobile */}
      <div className="mobile-theme-toggle">
        <label className="theme-switch" htmlFor="mobile-theme-checkbox">
          <input 
            id="mobile-theme-checkbox" 
            type="checkbox" 
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <div className="slider round">
            <div className="toggle-icons">
              <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>

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
        <div className="hero-image animate-in">
          {children || (
            <img 
              src={profileImage} 
              alt={`${data.name} profile`} 
              className="profile-image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;