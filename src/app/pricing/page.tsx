import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PACKAGES_DATA } from "@/data/content";

export const metadata = {
  title: "Pricing & Service Packages | MOTIVE & CO.",
  description:
    "Transparent fixed-cost service packages for automobiles. No hidden labor charges or surprise line items.",
};

export default function PricingPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D8D1C5] pb-8 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#17352D]">
          Motorcycle Service Packages & Pricing
        </h1>
        <p className="mt-3 text-base text-[#6E706B]">
          Clear itemized packages tailored for routine care, street tuning, and superbike upkeep. No hidden shop supplies or surprise labor surcharges.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PACKAGES_DATA.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-[#FAF8F3] border p-8 flex flex-col justify-between relative ${
              pkg.popular ? "border-[#B47A4A] shadow-md" : "border-[#E2DDD5]"
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#B47A4A] text-white text-[10px] uppercase font-semibold tracking-widest px-3 py-1">
                Most Popular
              </span>
            )}
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#B47A4A] tracking-wider block mb-1">
                {pkg.recommendedFor}
              </span>
              <h2 className="font-serif text-2xl font-semibold text-[#18352D]">
                {pkg.name}
              </h2>
              <div className="mt-4 mb-2 flex items-baseline space-x-2">
                <span className="font-serif text-4xl font-bold text-[#18352D]">
                  {pkg.price}
                </span>
                <span className="text-xs text-[#6E706B]">/ service visit</span>
              </div>
              <p className="text-xs text-[#6E706B] mb-6 border-b border-[#E2DDD5] pb-4">
                {pkg.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-[#202522]">
                    <Check className="w-3.5 h-3.5 text-[#B47A4A] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/book?package=${pkg.id}`}
              className={`w-full py-3 text-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                pkg.popular
                  ? "bg-[#18352D] text-white hover:bg-[#2B463D]"
                  : "bg-[#F4F0E8] text-[#18352D] hover:bg-[#E2DDD5] border border-[#E2DDD5]"
              }`}
            >
              Book {pkg.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-6 text-xs text-[#6E706B] space-y-2">
        <p className="font-semibold text-[#18352D]">Important Pricing & Inclusions Notes:</p>
        <p>• Prices include standard synthetic oil volumes up to limits stated. Additional oil required for V8/V12 engines charged per liter at standard rack rates.</p>
        <p>• All replacement filters installed are genuine OEM (Original Equipment Manufacturer) or direct factory equivalents (Mahle, Mann, Bosch, Hengst).</p>
        <p>• Digital inspection reports provided before any non-package work is undertaken.</p>
      </div>
    </div>
  );
}
