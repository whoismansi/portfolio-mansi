"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
  springTransition,
} from "@/lib/animations";

type PostSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
};

// format "YYYY-MM-DD" -> "Sep 1, 2025" without a date lib
const formatDate = (isoDate: string): string => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[month - 1]} ${day}, ${year}`;
};

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

export default function BlogList({ posts }: { posts: PostSummary[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="flex flex-col gap-8 md:gap-12 max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <m.div variants={fadeInUp} className="flex flex-col gap-2 md:gap-3">
          <span className="font-mono text-xs font-normal text-text-secondary uppercase tracking-widest">
            Writing
          </span>
          <h1 className="font-tight text-3xl md:text-4xl lg:text-5xl font-bold text-text-highlight tracking-tight">
            Blog
          </h1>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mt-2">
            Notes on distributed systems, the messy realities of shipping
            software, and the occasional deep-dive into something I broke.
          </p>
        </m.div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <p className="text-text-secondary">No posts yet. Check back soon.</p>
        ) : (
          <div className="flex flex-col gap-4 md:gap-5">
            {posts.map((post, index) => (
              <m.article
                key={post.slug}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-4 md:gap-5 p-5 md:p-7 bg-bg-highlight border border-border-primary rounded-xl hover:border-text-secondary/40 hover:shadow-lg hover:shadow-text-highlight/5 transition-all duration-300"
                >
                  {/* Meta */}
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

                  {/* Title + Excerpt */}
                  <div className="flex flex-col gap-2 md:gap-3">
                    <h2 className="font-tight text-xl md:text-2xl font-bold text-text-highlight group-hover:text-text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags + CTA */}
                  <div className="flex items-center justify-between gap-4 flex-wrap mt-1">
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
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
                    <m.span
                      whileHover={{ x: 4 }}
                      transition={springTransition}
                      className="flex items-center gap-1.5 text-sm font-medium text-text-highlight"
                    >
                      Read post
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </m.span>
                  </div>
                </Link>
              </m.article>
            ))}
          </div>
        )}
      </m.div>
    </section>
  );
}
