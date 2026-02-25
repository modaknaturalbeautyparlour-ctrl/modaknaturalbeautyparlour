import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PlanCard = ({ plan, index }) => {
  return (
    <motion.div 
      className="plan-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {plan.popular && <div className="badge-popular">Most Popular</div>}
      <div className="plan-image">
        <img src={plan.image} alt={plan.name} />
      </div>
      <div className="plan-content">
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-price">Starting at ₹{plan.price}</p>
        <p className="plan-description">{plan.shortDescription}</p>
        <Link to={`/plan/${plan.id}`} className="btn btn-outline">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PlanCard;
