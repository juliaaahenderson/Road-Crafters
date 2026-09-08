import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/content";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="bg-[#FAF8F3] border border-[#E2DDD5] group hover:border-[#B47A4A] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Service Image */}
        <div className="relative h-48 w-full overflow-hidden bg-stone-200">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-[#18352D] text-[#FAF8F3] text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1">
            {service.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-serif text-xl font-semibold text-[#18352D] group-hover:text-[#B47A4A] transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-[#6E706B] leading-relaxed mb-4 line-clamp-2">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 border-t border-[#E2DDD5]/40 mt-auto flex items-center justify-between">
        <span className="text-xs font-semibold text-[#202522]">
          From <span className="text-[#B47A4A] font-bold">{service.startingPrice}</span>
        </span>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#18352D] group-hover:text-[#B47A4A] transition-colors"
        >
          Explore Service
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#B47A4A] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
