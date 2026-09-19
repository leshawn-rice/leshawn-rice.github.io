import Icon from './Icon';
import SectionTitle from './SectionTitle';
import { education } from '../data/site';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionTitle heading="Education & Certifications" />

        <ul className="education__list">
          {education.map((item) => (
            <li key={item.title} className="edu">
              <span className="edu__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <div className="edu__body">
                <h3 className="edu__title">{item.title}</h3>
                <p className="edu__meta">
                  {item.org} <span aria-hidden="true">·</span> {item.year}
                </p>
                <p className="edu__note">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
