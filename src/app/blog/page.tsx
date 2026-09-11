"use client";

import React from "react";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/data/content";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function BlogPage() {
  const convexBlogs = useQuery(api.blogs.listPublished);

  // Map Convex posts to BlogPost interface format or fallback to default
  const dynamicPosts = convexBlogs && convexBlogs.length > 0
    ? convexBlogs.map((post: any) => ({
        id: post._id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: "Technical Guide",
        publishedAt: new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        readTime: `${Math.max(3, Math.ceil(post.content.length / 500))} min read`,
        heroImage: post.coverImageUrl || "/hero_bike_workshop.png",
        author: {
          name: post.author || "RoadCrafters Master Technician",
          role: "Technical Advisor",
          avatar: "/media__1788797887061.png",
        },
        content: post.content,
      }))
    : BLOG_POSTS;

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
        {dynamicPosts.map((post: any) => (
          <BlogCard key={post.id} post={post as any} />
        ))}
      </div>
    </div>
  );
}
