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
          <img src="/Modhaklogo.jpg" alt="MODAK Natural Beauty Care" className="logo-image" />
          <span className="logo-text">MODAK Natural Beauty Care</span>
        </Link>
        
        <button className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>All Services</Link>
          <Link to="/#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
