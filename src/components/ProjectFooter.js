import React from 'react';
import '../styles/ProjectFooter.css';

const ProjectFooter = ({ url, github, handleLink }) => {
  return (
    <div className="Project-Footer">
      <button data-url={url} onClick={handleLink} className="Project-Btn Project-Link">View Project</button>
      <button data-url={github} onClick={handleLink} className="Project-Btn Project-Source">View Code</button>
    </div>
  );
}

export default ProjectFooter;