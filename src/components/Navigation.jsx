//\src\components\Navigation.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navigation = ({ activeSection, scrollToSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed-nav ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            SP
          </div>
        </div>
        
        <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <button 
                className={activeSection === 'hero' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('hero');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'about' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'skills' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('skills');
                  setIsMenuOpen(false);
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'experience' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('experience');
                  setIsMenuOpen(false);
                }}
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'projects' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('projects');
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'publications' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('publications');
                  setIsMenuOpen(false);
                }}
              >
                Publications
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'certifications' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('certifications');
                  setIsMenuOpen(false);
                }}
              >
                Certifications
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'contact' ? 'active' : ''} 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        
        <div className="nav-actions">
          <div className="theme-toggle-wrapper desktop-only-toggle">
            <label className="theme-switch" htmlFor="theme-checkbox">
              <input 
                id="theme-checkbox" 
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;