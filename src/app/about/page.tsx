import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { classNamesImages } from "@/data/content";

export const metadata = {
  title: "About Us | MOTIVE & CO.",
  description:
    "Learn about our heritage, philosophy, factory certifications, and master technicians built on craftsmanship and driven by trust.",
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="border-b border-[#D8D1C5] pb-12">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#17352D] leading-tight">
          Built on Craftsmanship. Driven by Trust.
        </h1>
        <p className="mt-6 text-lg text-[#6E706B] max-w-3xl leading-relaxed">
          Established as a rider-first alternative to main dealer workshops, Road Crafters Garage was built with a clear mandate: deliver uncompromising mechanical craftsmanship, factory-grade motorcycle OBD diagnostics, and transparent pricing without corporate inflation.
        </p>
      </div>

      {/* Editorial Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title="No Shortcuts. No Guesswork."
          />
          <p className="text-sm text-[#6E706B] leading-relaxed">
            Modern automobiles are complex integrations of mechanical, hydraulic, and software systems. We believe that proper automotive care requires both traditional mechanical empathy and cutting-edge electronic diagnosis.
          </p>
          <p className="text-sm text-[#6E706B] leading-relaxed">
            Every technician in our workshop undergoes continuous training on factory service bulletins, electrical architecture, and precision tool calibration. When you trust us with your car, you receive clear communication, photographic evidence of all findings, and fixed quotes.
          </p>

          <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#E2DDD5]">
            <div>
              <span className="block font-serif text-3xl font-semibold text-[#18352D]">100%</span>
              <span className="text-xs text-[#6E706B]">OEM Parts & Fluid Guarantee</span>
            </div>
            <div>
              <span className="block font-serif text-3xl font-semibold text-[#18352D]">12 Mos</span>
              <span className="text-xs text-[#6E706B]">Comprehensive Service Warranty</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="border border-[#E2DDD5] bg-white p-2">
            <img
              src={classNamesImages.electrical}
              alt="Master Technician at Road Crafters Garage"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-8 md:p-12">
        <SectionHeading
          eyebrow="MILESTONES"
          title="Fifteen Years of Automotive Excellence"
          subtitle="Our journey from a single-bay specialist shop to a multi-location luxury automotive facility."
        />

        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-0.5 before:bg-[#E2DDD5]">
          {[
            {
              year: "2010",
              title: "Garage Founded",
              desc: "Established in London as a specialist BMW & Porsche independent workshop with two hydraulic lifts."
            },
            {
              year: "2014",
              title: "Workshop Facility Expansion",
              desc: "Added 3D laser alignment bays, flush sports car lifts, and clean-room detailing suite."
            },
            {
              year: "2018",
              title: "Factory Diagnostic Suite Integrated",
              desc: "Invested in official dealer software interfaces for all major European luxury brands."
            },
            {
              year: "2022",
              title: "Digital Ledger & Valet Launch",
              desc: "Introduced digital service records and complimentary valet pickup within 15 km."
            },
            {
              year: "2026",
              title: "Multi-Location Network",
              desc: "Expanded flagship workshops to London, Mumbai, and Dubai Performance Centre."
            }
          ].map((item, idx) => (
            <div
              key={item.year}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? "md:flex-row-reverse text-left" : "text-left"
              }`}
            >
              <div className="w-full md:w-1/2 px-6 py-4 bg-white border border-[#E2DDD5] z-10">
                <span className="text-xs font-bold text-[#B47A4A] bg-[#18352D] px-2 py-0.5 inline-block mb-2">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#18352D]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6E706B] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
