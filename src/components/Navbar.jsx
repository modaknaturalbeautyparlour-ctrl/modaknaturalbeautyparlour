import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-text">Tanuja Beauty Studio</span>
        </Link>
        
        <button className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
