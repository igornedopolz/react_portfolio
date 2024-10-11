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


  
  useEffect(() => {
    // Set the initial theme based on user's preference or default
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);  // Save theme in local storage
  };
  
  return (
    <div className="App">
      <Header scrollPosition={scrollPosition}>
          <button onClick={toggleTheme} className="theme-switcher" aria-label="Toggle Theme">
            {theme === 'dark' ? <FaLightbulb /> : <MdDarkMode />}
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
