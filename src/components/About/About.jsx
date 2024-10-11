import React from 'react';
import './About.css'; // Optional: Import your custom CSS file for styling

const About = () => {
  return (
    <section id='about' className="about">
      <div className="about_container">
        <h2 className="about-header">About Me</h2>
        <div className="about-content">
          <div className="profile-picture">
            {/* You can add your image URL here */}
            <img src="https://via.placeholder.com/150" alt="Your Profile" />
          </div>
          <div className="bio">
            <p>
              Hi, I'm <span className='name'>Igor Nedopolz</span>, a passionate web developer with a focus on front-end technologies.
              I love building visually appealing and highly responsive websites that provide an engaging user experience.
              I have experience working with NextJS, React, JavaScript, and CSS, and I am always eager to learn new tools and technologies.
            </p>
            <p>
              In my free time, I enjoy coding, contributing to open-source projects, and exploring new frameworks.
              Feel free to connect with me to collaborate on interesting projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
