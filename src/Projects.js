import Project from './Project';
import './styles/Projects.css'
import { PROJECTS } from './config';

// Change key from index to uuid

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <h1 className="Projects-Heading">Projects</h1>
      {PROJECTS.map((project, idx) => <Project key={idx} project={project} />)}
    </div>
  )
}

export default Projects;