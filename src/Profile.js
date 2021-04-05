import icon from './img/profile.png'
import Typography from '@material-ui/core/Typography';
import './styles/Profile.css';


const Profile = () => {
  return (
    <>
      <div className="Profile">
        <div className="Profile-Circle">
          <img className="Profile-Image" src={icon} alt="Profile" />
        </div>
        <Typography variant="h1" className="Profile-Text">
          <h1>Leshawn Rice</h1>
        </Typography>

      </div>
    </>
  )
}

export default Profile;