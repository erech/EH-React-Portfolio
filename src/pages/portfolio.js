import React from 'react';
import Navbar from './Navbar';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'This is project 1.' },
    { id: 2, title: 'Project 2', description: 'This is project 2.' },
    { id: 3, title: 'Project 3', description: 'This is project 3.' },
  ];

  return (
    <div>
      <Navbar />
      <h1>My Portfolio</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href="#">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;