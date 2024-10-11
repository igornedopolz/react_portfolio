import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  // Define animation variants for the left-side text elements
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.6,
      },
    }),
  };

  // State for tracking scroll position and line height
  const [scrollHeight, setScrollHeight] = useState(140);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  // Event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calculate new scroll line height based on window scroll position
      const scrollPosition = window.scrollY;
      const newHeight = 140 - scrollPosition * 0.8; // Grow the line by 0.5px for each pixel scrolled, up to a max of 600px.
      setScrollHeight(newHeight);


    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div id='home' className="hero-container">
      {/* Left Section with Animated Content */}
      <motion.div
        className="hero-left"
        initial="hidden"
        animate="visible"
      >
        <motion.h1 custom={0} variants={textVariant}>
          Hi, I'm Igor
        </motion.h1>
        <motion.h2 custom={1} variants={textVariant}>
          I Make Websites, and other stuff :)
        </motion.h2>
        <motion.p custom={2} variants={textVariant}>
          I specialize in building high-quality web applications. Read more below!
        </motion.p>
        <motion.a
          href="#about"
          className="hero-btn"
          custom={3}
          variants={textVariant}
        >
          About me
        </motion.a>
      </motion.div>

      {/* Right Section with Scroll Animation */}
      <motion.div
        className="hero-right"
        initial="hidden"
        animate="visible"
        style={{
          opacity: scrollHeight < 0 ? 0 : 1,
          scale: scrollHeight < 0 ? 0 : 1,}}
      >
        {/* Scroll Text Animation */}
        <motion.p className="scroll-text" custom={10} variants={textVariant}>
          Scroll
        </motion.p>

        {/* Scroll Line Animation */}
        <motion.div
          className="scroll-line"
          initial={{ height: 20 }}  // Initial height value
          animate={{ height: scrollHeight }} // Animate height based on `scrollHeight`
          transition={{
            duration: !initialAnimationDone ? 0.7 : 0,
            ease: 'easeOut',
            delay: !initialAnimationDone ? 2 : 0, // Delay only for the first animation
          }}
          onAnimationComplete={() => setInitialAnimationDone(true)} // Track when initial animation is done
        />
      </motion.div>
    </div>
  );
};

export default Hero;
