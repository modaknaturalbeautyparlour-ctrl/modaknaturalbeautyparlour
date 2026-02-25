import { serviceAreas } from '../data/plans';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tanuja Beauty Studio</h3>
            <p>Work From Home Beauty Services</p>
            <p className="footer-phone">📞 8121503097</p>
          </div>

          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul className="service-areas">
              {serviceAreas.map((area, index) => (
                <li key={index}>📍 {area}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Tanuja Beauty Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
