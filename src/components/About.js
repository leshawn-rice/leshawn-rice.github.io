import React, { useEffect } from 'react';
import '../styles/About.css'

const About = ({ handleLink }) => {

  const handleContact = () => {
    window.open('mailto:leshawn.rice@outlook.com?subject=From your site');
  }

  useEffect(() => {
    const txt = 'Software Developer';
    let i = 0;
    // Duration in ms
    let speed = 200;
    let newText = document.querySelector('.About-Header').innerText + ' ';

    function typeWriter() {
      if (i < txt.length) {
        let header = document.querySelector('.About-Header')
        newText += txt.charAt(i);
        header.innerText = newText;
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    const intervalToClear = setInterval(() => {
      const el = document.querySelector('.About-Header');
      el.classList.toggle('has-border');
    }, 750);

    typeWriter();

    return () => { clearInterval(intervalToClear) };

  }, []);

  return (
    <div className="About" id="about">
      <div className="About-BG">
        <h1 className="About-Header">Leshawn Rice. </h1>

      </div>
      <div className="About-Content">

        <p className="About-Body">My name is Leshawn Rice, and I'm a Software Developer from the Greater Seattle Area. I primarily use Javascript and Python but picking up a new language or framework isn't a problem for me. I'm comfortable developing on the frontend and the backend, and I enjoy challenging myself to make seamless, efficient, and scalable applications.</p>
        <div className="About-Footer">
          <button className="About-Contact" onClick={handleContact}>Get in touch</button>
          <p className="About-Social"><span onClick={handleLink} className="About-Link" data-url="https://github.com/leshawn-rice">GitHub</span> <span className="About-Seperator"> |</span> <span onClick={handleLink} className="About-Link" data-url="https://linkedin.com/in/leshawn-rice">LinkedIn</span></p>
        </div>
      </div>
    </div>
  )
}

export default About;