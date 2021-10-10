import React from 'react';

import '../styles/Footer.css';

const Footer = ({ handleLink }) => {
  return (
    <div className="Footer">
      <h1>Leshawn Rice</h1>
      <h1>
        <span onClick={handleLink} data-url="/Leshawn_Rice_Resume.pdf" className="Footer-Link">
          Resume
        </span>
        &nbsp;|&nbsp;
        <span onClick={handleLink} data-url="https://github.com/leshawn-rice" className="Footer-Link">
          Github
        </span>
        &nbsp;|&nbsp;
        <span onClick={handleLink} data-url="https://linkedin.com/in/leshawn-rice" className="Footer-Link">
          LinkedIn</span>
      </h1>
    </div>
  )
}

export default Footer;