import './styles/App.css';
import Profile from './Profile';
import Navbar from './Navbar';
import Projects from './Projects';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
