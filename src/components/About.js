import React from 'react';
import profilePhoto from '../img/profile.png';
import '../styles/About.css'

const About = () => {

  const handleLink = (evt) => {
    const target = evt.target;
    const url = target.dataset.url;
    window.open(url, '_blank');
  };

  return (
    <div className="About" id="about">
      <img src={profilePhoto} className="About-Photo" alt="profile" />
      <div className="About-Content">
        <h1 className="About-Header">About Me</h1>
        <p className="About-Body">Hello! My name is Leshawn Rice, and I'm a Software Developer from the Greater Seattle Area. I primarily use Javascript and Python but picking up a new language or framework isn't a problem for me. I'm comfortable developing on the frontend and the backend, and I enjoy challenging myself to make seamless, efficient, and scalable applications.</p>
        <div className="About-Footer">
          <button className="About-Contact">Get in touch</button>
          <p className="About-Social"><span onClick={handleLink} className="About-Link" data-url="https://github.com/leshawn-rice">GitHub</span> <span className="About-Seperator"> |</span> <span onClick={handleLink} className="About-Link" data-url="https://linkedin.com/in/leshawn-rice">LinkedIn</span></p>
        </div>
      </div>
    </div>
  )
}

export default About;