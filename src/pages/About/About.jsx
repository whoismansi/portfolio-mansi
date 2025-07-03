import { useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('about')

  // Personal information
  const personalInfo = {
    name: 'Mansi Zope',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    email: 'mansi.zope@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate Full Stack Developer with expertise in modern web technologies. I love creating innovative solutions that combine beautiful design with powerful functionality.',
    summary: 'With over 3 years of experience in software development, I specialize in building scalable web applications using React, Node.js, and cloud technologies. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.'
  }

  // Skills data
  const skills = {
    frontend: ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Material-UI'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite', 'Figma'],
    soft: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Leadership', 'Mentoring']
  }

  // Experience data
  const experience = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices across the team.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a major product launch',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Built and maintained multiple web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality user experiences.',
      achievements: [
        'Developed 3 major features that increased user engagement by 25%',
        'Improved code quality by implementing comprehensive testing',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'Redis']
    },
    {
      id: 3,
      company: 'Digital Solutions',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'New York, NY',
      description: 'Created responsive websites and web applications for various clients. Focused on performance optimization and accessibility standards.',
      achievements: [
        'Built 15+ client websites with 100% client satisfaction',
        'Improved website accessibility scores by 30%',
        'Optimized performance achieving 90+ Lighthouse scores'
      ],
      technologies: ['React', 'Vue.js', 'CSS3', 'Webpack', 'Jest']
    }
  ]

  // Education data
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      location: 'New York, NY',
      description: 'Graduated with honors. Specialized in software engineering and web development.',
      achievements: ['Dean\'s List', 'Computer Science Honor Society', 'Senior Project Award']
    }
  ]

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
      scale: 0.95
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

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Tab content component
  const TabContent = ({ activeTab }) => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div 
            className="tab-content"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            key="about"
          >
            <motion.div 
              className="about-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h3 variants={itemVariants}>About Me</motion.h3>
              <motion.p variants={itemVariants}>{personalInfo.bio}</motion.p>
              <motion.p variants={itemVariants}>{personalInfo.summary}</motion.p>
            </motion.div>
            
            <motion.div 
              className="personal-info"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h3 variants={itemVariants}>Personal Information</motion.h3>
              <motion.div 
                className="info-grid"
                variants={containerVariants}
              >
                {[
                  { label: 'Name:', value: personalInfo.name },
                  { label: 'Title:', value: personalInfo.title },
                  { label: 'Location:', value: personalInfo.location },
                  { label: 'Email:', value: personalInfo.email },
                  { label: 'Phone:', value: personalInfo.phone }
                ].map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="info-item"
                    variants={itemVariants}
                  >
                    <span className="label">{info.label}</span>
                    <span className="value">{info.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case 'skills':
        return (
          <motion.div 
            className="tab-content"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            key="skills"
          >
            <motion.div 
              className="skills-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { title: 'Frontend Development', skills: skills.frontend },
                { title: 'Backend Development', skills: skills.backend },
                { title: 'Tools & Technologies', skills: skills.tools },
                { title: 'Soft Skills', skills: skills.soft }
              ].map((category, index) => (
                <motion.div 
                  key={index} 
                  className="skill-category"
                  variants={itemVariants}
                >
                  <h3>{category.title}</h3>
                  <motion.div 
                    className="skill-tags"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex} 
                        className={`skill-tag ${category.title === 'Soft Skills' ? 'soft-skill' : ''}`}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )

      case 'experience':
        return (
          <motion.div 
            className="tab-content"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            key="experience"
          >
            <motion.div 
              className="experience-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {experience.map((job, index) => (
                <motion.div 
                  key={job.id} 
                  className="experience-item"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="experience-header">
                    <h3>{job.position}</h3>
                    <div className="company-info">
                      <span className="company">{job.company}</span>
                      <span className="period">{job.period}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  
                  <p className="description">{job.description}</p>
                  
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {job.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {job.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="tech-tag"
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )

      case 'education':
        return (
          <motion.div 
            className="tab-content"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            key="education"
          >
            <motion.div 
              className="education-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="education-item"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="education-header">
                    <h3>{edu.degree}</h3>
                    <div className="school-info">
                      <span className="school">{edu.school}</span>
                      <span className="period">{edu.period}</span>
                      <span className="location">{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="description">{edu.description}</p>
                  
                  <div className="achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="about-page">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Get to know me better - my background, skills, and experience.
        </p>
      </motion.div>

      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="tabs"
          variants={itemVariants}
        >
          {[
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <TabContent activeTab={activeTab} />
      </motion.div>
    </div>
  )
}

export default About 