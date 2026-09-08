import React from "react";
import LocationCard from "@/components/LocationCard";
import SectionHeading from "@/components/SectionHeading";
import { LOCATIONS_DATA } from "@/data/content";

export const metadata = {
  title: "Workshop Location & Directions | RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)",
  description:
    "Visit RoadCrafters Garage (रोडक्राफ्टर्स गैरेज) in Porvorim, Goa. Shop - 9, Alcon Regency, Defence Colony, Aradi Socorro. Call +91 86684 12375.",
};

export default function LocationsPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Workshop Location & Directions
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          State-of-the-art Motorcycle Repair Shop located in Porvorim, Goa. Meticulous servicing, OBD diagnostics, and rider-first care.
        </p>
      </div>

      {/* Location Map Section */}
      <div className="bg-[#17352D] text-white p-8 border border-[#23443A] relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 z-10 relative">
          <div>
            <h2 className="font-serif text-2xl font-medium text-white">
              RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)
            </h2>
            <p className="text-xs text-stone-300 mt-1">
              Motorcycle Repair Shop • Porvorim, Goa
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="flex items-center gap-1.5 bg-[#23443A] px-3 py-1 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open — Closes at 10:00 PM
            </span>
          </div>
        </div>

        {/* Map schematic graphic & key details */}
        <div className="bg-[#2B463D]/40 border border-[#2B463D] p-8 text-center rounded-none relative">
          <p className="text-xs text-stone-300 tracking-wider uppercase font-semibold mb-4">
            Exact Location & Contact Details
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4 text-left">
            <div className="bg-[#18352D] p-5 border border-[#2B463D] space-y-2">
              <span className="text-[#B47A4A] font-serif text-lg font-semibold block">Full Address</span>
              <p className="text-xs text-stone-200 leading-relaxed">
                Shop - 9, Alcon Regency, Village Panchayat, near Nexa Showroom, Defence Colony, Aradi Socorro, Porvorim, Goa 403521, India
              </p>
              <span className="text-[11px] text-[#B47A4A] block font-mono">Plus Code: GRQF+35 Aradi Socorro, Goa, India</span>
            </div>
            <div className="bg-[#18352D] p-5 border border-[#2B463D] space-y-2">
              <span className="text-[#B47A4A] font-serif text-lg font-semibold block">Phone & WhatsApp</span>
              <p className="text-xs text-stone-200">
                Phone: <a href="tel:+918668412375" className="hover:text-[#B47A4A] underline">+91 86684 12375</a>
              </p>
              <p className="text-xs text-emerald-400">
                WhatsApp: <a href="https://wa.me/918668412375" target="_blank" rel="noopener noreferrer" className="hover:underline">+91 86684 12375</a>
              </p>
              <span className="text-[11px] text-stone-400 block">Email: contact@roadcraftersgarage.com</span>
            </div>
            <div className="bg-[#18352D] p-5 border border-[#2B463D] space-y-2">
              <span className="text-[#B47A4A] font-serif text-lg font-semibold block">Business Details</span>
              <p className="text-xs text-stone-200">
                Category: <strong>Motorcycle Repair Shop</strong>
              </p>
              <p className="text-xs text-stone-200">
                Rating: <strong className="text-[#B47A4A]">5.0 ★ (55 reviews)</strong>
              </p>
              <span className="text-[11px] text-stone-300 block bg-[#23443A] px-2 py-0.5 w-fit mt-1">LGBTQ+ friendly</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#2B463D] flex flex-wrap justify-center gap-4">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent("RoadCrafters Garage, Shop - 9, Alcon Regency, Village Panchayat, near Nexa Showroom, Defence Colony, Aradi Socorro, Porvorim, Goa 403521, India")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#B47A4A] hover:bg-[#986338] text-white text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <span>Get Directions in Google Maps</span>
              <span>→</span>
            </a>
            <a
              href="https://wa.me/918668412375"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {LOCATIONS_DATA.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
}
