import React, { useState, useEffect } from 'react';
import profileImage from '../assets/me.jpg';
//import { useTheme } from '../context/ThemeContext';

const Hero = ({ data, scrollToSection, children }) => {
  //const { isDarkMode, toggleTheme } = useTheme();
  
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = ['Backend Developer', 'Java', 'Spring Boot', 'Docker', 'Google Cloud', 'AWS'];
  
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      // Typing animation
      if (displayedTitle.length < currentTitle.length) {
        const timer = setTimeout(() => {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timer);
      } else {
        // Pause before clearing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
        return () => clearTimeout(timer);
      }
    } else {
      // Clearing animation
      if (displayedTitle.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedTitle(displayedTitle.slice(0, -1));
        }, 50); // Clearing speed
        return () => clearTimeout(timer);
      } else {
        // Move to next title and start typing
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayedTitle, currentTitleIndex, isTyping]);
  
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animate-in glow-text">{data.name}</h1>
          <h2 className="animate-in-delayed">
            {displayedTitle}
            <span className="typing-cursor">|</span>
          </h2>
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