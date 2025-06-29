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
        <section id="home" className="relative min-h-screen overflow-hidden pt-16">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-800 to-secondary">
            {/* Animated Code Rain Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="code-rain"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0">
              {/* HTML Tag */}
              <div className="absolute top-1/4 left-1/4 animate-float">
                <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-3 border border-accent/30">
                  <span className="text-accent font-mono text-sm">&lt;html&gt;</span>
                </div>
              </div>
              
              {/* CSS Bracket */}
              <div className="absolute top-1/3 right-1/4 animate-float" style={{animationDelay: '1s'}}>
                <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                  <span className="text-primary font-mono text-sm">{ '{ }' }</span>
                </div>
              </div>
              
              {/* Mobile Icon */}
              <div className="absolute bottom-1/3 left-1/5 animate-float" style={{animationDelay: '2s'}}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              
              {/* Code Symbol */}
              <div className="absolute bottom-1/4 right-1/3 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                  <span className="text-green-400 font-mono text-sm">&lt;/&gt;</span>
                </div>
              </div>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-dark/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in-up">
                <span className="text-white text-sm font-medium">🚀 Transforming Ideas Into Digital Excellence</span>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-6 mb-12 animate-fade-in-delay">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Build The
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-glow">
                    {' '}Future{' '}
                  </span>
                  <br />
                  With Code
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Custom websites & mobile applications that drive real results. 
                  We transform your vision into powerful digital experiences.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-delay">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Web Development</h3>
                  <p className="text-gray-300 text-sm">Modern, responsive websites that convert visitors into customers</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Mobile Apps</h3>
                  <p className="text-gray-300 text-sm">Native iOS & Android apps that engage your audience</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-gray-300 text-sm">Quick turnaround without compromising on quality</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay">
                <button className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-3">
                  <span>Get Free Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
                <a href="#contact" className="group border-2 border-white/30 text-white hover:bg-white hover:text-dark px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl backdrop-blur-sm flex items-center space-x-3 scroll-smooth">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h6l4 4v8a2 2 0 01-2 2z" />
                  </svg>
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
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