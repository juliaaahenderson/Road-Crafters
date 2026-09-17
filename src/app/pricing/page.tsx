import React from "react";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import PricingClient from "@/components/PricingClient";

export const metadata = {
  title: "Pricing & Service Packages | RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)",
  description:
    "Transparent fixed-cost service packages for motorcycles. No hidden labor charges or surprise line items.",
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
      <ConvexClientProvider>
        <PricingClient />
      </ConvexClientProvider>

      <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-6 text-xs text-[#6E706B] space-y-2">
        <p className="font-semibold text-[#18352D]">Important Pricing & Inclusions Notes:</p>
        <p>• Prices include standard synthetic oil volumes up to limits stated. Additional oil required for multi-cylinder engines charged per liter at standard rack rates.</p>
        <p>• All replacement filters installed are genuine OEM (Original Equipment Manufacturer) or direct factory equivalents (Mahle, Mann, Bosch, K&N).</p>
        <p>• Digital inspection reports provided before any non-package work is undertaken.</p>
      </div>
    </div>
  );
}
