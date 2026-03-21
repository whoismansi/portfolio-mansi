"use client";

import { m } from "framer-motion";
import { FiCode, FiDatabase, FiCloud, FiShield } from "react-icons/fi";
import { fadeInUp, staggerContainer, viewportSettings, springTransition } from "@/lib/animations";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: FiCode,
    skills: ["Java", "Python", "Spring Boot", "TypeScript", "JavaScript", "Node.js", "Angular", "React"],
  },
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    skills: ["AWS", "Azure", "Kubernetes", "Docker", "Jenkins", "Git", "HashiCorp Vault"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "APIs & Security",
    icon: FiShield,
    skills: ["REST", "SAML", "OIDC", "OAuth"],
  },
];

const categoryVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const skillVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.03,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function TechStack() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 border-t border-border-primary">
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
            Technologies
          </span>
          <h2 className="font-tight text-3xl md:text-4xl font-bold text-text-highlight tracking-tight">
            Skills
          </h2>
        </m.div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <m.div
              key={category.title}
              custom={categoryIndex}
              variants={categoryVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3 md:gap-4"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2">
                <category.icon className="w-4 h-4 text-text-secondary" />
                <span className="text-sm font-medium text-text-secondary">{category.title}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <m.span
                    key={skill}
                    custom={skillIndex}
                    variants={skillVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={springTransition}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-bg-highlight border border-border-primary rounded-full text-xs md:text-sm font-medium text-text-highlight cursor-default hover:border-text-secondary/50 transition-all duration-200"
                  >
                    {skill}
                  </m.span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
