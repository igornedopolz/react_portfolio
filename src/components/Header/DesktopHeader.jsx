// DesktopHeader.js
import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Header.css';

function DesktopHeader({children, scrollPosition}) {
  
  const [activeLink, setActiveLink] = useState("home"); // Track the active link
  const linkBg = useRef();

  // Function to move the background and set the active link
  const handleScroll = useCallback(() => {
    switch (true) {
      case scrollPosition >= 100 && scrollPosition < 650:
        linkBg.current.style.left = `0%`;
        setActiveLink("home");
        break;
      case scrollPosition >= 200 && scrollPosition < 1300:
        linkBg.current.style.left = `20%`;
        setActiveLink("skills");
        break;
      case scrollPosition >= 1300 && scrollPosition < 2100:
        linkBg.current.style.left = `40%`;
        setActiveLink("about");
        break;
      case scrollPosition >= 2100 && scrollPosition < 2900:
        linkBg.current.style.left = `60%`;
        setActiveLink("projects");
        break;
      case scrollPosition >= 2900 && scrollPosition < 6000:
        linkBg.current.style.left = `80%`;
        setActiveLink("contact");
        break;
      default:
        linkBg.current.style.left = `0%`;
        setActiveLink("home");
        break;
    }
  }, [scrollPosition]);


  useEffect(() => {
    handleScroll(); // Call handleScroll whenever scrollPosition changes
  }, [scrollPosition, handleScroll]);

  return (
    <nav className="navbar">
      <div className="nav-btns">
        <ul className="nav-links">
          <span ref={linkBg} id="link-bg" className="highlight" />
          <li>
            <a
              href="#home"
              style={{ color: activeLink === "home" ? "var(--text-accent-color)" : "inherit" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              style={{ color: activeLink === "skills" ? "var(--text-accent-color)" : "inherit" }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{ color: activeLink === "about" ? "var(--text-accent-color)" : "inherit" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{ color: activeLink === "projects" ? "var(--text-accent-color)" : "inherit" }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ color: activeLink === "contact" ? "var(--text-accent-color)" : "inherit" }}
            >
              Contact
            </a>
          </li>
        </ul>
        {children}
      </div>
    </nav>
  );
}

export default DesktopHeader;
