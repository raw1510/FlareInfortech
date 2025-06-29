import React, { useState } from 'react'
import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="app">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300">
                Flare<span className="text-accent">Infotech</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-b-2 hover:border-primary">
                  Services
                </a>
                <a href="#about" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-b-2 hover:border-primary">
                  About
                </a>
                <a href="#Testimonial" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-b-2 hover:border-primary">
                  Testimonials
                </a>
                <a href="#contact" className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Get Quote
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                className="mobile-menu-button text-dark hover:text-primary focus:outline-none focus:text-primary transition-colors duration-300" 
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    className={`menu-icon ${isMobileMenuOpen ? 'hidden' : ''}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                  <path 
                    className={`close-icon ${isMobileMenuOpen ? '' : 'hidden'}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block text-dark hover:text-primary hover:bg-light px-3 py-2 text-base font-medium transition-all duration-300">
              Services
            </a>
            <a href="#about" className="block text-dark hover:text-primary hover:bg-light px-3 py-2 text-base font-medium transition-all duration-300">
              About
            </a>
            <a href="#Testimonial" className="block text-dark hover:text-primary hover:bg-light px-3 py-2 text-base font-medium transition-all duration-300">
              Testimonials
            </a>
            <a href="#contact" className="block bg-primary hover:bg-secondary text-white px-3 py-2 text-base font-medium transition-all duration-300 mx-3 rounded-full text-center">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

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