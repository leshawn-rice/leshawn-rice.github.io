import '../styles/Project.css';

const Project = ({ project, handleLink }) => {
  const { title, image, description, url, github } = project;
  return (
    <div className="Project">
      <div className="Project-Info">
        <h1 className="Project-Header">{title}</h1>
        <p className="Project-Description">{description}</p>
        <div className="Project-Footer">
          <button data-url={url} onClick={handleLink} className="Project-Btn Project-Link">View Project</button>
          <button data-url={github} onClick={handleLink} className="Project-Btn Project-Source">View Code</button>
        </div>
      </div>
      <div className="Project-Image">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default Project;