import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'

// Import components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Publications from './components/Publications' 
import Experience from './components/Experience' // Import Experience component
import Certifications from './components/Certifications' // Import Certifications component
import nutrisift from './assets/nutrisift.jpg' // Import local image for NutriSift project
import examspace from './assets/examspace.png'
import quizmaker from './assets/quiz_maker.png' // Import local image for Quiz Maker project
import pujoexplorer from './assets/pujo_explorer.png' // Import local image for Pujo Explorer project
// Import theme provider
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Portfolio data
  const portfolioData = {
    name: "Shubhodip Pal",
    title: "Java Developer",
    tagline: "Building robust applications with clean, efficient code",
    about: "Software Developer with expertise in Java, Spring Boot, and RESTful APIs. Experienced in building scalable web applications with clean, maintainable code. Strong background in system architecture, data structures, and algorithms. Collaborative team player focused on delivering high-quality solutions in agile environments.",
    skills: [
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 30 },
      { name: "React.js", level: 30 },
      { name: "Spring Boot", level: 60 },
      { name: "MySQL", level: 45 },
      { name: "Python", level: 50 },
      { name: "Git/GitHub", level: 52 },
      { name: "Data Structures & Algorithms", level: 62 },
      { name: "Docker", level: 33 },
      { name: "CI/CD", level: 33 }
    ],
    projects: [
      {
        id: 1,
        title: "NutriSift",
        description: "Developed a React/Spring Boot recipe application that uses Cohere API for AI-powered recipe generation from available ingredients. Built core features including recipe discovery with filtering options, smart grocery list management, and restaurant map integration.",
        technologies: "React, Spring Boot, Cohere API, REST APIs",
        link: "https://github.com/Shubhodippal/NutriSift.git",
        website: "https://shubhodippal.github.io/NutriSift/", // Add website link if available
        image: nutrisift // Local image path
      },
      {
        id: 2,
        title: "Exam Space",
        description: "Developed a secure online assessment platform with React and Spring Boot. Implemented features such as JWT/OTP authentication, exam creation and participation, anti-cheating measures, classroom management and analytics.",
        technologies: "React, Spring Boot, REST APIs, Docker, MariaDB",
        link: "https://github.com/Shubhodippal/Exam-Space-Public-Version.git",
        website: "https://examspace.in/",
        image: examspace // Local image path
      },
      {
        id: 3,
        title: "Quiz Space",
        description: "Built a real-time quiz application using modern web technologies. Features include dynamic quiz creation, real-time participation, instant scoring, and interactive user experience. Deployed using Cloudflare Workers for optimal performance and global accessibility.",
        technologies: "Cloudflare Workers, React, WebSockets, REST APIs",
        link: "https://github.com/Shubhodippal/Quiz.git",
        website: "https://quiz.examspace.in/",
        image: quizmaker // Local image path
      },
      {
        id: 4,
        title: "Pujo Explorer Kolkata",
        description: "A smarter way to celebrate Durga Puja in Kolkata. Maps 1200+ puja locations with smart path-finding for seamless pandal-hopping. Features include exploring by region, detailed puja information, and faster navigation across the city. Blending tradition with technology for an enhanced Durga Puja experience.",
        technologies: "Web Technologies, Mapping APIs, Path-finding Algorithms, JavaScript",
        link: "https://github.com/Shubhodippal/Pujo_Explorer_Kolkata", // Add GitHub link if available
        website: "https://pujo-explorer-kolkata.vercel.app/",
        image: pujoexplorer // Local image path
      },
      {
        id: 5,
        title: "Speech Emotion Recognition",
        description: "Developed a speech-emotion recognition system using the SUBESCO dataset and CNN, achieving 99.38% accuracy. Implemented efficient coding practices to handle large datasets and optimize model performance. This research was presented at the INDICON 2024 at IIT Kharagpur.",
        technologies: "Python, CNN, Deep Learning, Signal Processing",
        link: "https://github.com/Shubhodippal/Beyond_Words3.0.git",
        website: "", // Add website link if available
        image: "/project-images/speech-emotion.jpg" // Local image path
      },
      {
        id: 6,
        title: "Car Detection and Speed Estimation",
        description: "Created a system for detecting cars and estimating their speed using OpenCV and YOLO, leveraging frame-based tracking for accuracy.",
        technologies: "Python, OpenCV, YOLO, Computer Vision",
        link: "https://github.com/Shubhodippal/Car-speed_detection_yolov8.git",
        website: "", // Add website link if available
        image: "/project-images/car-detection.jpg" // Local image path
      }
    ],
    contact: {
      email: "shubhodippal01@gmail.com",
      github: "https://github.com/Shubhodippal",
      linkedin: "https://linkedin.com/in/shubhodip-pal-378198250",
      phone: "9163971594",
      location: "Kolkata, West Bengal"
    },
    education: {
      degree: "B. Tech in Computer Science and Technology (Pursuing, 2026)",
      institution: "University of Engineering & Management Kolkata",
      gpa: "YGPA: 7.96 (Till 5th sem)",
      additional: [
        "Higher Secondary: 2022 (78.8%)",
        "Secondary: 2020 (86%)"
      ]
    },
    certifications: [
      {
        id: 1,
        name: "Alpha (DSA with Java) - Apna College",
        issuer: "Apna College",
        date: "December 2023",
        description: "Comprehensive course covering advanced data structures and algorithms using Java, including problem-solving strategies and optimization techniques.",
        credentialUrl: "https://drive.google.com/file/d/1ZjA4HTZxsvCrOnOitzCHkSzckrq4jO8R/view?usp=drive_link"
      },
      {
        id: 2,
        name: "Data Structures & Backend with Java - Board Infinity (Coursera)",
        issuer: "Board Infinity / Coursera",
        date: "August 2023",
        description: "Backend development with Java covering data structures, design patterns, and RESTful API development.",
        credentialUrl: "https://coursera.org/share/0a6ce54f42e02ee07bb077120d2929c3"
      },
      {
        id: 3,
        name: "Delta (Full Stack Web Development) - Apna College",
        issuer: "Apna College",
        date: "February 2024",
        description: "Java web development course covering modern frontend frameworks, backend technologies, and database integration.",
        credentialUrl: "https://drive.google.com/file/d/1-0E9hOiw-aoq7wQnyMkYmKtXtSrIn5Dp/view?usp=sharing"
      },
      {
        id: 4,
        name: "AWS Fundamentals - Amazon Web Services (Coursera)",
        issuer: "Amazon Web Services / Coursera",
        date: "October 2023",
        description: "Cloud computing fundamentals with AWS, covering essential services like EC2, S3, Lambda, and cloud architecture principles.",
        credentialUrl: "https://coursera.org/share/46ee82ccbaa3c1b1c78d6ec748db74df"
      }
    ],
    publications: [
      {
        title: "Optimized Convolutional Neural Network-Based Bengali Speech Emotion Classifier",
        conference: "2024 IEEE India Council International Conference (INDICON)",
        doi: "10.1109/INDICON63790.2024.10958244",
        link: "https://doi.org/10.1109/INDICON63790.2024.10958244"
      }
    ],
    experiences: [
      {
        "title": "Intern Developer",
        "company": "Alpha Torana Private Limited",
        "duration": "October 2025 - Present",
        "location": "Remote",
        "description": "Currently working as an Intern Developer at Alpha Torana Private Limited, contributing to the development of scalable software solutions and participating in real-world projects that enhance both technical and collaborative skills."
      },
      {
        title: "Software Development Engineer Intern",
        company: "Bluestock Fintech",
        duration: "August 2025 - September 2025",
        location: "Remote",
        description: "Worked as a Software Development Engineer Intern, contributing to developing innovative software solutions and gaining hands-on experience.",
        /*achievements: [
          "Working with modern development technologies and frameworks",
          "Contributing to team projects and collaborative development processes",
          "Learning industry best practices and software engineering methodologies"
        ],
        technologies: "Java, Spring Boot, React, RESTful APIs, Databases"*/
      }
    ]
  }
  
  // Set document title based on portfolio name
  useEffect(() => {
    document.title = `${portfolioData.name} | Portfolio`;
  }, [portfolioData.name]);

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          
          // Update page title based on active section
          const sectionTitles = {
            'hero': `${portfolioData.name} | Java Developer`,
            'about': `About - ${portfolioData.name}`,
            'skills': `Skills & Expertise - ${portfolioData.name}`,
            'experience': `Experience - ${portfolioData.name}`,
            'projects': `Portfolio Projects - ${portfolioData.name}`,
            'publications': `Publications - ${portfolioData.name}`,
            'certifications': `Certifications - ${portfolioData.name}`,
            'contact': `Contact - ${portfolioData.name}`
          };
          
          document.title = sectionTitles[sectionId] || `${portfolioData.name} | Portfolio`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [portfolioData.name]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    // Set active section immediately when clicked
    setActiveSection(sectionId);
    
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 75, // Reduced from 80 for less offset
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <>
        <Helmet>
          <title>{portfolioData.name} | Java Developer Portfolio</title>
          <meta name="description" content="Portfolio of Shubhodip Pal, a Java Developer specializing in Java, Spring Boot, MySQL, and React.js. View projects, skills, and certifications." />
          <meta name="keywords" content="Shubhodip Pal, Java Developer, Java Developer, React Developer, Spring Boot, Portfolio, Web Development" />
          <meta name="author" content={portfolioData.name} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shubhodip.in/" />
          <meta property="og:title" content={`${portfolioData.name} | Java Developer Portfolio`} />
          <meta property="og:description" content="Portfolio of Shubhodip Pal, a Java Developer specializing in Java, Spring Boot, MySQL, and React.js." />
          <meta property="og:image" content="https://shubhodip.in/thumbnail.jpg" />
          <meta property="og:site_name" content="Shubhodip Pal Portfolio" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://shubhodip.in/" />
          <meta property="twitter:title" content={`${portfolioData.name} | Java Developer Portfolio`} />
          <meta property="twitter:description" content="Portfolio of Shubhodip Pal, a Java Developer specializing in Java, Spring Boot, MySQL, and React.js." />
          <meta property="twitter:image" content="https://shubhodip.in/thumbnail.jpg" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://shubhodip.in/" />

          {/* Structured Data - Person */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": portfolioData.name,
              "jobTitle": portfolioData.title,
              "description": portfolioData.about,
              "email": portfolioData.contact.email,
              "url": "https://shubhodip.in",
              "sameAs": [
                portfolioData.contact.github,
                portfolioData.contact.linkedin
              ],
              "knowsAbout": portfolioData.skills.map(skill => skill.name),
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": portfolioData.education.institution
              }
            })}
          </script>

          {/* Structured Data - WebSite */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Shubhodip Pal Portfolio",
              "url": "https://shubhodip.in",
              "description": "Portfolio website showcasing projects, skills, and experience of Shubhodip Pal, a Java Developer",
              "author": {
                "@type": "Person",
                "name": portfolioData.name
              }
            })}
          </script>

          {/* Google Site Verification */}
          <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        </Helmet>

        {/* Navigation Component */}
        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />

        {/* Hero Component */}
        <Hero 
          data={portfolioData} 
          scrollToSection={scrollToSection} 
        />

        {/* About Component */}
        <About 
          data={portfolioData} 
        />

        {/* Skills Component */}
        <Skills 
          skills={portfolioData.skills} 
        />

        {/* Experience Component */}
        <Experience 
          experiences={portfolioData.experiences}
        />

        {/* Projects Component */}
        <Projects 
          projects={portfolioData.projects} 
        />

        {/* Publications Component */}
        <Publications 
          publications={portfolioData.publications}
        />
        
        {/* Certifications Component */}
        <Certifications 
          certifications={portfolioData.certifications}
        />

        {/* Contact Component */}
        <Contact 
          contact={portfolioData.contact} 
        />

        {/* Footer Component */}
        <Footer 
          name={portfolioData.name}
          socialLinks={portfolioData.contact}
        />
      </>
    </ThemeProvider>
  )
}

export default App
