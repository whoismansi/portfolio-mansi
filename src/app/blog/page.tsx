import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Mansi Zope",
  description:
    "Notes on distributed systems, cloud infrastructure, and the messy realities of shipping software.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts().map(({ content, ...rest }) => rest);

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <BlogList posts={posts} />
      <Footer />
    </main>
  );
}
