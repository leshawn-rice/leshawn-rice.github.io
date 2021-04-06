import React, { useState, useEffect } from 'react';
import { AppBar, Slide, Toolbar, IconButton, Button, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { HEADERS_DATA } from './config';
import './styles/Navbar.css';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    }

    const handleDrawerClose = () => {
      setDrawerOpen(false);
    }

    const getDrawerChoices = () => {
      return HEADERS_DATA.map(navItem => (
        <Button onClick={handleDrawerClose} href={navItem.href} target={navItem.target}>{navItem.label}</Button>
      ))
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon className="Navbar-Mobile-Menu" />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="Navbar-Mobile-Drawer Mobile-Navbar-Items">{getDrawerChoices()}</div>
        </Drawer>
        <div className="Navbar-Logo-Mobile">
          <Button className="Navbar-Logo-Mobile" href="#">Leshawn Rice</Button>
        </div>
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
            {HEADERS_DATA.map(navItem => (
              <Button href={navItem.href} target={navItem.target}>{navItem.label}</Button>
            ))}
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