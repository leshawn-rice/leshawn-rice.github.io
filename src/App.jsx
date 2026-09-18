import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Nav from './components/Nav';
import ScrollTop from './components/ScrollTop';
import Tools from './components/Tools';

export default function App() {
  return (
    <>
      <Loader />
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Tools />
        <Education />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
