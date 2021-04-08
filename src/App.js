import Profile from './Profile';
import Navbar from './Navbar';
import Projects from './Projects';
import 'fontsource-roboto';
import './styles/App.css';
import About from './About';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <About />
      <Projects />
    </div>
  );
}

export default App;
