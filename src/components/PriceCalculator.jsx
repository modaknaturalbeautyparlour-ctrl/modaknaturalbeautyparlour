import { motion } from 'framer-motion';
import { addOns } from '../data/plans';

const PriceCalculator = ({ planPrice, selectedAddOns }) => {
  const addOnsTotal = selectedAddOns.reduce((total, addonId) => {
    const addon = addOns.find(a => a.id === addonId);
    return total + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = planPrice + addOnsTotal;

  return (
    <motion.div 
      className="price-calculator"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h3>Price Summary</h3>
      <div className="price-row">
        <span>Plan Price:</span>
        <span>₹{planPrice}</span>
      </div>
      {selectedAddOns.length > 0 && (
        <div className="price-row">
          <span>Add-ons Total:</span>
          <span>₹{addOnsTotal}</span>
        </div>
      )}
      <div className="price-row total">
        <span>Grand Total:</span>
        <span>₹{grandTotal}</span>
      </div>
    </motion.div>
  );
};

export default PriceCalculator;
