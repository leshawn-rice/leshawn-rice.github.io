import icon from './img/profile.png'
import './styles/Profile.css';


const Profile = () => {
  return (
    <>
      <div className="Profile">
        <div className="Profile-Circle">
          <img className="Profile-Image" src={icon} alt="Profile" />
        </div>
      </div>
    </>
  )
}

export default Profile;