import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Header.css';
import { RiVerifiedBadgeFill } from "react-icons/ri";




function Header({children, scrollPosition}) {
  const [position, setPosition] = useState(0);
  const [activeLink, setActiveLink] = useState("home"); // Track the active link
  const linkBg = useRef();

  // Function to move the background and set the active link
  const handleScroll = useCallback(() => {
    switch (true) {
      case scrollPosition >= 100 && scrollPosition < 650:
        linkBg.current.style.left = `0%`;
        setActiveLink("home");
        break;
      case scrollPosition >= 200 && scrollPosition < 1600:
        linkBg.current.style.left = `20%`;
        setActiveLink("skills");
        break;
      case scrollPosition >= 1600 && scrollPosition < 2900:
        linkBg.current.style.left = `40%`;
        setActiveLink("about");
        break;
      case scrollPosition >= 2900 && scrollPosition < 4000:
        linkBg.current.style.left = `60%`;
        setActiveLink("projects");
        break;
      case scrollPosition >= 500 && scrollPosition < 6000:
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
    if (linkBg.current) {
      linkBg.current.style.left = `${position}%`;
    }
  }, [position]);

  useEffect(() => {
    handleScroll(); // Call handleScroll whenever scrollPosition changes
  }, [scrollPosition, handleScroll]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img className='pfp' src="https://media.licdn.com/dms/image/v2/D4D03AQEIHbneuStDpA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722437579160?e=2147483647&v=beta&t=kwHmRxXehw5gZyON3wHJ5QfMXDSCqJIS3SqHkrSXUvU" alt="profile" />
          <a href="#home">Igor Nedopolz</a>
          <RiVerifiedBadgeFill className='verified' />
        </div>

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
    </header>
  );
}

export default Header;
