import Icon from './Icon';
import SectionTitle from './SectionTitle';
import { experience } from '../data/site';
import { rich } from '../lib/rich';

export default function Experience() {
  return (
    <section id="experience" className="section section--light experience">
      <div className="container">
        <SectionTitle
          eyebrow="Professional Experience"
          heading="Where I've been and what I've done"
        />

        <ol className="experience__grid">
          {experience.map((role) => (
            <li key={`${role.company}-${role.title}`} className="xp-card">
              <span className="xp-card__icon">
                <Icon name={role.icon} size={30} />
              </span>
              <p className="xp-card__company">{role.company}</p>
              <h3 className="xp-card__title">{role.title}</h3>
              <p className="xp-card__period">{role.period}</p>
              {role.body.map((p, i) => (
                <p key={i} className="xp-card__text">
                  {rich(p)}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
