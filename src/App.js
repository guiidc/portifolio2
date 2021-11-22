import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Techonologys from './components/Technologys';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Techonologys />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
