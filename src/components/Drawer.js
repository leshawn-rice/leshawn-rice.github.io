import React from 'react';
import '../styles/Drawer.scss';

/**
 * Drawer Component
 * 
 * Only for mobile, opens up drawer with a slide animation from the left side of the screen.
 * 
 * Is the navigation menu for mobile
 */

const Drawer = ({ open, onClose, links = [] }) => {
  if (open) {
    return (
      <div className="Drawer" id="Nav-Drawer">
        <div className="Drawer-Content">
          <div className="Drawer-Links">
            {links.map(link => (
              <a
                key={`${link.label}-navlink`}
                href={link.href}
                target={link.target}
                className="Drawer-Link"
                onClick={onClose}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div onClick={onClose} className="Drawer-Page">
        </div>
      </div>
    )
  }
  else {
    return null;
  }

}

export default Drawer;