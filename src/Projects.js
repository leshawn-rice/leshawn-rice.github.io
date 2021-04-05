import Project from './Project';
import Typography from '@material-ui/core/Typography';
import { PROJECTS } from './config';
import './styles/Projects.css'

// Change key from index to uuid

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <Typography variant="h2" gutterBottom className="Projects-Heading">
        Projects
      </Typography>
      {PROJECTS.map((project, idx) => <Project key={idx} project={project} />)}
    </div>
  )
}

export default Projects;