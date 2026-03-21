"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <m.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-20 py-4 md:py-6 bg-bg-primary/90 backdrop-blur-md border-b border-border-primary"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm md:text-base font-bold text-text-highlight">mansi.zope</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-text-secondary hover:text-text-highlight transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop Social Links */}
      <div className="hidden md:flex items-center gap-3 lg:gap-4">
        <m.a
          href="https://github.com/whoismansi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-background border border-border-primary hover:bg-bg-secondary transition-colors"
        >
          <FiGithub className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-text-highlight" />
        </m.a>
        <m.a
          href="https://www.linkedin.com/in/mansi-zope/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-background border border-border-primary hover:bg-bg-secondary transition-colors"
        >
          <FiLinkedin className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-text-highlight" />
        </m.a>
        <m.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-text-highlight text-bg-primary rounded-lg text-sm font-medium hover:bg-text-primary transition-colors"
        >
          Get in Touch
        </m.a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-background border border-border-primary"
      >
        {isOpen ? (
          <FiX className="w-5 h-5 text-text-highlight" />
        ) : (
          <FiMenu className="w-5 h-5 text-text-highlight" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-border-primary md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-text-highlight transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border-primary">
                <a
                  href="https://github.com/whoismansi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-background border border-border-primary"
                >
                  <FiGithub className="w-5 h-5 text-text-highlight" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mansi-zope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-background border border-border-primary"
                >
                  <FiLinkedin className="w-5 h-5 text-text-highlight" />
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center px-5 py-2.5 bg-text-highlight text-bg-primary rounded-lg text-sm font-medium"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}
