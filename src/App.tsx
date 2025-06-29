import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>My React App</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="hero">
          <div className="hero-content">
            <h2>Welcome to Our React SPA</h2>
            <p>Experience faster loading and better client-side performance</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>We create modern, fast, and responsive web applications using React.js</p>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Web Development</h3>
                <p>Custom web applications built with modern technologies</p>
              </div>
              <div className="service-card">
                <h3>React Development</h3>
                <p>Single page applications with optimal performance</p>
              </div>
              <div className="service-card">
                <h3>UI/UX Design</h3>
                <p>Beautiful and intuitive user interfaces</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 React SPA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App