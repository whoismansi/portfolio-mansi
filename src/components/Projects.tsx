"use client";

import { m } from "framer-motion";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { fadeInUp, staggerContainer, viewportSettings, springTransition } from "@/lib/animations";

const projects = [
  {
    title: "Istio MCP Server",
    description: "AI-powered Kubernetes management tool using Model Context Protocol (MCP). Enables Claude to query and manage Istio service mesh resources (Gateways, VirtualServices) via natural language, with support for both in-cluster and out-of-cluster configurations.",
    tech: "Go, MCP, Kubernetes, Istio, client-go, KinD",
    github: "https://github.com/nilekhc/istio-mcp-server",
  },
  {
    title: "RideStream",
    description: "Real-time ride sharing simulation platform with Apache Kafka, Spring Boot microservices, and event-driven architecture for scalable stream processing.",
    tech: "Java, Spring Boot, Apache Kafka, PostgreSQL",
    github: "https://github.com/whoismansi/ridestream",
  },
  {
    title: "Sign Language Detection",
    description: "A deep learning project that recognizes sign language gestures in real time using LSTM neural networks and computer vision. Enables accessible communication for the hearing impaired.",
    tech: "Python, TensorFlow, LSTM, OpenCV",
    github: "https://github.com/whoismansi/Sign-Language-Detection",
    demo: "https://medium.com/@zgnxwky/sign-language-detection-using-lstm-model-5258ed3e5e34",
  },
  {
    title: "API Gateway Service",
    description: "High-performance API gateway handling 100k+ requests/second with rate limiting, caching, and automatic failover.",
    tech: "Node.js, Redis, Docker, Kubernetes",
    github: "https://github.com/whoismansi/api-gateway",
    demo: "https://api-gateway.demo.com",
  },
  // {
  //   title: "Infrastructure Monitor",
  //   description: "Real-time infrastructure monitoring dashboard with alerting, log aggregation, and predictive anomaly detection.",
  //   tech: "Python, Grafana, Prometheus",
  //   github: "https://github.com/whoismansi/infra-monitor",
  // },
  // {
  //   title: "E-commerce Backend",
  //   description: "Scalable microservices architecture for an e-commerce platform with payment processing and inventory management.",
  //   tech: "Java, Spring Boot, MongoDB",
  //   github: "https://github.com/whoismansi/ecommerce",
  // },
  // {
  //   title: "ML Data Pipeline",
  //   description: "End-to-end machine learning pipeline for data processing, model training, and deployment with MLOps best practices.",
  //   tech: "Python, TensorFlow, Apache Airflow",
  //   github: "https://github.com/whoismansi/ml-pipeline",
  //   demo: "https://ml-pipeline.demo.com",
  // },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 border-t border-border-primary">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="flex flex-col gap-8 md:gap-12"
      >
        {/* Section Header */}
        <m.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="font-mono text-xs font-normal text-text-secondary uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="font-tight text-3xl md:text-4xl font-bold text-text-highlight tracking-tight">
              Featured Projects
            </h2>
          </div>
          <m.a
            href="https://github.com/whoismansi"
            whileHover={{ x: 4 }}
            transition={springTransition}
            className="text-sm font-medium text-text-primary hover:text-text-highlight transition-colors"
          >
            View all projects →
          </m.a>
        </m.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <m.div
              key={project.title}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="flex flex-col gap-4 md:gap-5 p-5 md:p-7 bg-bg-highlight border border-border-primary rounded-xl hover:border-text-secondary/40 hover:shadow-lg hover:shadow-text-highlight/5 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <FiFolder className="w-6 h-6 md:w-8 md:h-8 text-text-primary" strokeWidth={1.5} />
                <div className="flex gap-3">
                  {project.github && (
                    <m.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      transition={springTransition}
                      className="text-text-secondary hover:text-text-highlight transition-colors"
                    >
                      <FiGithub className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                    </m.a>
                  )}
                  {project.demo && (
                    <m.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      transition={springTransition}
                      className="text-text-secondary hover:text-text-highlight transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5 md:w-[22px] md:h-[22px]" />
                    </m.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 md:gap-3">
                <h3 className="font-tight text-lg md:text-[22px] font-bold text-text-highlight">{project.title}</h3>
                <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <span className="text-xs md:text-[13px] font-medium text-text-primary mt-auto">{project.tech}</span>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
