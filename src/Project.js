import './styles/Project.css';

const Project = ({ project = { name: undefined, description: undefined, image: undefined } }) => {
  const { name, image, description } = project;

  return (
    <div className="Project">
      <h1>{name}</h1>
      <hr />
      <img className="Project-Preview" src={image} alt={`Preview of ${name}`} />
      <p>{description}</p>
      <button className="Project-Btn">View Project</button>
    </div>
  );
}

export default Project;