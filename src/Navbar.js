import React, { useState, useEffect } from 'react';
import { AppBar, Slide, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './styles/Navbar.css';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false)

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
          }}
        >
          <MenuIcon className="Navbar-Mobile-Menu" />
        </IconButton>
        <div className="Navbar-Logo-Mobile">Leshawn Rice</div>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <>
        <Toolbar>
          <div className="Navbar-Logo">
            <Button href="#">
              Leshawn Rice
            </Button>
          </div>
          <div className="Navbar-Items">
            <Button href="#about">
              About
            </Button>
            <Button href="#contact">
              Contact
            </Button>
            <Button href="#projects">
              Projects
            </Button>
          </div>
        </Toolbar>
      </>
    );
  };

  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <AppBar variant="dense" position="fixed" className="Navbar">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Slide>
  )

}

export default Navbar;