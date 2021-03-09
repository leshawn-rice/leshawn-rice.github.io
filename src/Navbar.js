import React, { useState } from 'react';
import NavButton from './NavButton';
import './styles/Navbar.css';

const Navbar = () => {

  const [navDisplay, setNavDisplay] = useState('block');

  const toggleNavItems = () => {
    if (navDisplay === 'none') {
      setNavDisplay(current => 'block');
    }
    else {
      setNavDisplay(current => 'none');
    }
  }

  return (
    <div className="Navbar">
      <input type="checkbox" id="phone-menu" onChange={toggleNavItems} />
      <label htmlFor="phone-menu" id="phone-menu-label">
      </label>
      <div className="Navbar-Items">
        <NavButton text="Home" path="#" position={1} />
        <NavButton text="Projects" path="#projects" position={2} />
        <NavButton text="About" path="#about" position={3} />
        <NavButton text="Contact" path="#contact" position={4} />
      </div>
    </div>
  );
}

export default Navbar;