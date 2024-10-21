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
        {theme === 'dark' ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0" // In JSX, use camelCase for properties like 'stroke-width'
            viewBox="0 0 352 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'white' }} // Correct style syntax in JSX
          >
            <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0" // In JSX, use camelCase for properties like 'stroke-width'
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'white' }} // Correct style syntax in JSX
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
          </svg>
        )}

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
