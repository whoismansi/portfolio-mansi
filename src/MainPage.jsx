import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';

const MainPage = () => {
  return (
    <main>
      <section id="home" aria-label="Home section">
        <Home />
      </section>
      <section id="experience" aria-label="Experience section">
        <Experience />
      </section>
      <section id="projects" aria-label="Projects section">
        <Projects />
      </section>
    </main>
  );
};

export default MainPage; 