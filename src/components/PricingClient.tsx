"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
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
            className={`bg-[#FAF8F3] border p-8 flex flex-col justify-between relative transition-all ${
              pkg.popular ? "border-[#B47A4A] shadow-md ring-1 ring-[#B47A4A]/20" : "border-[#E2DDD5] shadow-sm hover:border-[#B47A4A]/50"
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#B47A4A] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Most Popular</span>
              </span>
            )}

            <div>
              <span className="text-[10px] uppercase font-semibold text-[#B47A4A] tracking-wider block mb-1">
                {pkg.recommendedFor || "Motorcycle Service"}
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
              <p className="text-xs text-[#6E706B] mb-6 border-b border-[#E2DDD5] pb-4 min-h-[36px]">
                {pkg.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {(pkg.features || []).map((feat: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start text-xs text-[#202522]">
                    <Check className="w-3.5 h-3.5 text-[#B47A4A] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/book?package=${encodeURIComponent(pkgId)}`}
              className={`w-full py-3 text-center text-xs font-semibold uppercase tracking-wider transition-all ${
                pkg.popular
                  ? "bg-[#18352D] text-white hover:bg-[#2B463D] shadow-md"
                  : "bg-[#F4F0E8] text-[#18352D] hover:bg-[#E2DDD5] border border-[#E2DDD5]"
              }`}
            >
              Book {pkg.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
