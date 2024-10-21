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
            href="https://rednify.com/en" 
            className='project-link' 
            style={{ backgroundImage: 'url(Rednify.png)' }} 
            aria-label="Project 1 - View More Details"
          >
            {/* Hidden text for accessibility */}
            <span className="sr-only">Project 1</span>
          </a>
          <a href="https://rednify.com/en"  className="btn">View Project</a>
        </div>
        
        {/* Card 2 */}
        <div className="card">
          <a 
            href="https://wollq.com/en" 
            className='project-link' 
            style={{ backgroundImage: 'url(Wollq.png)' }} 
            aria-label="Project 2 - View More Details"
          >
            <span className="sr-only">Project 2</span>
          </a>
          <a href="https://wollq.com/en" className="btn">View Project</a>
        </div>
  
      </div>
    </div>
  );
}

export default Projects;
