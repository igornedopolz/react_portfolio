// Header.js
import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import DesktopHeader from './DesktopHeader';

function Header({children, scrollPosition}) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  
    // Function to check the window size
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <header>
      <div className='header-container'>
        <div className="logo">
          <img
            className="pfp"
            src="https://media.licdn.com/dms/image/v2/D4D03AQEIHbneuStDpA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722437579160?e=2147483647&v=beta&t=kwHmRxXehw5gZyON3wHJ5QfMXDSCqJIS3SqHkrSXUvU"
            alt="profile"
          />
          <a href="#home">Igor Nedopolz</a>
          <RiVerifiedBadgeFill className="verified" />
        </div>

        {isDesktop? 
        <DesktopHeader scrollPosition={scrollPosition}>{children}</DesktopHeader> 
        : "" }
      </div>
    </header>
  );
}

export default Header;
