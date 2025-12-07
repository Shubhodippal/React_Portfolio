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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(`https://exam.shubhodip.in/users/send_mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-API-KEY': 'Meowmeowmeow123456789'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });
      
      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFocused({ name: false, email: false, subject: false, message: false });
        setSubmitStatus('success');
      } else {
        const errorData = await response.json();
        console.error('Error sending message:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            {submitStatus === 'success' && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message error">
                Failed to send message. Please try again or contact me directly via email.
              </div>
            )}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
              <span className="input-highlight"></span>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Contact;