import Icon from './Icon';
import SectionTitle from './SectionTitle';
import { contact, projects } from '../data/site';

const GITHUB_USER = contact.github.replace(/\/+$/, '').split('/').pop();

// Copy uses `backticks` for inline code, the way the rest of the data file
// uses **bold**.
function withCode(text) {
  return text.split(/(`[^`]+`)/g).map((chunk, i) =>
    chunk.startsWith('`') && chunk.endsWith('`') ? (
      <code key={i}>{chunk.slice(1, -1)}</code>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle heading="Public Projects" />

        <ul className="projects__grid">
          {projects.map((project) => {
            const url = `https://github.com/${GITHUB_USER}/${project.repo}`;
            return (
              <li key={project.repo} className="project">
                <a
                  className="project__link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project__head">
                    <Icon name="repo" size={20} />
                    <h3 className="project__name">{project.name}</h3>
                    <Icon name="external" size={15} className="project__out" />
                  </span>

                  <span className="project__repo">{project.repo}</span>
                  <span className="project__desc">{withCode(project.desc)}</span>

                  <span className="project__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project__tag">
                        {tag}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          className="btn btn--dark projects__more"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size={17} />
          More on GitHub
        </a>
      </div>
    </section>
  );
}
