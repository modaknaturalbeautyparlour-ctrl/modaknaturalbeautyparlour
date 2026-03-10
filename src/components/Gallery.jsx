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
              onDragEnd={(_, { offset, velocity }) => {
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

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gallery-instagram"
        >
          <a 
            href="https://www.instagram.com/modak_beauty_parlour?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Follow us on Instagram @modak_beauty_parlour</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
