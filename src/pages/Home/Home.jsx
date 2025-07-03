import './Home.css'
import { motion } from 'framer-motion'
import KubernetesIcon from '../../assets/Kubernetes.svg';
import AWSIcon from '../../assets/AWS.svg';
import JavaIcon from '../../assets/Java.svg';
import SpringBootIcon from '../../assets/Apache.svg'; // Placeholder for Spring Boot
import AngularIcon from '../../assets/Angular.svg';
import ReactIcon from '../../assets/react.svg';
import SQLIcon from '../../assets/PostgresSQL.svg';
import JenkinsIcon from '../../assets/Jenkins.svg';
import GitIcon from '../../assets/Git.svg';
import DockerIcon from '../../assets/Docker.svg';
import AzureIcon from '../../assets/Azure.svg';
import HelmIcon from '../../assets/Helm.svg';
import PythonIcon from '../../assets/Python.svg';
import NPMIcon from '../../assets/NPM.svg';
import VercelIcon from '../../assets/Vercel.svg';
import SwaggerIcon from '../../assets/Swagger.svg';
import SeleniumIcon from '../../assets/Selenium.svg';
import TypeScriptIcon from '../../assets/TypeScript.svg';
import InsomniaIcon from '../../assets/Insomnia.svg';
import VaultIcon from '../../assets/HashiCorp Vault.svg';
import KafkaIcon from '../../assets/Apache Kafka.svg';
import { useEffect, useRef, useState, useMemo } from 'react';

const techIcons = [
  { name: 'Kubernetes', icon: KubernetesIcon },
  { name: 'AWS', icon: AWSIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'Spring Boot', icon: SpringBootIcon },
  { name: 'Angular', icon: AngularIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'SQL', icon: SQLIcon },
  { name: 'Jenkins', icon: JenkinsIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Azure', icon: AzureIcon },
  { name: 'Helm', icon: HelmIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'NPM', icon: NPMIcon },
  { name: 'Vercel', icon: VercelIcon },
  { name: 'Swagger', icon: SwaggerIcon },
  { name: 'Selenium', icon: SeleniumIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Insomnia', icon: InsomniaIcon },
  { name: 'Vault', icon: VaultIcon },
  { name: 'Kafka', icon: KafkaIcon },
];

const getIconPosition = (i, total) => {
  // Distribute icons in a staggered grid pattern to avoid overlap
  const columns = Math.ceil(Math.sqrt(total));
  const col = i % columns;
  const row = Math.floor(i / columns);
  const left = 10 + (col * (80 / (columns - 1 || 1))); // 10% to 90%
  const top = 10 + (row * (70 / (columns - 1 || 1))); // 10% to 80%
  return { left: `${left}%`, top: `${top}%` };
};

const AnimatedNetwork = () => {
  // Network config - reduced complexity for better performance
  const DOTS = 12; // Reduced from 18
  const WIDTH = 1200;
  const HEIGHT = 160;
  const dots = Array.from({ length: DOTS }, (_, i) => ({
    id: i,
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    dx: (Math.random() - 0.5) * 0.3, // Reduced speed
    dy: (Math.random() - 0.5) * 0.3,
  }));
  const [positions, setPositions] = useState(dots);
  const requestRef = useRef();
  const lastTimeRef = useRef(0);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    const networkElement = document.querySelector('.animated-network');
    if (networkElement) {
      observer.observe(networkElement);
    }

    const animate = (currentTime) => {
      if (!isVisibleRef.current) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      // Throttle to 30fps for better performance
      if (currentTime - lastTimeRef.current < 33) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      setPositions(prev => prev.map(dot => {
        let { x, y, dx, dy } = dot;
        x += dx;
        y += dy;
        if (x < 0 || x > WIDTH) dx *= -1;
        if (y < 0 || y > HEIGHT) dy *= -1;
        return { ...dot, x: Math.max(0, Math.min(WIDTH, x)), y: Math.max(0, Math.min(HEIGHT, y)), dx, dy };
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };
  }, []);

  // Optimized line calculation - only calculate when positions change
  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const a = positions[i], b = positions[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 150) { // Reduced connection distance
          result.push({ 
            x1: a.x, y1: a.y, x2: b.x, y2: b.y, 
            opacity: 0.15 + 0.2 * (1 - dist / 150) 
          });
        }
      }
    }
    return result;
  }, [positions]);

  return (
    <div className="animated-network">
      <svg width="100%" height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
        {lines.map((line, i) => (
          <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#b3b8c5" strokeWidth="1" opacity={line.opacity} />
        ))}
        {positions.map(dot => (
          <circle key={dot.id} cx={dot.x} cy={dot.y} r="3" fill="#646cff" opacity="0.6" />
        ))}
      </svg>
    </div>
  );
};

const SkillsMarquee = () => (
  <div className="skills-banner">
    <div className="skills-marquee">
      <div className="skills-marquee-track">
        {techIcons.concat(techIcons).map((tech, i) => (
          <div className="skills-marquee-item" key={tech.name + i}>
            <img src={tech.icon} alt={tech.name} className="skills-marquee-icon" />
            <span className="skills-marquee-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Home = () => {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mansi_Resume.pdf';
    link.download = 'Mansi_Zope_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Mansi Zope</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Engineer with 5+ years of experience
          </p>
          <p className="hero-description">
          I'm passionate about solving complex problems through clean architecture, automation, and robust engineering that drives real-world impact. I thrive on building systems that are both secure and scalable.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleViewWork}>View My Work</button>
            <button className="btn btn-secondary" onClick={handleDownloadResume}>Download Resume</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-animation">
            <div className="code-line">
              <span className="code-keyword">const</span> developer = {'{'}
            </div>
            <div className="code-line">
              <span className="code-property">name:</span> <span className="code-string">'Mansi Zope'</span>,
            </div>
            <div className="code-line">
              <span className="code-property">role:</span> <span className="code-string">'Full Stack Engineer 🚀'</span>,
            </div>
            <div className="code-line">
              <span className="code-property">passion:</span> <span className="code-string">'Turning complex problems into elegant solutions 💡'</span>
            </div>
            <div className="code-line">{'}'}</div>
          </div>
        </div>
      </motion.div>
      <AnimatedNetwork />
      <br />
      <SkillsMarquee />
    </div>
  )
}

export default Home 