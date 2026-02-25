import { useState } from 'react';
import { motion } from 'framer-motion';
import { addOns } from '../data/plans';

const BookingForm = ({ plan, selectedAddOns, grandTotal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedAddOnNames = selectedAddOns
      .map(id => addOns.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Hello, I want to book:

Plan: ${plan.name}
${selectedAddOnNames ? `Add-ons: ${selectedAddOnNames}` : ''}
Date: ${formData.date}
Time: ${formData.time}
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Total Price: ₹${grandTotal}`;

    const whatsappUrl = `https://wa.me/918121503097?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = formData.name && formData.phone && formData.address && formData.date && formData.time;

  return (
    <motion.form 
      className="booking-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>Book Your Appointment</h3>
      
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
        />
      </div>

      <div className="form-group">
        <label>Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Enter your complete address"
          rows="3"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Select Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label>Select Time *</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Choose time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
        </div>
      </div>

      <motion.button 
        type="submit"
        className="btn btn-primary btn-block"
        disabled={!isFormValid}
        whileHover={{ scale: isFormValid ? 1.02 : 1 }}
        whileTap={{ scale: isFormValid ? 0.98 : 1 }}
      >
        Book Now via WhatsApp
      </motion.button>
    </motion.form>
  );
};

export default BookingForm;
