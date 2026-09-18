import { useEffect, useState } from 'react';
import Icon from './Icon';
import logoLight from '../assets/brand/logo-light.png';
import logoDark from '../assets/brand/logo-dark.png';
import { navLinks, RESUME_URL } from '../data/site';
import { useScrollSpy } from '../lib/useScrollSpy';

const IDS = navLinks.map((l) => l.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const active = useScrollSpy(IDS);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? ' is-stuck' : ''}${open ? ' is-open' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__logo" href="#home" onClick={() => setOpen(false)}>
          {/* the wordmark ships in two tones; swap once the bar goes solid white */}
          <img
            src={stuck ? logoDark : logoLight}
            alt="Leshawn Rice"
            width="147"
            height="88"
          />
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>

        <nav id="primary-nav" className="nav__menu" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : undefined}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav__resume">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
