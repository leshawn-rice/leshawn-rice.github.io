import React, { useEffect } from 'react';
import '../styles/ProjectImage.css';

const ProjectImage = ({ img, title }) => {

  useEffect(() => {
    const toggleImage = (evt) => {
      const target = evt.target;
      const image = document.getElementById(`${title}-image`);
      if (image === target && !image.classList.contains('active')) {
        image.classList.add('active');
      }
      else if (image !== target && image.classList.contains('active')) {
        image.classList.remove('active');
      }
    }

    window.addEventListener('click', toggleImage);

    return () => window.removeEventListener('click', toggleImage);
  });

  const toggleImage = (evt) => {
  }


  return (
    <div className="Project-Image" onClick={toggleImage}>
      <img id={`${title}-image`} src={img} alt={title} />
    </div>
  );
}

export default ProjectImage;