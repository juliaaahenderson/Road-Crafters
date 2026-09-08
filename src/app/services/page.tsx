import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES_DATA } from "@/data/content";

export const metadata = {
  title: "Automotive Services | MOTIVE & CO.",
  description:
    "Explore our complete range of specialized automobile care including engine diagnostics, periodic servicing, brake machining, 3D laser alignment, and detailing.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Specialized Motorcycle Services
        </h1>
        <p className="mt-3 text-base text-[#6E706B] max-w-2xl">
          Factory-scheduled maintenance, motorcycle OBD diagnostics, and precision mechanical overhauls for all bike categories.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Specialist CTA section */}
      <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-[#18352D]">
            Require a custom mechanical diagnostic or restoration quote?
          </h3>
          <p className="text-sm text-[#6E706B] mt-2">
            Our technical masters handle classic car mechanical refreshes and custom track prep.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#18352D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2B463D] transition-colors whitespace-nowrap"
        >
          Consult Technical Master
        </Link>
      </div>
    </div>
  );
}
