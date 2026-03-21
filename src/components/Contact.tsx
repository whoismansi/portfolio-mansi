"use client";

import { m } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { fadeInUp, staggerContainer, viewportSettings, springTransition } from "@/lib/animations";

const contactLinks = [
  {
    label: "Email",
    value: "mansi.zope@outlook.com",
    href: "mailto:mansi.zope@outlook.com",
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mansi-zope",
    href: "https://www.linkedin.com/in/mansi-zope/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/whoismansi",
    href: "https://github.com/whoismansi",
    icon: FiGithub,
  },
];

const linkVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 border-t border-border-primary">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="flex flex-col gap-8 md:gap-12"
      >
        {/* Section Header */}
        <m.div variants={fadeInUp} className="flex flex-col gap-3 md:gap-4 max-w-xl">
          <span className="font-mono text-xs font-normal text-text-secondary uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-tight text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-highlight tracking-tight leading-tight">
            Let&apos;s build something great together
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </m.div>

        {/* Contact Links */}
        <div className="flex flex-col gap-4 md:gap-6">
          {contactLinks.map((link, index) => (
            <m.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              custom={index}
              variants={linkVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              transition={springTransition}
              className="flex items-center gap-3 md:gap-4 group"
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-bg-highlight border border-border-primary rounded-xl group-hover:bg-bg-secondary transition-colors">
                <link.icon className="w-5 h-5 md:w-[22px] md:h-[22px] text-text-highlight" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs md:text-[13px] text-text-secondary">{link.label}</span>
                <span className="text-sm md:text-base font-medium text-text-highlight group-hover:text-text-primary transition-colors break-all">{link.value}</span>
              </div>
            </m.a>
          ))}
        </div>
      </m.div>
    </section>
  );
}
