import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { HEADERS_DATA } from '../config';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(current => !current);
  }

  return (
    <div className="Navbar">
      <div className="Navbar-Name">
        Leshawn Rice
      </div>
      <div className='Navbar-Hamburger'>
        <Hamburger toggled={isOpen} toggle={toggleDrawer} />
      </div>
    </div>
  )
}

export default Navbar;