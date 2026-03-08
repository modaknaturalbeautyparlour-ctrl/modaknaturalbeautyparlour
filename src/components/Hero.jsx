import { motion } from 'framer-motion';

const Hero = () => {
  const handleBookAppointment = (e) => {
    e.preventDefault();
    const message = "Hello, I would like to book an appointment for beauty services.";
    const whatsappUrl = `https://wa.me/916305763388?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            MODAK Natural Beauty Care
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Redefining Style, Beauty & Confidence
          </motion.p>
          <motion.button 
            type="button"
            className="btn btn-primary"
            onClick={handleBookAppointment}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>
      <div className="hero-floral"></div>
    </section>
  );
};

export default Hero;
