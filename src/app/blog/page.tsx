"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Clock, ArrowRight, BookOpen, Filter, Sparkles, User, Tag } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import BlogDetailClient from "@/components/BlogDetailClient";
import { BLOG_POSTS } from "@/data/content";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const CATEGORIES = [
  "All Articles",
  "Technical Guides",
  "Diagnostics & ECU",
  "Engine & Synthetic Oil",
  "Chain & Suspension",
];

function BlogIndexContent() {
  const searchParams = useSearchParams();
  const slugParam = searchParams?.get("slug");

  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchTerm, setSearchTerm] = useState("");

  const convexBlogs = useQuery(api.blogs.listPublished);

  // If a slug query parameter is provided (e.g. /blog?slug=my-post), render article details directly
  if (slugParam) {
    return <BlogDetailClient slug={slugParam} />;
  }

  // Map Convex posts to unified post structure
  const dynamicConvexPosts = (convexBlogs || []).map((post: any) => {
    // Clean slug: remove any leading '/blog/' or slashes stored in database
    const cleanSlug = (post.slug || "").replace(/^\/blog\//, "").replace(/^\/+/, "");
    const formattedDate = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "Recently";

    return {
      id: post._id,
      slug: cleanSlug,
      title: post.title || "Untitled Article",
      excerpt: post.excerpt || "",
      category: post.keywords?.split(",")[0]?.trim() || "Technical Guide",
      publishedAt: formattedDate,
      readTime: `${Math.max(3, Math.ceil((post.content || "").length / 500))} min read`,
      heroImage: post.coverImageUrl || "/hero_bike_workshop.png",
      author: {
        name: post.author || "RoadCrafters Master Technician",
        role: "Technical Advisor",
        avatar: "/media__1788797887061.png",
      },
      content: post.content || "",
      isConvex: true,
    };
  });

  // Combine Convex articles with default fallback articles (avoiding duplicate slugs)
  const convexSlugs = new Set(dynamicConvexPosts.map((p) => p.slug));
  const fallbackPosts = BLOG_POSTS.filter((p) => !convexSlugs.has(p.slug)).map((p) => ({
    ...p,
    isConvex: false,
  }));

  const allPosts = [...dynamicConvexPosts, ...fallbackPosts];

  // Filter posts by category & search query
  const filteredPosts = allPosts.filter((post) => {
    const titleText = (post.title || "").toLowerCase();
    const excerptText = (post.excerpt || "").toLowerCase();
    const categoryText = (post.category || "").toLowerCase();
    const searchLower = searchTerm.toLowerCase();

    const matchesSearch =
      titleText.includes(searchLower) ||
      excerptText.includes(searchLower) ||
      categoryText.includes(searchLower);

    const matchesCategory =
      selectedCategory === "All Articles" ||
      categoryText.includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === "Diagnostics & ECU" && (titleText.includes("obd") || titleText.includes("diagnostic"))) ||
      (selectedCategory === "Engine & Synthetic Oil" && (titleText.includes("oil") || titleText.includes("engine"))) ||
      (selectedCategory === "Chain & Suspension" && (titleText.includes("chain") || titleText.includes("suspension")));

    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-[#17352D] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-b border-[#23443A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Rider Maintenance & Diagnostic Guides
              </h1>
              <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                In-depth technical articles written by RoadCrafters lead diagnostic engineers. Learn about synthetic oil chemistry, OBD sensor diagnostics, chain synchronization, and rider safety.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
              <div className="bg-[#23443A] border border-[#2B463D] p-3 flex items-center space-x-5">
                <div>
                  <span className="block font-serif text-xl font-bold text-white">
                    {allPosts.length}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#A96F43] tracking-wider">
                    Published Guides
                  </span>
                </div>
                <div className="border-l border-[#2B463D] pl-5">
                  <span className="block font-serif text-xl font-bold text-white">
                    100%
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#A96F43] tracking-wider">
                    Verified Tech Info
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar & Filter Controls */}
          <div className="pt-2 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, oil specs, OBD codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1C3E35] border border-[#2B463D] text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#A96F43] transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-6 flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-[#A96F43] flex-shrink-0 mr-1 hidden sm:block" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#A96F43] text-white border-[#A96F43]"
                      : "bg-[#1C3E35] text-stone-300 border-[#2B463D] hover:text-white hover:border-stone-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 2. FEATURED HERO ARTICLE */}
        {featuredPost && !searchTerm && selectedCategory === "All Articles" && (
          <section className="bg-white border border-[#E2DDD5] shadow-sm hover:border-[#A96F43] transition-all overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[420px] bg-stone-200">
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#17352D] text-[#A96F43] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 border border-[#A96F43]">
                  ★ Featured Editorial
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-[#6E706B]">
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-white bg-[#17352D] px-2.5 py-1">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A96F43]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17352D] group-hover:text-[#A96F43] transition-colors leading-snug">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#6E706B] leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2DDD5] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#E2DDD5]"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#17352D]">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[10px] text-[#6E706B]">
                        {featuredPost.publishedAt}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#A96F43] transition-colors gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#A96F43] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. ARTICLES GRID */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#D8D1C5] pb-4">
            <h3 className="font-serif text-2xl font-semibold text-[#17352D]">
              {selectedCategory === "All Articles"
                ? "All Technical Guides"
                : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs text-[#6E706B] font-mono">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white p-12 border border-[#E2DDD5] text-center space-y-4 max-w-md mx-auto">
              <BookOpen className="w-10 h-10 text-[#A96F43] mx-auto" />
              <h4 className="font-serif text-xl font-medium text-[#17352D]">
                No Articles Found
              </h4>
              <p className="text-xs text-[#6E706B]">
                No technical articles matched your search query "{searchTerm}". Try clearing your search term or select another category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Articles");
                }}
                className="px-4 py-2 bg-[#17352D] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory !== "All Articles" ? filteredPosts : remainingPosts).map(
                (post: any) => (
                  <BlogCard key={post.id || post.slug} post={post as any} />
                )
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default function BlogIndexPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center font-mono text-xs text-[#17352D]">Loading journal articles...</div>}>
      <BlogIndexContent />
    </Suspense>
  );
}
