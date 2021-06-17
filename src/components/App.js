import Navbar from './Navbar';
import Projects from './Projects';
import Footer from './Footer';
import '../styles/App.css';
import About from './About';

const App = () => {

  const handleLink = (evt) => {
    const target = evt.target;
    const url = target.dataset.url;
    window.open(url, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <About handleLink={handleLink} />
        <Projects handleLink={handleLink} />
      </div>
      <Footer />
    </>
  );
}

export default App;
