import React, { useState } from 'react';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFocused({ name: false, email: false, subject: false, message: false });
    // Show success message
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">👨‍💻</div>
              <div>
                <h3>GitHub</h3>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  {contact.github.replace('https://github.com/', '@')}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  {contact.linkedin.replace('https://linkedin.com/in/', '@')}
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className={`form-group ${focused.name ? 'focused' : ''}`}>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                placeholder="Your Name" 
                required
              />
              <span className="input-highlight"></span>
            </div>
            <div className={`form-group ${focused.email ? 'focused' : ''}`}>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder="Your Email" 
                required
              />
              <span className="input-highlight"></span>
            </div>
            <div className={`form-group ${focused.subject ? 'focused' : ''}`}>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                placeholder="Subject" 
                required
              />
              <span className="input-highlight"></span>
            </div>
            <div className={`form-group ${focused.message ? 'focused' : ''}`}>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                placeholder="Your Message"
                required
              ></textarea>
              <span className="input-highlight"></span>
            </div>
            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;