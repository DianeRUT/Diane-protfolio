import React from 'react';
import './App.css';

const App = () => {
  const handleViewWork = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Open resume in a new tab for viewing
    window.open('/Diane_RUTAGENGWA Resume.pdf', '_blank');
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <header className="navbar">
        <h1>Diane RUTAGENGWA</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="profile-icon">DR</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">👋 Welcome to my portfolio</div>
          <h1>Diane INGABIRE RUTAGENGWA</h1>
          <h2>Full-Stack Developer & Digital Solutions Architect</h2>
          <p>Passionate about creating innovative web solutions that drive business growth and enhance user experiences. Specializing in React, Node.js, and modern web technologies.</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleViewWork}>View My Work</button>
            <button className="secondary-btn" onClick={handleDownloadCV}>Download CV</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://github.com/DianeRUT" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/diane-ingabire-rutagengwa" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/DiRutagengwa" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <img src="Profile.jpg" alt="Diane's profile" />
          <div className="profile-overlay"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-header">
        <h2>About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
        <p>
              I'm Diane INGABIRE RUTAGENGWA, a passionate full-stack developer with a love for creating 
              innovative digital solutions. With expertise in modern web technologies, I specialize in 
              building scalable applications that solve real-world problems.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work on the web, and it has 
              evolved into a passion for crafting user-centered experiences. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends.
        </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎯</span>
                <span>Problem Solver</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <span>Fast Learner</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💡</span>
                <span>Creative Thinker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>React.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Next.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>JavaScript (ES6+)</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>TypeScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>HTML5 & CSS3</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Tailwind CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Bootstrap</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>React Native</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>Node.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Express.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Java</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Django</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>PHP</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>RESTful APIs</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>WebSocket</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>MongoDB</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>PostgreSQL</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Redis</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>MySQL</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>Git & GitHub</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Docker</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>AWS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Firebase</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Figma</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Redux</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>JWT</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-image">
              <img src="choir.png" alt="Choir Site" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://choir-site.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href="https://github.com/DianeRUT/choirsite" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Choir Site</h3>
              <p>A modern website for choir management and event coordination. Features include member registration, event scheduling, and music library management with an intuitive user interface.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="Fitness.jpeg" alt="Fitness Tracker Mobile App" />
              <div className="project-overlay">
                <div className="project-links">
                  <span className="project-link disabled">Coming Soon</span>
                  <a href="https://github.com/DianeRUT/fitness-tracker" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Fitness Tracker Mobile App</h3>
              <p>A comprehensive mobile application for tracking fitness activities, workouts, and health metrics. Features include workout logging, progress tracking, and personalized fitness recommendations.</p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Redux</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="todo.png" alt="Todo Planner" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://todo-planner-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  <a href="https://github.com/DianeRUT/todo-planner" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Todo Planner</h3>
              <p>A feature-rich task management application with drag-and-drop functionality, priority settings, and deadline tracking. Built with modern web technologies for optimal user experience.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">LocalStorage</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="citizen.png" alt="Citizen System" />
              <div className="project-overlay">
                <div className="project-links">
                  <span className="project-link disabled">Coming Soon</span>
                  <a href="https://github.com/DianeRUT/citizen_system" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Citizen System</h3>
              <p>A platform for citizens to submit complaints, provide feedback, and engage with government services. Features include complaint tracking, feedback management, and secure citizen authentication.</p>
              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">JWT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-header">
          <h2>Let's Work Together</h2>
          <p className="section-subtitle">Ready to start your next project?</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>ingabirerdianna250@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+250780672396</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
          <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
          <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
        </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Diane RUTAGENGWA. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/DianeRUT" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/diane-ingabire-rutagengwa" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://x.com/DiRutagengwa" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
