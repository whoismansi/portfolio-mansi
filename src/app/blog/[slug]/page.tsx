import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

// required for `output: 'export'`. pre-renders every /blog/[slug] route at build time
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found | Mansi Zope" };
  return {
    title: `${post.title} | Mansi Zope`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <BlogPost post={post} />
      <Footer />
    </main>
  );
}
