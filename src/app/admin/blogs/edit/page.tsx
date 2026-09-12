"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Eye, Code, Search } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

function EditBlogPostForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const blogPost = useQuery(api.blogs.getById, { id: (id as any) || ("" as any) });
  const updateBlogMutation = useMutation(api.blogs.update);
  const generateUploadUrlMutation = useMutation(api.files.generateUploadUrl);

  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    author: "RoadCrafters Master Technician",
    content: "",
    published: true,
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });

  useEffect(() => {
    if (blogPost) {
      setForm({
        title: blogPost.title || "",
        slug: blogPost.slug || "",
        excerpt: blogPost.excerpt || "",
        author: blogPost.author || "RoadCrafters Master Technician",
        content: blogPost.content || "",
        published: blogPost.published ?? true,
        metaTitle: blogPost.metaTitle || blogPost.title || "",
        metaDescription: blogPost.metaDescription || blogPost.excerpt || "",
        keywords: blogPost.keywords || "",
      });
    }
  }, [blogPost]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSubmitting(true);

    try {
      let storageId: any = blogPost?.coverImageStorageId;

      if (selectedFile) {
        const postUrl = await generateUploadUrlMutation();
        const uploadResult = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": selectedFile.type },
          body: selectedFile,
        });
        const { storageId: uploadedId } = await uploadResult.json();
        storageId = uploadedId;
      }

      await updateBlogMutation({
        id: id as any,
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        author: form.author,
        published: form.published,
        coverImageStorageId: storageId,
        coverImageUrl: blogPost?.coverImageUrl,
        metaTitle: form.metaTitle,
        metaDescription: form.metaDescription,
        keywords: form.keywords,
      });

      router.push("/admin/blogs");
    } catch (err) {
      console.error("Error updating blog post:", err);
      alert("Failed to update post.");
      setSubmitting(false);
    }
  };

  if (!id || !blogPost) {
    return (
      <div className="p-12 text-center text-stone-500 font-mono text-sm">
        Loading article details from Convex database...
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="text-xs font-semibold text-stone-600 hover:text-[#17352D] flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="px-6 py-2.5 bg-[#17352D] hover:bg-[#23443A] text-white text-xs font-semibold uppercase tracking-widest transition-all flex items-center space-x-2 shadow-sm disabled:opacity-50"
        >
          <Save className="w-4 h-4 text-[#A96F43]" />
          <span>{submitting ? "Saving..." : "Save Changes"}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white p-6 border border-[#E2DDD5] space-y-6 shadow-sm">
          <h2 className="font-serif text-xl font-medium text-[#17352D] border-b border-[#E2DDD5] pb-3">
            Edit Article: {form.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#A96F43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                URL Slug *
              </label>
              <div className="flex items-center">
                <span className="px-3 py-2.5 bg-stone-100 border border-r-0 border-[#E2DDD5] text-xs text-stone-500 font-mono">
                  /blog/
                </span>
                <input
                  type="text"
                  required
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm font-mono text-[#202522] focus:outline-none focus:border-[#A96F43]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Author Name
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#A96F43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Update Cover Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="w-full text-xs text-stone-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-[#17352D] file:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
              Short Excerpt *
            </label>
            <textarea
              rows={2}
              required
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#A96F43]"
            />
          </div>
        </div>

        {/* Content Editor */}
        <div className="bg-white border border-[#E2DDD5] shadow-sm">
          <div className="bg-[#17352D] px-6 py-3 flex items-center justify-between text-white">
            <h2 className="font-serif text-lg font-medium">Article Content Body</h2>
            <div className="flex items-center space-x-1 bg-[#1C3E35] p-1 border border-[#2B463D]">
              <button
                type="button"
                onClick={() => setActiveTab("write")}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                  activeTab === "write" ? "bg-[#A96F43] text-white" : "text-stone-300"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Write</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                  activeTab === "preview" ? "bg-[#A96F43] text-white" : "text-stone-300"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "write" ? (
              <textarea
                rows={14}
                required
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full px-4 py-3 bg-stone-50 font-mono text-sm text-[#17352D] border border-[#E2DDD5] focus:outline-none focus:border-[#A96F43]"
              />
            ) : (
              <div className="prose max-w-none p-4 bg-stone-50 border border-[#E2DDD5] text-sm text-[#202522]">
                <h1 className="font-serif text-2xl font-bold text-[#17352D] mb-4">{form.title}</h1>
                <div className="whitespace-pre-wrap leading-relaxed">{form.content}</div>
              </div>
            )}
          </div>
        </div>

        {/* SEO Section */}
        <div className="bg-white p-6 border border-[#E2DDD5] space-y-6 shadow-sm">
          <div className="flex items-center space-x-2 text-[#17352D] border-b border-[#E2DDD5] pb-3">
            <Search className="w-5 h-5 text-[#A96F43]" />
            <h2 className="font-serif text-xl font-medium">On-Page SEO Configuration</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Meta Title
              </label>
              <input
                type="text"
                value={form.metaTitle}
                onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#A96F43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Meta Description
              </label>
              <textarea
                rows={2}
                value={form.metaDescription}
                onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#A96F43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1">
                Focus Keywords
              </label>
              <input
                type="text"
                value={form.keywords}
                onChange={(e) => setForm({ ...form, keywords: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD5] text-sm text-[#202522] focus:outline-none focus:border-[#A96F43]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function EditBlogPostPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-mono text-sm text-stone-500">Loading editor...</div>}>
      <EditBlogPostForm />
    </Suspense>
  );
}
