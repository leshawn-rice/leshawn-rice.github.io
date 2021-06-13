import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { HEADERS_DATA } from '../config';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    if (isOpen) {
      setOpen(false);
    }
    else {
      setOpen(true);
    }
  }

  return (
    <div className="Navbar" id="navbar">
      <div className="Navbar-Name">
        Leshawn Rice
      </div>
      <div className='Navbar-Hamburger'>
        {isOpen ? (
          <div className="Navbar-Links" id="navbar-links">
            {HEADERS_DATA.map(link => (
              <a key={`${link.label}-navlink`} href={link.href} target={link.target} className="Navbar-Link">{link.label}</a>
            ))}
          </div>
        ) : null}
        <Hamburger toggled={isOpen} toggle={toggleDrawer} />
      </div>
    </div>
  )
}

export default Navbar;