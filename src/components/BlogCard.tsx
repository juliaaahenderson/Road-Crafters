import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/data/content";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-[#FAF8F3] border border-[#E2DDD5] group hover:border-[#B47A4A] transition-all flex flex-col justify-between overflow-hidden">
      <div>
        <div className="relative h-52 w-full overflow-hidden bg-stone-200">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#18352D] text-[#FAF8F3] text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1">
            {post.category}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center text-xs text-[#6E706B] space-x-3 mb-3">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#B47A4A]" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-serif text-xl font-semibold text-[#18352D] group-hover:text-[#B47A4A] transition-colors leading-snug mb-3">
            {post.title}
          </h3>

          <p className="text-sm text-[#6E706B] leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 border-t border-[#E2DDD5]/50 flex items-center justify-between mt-auto">
        <div className="flex items-center space-x-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-xs text-[#202522] font-medium">{post.author.name}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#18352D] group-hover:text-[#B47A4A] transition-colors"
        >
          Read Guide
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#B47A4A] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
