import React from "react";
import Link from "next/link";
import { Wrench, ShieldCheck, CheckCircle2, Phone, Search, Package, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Genuine Motorcycle Spare Parts & OEM Components | RoadCrafters Garage",
  description:
    "100% Genuine OEM motorcycle spare parts, Motul synthetic lubricants, Brembo brake pads, SKF seals, and high-performance filters in Porvorim, Goa.",
};

const SPARE_CATEGORIES = [
  {
    id: "engine-fluids",
    title: "Engine Oils & Lubricants",
    description: "Motul, Castrol, and Liqui Moly 100% Synthetic Ester fluids, brake fluids, and fork oils.",
    icon: Sparkles,
    badge: "100% Genuine",
    items: ["Motul 7100 10W-40 / 10W-50 4T", "Motul 300V Factory Line Synthetic", "Motul DOT 4 / 5.1 Brake Fluid", "Motul Fork Oil Expert (10W / 15W)"],
    image: "/garage_photos/calibrated-hand-tools.jpg",
  },
  {
    id: "brakes",
    title: "Brake Components & Pads",
    description: "Brembo, Nissin, and EBC sintered and ceramic friction pads, disc rotors, and master cylinders.",
    icon: ShieldCheck,
    badge: "OEM Grade",
    items: ["Brembo Sintered Brake Pads", "Nissin High-Friction Pads", "Stainless Steel Braided Brake Lines", "OEM Disc Rotors & Caliper Seal Kits"],
    image: "/garage_photos/hydraulic-lift-bays.jpg",
  },
  {
    id: "drive-chain",
    title: "Chain & Sprocket Kits",
    description: "DID, RK, and Rolon heavy-duty O-Ring / X-Ring gold drive chains and hardened steel sprockets.",
    icon: Wrench,
    badge: "Heavy Duty",
    items: ["DID 520 / 525 VX3 X-Ring Chain", "Rolon Brass Coated Chain & Sprocket Kits", "Front & Rear Alloy/Steel Sprockets", "Ultrasonic Chain Cleaner & Lube Spray"],
    image: "/garage_photos/chain-alignment-station.jpg",
  },
  {
    id: "filters-plugs",
    title: "Filters & Ignition Spark Plugs",
    description: "Mahle, Mann, K&N high-flow air filters, OEM oil filters, and NGK Iridium spark plugs.",
    icon: Package,
    badge: "High Flow",
    items: ["NGK Laser Iridium Spark Plugs", "K&N High-Flow Air Filters", "OEM Paper & Sponge Air Filters", "Mahle High-Efficiency Oil Filters"],
    image: "/garage_photos/engine-diagnostics-bay.jpg",
  },
  {
    id: "suspension-seals",
    title: "Suspension Seals & Bearings",
    description: "SKF low-friction fork seals, dust wipers, steering head bearings, and swingarm bush kits.",
    icon: CheckCircle2,
    badge: "Precision Fit",
    items: ["SKF Dual-Compound Fork Seals", "NTN / NBC Wheel Bearings", "All Balls Racing Steering Bearings", "Mono-Shock Linkage Bush Kits"],
    image: "/garage_photos/suspension-overhaul-bay.jpg",
  },
  {
    id: "electrical-battery",
    title: "Batteries & Electrical Relays",
    description: "Amaron, Exide, and Yuasa maintenance-free AGM gel batteries, stator coils, and relays.",
    icon: Search,
    badge: "Warranty Covered",
    items: ["Yuasa AGM Maintenance-Free Batteries", "Amaron Pro Bike Rider Gel Batteries", "OEM Stator Coils & Rectifiers", "Heavy-Duty Starter Relays & Fuses"],
    image: "/garage_photos/electrical-testing-station.jpg",
  },
];

export default function SparePartsPage() {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      {/* Page Header */}
      <div className="border-b border-[#E6D7BC] pb-8 text-center max-w-3xl mx-auto">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C5A059] bg-[#1F1B14] px-3 py-1 inline-block mb-3">
          GENUINE OEM & PERFORMANCE COMPONENTS
        </span>
        <h1 className="text-4xl sm:text-5xl font-medium text-[#1F1B14] tracking-tight">
          Motorcycle Spare Parts & Inventory
        </h1>
        <p className="mt-4 text-base text-[#6E6B65] leading-relaxed">
          We stock 100% authentic OEM motorcycle spares, high-performance synthetic lubricants, sintered brake pads, and heavy-duty drive chains for all street, sport, and cruiser motorcycles.
        </p>
      </div>

      {/* Call to Order Banner */}
      <div className="bg-[#1F1B14] text-white p-8 border border-[#2C2316] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
            SPARE PARTS INQUIRY & AVAILABILITY
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Need a Specific Part for Your Motorcycle?
          </h2>
          <p className="text-sm text-[#D4C4A8] max-w-xl">
            Call our spare parts desk directly to check real-time stock availability, order OEM components, or get recommendations for your bike.
          </p>
        </div>
        <a
          href="tel:+918668412375"
          className="px-8 py-4 bg-[#C5A059] hover:bg-[#B38E47] text-[#1F1B14] font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <Phone className="w-4 h-4 text-[#1F1B14]" />
          <span>Call Desk: +91 86684 12375</span>
        </a>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPARE_CATEGORIES.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={cat.id}
              className="bg-white border border-[#E6D7BC] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-stone-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#1F1B14] text-[#FAF8F5] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
                    {cat.badge}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-[#C5A059]">
                    <IconComponent className="w-5 h-5" />
                    <h3 className="text-xl font-bold text-[#1F1B14] group-hover:text-[#C5A059] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6E6B65] leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="border-t border-[#E6D7BC]/50 pt-3">
                    <span className="text-[10px] uppercase font-bold text-[#1F1B14] tracking-wider block mb-2">
                      In-Stock Items Include:
                    </span>
                    <ul className="space-y-1.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#1F1E1B] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full inline-block"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="tel:+918668412375"
                  className="w-full py-2.5 bg-[#FAF8F5] hover:bg-[#C5A059] text-[#1F1B14] hover:text-white border border-[#E6D7BC] hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Check Availability</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guarantee Footer Card */}
      <div className="bg-[#FAF8F5] border border-[#E6D7BC] p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-[#1F1B14]">
          100% Genuine Spare Parts Guarantee
        </h3>
        <p className="text-sm text-[#6E6B65] leading-relaxed">
          We strictly source directly from authorized factory distributors and verified OEM suppliers. Every component installed comes backed by manufacturer warranty and our workshop installation guarantee.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#1F1B14] hover:bg-[#2C2316] text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Visit Workshop Desk
          </Link>
          <a
            href="tel:+918668412375"
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#B38E47] text-[#1F1B14] text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Call Parts Counter
          </a>
        </div>
      </div>
    </div>
  );
}
