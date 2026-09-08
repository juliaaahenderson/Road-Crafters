import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { WORKSHOP_FEATURES, classNamesImages } from "@/data/content";

export const metadata = {
  title: "Inside Our Workshop | RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)",
  description:
    "Explore our state-of-the-art motorcycle facility in Porvorim, Goa featuring hydraulic lifts, factory diagnostic rigs, laser chain alignment, and detailing bays.",
};

export default function WorkshopPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Inside the Motorcycle Workshop
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          Professional hydraulic lift stations. Meticulous mechanical workmanship. Zero compromises on tools or cleanliness.
        </p>
      </div>

      {/* Grid of Workshop Infrastructure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {WORKSHOP_FEATURES.map((feature) => (
          <div key={feature.id} className="bg-[#FAF8F3] border border-[#E2DDD5] overflow-hidden flex flex-col justify-between">
            <div className="h-64 overflow-hidden bg-stone-200">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 space-y-3">
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B47A4A]">
                {feature.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#18352D]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6E706B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Workshop Gallery Grid */}
      <div className="bg-[#18352D] text-white p-8 md:p-12 border border-[#2B463D]">
        <SectionHeading
          eyebrow="FULL WORKSHOP TOUR"
          title="Designed for Performance Motorcycles & Two-Wheelers"
          subtitle="Every bay is calibrated to support precise torque tolerances, street bikes, sportbikes, cruisers, and adventure tourers."
          dark
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <img
            src={classNamesImages.workshopMain}
            alt="Main Bay"
            className="w-full h-40 object-cover border border-[#2B463D]"
          />
          <img
            src={classNamesImages.toolsGrid}
            alt="Snap-on Tools"
            className="w-full h-40 object-cover border border-[#2B463D]"
          />
          <img
            src={classNamesImages.chainSprocket}
            alt="Chain Maintenance Rig"
            className="w-full h-40 object-cover border border-[#2B463D]"
          />
          <img
            src={classNamesImages.detailing}
            alt="Ceramic Detailing Room"
            className="w-full h-40 object-cover border border-[#2B463D]"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/book"
            className="px-8 py-3.5 bg-[#B47A4A] hover:bg-[#986338] text-white text-xs font-semibold uppercase tracking-widest inline-block transition-colors"
          >
            Schedule Facility Inspection & Service
          </Link>
        </div>
      </div>
    </div>
  );
}
