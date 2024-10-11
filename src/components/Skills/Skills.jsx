import React, { useEffect, useState } from 'react';
import './Skills.css'; // Import the updated CSS file
import Skill from './Skill';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Fetch skills data from the JSON file
  useEffect(() => {
    // Assuming the skills.json file is in the public folder or adjust the path as needed
    fetch('/skills.json')
      .then((response) => response.json())
      .then((data) => setSkills(data.skills));
  }, []);

  // Scroll position effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Window width effect
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Split the skills based on screen width
  let row1, row2, row3, row4;
  if (windowWidth >= 1024) {
    // Tablet and above (3 rows of 8 skills each)
    row1 = skills.slice(0, 8);
    row2 = skills.slice(8, 16);
    row3 = skills.slice(16, 24);
    row4 = []; // No fourth row
  } else {
    // Mobile (4 rows of 6 skills each)
    row1 = skills.slice(0, 6);
    row2 = skills.slice(6, 12);
    row3 = skills.slice(12, 18);
    row4 = skills.slice(18, 24);
  }

  return (
    <section id='skills' className='skills'>
      <div className='overlay'/>
      <div className="skills-container">
        <h2 className="skills-header">My Skills</h2>
        <div className='col'>
          {/* Render each row dynamically */}
          <div className='row' style={{
            transform: `translateX(${windowWidth >= 768 ? 370 - scrollPosition * 0.4 : 350 - scrollPosition * 0.6}px)`
          }}>
            {row1.map((skill, index) => (
              <Skill key={index} imgSrc={skill.imgSrc} text={skill.text} />
            ))}
          </div>
          <div className='row' style={{
            transform: `translateX(${windowWidth >= 768 ? -250 + scrollPosition * 0.3 : -150 + scrollPosition * 0.3}px)`
          }}>
            {row2.map((skill, index) => (
              <Skill key={index} imgSrc={skill.imgSrc} text={skill.text} />
            ))}
          </div>
          <div className='row' style={{
            transform: `translateX(${windowWidth >= 768 ? 440 - scrollPosition * 0.4 : 540 - scrollPosition * 0.6}px)`
          }}>
            {row3.map((skill, index) => (
              <Skill key={index} imgSrc={skill.imgSrc} text={skill.text} />
            ))}
          </div>
          {/* Render the fourth row only on mobile view */}
          {windowWidth < 1024 && (
            <div className='row' style={{
            transform: `translateX(${ 530 - scrollPosition * 0.4}px)`
            }}>
              {row4.map((skill, index) => (
                <Skill key={index} imgSrc={skill.imgSrc} text={skill.text} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
