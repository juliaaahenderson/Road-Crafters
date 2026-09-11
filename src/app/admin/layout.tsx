"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, Search, Settings, LogOut, ExternalLink, ShieldCheck } from "lucide-react";
import ConvexClientProvider from "@/components/ConvexClientProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setAuthenticated(true);
      return;
    }

    const token = localStorage.getItem("rc_admin_token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthenticated(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("rc_admin_token");
    document.cookie = "rc_admin_token=; path=/; max-age=0;";
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") {
    return <ConvexClientProvider>{children}</ConvexClientProvider>;
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#17352D] flex items-center justify-center text-white">
        <div className="animate-pulse flex items-center gap-2 text-sm text-[#A96F43]">
          <ShieldCheck className="w-5 h-5" />
          <span>Verifying Admin Permissions...</span>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
    { name: "On-Page SEO", href: "/admin/seo", icon: Search },
    { name: "Site Content", href: "/admin/content", icon: Settings },
  ];

  return (
    <ConvexClientProvider>
      <div className="min-h-screen bg-[#F5F2EB] flex flex-col font-sans">
        {/* Admin Header Microbar */}
        <header className="bg-[#17352D] text-white border-b border-[#2B463D] sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/admin" className="flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-[#17352D] border-2 border-[#A96F43] flex items-center justify-center shadow-md">
                  <span className="font-serif text-sm font-bold text-[#FAF8F2]">R</span>
                  <span className="font-serif text-xs font-semibold text-[#A96F43] -ml-0.5">C</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold tracking-tight text-white leading-tight">
                    ROAD CRAFTERS
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.25em] text-[#A96F43] font-semibold">
                    ADMIN CMS
                  </span>
                </div>
              </Link>

              {/* Nav links */}
              <nav className="hidden md:flex items-center space-x-1 pl-6 border-l border-[#2B463D]">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#23443A] text-[#A96F43]"
                          : "text-stone-300 hover:text-white hover:bg-[#1C3E35]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                target="_blank"
                className="text-xs text-stone-300 hover:text-[#A96F43] flex items-center gap-1 transition-colors"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-950/60 hover:bg-red-900 border border-red-800/40 text-red-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <LogOut className="w-3 h-3" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-[#1C3E35] border-b border-[#2B463D] px-4 py-2 flex items-center space-x-2 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 ${
                  isActive ? "bg-[#23443A] text-[#A96F43]" : "text-stone-300"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </ConvexClientProvider>
  );
}
