import Typography from '@material-ui/core/Typography';
import './styles/Project.css';

const Project = ({ project }) => {
  const { title, image, description } = project;
  return (
    <div className="Project">
      <div className="Project-Title">
        <button className="Project-Title-Button">View Code</button>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <button className="Project-Title-Button">View Project</button>
      </div>
      <div className="Project-Body">
        <div className="Project-Body-Image">
          <img className="Project-Body-Img" src={image} alt={`${title} preview`} />
        </div>
        <div className="Project-Body-Text">
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Project;