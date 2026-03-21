"use client";

import { m } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const education = [
  {
    period: "2014 — 2018",
    title: "B.S. Computer Science",
    institution: "Stanford University",
    description: "Focus on Distributed Systems and Machine Learning. Dean's List. GPA: 3.8/4.0",
  },
  {
    period: "2023",
    title: "AWS Solutions Architect",
    institution: "Professional Certification",
    description: "Advanced cloud architecture patterns, multi-region deployments, and cost optimization strategies.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Education() {
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
            Background
          </span>
          <h2 className="font-tight text-3xl md:text-4xl font-bold text-text-highlight tracking-tight">
            Education
          </h2>
        </m.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <m.div
              key={edu.title}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
              className="flex flex-col gap-3 md:gap-4 p-5 md:p-8 bg-bg-highlight border border-border-primary rounded-xl hover:border-text-secondary/40 hover:shadow-lg hover:shadow-text-highlight/5 transition-all duration-300"
            >
              <span className="font-mono text-xs md:text-sm text-text-secondary">{edu.period}</span>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <h3 className="font-tight text-lg md:text-xl font-bold text-text-highlight">{edu.title}</h3>
                <span className="text-sm md:text-[15px] font-medium text-blue-600">{edu.institution}</span>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{edu.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
