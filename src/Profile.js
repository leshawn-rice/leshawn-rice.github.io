import './styles/Profile.css';
import icon from './img/profile.png'


const Profile = () => {
  return (
    <>
      <div className="Profile">

        <div className="Profile-Circle">
          <img className="Profile-Image" src={icon} alt="Profile" />
        </div>
        <div className="Profile-Text">
          <h1>Leshawn Rice</h1>
        </div>

      </div>
    </>
  )
}

export default Profile;