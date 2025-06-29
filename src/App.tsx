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

        <section id="about" className="py-20 bg-gradient-to-br from-light via-white to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Section Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary text-sm font-medium">💡 About Flare Infotech</span>
                </div>

                {/* Headline */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                    We Turn Your 
                    <span className="text-primary"> Vision</span> Into 
                    <span className="text-accent"> Reality</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    At Flare Infotech, we're passionate about creating digital solutions that make a real impact. 
                    Our team combines technical expertise with creative thinking to deliver exceptional results.
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark mb-2">Innovation First</h3>
                      <p className="text-gray-600">We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark mb-2">Fast & Reliable</h3>
                      <p className="text-gray-600">Quick turnaround times without compromising quality. We respect deadlines and deliver on our promises.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark mb-2">Client-Centric</h3>
                      <p className="text-gray-600">Your success is our success. We work closely with you throughout the entire development process.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2">
                    <span>Learn More About Us</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white rounded-2xl p-8 space-y-6">
                      {/* Team Representation */}
                      <div className="text-center space-y-4">
                        <div className="flex justify-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">FI</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark">Flare Infotech Team</h3>
                          <p className="text-gray-600">Passionate Developers & Designers</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">50+</div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">25+</div>
                          <div className="text-sm text-gray-600">Clients</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-500">3+</div>
                          <div className="text-sm text-gray-600">Years</div>
                        </div>
                      </div>

                      {/* Tech Stack Icons */}
                      <div className="flex justify-center space-x-3 pt-4">
                        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">JS</span>
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">RT</span>
                        </div>
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">ND</span>
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">FL</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Achievement Badge */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-dark">Quality</div>
                      <div className="text-xs text-gray-600">Assured</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
                  <div className="absolute top-1/3 -right-8 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute -top-2 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-br from-dark via-gray-800 to-secondary relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Floating Code Elements */}
            <div className="absolute top-1/3 right-1/4 animate-float opacity-20">
              <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-2 border border-accent/30">
                <span className="text-accent font-mono text-xs">&lt;div&gt;</span>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/5 animate-float opacity-20" style={{animationDelay: '1.5s'}}>
              <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-2 border border-primary/30">
                <span className="text-primary font-mono text-xs">( )</span>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white text-sm font-medium">🚀 Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                What We 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Create</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From concept to deployment, we craft digital solutions that drive growth and deliver exceptional user experiences.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Web Development */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Custom websites built with modern technologies. Responsive, fast, and SEO-optimized to convert visitors into customers.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>React, Next.js, Vue.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>CMS & Admin Panels</span>
                  </li>
                </ul>
              </div>

              {/* Mobile App Development */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Apps</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Native iOS and Android applications that provide seamless user experiences and drive engagement on mobile platforms.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>React Native, Flutter</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>iOS & Android Native</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>App Store Deployment</span>
                  </li>
                </ul>
              </div>

              {/* UI/UX Design */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Beautiful, intuitive designs that create memorable user experiences and drive conversions through thoughtful interaction design.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>User Research & Testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>Figma & Adobe Creative</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Brand Identity Design</span>
                  </li>
                </ul>
              </div>

              {/* Backend Development */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Robust server-side solutions, APIs, and database architectures that scale with your business and ensure optimal performance.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Node.js, Python, PHP</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>REST & GraphQL APIs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Database Design</span>
                  </li>
                </ul>
              </div>

              {/* AI Automations */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h5m7-4l-4-4m0 0l4-4m-4 4H9"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Automations</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Intelligent automation solutions powered by AI that streamline workflows, reduce manual work, and boost efficiency across your operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>AI Chatbots & Assistants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>No-Code/Low-Code Solutions</span>
                  </li>
                </ul>
              </div>

              {/* SEO Optimization */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">SEO Optimization</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We help your business rank higher on Google with proven SEO strategies, boosting visibility, organic traffic, and conversions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Technical & On-Page SEO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>Keyword & Competitor Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Speed Optimization & Schema Markup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Discovery</h4>
                  <p className="text-gray-400 text-sm">Understanding your goals and requirements</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Design</h4>
                  <p className="text-gray-400 text-sm">Creating wireframes and visual concepts</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Development</h4>
                  <p className="text-gray-400 text-sm">Building with cutting-edge technologies</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Launch</h4>
                  <p className="text-gray-400 text-sm">Deployment and ongoing support</p>
                </div>
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