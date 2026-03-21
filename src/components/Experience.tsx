"use client";

import { m } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const experiences = [
  {
    period: "May 2023 — Present",
    title: "Software Engineer",
    company: "Fidelity Investments",
    points: [
      "Designed and built secure, scalable applications using Java, Spring Boot, and Angular with enterprise authentication via Azure AD (OIDC) and RBAC",
      "Migrated applications from ECS to EKS, improving reliability and performance across distributed systems",
      "Developed an AWS Lex chatbot to automate SSO troubleshooting, reducing support ticket volume",
      "Integrated Datadog logging and implemented audit trails for REST APIs to improve observability and security compliance",
    ],
  },
  {
    period: "Jul 2022 — Dec 2022",
    title: "Software Engineer Intern",
    company: "Fidelity Investments",
    points: [
      "Developed RESTful APIs in Spring Boot to support transaction workflows in a microservices environment",
      "Created Helm charts and managed Jenkins CI/CD pipelines for automated Kubernetes deployments",
      "Integrated HashiCorp Vault for secure credential management and Redis for performance optimization",
    ],
  },
  {
    period: "Feb 2018 — Aug 2021",
    title: "Software Engineer",
    company: "KPIT Technologies",
    points: [
      "Developed Eclipse RCP plugins using Java and SWT to support subsystem testing workflows",
      "Built internal platforms with Python and PostgreSQL to analyze Git commit patterns, improving code review processes",
      "Created full-stack productivity tools with React, Node.js, and PostgreSQL to track and gamify team engagement",
    ],
  },
];

const timelineVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 border-t border-border-primary">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="flex flex-col gap-8 md:gap-12"
      >
        {/* Section Header */}
        <m.div variants={fadeInUp} className="flex flex-col gap-2 md:gap-3">
          <span className="font-mono text-xs font-normal text-text-secondary uppercase tracking-widest">
            Career
          </span>
          <h2 className="font-tight text-3xl md:text-4xl font-bold text-text-highlight tracking-tight">
            Work Experience
          </h2>
        </m.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <m.div
              key={exp.title + exp.period}
              custom={index}
              variants={timelineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex gap-4 md:gap-6 pb-8 md:pb-10 last:pb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <m.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                  className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-border-primary origin-top"
                />
              )}

              {/* Timeline Dot */}
              <m.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                className="w-4 h-4 border-2 border-border-primary rounded-full bg-bg-primary flex-shrink-0 mt-1 z-10"
              />

              {/* Content */}
              <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-0">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="font-mono text-xs md:text-sm text-text-secondary">{exp.period}</span>
                  <h3 className="font-tight text-xl md:text-2xl font-bold text-text-highlight">{exp.title}</h3>
                  <span className="text-sm md:text-base text-text-secondary">{exp.company}</span>
                </div>

                {/* Points */}
                <div className="flex flex-col gap-2 md:gap-3 pl-0 md:pl-2">
                  {exp.points.map((point, i) => (
                    <m.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 + 0.3 }}
                      className="flex gap-2 md:gap-3 items-start"
                    >
                      <span className="text-sm text-border-primary flex-shrink-0">›</span>
                      <span className="text-sm md:text-[15px] text-text-primary leading-relaxed">{point}</span>
                    </m.div>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
