import Profile from './Profile';
import Navbar from './Navbar';
import Projects from './Projects';
import '../styles/App.css';
import About from './About';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <About />
        <Profile />
        <Projects />
      </div>
    </>
  );
}

export default App;
