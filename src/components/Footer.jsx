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

        {/* Google Maps */}
        <div className="footer-map">
          <h4>Find Us</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MODAK Natural Beauty Care Location"
            ></iframe>
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
