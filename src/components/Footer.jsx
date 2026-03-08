import { serviceAreas, salonInfo } from '../data/plans';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{salonInfo.name}</h3>
            <p>{salonInfo.tagline}</p>
            <p className="footer-phone">📞 {salonInfo.phone}</p>
            <p className="footer-address">
              📍 {salonInfo.address}<br />
              {salonInfo.city} - {salonInfo.pincode}
            </p>
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
          <p>&copy; 2024 {salonInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
