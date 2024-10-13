import React, { useState } from "react";
import { motion } from "framer-motion";
import './Header.css'; // Add your styles here

const MobileHeader = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Define the animation variants
  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 80px) 60px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at calc(100% - 80px) 60px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Variants for the list of links
  const linkVariants = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.4,
        type: "spring",
        stiffness: 120,
      },

    }),
    closed: {
      opacity: 0,
      x: -80, // Start 50px to the left when closed
    },
  };

  // Stagger animation for the list container
  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.1, // Stagger the appearance of children (links)
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // Reverse stagger when closing
      },
    },
  };

  return (
    <div className="mobile-header-container">
      {/* Circular Hamburger Button */}
      <motion.div
        className="hamburger-button"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className={`${isOpen ? 'cross' : 'bar'}`}></span>
        <span className={`${isOpen ? 'cross' : 'bar'}`}></span>
        <span className={`${isOpen ? 'cross' : 'bar'}`}></span>
      </motion.div>

      {/* Growing Menu from the button using clipPath */}
      <motion.div
        className="menu-wrapper"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
        custom={1000} // Custom height, you can adjust this
      >
        {/* Staggered list of links */}
        <motion.nav
          className="mobile-nav"
          variants={listVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.ul>
            <motion.li variants={linkVariants} custom={1} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#home" onClick={closeMenu}>Home</a>
            </motion.li>
            <motion.li variants={linkVariants} custom={2} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#about" onClick={closeMenu}>About</a>
            </motion.li>
            <motion.li variants={linkVariants} custom={3} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#services" onClick={closeMenu}>Services</a>
            </motion.li>
            <motion.li variants={linkVariants} custom={4} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default MobileHeader;
