import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Skills from './Skills'
import Footer from './Footer';
import '../styles/App.scss';

const App = () => {

  const handleLink = (evt) => {
    const target = evt.target;
    const url = target.dataset.url;
    window.open(url, '_blank');
  };

  return (
    <>
      <Navbar />
      <About handleLink={handleLink} />
      <div className="container">
        <Skills />
        <Projects handleLink={handleLink} />
      </div>
      <Footer handleLink={handleLink} />
    </>
  );
}

export default App;
