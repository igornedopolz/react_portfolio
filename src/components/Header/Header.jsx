// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader'; // Import the new MobileHeader

function Header({ children, scrollPosition }) {
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

        {/* Conditionally render DesktopHeader or MobileHeader based on screen size */}
        {isDesktop ? (
          <DesktopHeader scrollPosition={scrollPosition}>{children}</DesktopHeader>
        ) : (
          <MobileHeader>{children}</MobileHeader>
        )}
      </div>
    </header>
  );
}

export default Header;
