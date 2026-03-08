import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { plans, addOns, testimonials } from '../data/plans';
import ComboSection from '../components/ComboSection';
import PriceCalculator from '../components/PriceCalculator';
import BookingForm from '../components/BookingForm';

const PlanDetails = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const foundPlan = plans.find(p => p.id === id);
    setPlan(foundPlan);
    window.scrollTo(0, 0);
  }, [id]);

  const handleToggleAddOn = (addonId) => {
    setSelectedAddOns(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((total, addonId) => {
    const addon = addOns.find(a => a.id === addonId);
    return total + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = plan ? plan.price + addOnsTotal : 0;

  if (!plan) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Plan not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="plan-details">
      {/* Banner */}
      <motion.div 
        className="plan-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src={plan.image} alt={plan.name} />
        <div className="plan-banner-overlay">
          <div className="container">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {plan.name}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {plan.duration} • {plan.originalPrice && (
                <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>₹{plan.originalPrice}</span>
              )}
              ₹{plan.price}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="container">
        <div className="plan-details-content">
          {/* Main Content */}
          <div className="plan-main">
            <motion.section
              className="plan-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2>About This Service</h2>
              <p>{plan.description}</p>
            </motion.section>

            <motion.section
              className="plan-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2>What's Included</h2>
              <ul className="includes-list">
                {plan.includes.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    ✓ {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              className="plan-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Hygiene & Safety</h2>
              <div className="hygiene-note">
                <p>✓ All equipment sanitized before use</p>
                <p>✓ Premium quality products</p>
                <p>✓ Trained and certified professionals</p>
                <p>✓ COVID-19 safety protocols followed</p>
              </div>
            </motion.section>

            {/* Gallery */}
            <motion.section
              className="plan-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2>Gallery</h2>
              <div className="plan-gallery">
                {plan.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    className="gallery-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={img} alt={`${plan.name} ${index + 1}`} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
              className="plan-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2>Customer Reviews</h2>
              <div className="testimonials-list">
                {testimonials.slice(0, 2).map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-author">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="plan-sidebar">
            <div className="sticky-sidebar">
              <PriceCalculator 
                planPrice={plan.price}
                selectedAddOns={selectedAddOns}
              />

              <ComboSection
                addOns={addOns}
                selectedAddOns={selectedAddOns}
                onToggleAddOn={handleToggleAddOn}
              />

              {!showBooking ? (
                <motion.button
                  className="btn btn-primary btn-block"
                  onClick={() => setShowBooking(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Book
                </motion.button>
              ) : (
                <BookingForm
                  plan={plan}
                  selectedAddOns={selectedAddOns}
                  grandTotal={grandTotal}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Button */}
      <div className="sticky-mobile-booking">
        <div className="mobile-price">₹{grandTotal}</div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowBooking(true);
            document.querySelector('.plan-sidebar').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PlanDetails;
