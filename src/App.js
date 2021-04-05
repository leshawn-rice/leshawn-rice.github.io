import Profile from './Profile';
import Navbar from './Navbar';
import Projects from './Projects';
import 'fontsource-roboto';
import './styles/App.css';

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
