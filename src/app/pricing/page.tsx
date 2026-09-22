import React from "react";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import PricingClient from "@/components/PricingClient";

export const metadata = {
  title: "Service Packages & Consultations | RoadCrafters Garage (रोडक्राफ्टर्स गैरेज)",
  description:
    "Tailored motorcycle service packages and custom diagnostic consultations in Porvorim, Goa. Call us to discuss your bike's exact specifications.",
};

export default function PricingPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#E6D7BC] pb-8 text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#1F1B14]">
          Motorcycle Service Packages & Consultations
        </h1>
        <p className="mt-3 text-base text-[#6E6B65]">
          Customized packages tailored for routine care, street tuning, and superbike upkeep. Call our master technicians directly for customized estimates and instant scheduling.
        </p>
      </div>

      {/* Packages Grid */}
      <ConvexClientProvider>
        <PricingClient />
      </ConvexClientProvider>

      <div className="bg-[#FAF8F5] border border-[#E6D7BC] p-6 text-xs text-[#6E6B65] space-y-2">
        <p className="font-semibold text-[#1F1B14]">Important Service & Consultation Notes:</p>
        <p>• All estimates are customized based on motorcycle make, model year, displacement, and specific rider requirements.</p>
        <p>• All replacement filters installed are genuine OEM (Original Equipment Manufacturer) or direct factory equivalents (Mahle, Mann, Bosch, K&N).</p>
        <p>• Digital inspection reports provided before any non-package work is undertaken.</p>
      </div>
    </div>
  );
}
