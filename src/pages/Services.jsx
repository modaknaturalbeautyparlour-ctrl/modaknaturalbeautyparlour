import { motion } from 'framer-motion';
import { useState } from 'react';
import { serviceCategories, mensServices } from '../data/services';

const Services = () => {
  const [showMensServices, setShowMensServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState({});

  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    return `₹${price}`;
  };

  const getServiceKey = (categoryId, serviceIdx, variantIdx = null) => {
    return `${categoryId}-${serviceIdx}${variantIdx !== null ? `-${variantIdx}` : ''}`;
  };

  const handleServiceToggle = (categoryId, serviceIdx, service, variantIdx = null, variant = null) => {
    const key = getServiceKey(categoryId, serviceIdx, variantIdx);
    
    setSelectedServices(prev => {
      const newSelected = { ...prev };
      if (newSelected[key]) {
        delete newSelected[key];
      } else {
        newSelected[key] = {
          categoryId,
          name: service.name,
          price: variant ? variant.price : (service.price || service.prices?.[0]),
          variant: variant ? (variant.size || variant.type) : null
        };
      }
      return newSelected;
    });
  };

  const handleSelectAll = (categoryId, category) => {
    const categoryServices = {};
    let hasAllSelected = true;

    // Check if all services in this category are selected
    category.services.forEach((service, idx) => {
      if (service.variants) {
        service.variants.forEach((variant, vIdx) => {
          const key = getServiceKey(categoryId, idx, vIdx);
          if (!selectedServices[key]) {
            hasAllSelected = false;
          }
        });
      } else {
        const key = getServiceKey(categoryId, idx);
        if (!selectedServices[key]) {
          hasAllSelected = false;
        }
      }
    });

    if (hasAllSelected) {
      // Deselect all
      setSelectedServices(prev => {
        const newSelected = { ...prev };
        category.services.forEach((service, idx) => {
          if (service.variants) {
            service.variants.forEach((variant, vIdx) => {
              delete newSelected[getServiceKey(categoryId, idx, vIdx)];
            });
          } else {
            delete newSelected[getServiceKey(categoryId, idx)];
          }
        });
        return newSelected;
      });
    } else {
      // Select all
      category.services.forEach((service, idx) => {
        if (service.variants) {
          service.variants.forEach((variant, vIdx) => {
            const key = getServiceKey(categoryId, idx, vIdx);
            categoryServices[key] = {
              categoryId,
              name: service.name,
              price: variant.price,
              variant: variant.size || variant.type
            };
          });
        } else {
          const key = getServiceKey(categoryId, idx);
          categoryServices[key] = {
            categoryId,
            name: service.name,
            price: service.price || service.prices?.[0],
            variant: null
          };
        }
      });
      setSelectedServices(prev => ({ ...prev, ...categoryServices }));
    }
  };

  const isCategoryFullySelected = (categoryId, category) => {
    let allSelected = true;
    category.services.forEach((service, idx) => {
      if (service.variants) {
        service.variants.forEach((variant, vIdx) => {
          if (!selectedServices[getServiceKey(categoryId, idx, vIdx)]) {
            allSelected = false;
          }
        });
      } else {
        if (!selectedServices[getServiceKey(categoryId, idx)]) {
          allSelected = false;
        }
      }
    });
    return allSelected;
  };

  const handleBookSelected = () => {
    const services = Object.values(selectedServices);
    
    let message = `Hello, I would like to book the following services:\n\n`;
    
    services.forEach((service, index) => {
      message += `${index + 1}. ${service.name}`;
      if (service.variant) {
        message += ` (${service.variant})`;
      }
      message += ` - ${formatPrice(service.price)}\n`;
    });
    
    const total = services.reduce((sum, service) => {
      const price = typeof service.price === 'number' ? service.price : 0;
      return sum + price;
    }, 0);
    
    if (total > 0) {
      message += `\nTotal: ₹${total}`;
    }
    
    message += `\n\nPlease confirm availability and booking details.`;
    
    const whatsappUrl = `https://wa.me/916305763388?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const selectedCount = Object.keys(selectedServices).length;

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.div
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Services & Pricing
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Select services and book via WhatsApp
          </motion.p>
        </div>
      </motion.div>

      {/* Service Type Toggle */}
      <div className="container">
        <div className="service-type-toggle">
          <button
            className={!showMensServices ? 'active' : ''}
            onClick={() => {
              setShowMensServices(false);
              setSelectedServices({});
            }}
          >
            Women's Services
          </button>
          <button
            className={showMensServices ? 'active' : ''}
            onClick={() => {
              setShowMensServices(true);
              setSelectedServices({});
            }}
          >
            Men's Services
          </button>
        </div>
      </div>

      {/* Women's Services */}
      {!showMensServices && (
        <div className="container">
          <div className="services-grid">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="service-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="category-header">
                  <div className="category-title-section">
                    <span className="category-icon">{category.icon}</span>
                    <h3>{category.name}</h3>
                  </div>
                  <button
                    className="btn-select-all"
                    onClick={() => handleSelectAll(category.id, category)}
                  >
                    {isCategoryFullySelected(category.id, category) ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                <div className="services-list">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="service-item-wrapper">
                      {service.variants ? (
                        <>
                          <div className="service-name-main">{service.name}</div>
                          <div className="service-variants">
                            {service.variants.map((variant, vIdx) => (
                              <label key={vIdx} className="variant-item-checkbox">
                                <input
                                  type="checkbox"
                                  checked={!!selectedServices[getServiceKey(category.id, idx, vIdx)]}
                                  onChange={() => handleServiceToggle(category.id, idx, service, vIdx, variant)}
                                />
                                <div className="variant-info">
                                  <span className="variant-label">
                                    {variant.size || variant.type}
                                  </span>
                                  <span className="variant-price">
                                    {formatPrice(variant.price)}
                                  </span>
                                </div>
                              </label>
                            ))}
                          </div>
                        </>
                      ) : (
                        <label className="service-item-checkbox">
                          <input
                            type="checkbox"
                            checked={!!selectedServices[getServiceKey(category.id, idx)]}
                            onChange={() => handleServiceToggle(category.id, idx, service)}
                          />
                          <div className="service-info">
                            <span className="service-name">
                              {service.name}
                              {service.note && (
                                <span className="service-note"> ({service.note})</span>
                              )}
                            </span>
                            <span className="service-price">
                              {service.prices ? (
                                service.prices.map((p, i) => (
                                  <span key={i}>
                                    {formatPrice(p)}
                                    {i < service.prices.length - 1 && ' / '}
                                  </span>
                                ))
                              ) : (
                                formatPrice(service.price)
                              )}
                            </span>
                          </div>
                        </label>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Men's Services */}
      {showMensServices && (
        <div className="container">
          <div className="services-grid">
            {mensServices.categories.map((category, index) => (
              <motion.div
                key={index}
                className="service-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="category-header">
                  <div className="category-title-section">
                    <span className="category-icon">{mensServices.icon}</span>
                    <h3>{category.name}</h3>
                  </div>
                  <button
                    className="btn-select-all"
                    onClick={() => handleSelectAll(`mens-${index}`, category)}
                  >
                    {isCategoryFullySelected(`mens-${index}`, category) ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                <div className="services-list">
                  {category.services.map((service, idx) => (
                    <label key={idx} className="service-item-checkbox">
                      <input
                        type="checkbox"
                        checked={!!selectedServices[getServiceKey(`mens-${index}`, idx)]}
                        onChange={() => handleServiceToggle(`mens-${index}`, idx, service)}
                      />
                      <div className="service-info">
                        <span className="service-name">{service.name}</span>
                        <span className="service-price">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Floating Book Button */}
      {selectedCount > 0 && (
        <motion.div
          className="floating-book-button"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="container">
            <div className="book-button-content">
              <div className="selected-count">
                {selectedCount} service{selectedCount > 1 ? 's' : ''} selected
              </div>
              <button className="btn btn-primary btn-large" onClick={handleBookSelected}>
                Book via WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
