import '../styles/Project.css';

const Project = ({ project }) => {
  const { title, image, description } = project;
  return (
    <div className="Project" id={title}>
    </div>
  )
}

export default Project;