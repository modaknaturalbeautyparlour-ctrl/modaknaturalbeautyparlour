import { motion } from 'framer-motion';

const ComboSection = ({ addOns, selectedAddOns, onToggleAddOn }) => {
  return (
    <motion.div 
      className="combo-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="combo-title">💎 Frequently Booked Together</h3>
      <div className="addon-list">
        {addOns.map((addon, index) => (
          <motion.label 
            key={addon.id} 
            className="addon-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="checkbox"
              checked={selectedAddOns.includes(addon.id)}
              onChange={() => onToggleAddOn(addon.id)}
            />
            <span className="addon-name">{addon.name}</span>
            <span className="addon-price">₹{addon.price}</span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

export default ComboSection;
