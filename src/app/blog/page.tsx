import React from "react";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/data/content";

export const metadata = {
  title: "Automotive Guides & Technical Journal | MOTIVE & CO.",
  description:
    "In-depth automotive maintenance guides, brake mechanics analysis, fluid dynamics, and suspension geometry explained by master engineers.",
};

export default function BlogPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Rider Maintenance Guides
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          Editorial articles and technical insights written by our lead diagnostic engineers to help you better care for your motorcycle.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
