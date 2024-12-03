import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageUrl, setImageUrl] = useState("images/logo.png");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setImageUrl("images/logo-black.png");
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'nav-scroll' : ''}`}>
      <div className="container">
        <a href="#" className="navbar-brand navbar-logo">
          <img src={imageUrl} alt="logo" className="logo-1" />
        </a>
        <button 
          className="navbar-toggler" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="0">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="1">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="2">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="3">Team</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="4">Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="5">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" data-scroll-nav="6">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;