import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const galleryImages = [
    { src: '/room1.jpeg', alt: 'Salon Interior', category: 'Interior' },
    { src: '/room2chairsaloon.jpeg', alt: 'Salon Chairs', category: 'Interior' },
    { src: '/room2flexing.jpeg', alt: 'Relaxation Area', category: 'Interior' },
    { src: '/room3massage.jpeg', alt: 'Massage Room', category: 'Services' },
    { src: '/room4counter.jpeg', alt: 'Reception Counter', category: 'Interior' },
    { src: '/saloonroommen.jpeg', alt: 'Men\'s Salon Area', category: 'Interior' },
    { src: '/massage.jpeg', alt: 'Massage Service', category: 'Services' },
    { src: '/massagee.jpeg', alt: 'Massage Treatment', category: 'Services' },
    { src: '/nailpolish.jpeg', alt: 'Nail Polish Service', category: 'Services' },
    { src: '/relaxingroom.jpeg', alt: 'Relaxing Room', category: 'Interior' }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = galleryImages.length - 1;
      if (newIndex >= galleryImages.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section id="gallery" className="gallery-carousel-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Our Salon Gallery</h2>
          <p>Swipe or use arrows to explore our beautiful space</p>
        </motion.div>

        <div className="carousel-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="carousel-image-wrapper"
            >
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt}
                className="carousel-image"
              />
              <div className="carousel-caption">
                <span className="carousel-category">{galleryImages[currentIndex].category}</span>
                <p>{galleryImages[currentIndex].alt}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            className="carousel-arrow carousel-prev" 
            onClick={() => paginate(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className="carousel-arrow carousel-next" 
            onClick={() => paginate(1)}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="carousel-counter">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
