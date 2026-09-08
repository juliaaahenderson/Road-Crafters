"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Locations", href: "/locations" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F3EFE6]/95 backdrop-blur-md border-b border-[#D8D1C5] transition-all">
      {/* Top micro bar */}
      <div className="bg-[#17352D] text-[#FAF8F2] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center tracking-wider font-medium">
        <div className="flex items-center space-x-6">
          <span className="text-stone-300">
            OFFICIAL MOTORCYCLE DIAGNOSTIC & SERVICE CENTRE
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+918668412375"
            className="hover:text-[#A96F43] transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#A96F43]" />
            <span>+91 86684 12375</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center space-x-3.5">
          {/* Custom Luxury RC Monogram Shield Emblem */}
          <div className="relative w-11 h-11 bg-[#17352D] border-2 border-[#A96F43] flex items-center justify-center shadow-md group-hover:bg-[#23443A] transition-all duration-300">
            <div className="flex items-center justify-center space-x-[-2px]">
              <span className="font-serif text-lg font-bold tracking-tighter text-[#FAF8F2] group-hover:text-[#A96F43] transition-colors">
                R
              </span>
              <span className="font-serif text-sm font-semibold tracking-tighter text-[#A96F43] group-hover:text-[#FAF8F2] transition-colors">
                C
              </span>
            </div>
            {/* Corner metallic accent */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#A96F43] border border-[#17352D]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#17352D] group-hover:text-[#A96F43] transition-colors leading-tight">
              ROAD CRAFTERS
            </span>
            <span className="text-[9px] uppercase tracking-[0.32em] font-semibold text-[#A96F43]">
              MOTORCYCLE GARAGE & DIAGNOSTICS
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? "text-[#17352D] font-semibold"
                    : "text-[#202321] hover:text-[#A96F43]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A96F43]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#17352D] hover:bg-[#23443A] transition-all border border-[#17352D] rounded-none group shadow-sm"
          >
            <span>Book a Service</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#A96F43] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#17352D] hover:text-[#A96F43] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F2] border-b border-[#D8D1C5] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1.5 border-b border-[#D8D1C5]/60 ${
                  pathname === link.href
                    ? "text-[#A96F43] font-semibold"
                    : "text-[#202321]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#17352D] hover:bg-[#23443A] transition-colors"
            >
              Book a Service
              <ArrowRight className="w-4 h-4 ml-2 text-[#A96F43]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
