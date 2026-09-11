"use client";

import React from "react";
import Link from "next/link";
import { FileText, Search, Settings, ArrowRight, ShieldCheck, Plus, Globe, Sparkles } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function AdminDashboardPage() {
  const blogs = useQuery(api.blogs.listAll);
  const seoPages = useQuery(api.seo.listAll);

  const publishedCount = blogs ? blogs.filter((b: any) => b.published).length : 3;
  const totalBlogs = blogs ? blogs.length : 3;
  const totalSeoPages = seoPages ? seoPages.length : 6;

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-[#17352D] text-white p-8 border border-[#2B463D] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[#A96F43] text-xs font-semibold uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Content Management System</span>
          </div>
          <h1 className="font-serif text-3xl font-medium tracking-tight">
            RoadCrafters Garage Dashboard
          </h1>
          <p className="text-stone-300 text-sm mt-1 max-w-xl">
            Manage technical blog posts, refine on-page SEO meta tags with live Google previews, and update workshop services in real time.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2.5 bg-[#A96F43] hover:bg-[#B47A4A] text-white text-xs font-semibold uppercase tracking-widest transition-all flex items-center space-x-2 shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Create Blog Post</span>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 border border-[#E2DDD5] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6E706B]">
              Blog Posts
            </span>
            <FileText className="w-5 h-5 text-[#A96F43]" />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-serif text-3xl font-bold text-[#17352D]">{totalBlogs}</span>
            <span className="text-xs text-stone-500 font-medium">
              {publishedCount} Published
            </span>
          </div>
        </div>

        <div className="bg-white p-6 border border-[#E2DDD5] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6E706B]">
              ON-PAGE SEO PAGES
            </span>
            <Search className="w-5 h-5 text-[#A96F43]" />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-serif text-3xl font-bold text-[#17352D]">{totalSeoPages}</span>
            <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
              <Globe className="w-3 h-3" />
              Meta Snippets Ready
            </span>
          </div>
        </div>

        <div className="bg-white p-6 border border-[#E2DDD5] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6E706B]">
              Database Status
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="mt-4">
            <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              Convex Realtime Backend
            </span>
          </div>
        </div>
      </div>

      {/* Feature Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Blog Manager */}
        <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm flex flex-col justify-between hover:border-[#A96F43] transition-colors group">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-[#17352D] text-[#A96F43] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#17352D]">
              Blogging & Technical Guides
            </h2>
            <p className="text-xs text-[#6E706B] leading-relaxed">
              Publish rich markdown articles on motorcycle maintenance, diagnostic troubleshooting, and suspension tuning.
            </p>
          </div>
          <Link
            href="/admin/blogs"
            className="mt-6 pt-4 border-t border-[#E2DDD5] text-xs font-semibold text-[#A96F43] uppercase tracking-wider flex items-center justify-between group-hover:text-[#17352D] transition-colors"
          >
            <span>Manage Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 2: On-Page SEO */}
        <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm flex flex-col justify-between hover:border-[#A96F43] transition-colors group">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-[#17352D] text-[#A96F43] flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#17352D]">
              On-Page SEO Management
            </h2>
            <p className="text-xs text-[#6E706B] leading-relaxed">
              Customize meta titles, meta descriptions, focus keywords, and OpenGraph social images with live Google SERP previews.
            </p>
          </div>
          <Link
            href="/admin/seo"
            className="mt-6 pt-4 border-t border-[#E2DDD5] text-xs font-semibold text-[#A96F43] uppercase tracking-wider flex items-center justify-between group-hover:text-[#17352D] transition-colors"
          >
            <span>Configure SEO Tags</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 3: Site Content */}
        <div className="bg-white border border-[#E2DDD5] p-6 shadow-sm flex flex-col justify-between hover:border-[#A96F43] transition-colors group">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-[#17352D] text-[#A96F43] flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#17352D]">
              Services & Business Details
            </h2>
            <p className="text-xs text-[#6E706B] leading-relaxed">
              Update workshop service packages, labor charges, business hours, shop contact details, FAQs, and customer reviews.
            </p>
          </div>
          <Link
            href="/admin/content"
            className="mt-6 pt-4 border-t border-[#E2DDD5] text-xs font-semibold text-[#A96F43] uppercase tracking-wider flex items-center justify-between group-hover:text-[#17352D] transition-colors"
          >
            <span>Edit Site Content</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
