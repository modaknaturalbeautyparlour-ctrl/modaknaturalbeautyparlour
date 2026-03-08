import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutFounder = () => {
  const [monthsSinceStart, setMonthsSinceStart] = useState(0);

  useEffect(() => {
    // Company started in August 2025 (7 months ago from March 2026)
    const startDate = new Date('2025-08-01');
    const currentDate = new Date();
    
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    
    setMonthsSinceStart(totalMonths);
  }, []);

  return (
    <section className="about-founder-section">
      <div className="container">
        <motion.div
          className="about-founder-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="founder-image-wrapper">
            <motion.img
              src="/prasanthimam.jpeg"
              alt="Prasanthi - Founder of MODAK Natural Beauty Care"
              className="founder-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <div className="founder-text">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Meet Our Founder
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="founder-name"
            >
              Prasanthi
            </motion.h3>

            <motion.div
              className="founder-stats"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{monthsSinceStart}</span>
                <span className="stat-label">Months of MODAK</span>
              </div>
            </motion.div>

            <motion.p
              className="founder-description"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              With over 12 years of expertise in the beauty and wellness industry, Prasanthi founded 
              MODAK Natural Beauty Care to bring premium salon services to Visakhapatnam. Her passion 
              for beauty, combined with her extensive experience, has made MODAK a trusted name for 
              quality treatments and exceptional customer care.
            </motion.p>

            <motion.p
              className="founder-description"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Under her leadership, MODAK has grown to offer a comprehensive range of services for both 
              men and women, from advanced skincare treatments like Hydra Facial to professional hair 
              services and bridal makeup. Her commitment to using premium products and maintaining the 
              highest standards of hygiene has earned the trust of countless satisfied clients.
            </motion.p>

            <motion.div
              className="founder-quote"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p>"At MODAK, we don't just provide beauty services – we help our clients discover their 
              confidence and embrace their natural beauty. Every treatment is personalized, every detail 
              matters, and every client leaves feeling their absolute best."</p>
              <span className="quote-author">- Prasanthi, Founder</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounder;
