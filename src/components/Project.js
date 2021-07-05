import ProjectImage from './ProjectImage';
import ProjectFooter from './ProjectFooter';
import '../styles/Project.css';

const Project = ({ project, handleLink }) => {
  const { title, image, description, url, github } = project;
  return (
    <div className="Project" id={`project-${title}`}>
      <div className="Project-Info">
        <h1 className="Project-Header">{title}</h1>
        <p className="Project-Description">{description}</p>
        <ProjectFooter url={url} github={github} handleLink={handleLink} />
      </div>
      <ProjectImage img={image} title={title} />
    </div>
  )
}

export default Project;