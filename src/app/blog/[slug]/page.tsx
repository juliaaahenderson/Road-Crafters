import React from "react";
import { BLOG_POSTS } from "@/data/content";
<<<<<<< HEAD
import BlogDetailClient from "@/components/BlogDetailClient";
=======
import { BlogDetailContent } from "@/components/BlogDetailContent";
>>>>>>> 5738d8d35c94b79adb86da2960848ed39f7ddb2d

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug.replace(/^\/blog\//, "").replace(/^\/+/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/^\/blog\//, "").replace(/^\/+/, "");
  const post = BLOG_POSTS.find((p) => p.slug.replace(/^\/blog\//, "").replace(/^\/+/, "") === cleanSlug);

  if (!post) {
    return {
      title: "Motorcycle Technical Guide | RoadCrafters Garage",
      description: "Read technical articles on motorcycle maintenance, OBD diagnostics, and synthetic engine oil.",
    };
  }

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
<<<<<<< HEAD
  return <BlogDetailClient slug={slug} />;
=======
  return <BlogDetailContent slug={slug} />;
>>>>>>> 5738d8d35c94b79adb86da2960848ed39f7ddb2d
}
