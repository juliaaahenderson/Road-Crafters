import React from "react";
import LocationCard from "@/components/LocationCard";
import SectionHeading from "@/components/SectionHeading";
import { LOCATIONS_DATA } from "@/data/content";

export const metadata = {
  title: "Workshop Locations | MOTIVE & CO.",
  description:
    "Find our Motive & Co. automotive service locations across London, Mumbai, and Dubai.",
};

export default function LocationsPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Workshop Locations
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          State-of-the-art motorcycle service centers strategically situated across key regions.
        </p>
      </div>

      {/* Interactive Map Visual Mock */}
      <div className="bg-[#17352D] text-white p-8 border border-[#23443A] relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 z-10 relative">
          <div>
            <h2 className="font-serif text-2xl font-medium text-white">
              Global Workshop Network Status
            </h2>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              London: Open
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Mumbai: Open
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Dubai: Open
            </span>
          </div>
        </div>

        {/* Map schematic graphic */}
        <div className="bg-[#2B463D]/40 border border-[#2B463D] p-8 text-center rounded-none relative">
          <p className="text-xs text-stone-300 tracking-wider uppercase font-semibold mb-2">
            Interactive Location Map & Real-Time Bay Allocation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-left">
            <div className="bg-[#18352D] p-4 border border-[#2B463D]">
              <span className="text-[#B47A4A] font-serif text-lg font-semibold">UK / Europe</span>
              <p className="text-xs text-stone-300 mt-1">London Park Royal Facility</p>
              <span className="text-[10px] text-emerald-400 mt-2 block font-mono">Bays Available: 2</span>
            </div>
            <div className="bg-[#18352D] p-4 border border-[#2B463D]">
              <span className="text-[#B47A4A] font-serif text-lg font-semibold">India / Asia</span>
              <p className="text-xs text-stone-300 mt-1">Mumbai Andheri East Hub</p>
              <span className="text-[10px] text-emerald-400 mt-2 block font-mono">Bays Available: 4</span>
            </div>
            <div className="bg-[#18352D] p-4 border border-[#2B463D]">
              <span className="text-[#B47A4A] font-serif text-lg font-semibold">Middle East</span>
              <p className="text-xs text-stone-300 mt-1">Dubai Al Quoz Performance Centre</p>
              <span className="text-[10px] text-emerald-400 mt-2 block font-mono">Bays Available: 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LOCATIONS_DATA.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
}
