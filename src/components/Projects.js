import Project from './Project';
import { PROJECTS } from '../config';
import '../styles/Projects.css'


const Projects = ({ handleLink }) => {
  return (
    <div className="Projects" id="projects">
      <div className="Projects-Seperator"></div>
      <h1 className="Projects-Header">My Projects</h1>

      <div className="Projects-Blurb">
        <p className="Projects-Text">My bread and butter is Express. When working in a backend in Javascript, the stack I'm most familiar with is PostgreSQL, Express, and Node.js, but like I said picking up a new language or framework isn't a problem for me. I can quickly adapt to a different stack as necessary. My most recent project, <span onClick={handleLink} className="Projects-Link" data-url="https://goyeti.surge.sh">Yeti,</span> was built with a PERN stack.</p>
      </div>

      <div className="Projects-Content">
        <Project project={PROJECTS['YTI']} handleLink={handleLink} />
      </div>
    </div>
  )
}

export default Projects;