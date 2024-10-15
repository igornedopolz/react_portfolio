import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id='projects' className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects">
        {/* Card 1 */}
        <div className="card">
          <a 
            href="#about" 
            className='project-link' 
            style={{ backgroundImage: 'url(https://rednify-v2.vercel.app/_next/image?url=%2Fportfolio%2Fedelweiss%2Fweb.jpg&w=1080&q=100)' }} 
            aria-label="Project 1 - View More Details"
          >
            {/* Hidden text for accessibility */}
            <span className="sr-only">Project 1</span>
          </a>
          <button className="btn">View Project</button>
        </div>
        
        {/* Card 2 */}
        <div className="card">
          <a 
            href="#about" 
            className='project-link' 
            style={{ backgroundImage: 'url(https://rednify-v2.vercel.app/_next/image?url=%2Fportfolio%2Fedelweiss%2Fweb.jpg&w=1080&q=100)' }} 
            aria-label="Project 2 - View More Details"
          >
            <span className="sr-only">Project 2</span>
          </a>
          <button className="btn">View Project</button>
        </div>
  
      </div>
    </div>
  );
}

export default Projects;
