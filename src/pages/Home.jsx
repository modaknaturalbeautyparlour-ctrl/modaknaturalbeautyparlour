import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import PlanCard from '../components/PlanCard';
import ContactForm from '../components/ContactForm';
import AboutFounder from '../components/AboutFounder';
import Gallery from '../components/Gallery';
import { plans, testimonials } from '../data/plans';

const Home = () => {
  return (
    <div className="home">
      <Hero />

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Services</h2>
            <p>Premium beauty treatments at your doorstep</p>
          </motion.div>

          <div className="plans-grid">
            {plans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section 1 */}
      <section className="parallax-section parallax-1">
        <div className="parallax-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="parallax-content"
          >
            <h2>Beauty at Your Doorstep</h2>
            <p>Experience premium salon services in the comfort of your home</p>
          </motion.div>
        </div>
      </section>

      {/* About Founder Section */}
      <AboutFounder />

      {/* Parallax Section 2 */}
      <section className="parallax-section parallax-2">
        <div className="parallax-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="parallax-content"
          >
            <h2>Professional & Hygienic</h2>
            <p>Certified beauticians with premium quality products</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>What Our Clients Say</h2>
            <p>Real reviews from real customers</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default Home;
