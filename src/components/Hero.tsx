"use client";

import { m } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Image from "next/image";

// Smoother animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 bg-bg-primary overflow-hidden"
    >
      {/* Grid Background with Fade Effect */}
      <div
        className="absolute inset-0 bg-grid-pattern"
        style={{
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary opacity-40" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
        {/* Text Content */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 md:gap-8 max-w-2xl"
        >
          {/* Availability Badge */}
          <m.div
            variants={itemVariants}
            className="flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium text-blue-600">Available for new opportunities</span>
          </m.div>

          {/* Main Heading */}
          <m.h1
            variants={itemVariants}
            className="font-tight text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-text-highlight leading-tight tracking-tight"
          >
            Hi, I&apos;m Mansi<br />
            Software Engineer
          </m.h1>

          {/* Description */}
          <m.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed"
          >
            I build and scale systems that hold up under load. From distributed architecture and scalable APIs to container orchestration and cloud-native infrastructure, I design systems end-to-end, engineered for reliability and built for production.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mt-2 md:mt-4"
          >
            <m.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-text-highlight text-bg-primary rounded-md text-sm font-medium hover:bg-text-primary transition-colors shadow-md shadow-text-highlight/10"
            >
              View Projects
              <FiArrowRight className="w-3.5 h-3.5" />
            </m.a>
            <m.a
              href="/resume.pdf"
              download="Mansi_Zope_Resume.pdf"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-bg-highlight/80 backdrop-blur-sm border border-border-primary rounded-md text-sm font-medium text-text-highlight hover:bg-bg-secondary transition-colors"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Download Resume
            </m.a>
          </m.div>
        </m.div>

        {/* Profile Photo */}
        <m.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-2 border-border-primary shadow-xl">
              <Image
                src="/profile.png"
                alt="Mansi Zope"
                fill
                className="object-cover object-top rounded-2xl"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-border-primary/50" />
          </div>
        </m.div>
      </div>
    </section>
  );
}
