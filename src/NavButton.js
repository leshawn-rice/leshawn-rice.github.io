import './styles/NavButton.css';
import { NAVBTN_POS_MAP as POS_MAP } from './config';

const NavButton = ({ text = "Home", path = "#", position = 1 }) => {

  return (
    <a className="NavButton" href={path} style={
      POS_MAP[position]
    }>
      <h1>{text}</h1>
    </a>
  );

}

export default NavButton;