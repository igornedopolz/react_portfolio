import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { FaLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save theme in localStorage
  };

  useEffect(() => {
    // Check localStorage for user preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Fallback to system preference
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }

    // Add event listener for system theme changes
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
        // Only update if no user preference is set
        setTheme(newSystemTheme);
        document.documentElement.setAttribute('data-theme', newSystemTheme);
    
    };

    prefersDarkScheme.addEventListener('change', handleSystemThemeChange);

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listeners
      prefersDarkScheme.removeEventListener('change', handleSystemThemeChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Ensure this runs only once on mount

  return (
    <div className="App">
      <Header scrollPosition={scrollPosition}>
        <button onClick={toggleTheme} className="theme-switcher" aria-label="Toggle Theme">
          {/* {theme === 'dark' ? <FaLightbulb style={{ color: 'white' }} /> : <MdDarkMode style={{ color: 'white' }} />} */}
          <MdDarkMode style={{ color: 'white' }} />
        </button>
      </Header>
      <Hero/>
      <Skills/>
      <About/>
      <div className='devider'/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
