import './Skills.css';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Python',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><g><path fill="#3776AB" d="M23.97 4c-4.5.02-8.1.38-11.1 1.06c-3.2.73-4.8 1.6-4.8 3.6v5.3h19.2v2.7H7.97c-2.2 0-4 1.8-4 4v7.2c0 2.2 1.8 4 4 4h5.2v-3.6c0-2.2 1.8-4 4-4h15.6c2.2 0 4-1.8 4-4V8.66c0-2-1.6-2.87-4.8-3.6C32.07 4.38 28.47 4.02 23.97 4z"/><path fill="#FFD43B" d="M24.03 44c4.5-.02 8.1-.38 11.1-1.06c3.2-.73 4.8-1.6 4.8-3.6v-5.3H20.73v-2.7h19.2c2.2 0 4-1.8 4-4v-7.2c0-2.2-1.8-4-4-4h-5.2v3.6c0 2.2-1.8 4-4 4H9.13c-2.2 0-4 1.8-4 4v7.34c0 2 1.6 2.87 4.8 3.6c3 .68 6.6 1.04 11.1 1.06z"/></g></svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><g><path fill="#47C5FB" d="M11.5 24L24 11.5l12.5 12.5L24 36.5z"/><path fill="#00569E" d="M24 11.5L36.5 24l-12.5 12.5z"/><path fill="#00B5F8" d="M24 36.5L11.5 24l12.5-12.5z"/></g></svg>
    ),
  },
  {
    name: 'Ubuntu',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#E95420"/><g fill="#fff"><circle cx="24" cy="10" r="3"/><circle cx="38" cy="24" r="3"/><circle cx="24" cy="38" r="3"/><path d="M24 13a11 11 0 0 1 11 11h-3a8 8 0 0 0-8-8v-3z"/></g></svg>
    ),
    highlight: true,
  },
  {
    name: 'Git Source Control',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><g><rect width="48" height="48" rx="10" fill="#24292F"/><path fill="#F34F29" d="M36.7 22.3l-11-11a2 2 0 0 0-2.8 0l-3.2 3.2l3.6 3.6a2.5 2.5 0 0 1 3.1 3.1l3.6 3.6a2.5 2.5 0 1 1-1.4 1.4l-3.6-3.6a2.5 2.5 0 0 1-3.1-3.1l-3.6-3.6l-3.2 3.2a2 2 0 0 0 0 2.8l11 11a2 2 0 0 0 2.8 0l3.2-3.2l-3.6-3.6a2.5 2.5 0 0 1-3.1-3.1l-3.6-3.6a2.5 2.5 0 1 1 1.4-1.4l3.6 3.6a2.5 2.5 0 0 1 3.1 3.1l3.6 3.6l3.2-3.2a2 2 0 0 0 0-2.8z"/></g></svg>
    ),
  },
  {
    name: 'ERPNext',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#7B61FF"/><text x="24" y="32" textAnchor="middle" fontSize="24" fill="#fff" fontFamily="Arial">E</text></svg>
    ),
  },
  {
    name: 'Mongodb',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><g><path fill="#47A248" d="M24 4C13.5 4 5 12.5 5 23c0 7.5 5.5 13.5 13 15.5c.5.1.7-.2.7-.5v-3.2c-5.3 1.1-6.4-2.5-6.4-2.5c-.5-1.2-1.2-1.5-1.2-1.5c-1-.7.1-.7.1-.7c1.1.1 1.7 1.1 1.7 1.1c1 .1 1.6-.7 1.6-.7c.9-1.6 2.3-1.1 2.8-.8c.1-.7.4-1.1.7-1.4c-4.2-.5-8.6-2.1-8.6-9.2c0-2 .7-3.6 1.8-4.9c-.2-.5-.8-2.3.2-4.7c0 0 1.5-.5 5 1.8c1.4-.4 2.9-.6 4.4-.6c1.5 0 3 .2 4.4.6c3.5-2.3 5-1.8 5-1.8c1 2.4.4 4.2.2 4.7c1.1 1.3 1.8 2.9 1.8 4.9c0 7.1-4.4 8.7-8.6 9.2c.4.3.8.9.8 1.8v2.7c0 .3.2.6.7.5c7.5-2 13-8 13-15.5C43 12.5 34.5 4 24 4z"/></g></svg>
    ),
  },
  {
    name: 'Html & CSS',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><g><path fill="#2196F3" d="M8 4l4 36l12 4l12-4l4-36z"/><path fill="#FAFAFA" d="M24 40l-9.6-2.8l-2.8-28h25.6l-2.8 28z"/><path fill="#1976D2" d="M24 36.7l7.7-2.2l2.2-22.5H14.1l2.2 22.5z"/><path fill="#FFC107" d="M24 8v32l9.6-2.8l2.8-28z"/></g></svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#F7DF1E"/><text x="24" y="32" textAnchor="middle" fontSize="24" fill="#222" fontFamily="Arial">JS</text></svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Skills = () => (
  <div className="skills-page">
    <motion.h1 
      className="skills-title"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      My Skills
    </motion.h1>
    <motion.div 
      className="skills-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.name}
          className={`skill-card${skill.highlight ? ' highlight' : ''}`}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-label">{skill.name}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Skills; 