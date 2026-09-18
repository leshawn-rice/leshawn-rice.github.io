import Icon from './Icon';
import Logo from './Logo';
import { contact, navLinks, RESUME_URL, skillSet } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Logo />
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Quick Links</h2>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Skill Set</h2>
          <ul className="footer__links footer__links--plain">
            {skillSet.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Contact Me</h2>
          <ul className="footer__contact">
            <li>
              <Icon name="pin" size={18} />
              <span>
                <strong>Current City</strong>
                {contact.city}
              </span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span>
                <strong>Phone</strong>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <span>
                <strong>Email</strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </span>
            </li>
          </ul>

          <ul className="footer__social">
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          Copyright © {year} {contact.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
