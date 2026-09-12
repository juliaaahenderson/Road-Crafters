import React from "react";
import { BLOG_POSTS } from "@/data/content";
import { BlogDetailContent } from "@/components/BlogDetailContent";

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
  return <BlogDetailContent slug={slug} />;
}
