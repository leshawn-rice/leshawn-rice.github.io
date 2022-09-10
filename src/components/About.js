import React, { useEffect } from 'react';
import '../styles/About.scss'

const About = ({ handleLink }) => {

  const handleContact = () => {
    window.open('mailto:leshawn.rice@outlook.com?subject=From your site');
  }

  useEffect(() => {
    const texts = ['Backend Developer.', 'Frontend Developer.', 'DevOps Engineer.', 'Software Developer.'];
    const speed = 200;
    const pause = 2000; // <--- the longer delay between text direction changes

    function typeWriter(i = 0, index = 1, direction = 1) {
      let displayed = texts[i].slice(0, index);
      document.querySelector('.About-Header-Span').textContent = displayed;

      if (displayed.length >= texts[i].length) { // start removing after pause
        setTimeout(() => typeWriter(i, index - 1, -1), pause);
      } else if (displayed.length === 0) { // go to next text after pause
        setTimeout(() => typeWriter((i + 1) % texts.length), pause);
      } else { // continue in the current direction
        setTimeout(() => typeWriter(i, index + direction, direction), speed);
      }
    }

    const typeInterval = setInterval(() => {
      const el = document.querySelector('.About-Header');
      el.classList.toggle('has-border');
    }, 750);

    typeWriter();

    return () => { clearInterval(typeInterval) };


  }, []);

  return (
    <div className="About" id="about">
      <div className="About-BG">
        <h1 className="About-Header">Leshawn Rice. <span className="About-Header-Span"></span></h1>

      </div>
      <div className="About-Content">

        <p className="About-Body">My name is Leshawn Rice, and I'm a Software Developer in Vancouver, WA. I primarily use Javascript and Python but picking up a new language or framework isn't a problem for me. I'm comfortable developing on the frontend and the backend, and I enjoy challenging myself to make seamless, efficient, and scalable applications.</p>
        <div className="About-Footer">
          <button className="About-Contact" onClick={handleContact}>Get in touch</button>
          <p className="About-Social"><span onClick={handleLink} className="About-Link" data-url="https://github.com/leshawn-rice">GitHub</span> <span className="About-Seperator"> |</span> <span onClick={handleLink} className="About-Link" data-url="https://linkedin.com/in/leshawn-rice">LinkedIn</span></p>
        </div>
      </div>
    </div>
  )
}

export default About;
