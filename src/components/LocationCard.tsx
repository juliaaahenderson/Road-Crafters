import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { LocationItem } from "@/data/content";

export default function LocationCard({ location }: { location: LocationItem }) {
  return (
    <div className="bg-[#FAF8F3] border border-[#E2DDD5] p-8 flex flex-col justify-between hover:border-[#B47A4A] transition-colors">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B47A4A] bg-[#18352D] px-2.5 py-1">
            {location.city}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-[#18352D] mb-3">
          {location.name}
        </h3>
        
        <div className="space-y-2.5 text-xs text-[#6E706B] mb-6">
          <p className="flex items-start gap-2 text-[#202522]">
            <MapPin className="w-4 h-4 text-[#B47A4A] flex-shrink-0 mt-0.5" />
            <span>{location.address}</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#B47A4A] flex-shrink-0" />
            <span>{location.phone}</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#B47A4A] flex-shrink-0" />
            <span>{location.email}</span>
          </p>
          <p className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#B47A4A] flex-shrink-0 mt-0.5" />
            <span>{location.hours}</span>
          </p>
        </div>

        {/* Facility Badges */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-wider text-[#6E706B] block mb-2 font-semibold">
            On-site Capabilities:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {location.facilities.map((fac) => (
              <span
                key={fac}
                className="text-[11px] bg-[#F4F0E8] border border-[#E2DDD5] text-[#18352D] px-2 py-0.5"
              >
                {fac}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between gap-3">
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#6E706B] hover:text-[#18352D] underline"
        >
          Get Directions
        </a>
        <Link
          href="/book"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#FAF8F3] bg-[#18352D] px-4 py-2 hover:bg-[#2B463D] transition-colors"
        >
          Book Facility
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#B47A4A]" />
        </Link>
      </div>
    </div>
  );
}
