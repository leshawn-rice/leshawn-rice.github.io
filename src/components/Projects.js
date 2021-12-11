import Project from './Project';
import Seperator from './Seperator';
import { PROJECTS } from '../config';
import '../styles/Projects.css'


const Projects = ({ handleLink }) => {
  return (
    <div className="Projects" id="projects">
      <Seperator />
      <h1 className="Projects-Header">Recent Projects</h1>

      <div className="Projects-Blurb">
        <p className="Projects-Text">My bread and butter is Express. When working in a backend in Javascript, the stack I'm most familiar with is PostgreSQL, Express, and Node.js, but like I said picking up a new language or framework isn't a problem for me. I can quickly adapt to a different stack as necessary. My most recent project, <span onClick={handleLink} className="Projects-Link" data-url="https://goyeti.surge.sh">Yeti,</span> was built with a PERN stack.</p>
        <p className="Projects-Text">I am currently migrating my portfolio projects. The code will remain available on Github, but the live sites are not currently available</p>
      </div>

      <div className="Projects-Content">
        <Project project={PROJECTS['YTI']} handleLink={handleLink} />
      </div>

      <br />

      <div className="Projects-Blurb">
        <p className="Projects-Text">When working in a Python backend, the framework I'm most familiar with is Flask. While Flask is easy to work with and provides a lot of flexibiliy, I've been getting more into using Django since they added asynchronous support. The <span onClick={handleLink} className="Projects-Link" data-url="https://grabaphone.herokuapp.com">Grabaphone API</span>, and <span onClick={handleLink} className="Projects-Link" data-url="https://grabaphone.herokuapp.com">Fantasy Football Trade Tips</span>, both have a backend built with Flask.</p>
      </div>
      <div className="Projects-Content">
        <Project project={PROJECTS['GBP']} handleLink={handleLink} />
      </div>

      <br />

      <div className="Projects-Content">
        <Project project={PROJECTS['FFL']} handleLink={handleLink} />
      </div>
    </div>
  )
}

export default Projects;
