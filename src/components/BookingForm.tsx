"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/content";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

interface BookingFormProps {
  initialServiceSlug?: string;
}

export default function BookingForm({ initialServiceSlug }: BookingFormProps) {
  const dbServices = useQuery(api.content.getByKey, { key: "services" });

  let serviceOptions = SERVICES_DATA.map((s) => ({ slug: s.slug, title: s.title, startingPrice: s.startingPrice }));
  if (dbServices?.value) {
    try {
      const parsed = JSON.parse(dbServices.value);
      if (Array.isArray(parsed) && parsed.length > 0) {
        serviceOptions = parsed.map((s: any) => ({
          slug: s.slug || (s.title ? s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "service"),
          title: s.title || s.name || "Service",
          startingPrice: s.startingPrice || "₹999",
        }));
      }
    } catch (e) {}
  }

  const [formData, setFormData] = useState({
    bikeCategory: "Street / Naked",
    brand: "",
    model: "",
    regNumber: "",
    serviceId: initialServiceSlug || (serviceOptions[0]?.slug || "periodic-service"),
    preferredDate: "",
    preferredTime: "Morning (08:00 - 11:00)",
    pickupDrop: "No",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello RoadCrafters Garage! 🛠️
I would like to book a motorcycle service appointment:

• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "N/A"}
• Category: ${formData.bikeCategory}
• Motorcycle: ${formData.brand} ${formData.model} ${formData.regNumber ? `(${formData.regNumber})` : ""}
• Service Requested: ${formData.serviceId}
• Preferred Date: ${formData.preferredDate || "Earliest available"} (${formData.preferredTime})
• Transport Pickup: ${formData.pickupDrop}
${formData.notes ? `• Notes: ${formData.notes}` : ""}

Please confirm my lift bay allocation. Thank you!`;

    const waUrl = `https://wa.me/918668412375?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F2] border border-[#D8D1C5] p-8 md:p-12 text-center space-y-6">
        <div className="w-16 h-16 bg-[#17352D] text-[#A96F43] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A96F43]">
            BIKE APPOINTMENT REQUESTED
          </span>
          <h3 className="font-serif text-3xl text-[#17352D] font-medium">
            Thank you, {formData.name || "Valued Rider"}
          </h3>
          <p className="text-sm text-[#6E706B] max-w-lg mx-auto leading-relaxed">
            Your appointment request for a <strong className="text-[#17352D]">{formData.brand} {formData.model}</strong> has been logged in our scheduling queue. A Road Crafters Technical Advisor will contact you at <strong>{formData.phone}</strong> shortly to confirm lift bay allocation and pickup timing.
          </p>
        </div>

        <div className="bg-[#F3EFE6] p-6 text-left max-w-md mx-auto text-xs space-y-2 border border-[#D8D1C5]">
          <div className="flex justify-between">
            <span className="text-[#6E706B]">Motorcycle:</span>
            <span className="font-semibold text-[#17352D]">{formData.brand} {formData.model} ({formData.bikeCategory})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6E706B]">Service:</span>
            <span className="font-semibold text-[#17352D]">{formData.serviceId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6E706B]">Preferred Slot:</span>
            <span className="font-semibold text-[#17352D]">{formData.preferredDate || "Earliest Available"} | {formData.preferredTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6E706B]">Van Pickup Required:</span>
            <span className="font-semibold text-[#17352D]">{formData.pickupDrop}</span>
          </div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 bg-[#17352D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#23443A] transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Bike Category selection tabs */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-2">
          1. Motorcycle Category
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["Street / Naked", "Sportbike", "Cruiser", "Adventure / Dual"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFormData({ ...formData, bikeCategory: cat })}
              className={`py-2.5 text-xs font-semibold tracking-wide border transition-all ${
                formData.bikeCategory === cat
                  ? "bg-[#17352D] text-white border-[#17352D]"
                  : "bg-white text-[#202321] border-[#D8D1C5] hover:border-[#A96F43]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Brand & Model & Reg */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
            Motorcycle Brand *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Triumph, Royal Enfield, Ducati"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
            Model & Displacement *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Street Triple 765, Interceptor 650"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
            Registration Number
          </label>
          <input
            type="text"
            placeholder="e.g. AB12 CDE"
            value={formData.regNumber}
            onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
          2. Required Service / Diagnostic *
        </label>
        <select
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
          className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
        >
          {serviceOptions.map((srv) => (
            <option key={srv.slug} value={srv.slug}>
              {srv.title} — (From {srv.startingPrice})
            </option>
          ))}
          <option value="unspecified-repair">General Diagnostic & Inspection</option>
        </select>
      </div>

      {/* Preferred Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
            Preferred Date *
          </label>
          <input
            type="date"
            required
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
            Preferred Time Slot
          </label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
          >
            <option>Morning (08:00 - 11:00)</option>
            <option>Midday (11:00 - 14:00)</option>
            <option>Afternoon (14:00 - 17:00)</option>
          </select>
        </div>
      </div>

      {/* Pickup & Drop Option */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D] mb-1.5">
          Motorcycle Transport Van Pickup Required?
        </label>
        <div className="flex space-x-6 items-center pt-1">
          {["No", "Yes (Within 15km)"].map((opt) => (
            <label key={opt} className="flex items-center space-x-2 text-sm text-[#202321] cursor-pointer">
              <input
                type="radio"
                name="pickupDrop"
                checked={formData.pickupDrop.startsWith(opt.split(" ")[0])}
                onChange={() => setFormData({ ...formData, pickupDrop: opt })}
                className="accent-[#A96F43]"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="pt-2 border-t border-[#D8D1C5] space-y-4">
        <label className="block text-xs uppercase tracking-wider font-semibold text-[#17352D]">
          3. Contact Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-[#6E706B] mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
            />
          </div>
          <div>
            <label className="block text-xs text-[#6E706B] mb-1">Phone Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 86684 12375"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
            />
          </div>
          <div>
            <label className="block text-xs text-[#6E706B] mb-1">Email Address *</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-[#6E706B] mb-1">
            Additional Notes / Observed Symptoms
          </label>
          <textarea
            rows={3}
            placeholder="Please mention any abnormal engine noise, brake lever feel, chain slack, or specific requests..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-[#D8D1C5] text-sm text-[#202321] focus:outline-none focus:border-[#A96F43]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-[#17352D] hover:bg-[#23443A] text-white font-semibold text-xs uppercase tracking-widest border border-[#17352D] transition-all flex items-center justify-center space-x-2 group"
      >
        <span>Request Appointment via WhatsApp</span>
        <ArrowRight className="w-4 h-4 text-[#A96F43] group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
