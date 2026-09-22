"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const dbBusiness = useQuery(api.content.getByKey, { key: "businessDetails" });
  let phoneDisplay = "+91 86684 12375";
  let phoneTel = "tel:+918668412375";
  if (dbBusiness?.value) {
    try {
      const parsed = JSON.parse(dbBusiness.value);
      if (parsed.phone) {
        phoneDisplay = parsed.phone;
        phoneTel = `tel:${parsed.phone.replace(/[^0-[#A96F43]]/g, "")}`;
      }
    } catch (e) {}
  }

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Spare Parts", href: "/spare-parts" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Locations", href: "/locations" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6D7BC] transition-all">
      {/* Top micro bar */}
      <div className="bg-[#1F1B14] text-[#FAF8F5] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center tracking-wider font-medium">
        <div className="flex items-center space-x-6">
          <span className="text-[#D4C4A8]">
            OFFICIAL MOTORCYCLE DIAGNOSTIC & SERVICE CENTRE
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={phoneTel}
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[#C5A059]"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center space-x-3.5">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-md group-hover:border-[#1F1B14] transition-all duration-300 bg-[#1F1B14] flex items-center justify-center">
            <img
              src="/logo-19th.png"
              alt="RoadCrafters Garage Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#1F1B14] group-hover:text-[#C5A059] transition-colors leading-tight">
              ROAD CRAFTERS
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[#C5A059]">
              YOU SAY IT AND WE DO IT
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
                    ? "text-[#1F1B14] font-semibold"
                    : "text-[#1F1E1B] hover:text-[#C5A059]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B14] hover:bg-[#2C2316] transition-all border border-[#1F1B14] rounded-none group shadow-sm"
          >
            <span>Book a Service</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1F1B14] hover:text-[#C5A059] focus:outline-none"
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
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E6D7BC] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1.5 border-b border-[#E6D7BC]/60 ${
                  pathname === link.href
                    ? "text-[#C5A059] font-semibold"
                    : "text-[#1F1E1B]"
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
              className="w-full flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#1F1B14] hover:bg-[#2C2316] transition-colors"
            >
              Book a Service
              <ArrowRight className="w-4 h-4 ml-2 text-[#C5A059]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
