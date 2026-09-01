"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import "highlight.js/styles/github.css";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
};

const formatDate = (isoDate: string): string => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${monthNames[month - 1]} ${day}, ${year}`;
};

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto flex flex-col gap-6 md:gap-8"
      >
        {/* Back link */}
        <m.div variants={fadeInUp}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-highlight transition-colors group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All posts
          </Link>
        </m.div>

        {/* Header */}
        <m.header
          variants={fadeInUp}
          className="flex flex-col gap-3 md:gap-4 pb-6 md:pb-8 border-b border-border-primary"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-mono text-xs text-text-secondary uppercase tracking-widest">
              <FiCalendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1.5 font-mono text-xs text-text-secondary uppercase tracking-widest">
                <FiClock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            )}
          </div>

          <h1 className="font-tight text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-highlight tracking-tight leading-tight">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-bg-secondary border border-border-primary rounded-md text-[11px] font-mono text-text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </m.header>

        {/* Body. tailwind can't style arbitrary rendered markdown children, so
            we scope styles via the `.blog-content` class defined in globals.css */}
        <m.div variants={fadeInUp} className="blog-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </m.div>
      </m.div>
    </article>
  );
}
