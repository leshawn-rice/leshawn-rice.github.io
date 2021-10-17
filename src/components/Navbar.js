import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { HEADERS_DATA } from '../config';
import '../styles/Navbar.scss';
import Drawer from './Drawer';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (drawerOpen) {
    // do nothing, this just gets rid of a warning UwU
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
  }, []);

  const toggleDrawer = () => {
    if (isOpen) {
      setOpen(false);
    }
    else {
      setOpen(true);
    }
  }

  const closeDrawer = () => {
    document.querySelector('#Nav-Drawer').classList.add('Drawer-Closed');
    setTimeout(() => {
      setDrawerOpen(false);
      setOpen(false);
    }, 500);
  }

  return (
    <div className="Navbar" id="navbar">
      <div className="Navbar-Name">
        Leshawn Rice
      </div>
      <div className='Navbar-Hamburger'>
        {isOpen ? (
          mobileView ? (
            <Drawer open={true} onClose={closeDrawer} links={HEADERS_DATA} />
          ) :
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