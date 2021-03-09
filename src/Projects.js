import Project from './Project';
import './styles/Projects.css'
import { PROJECTS } from './config';

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <h1 className="Projects-Heading">Projects</h1>
      {PROJECTS.map(project => <Project project={project} />)}
    </div>
  )
}

export default Projects;