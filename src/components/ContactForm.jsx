import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    serviceInterested: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    'Hydra Facial',
    'Keratin Treatment',
    'Hair Spa',
    'Bridal Makeup',
    'Hair Botox',
    'Balayage Hair Colour',
    'Smoothing',
    'Nano Plastia',
    'Global Hair Colour',
    'Full Head Highlights',
    'Facial',
    'D-Tan',
    'Waxing',
    'Threading',
    'Hair Cut',
    'Beard Styling',
    'PRP Treatment',
    'Mesotherapy',
    'GFC Treatment',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Inquiry from MODAK Website*

*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}

*Service Details:*
Service Interested: ${formData.serviceInterested}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}

*Additional Message:*
${formData.message || 'No additional message'}

---
Please contact me to discuss further details.`;

    const whatsappUrl = `https://wa.me/916305763388?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      serviceInterested: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const isFormValid = formData.name && formData.phone && formData.serviceInterested;

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-form-wrapper"
        >
          <div className="contact-form-header">
            <h2>Book Your Appointment</h2>
            <p>Fill in your details and we'll get back to you shortly</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter 10-digit mobile number"
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Complete Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows="2"
              />
            </div>

            <div className="form-group">
              <label>Service Interested In *</label>
              <select
                name="serviceInterested"
                value={formData.serviceInterested}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label>Preferred Time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Select time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests or questions?"
                rows="3"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={!isFormValid}
              whileHover={{ scale: isFormValid ? 1.02 : 1 }}
              whileTap={{ scale: isFormValid ? 0.98 : 1 }}
            >
              Send Inquiry via WhatsApp
            </motion.button>

            <p className="form-note">
              * Required fields. Your details will be sent via WhatsApp to our team.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
