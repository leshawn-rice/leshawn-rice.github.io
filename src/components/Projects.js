import Project from './Project';
import { PROJECTS } from '../config';
import '../styles/Projects.css'


const Projects = () => {
  return (
    <div className="Projects" id="projects">
      {/* <h1>Projects</h1> */}
      {PROJECTS.map((project, idx) => <Project key={idx} project={project} />)}
    </div>
  )
}

export default Projects;