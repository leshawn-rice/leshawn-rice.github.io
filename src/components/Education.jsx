import Icon from './Icon';
import SectionTitle from './SectionTitle';
import { education } from '../data/site';
import { rich } from '../lib/rich';

export default function Education() {
  return (
    <section id="education" className="section section--light education">
      <div className="container">
        <SectionTitle heading="Education & Certifications" />

        <ul className="education__grid">
          {education.map((item) => (
            <li key={item.title} className="edu-card">
              <span className="edu-card__icon">
                <Icon name={item.icon} size={30} />
              </span>
              <h3 className="edu-card__title">{item.title}</h3>
              <p className="edu-card__org">{item.org}</p>
              <p className="edu-card__body">{item.body}</p>
              <dl className="edu-card__meta">
                {item.meta.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              {item.note && <p className="edu-card__note">{rich(item.note)}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
