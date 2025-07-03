import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: 'Fidelity Investments',
    role: 'Full Stack Engineer',
    duration: 'May 2023 - Present',
    description: 'Responsible for designing and building secure, scalable applications using Java, Spring Boot, and Angular. Worked on integrating enterprise authentication systems with Azure AD using OIDC, and implemented RBAC for access control. Migrated applications from ECS to EKS to improve reliability and performance. Developed tools like a chatbot using AWS Lex to automate SSO troubleshooting. Monitored systems by integrating logs into Datadog for faster issue detection. Ensured traceability by implementing audit logging for REST APIs and maintained high security standards across applications.'
  },
  {
    company: 'Fidelity Investments',
    role: 'Software Engineer Intern',
    duration: 'Jul 2022 - Dec 2022',
    description: 'Focused on backend development and DevOps automation for cloud native applications. Developed and maintained RESTful APIs in Spring Boot to support key transaction workflows. Created Helm charts for packaging Kubernetes apps and managed Jenkins CI/CD pipelines for faster, automated deployments. Used Docker for containerization and integrated Redis for caching to enhance performance. Secured sensitive data by integrating HashiCorp Vault, ensuring dynamic credential handling. Contributed to streamlining deployments and improving system scalability and security in a microservices based environment.'
  },
  {
    company: 'KPIT Technologies',
    role: 'Software Engineer',
    duration: 'Feb 2018 - Aug 2021',
    description: 'Worked on building custom tools and applications to improve engineering productivity and workflow automation. Developed Eclipse RCP plugins using Java and SWT to support subsystem testing. Built internal platforms for analyzing Git commit patterns using Python and PostgreSQL, aiding in better code quality and review processes. Created fullstack web apps with React, Node.js, and PostgreSQL to track and gamify productivity, enhancing team engagement. Collaborated closely with cross-functional teams to deliver tools that streamlined processes and improved developer efficiency.'
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience" aria-label="Experience section">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        <h1 className="section-title">Experience</h1>
        <p className="page-subtitle">A quick look at my professional journey so far.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        <VerticalTimeline>
          {experiences.map((exp, idx) => (
            <VerticalTimelineElement
              key={exp.company+idx}
              date={exp.duration}
              icon={<FaBriefcase />}
              iconStyle={{ background: '#646cff', color: '#fff' }}
              contentStyle={{ background: '#fff', color: '#222' }}
              contentArrowStyle={{ borderRight: '7px solid #646cff' }}
            >
              <h3 className="exp-role">{exp.role}</h3>
              <h4 className="exp-company">{exp.company}</h4>
              <p className="exp-description">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
      
      {/* Decorative Divider */}
      <div className="experience-divider">
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

export default Experience; 