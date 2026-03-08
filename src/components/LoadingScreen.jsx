import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [stage, setStage] = useState('initial'); // initial -> reveal -> split

  useEffect(() => {
    // Stage 1: Show name animation
    const timer1 = setTimeout(() => {
      setStage('reveal');
    }, 100);

    // Stage 2: Start split animation
    const timer2 = setTimeout(() => {
      setStage('split');
    }, 3000);

    // Stage 3: Complete loading
    const timer3 = setTimeout(() => {
      onLoadingComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const splitVariants = {
    initial: { y: 0 },
    exit: { y: "-100%" }
  };

  return (
    <AnimatePresence>
      {stage !== 'complete' && (
        <>
          {/* Top Half */}
          <motion.div
            className="loading-screen-half loading-screen-top"
            variants={splitVariants}
            initial="initial"
            animate={stage === 'split' ? 'exit' : 'initial'}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="loading-content">
              {stage === 'reveal' && (
                <motion.div className="loading-logo">
                  {/* MODAK - Letter by letter */}
                  <div className="loading-title">
                    {['M', 'O', 'D', 'A', 'K'].map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        className="loading-letter"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>

                  {/* Subtitle */}
                  <motion.p
                    className="loading-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Natural Beauty Care
                  </motion.p>

                  {/* Tagline */}
                  <motion.div
                    className="loading-tagline"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    Redefining Style, Beauty & Confidence
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className="loading-line"
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Bottom Half */}
          <motion.div
            className="loading-screen-half loading-screen-bottom"
            initial={{ y: 0 }}
            animate={stage === 'split' ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
