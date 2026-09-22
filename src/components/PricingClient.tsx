"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, Sparkles, Phone } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { PACKAGES_DATA } from "@/data/content";

export default function PricingClient() {
  const dbPricing = useQuery(api.content.getByKey, { key: "pricingPackages" });
  const [packages, setPackages] = useState<any[]>(PACKAGES_DATA);

  useEffect(() => {
    if (dbPricing?.value) {
      try {
        const parsed = JSON.parse(dbPricing.value);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPackages(parsed);
        }
      } catch (e) {
        console.error("Failed to parse pricing packages from Convex DB", e);
      }
    }
  }, [dbPricing]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {packages.map((pkg, idx) => {
        const pkgId = pkg.id || `pkg-${idx}`;
        return (
          <div
            key={pkgId}
            className={`bg-white border p-8 flex flex-col justify-between relative transition-all ${
              pkg.popular ? "border-[#C5A059] shadow-md ring-1 ring-[#C5A059]/30" : "border-[#E6D7BC] shadow-sm hover:border-[#C5A059]"
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#C5A059] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Most Popular</span>
              </span>
            )}

            <div>
              <span className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-wider block mb-1">
                {pkg.recommendedFor || "Motorcycle Service"}
              </span>
              <h2 className="font-serif text-2xl font-semibold text-[#1F1B14]">
                {pkg.name}
              </h2>
              <div className="mt-4 mb-2">
                <a
                  href="tel:+918668412375"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 rounded-none text-xs font-semibold hover:bg-[#C5A059] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call for Quote</span>
                </a>
              </div>
              <p className="text-xs text-[#6E6B65] mb-6 border-b border-[#E6D7BC] pb-4 min-h-[36px]">
                {pkg.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {(pkg.features || []).map((feat: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start text-xs text-[#1F1E1B]">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+918668412375"
              className={`w-full py-3 text-center text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                pkg.popular
                  ? "bg-[#1F1B14] text-white hover:bg-[#2C2316] shadow-md"
                  : "bg-[#FAF8F5] text-[#1F1B14] hover:bg-[#E6D7BC] border border-[#E6D7BC]"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call to Book {pkg.name}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
