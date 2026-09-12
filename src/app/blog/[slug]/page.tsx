import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/content";
import BlogCard from "@/components/BlogCard";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article | RoadCrafters Garage Journal" };
  return {
    title: `${post.title} | RoadCrafters Garage Journal`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug);

  const contentParagraphs = Array.isArray(post.content)
    ? post.content
    : [post.content];

  return (
    <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumb */}
      <div className="text-xs text-[#6E706B] flex items-center space-x-2">
        <Link href="/" className="hover:text-[#18352D]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#18352D]">Guides</Link>
        <span>/</span>
        <span className="text-[#18352D] font-medium">{post.category}</span>
      </div>

      {/* Header */}
      <header className="space-y-4">
        <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B47A4A] bg-[#18352D] px-2.5 py-1 inline-block">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18352D] leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-xs text-[#6E706B] pt-2 border-y border-[#E2DDD5] py-3">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="font-semibold text-[#18352D]">{post.author.name} ({post.author.role})</span>
          </div>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#B47A4A]" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Hero image */}
      <div className="border border-[#E2DDD5] bg-white p-2">
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Content paragraphs */}
      <div className="prose max-w-none text-[#202522] space-y-4 text-base leading-relaxed font-sans">
        {contentParagraphs.map((paragraph, idx) => {
          if (paragraph.startsWith("# ")) {
            return <h1 key={idx} className="font-serif text-3xl font-bold text-[#18352D] mt-8 mb-3">{paragraph.slice(2)}</h1>;
          }
          if (paragraph.startsWith("## ")) {
            return <h2 key={idx} className="font-serif text-2xl font-semibold text-[#18352D] mt-6 mb-3">{paragraph.slice(3)}</h2>;
          }
          if (paragraph.startsWith("### ")) {
            return <h3 key={idx} className="font-serif text-xl font-semibold text-[#18352D] mt-4 mb-2">{paragraph.slice(4)}</h3>;
          }
          if (paragraph.startsWith("> ")) {
            return <blockquote key={idx} className="border-l-4 border-[#A96F43] pl-4 py-2 italic text-stone-600 bg-stone-50 my-4">{paragraph.slice(2)}</blockquote>;
          }
          if (paragraph.startsWith("- ")) {
            return <li key={idx} className="ml-6 list-disc text-stone-700 font-sans my-1">{paragraph.slice(2)}</li>;
          }
          return <p key={idx} className="text-[#202522] leading-relaxed text-base">{paragraph}</p>;
        })}
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="pt-12 border-t border-[#E2DDD5] space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-[#18352D]">
            Related Technical Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <BlogCard key={r.id} post={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
