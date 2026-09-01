import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";


export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

// strip leading YYYY-MM-DD- so URLs stay clean
const slugFromFilename = (filename: string): string =>
  filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");

// read + parse a single post file
const readPost = (filename: string): Post => {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug: slugFromFilename(filename),
    title: (data.title as string) ?? "Untitled",
    date: (data.date as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readTime: (data.readTime as string) ?? "",
    content,
  };
};

// all posts, sorted newest first. same-date ties break by slug ascending so
// the order is stable across rebuilds instead of depending on readdir order.
export const getAllPosts = (): Post[] => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return a.slug < b.slug ? -1 : 1;
    });
};

export const getPostBySlug = (slug: string): Post | undefined =>
  getAllPosts().find((post) => post.slug === slug);

export const getAllPostSlugs = (): string[] =>
  getAllPosts().map((post) => post.slug);
