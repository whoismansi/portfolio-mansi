"use client";

import { m } from "framer-motion";
import { fadeIn, viewportSettings } from "@/lib/animations";

export default function Footer() {
  return (
    <m.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 md:px-12 lg:px-20 py-6 md:py-10 border-t border-border-primary bg-bg-primary/80"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs md:text-sm text-text-secondary text-center sm:text-left">© 2026 Mansi Zope. All rights reserved.</span>
      </div>
      <m.a
        href="#"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="text-xs md:text-sm text-text-secondary hover:text-text-highlight transition-colors"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top ↑
      </m.a>
    </m.footer>
  );
}
