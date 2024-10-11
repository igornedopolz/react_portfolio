import React from 'react';
import './Skills.css'; // Import the updated CSS file
import { div } from 'framer-motion/client';

// Skill component that accepts imgSrc and text as props
function Skill({ imgSrc, text }) {
  return (
    <div className='skill-box'>
      
      {imgSrc !== "" ? <div className='skill-box-wimg'> <img src={imgSrc} alt={`${text} logo`} /> {text}</div>
      : <div className='skill-box-woimg'>{text}</div>}
    </div>
  );
}

export default Skill;