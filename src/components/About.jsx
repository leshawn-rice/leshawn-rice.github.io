import Icon from './Icon';
import SectionTitle from './SectionTitle';
import { about } from '../data/site';
import { rich } from '../lib/rich';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionTitle heading={about.heading} />

        <div className="about__cols">
          <div className="about__lede">
            <div className="about__body">
              {about.body.map((p, i) => (
                <p key={i}>{rich(p)}</p>
              ))}
            </div>

            <a className="btn btn--dark" href="#experience">
              <Icon name="play" size={18} />
              Know more
            </a>
          </div>

          <ul className="about__list">
            {about.highlights.map((item) => (
              <li key={item.text}>
                <Icon name="check" size={18} className="about__check" />
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
