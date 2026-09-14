"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Footer() {
  const dbBusiness = useQuery(api.content.getByKey, { key: "businessDetails" });

  let name = "ROAD CRAFTERS";
  let phone = "+91 86684 12375";
  let whatsapp = "+918668412375";
  let hours = "Mon – Sun: 08:00 AM – 10:00 PM";
  let address = "Shop - 9, Alcon Regency, Village Panchayat, near Nexa Showroom, Defence Colony, Aradi Socorro, Porvorim, Goa 403521, India";

  if (dbBusiness?.value) {
    try {
      const parsed = JSON.parse(dbBusiness.value);
      if (parsed.name) name = parsed.name;
      if (parsed.phone) phone = parsed.phone;
      if (parsed.whatsapp) whatsapp = parsed.whatsapp;
      if (parsed.hours) hours = parsed.hours;
      if (parsed.address) address = parsed.address;
    } catch (e) {}
  }

  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const cleanWa = whatsapp.replace(/[^0-9]/g, "");

  return (
    <footer className="bg-[#17352D] text-[#FAF8F2] border-t border-[#23443A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-11 h-11 bg-[#FAF8F2] border-2 border-[#A96F43] flex items-center justify-center shadow-sm">
                <div className="flex items-center justify-center space-x-[-2px]">
                  <span className="font-serif text-lg font-bold tracking-tighter text-[#17352D]">
                    R
                  </span>
                  <span className="font-serif text-sm font-semibold tracking-tighter text-[#A96F43]">
                    C
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#A96F43] border border-[#FAF8F2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase">
                  {name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-[#A96F43]">
                  MOTORCYCLE GARAGE & DIAGNOSTICS
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-300 max-w-md leading-relaxed">
              Independent motorcycle service and diagnostic workshop dedicated to meticulous mechanical craftsmanship, OBD diagnostics, chain sync, and transparent pricing for riders.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#A96F43] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#A96F43] flex-shrink-0 mt-0.5" />
                <span>{address}</span>
              </a>
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-2 hover:text-[#A96F43] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A96F43] flex-shrink-0" />
                <span>{phone}</span>
              </a>
              <a
                href={`https://wa.me/${cleanWa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <span className="w-3.5 h-3.5 text-center font-bold text-[10px] bg-emerald-500 text-black rounded-full flex items-center justify-center">W</span>
                <span>WhatsApp: {phone}</span>
              </a>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A96F43] flex-shrink-0" />
                contact@roadcraftersgarage.com
              </p>
              <div className="pt-1 flex items-center gap-3 text-[11px] text-stone-300">
                <span className="bg-[#23443A] px-2 py-0.5 text-[#A96F43] font-semibold">★ 5.0 (55 reviews)</span>
                <span className="bg-[#23443A] px-2 py-0.5 text-stone-200">LGBTQ+ friendly</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4 tracking-wide border-b border-[#23443A] pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link href="/services/periodic-service" className="hover:text-[#A96F43] transition-colors">
                  Periodic Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/engine-diagnostics" className="hover:text-[#A96F43] transition-colors">
                  OBD Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/brake-service" className="hover:text-[#A96F43] transition-colors">
                  Brake Service
                </Link>
              </li>
              <li>
                <Link href="/services/chain-sprocket" className="hover:text-[#A96F43] transition-colors">
                  Chain & Sprocket
                </Link>
              </li>
              <li>
                <Link href="/services/suspension-service" className="hover:text-[#A96F43] transition-colors">
                  Suspension Overhaul
                </Link>
              </li>
              <li>
                <Link href="/services/tyres-wheels" className="hover:text-[#A96F43] transition-colors">
                  Tyres & Wheels
                </Link>
              </li>
              <li>
                <Link href="/services/bike-detailing" className="hover:text-[#A96F43] transition-colors">
                  Bike Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4 tracking-wide border-b border-[#23443A] pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link href="/about" className="hover:text-[#A96F43] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="hover:text-[#A96F43] transition-colors">
                  Workshop
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#A96F43] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[#A96F43] transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#A96F43] transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#A96F43] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Booking */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4 tracking-wide border-b border-[#23443A] pb-2">
              Hours & Booking
            </h4>
            <div className="text-xs text-stone-300 space-y-3">
              <div>
                <p className="font-semibold text-white">Motorcycle Repair Shop</p>
                <p className="text-[#A96F43] font-semibold mt-1">Open — Closes at 10:00 PM</p>
                <p className="text-stone-400 mt-1">{hours}</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/book"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#FAF8F2] hover:text-[#A96F43] transition-colors"
                >
                  Book Appointment
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#A96F43]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-[#23443A] flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} RoadCrafters Garage (रोडक्राफ्टर्स गैरेज). All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/faq" className="hover:text-stone-200">
              FAQ
            </Link>
            <span className="text-[#23443A]">|</span>
            <Link href="/privacy" className="hover:text-stone-200">
              Privacy Policy
            </Link>
            <span className="text-[#23443A]">|</span>
            <Link href="/terms" className="hover:text-stone-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
