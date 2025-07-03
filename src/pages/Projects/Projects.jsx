import './Projects.css'
import { useState, useEffect } from 'react';
import KafkaIcon from '../../assets/Apache Kafka.svg';
import DockerIcon from '../../assets/Docker.svg';
import ReactIcon from '../../assets/react.svg';
import NewsPointImg from '../../assets/newspoint.png';
import SignLanguageImg from '../../assets/signlanguage.png';

const projects = [
  {
    id: 1,
    title: 'The News Point',
    description: 'A modern news aggregator web app delivering realtime headlines and personalized news feeds. Built with Next.js and Node.js, featuring categories, and a clean, responsive UI.',
    image: NewsPointImg,
    link: 'https://the-news-point.vercel.app/',
  },
  {
    id: 2,
    title: 'Real Time Sign Language Detection using LSTM',
    description: 'A deep learning project that recognizes sign language gestures in real time using LSTM neural networks and computer vision. Enables accessible communication for the hearing impaired.',
    image: SignLanguageImg,
    link: 'https://medium.com/@zgnxwky/sign-language-detection-using-lstm-model-5258ed3e5e34',
  }
];

const Arrow = ({ direction, ...props }) => (
  <button className={`project-arrow ${direction}`} {...props} aria-label={direction === 'left' ? 'Previous project' : 'Next project'}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="#23232a" strokeWidth="2" fill="none" />
      <path d={direction === 'left' ? 'M24 28L16 20L24 12' : 'M16 12L24 20L16 28'} stroke="#23232a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const getIndex = (idx, total) => ((idx % total) + total) % total;

const Projects = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = projects.length;

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((a) => (a - 1 + total) % total);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((a) => (a + 1) % total);
  };

  // Reset animation state after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match the CSS transition duration
    return () => clearTimeout(timer);
  }, [active]);

  // For 3-card carousel: prev, active, next
  const cards = [active - 1, active, active + 1].map((i, idx) => {
    const proj = projects[getIndex(i, total)];
    let pos = 'center';
    if (idx === 0) pos = 'left';
    if (idx === 2) pos = 'right';
    return { ...proj, pos, key: proj.id + '-' + pos };
  });

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1 className="section-title">My Projects</h1>
        <p className="page-subtitle">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="project-carousel">
        <Arrow direction="left" onClick={prev} disabled={isAnimating} />
        <div className="carousel-track">
          {cards.map((project, idx) => (
            <div
              key={project.key}
              className={`project-card-modern carousel-card ${project.pos} ${project.pos === 'center' ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
            >
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-overlay">
                <h2 className="project-modern-title">
                  {project.title.split(' ').map((word, i) =>
                    ['example', 'kafka', 'golang', 'React', 'Docker', 'News', 'Point'].includes(word.replace(/[^a-zA-Z]/g, '')) ? (
                      <span key={i} className="highlight-word">{word} </span>
                    ) : (
                      word + ' '
                    )
                  )}
                </h2>
                <p className="project-modern-desc">{project.description}</p>
                <a href={project.link} className="project-modern-btn" tabIndex={0}>
                  Check it out
                  <span className="arrow-btn">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="14" r="13" stroke="#23232a" strokeWidth="1" fill="white" />
                      <path d="M10 14H18M18 14L15 11M18 14L15 17" stroke="#23232a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <Arrow direction="right" onClick={next} disabled={isAnimating} />
      </div>
      
      {/* Decorative Divider */}
      <div className="projects-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#646cff" fillOpacity="0.6"/>
            <path d="M12 8L13.09 14.26L20 15L13.09 15.74L12 22L10.91 15.74L4 15L10.91 14.26L12 8Z" fill="#646cff" fillOpacity="0.3"/>
          </svg>
        </div>
        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default Projects; 